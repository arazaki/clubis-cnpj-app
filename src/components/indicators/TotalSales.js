import React from 'react';

export const TotalSale = ({totalSales}) => (
    <div className="dashboard-group__item">
        <h1>Qtde. de Vendas</h1>
        <span>{totalSales}</span>
    </div>
);

export default TotalSale;