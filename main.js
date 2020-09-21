$(document).ready(function () {
    var table = $('#example').DataTable({
        responsive: true
    });

    new $.fn.dataTable.FixedHeader(table);
});

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

