import { fiveSort } from '../src/index';

describe.only('Uncompress string function', () => {
  const testCases = [
    {
      args: {
        numbers: [12, 5, 1, 5, 12, 7],
      },
      result: [12, 7, 1, 12, 5, 5]
    },
    {
      args: {
        numbers: [5, 2, 5, 6, 5, 1, 10, 2, 5, 5],
      },
      result: [2, 2, 10, 6, 1, 5, 5, 5, 5, 5]
    },
    {
      args: {
        numbers: [5, 5, 5, 1, 1, 1, 4],
      },
      result: [4, 1, 1, 1, 5, 5, 5]
    },
    {
      args: {
        numbers: [5, 5, 6, 5, 5, 5, 5],
      },
      result: [6, 5, 5, 5, 5, 5, 5]
    },
    {
      args: {
        numbers: [5, 1, 2, 5, 5, 3, 2, 5, 1, 5, 5, 5, 4, 5],
      },
      result: [4, 1, 2, 1, 2, 3, 5, 5, 5, 5, 5, 5, 5, 5]
    },
  ];

  testCases.forEach(test => {
    it(`should generate expected result as ${test.result}`, () => {
      const result = fiveSort(test.args.numbers);
      expect(result).toEqual(test.result);
    })
  })
})