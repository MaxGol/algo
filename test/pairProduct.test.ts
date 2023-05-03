import { pairProduct } from '../src/index';

describe('Uncompress string function', () => {
  const testCases = [
    {
      args: {
        numbers: [3, 2, 5, 4, 1],
        targetSum: 15
      },
      result: [0, 2]
    },
    {
      args: {
        numbers: [4, 7, 9, 2, 5, 1],
        targetSum: 63
      },
      result: [1, 2]
    },
    {
      args: {
        numbers: [4, 7, 9, 2, 5, 1],
        targetSum: 35
      },
      result: [1, 4]
    },
    {
      args: {
        numbers: [1, 6, 7, 2],
        targetSum: 12
      },
      result: [1, 3]
    },
    {
      args: {
        numbers: [9, 9],
        targetSum: 81
      },
      result: [0, 1]
    },
  ];

  testCases.forEach(test => {
    it(`should generate expected result as ${test.result}`, () => {
      const result = pairProduct(test.args.numbers, test.args.targetSum);
      expect(result).toEqual(test.result);
    })
  })
})