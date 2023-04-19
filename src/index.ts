export const uncompress = (s: string): string => {
  let result: string[] = [];
  const numbers: string = '0123456789';
  let j: number = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (numbers.includes(s[i])) {
      continue;
    } else {
      const num = Number(s.slice(j, i));
      
      for (let count = 0; count < num; count++) {
        result.push(s[i]);
      }
      j = i + 1;
    }
  }
  return result.join('');
};

export const compress = (s: string): string => {
  let result:string = '';
  let i: number = 0;
  let j: number = 0;

  while(i <= s.length) {
    if(s[i] === s[j]) {
      i = i + 1;
    } else {
      const num = i - j;
      num === 1 ? result = result + s[j] : result = result + num + s[j];
      j = i;
    }
  }

  return result;
};

export const anagrams = (s1: string, s2: string): boolean => {
  const count = {};
  for (let char of s1) {
    if (!(char in count)) {
      count[char] = 0;
    }
    count[char] += 1;
  }

  for (let char of s2) {
    if (char in count) {
      count[char] -= 1;
    } else {
      return false;
    }
  }

  for (let char in count) {
    if (count[char] !== 0) {
      return false;
    }
  }

  return true;
}

export const mostFrequentChar = (s: string): string => {
  let best: string = '';
  const charMap = {};
  
  for (let char of s) {
    if (!(char in charMap)) {
      charMap[char] = 0;
    }
    charMap[char] += 1;
  }
  
  for (let char in charMap) {
    if (best === '' || charMap[char] > charMap[best]) {
      best = char;
    }
  }
  
  return best;
};