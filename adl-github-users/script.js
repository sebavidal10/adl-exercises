const baseUrl = 'https://api.github.com/users';

const request = async (url) => {
  const results = await fetch(url);
  return results.json();
};

const getDataUser = async (u) => {
  const url = `${baseUrl}/${u}`;
  return request(url);
};

const getDataRepos = async (u, page = 1, perPage = 10) => {
  const url = `${baseUrl}/${u}/repos?page=${page}&per_page=${perPage}`;
  return request(url);
};

const cleanInfo = () => {
  $('#repositories').text('');
  $('.repos').text('');
  $('.username').html(`<i class="fas fa-user"></i>`);
  $('.avatar').attr(
    'src',
    'https://tanzolymp.com/images/default-non-user-no-photo-1.jpg'
  );
  $('#repositories').html('');
  $('.description h2').text('');
  $('.description div:nth-child(2) span:nth-child(1)').html(
    `<i class="fas fa-street-view"></i> `
  );
  $('.description div:nth-child(2) span:nth-child(2)').html(
    `<i class="fab fa-github"></i> </a>`
  );
  $('.description div:nth-child(3)').text('');
};

const goToPage = async (username, destinationPage) => {
  let repos = await getDataRepos(username, destinationPage);
  showRepos(repos);
};

const dibujarPaginador = (username, cant_repos, perPage) => {
  $('.pagination').html('');
  let paginas_totales = Math.ceil(cant_repos / perPage);
  for (let i = 1; i <= paginas_totales; i++) {
    $('.pagination').append(
      `<li class="page-item" role="button"><span class="page-link">${i}</span></li>`
    );
  }
  $('.page-item').on('click', function () {
    goToPage(username, $(this).text());
  });
};

const showResults = (uData) => {
  $('.username').html(`<i class="fas fa-user"></i> ${uData.login}`);
  $('.avatar').attr('src', uData.avatar_url);
  $('.repos').text(uData.public_repos);
  $('.description h2').text(uData.name);
  $('.description div:nth-child(2) span:nth-child(1)').html(
    `<i class="fas fa-street-view"></i> ${uData.location}`
  );
  $('.description div:nth-child(2) span:nth-child(2)').html(
    `<i class="fab fa-github"></i> <a href="${uData.html_url}" target="_blank"> ${uData.login}</a>`
  );
  $('.description div:nth-child(3)').text(uData.bio);
};

const showRepos = (rData) => {
  $('#repositories').html('');
  for (let repo of rData) {
    $('#repositories').append(
      `<div class="col shadow p-3 m-1"><a href="${repo.html_url}" target="_blank">${repo.name}</a></div>`
    );
  }
};

$(function () {
  $('.btn-search').on('click', function () {
    cleanInfo();
    const user = $('#username').val();

    Promise.all([getDataUser(user), getDataRepos(user)])
      .then((data) => {
        const [userData, reposData] = data;
        if (userData.message === 'Not Found') {
          alert('User Not Found');
        } else {
          showResults(userData);
          showRepos(reposData);
          dibujarPaginador(userData.login, userData.public_repos, 10);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
