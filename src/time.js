// src/time.js
// src/time.js

const SECONDS_IN_DAY = 86400; // 24 horas x 60 minutos x 60 segundos = 86400 segundos en un día
const SECONDS_IN_WEEK = 604800; // 7 días x 24 horas x 60 minutos x 60 segundos = 604800 segundos en una semana
const SECONDS_IN_YEAR = 31536000; // 365 días x 24 horas x 60 minutos x 60 segundos = 31536000 segundos en un año

function time(seconds) {
  const years = Math.floor(seconds / SECONDS_IN_YEAR);
  seconds %= SECONDS_IN_YEAR;
  const weeks = Math.floor(seconds / SECONDS_IN_WEEK);
  seconds %= SECONDS_IN_WEEK;
  const days = Math.floor(seconds / SECONDS_IN_DAY);
  seconds %= SECONDS_IN_DAY;
  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;

  const result = [];
  if (years > 0) {
    result.push(years + "y");
  }
  if (weeks > 0) {
    result.push(weeks + "w");
  }
  if (days > 0) {
    result.push(days + "d");
  }
  if (hours > 0) {
    result.push(hours + "h");
  }
  if (minutes > 0) {
    result.push(minutes + "m");
  }
  if (seconds > 0) {
    result.push(seconds + "s");
  }

  return result.join(" ");
}

module.exports = time;