import React from 'react';
import ExpenseList from './ExpenseList';
import ExenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <div>
        Test Dashboard
        <ExenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;