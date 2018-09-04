import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route, Link, NavLink  } from 'react-router-dom';
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
        Not Found 404! - <Link to="/">Go home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true} >Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active" exact={true} >Create Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active" exact={true} >Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active" exact={true} >Help</NavLink>
    </header>
);

const routers = (
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

ReactDOM.render(routers, document.getElementById('app'));
