/*
 Template Name: Admiry - Bootstrap 4 Admin Dashboard
 Author: Themesdesign
 Website: www.themesdesign.in
 File: Rating init
 */

$(() => {
  $('input.check').on('change', function () {
    alert(`Rating: ${$(this).val()}`);
  });
  $('.rating-tooltip').rating({
    extendSymbol(rate) {
      $(this).tooltip({
        container: 'body',
        placement: 'bottom',
        title: `Rate ${rate}`,
      });
    },
  });
  $('.rating-tooltip-manual').rating({
    extendSymbol() {
      let title;
      $(this).tooltip({
        container: 'body',
        placement: 'bottom',
        trigger: 'manual',
        title() {
          return title;
        },
      });
      $(this).on('rating.rateenter', function (e, rate) {
        title = rate;
        $(this).tooltip('show');
      })
        .on('rating.rateleave', function () {
          $(this).tooltip('hide');
        });
    },
  });
  $('.rating').each(function () {
    $('<span class="label label-default"></span>')
      .text($(this).val() || ' ')
      .insertAfter(this);
  });
  $('.rating').on('change', function () {
    $(this).next('.label').text($(this).val());
  });
});
