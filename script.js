"use strict";
function updateCurrentTimeNigerian() {
  const currentTime = new Date();
  // Adjust the time to UTC+1 (Nigerian time)
  const nigerianTime = new Date(
    currentTime.setHours(currentTime.getHours() + 1)
  );
  document.querySelector(
    '[data-testid="currentTimeUTC"]'
  ).textContent = `Current time (Nigerian time): ${nigerianTime.toISOString()}`;
}

updateCurrentTimeNigerian();

setInterval(updateCurrentTimeNigerian, 60000);
