import { rotateLeftArray } from "../src";

describe("rotateLeftArray", () => {
  const testCases = [
    {
      arr: [1,2,3,4,5,6,7,8],
      times: 1,
      res: [2,3,4,5,6,7,8,1]
    },
    {
      arr: [1,2,3,4,5,6,7,8],
      times: 2,
      res: [3,4,5,6,7,8,1,2]
    },
    {
      arr: [1,2,3,4,5,6,7,8],
      times: 3,
      res: [4,5,6,7,8,1,2,3]
    },
    {
      arr: [1,2,3,4,5,6,7,8],
      times: 4,
      res: [5,6,7,8,1,2,3,4]
    },
    {
      arr: [1,2,3,4,5,6,7,8],
      times: 5,
      res: [6,7,8,1,2,3,4,5]
    },
    {
      arr: [1,2,3,4,5,6,7,8],
      times: 6,
      res: [7,8,1,2,3,4,5,6]
    },
    {
      arr: [1,2,3,4,5,6,7,8],
      times: 7,
      res: [8,1,2,3,4,5,6,7]
    },
    {
      arr: [1,2,3,4,5,6,7,8],
      times: 8,
      res: [1,2,3,4,5,6,7,8]
    },
    {
      arr: [1,2,3,4,5,6,7,8],
      times: 9,
      res: [2,3,4,5,6,7,8,1]
    },
  ];

  let count: number = 0;

  testCases.forEach(test => {
    it(`should generate expected result as ${test.res} for ${test.times}`, () => {
      const result = rotateLeftArray(test.arr, test.times);
      expect(result).toEqual(test.res);
    })
  })
})