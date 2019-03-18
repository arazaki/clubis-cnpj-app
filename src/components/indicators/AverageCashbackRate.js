import React from 'react';

export const AverageCashbackRate = ({ sumTotalSales, totalCashbacked }) => {
    const averageCashbackRate = totalCashbacked / sumTotalSales;

    return (
        <div className="dashboard-group__item">
            <h1>Taxa média de cashback</h1>
            <span>{averageCashbackRate * 100}%</span>
        </div>
    )
};

export default AverageCashbackRate;