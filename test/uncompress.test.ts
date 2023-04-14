import { uncompress } from '../src/index';

describe('Uncompress string function', () => {
  const testCases = [
    {
      string: '2c3a1t3s',
      result: 'ccaaatsss'
    },
    {
      string: '4s2b1z',
      result: 'ssssbbz'
    },
    {
      string: '2p1o5p',
      result: 'ppoppppp'
    },
    {
      string: '3n12e2z',
      result: 'nnneeeeeeeeeeeezz'
    },
    {
      string: '127y',
      result: 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
    },
  ];

  testCases.forEach(test => {
    it(`should generate expected result as ${test.result}`, () => {
      const result = uncompress(test.string);
      expect(result).toEqual(test.result);
    })
  })
})