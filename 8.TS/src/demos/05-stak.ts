
// 

export class Stack<T> {
  private items: T[] = [];

  constructor(initial: T) {
    this.items.push(initial)
  } 

  // Push a new item onto the stack
  public push(item: T): void {
    this.items.push(item);
  }

  // Pop the top item from the stack
  public pop(): T | undefined {
    return this.items.pop();
  }

  // Check if the stack is empty
  public isEmpty(): boolean {
    return this.items.length === 0;
  }
}

const stack = new Stack(2)
stack.push(2)
stack.push(2)
stack.push(5)
console.log(stack)
stack.pop()
console.log(stack.isEmpty())

