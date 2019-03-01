import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import numeral from 'numeral';

const BalanceSummary = ({ balance, companyName, id }) => {
    const formattedBalanceTotal = numeral(balance).format('$0,0.00');
    return (
        <div className="page-header">
            <div className="content-container">
                <div className="summary-content">
                    <div className="summary-balance">
                        <h1 className="NOCLASS">{companyName}</h1>
                        <h1 className="page-header__title">
                            Saldo disponível: <span>{formattedBalanceTotal}</span>
                        </h1>
                        <div className="nav-link">
                            <NavLink className="nav-link__link" to={`/dashboard/${id}`} activeClassName="is-active">Extrato</NavLink>
                            <NavLink className="nav-link__link" to={`/purchased/${id}`} activeClassName="is-active">Compras</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BalanceSummary;