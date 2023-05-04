export class Node {
  next: Node | null = null;
  val: number;

  constructor(val: number) {
    this.val = val;
  }
}

