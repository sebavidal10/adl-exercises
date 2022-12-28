const urlApi = `https://mindicador.cl/api`;
const filterCurrencies = ['dolar', 'euro', 'uf', 'utm'];
const selectWithCurrencies = document.querySelector('#currency');
const divResult = document.querySelector('#result');

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const calcResult = (amount) =>
  `$ ${(amount / selectWithCurrencies.value).toFixed(2)}`;

// Obtener las monedas desde la API
const getCurrencies = async () => {
  try {
    const reqCurrencies = await fetch(urlApi);
    const resData = await reqCurrencies.json();

    // obtener el codigo de las monedas
    const currencyList = filterCurrencies.map((currency) => {
      return {
        code: resData[currency].codigo,
        value: resData[currency].valor,
      };
    });

    // mostrar las monedas en el select
    currencyList.forEach((localCurrency) => {
      const selectOption = document.createElement('option');
      selectOption.value = localCurrency.value;
      selectOption.text = capitalize(localCurrency.code);
      selectWithCurrencies.appendChild(selectOption);
    });
  } catch (error) {
    console.log(error);
    alert('Error al obtener el listado de monedas');
  }
};

// dibujar el grafico
const drawChart = async () => {
  try {
    const currency =
      selectWithCurrencies.options[
        selectWithCurrencies.selectedIndex
      ].text.toLowerCase();

    const reqChart = await fetch(`${urlApi}/${currency}`);
    const dataChart = await reqChart.json();

    const serieToChart = dataChart.serie.slice(0, 10).reverse();

    // creacion del grafico
    const data = {
      labels: serieToChart.map((item) => item.fecha.substring(0, 10)),
      datasets: [
        {
          label: currency,
          data: serieToChart.map((item) => item.valor),
        },
      ],
    };
    const config = {
      type: 'line',
      data: data,
    };

    const chartDOM = document.querySelector('#chart');
    new Chart(chartDOM, config);
    chartDOM.classList.remove('d-none');
  } catch (error) {
    alert('Error al obtener la data para el grafico');
    console.log(error);
  }
};

// llamar a la funcion al hacer click en el boton
document.querySelector('#btnConvert').addEventListener('click', () => {
  const amountPesos = document.querySelector('#pesos').value;
  if (amountPesos === '') {
    alert('Debes ingresar una cantidad de pesos');
    return;
  }

  divResult.innerHTML = calcResult(amountPesos);
  drawChart();
});

getCurrencies();
