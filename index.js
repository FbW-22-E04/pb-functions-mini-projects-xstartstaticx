// The Fortune Teller
function tellFortune(x, y, z, n) {
  console.log(
    "You will be a",
    x,
    "in",
    y + ",",
    "and married to",
    z,
    "with",
    n,
    "kids."
  );
}
tellFortune("Web Developer", "Hamburg", "Esther", "No");
tellFortune("Manager of a car wash chain", "London", "your job", "17");
tellFortune("Taxi Driver", "the jungle, the mighty jungle", "a lion", "4");

// The Puppy Age Calculator
function calculateDogAge(puppyAge, conversionRate = 7) {
  console.log(
    "Your doggie is",
    puppyAge * conversionRate,
    "years old in dog years!"
  );
}
calculateDogAge(1, 7);
calculateDogAge(7, 7);
calculateDogAge(15);

// The Lifetime Supply Calculator
function calculateSupply(age, amountPerDay) {
  const maxAge = 100;
  let amountConsumed = (maxAge - age) * (amountPerDay * 365.25);
  console.log(
    "You will need",
    Math.round(amountConsumed),
    "to last you until the ripe old age of",
    maxAge
  );
}
calculateSupply(25, 3);
calculateSupply(87, 4);
calculateSupply(14, 2);
calculateSupply(25, 2.5);

// The Geometrizer
function calcCircumference(radius) {
  let circumference = 2 * Math.PI * radius;
  console.log("The circumference is", circumference);
}
calcCircumference(3);

function calcArea(radius) {
  let area = Math.PI * radius ** 2;
  console.log("The area is", area);
}
calcArea(3);
// The Temperature Converter
function celsiusToFahrenheit() {
  let celsius = 0;
  let fahrenheit = (celsius / 5) * 9 + 32;
  console.log(celsius + "°C is", fahrenheit + "°F");
}
celsiusToFahrenheit();

function fahrenheitToCelsius(temperature) {
  let fahrenheit = temperature;
  let celsius = ((fahrenheit - 32) * 5) / 9;
  console.log(fahrenheit + "°F is", celsius + "°C");
}
fahrenheitToCelsius(32);
