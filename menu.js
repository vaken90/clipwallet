$(document).ready(function () {
  var $iconBar = $(".header__icon-bar");
  var $menu = $(".header__menu");

  $iconBar.click(function () {
    var isOpen = $menu.toggleClass("is-open").hasClass("is-open");
    $iconBar.attr("aria-expanded", String(isOpen));
  });
});
