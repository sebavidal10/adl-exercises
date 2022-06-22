$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $('#enviarCorreo').click(function () {
    alert('El correo fue enviado correctamente...');
  });

  $('body').on('dblclick', 'u', function () {
    $(this).css('color') == 'rgb(55, 58, 60)'
      ? $(this).css('color', 'red')
      : $(this).css('color', 'rgb(55, 58, 60)');
  });

  $('.card-title').click(function () {
    $('.card-text').toggle();
  });
});
