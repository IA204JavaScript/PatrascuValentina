

export function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDay = (firstDay.getDay() + 6) % 7;

    const daysGrid = document.getElementById('daysGrid');
    daysGrid.innerHTML = '';

    document.getElementById('currentMonth').textContent =
        date.toLocaleString('ru-RU', { month: 'long', year: 'numeric' });

    for (let i = 0; i < startDay; i++) {
        daysGrid.appendChild(document.createElement('div'));
    }

    for (let day = 1; day <= lastDay.getDate(); day++) {
        const dayElement = document.createElement('div');
        dayElement.textContent = day;
        dayElement.dataset.date = `${year}-${month+1}-${day}`;
        daysGrid.appendChild(dayElement);
    }
}