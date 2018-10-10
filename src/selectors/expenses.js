import moment from 'moment';

//const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createdMomentAt = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdMomentAt, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdMomentAt, 'day') : true;
        // const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        // const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};