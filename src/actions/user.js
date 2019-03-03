import database from '../firebase/firebase';
import { startSetExpenses } from '../actions/expenses';

// ADD_USER
export const addUser = (user) => ({
    type: 'ADD_USER',
    user
});

export const startAddUser = (userData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            fullName = '',
            cpf = 0,
            email = '',
            phoneNumber = 0,
            birthday = 0
        } = userData;
        const user = { fullName, cpf, email, phoneNumber, birthday }

        return database.ref(`users/${uid}/info`).set(user).then(() => {
            dispatch(addUser({
                ...user
            }));
            // aqui é um bom lugar para executar o código de inserção na base de dados dos registros dos cpfs e notas.
            dispatch(startSetExpenses());
        });
    };
};

// REMOVE_USER
export const removeUser = (user) => ({
    type: 'REMOVE_USER',
    user: null
});

export const startRemoveUser = (user) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/info`).remove().then(() => {
            dispatch(removeUser(user));
        });
    };
};

// EDIT_USER
export const editUser = (updates) => ({
    type: 'EDIT_USER',
    updates
});

export const startEditUser = (updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/info`).update(updates).then(() => {
            dispatch(editUser(updates));
        });
    };
};

// SET_USERS
export const setUser = (user) => ({
    type: 'SET_USER',
    user
});

// export const startSetUsers;
export const startSetUser = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/info`)
            .once('value')
            .then((snapshot) => {
                const user = snapshot.val();
                dispatch(setUser(user));
            });

    };
};
