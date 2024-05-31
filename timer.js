// Set the date we're counting down to (change this to your desired event date)
const countDownDate = new Date("May 31, 2024 15:00:00").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the remaining time
  const distance = countDownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("days").innerHTML = formatTime(days);
  document.getElementById("hours").innerHTML = formatTime(hours);
  document.getElementById("minutes").innerHTML = formatTime(minutes);
  document.getElementById("seconds").innerHTML = formatTime(seconds);

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "<p>The event has ended!</p>";
  }
}, 1000);

// Function to add leading zeros to numbers less than 10
function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
