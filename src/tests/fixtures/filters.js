import moment from 'moment';

const filters = {
    text: '',
    sortBy: 'date',
    startDate: 'start',
    endDate: 'end'
}

const modFilters = {
    text: 'bills',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
}

export { filters, modFilters };
