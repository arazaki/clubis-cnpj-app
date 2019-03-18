import React from 'react';
import { connect } from 'react-redux';
import CompanyForm from './CompanyForm';
import { startRemoveCompany, startEditCompany } from '../actions/company';

export class EditCompanyPage extends React.Component {
    onSubmit = (company) => {
        this.props.startEditCompany(company);
        this.props.history.push('/');
    };

    onRemove = (company) => {
        this.props.startRemoveCompany(company);
        this.props.history.push('/createCompany');
    }

    // <button className="button button--secondary" >Excluir Conta</button>

    render() {
        return (
            <div>
                <div className="content-container">
                    <h1 className="page-header__title">Minha Conta</h1>
                    <CompanyForm
                        company={this.props.company}
                        onSubmit={this.onSubmit}
                    />
                    
                </div>
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch, props) => ({
    startEditCompany: (company) => dispatch(startEditCompany(company)),
    startRemoveCompany: (company) => dispatch(startRemoveCompany(company))
});

const mapStateToProps = (state, props) => ({
    company: state.company

});

export default connect(mapStateToProps, mapDispatchToProps)(EditCompanyPage);