// Define the input string
const input = "Hello, World!";

// Function to reverse the string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Function to reverse the string after a 2-second delay
function reverseAfterDelay(inputString) {
  setTimeout(() => {
    const reversedString = reverseString(inputString);
    console.log("Reversed String:", reversedString);
  }, 2000); // 2000 milliseconds (2 seconds)
}

// Call the function with the input string
reverseAfterDelay(input);
