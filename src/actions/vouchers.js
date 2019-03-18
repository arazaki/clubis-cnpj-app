import database from '../firebase/firebase';

// ADD_VOUCHER
export const addExpense = (voucher) => ({
    type: 'ADD_VOUCHER',
    voucher
});

export const startAddVoucher = (voucherData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            cpf = '', 
            amount = 0, 
            createdAt = 0
        } = voucherData;
        const voucher = {cpf, amount, createdAt}
        
        return database.ref(`companies/${uid}/vouchers`).push(voucher).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...voucher
            }));
        });
    };
};

// REMOVE_VOUCHER
export const removeExpense = ({ id } = {} ) => ({
    type: 'REMOVE_VOUCHER',
    id
});

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`companies/${uid}/vouchers/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }));
        });
    };
};

// SET_EXPENSES
export const setVouchers = (vouchers) => ({
    type: 'SET_VOUCHERS',
    vouchers
});

// export const startSetVouchers;
export const startSetVouchers = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`companies/${uid}/vouchers`)
        .once('value')
        .then((snapshot) => {
            const vouchers = [];
            snapshot.forEach((childSnapshot) => {
                vouchers.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setVouchers(vouchers));
        });
       
    };
};

