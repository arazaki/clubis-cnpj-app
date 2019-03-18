import database from '../firebase/firebase';
import { startSetSales } from './sales';

// ADD_COMPANY
export const addCompany = (company) => ({
    type: 'ADD_COMPANY',
    company
});

export const startAddCompany = (companyData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            companyName = '',
            cnpj = 0,
            email = '',
            phoneNumber = 0,
            addressCity = '',
            addressState = '',
            addressStreet = '',
            logoLink = '',
            cashbackDefaultRate = 0
        } = companyData;
        const company = { companyName, cnpj, email, phoneNumber, addressCity, addressState, addressStreet, logoLink, cashbackDefaultRate }

        return database.ref(`companies/${uid}/info`).set(company).then(() => {
            dispatch(addCompany({
                ...company
            }));
            // aqui é um bom lugar para executar o código de inserção na base de dados dos registros dos cpfs e notas.
        });
    };
};

// REMOVE_COMPANY
export const removeCompany = (company) => ({
    type: 'REMOVE_COMPANY',
    company: null
});

export const startRemoveCompany = (company) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`companies/${uid}/info`).remove().then(() => {
            dispatch(removeCompany(company));
        });
    };
};

// EDIT_COMPANY
export const editCompany = (updates) => ({
    type: 'EDIT_COMPANY',
    updates
});

export const startEditCompany = (updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`companies/${uid}/info`).update(updates).then(() => {
            dispatch(editCompany(updates));
        });
    };
};

// SET_COMPANYS
export const setCompany = (company) => ({
    type: 'SET_COMPANY',
    company
});

// export const startSetCompanies;
export const startSetCompany = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`companies/${uid}/info`)
            .once('value')
            .then((snapshot) => {
                const company = snapshot.val();
                dispatch(setCompany(company));
            });

    };
};
