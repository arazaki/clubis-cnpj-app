const dashboardDataReducerDefaultState = {
    totalCustomers: 0,
    totalSales: 0,
    sumTotalSales: 0,
    totalCashbacked: 0,
    totalWithdrawn: 0,
    totalBalance: 0,
    birthdayList: []
};

export default (state = dashboardDataReducerDefaultState, action) => {
    switch (action.type){
        case 'SET_DASHBOARD_DATA':
        return action.dashboardData;
        default:
        return state;
    }
}