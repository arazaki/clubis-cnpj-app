// Sales Reducers

const salesReducerDefaultState = [];

export default (state = salesReducerDefaultState, action) => {
    switch (action.type){
        case 'SET_SALES':
        return action.sales;
        default:
        return state;
    }
};