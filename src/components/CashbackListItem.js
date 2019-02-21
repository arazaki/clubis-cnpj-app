import React from 'react';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ clientDocument, total, purchaseDate, items, cfeId }) => (
    <div className="list-item">
        <div>
            <h3 className="list-item__title">{moment(purchaseDate).add(7, 'days').format('DD [de] MMMM [de] YYYY')}</h3>
        </div>
        <div>
            <h3 className="list-item__data">
                Recebe de volta: {numeral(total * 0.1).format('$0,0.00')}
            </h3>
        </div>
    </div>
);

export default ExpenseListItem;