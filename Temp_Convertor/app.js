var celciusInput = document.querySelector('#celcius > input');
var fahrenheitInput = document.querySelector('#fahrenheit > input');
var kelvinInput = document.querySelector('#kelvin > input');

function roundNum(num) {
  return Math.round(num * 100)/100;
}

function celciustoFahrenheitKelvin(){
  var cTemp = parseFloat(celciusInput.value);
  var fTemp = cTemp * (9/5) + 32;
  var kTemp = cTemp + 273.13;
  fahrenheitInput.value = roundNum(fTemp);
  kelvinInput.value = roundNum(kTemp);
}

function fahrenheittoCelciusKelvin(){
  var fTemp = parseFloat(fahrenheitInput.value);
  var cTemp = (fTemp -32) * (5/9);
  var kTemp = (fTemp + 459.67) * (5/9);
  celciusInput.value = roundNum(cTemp);
  kelvinInput.value = roundNum(kTemp);
}

function kelvintocelciusfahrenheit() {
  var kTemp = parseFloat(kelvinInput.value);
  var cTemp = kTemp - 273.15;
  var fTemp = (kTemp - 273) * (9/5) + 32 ;
  celciusInput.value = roundNum(cTemp);
  fahrenheitInput.value = roundNum(fTemp);
}
celciusInput.addEventListener('input', celciustoFahrenheitKelvin);

fahrenheitInput.addEventListener('input', fahrenheittoCelciusKelvin);

kelvinInput.addEventListener('input', kelvintocelciusfahrenheit);
