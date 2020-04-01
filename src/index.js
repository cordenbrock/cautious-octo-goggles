import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configStore from './store/configStore';
import AppRouter from './routers/AppRouter';
import { addExpense } from './store/actions/expenses';
import { setTextFilter } from './store/actions/filters';
import getVisibleExpenses from './selectors/expenses';


const store = configStore();

store.dispatch(addExpense( {description: 'bribe', amount: 200} ))
store.dispatch(addExpense( {description: 'booze', amount: 50, createdAt: 5} ))



const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const app = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(app, document.getElementById('root'));

