
export default (expenses) => {
    return expenses.map((expense) => expense.amount).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};


/*export default (expenses) => {
    if (expenses.length === 0) {
        return 0;
    } else if (expenses.length === 1) {
        const amounts = expenses.map((expense) => expense.amount);

        return amounts[0]
    } else {
        const amounts = expenses.map((expense) => {
            return expense.amount;
        });

        return amounts.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }
};*/