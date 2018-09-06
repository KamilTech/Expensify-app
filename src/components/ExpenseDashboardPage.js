import React from 'react';
import ExpenseList from './ExpenseList';
import ExenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './ExpenseSummary';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseSummary />
        <ExenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;