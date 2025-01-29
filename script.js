"use strict";

function updateCurrentTimeUTC() {
  const currentTime = new Date().toISOString();
  document.querySelector(
    '[data-testid="currentTimeUTC"]'
  ).textContent = `Current time (UTC): ${currentTime}`;
}

updateCurrentTimeUTC();

setInterval(updateCurrentTimeUTC, 60000);
