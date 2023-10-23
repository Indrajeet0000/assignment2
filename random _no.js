// Function to generate a random number within a specified range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Function to generate a random number after a specified delay
  function generateRandomNumberWithDelay(delay) {
    console.log(`Generating a random number in ${delay} seconds...`);
    let secondsRemaining = delay;
  
    const countdownInterval = setInterval(() => {
      secondsRemaining--;
  
      if (secondsRemaining > 0) {
        console.log(`Time remaining: ${secondsRemaining} second(s)`);
      } else {
        clearInterval(countdownInterval);
        const randomNumber = getRandomNumber(1, 100); // Change the range as needed
        console.log(`Random number generated: ${randomNumber}`);
      }
    }, 1000); // Update the countdown every 1 second
  }
  
  // Call the function with a 3-second delay (you can modify the delay as needed)
  generateRandomNumberWithDelay(3);
  