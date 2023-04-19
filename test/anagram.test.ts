import { anagrams } from '../src/index';

describe('Uncompress string function', () => {
  const testCases = [
    {
      args: ['restful', 'fluster'],
      result: true
    },
    {
      args: ['cats', 'tocs'],
      result: false
    },
    {
      args: ['monkeyswrite', 'newyorktimes'],
      result: true
    },
    {
      args: ['paper', 'reapa'],
      result: false
    },
    {
      args: ['elbow', 'below'],
      result: true
    },
  ];

  testCases.forEach(test => {
    it(`should generate expected result as ${test.result}`, () => {
      const result = anagrams(test.args[0], test.args[1]);
      expect(result).toEqual(test.result);
    })
  })
})