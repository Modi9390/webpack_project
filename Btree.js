class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor(array) {
        const uniqueArray = Array.from(new Set(array)); // Remove duplicates
        this.root = this.buildTree(uniqueArray.sort((a, b) => a - b));
    }

    buildTree(array) {
        if (array.length === 0) {
            return null;
        }
        const mid = Math.floor(array.length / 2);
        const root = new Node(array[mid]);
        root.left = this.buildTree(array.slice(0, mid));
        root.right = this.buildTree(array.slice(mid + 1));
        return root;
    }

    insert(value) {
        let newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if (root === null) {
            return null;
        } else if (value < root.data) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.data) {
            root.right = this.deleteNode(root.right, value);
        } else {
            if (root.left === null) {
                return root.right;
            } else if (root.right === null) {
                return root.left;
            }

            root.data = this.minValue(root.right);

            root.right = this.deleteNode(root.right, root.data);
        }
        return root;
    }

    minValue(node) {
        let minValue = node.data;
        while (node.left !== null) {
            minValue = node.left.data;
            node = node.left;
        }
        return minValue;
    }

    find(value) {
        return this.findNode(this.root, value);
    }

    findNode(node, value) {
        if (node === null) {
            console.log("Not found");
            return null;
        }

        if (node.data === value) {
            console.log("Found", node.data);
            return node;
        }

        if (value < node.data) {
            return this.findNode(node.left, value);
        } else {
            return this.findNode(node.right, value);
        }
    }
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

const array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const tree = new Tree(array);

// Print the initial tree structure
console.log("Initial tree:");
prettyPrint(tree.root);

// Insert additional data
tree.insert(10);
tree.insert(2);
tree.delete(1);
tree.find(67);

// Print the updated tree structure
console.log("\nUpdated tree:");
prettyPrint(tree.root);
