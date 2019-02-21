export default (expenses) => {
    const totalExpenses = expenses.reduce((prevVal, elem) => {
        return prevVal + elem.total;
    }, 0);
    return totalExpenses * 0.1
}