// const sum = require('sum');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

const value = 'Kitty Cat'

value.map(doSomething)
// => Uncaught TypeError: items.map is not a function

console.log( map(doSomething)(value) );
// => ['K', 'i', 't', 't', 'y', ' ', 'C', 'a', 't']