import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should correctly render expenses summary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should correctly render expenses summary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={23} expensesTotal={235124412421} />);
    expect(wrapper).toMatchSnapshot();
});