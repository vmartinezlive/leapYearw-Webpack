export function Leapyear(inputyear) {
  const output = [];
  if (inputyear % 4 === 0 || inputyear % 400 === 0) {
    output.push("leapyear");
  } else if (inputyear % 4 != 0 || inputyear % 100 === 0){
    output.push("not a leap year");
  }
  return output;
}
