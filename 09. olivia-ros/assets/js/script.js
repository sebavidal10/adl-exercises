$(function () {
  $('a').click(function (event) {
    console.log(this.hash);
    if (this.hash !== '') {
      event.preventDefault();

      $('html, body').animate(
        {
          scrollTop: $(this.hash).offset().top,
        },
        800
      );
    }
  });

  $('[data-toggle="popover"]').popover();
});
