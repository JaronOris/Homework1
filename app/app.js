function initUrlListener() {
  $(window).on("hashchange", changeRoute);
}

$(document).ready(function () {
  initUrlListener();
  changeRoute();
});
