import { linkedListValues, sumListIterative, sumListRecursive } from '../src/index';
import { Node } from '../src/classes/Node';

const a = new Node(11);
const b = new Node(12);
const c = new Node(13);
const d = new Node(14);

a.next = b;
b.next = c;
c.next = d;

describe('linkedListValues', () => {
  it(`should generate an array of values`, () => {
    const result = linkedListValues(a);
    expect(result).toEqual([11, 12, 13, 14]);
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