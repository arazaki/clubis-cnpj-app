import React from 'react';
import { connect } from 'react-redux';
import CashbackListItem from './CashbackListItem';
import selectExpenses from '../selectors/expenses';

export const CashbackList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Data</div>
            <div className="show-for-desktop">Cashbacks</div>
            <div className="show-for-desktop">Cashback</div>
        </div>
        <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>
                            Sem compras ainda :/
                    </span>
                    </div>
                ) : (
                        props.expenses.map((expense) => {
                            return <CashbackListItem key={expense.id} {...expense} />;
                        })
                    )
            }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(CashbackList);