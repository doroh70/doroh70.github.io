// toggle-collapse.js
$(document).ready(function () {
    $('#collapseAboutTab').on('show.bs.collapse', function () {
      $('#collapseInterestsTab').collapse('hide');
    });
    $('#collapseInterestsTab').on('show.bs.collapse', function () {
      $('#collapseAboutTab').collapse('hide');
    });
});