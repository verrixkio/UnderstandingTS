type Combinable = number | string;

function combine(input1: Combinable, input2: Combinable) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = (input1 + input2);
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const total = combine(10, 11);
console.log("🚀 ~ file: app.ts ~ line 7 ~ total", total)

const combineNames = combine("Thomas ", "Hulsmans");
console.log("🚀 ~ file: app.ts ~ line 14 ~ combineNames", combineNames)