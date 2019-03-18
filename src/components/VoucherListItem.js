import React from 'react';
import moment from 'moment';
import numeral from 'numeral';

const VoucherListItem = ({ cpf, amount, createdAt }) => (
    <div className="list-item">

        <div>
            <p className="list-item__data">
                Data: {moment(createdAt).format('DD/MM/YY')}
            </p>
        </div>
        <div>
            <p className="list-item__data">
                CPF: {cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}
            </p>
        </div>
        <div>
            <p className="list-item__data">
                Valor: {numeral(amount / 100).format('$0,0.00')}
            </p>
        </div>
    </div>
);

export default VoucherListItem;