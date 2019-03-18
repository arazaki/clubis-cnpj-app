import React from 'react';
import { connect } from 'react-redux';
import CustomerListItem from './CustomerListItem';
import selectCustomers from '../selectors/customers';

export const CustomerList = ({ customers }) => (
    <div className="content-container content-container--bg-white">
        <div className="list-body">
            {
                customers.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>
                            Sem clientes ainda :/
                    </span>
                    </div>
                ) : (
                        customers.map((customer) => {
                            return <CustomerListItem key={customer.cpf} {...customer} />;
                        })
                    )
            }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        customers: selectCustomers(state.customers, state.filters)
    };
};

export default connect(mapStateToProps)(CustomerList);