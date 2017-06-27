/**
 * BFS基于队列的搜索方式，它的特点是由一个状态可以扩展出很多章台，然后再一次扩展，直到找到目标状态活着队列中头尾指针相遇，
 * 即队列中所有的状态都处理完毕. BFS对于解决最短路径或最小问题特别有效，寻找深度小，但内存消耗大。
 * DFS基于递归的搜索方式，它的特点是由一个状态扩展到一个状态，然后不停的扩展，直到找到目标或者无法拓展结束一个状态的递归。
 * DFS解决遍历和求所有问题，但深度大的时候容易爆栈。
 */

/**
 * @param {number} data
 */
function Node(data) {
	this.data = data;
	this.parent = null;
	this.children = [];
}
/**
 * @param {number} data
 */
function Tree(data) {
	var node = new Node(data);
	this._root = node;
}

/**
 * Methods of a tree:
 * 1. traverseDF(callback)
 * 2. traverseBF(callback)
 * 3. contains(data, traversal)
 * 4. add(child, parent)
 * 5. remove(node, parent)
 */

 /**
 * Traverses nodes of a tree with DFS
 * @param {function} callback
 */
 Tree.prototype.traverseDF = function (callback) {
 	(function revurse(currentNode) {
 		for(var i = 0, len = currentNode.children.length; i < len; i++) {
 			revurse(currentNode.children[i]);
 		}
 		callback(currentNode);
 	})(this._root);
 }

 /**
 * Traverses nodes of a tree with BFS
 * @param {function} callback
 */
 Tree.prototype.traverseBF = function (callback) {
 	var queue = new Queue();
 	queue.enqueue(this._root);
 	var currentTree = queue.dequeue();
 	while(currentTree){
 		for(var i = 0, len = currentTree.children.length; i < len; i++) {
 			queue.enqueue(currentTree.children[i]);
 		}
 		callback(currentTree);
 		currentTree = queue.dequeue();
 	}
 }