const {convert }= require('./index.js');

test('convert 1000Bytes to kb equal 1', () => {
  expect(convert(1000, 'kb')).toBe(1.000);
});
