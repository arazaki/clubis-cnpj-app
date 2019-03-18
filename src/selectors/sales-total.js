export default (sales) => {
    const totalSales = sales.reduce((prevVal, elem) => {
        return prevVal + elem.total;
    }, 0);
    return totalSales * 0.1
}