import React from 'react';
import { DateRangePicker } from 'react-dates';
import { connect } from 'react-redux';

import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { editExpense } from '../actions/expenses';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange =(calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    };
    onTextChange = (eve) => {
        this.props.setTextFilter(eve.target.value);
    };
    onSortChange = (eve) => {
        if (eve.target.value === 'date') {
            this.props.sortByDate();
        } else if (eve.target.value === 'amount') {
            this.props.sortByAmount();
        }
    };
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.filters.text}
                    onChange={this.onTextChange}
                />
                <select
                    value={this.props.filters.sortBy}
                    onChange={this.onSortChange}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    //startDate={this.props.filters.startDate}
                    //endDate={this.props.filters.endDate}
                    startDateId="startDate"
                    endDateId="endDate"
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => {false}}
                />
            </div>
        );
    }
};

// const ExpenseListFilters = (props) => (
//     <div>
//         <input 
//             type="text" 
//             value={props.filters.text} 
//             onChange={(eve) => {
//                 props.dispatch(setTextFilter(eve.target.value));
//             }}
//         />
//         <select 
//             value={props.filters.sortBy} 
//             onChange={(eve) => {
//                 if (eve.target.value === 'date') {
//                     props.dispatch(sortByDate());
//                 } else if (eve.target.value === 'amount') {
//                     props.dispatch(sortByAmount());
//                 }
//             }} 
//         >
//             <option value="date">Date</option>
//             <option value="amount">Amount</option>
//         </select>
//     </div>
// );

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);