import React from 'react';
import numeral from 'numeral';

export const SumTotalSales = ({sumTotalSales}) => (
    <div className="dashboard-group__item">
        <h1>Receita total</h1>
        <span>R$ {numeral(sumTotalSales / 100).format('0,0.00')}</span>
    </div>
);

export default SumTotalSales;