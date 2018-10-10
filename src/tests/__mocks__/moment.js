//import moment from 'moment'; 

// Force moment to start at a specific point in time.
// https://jestjs.io/docs/en/manual-mocks
// To ensure that a manual mock and its real implementation stay in sync, it might be useful to require the real module 
// using require.requireActual(moduleName) in your manual mock and amending it with mock functions before exporting it.
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
};