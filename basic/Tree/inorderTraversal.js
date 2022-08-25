// Topic: Tree.

/**
 * @param {Node} root
 * @returns {number[]}
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
*/

class Solution {
    // Function to return a list containing the inorder traversal of the tree.
    inOrder(root, list = []) {
        if (!root) return list;
        this.inOrder(root.left, list);
        list.push(root.data);
        this.inOrder(root.right, list);
        return list;
    }
}