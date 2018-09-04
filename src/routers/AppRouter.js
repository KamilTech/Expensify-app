import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import ExpenseCreatePage from '../components/ExpenseCreatePage';
import ExpenseEditPage from '../components/ExpenseEditPage';
import NotFoundPage from '../components/NotFoundPage';
import ExpenseHelpPage from '../components/ExpenseHelpPage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={ExpenseCreatePage} />
                <Route path="/edit" component={ExpenseEditPage} />
                <Route path="/help" component={ExpenseHelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;