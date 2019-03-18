import React from 'react';

export const TotalCustomers = ({totalCustomers}) => (
    <div className="dashboard-group__item">
        <h1>Total de Clientes</h1>
        <span>{totalCustomers}</span>
    </div>
);

export default TotalCustomers;