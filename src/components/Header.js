import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout, uid }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/companyList">
                    <h1>CluBis - Empresas</h1>
                </Link>
                <div>
                    <Link className="button button--link" to={`/editCompany/${uid}`}>Minha Conta</Link>
                    <button className="button button--link" onClick={startLogout}>Sair</button>
                </div>
            </div>
            <div className="nav-link">
                <NavLink className="nav-link__link" to={`/dashboard`} activeClassName="is-active">Dashboard</NavLink>
                <NavLink className="nav-link__link" to={`/customers`} activeClassName="is-active">Meus Clientes</NavLink>
                <NavLink className="nav-link__link" to={`/sales`} activeClassName="is-active">Minhas Vendas</NavLink>
                <NavLink className="nav-link__link" to={`/vouchers`} activeClassName="is-active">Resgates</NavLink>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

const mapStateToProps = (state) => ({
    uid: state.auth.uid
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);