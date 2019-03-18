import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { MdTimer, MdCheckCircle } from 'react-icons/md'

const SaleListItem = ({ fullName, cpf, onBalance, total, cashback, cashbackDate, purchaseDate, items, cfeId }) => (
    <div className="list-item">
        <div className="sub-list-item">
            <div className="list-item__icon">
                {onBalance ? (
                    <MdCheckCircle />
                ) : (
                        <MdTimer />
                    )}
            </div>
            <div>
                <span className="list-item__sub-title">
                    Data da compra: {moment(purchaseDate).format('DD/MM/YY')}
                </span>
                <p className="list-item__data">
                    {fullName}
                </p>
                <span className="list-item__sub-title">
                    {cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}
                </span>
            </div>
        </div>
        <div>
            <div className="list-product">
                {
                    items.map((item, index) => {
                        return (
                            <div className="list-product__item" key={cfeId + index}>{item.quantity} - {item.description} </div>
                        )
                    })
                }
            </div>
            <p className="list-item__data">
                Total: {numeral(total).format('$0,0.00')}
            </p>
        </div>
        <div>
            <span className="list-item__sub-title">
                {onBalance ? (
                    "Recebido em: "
                ) : (
                        "A receber em: "
                    )} {moment(cashbackDate).format('DD/MM/YY')}
            </span>
            <p>
                Valor: {numeral(cashback).format('$0,0.00')}
            </p>
        </div>
    </div>
);

export default SaleListItem;