//Create a time data function
function currentTime() {
  // Declare variables
  var d = new Date(); // Get current date
  var hr = d.getHours(); // Get current hours
  var min = d.getMinutes(); // Get current minutes
  var sec = d.getSeconds(); // Get current seconds
  var ampm; // Declare empty variable to store AM or PM
  var utchr = d.getUTCHours(); // Get current Greenwich Mean Time (GMT)
  var timeDiff; // To store time difference between GMT hour and Local hour
  var adjTimeDiff; // To store time difference converted to positive number
  var timeZone; // To store the 4 time zones (PT, MT, CT, ET)

  // Add 0 to single digits for seconds
  if (sec < 10) {
    sec = "0" + sec;
  }

  // Add 0 to single digits for minutes
  if (min < 10) {
    min = "0" + min;
  }

  if (hr == 12) {
    ampm = "PM";
  } else if (hr > 12) {
    hr -= 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  // Convert GMT to standard time
  if (utchr >= 12) {
    utchr -= 12;
  }

  // Calculate time difference between GMT hour and local hour
  timeDiff = d.getUTCHours() - d.getHours();
  if (timeDiff < 0) {
    timeDiff += 24;
  }

  // Convert time difference, if negative, to positive
  adjTimeDiff = Math.abs(timeDiff);

  // Check which time zone based on the converted time difference
  switch (adjTimeDiff) {
    case 4:
      timeZone = "ET"; // Eastern Time
      break;
    case 5:
      timeZone = "CT"; // Central Time
      break;
    case 6:
      timeZone = "MT"; // Mountain Time
      break;
    case 7:
      timeZone = "PT"; // Pacific Time
      break;
    default:
      timeZone = ""; // If not in the US time zones
  }

  var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;
  document.getElementById("clock").innerText = time;
}

currentTime();
setInterval(currentTime, 1000);
