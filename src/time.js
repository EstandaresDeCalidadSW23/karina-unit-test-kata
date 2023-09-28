// src/time.js
function time(seconds) {
  if (seconds >= 60) {
    const minutes = seconds / 60;
    return minutes + "m";
  }
  return seconds + "s";
}

module.exports = time;