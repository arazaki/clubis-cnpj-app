import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

const CompanyListItem = ({ id, companyName, balance }) => (
    <Link className="NOCLASS" to={`/dashboard/${id}`}>
        <div className="list-item">
            <div>
                <h3 className="list-item__title">{companyName}</h3>
                <h3 className="list-item__data">
                    Saldo: {numeral(balance).format('$0,0.00')}
                </h3>
            </div>
        </div>
    </Link>
);

export default CompanyListItem;