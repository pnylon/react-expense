import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/exspenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const singOrPlur = expenseCount === 1 ? 'expense' : 'expenses';
    const formatExpensesTotal = numeral(expensesTotal / 100).format('$0,00.00')
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {singOrPlur} totalling <span>{formatExpensesTotal}</span></h1>
                <div className="page-header__actions">
                    <Link className="btn" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
