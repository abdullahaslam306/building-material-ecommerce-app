/*
 Template Name: Admiry - Bootstrap 4 Admin Dashboard
 Author: Themesdesign
 Website: www.themesdesign.in
 File: Animation demo js
 */

function testAnim(x) {
  $('#animationSandbox').removeClass().addClass(`${x} animated`).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
    $(this).removeClass();
  });
}

$(document).ready(() => {
  $('.js--triggerAnimation').click((e) => {
    e.preventDefault();
    const anim = $('.js--animations').val();
    testAnim(anim);
  });

  $('.js--animations').change(function () {
    const anim = $(this).val();
    testAnim(anim);
  });
});
