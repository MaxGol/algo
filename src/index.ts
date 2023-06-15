import { Node } from './classes/Node'

/* ---------- ARRAYS ---------- */

export const rotateLeftArray = (arr: number[], times: number): number[] => {
  const possibleTimes = times % arr.length;
  for (let i: number = 0; i < possibleTimes; i++) {
    const firstEl: number = arr.shift()!;
    arr.push(firstEl);
  }
  return arr;
}

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

// Count most frequnt chars.
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

// Bubble sort
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

/* ---------- LINKED LIST ---------- */

// array of linked list values
export const linkedListValues = <T>(head: Node<T>): T[] => {
  let values: T[] = [];
  let current: Node<T> | null = head;

  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }

  return values;
}

// sum of linked list values
export const sumListIterative = (head: Node<number>) => {
  let sum = 0;
  let current: Node<number> | null = head;
  
  while (current !== null) {
    sum += current.val;
    current = current.next;
  }
  
  return sum;
};

// sum of linked list values
export const sumListRecursive = (head: Node<number> | null): number => {
  if (head === null) return 0;
  return head.val + sumListRecursive(head.next);
};

// reverse linked list
export const reverseLinkedList = <T>(head: Node<T>): Node<T> => {
  let prev: Node<T> | null = null;
  let current: Node<T> | null = head;

  while (current !== null) {
    const next: Node<T> | null = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  
  return prev as Node<T>;
}

// zipped linked list
export const zipperLists = <T extends number | string>(head1: Node<T>, head2: Node<T>): Node<T> => {
  const head: Node<T> = head1;
  let tail: Node<T> = head;
  let current1: Node<T> | null = head1.next;
  let current2: Node<T> | null = head2;
  let count: number = 0;
  
  while (current1 !== null && current2 !== null) {
    if (count % 2 === 0) { // even
      tail.next = current2;
      current2 = current2.next;
    } else { // odd
      tail.next = current1;
      current1 = current1.next;
    }
    tail = tail.next;
    count += 1;
  }
  
  if (current1 !== null) tail.next = current1;
  if (current2 !== null) tail.next = current2;
  
  return head;
};

export const swapPairs = (head: Node<number>): Node<number> => {
  let dummy: Node<number> = {
    val: 0,
    next: null
  }
  dummy.next = head;
  let previous: Node<number> = dummy;
  let current: Node<number> | null = dummy.next;

  while (current !== null && current.next !== null) {
    let next_pair = current.next.next;
    let second = current.next;
    
    second.next = current;
    current.next = next_pair;
    previous.next = second;

    previous = current;
    current = next_pair
  }

  return dummy.next;
};

export const mergeLists = (head1: Node<number>, head2: Node<number>): Node<number> | null => {
  const dummyHead: Node<number> = {
    val: 0, 
    next: null
  };

  let tail: Node<number> = dummyHead;
  let current1: Node<number> | null = head1;
  let current2: Node<number> | null = head2;

  while (current1 !== null && current2 !== null) {
    if (current1.val < current2.val) {
      tail.next = current1;
      current1 = current1.next;
    } else {
      tail.next = current2;
      current2 = current2.next;
    }
  }

  if (current1 !== null) tail.next = current1;
  if (current1 !== null) tail.next = current1;

  return dummyHead.next;
}

export const rotateRight = (head: Node<number> | null, k: number): Node<number> | null => {
  if (!head || !head.next || k === 0) {
    return head;
  }

  let current: Node<number> | null = head;
  let length = 1;

  while(current.next !== null) {
    current = current.next;
    length++;
  }

  current.next = head;

  k = length - (k % length);

  while(k > 0) {
    if(current !== null) {
      current = current.next;
    }
    k--;
  }

  let newHead: Node<number> | null = current!.next;
  current!.next = null;

  return newHead;
};
