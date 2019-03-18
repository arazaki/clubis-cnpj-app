import React from 'react';
import numeral from 'numeral';

export const TotalBalance = ({totalBalance}) => (
    <div className="dashboard-group__item">
        <h1>Saldo dos clientes</h1>
        <span>R$ {numeral(totalBalance / 100).format('0,0.00')}</span>
    </div>
);

export default TotalBalance;