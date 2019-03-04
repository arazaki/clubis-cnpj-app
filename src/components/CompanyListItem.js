import React from 'react';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import { MdStore } from 'react-icons/md';

const CompanyListItem = ({ id, companyName, balance, urlLogo }) => (
    <div className="list-item list-item--grid">
        <Link className="NOCLASS" to={`/dashboard/${id}`}>
            <div className="list-item__logo">
                {urlLogo ? (
                    <img src={urlLogo} />
                    ) : (
                        <MdStore />
                        )}
            </div>
            <div>
                <h3 className="list-item__title">{companyName}</h3>
                <h3 className="list-item__data">
                    {numeral(balance).format('$0,0.00')}
                </h3>
            </div>
        </Link>
    </div>
);

export default CompanyListItem;