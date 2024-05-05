const { calculatePrices } = require('./index');

describe('calculatePrices', () => {
  test('calculates the correct total price for a range', () => {
    const pricesEntries = [
      { start_date: "1/1/2022", end_date: "19/1/2022", price: 5 },
      { start_date: "4/1/2022", end_date: "11/1/2022", price: 10 },
      { start_date: "15/1/2022", end_date: "22/1/2022", price: 7 },
      { start_date: "3/1/2022", end_date: "12/1/2022", price: 3 },
    ];
    const result = calculatePrices(pricesEntries, '1/1/2022', '13/1/2022');
    expect(result).toBe(45); 
  });
  test('calculates total price for a simple range without overlaps', () => {
    const pricesEntries = [
      { start_date: "1/1/2022", end_date: "3/1/2022", price: 10 }
    ];
    const result = calculatePrices(pricesEntries, '1/1/2022', '3/1/2022');
    expect(result).toBe(30);
  });
  test('calculates total price with multiple overlapping entries', () => {
    const pricesEntries = [
      { start_date: "1/1/2022", end_date: "10/1/2022", price: 5 },
      { start_date: "5/1/2022", end_date: "15/1/2022", price: 10 },
      { start_date: "12/1/2022", end_date: "20/1/2022", price: 15 }
    ];
    const result = calculatePrices(pricesEntries, '1/1/2022', '20/1/2022');
    expect(result).toBe(225); 
  });
  test('returns zero when no prices are defined for the dates', () => {
    const pricesEntries = [
      { start_date: "1/1/2022", end_date: "3/1/2022", price: 10 }
    ];
    const result = calculatePrices(pricesEntries, '4/1/2022', '6/1/2022');
    expect(result).toBe(0);
  });
  test('calculates total price with partial overlaps at the start and end', () => {
    const pricesEntries = [
      { start_date: "30/12/2021", end_date: "2/1/2022", price: 5 },
      { start_date: "3/1/2022", end_date: "5/1/2022", price: 10 }
    ];
    const result = calculatePrices(pricesEntries, '1/1/2022', '4/1/2022');
    expect(result).toBe(30); 
  });
  test('calculates total price for a single day search', () => {
    const pricesEntries = [
      { start_date: "1/1/2022", end_date: "1/1/2022", price: 100 },
      { start_date: "1/1/2022", end_date: "2/1/2022", price: 50 }
    ];
    const result = calculatePrices(pricesEntries, '1/1/2022', '1/1/2022');
    expect(result).toBe(50); 
  });
  
});
