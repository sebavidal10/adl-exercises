// Obtenemos información del alumno y de la carrera
var nombre = prompt('Ingrese su nombre', 'Jon');
var apellido = prompt('Ingrese su apellido', 'Doe');
var carrera = prompt('Ingrese su carrera', 'Fullstack Js');

$('#nombreCompleto').html(nombre + ' ' + apellido);
$('#carrera').html(carrera);

// Obtenemos asignaturas (solo 3) y notas y vamos dibujando la tabla
for (var i = 0; i < 3; i++) {
  var sumaNotas = 0;

  var asignatura = prompt(
    'Ingrese el nombre de la asignatura ' + (i + 1),
    'Nombre Asignatura ' + (i + 1)
  );
  var tr = '<th class="text-left">' + asignatura + '</th>';

  var promedio = '-';
  for (var j = 0; j < 3; j++) {
    var nota = '-';
    if (i != 2 || j != 2) {
      nota = prompt(
        'Ingrese la nota ' + (j + 1) + ' de la asignatura ' + (i + 1),
        7
      );
      sumaNotas += +nota;
    }
    tr += '<td>' + nota + '</td>';
  }
  promedio = (sumaNotas / 3).toFixed(2);
  tr += '<td>' + promedio + '</td>';

  $('.table tbody').append('<tr>' + tr + '</tr>');
}

var notaAprobacion = prompt('Ingrese la nota de aprobación', '4');
var notaNecesaria = +notaAprobacion * 3 - sumaNotas;
$('#notaAprobacion').html(notaAprobacion);
$('#notaMinima').html(notaNecesaria);
