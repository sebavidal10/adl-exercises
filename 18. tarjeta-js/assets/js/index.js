const calcular = () => {
  // definimos constantes para almacenar los valores de los inputs
  const cantidad = document.querySelector('#cantidad').value;
  const color = document.querySelector('#color').value;
  const precio = document.querySelector('#precio').innerHTML;

  if (cantidad != '' && color != '') {
    // escribimos los resultados en base a los inputs
    document.querySelector('#resumen_total').innerHTML = cantidad * precio;
    document.querySelector('#resumen_cantidad').innerHTML = cantidad;
    document.querySelector('#resumen_color').style.backgroundColor = color;
  } else {
    alert('la cantidad y el color son obligatorios');
  }
};

// Agregamos un listener que escucha el evento "click", y cuando ocurre llama a la función "calcular"
document.querySelector('#btn').addEventListener('click', calcular);
