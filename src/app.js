import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route  } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        Test roueter
    </div>
);

const ExpenseCreatePage = () => (
    <div>
        Test Create
    </div>
);

const ExpenseEditPage = () => (
    <div>
        Test Edit
    </div>
);

const ExpenseHelpPage = () => (
    <div>
        Test Help
    </div>
);

const NotFoundPage = () => (
    <div>
        Not Found 404!
    </div>
);

const routers = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={ExpenseCreatePage} />
            <Route path="/edit" component={ExpenseEditPage} />
            <Route path="/help" component={ExpenseHelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routers, document.getElementById('app'));
