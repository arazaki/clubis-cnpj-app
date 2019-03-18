import React from 'react';
import { connect } from 'react-redux';
import CompanyForm from './CompanyForm';
import { startAddCompany } from '../actions/company';
import { startLogout } from '../actions/auth';

export class AddCompanyPage extends React.Component {
    onSubmit = (company) => {
        this.props.startAddCompany(company);
        this.props.history.push('/');
    };

    onLogout = () => {
        this.props.startLogout();
    }

    render() {
        return (
            <div>
                <div className="header">
                    <div className="content-container">
                        <div className="header__content">
                            <h1 className="header__title">Registrar Empresa</h1>
                            <button className="button button--link" onClick={this.onLogout}>Sair</button>
                        </div>
                    </div>
                </div>
                <div className="content-container content-container--form">
                    <CompanyForm
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        );
    };
};

const mapDispatchToProps = (dispatch) => ({
    startAddCompany: (company) => dispatch(startAddCompany(company)),
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(AddCompanyPage);