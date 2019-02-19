
export default (expenses) => {
    return expenses.reduce((prevVal, elem) => {
        return prevVal + elem.total;
    }, 0);
};