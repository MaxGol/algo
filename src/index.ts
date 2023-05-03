// Uncompress string from ex. 3a3b3c => aaabbbccc
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

// Compress string from ex. aaabbbccc => 3a3b3c
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

// Find if strings are anagrams => restful === fluster both words using same letters
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

// Count most fre
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

export const pairSum = (numbers: number[], targetSum: number): number[] | undefined => {
  const previousNum = {};
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const complement = targetSum - num;
    if (complement in previousNum) {
      return [previousNum[complement], i]
    };
    
    previousNum[num] = i;
  }
};

export const pairProduct = (numbers: number[], targetProduct: number): number[] | undefined => {
  const previousNum = {};
  
  for (let i = 0; i < numbers.length; i++) {
    const currentNum = numbers[i];
    const complement = targetProduct/currentNum;
    if (complement in previousNum) return [previousNum[complement], i];
    
    previousNum[currentNum] = i;
  }
};

export const fiveSort = (nums: number[]): number[] => {
  let i: number = 0;
  let j: number = nums.length - 1;

  while(i <= j) {
    if (nums[j] === 5) {
      j -= 1;
    } else if (nums[i] === 5) {
      [ nums[i], nums[j]] = [nums[j], nums[i]];
      i += 1;
    } else {
      i += 1;
    }
  }
  return nums;
};

export const bubbleSort = (nums: number[]): number[] => {

  for(let i: number = 0; i < nums.length; i++) {
    for(let j: number = 0; j < nums.length - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        const temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
}