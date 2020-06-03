/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */


function highlight(table) {
  if (!table) {
    console.log('It is not table');
  }
  let tableRows = table.querySelector('tbody').querySelectorAll('tr');

  for (let i = 0; i < tableRows.length; i++) {
    let status = tableRows[i].cells[3];
    if (!status.getAttribute('data-available')) {
      tableRows[i].hidden = true;
    } else {
      status.dataset.available === "false" ? tableRows[i].classList.add('unavailable') : tableRows[i].classList.add('available');
    };
    let gender = tableRows[i].cells[2];
    gender.textContent === 'm' ? tableRows[i].classList.add('male') : tableRows[i].classList.add('female');
    let age = tableRows[i].cells[1];
    if (parseInt(age.textContent) < 18) tableRows[i].style.textDecoration = "line-through";
  };
};
