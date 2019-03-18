import moment from 'moment';

// Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    //startDate: moment().startOf('month'),
    //endDate: moment().endOf('month')
    startDate: undefined,
    endDate: undefined,
    customerStartDate: undefined,
    customerEndDate: undefined,
    sortByCustomers: 'customerStartDate'
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type){
        case 'SET_TEXT_FILTER':
        return {
            ...state,
            text: action.text
        };
        case 'SORT_BY_DATE':
        return {
            ...state,
            sortBy: 'date'
        };
        case 'SORT_BY_TOTAL':
        return {
            ...state,
            sortBy: 'total'
        };
        case 'SORT_BY_CUSTOMERS_SUM_TOTAL_SALES':
        return {
            ...state,
            sortByCustomers: 'customersSumTotalSales'
        };
        case 'SORT_BY_CUSTOMERS_START_DATE':
        return {
            ...state,
            sortByCustomers: 'customerStartDate'
        };
        case 'SET_START_DATE':
        return {
            ...state,
            startDate: action.startDate
        };
        case 'SET_END_DATE':
        return {
            ...state,
            endDate: action.endDate
        };
        case 'SET_CUSTOMER_START_DATE':
        return {
            ...state,
            customerStartDate: action.customerStartDate
        };
        case 'SET_CUSTOMER_END_DATE':
        return {
            ...state,
            customerEndDate: action.customerEndDate
        };
        default:
        return state;
    }
}