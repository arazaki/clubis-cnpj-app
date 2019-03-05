import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { MdMoneyOff, MdAttachMoney } from 'react-icons/md'

const StatementListItem = ({ date, value, type }) => (
    <div className="list-item">
        <div className="sub-list-item">
            <div className="list-item__icon">
                {type === "CASHBACK" ? (
                    <MdAttachMoney />
                ) : (
                    <MdMoneyOff />
                )}
            </div>
            <div>
                <h3 className="list-item__title">
                    {type === "CASHBACK" ? "Cashback" : "Resgate"}
                </h3>
                <p className="list-item__data">
                    {type === "CASHBACK" ? "Recebido" : "Resgatado"}: {numeral(value * 0.1).format('$0,0.00')}
                </p>
            </div>
        </div>
        <div>
            <h3 className="list-item__date">{moment(date).format('DD/MM/YY')}</h3>
        </div>
    </div>
);

export default StatementListItem;