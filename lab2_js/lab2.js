const transactions = [

        {
            transaction_id: "1",
            transaction_date: "2019-01-01",
            transaction_amount: 100.0,
            transaction_type: "debit",
            transaction_description: "Payment for groceries",
            merchant_name: "SuperMart",
            card_type: "Visa",
        },
        {
            transaction_id: "2",
            transaction_date: "2019-01-02",
            transaction_amount: 50.0,
            transaction_type: "credit",
            transaction_description: "Refund for returned item",
            merchant_name: "OnlineShop",
            card_type: "MasterCard",
        },
        {
            transaction_id: "3",
            transaction_date: "2019-01-03",
            transaction_amount: 75.0,
            transaction_type: "debit",
            transaction_description: "Dinner with friends",
            merchant_name: "RestaurantABC",
            card_type: "Amex",
        },
        {
            transaction_id: "4",
            transaction_date: "2019-01-04",
            transaction_amount: 120.0,
            transaction_type: "debit",
            transaction_description: "Shopping at Mall",
            merchant_name: "FashionStoreXYZ",
            card_type: "Discover",
        },
    ];

const getUniqueTransactionTypes = (transactions) => {
    return [...new Set(transactions.map(t => t.transaction_type))];
};

const calculateTotalAmount = (transactions) => {
    return transactions.reduce((sum, t) => sum + t.transaction_amount, 0);
};

const getTransactionByType = (transactions, type) => {
    return transactions.filter(t => t.transaction_type === type);
};

const getTransactionsInDateRange = (transactions, startDate, endDate) => {
    return transactions.filter(t => {
        if (t.transaction_date < startDate) {
            return false;
        }
        else if (t.transaction_date > endDate) {
            return false;
        }
        return true;
    });
};


const getTransactionsByMerchant = (transactions, merchantName) => {
    return transactions.filter(t => t.merchant_name === merchantName);
};


const calculateAverageTransactionAmount = (transactions) => {
    if (transactions.length === 0) {
        return 0;
    }
    else {
        return calculateTotalAmount(transactions) / transactions.length;
    }
};


const getTransactionsByAmountRange = (transactions, minAmount, maxAmount) => {
    return transactions.filter(t => {
        if (t.transaction_amount >= minAmount) {
            return t.transaction_amount <= maxAmount;
        }
        return false;
    });
};


const calculateTotalDebitAmount = (transactions) => {
    return calculateTotalAmount(getTransactionByType(transactions, "debit"));
};


const findMostTransactionsMonth = (transactions) => {
    const countByMonth = {};
    transactions.forEach(t => {
        const month = t.transaction_date.slice(0, 7);
        if (countByMonth[month]) {
            countByMonth[month] += 1;
        } else {
            countByMonth[month] = 1;
        }
    });

    let mostTransactionsMonth = Object.keys(countByMonth)[0];

    Object.keys(countByMonth).forEach(month => {
        if (countByMonth[month] > countByMonth[mostTransactionsMonth]) {
            mostTransactionsMonth = month;
        }
    });

    return mostTransactionsMonth;
};


const findMostDebitTransactionMonth = (transactions) => {
    return findMostTransactionsMonth(getTransactionByType(transactions, "debit"));
};

const mostTransactionTypes = (transactions) => {
    const debitCount = getTransactionByType(transactions, "debit").length;
    const creditCount = getTransactionByType(transactions, "credit").length;

    if (debitCount > creditCount) {
        return "debit";
    } else if (creditCount > debitCount) {
        return "credit";
    } else {
        return "equal";
    }
};

const getTransactionsBeforeDate = (transactions, date) => {
    return transactions.filter(t => t.transaction_date < date);
};

const findTransactionById = (transactions, id) => {
    const transaction = transactions.find(t => t.transaction_id === id);
    if (transaction) {
        return transaction;
    } else {
        return null;
    }
};

const mapTransactionDescriptions = (transactions) => {
    return transactions.map(t => t.transaction_description);
};

console.log("Testing getUniqueTransactionTypes:", getUniqueTransactionTypes(transactions));

console.log("Testing calculateTotalAmount:", calculateTotalAmount(transactions));

console.log("Testing getTransactionByType (debit):", getTransactionByType(transactions, "debit"));
console.log("Testing getTransactionByType (credit):", getTransactionByType(transactions, "credit"));
const transactionComparison = mostTransactionTypes(transactions);

console.log("Testing getTransactionByType (equal cases check):", transactionComparison);

console.log("Testing getTransactionsInDateRange (2019-01-02 to 2019-01-03):", getTransactionsInDateRange(transactions, "2019-01-02", "2019-01-03"));

console.log("Testing getTransactionsByMerchant (SuperMart):", getTransactionsByMerchant(transactions, "SuperMart"));

console.log("Testing calculateAverageTransactionAmount:", calculateAverageTransactionAmount(transactions));

const minAmount = parseFloat(prompt("Введите минимальное значение суммы:"));
const maxAmount = parseFloat(prompt("Введите максимальное значение суммы:"));
console.log(`Testing getTransactionsByAmountRange (${minAmount} to ${maxAmount}):`, getTransactionsByAmountRange(transactions, minAmount, maxAmount));

console.log("Testing calculateTotalDebitAmount:", calculateTotalDebitAmount(transactions));

console.log("Testing findMostTransactionsMonth:", findMostTransactionsMonth(transactions));

console.log("Testing findMostDebitTransactionMonth:", findMostDebitTransactionMonth(transactions));

console.log("Testing mostTransactionTypes (should return debit, credit, or equal):", mostTransactionTypes(transactions));

const userId = prompt("Введите ID транзакции:");
console.log("Testing findTransactionById:", findTransactionById(transactions, userId));

console.log("Testing getTransactionsBeforeDate (2019-01-03):", getTransactionsBeforeDate(transactions, "2019-01-03"));

console.log("Testing mapTransactionDescriptions:", mapTransactionDescriptions(transactions));
