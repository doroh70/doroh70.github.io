document.addEventListener('DOMContentLoaded', function () {
    var collapseAbout = document.getElementById('collapseAboutTab');
    var collapseInterests = document.getElementById('collapseInterestsTab');

    collapseAbout.addEventListener('show.bs.collapse', function () {
        var bsCollapseInterests = new bootstrap.Collapse(collapseInterests, {
            toggle: false
        });
        bsCollapseInterests.hide();
    });

    collapseInterests.addEventListener('show.bs.collapse', function () {
        var bsCollapseAbout = new bootstrap.Collapse(collapseAbout, {
            toggle: false
        });
        bsCollapseAbout.hide();
    });
});