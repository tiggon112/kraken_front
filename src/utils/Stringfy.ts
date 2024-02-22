export function formatNumberToShortScale(number: number) {
  let divisor;
  let suffix;

  if (number >= 1e12) {
    divisor = 1e12;
    suffix = 'T'; // Trillions
  } else if (number >= 1e9) {
    divisor = 1e9;
    suffix = 'B'; // Billions
  } else if (number >= 1e6) {
    divisor = 1e6;
    suffix = 'M'; // Millions
  } else if (number >= 1e3) {
    divisor = 1e3;
    suffix = 'K'; // Thousands
  } else {
    return number.toString(); // Return the number as-is if it's less than 1000
  }

  const shortNumber = (number / divisor).toFixed(2) + suffix;
  return shortNumber;
}

export function formatNumber(number: number) {
  return number.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function customRound(number: number) {
  const factor = 100;
  const rounded = Math.floor(number * factor) / factor; // Round down to 2 decimal places
  const remainder = (number * factor) % 1; // Get the fractional part of the number * 100

  // Check if the third decimal place is 5 or more, and adjust the result accordingly
  if (remainder >= 0.5) {
    return (Math.floor(number * factor) + 1) / factor;
  }
  return rounded;
}
