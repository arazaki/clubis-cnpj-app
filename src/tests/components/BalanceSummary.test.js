import React from 'react';
import { shallow } from 'enzyme';
import { BalanceSummary } from '../../components/BalanceSummary';

test('should correctly render BalanceSummary with 1 expense', () => {
    const wrapper = shallow(<BalanceSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render BalanceSummary with multiple expenses', () => {
    const wrapper = shallow(<BalanceSummary expenseCount={23} expensesTotal={23512340987} />);
    expect(wrapper).toMatchSnapshot();
});