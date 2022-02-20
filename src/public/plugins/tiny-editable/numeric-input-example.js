/* global $ */
/* this is an example for validation and change events */
$.fn.numericInputExample = function () {
  const element = $(this);
  const footer = element.find('tfoot tr');
  const dataRows = element.find('tbody tr');
  const initialTotal = function () {
    let column; let
      total;
    for (column = 1; column < footer.children().size(); column++) {
      total = 0;
      dataRows.each(function () {
        const row = $(this);
        total += parseFloat(row.children().eq(column).text());
      });
      footer.children().eq(column).text(total);
    }
  };
  element.find('td').on('change', function (evt) {
    const cell = $(this);
    const column = cell.index();
    let total = 0;
    if (column === 0) {
      return;
    }
    element.find('tbody tr').each(function () {
      const row = $(this);
      total += parseFloat(row.children().eq(column).text());
    });
    if (column === 1 && total > 5000) {
      $('.alert').show();
      return false; // changes can be rejected
    }
    $('.alert').hide();
    footer.children().eq(column).text(total);
  }).on('validate', function (evt, value) {
    const cell = $(this);
    const column = cell.index();
    if (column === 0) {
      return !!value && value.trim().length > 0;
    }
    return !isNaN(parseFloat(value)) && isFinite(value);
  });
  initialTotal();
  return this;
};
