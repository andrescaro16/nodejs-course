const PI = 3.14;

export function add(x, y) {
  return x + y;
}

export function substract(x, y) {
  return x - y;
}

export function division(x, y) {
  if (y == 0) {
    showMessage("You cannot divide by 0");
  } else {
    return x / y;
  }
}

export function multiply(x, y) {
  return x * y;
}

export function showMessage(message) {
  console.log(message);
}

//console.log(module)


export default {
  add,
  substract,
  division,
  multiply,
  showMessage,
}


// exports.add = add;
// exports.substract = substract;
// exports.division = division;
// exports.multiply = multiply;


//console.log(module)