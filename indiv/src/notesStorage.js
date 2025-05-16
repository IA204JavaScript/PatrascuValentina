const notes = {};

export function loadNotes() {
    const savedNotes = localStorage.getItem('calendarNotes');
    if (savedNotes) {
        Object.assign(notes, JSON.parse(savedNotes));
    }
}

export function saveNote(date, text) {
    if (text.trim()) {
        notes[date] = text;
    } else {
        delete notes[date];
    }
    localStorage.setItem('calendarNotes', JSON.stringify(notes));
}

export function getNote(date) {
    return notes[date];
}