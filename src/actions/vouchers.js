import uuid from 'uuid';
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
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0
        } = voucherData;
        const voucher = {description, note, amount, createdAt}
        
        return database.ref(`users/${uid}/vouchers`).push(voucher).then((ref) => {
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
        return database.ref(`users/${uid}/vouchers/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }));
        });
    };
};