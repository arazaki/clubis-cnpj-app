import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ clientDocument, total, purchaseDate, items, cfeId }) => (
    <div className="list-item">
        <div>
            <h3 className="list-item__title">CPF: {clientDocument}</h3>
            <span className="list-item__sub-title">
                Data da compra: {moment(purchaseDate).format('DD [de] MMMM [de] YYYY')}
            </span>
            <div>
                {
                    items.map((item) => {
                        return (
                            <div className="list-item__product" key={cfeId + item.code}>{item.quantity} - {item.description} </div>
                        )
                    })
                }
            </div>
            <h3 className="list-item__data">
                Total: {numeral(total).format('$0,0.00')}
            </h3>
        </div>
        <div>
            <h3 className="list-item__data">
                Recebe de volta: {numeral(total * 0.1).format('$0,0.00')}
            </h3>
            <span className="list-item__sub-title">
                Data do crédito: {moment(purchaseDate).add(7, 'days').format('DD [de] MMMM [de] YYYY')}
            </span>
        </div>
    </div>
);

export default ExpenseListItem;