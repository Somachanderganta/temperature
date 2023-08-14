const inputCelsius = document.getElementById('inputCelsius');
const inputFahrenheit = document.getElementById('inputFahrenheit');

inputCelsius.addEventListener('input', convertToCelsius);
inputFahrenheit.addEventListener('input', convertToFahrenheit);

function convertToCelsius() {
  const fahrenheit = inputCelsius.value;
  const celsius = (fahrenheit - 32) * (5 / 9);
  inputFahrenheit.value = isNaN(celsius) ? '' : celsius.toFixed(2);
}

function convertToFahrenheit() {
  const celsius = inputFahrenheit.value;
  const fahrenheit = (celsius * 9 / 5) + 32;
  inputCelsius.value = isNaN(fahrenheit) ? '' : fahrenheit.toFixed(2);
}
