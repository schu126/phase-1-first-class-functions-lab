// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(rides) {
    return function(fare) {
        return rides * fare;
    }
}

const fareDoubler = function(fare) {
    const fareMultiplier = createFareMultiplier(fare);
    return fareMultiplier(2);
}

const fareTripler = function(fare) {
    const fareMultiplier = createFareMultiplier(fare);
    return fareMultiplier(3);
}

function selectDifferentDrivers (drivers, callback) {
    return callback(drivers);
}