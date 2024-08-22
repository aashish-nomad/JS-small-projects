const primaryInput = document.querySelector('#primary-input');
const secondaryInput = document.querySelector('#secondary-input');
const primaryUnit = document.querySelector('#primary-unit');
const secondaryUnit = document.querySelector('#secondary-unit');

primaryInput.value = 0
secondaryInput.value = 0

function update(e) {
  const elementId = e.target.id;

  // if (elementId == 'primary-input' || elementId == 'primary-unit' || elementId == 'secondary-unit') {
  //   secondaryInput.value = 80085
  // }

  // Better way to handle the above case is to simply write the the above in else statememt.

  if (elementId == 'secondary-input') {
    primaryInput.value = calculate(secondaryUnit.value, primaryUnit.value, secondaryInput.value);
  } else {
    secondaryInput.value = calculate(primaryUnit.value, secondaryUnit.value, primaryInput.value);
  }
}

function calculate(primaryTempUnit, secondaryTempUnit, temp) {

  if (primaryTempUnit == secondaryTempUnit) {
    return temp;
  }

  const combination = primaryTempUnit + '-' + secondaryTempUnit; primaryUnit.value;
  let result;

  switch (combination) {
    case 'farenheit-celcius':
      // C =(F-32) * 5/9
      result = (Number(temp) - 32) * 5 / 9;
      break;

    case 'celcius-farenheit':
      // F = (C * 9/5) + 32
      result = (Number(temp) * (9 / 5)) + 32;
      break;

    case 'kelvin-farenheit':
      // F = (k-273.15) * 9/5 + 32
      result = (Number(temp) - 273.15) * 9 / 5 + 32
      break;

    case 'kelvin-celcius':
      // C = k - 273.15
      result = Number(temp) - 273.15;
      break;

    case 'farenheit-kelvin':
      // k = (f-32) * 5/9 + 273.15
      result = (Number(temp) - 32) * (5 / 9) + 273.15;
      break;

    case 'celcius-kelvin':
      // k = c + 273.15
      result = Number(temp) + 273.15;
      break;

    default:
      break;
  }

  return result.toFixed(2);
}

primaryInput.addEventListener('change', update)
secondaryInput.addEventListener('change', update)
primaryUnit.addEventListener('change', update)
secondaryUnit.addEventListener('change', update)