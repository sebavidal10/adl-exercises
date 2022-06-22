$('#loader').hide();

const drawChart = (dataPokemon) => {
  let config = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: 'Estadisticas',
    },
    data: [
      {
        dataPoints: dataPokemon,
      },
    ],
  };
  var chart = new CanvasJS.Chart('divChart', config);
  chart.render();
};

const clearResult = () => {
  $('#pokemonInfo p:first').html(``);
  $('#pokemonInfo img').attr('src', '');
  $('#pokemonInfo p span').html(``);

  $('#divChart').empty();
};

const getDataPokemonAndDraw = (pokemon) => {
  $.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/${pokemon}/`,
    method: 'GET',
    dataType: 'json',
    success: function (data) {
      $('#pokemonInfo p:first').html(`<b>${data.name.toUpperCase()}</b>`);
      $('#pokemonInfo img').attr(
        'src',
        data.sprites.other.dream_world.front_default
      );
      $('#pokemonInfo p span').html(`Peso: ${data.weight} kg`);

      const dataPokemon = data.stats.map((stat) => {
        return {
          label: stat.stat.name,
          y: stat.base_stat,
        };
      });

      drawChart(dataPokemon);
    },
    complete: function () {
      $('#loader').hide();
    },
    error: function (error) {
      console.log(error);
      alert('Ups!, ocurrio un error :)');
      $('#inputPokemon').val('');
    },
  });
};

$(document).ready(function () {
  $('form').submit(function (e) {
    e.preventDefault();
    let pokemon = $('#inputPokemon').val();
    $('#loader').show();
    clearResult();
    getDataPokemonAndDraw(pokemon);
  });
});
