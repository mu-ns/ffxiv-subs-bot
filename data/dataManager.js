const fs = require("fs");
const path = require("path");
const STORAGE_PATH = process.env.STORAGE_PATH;
const TIMERS_PATH = path.join(STORAGE_PATH, "timers.json");

module.exports = { getTimers, initializeStorage, addTimer, deleteTimers };

function initializeStorage() {
  // Check whether the storage folder exists
  if (!fs.existsSync(STORAGE_PATH)) {
    console.log(`Storage directory created at ${STORAGE_PATH}.`);
    fs.mkdirSync(STORAGE_PATH, { recursive: true }); // the `recursive` parameter lets the function work in case the folder is nested
  }

  // We have now ensured the storage folder exists, we can add individual storage files
  const emptyTimersArray = { timers: [] };
  const emptyTimersArrayString = JSON.stringify(emptyTimersArray);

  if (!fs.existsSync(TIMERS_PATH)) {
    fs.writeFileSync(TIMERS_PATH, emptyTimersArrayString, "UTF8");
  }
}

function getTimers() {
  console.log(`Retrieving timers from ${TIMERS_PATH}.`);
  dataString = fs.readFileSync(TIMERS_PATH);
  return JSON.parse(dataString);
}

function addTimer(unix_end_time, note, channel_id) {
  console.log(
    `Adding timer to storage in ${TIMERS_PATH} with parameters unix_end_time=${unix_end_time} and note=${note}, sent in channel=${channel_id}.`
  );
  var timersObject = getTimers();
  const newTimer = {
    unix_end_time: unix_end_time,
    note: note,
    channel_id: channel_id,
  };

  timersObject.timers.push(newTimer);
  timersObject.timers.sort((a, b) => a.unix_end_time - b.unix_end_time);

  fs.writeFileSync(TIMERS_PATH, JSON.stringify(timersObject), "UTF8");
}

function deleteTimers(unix_end_time, note) {
  console.log(
    `Deleting timers in storage with parameters unix_end_time=${unix_end_time} and note=${note}.`
  );
  var timersObject = getTimers();
  const timerEquals = (elem) => {
    if (elem.unix_end_time == unix_end_time && elem.note == note) return true;
    return false;
  };

  while (timersObject.timers.findIndex(timerEquals) != -1) {
    var index = timersObject.timers.findIndex(timerEquals);
    timersObject.timers.splice(index, 1); // 2nd parameter means remove one item only
  }

  fs.writeFileSync(TIMERS_PATH, JSON.stringify(timersObject), "UTF8");
}
