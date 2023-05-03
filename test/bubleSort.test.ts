import { bubbleSort } from '../src/index';

describe('Anagrams', () => {
  const testCases = [
    {
      args: [0, -1, -3, 3, 5, 1, 1],
      result: [-3, -1, 0, 1, 1, 3, 5]
    },
    {
      args: [88, 12, 100, 0, -5, 22],
      result: [-5, 0, 12, 22, 88, 100]
    },
    {
      args: [9, 8, 7, 6, 5, 4, 3, 2, 1],
      result: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    },
    {
      args: [-100, -15, -33, -65, -Infinity],
      result: [-Infinity, -100, -65, -33, -15]
    },
  ];

  testCases.forEach(test => {
    it(`should generate expected result as ${test.result}`, () => {
      const result = bubbleSort(test.args);
      expect(result).toEqual(test.result);
    })
  })
})