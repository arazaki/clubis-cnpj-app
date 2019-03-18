import React from 'react';
import numeral from 'numeral';

export const TotalCashbacked = ({totalCashbacked}) => (
    <div className="dashboard-group__item">
        <h1>Total de Cashback</h1>
        <span>R$ {numeral(totalCashbacked / 100).format('0,0.00')}</span>
    </div>
);

export default TotalCashbacked;