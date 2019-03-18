import React from 'react';
import moment from 'moment';
import numeral from 'numeral';

const CompanyListItem = ({ cpf, birthday, createdAt, email, fullName, phoneNumber, sumTotalSales, totalCashbacked, totalSales, balance, totalWithdrawn }) => (
    <div className="customer-list-item">
        <div className="sub-customer-list-item">
            <div>
                <p className="customer-list-item__sub-title">
                    {fullName}
                </p>
                <p className="customer-list-item__data">
                    CPF: {cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}
                </p>
                <p className="customer-list-item__data">
                    Entrada: {moment(createdAt).format('DD/MM/YY')}
                </p>
            </div>
        </div>
        <div>
            <p className="customer-list-item__data">
                Nasc: {moment(birthday).format('DD/MM/YY')}
            </p>
            <p className="customer-list-item__data">
                {email}
            </p>
            <p className="customer-list-item__data">
                {phoneNumber}
            </p>
        </div>
        <div>
            <p className="customer-list-item__data">
                Qtde. de compras: {numeral(totalSales / 100).format('$0,0.00')}
            </p>
            <p className="customer-list-item__data">
                Total de compras: {numeral(sumTotalSales / 100 ).format('$0,0.00')}
            </p>
            <p className="customer-list-item__data">
                Ticket médio: {numeral(sumTotalSales / totalSales).format('$0,0.00')}
            </p>
        </div>
        <div>
            <p className="customer-list-item__data">
                Total cashbacks: {numeral(totalCashbacked / 100).format('$0,0.00')}
            </p>
            <p className="customer-list-item__data">
                Resgates: {numeral(totalWithdrawn / 100).format('$0,0.00')}
            </p>
            <p className="customer-list-item__data">
                Saldo: {numeral(balance / 100).format('$0,0.00')}
            </p>
            <p className="customer-list-item__data">
                Cashback médio: {totalCashbacked / sumTotalSales * 100}%
            </p>
        </div>
    </div>
);

export default CompanyListItem;