import moment from 'moment';

// Get visible vouchers
export default (vouchers, { text, sortByVouchers, voucherStartDate, voucherEndDate }) => {
    return vouchers.filter((voucher) => {
        const createdAtDateMoment = moment(voucher.createdAt);
        const startDateMatch = voucherStartDate ? voucherStartDate.isSameOrBefore(createdAtDateMoment, 'day') : true ;
        const endDateMatch = voucherEndDate ? voucherEndDate.isSameOrAfter(createdAtDateMoment, 'day') : true;
        const textMatch = voucher.cpf.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortByVouchers ===  'voucherStartDate') {
            return a.createdAt > b.createdAt ? 1 : -1;
        } else if(sortByVouchers === 'vouchersAmount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};