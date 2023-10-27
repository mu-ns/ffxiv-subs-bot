const fs = require("fs");

function getTimers(pathToStorage) {
    datString = fs.readFileSync(pathToStorage + "/timers.json");
    return JSON.parse(datString);
}


module.exports = { getTimers } 