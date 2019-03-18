import moment from 'moment';

// Get visible sales
export default (sales, { text, sortBy, startDate, endDate }) => {
    return sales.filter((sale) => {
        const purchaseDateMoment = moment(sale.purchaseDate);
        const startDateMatch = startDate ? startDate.isSameOrBefore(purchaseDateMoment, 'day') : true ;
        const endDateMatch = endDate ? endDate.isSameOrAfter(purchaseDateMoment, 'day') : true;
        const textMatch = sale.fullName.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy ===  'date') {
            return a.purchaseDate < b.purchaseDate ? 1 : -1;
        } else if(sortBy === 'total') {
            return a.total < b.total ? 1 : -1;
        }
    });
};