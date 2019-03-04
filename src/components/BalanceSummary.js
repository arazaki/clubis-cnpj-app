import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import numeral from 'numeral';
import { MdStore } from 'react-icons/md';

const BalanceSummary = ({ balance, companyName, id, urlLogo }) => {
    const formattedBalanceTotal = numeral(balance).format('0,0.00');
    return (
        <div className="page-header">
            <div className="content-container">
                <div className="summary-content">
                    <div className="summary-header">
                        <div className="summary-header__title summary-header__title--logo">
                            <div className="summary-header__logo">
                                {urlLogo ? (
                                    <img src={urlLogo} />
                                ) : (
                                        <MdStore />
                                    )}
                            </div>
                            <h1>{companyName}</h1>
                        </div>
                        <div className="summary-header__title">
                            <p>Saldo disponível</p>
                            <div>
                                <span className="summary-monetary">R$</span>
                                <span className="summary-value">{formattedBalanceTotal}</span>
                            </div>
                        </div>
                    </div>
                    <div className="nav-link">
                        <NavLink className="nav-link__link" to={`/dashboard/${id}`} activeClassName="is-active">Extrato</NavLink>
                        <NavLink className="nav-link__link" to={`/purchased/${id}`} activeClassName="is-active">Compras</NavLink>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BalanceSummary;