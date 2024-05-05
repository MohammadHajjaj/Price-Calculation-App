
const moment = require('moment')
let format =  'DD/MM/YYYY'
  
const calculatePrices = (pricesEntries, search_start, search_end) =>{
    let totalCost = 0;
    let startDate = moment(search_start,format);
    let endDate = moment(search_end, format)
    const entriesWithConvertedDates = pricesEntries.map(entry => ({
      ...entry,
      start_date: moment(entry.start_date, format),
      end_date: moment(entry.end_date, format)
    }));
    for (let date = startDate; date <= endDate; date.add(1,'d')) {
        let possibleEntries = entriesWithConvertedDates.filter(entry=>{
            return date >= entry.start_date && date <= entry.end_date
        })
        totalCost += possibleEntries[possibleEntries?.length-1]?.price || 0
}
return totalCost
}

console.log(calculatePrices([
  {start_date: "1/1/2022", end_date: "19/1/2022", price: 5},
  {start_date: "4/1/2022", end_date: "11/1/2022", price: 10},
  {start_date: "15/1/2022", end_date: "22/1/2022", price: 7},
  {start_date: "3/1/2022", end_date: "12/1/2022", price: 3},
 ],
 '1/1/2022', 
 '13/1/2022'
 ))
module.exports = { calculatePrices };
