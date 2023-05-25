export class Node<TypeOfData> {
  next: Node<TypeOfData> | null = null;
  val: TypeOfData;

  constructor(val: TypeOfData) {
    this.val = val;
  }
}

