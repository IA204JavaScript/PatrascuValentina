import { transactions, removeTransaction } from './transactions.js';
import { getTotal } from './transactions.js';
import { shortenDescription, formatDate } from './utils.js';
const tableBody = document.querySelector('#transactionsTable tbody');
const totalElement = document.getElementById('total');
const detailsElement = document.getElementById('transactionDetails');
export function renderTransaction(transaction) {
    const row = document.createElement('tr');
    row.className = transaction.amount >= 0 ? 'income' : 'expense';
    row.dataset.id = transaction.id;

    row.innerHTML = `
        <td>${formatDate(transaction.date)}</td>
        <td>${transaction.category}</td>
        <td>${shortenDescription(transaction.description)}</td>
        <td><button class="delete-btn">Delete</button></td>
    `;

    tableBody.appendChild(row);

    row.addEventListener('click', (e) => {
        if (!e.target.classList.contains('delete-btn')) {
            showTransactionDetails(transaction);
        }
    });

    updateTotal();
}

function showTransactionDetails(transaction) {
    detailsElement.innerHTML = `
        <h3>Transaction Details</h3>
        <p><strong>Date:</strong> ${formatDate(transaction.date)}</p>
        <p><strong>Amount:</strong> $${transaction.amount}</p>
        <p><strong>Category:</strong> ${transaction.category}</p>
        <p><strong>Description:</strong> ${transaction.description}</p>
    `;
}

export function updateTotal() {
    const total = getTotal();
    totalElement.textContent = `Total: $${total}`;
}

export function setupTableEvents() {
    document.querySelector('#transactionsTable').addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const row = e.target.closest('tr');
            const id = row.dataset.id;
            removeTransaction(id);
            row.remove();
            updateTotal();
            detailsElement.innerHTML = '';
        }
    });
}