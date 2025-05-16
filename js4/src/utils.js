export function generateId() {
    return Date.now().toString();
}

export function formatDate(date) {
    return date.toLocaleString();
}

export function shortenDescription(description) {
    const words = description.split(' ');
    return words.slice(0, 4).join(' ');
}