import database from '../firebase/firebase';

// SET_COMPANIES
export const setCompanies = (companies) => ({
    type: 'SET_COMPANIES',
    companies
});

// export const startSetCompanies;
export const startSetCompanies = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/companies`)
        .once('value')
        .then((snapshot) => {
            const companies = [];
            snapshot.forEach((childSnapshot) => {
                companies.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setCompanies(companies));
        });
       
    };
};

