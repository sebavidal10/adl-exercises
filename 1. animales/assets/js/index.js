import { Leon, Lobo, Oso, Serpiente, Aguila } from './classes/Tipos.js';
import animalesData from './Animales.js';
const createAnimal = (dataAnimal) => {
  const tempAnimal = {
    Leon: new Leon(
      dataAnimal.name,
      document.getElementById('edad').value,
      dataAnimal.imagen,
      document.getElementById('comentarios').value,
      dataAnimal.sonido
    ),
    Lobo: new Lobo(
      dataAnimal.name,
      document.getElementById('edad').value,
      dataAnimal.imagen,
      document.getElementById('comentarios').value,
      dataAnimal.sonido
    ),
    Oso: new Oso(
      dataAnimal.name,
      document.getElementById('edad').value,
      dataAnimal.imagen,
      document.getElementById('comentarios').value,
      dataAnimal.sonido
    ),
    Serpiente: new Serpiente(
      dataAnimal.name,
      document.getElementById('edad').value,
      dataAnimal.imagen,
      document.getElementById('comentarios').value,
      dataAnimal.sonido
    ),
    Aguila: new Aguila(
      dataAnimal.name,
      document.getElementById('edad').value,
      dataAnimal.imagen,
      document.getElementById('comentarios').value,
      dataAnimal.sonido
    ),
  };
  return tempAnimal[dataAnimal.name];
};
const getAnimal = async (animal) => {
  const data = await animalesData.getData();
  return createAnimal(data.animales.find((item) => item.name === animal));
};

const createGallery = () => {
  const gallery = document.createElement('div');
  gallery.id = 'gallery';
  gallery.className = 'row w-100';
  document.getElementById('Animales').appendChild(gallery);
};

const addCardGallery = (card) => {
  let containerImages = document.getElementById('Animales');
  if (containerImages.innerHTML === '') {
    createGallery();
  }
  document.getElementById('gallery').appendChild(card);
};

const showModal = (currentAnimal) => {
  document.querySelector('#exampleModal .modal-body').innerHTML = '';

  const img = document.createElement('img');
  img.src = `/assets/imgs/${currentAnimal.imagen}`;
  img.className = 'img-fluid mb-2';
  document.querySelector('#exampleModal .modal-body').appendChild(img);

  const edad = document.createElement('p');
  edad.innerHTML = `${currentAnimal.edad}<br/>Comentarios<br/>`;
  document.querySelector('#exampleModal .modal-body').appendChild(edad);

  const comentarios = document.createElement('p');
  comentarios.innerHTML += currentAnimal.comentarios;
  document.querySelector('#exampleModal .modal-body').appendChild(comentarios);

  $('#exampleModal').modal('show');
};

const createCardWithImage = (currentAnimal) => {
  const divCard = document.createElement('div');
  divCard.className = 'col-4 mb-3';

  const div = document.createElement('div');
  div.className = 'card p-0 shadow';

  const img = document.createElement('img');
  img.src = `/assets/imgs/${currentAnimal.imagen}`;
  img.className = 'card-img-top';
  img.setAttribute('role', 'button');
  img.onclick = () => {
    showModal(currentAnimal);
  };

  const btnPlay = document.createElement('div');
  btnPlay.className = 'card-body bg-secondary p-2';
  const imgAudio = document.createElement('img');
  imgAudio.src = '/assets/imgs/audio.svg';
  imgAudio.className = 'img-fluid';
  imgAudio.setAttribute('role', 'button');
  btnPlay.appendChild(imgAudio);

  btnPlay.onclick = () => {
    playSound(currentAnimal.sonido);
  };

  div.appendChild(img);
  div.appendChild(btnPlay);

  divCard.appendChild(div);
  return divCard;
};

const playSound = (sonido) => {
  let btnAudio = document.querySelector('audio');
  btnAudio.src = `/assets/sounds/${sonido}`;
  btnAudio.play();
};

const validarFormulario = () =>
  $('#animal').val() && $('#edad').val() && $('#comentarios').val();

$(document).ready(function () {
  document.getElementById('animal').addEventListener('change', async (e) => {
    const animal = e.target.value;
    const animalSelected = await getAnimal(animal);
    document.getElementById(
      'preview'
    ).style.backgroundImage = `url('/assets/imgs/${animalSelected.imagen}')`;
  });

  document
    .getElementById('btnRegistrar')
    .addEventListener('click', async (e) => {
      if (validarFormulario()) {
        const animal = document.getElementById('animal').value;
        const animalSelected = await getAnimal(animal);
        const cardWithImage = createCardWithImage(animalSelected);
        addCardGallery(cardWithImage);
      } else {
        alert('Por favor, llene todos los campos');
      }
    });
});
