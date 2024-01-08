// Write a function that takes in a Binary Search Tree (BST) and a target integer value and returns the closest value to that target value contained in the BST.
// You can assume that there will only be one closest value.
// Each BST node has an integer value, a left child node, and a right child node. 
// A node is said to be a valid BST node if and only if it satisfies the BST property:
//  - its value is strictly greater than the values of every node to its left;
//  - its value is less than or equal to the values of every node to its right;
//  - and its children nodes are either valid BST nodes themselves or None / null.
// Sample Input:
// tree =   10
//        /     \
//       5      15
//     /   \   /   \
//    2     5 13   22
//  /           \
// 1            14
// target = 12
// Sample Output: 13

// Average: O(log(n)) time | O(1) space
// Worst: O(n) time | O(1) space

// Hint 3 : Traverse the BST like you normally would, but keep track of the closest value seen and the smallest difference seen thus far.
// QUESTION: What are the advantages and disadvantages of using recursion to solve this problem?
// ANSWER: The advantage is that the code is more concise and easier to read.
// The disadvantage is that this solution uses O(log(n)) space, where n is the number of nodes in the BST.
// This space is used to store the call stack.
// The space complexity can be reduced to O(1) by using an iterative approach instead of a recursive one.
// QUESTION: What are the advantages and disadvantages of using an iterative approach to solve this problem?
// ANSWER: The advantage is that this solution uses O(1) space.
// The disadvantage is that the code is more complicated and thus harder to read.

function findClosestValueInBst(tree, target) {
    // stuff
    // declare a variable to hold the closest value
    let currentNode = tree;
    // Hint: try traversing the BST node by node, comparing the current node's value to the target value and adjusting accordingly.
    // Make use of the BST property to determine what direction to traverse.
    // return the closest value
}






// Traversing a binary search tree (BST) in JavaScript can be done in several ways, depending on the order in which you want to visit the nodes. 
// Here are the three common traversal methods:

// 1. **In-order Traversal**: Visit the left branch, then the current node, and finally, the right branch. This method visits the nodes in ascending order.
// 2. **Pre-order Traversal**: Visit the current node before its child nodes. This method is useful for copying the tree.
// 3. **Post-order Traversal**: Visit the current node after its child nodes. This method is used often for deleting the tree.

// Here's an example of a simple binary search tree class and how you would implement in-order traversal:

// ```javascript
// class Node {
//     constructor(data) {
//         this.data = data;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }

//     insert(data) {
//         var newNode = new Node(data);

//         if (this.root === null) {
//             this.root = newNode;
//         } else {
//             this.insertNode(this.root, newNode);
//         }
//     }

//     insertNode(node, newNode) {
//         if (newNode.data < node.data) {
//             if (node.left === null) {
//                 node.left = newNode;
//             } else {
//                 this.insertNode(node.left, newNode);
//             }
//         } else {
//             if (node.right === null) {
//                 node.right = newNode;
//             } else {
//                 this.insertNode(node.right, newNode);
//             }
//         }
//     }

//     inOrderTraversal(node) {
//         if (node !== null) {
//             this.inOrderTraversal(node.left);
//             console.log(node.data);
//             this.inOrderTraversal(node.right);
//         }
//     }
// }

// // Example usage
// const bst = new BinarySearchTree();
// bst.insert(15);
// bst.insert(25);
// bst.insert(10);
// bst.insert(7);
// bst.insert(22);
// bst.insert(17);
// bst.insert(13);

// bst.inOrderTraversal(bst.root); // Will print the nodes in ascending order
// ```

// In this example, `inOrderTraversal` is a method that takes a node (starting with the root) and prints the values of the nodes in ascending order. 
// You can similarly implement `preOrderTraversal` and `postOrderTraversal` based on their definitions.