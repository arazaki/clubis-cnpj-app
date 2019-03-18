import database from '../firebase/firebase';

// SET_COMPANIES
export const setCustomers = (customers) => ({
    type: 'SET_CUSTOMERS',
    customers
});

// export const startSetCustomers;
export const startSetCustomers = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`companies/${uid}/customers`)
        .on('value', (snapshot) => {
            const customers = [];
            snapshot.forEach((childSnapshot) => {
                customers.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setCustomers(customers));
        });
       
    };
};


