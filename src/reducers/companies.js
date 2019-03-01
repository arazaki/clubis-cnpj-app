// Companies Reducers

const companiesReducerDefaultState = [];

export default (state = companiesReducerDefaultState, action) => {
    switch (action.type){
        case 'SET_COMPANIES':
        return action.companies;
        default:
        return state;
    }
};