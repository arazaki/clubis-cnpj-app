import moment from 'moment';

// Get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const purchaseDateMoment = moment(expense.purchaseDate);
        const startDateMatch = startDate ? startDate.isSameOrBefore(purchaseDateMoment, 'day') : true ;
        const endDateMatch = endDate ? endDate.isSameOrAfter(purchaseDateMoment, 'day') : true;
        const textMatch = expense.clientDocument.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy ===  'date') {
            return a.purchaseDate < b.purchaseDate ? 1 : -1;
        } else if(sortBy === 'amount') {
            return a.total < b.total ? 1 : -1;
        }
    });
};