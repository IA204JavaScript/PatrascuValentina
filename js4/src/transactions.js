export let transactions = [];

export function addTransaction(transaction) {
    transactions.push(transaction);
}

export function removeTransaction(id) {
    transactions = transactions.filter(transaction => transaction.id !== id);
}

export function getTotal() {
    return transactions.reduce((total, transaction) => total + transaction.amount, 0);
}