import moment from 'moment';

// Get visible customers
export default (customers, { text, sortByCustomers, customerStartDate, customerEndDate }) => {
    return customers.filter((customer) => {
        const createdAtDateMoment = moment(customer.createdAt);
        const startDateMatch = customerStartDate ? customerStartDate.isSameOrBefore(createdAtDateMoment, 'day') : true ;
        const endDateMatch = customerEndDate ? customerEndDate.isSameOrAfter(createdAtDateMoment, 'day') : true;
        const textMatch = customer.fullName.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortByCustomers ===  'customerStartDate') {
            return a.createdAt > b.createdAt ? 1 : -1;
        } else if(sortByCustomers === 'customersSumTotalSales') {
            return a.sumTotalSales < b.sumTotalSales ? 1 : -1;
        }
    });
};