import React from 'react';
import numeral from 'numeral';

export const AverageTicketSales = ({ sumTotalSales, totalSales }) => {
    const averageTicketSales = sumTotalSales / totalSales;

    return (
        <div className="dashboard-group__item">
            <h1>Ticket médio de venda</h1>
            <span>R$ {numeral(averageTicketSales / 100).format('0,0.00')}</span>
        </div>
    )
};

export default AverageTicketSales;