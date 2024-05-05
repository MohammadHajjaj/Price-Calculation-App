# Price Calculation App
This function calculates the total cost based on dynamic price entries and a given date range as requested on the task.

## Prerequisites
nodejs

## Installation

1. **Clone the repository**:
2. **Install dependencies**:
   ```bash
   npm install
   ```

## Running the Application

To run the application, you need to provide your price entries and the date range for which you want to calculate the total price.

1. **Modify the `index.js`**:
   - Open `index.js` 
   - Modify the `pricesEntries` array and `search_start`, `search_end` parameters to match your desired inputs.

   ```javascript
   const pricesEntries = [
     { start_date: "DD/MM/YYYY", end_date: "DD/MM/YYYY", price: int },
     // Add more entries as needed
   ];

   const search_start = "DD/MM/YYYY"; // Start date of your search range
   const search_end = "DD/MM/YYYY";   // End date of your search range
   ```

2. **Run the script**:
   ```
   node index.js
   ```

   This command will execute the script and print the total calculated price based on your inputs.

## Testing

To run the tests and see how the application handles different scenarios:

```
npm test
```

This will execute all predefined tests included in the `index.test.js` file.

## Additional Notes

- The dates format is `"DD/MM/YYYY"`.
