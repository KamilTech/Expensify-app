import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import ExpenseCreatePage from '../components/ExpenseCreatePage';
import ExpenseEditPage from '../components/ExpenseEditPage';
import NotFoundPage from '../components/NotFoundPage';
import ExpenseHelpPage from '../components/ExpenseHelpPage';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage'; 

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={LoginPage} exact={true}/>
                <Route path="/dashborad" component={ExpenseDashboardPage} />
                <Route path="/create" component={ExpenseCreatePage} />
                <Route path="/edit/:id" component={ExpenseEditPage} />
                <Route path="/help" component={ExpenseHelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;