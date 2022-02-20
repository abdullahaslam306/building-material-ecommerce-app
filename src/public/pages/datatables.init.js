/*
 Template Name: Admiry - Bootstrap 4 Admin Dashboard
 Author: Themesdesign
 Website: www.themesdesign.in
 File: Datatable js
 */

$(document).ready(() => {
  $('#datatable').DataTable();

  // Buttons examples
  const table = $('#datatable-buttons').DataTable({
    lengthChange: false,
    buttons: ['copy', 'excel', 'pdf', 'colvis'],
  });

  table.buttons().container()
    .appendTo('#datatable-buttons_wrapper .col-md-6:eq(0)');
});
