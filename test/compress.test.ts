import { compress } from '../src/index';

describe('Uncompress string function', () => {
  const testCases = [
    {
      string: 'ccaaatsss',
      result: '2c3at3s'
    },
    {
      string: 'ssssbbz',
      result: '4s2bz'
    },
    {
      string: 'ppoppppp',
      result: '2po5p'
    },
    {
      string: 'nnneeeeeeeeeeeezz',
      result: '3n12e2z'
    },
    {
      string: 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',
      result: '127y'
    },
  ];

  testCases.forEach(test => {
    it(`should generate expected result as ${test.result}`, () => {
      const result = compress(test.string);
      expect(result).toEqual(test.result);
    })
  })
})