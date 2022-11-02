document.write('<div class="container mt-3">');
// Agregamos la img del logo de ADL desde un src remoto
document.write(
  '<img src="https://desafiolatam.com/assets/home/logo-academia-bla-790873cdf66b0e681dfbe640ace8a602f5330bec301c409744c358330e823ae3.png" alt="logo ADL" class="float-right" />'
);
document.write('<h1>Notas Finales</h1>');

// Obtenemos información del alumno y de la carrera
var nombre = prompt('Ingrese su nombre', 'Jon');
var apellido = prompt('Ingrese su apellido', 'Doe');
var carrera = prompt('Ingrese su carrera', 'Fullstack Js');

// Desplegamos la ficha del alumno
document.write('<dl class="row">');
document.write('<dt class="col-2 p-0">Nombre:</dt>');
document.write('<dd class="col-10">' + nombre + ' ' + apellido + '</dd>');
document.write('<dt class="col-2 p-0">Carrera:</dt>');
document.write('<dd class="col-10">' + carrera + '</dd>');
document.write('</dl>');

// Creamos una tabla con las notas
document.write('<table class="table">');
document.write('<thead class="thead-dark">');
document.write('<tr>');
document.write('<th scope="col">Ramo</th>');
document.write('<th scope="col" class="text-right">Nota 1</th>');
document.write('<th scope="col" class="text-right">Nota 2</th>');
document.write('<th scope="col" class="text-right">Nota 3</th>');
document.write('<th scope="col" class="text-right">Promedio</th>');
document.write('</tr>');
document.write('</thead>');
document.write('<tbody>');

// Obtenemos las notas de cada ramo
// Nota 1
var ramo_1 = prompt('Ingrese el ramo 1', 'Html');
var r1_nota_1 = prompt('Ingrese la nota 1 [' + ramo_1 + ']', '6.8');
var r1_nota_2 = prompt('Ingrese la nota 2 [' + ramo_1 + ']', '4.5');
var r1_nota_3 = prompt('Ingrese la nota 3 [' + ramo_1 + ']', '5');
// Calcular el promedio de notas
var r1_promedio = (+r1_nota_1 + +r1_nota_2 + +r1_nota_3) / 3;

document.write('<tr>');
document.write('<th scope="row">' + ramo_1 + '</th>');
document.write('<td class="text-right">' + r1_nota_1 + '</td>');
document.write('<td class="text-right">' + r1_nota_2 + '</td>');
document.write('<td class="text-right">' + r1_nota_3 + '</td>');
document.write('<td class="text-right">' + r1_promedio.toFixed(2) + '</td>');
document.write('</tr>');

// Nota 2
var ramo_2 = prompt('Ingrese el ramo 2', 'Css');
var r2_nota_1 = prompt('Ingrese la nota 1 [' + ramo_2 + ']', '6');
var r2_nota_2 = prompt('Ingrese la nota 2 [' + ramo_2 + ']', '7');
var r2_nota_3 = prompt('Ingrese la nota 3 [' + ramo_2 + ']', '5.1');
// Calcular el promedio de notas
var r2_promedio = (+r2_nota_1 + +r2_nota_2 + +r2_nota_3) / 3;

document.write('<tr>');
document.write('<th scope="row">' + ramo_2 + '</th>');
document.write('<td class="text-right">' + r2_nota_1 + '</td>');
document.write('<td class="text-right">' + r2_nota_2 + '</td>');
document.write('<td class="text-right">' + r2_nota_3 + '</td>');
document.write('<td class="text-right">' + r2_promedio.toFixed(2) + '</td>');
document.write('</tr>');

// Nota 3
var ramo_3 = prompt('Ingrese el ramo 3', 'Js');
var r3_nota_1 = prompt('Ingrese la nota 1 [' + ramo_3 + ']', '3.5');
var r3_nota_2 = prompt('Ingrese la nota 2 [' + ramo_3 + ']', '5');

// Solicitamos la nota de aprobacion y calculamos la nota requerida para aprobar
var notaAprobacion = prompt('Ingrese la nota de aprobación', '4');
var n3 = +notaAprobacion * 3 - (+r3_nota_1 + +r3_nota_2);

document.write('<tr>');
document.write('<th scope="row">' + ramo_3 + '</th>');
document.write('<td class="text-right">' + r3_nota_1 + '</td>');
document.write('<td class="text-right">' + r3_nota_2 + '</td>');
document.write('<td class="text-right">-</td>');
document.write('<td class="text-right">-</td>');
document.write('</tr>');

document.write('</tbody>');
document.write('</table>');

// Se agrega el nota que indica la calificacion necesaria para aprobar en la 3era asignatura
document.write(
  '<p>Para aprobar el ramo <b>' +
    ramo_3 +
    '</b> con nota <b>' +
    notaAprobacion +
    '</b>, necesitas obtener un ' +
    n3 +
    ' en la nota 3</p>'
);

document.write('</div>');
