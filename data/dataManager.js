const fs = require("fs");
const path = require('path');
const STORAGE_PATH = process.env.STORAGE_PATH;
const TIMERS_PATH = path.join(STORAGE_PATH, "timers.json")


function initializeStorage() {
    // Check whether the storage folder exists
    if (!fs.existsSync(STORAGE_PATH)) {
        console.log(`Storage directory created at ${STORAGE_PATH}.`)
        fs.mkdirSync(STORAGE_PATH, { recursive: true }); // the `recursive` parameter lets the function work in case the folder is nested
    }

    // We have now ensured the storage folder exists, we can add individual storage files
    // TODO Remove the dummy timer when actual timers can be created via the /send command (replace with empty array)
    const dummyTimerObject = {
        "timers": [
            {
                "unix_end_time": "1698532200",
                "note": "Crapaud"
            },
            {
                "unix_end_time": "1698532200",
                "note": "Rainette"
            }
        ]
    }
    dummyTimer = JSON.stringify(dummyTimerObject)

    if (!fs.existsSync(TIMERS_PATH)) {
        fs.writeFileSync(TIMERS_PATH, dummyTimer, "UTF8")
    }
}

function getTimers() {
    console.log(`Retrieving timers from ${TIMERS_PATH}.`)
    dataString = fs.readFileSync(TIMERS_PATH);
    return JSON.parse(dataString);
}

module.exports = { getTimers, initializeStorage } 