const modal = $('#modal');
const value = modal.find('#value');

modal.find('#type').change((e) => {
  if(e.target.value === 'custo')
    value.css('display', 'block');
  else
    value.css('display', 'none');
});

function showModal() {
  modal.find('form')[0].reset();
  value.css('display', 'none');
  modal.modal();
}
$('#calendar-header-button').click(showModal);

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

let months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

let monthAndYear = document.getElementById('monthAndYear');
showCalendar(currentMonth, currentYear);

function next() {
  currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
  currentMonth = (currentMonth + 1) % 12;
  showCalendar(currentMonth, currentYear);
}

function previous() {
  currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
  currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {
  let firstDay = new Date(year, month).getDay();
  let daysInMonth = 32 - new Date(year, month, 32).getDate();

  let tableBody = document.getElementById('calendar-body'); // body of the calendar

  // clearing all previous cells
  tableBody.innerHTML = '';

  // filing data about month and in the page via DOM.
  monthAndYear.innerHTML = months[month] + ' ' + year;

  // creating all cells
  let date = 1;
  for (let i = 0; i < 6; i++) {
    // creates a table row
    let row = document.createElement('tr');

    //creating individual cells, filing them up with data.
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        let cell = document.createElement('td');
        let cellText = document.createTextNode('');
        cell.appendChild(cellText);
        row.appendChild(cell);
      } else if (date > daysInMonth) {
        break;
      } else {
        let cell = document.createElement('td');
        let cellText = document.createTextNode(date);
        if (
          date === today.getDate() &&
          year === today.getFullYear() &&
          month === today.getMonth()
        ) {
          cell.classList.add('bg-info');
        } // color today's date

        const day = document.createElement('span');
        day.classList.add('day');
        day.appendChild(cellText);
        cell.appendChild(day);

        cell.onclick = function () {
          showModal();
          modal.find('#modal-date').val(`${year}-${month + 1}-${this.day}T12:00`);
        }.bind({ day: String(date).padStart(2, '0') });

        row.appendChild(cell);
        date++;
      }
    }

    tableBody.appendChild(row); // appending each row into calendar body.
  }
}
