import React from 'react';
import { connect } from 'react-redux';
import StatementListItem from './StatementListItem';
import selectExpenses from '../selectors/expenses';

export const StatementList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="NOCLASS">Extrato</div>
        </div>
        <div className="list-body">
            {
                props.statement.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>
                            Sem lançamentos ainda :/
                    </span>
                    </div>
                ) : (
                        props.statement.sort((a, b) => {
                            return a.date < b.date ? 1 : -1;
                            
                        }).map((statementValue, index) => {
                            return <StatementListItem key={index} {...statementValue} />;
                        })
                    )
            }
        </div>
    </div>
);


const mapStateToProps = (state, props) => {
    return {
        statement: props.statement
    };
};

export default connect(mapStateToProps)(StatementList);