import { addTransaction as addToTransactions } from './transactions.js';
import { renderTransaction, setupTableEvents, updateTotal } from './ui.js';
import { generateId, formatDate } from './utils.js';

const form = document.getElementById('transactionForm');

function addTransaction(event) {
    event.preventDefault();
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;

    const transaction = {
        id: generateId(),
        date: new Date(),
        amount,
        category,
        description
    };
    addToTransactions(transaction);
    renderTransaction(transaction);
    form.reset();
}
form.addEventListener('submit', addTransaction);
setupTableEvents();
updateTotal();