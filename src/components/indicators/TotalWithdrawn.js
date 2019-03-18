import React from 'react';
import numeral from 'numeral';

export const TotalWithdrawn = ({totalWithdrawn}) => (
    <div className="dashboard-group__item">
        <h1>Total de Resgates</h1>
        <span>R$ {numeral(totalWithdrawn / 100).format('0,0.00')}</span>
    </div>
);

export default TotalWithdrawn;