/*

  write a function that accepts an array that only contains
  two types of things: numbers and arrays. those nested arrays
  also only contain numbers and other, nested arrays.

  example: nestedAdd([1, 2, [3]]) = 6
           nestedAdd([[[2]], 1, [1, 3]]) = 7

 */

function nestedAdd(array) {
  if (array.length === 1 && typeof array[0] === "number") return array[0];
  if (typeof array === "number") return array;

  var total = 0;

  for (var i = 0; i < array.length; i++) {
    total += nestedAdd(array[i]);
  }
  return total;
}

test("nested arrays addition", () => {
  expect(nestedAdd([1, 2, 3])).toEqual(6);
  expect(nestedAdd([1, [2], 3])).toEqual(6);
  expect(nestedAdd([[[[[[[[[5]]]]]]]]])).toEqual(5);
  expect(nestedAdd([10, [12, 14, [1], [16, [20]]], 10, 11])).toEqual(94);
});
