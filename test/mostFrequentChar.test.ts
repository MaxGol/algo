import { mostFrequentChar } from '../src/index';

describe('Uncompress string function', () => {
  const testCases = [
    {
      string: 'bookeeper',
      result: 'e'
    },
    {
      string: 'david',
      result: 'd'
    },
    {
      string: 'abby',
      result: 'b'
    },
    {
      string: 'mississippi',
      result: 'i'
    },
    {
      string: 'potato',
      result: 'o'
    },
  ];

  testCases.forEach(test => {
    it(`should generate expected result as ${test.result}`, () => {
      const result = mostFrequentChar(test.string);
      expect(result).toEqual(test.result);
    })
  })
})