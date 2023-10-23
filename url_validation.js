// Regular expression to match valid URLs
const urlPattern = /^(https?:\/\/)[A-Za-z0-9\-._~:/?#[\]@!$&'()*+,;=%]+[.][A-Za-z]+$/;

// Function to validate a URL
function validateURL(input) {
  if (urlPattern.test(input)) {
    console.log("The input is a valid URL.");
  } else {
    console.log("The input is not a valid URL.");
  }
}

// Test the URL validation with some examples
validateURL("http://www.example.com"); // Should be valid
validateURL("https://www.openai.com"); // Should be valid
validateURL("ftp://invalid.url");       // Should be invalid
