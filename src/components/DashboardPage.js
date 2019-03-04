import React from 'react';
import { connect } from 'react-redux';
import StatementList from './StatementList';
import BalanceSummary from './BalanceSummary';

export const DashboardPage = ({ company }) => (
    <div className="bg-orange">
        <BalanceSummary {...company} />
        <StatementList {...company} />
    </div>
);

const mapStateToProps = (state, props) => ({
    company: state.companies.find((company) => company.id === props.match.params.id)

});

export default connect(mapStateToProps)(DashboardPage);


