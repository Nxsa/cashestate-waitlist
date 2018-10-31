$(document).ready(function () {
    $('.overview-table').DataTable({
        lengthChange: false,
        info: false,
        paging: false,
        pageLength: 8,
        ordering: false,
        autoWidth: false,
    });
    $('.table-full').DataTable({
        lengthChange: false,
        pageLength: 16,
        pagingType: 'numbers',
        ordering: false,
        autoWidth: false,
    });
});


var menuCollapse = function () {
    sidebar.classList.toggle("sidebar--toggle");
};
var sidenav = document.getElementsByClassName("svg--nav")[0];
var sidebar = document.getElementsByClassName("sidebar")[0];
var toggleClose = document.getElementsByClassName("dashboard")[0];

sidenav.addEventListener("click", menuCollapse);
toggleClose.addEventListener("click", function () {
    sidebar.classList.remove("sidebar--toggle");
});