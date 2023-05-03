import { pairSum } from '../src/index';

describe('Pair sum', () => {
  const testCases = [
    {
      args: {
        numbers: [3, 2, 5, 4, 1],
        targetSum: 8
      },
      result: [0, 2]
    },
    {
      args: {
        numbers: [4, 7, 9, 2, 5, 1],
        targetSum: 5
      },
      result: [0, 5]
    },
    {
      args: {
        numbers: [4, 7, 9, 2, 5, 1],
        targetSum: 3
      },
      result: [3, 5]
    },
    {
      args: {
        numbers: [1, 6, 7, 2],
        targetSum: 13
      },
      result: [1, 2]
    },
    {
      args: {
        numbers: [9, 9],
        targetSum: 18
      },
      result: [0, 1]
    },
  ];

  testCases.forEach(test => {
    it(`should generate expected result as ${test.result}`, () => {
      const result = pairSum(test.args.numbers, test.args.targetSum);
      expect(result).toEqual(test.result);
    })
  })
})