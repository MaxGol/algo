import { 
  linkedListValues, 
  sumListIterative, 
  sumListRecursive, 
  reverseLinkedList, 
  zipperLists, 
  swapPairs,
  rotateRight
} from '../src/index';
import { Node } from '../src/classes/Node';

const a = new Node(11);
const b = new Node(12);
const c = new Node(13);
const d = new Node(14);

a.next = b;
b.next = c;
c.next = d;

describe('linkedList', () => {
  const astr = new Node("dot");
  const bstr = new Node("mot");
  const cstr = new Node("got");
  const dstr = new Node("zot");

  astr.next = bstr;
  bstr.next = cstr;
  cstr.next = dstr;

  it(`should generate an array of values`, () => {
    const result = linkedListValues<string>(astr);
    expect(result).toEqual(['dot', 'mot', 'got', 'zot']);
  })
})

describe('sum of linked list values iterative', () => {
  it(`should generate a sum of linked list values`, () => {
    const result = sumListIterative(a);
    expect(result).toEqual(11 + 12 + 13 + 14);
  })
})

describe('sum of linked list values recursive', () => {
  it(`should generate a sum of linked list values`, () => {
    const result = sumListRecursive(a);
    expect(result).toEqual(11 + 12 + 13 + 14);
  })
})

describe('reverse linked list in place', () => {
  it(`should generate a sum of linked list values`, () => {
    const reversed = reverseLinkedList<number>(a);
    const result = linkedListValues<number>(reversed)
      expect(result).toEqual([14, 13, 12, 11]);
  })
})

describe('zipped linked list in place', () => {
  const zipA = new Node('A');
  const zipB = new Node('B');
  const zipC = new Node('C');

  zipA.next = zipB;
  zipB.next = zipC;

  const zipX = new Node(1);
  const zipY = new Node(2);
  const zipZ = new Node(3);

  zipX.next = zipY;
  zipY.next = zipZ;

  it(`should generate a zipped linked list`, () => {
    const zipped = zipperLists<number | string>(zipA, zipX);
    const result = linkedListValues<number | string>(zipped)
      expect(result).toEqual(['A', 1, 'B', 2, 'C', 3]);
  })
})

describe('swap pairs linked list in place', () => {
  const zipA = new Node(1);
  const zipB = new Node(2);
  const zipC = new Node(3);
  const zipD = new Node(4);

  zipA.next = zipB;
  zipB.next = zipC;
  zipC.next = zipD;

  it(`should generate a linked list with swaped nodes`, () => {
    const zipped = swapPairs(zipA);
    const result = linkedListValues<number>(zipped)
    expect(result).toEqual([2, 1, 4, 3]);
  })
})

describe('Rotate linked list to the right', () => {
  const zipA = new Node(1);
  const zipB = new Node(2);
  const zipC = new Node(3);
  const zipD = new Node(4);

  zipA.next = zipB;
  zipB.next = zipC;
  zipC.next = zipD;

  it('should rotate linked list', () => {
    const rotated = rotateRight(zipA, 2);
    const result = linkedListValues<number>(rotated!)
    console.log('======>', result);
    expect(result).toEqual([3,4,1,2]);
  });
})