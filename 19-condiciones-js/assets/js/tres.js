// Se debe construir una página con 3 select y opciones con dígitos del 1 al 9, al hacer click a la opción ingresar se debe verificar que el password sea 911 y en ese caso mostrar debajo del botón ingresar, un párrafo con el contenido "password 1 correcto", en caso de que el password sea 714 se debe mostrar en el párrafo "password 2 es correcto", si ingresa otro valor se debe mostrar "password incorrecto".

const checkPassword = () => {
  const n1 = document.querySelector('#num1').value;
  const n2 = document.querySelector('#num2').value;
  const n3 = document.querySelector('#num3').value;

  const password = n1 + n2 + n3;

  if (password === '911') {
    response.innerHTML = 'Password 1 correcto';
  } else if (password === '714') {
    response.innerHTML = 'Password 2 correcto';
  } else {
    response.innerHTML = 'Password incorrecto';
  }
};
