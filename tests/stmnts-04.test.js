const {
  fahrenheitToCelsius,
  celsiusToFahrenheit,
} = require('../src/stmnts-04');

test('fahrenheitToCelsius', () => {
  expect(fahrenheitToCelsius(32)).toBeCloseTo(0);
  expect(fahrenheitToCelsius(212)).toBeCloseTo(100);
  expect(fahrenheitToCelsius(0)).toBeCloseTo(-17.78);
  expect(fahrenheitToCelsius(40.25)).toBeCloseTo(4.58);
});

test('celsiusToFahrenheit', () => {
  expect(celsiusToFahrenheit(0)).toBeCloseTo(32);
  expect(celsiusToFahrenheit(100)).toBeCloseTo(212);
  expect(celsiusToFahrenheit(-17.78)).toBeCloseTo(-0);
  expect(celsiusToFahrenheit(20.25)).toBeCloseTo(68.45);
});
