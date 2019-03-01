import React from 'react';
import moment from 'moment';
import numeral from 'numeral';

const StatementListItem = ({ date, value, type }) => (
    <div className="list-item">
        <div>
            <h3 className="NOCLASS">
                {type === "CASHBACK" ? "Cashback" : "Resgate"}
            </h3>
            <p className="list-item__data">
                {type === "CASHBACK" ? "Recebido de volta" : "Resgatado"}: {numeral(value * 0.1).format('$0,0.00')}
            </p>
        </div>
        <div>
            <h3 className="list-item__title">{moment(date).format('DD [de] MMMM [de] YYYY')}</h3>
        </div>
    </div>
);

export default StatementListItem;