const companyReducerDefaultState = [];

export default (state = companyReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_COMPANY':
            return action.company;
        case 'REMOVE_COMPANY':
            return action.company;
        case 'EDIT_COMPANY':
            return {
                ...action.company,
                ...action.updates
            }
        case 'SET_COMPANY':
            return action.company;
        default:
            return state;
    }
};