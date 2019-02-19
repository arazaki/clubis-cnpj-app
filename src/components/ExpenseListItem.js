import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ clientDocument, total, purchaseDate, items }) => (
    <div className="list-item">
        <div>
            <h3 className="list-item__title">{clientDocument}</h3>
            <div>
            {
                items.map((item) => {
                    return (
                        <div className="list-item__product" key={item.code}>{item.quantity} - {item.description} </div>
                    )
                })
            }
            </div>
        </div>
        <div>
            <span className="list-item__sub-title">
                {moment(purchaseDate).format('DD [de] MMMM [de] YYYY')}
            </span>
            <h3 className="list-item__data">
                {numeral(total / 100).format('$0,0.00')}
            </h3>
        </div>
    </div>
);

export default ExpenseListItem;