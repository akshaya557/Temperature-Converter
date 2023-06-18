const celsiusInput = document.getElementById('celsius-input');
const fahrenheitInput = document.getElementById('fahrenheit-input');

celsiusInput.addEventListener('input', convertCelsiusToFahrenheit);
fahrenheitInput.addEventListener('input', convertFahrenheitToCelsius);

function convertCelsiusToFahrenheit() {
  const celsius = parseFloat(celsiusInput.value);
  if (!isNaN(celsius)) {
    const fahrenheit = (celsius * 9/5) + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2);
  } else {
    fahrenheitInput.value = '';
  }
}

function convertFahrenheitToCelsius() {
  const fahrenheit = parseFloat(fahrenheitInput.value);
  if (!isNaN(fahrenheit)) {
    const celsius = (fahrenheit - 32) * 5/9;
    celsiusInput.value = celsius.toFixed(2);
  } else {
    celsiusInput.value = '';
  }
}
