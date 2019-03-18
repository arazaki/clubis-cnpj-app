import database from '../firebase/firebase';

// SET_DASHBOARD_DATA
export const setDashboardData = (dashboardData) => ({
    type: 'SET_DASHBOARD_DATA',
    dashboardData
});

// export const startSetDashboardData;
export const startSetDashboardData = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`companies/${uid}/dashboardData`)
        .once('value')
        .then((snapshot) => {
            const dashboardData = snapshot.val();
            dispatch(setDashboardData(dashboardData));
        });
       
    };
};