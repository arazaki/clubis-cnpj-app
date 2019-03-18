import database from '../firebase/firebase';

// SET_EXPENSES
export const setSales = (sales) => ({
    type: 'SET_SALES',
    sales
});

// export const startSetSales;
export const startSetSales = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`companies/${uid}/sales`)
        .once('value')
        .then((snapshot) => {
            const sales = [];
            snapshot.forEach((childSnapshot) => {
                sales.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setSales(sales));
        });
       
    };
};

