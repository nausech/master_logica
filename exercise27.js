function getConvertDaysToYearMonthDay(days) {
  let years = Math.floor(days / 365);
  let months = Math.floor((days % 365) / 30);
  let daysNumber = Math.floor((days % 365) % 30);
  return `${years} years, ${months} months, ${daysNumber} days`;
}

console.log(getConvertDaysToYearMonthDay(365));