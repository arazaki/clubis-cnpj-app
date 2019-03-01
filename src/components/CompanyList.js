import React from 'react';
import { connect } from 'react-redux';
import CompanyListItem from './CompanyListItem';

export const CompanyList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="NOCLASS">Clubes</div>
        </div>
        <div className="list-body">
            {
                props.companies.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>
                            Sem clubes ainda :/
                    </span>
                    </div>
                ) : (
                        props.companies.map((company) => {
                            return <CompanyListItem key={company.id} {...company} />;
                        })
                    )
            }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        companies: state.companies
    };
};

export default connect(mapStateToProps)(CompanyList);