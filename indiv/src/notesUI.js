import { saveNote, getNote } from './notesStorage.js';

export function setupNoteModal() {
    const modal = document.getElementById('noteModal');

    document.getElementById('daysGrid').addEventListener('click', (e) => {
        if (e.target.tagName === 'DIV' && e.target.textContent) {
            const date = e.target.dataset.date;
            document.getElementById('noteDate').textContent = date;
            document.getElementById('noteText').value = getNote(date) || '';
            modal.style.display = 'block';
        }
    });


    document.getElementById('saveNote').addEventListener('click', () => {
        const date = document.getElementById('noteDate').textContent;
        const text = document.getElementById('noteText').value;
        saveNote(date, text);
        modal.style.display = 'none';
    });


    document.querySelector('.close').addEventListener('click', () => {
        modal.style.display = 'none';
    });
}