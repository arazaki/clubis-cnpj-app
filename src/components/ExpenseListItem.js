import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ onBalance, total, cashback, cashbackDate, purchaseDate, items, cfeId }) => (
    <div className={`list-item ${onBalance ? "onBalance" : "offBalance" }`}>
        <div>
            <span className="list-item__sub-title">
                Data da compra: {moment(purchaseDate).format('DD [de] MMMM [de] YYYY')}
            </span>
            <div>
                {
                    items.map((item, index) => {
                        return (
                            <div className="list-item__product" key={cfeId + index}>{item.quantity} - {item.description} </div>
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
                Status: {onBalance ? "Recebido" : "A receber"}
            </h3>
            <p>
                Valor: {numeral(cashback).format('$0,0.00')}
            </p>
            <span className="list-item__sub-title">
                Data do crédito: {moment(cashbackDate).add(7, 'days').format('DD [de] MMMM [de] YYYY')}
            </span>
        </div>
    </div>
);

export default ExpenseListItem;