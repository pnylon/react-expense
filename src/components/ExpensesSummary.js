import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/exspenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const singOrPlur = expenseCount === 1 ? 'expense' : 'expenses';
    const formatExpensesTotal = numeral(expensesTotal / 100).format('$0,00.00')
    return (
        <div>
            <h1>Viewing {expenseCount} {singOrPlur} totalling {formatExpensesTotal}</h1>
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
