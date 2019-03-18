// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SORT_BY_TOTAL
export const sortByTotal = () => ({
    type: 'SORT_BY_TOTAL'
});

// SORT_BY_CUSTOMERS_START_DATE
export const sortByCustomerStartDate = () => ({
    type: 'SORT_BY_CUSTOMERS_START_DATE'
});

// SORT_BY_CUSTOMERS_SUM_TOTAL_SALES
export const sortByCustomersSumTotalSales = () => ({
    type: 'SORT_BY_CUSTOMERS_SUM_TOTAL_SALES'
});

// SET_START_DATE
export const setStartDate = ( startDate ) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_END_DATE
export const setEndDate = ( endDate ) => ({
    type: 'SET_END_DATE',
    endDate
});

// SET_CUSTOMER_START_DATE
export const setCustomerStartDate = ( customerStartDate ) => ({
    type: 'SET_CUSTOMER_START_DATE',
    customerStartDate
});

// SET_CUSTOMER_END_DATE
export const setCustomerEndDate = ( customerEndDate ) => ({
    type: 'SET_CUSTOMER_END_DATE',
    customerEndDate
});