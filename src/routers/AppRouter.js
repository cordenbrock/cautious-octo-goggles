import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header.js';
import AddExpense from '../components/AddExpense.js';
import HelpPage from '../components/HelpPage.js';
import ExpenseDashboard from '../components/ExpenseDashboard.js';
import EditExpense from '../components/EditExpense.js';
import NotFound from '../components/NotFound.js';

const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path = '/' component = {ExpenseDashboard} exact = {true} />
            <Route path = '/add' component = {AddExpense} />
            <Route path = '/edit/:id' component = {EditExpense} />
            <Route path = '/help' component = {HelpPage} />
            <Route component = {NotFound} />
        </Switch>    
    </BrowserRouter>
);

export default AppRouter;