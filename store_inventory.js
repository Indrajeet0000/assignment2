// Store's inventory with prices in USD
const inventory = {
    "item1": 10,  // USD
    "item2": 20,  // USD
    "item3": 30,  // USD
    // Add more items and their prices as needed
  };
  
  // Conversion rate: 1 USD to 80 INR
  const exchangeRate = 80;
  
  // Function to convert prices from USD to INR
  function convertToINR(priceUSD) {
    return priceUSD * exchangeRate;
  }
  
  // Use the map function to create a new object with prices in INR
  const inventoryINR = Object.keys(inventory).reduce((acc, item) => {
    acc[item] = convertToINR(inventory[item]);
    return acc;
  }, {});
  
  // Display the inventory with prices in INR
  console.log("Inventory in INR:", inventoryINR);
  