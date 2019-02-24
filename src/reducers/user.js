const userReducerDefaultState = [];

export default (state = userReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return action.user;
        case 'REMOVE_USER':
            return action.user;
        case 'EDIT_USER':
            return {
                ...action.user,
                ...action.updates
            }
        case 'SET_USER':
            return action.user;
        default:
            return state;
    }
};