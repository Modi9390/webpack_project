class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  preappend(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }
  append(value) {
    let node = new Node(value);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = node;
    }
    this.size++;
  }

  // remove the last element from the list
  pop() {

    if (!this.head) {
        console.error("Empty list");
        return;
    }
    if (!this.head.nextNode) {

        this.head = null;
    }else{
        let current = this.head;
        let previous = null;
        while (current.nextNode) {
            previous = current;
            current = current.nextNode;
        }

        previous.nextNode = null;
    }
    this.size--;
  }
  tail() {
    if (!this.head) {
      console.error("the list is empty");
      return;
    }
    let current = this.head;

    while (current.nextNode) {
      current = current.nextNode;
    }
    console.log("Last Node Value:", current.value);
    return current;
  }
  sizeNode() {
    if (!this.head) {
      console.error("the list is empty");
    }
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.nextNode;
    }
    console.log("The size of the list is: ", count);

    return count;
  }
  headNode() {
    if (!this.head) {
      console.error("the list is empty");
    }
    let firstNode = this.head;

    console.log("The first node of the list is: ", firstNode.value);
    return firstNode.value;
  }
  contains(value) {
    let current = this.head;
    let found = false;
    while (current) {
      if (current.value == value) {
        found = true;
        break;
      }
      current = current.nextNode;
    }
    console.log(
      `The list ${found ? "contains" : "does not contain"} the value ${value}`
    );
    return found;
  }
  atIndex(index) {
    let current = this.head;
    let count = 0;
    while (current) {
      if (count === index) {
        console.log(`The index: ${index} value is ${current.value}`);
        return current.value;
      }
      current = current.nextNode;
      count++;
    }
  }
  removeAt(index) {
    if (!this.head) {
        console.error(`The given index: ${index} does not exist`);
    } else {
        if (index === 0) {
            // If removing the first node
            this.head = this.head.nextNode;
        } else {
            let current = this.head;
            let previous = null;
            let currentIndex = 0;

            while (current && currentIndex < index) {
                previous = current;
                current = current.nextNode;
                currentIndex++;
            }

            if (currentIndex === index && current) {
                // Remove the node at the specified index
                previous.nextNode = current.nextNode;
            } else {
                console.error(`The given index: ${index} does not exist`);
            }
        }

        this.size--;
    }
}

  insertAt(value, index){
    let node = new Node(value);

    if (!this.head || index === 0) {
        node.nextNode = this.head
        this.head = node;
    }else{
        let current = this.head;
        let previous = null;
        let currentIndex = 0;

        while (current && currentIndex < index) {
            previous = current;
            current = current.nextNode;
            currentIndex++;
        }
        previous.nextNode = node;
        node.nextNode = current;

    }


  }
  find(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        console.log(`The value ${value} is at: ${index}`);
        return index;
      } else {
        console.error(`The value ${value} does not exist`);
      }
      current = current.nextNode;
      index++;
    }
  }

  printNode() {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.nextNode;
    }
  }
}

let node = new LinkedList();

node.preappend(200);
node.preappend(100);
node.preappend(400);
node.append(300);
node.append(600);
node.insertAt(800,1);
node.headNode();
node.contains(200);
node.find(100);
node.removeAt(0)
node.atIndex(2);

node.pop();
node.tail();
node.sizeNode();
node.printNode();


//console.log(node);
