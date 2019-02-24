// Expenses Reducers

const vouchersReducerDefaultState = [];

export default (state = vouchersReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_VOUCHER':
        return [
            ...state,
            action.voucher
        ];
        case 'REMOVE_VOUCHER':
        return state.filter(({ id }) => id !== action.id);
        case 'EDIT_VOUCHER':
        return state.map((voucher) => {
            if(voucher.id === action.id){
                return {
                    ...voucher,
                    ...action.updates
                } 
            } else {
                return voucher;
            }
        });
        case 'SET_VOUCHERS':
        return action.vouchers;
        default:
        return state;
    }
};