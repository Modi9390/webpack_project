// this class represents the node of the list of nodes
class Node
{
    constructor(value = null, nextNode = null)
    {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList{

    constructor()
    {
        this.head = null;
        this.size = 0;
    }
    // this method adds a node to the end of the list
    append(value)
    {
        let node = new Node(value);
        let current;
        if (!this.head)
        {
            this.head = node
        }else{
            current = this.head
            while (current.nextNode)
            {
                current = current.nextNode;
            }
            current.nextNode = node;
        }
        this.size++;
    }
    // this method adds a node to the start of the list
    prepend(value)
    {
        this.head = new Node(value, this.head);
        this.size++;
    }
    // this method gets the node at the given index
    at(index) {
        let current = this.head;
        let count = 0;
        while (current) {
            if (count === index) {
                console.log(current.value);
                return current.value;
            }
            count++;
            current = current.nextNode;
        }

        // If the index is out of bounds
        console.error("Index out of bounds");
        return null;
    }
    // this method prints the list of nodes
    printNode() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.nextNode;
        }
    }
}

let all = new LinkedList()

all.printNode()
all.prepend(200);
all.prepend(300);
all.prepend(100);
all.append(500);
all.at(0)
all.printNode()

