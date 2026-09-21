function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
  if (hours <= 8) {
    return Math.floor(hours * rate);
  }
  if (hours <= 12) {
    const regularPay = 8 * rate;
    const overtimePay = (hours - 8) * rate * 1.5;
    return Math.floor(regularPay + overtimePay);
  }
  const regularPay = 8 * rate;
  const overtimePay = 4 * rate * 1.5;
  const doubleTimePay = (hours - 12) * rate * 2;
  return Math.floor(regularPay + overtimePay + doubleTimePay);
}

module.exports = { isValidShift, calculatePay };
