const dataManager = require("./dataManager.js");

module.exports = { updateTimers };

// Deletes any timers that have passed from storage
// RETURNS: an array of timer objects that were deleted
function updateTimers() {
  curr_timestamp = Date.now() / 1000;
  var allTimers = dataManager.getTimers().timers;
  var toReturn = [];

  allTimers.forEach((timer) => {
    if (timer.unix_end_time < curr_timestamp) {
      const timerCopy = { ...timer };
      toReturn.push(timerCopy);
      dataManager.deleteTimers(timer.unix_end_time, timer.note);
    }
  });
  toReturn.sort((a, b) => {
    a.channel_id - b.channel_id; // sorts by channel id
  });
  return toReturn;
}
