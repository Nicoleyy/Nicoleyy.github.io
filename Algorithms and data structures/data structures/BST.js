/**
 * 二叉搜索树(BST)实现
 * Reference: http://www.bysocket.com/?p=1209 
 */

 /**
 * 节点的定义
 * @param {number} value
 */
function TreeNode(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;

    /**
     * 查找
     *      树深(N) O(lgN)
     *      1. 从root节点开始
     *      2. 比当前节点值小,则找其左节点
     *      3. 比当前节点值大,则找其右节点
     *      4. 与当前节点值相等,查找到返回TRUE
     *      5. 查找完毕未找到,
     * @param {number} key
     * @return {TreeNode}
     */
    this.search = function(key) {
        var current = this.root;
        while(current !== null && key !== current.value) {
            if (key < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return current;
    };
 
    /**
     * 插入
     *      1. 从root节点开始
     *      2. 如果root为空,root为插入值
     *      循环:
     *      3. 如果当前节点值大于插入值,找左节点
     *      4. 如果当前节点值小于插入值,找右节点
     * @param {number} key
     * @return
     */
    this.insert = function(key) {
        var newNode = new TreeNode(key),
            current = root,
            parent = null;
        if (current === null) {
            root = newNode;
            return newNode;
        }
        while(true) {
            parent = current;
            if (key < current.value) {
                current = current.left;
                if (current === null) {
                    parent.left = newNode;
                    return newNode;
                }
            } else {
                current = current.right;
                if (current === null) {
                    parent.right = newNode;
                    return newNode;
                }
            }
        }
    };

    /**
     * 删除节点
     *      1.找到删除节点
     *      2.如果删除节点左节点为空 , 右节点也为空;
     *      3.如果删除节点只有一个子节点 右节点 或者 左节点
     *      4.如果删除节点左右子节点都不为空
     * @param {number} key
     * @return {TreeNode}
     */
    this.delete = function(key) {
        var parent  = root,
            current = root,
            isLeftChild = false;
        while (current.value !== key) {
            parent = current;
            if (current.value > key) {
                isLeftChild = true;
                current = current.left;
            } else {
                isLeftChild = false;
                current = current.right;
            }
            // 没有找到要删除的节点
            if (current === null) {
                return current;
            }
        }
 
        // 如果删除节点左节点为空 , 右节点也为空
        if (current.left === null && current.right === null) {
            if (current === root) {
                root = null;
            }
            // 在左子树
            if (isLeftChild === true) {
                parent.left = null;
            } else {
                parent.right = null;
            }
        }
        // 如果删除节点只有一个子节点 右节点 或者 左节点
        else if (current.right === null) {
            if (current === root) {
                root = current.left;
            } else if (isLeftChild) {
                parent.left = current.left;
            } else {
                parent.right = current.left;
            }
        } else if (current.left === null) {
            if (current === root) {
                root = current.right;
            } else if (isLeftChild) {
                parent.left = current.right;
            } else {
                parent.right = current.right;
            }
        }
        // 如果删除节点左右子节点都不为空
        else if (current.left !== null && current.right !== null) {
            // 找到删除节点的后继者
            var successor = getDeleteSuccessor(current);
            if (current === root) {
                root = successor;
            } else if (isLeftChild) {
                parent.left = successor;
            } else {
                parent.right = successor;
            }
            successor.left = current.left;
        }
        return current;
    }
 
    /**
     * 获取删除节点的后继者
     *      删除节点的后继者是在其右节点树种最小的节点
     * @param {TreeNode} deleteNode
     * @return {TreeNode}
     */
    public TreeNode getDeleteSuccessor(deleteNode) {
        // 后继者
        var successor = null,
            successorParent = null,
            current = deleteNode.right;
 
        while (current !== null) {
            successorParent = successor;
            successor = current;
            current = current.left;
        }
 
        // 检查后继者(不可能有左节点树)是否有右节点树
        // 如果它有右节点树,则替换后继者位置,加到后继者父亲节点的左节点.
        if (successor !== deleteNode.right) {
            successorParent.left = successor.right;
            successor.right = deleteNode.right;
        }
        return successor;
    }
}