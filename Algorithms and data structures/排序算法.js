/**
 * 冒泡排序: 冒泡排序需要两个嵌套的循环， 其中， 外层循环地洞游标， 内层循环便利游标及之后（或之前）的元素， 通过两两交换的方式，
 * 每次只确保该内循环结束排序正确， 然后内层循环周期结束， 交由外层循环往后（或钱）移动游标，随即开始下一轮内层循环， 一次类推， 直至循环结束。
 * tips: 由于冒泡排序只在相邻元素大小不符合要求时才调换他们位置，它并不改变相同元素之间的相对顺序， 因此它是稳定的排序算法。
**/
function swap(i, j, array) {
	var temp = array[j];
	array[j] = array[i];
	array[i] = temp;
}
//靠后的元素心确定位置
function bubbleSort(array) {
	var length = array.length, isSwap;
	for (var i = 0; i < length; i++) { //正序
		isSwap = false;
		for (var j = 0; j < length - 1 - i; j ++) { //正序
			array[j] > array[j+1] && isSwap = true && swap(j, j+1, array);
		}
		if (!isSwap) {
			break;
		}
	};
	return array;
}

//靠前的位置先确定顺序
function bubbleSort(array) {
	var length = array.length, isSwap;
	for (var i = 0; i < length; i++) {//正序
		isSwap = false;
		for (var j = length - 1; j >= i + 1; j--) {//逆序
			array[j] < array[j-1] && isSwap = true && swap(j, j+1, array);
		}
		if (!isSwap) {
			break;
		}
	}
	return array;
}

//靠后的元素心确定位置
function bubbleSort(array) {
	var length = array.length, isSwap;
	for (var i = length - 1; i >=0; i--) {//逆序
		isSwap = true;
		for (var j = 0; j < i; j++) {//正序
			array[j] > array[j+1] && isSwap = true && swap(j, j+1, array);
		}
		if (!isSwap) {
			break;
		}
	}
}

//靠前的位置先确定顺序
function bubbleSort(array) {
	for length = array.length, isSwap;
	for (var i = length - 1; i >= 0; i--) {
		for (var j = length - 1; j >= length - 1 - i; j--) {
			array[j] < array[j+1] && isSwap = true && swap(j, j+1, array);
		}
		if (!isSwap) {
			break;
		}
	}
}

/**
 * 算法复杂度：
 * 平均时间复杂度		最好情况		最坏情况		空间复杂度
 * 		O(n^2)		  O(n)		 O(n^2)		  O(1)
 **/

 /**
  * 双向排序： 双向排序是冒泡排序的一个升级版， 又称鸡尾酒排序。 冒泡排序是从低到高（或者从高到低）单项排序，
  * 双向排序故名思义就是从两个方向分别排序（通常， 先从低到高， 然后从高到低）。 一次它比冒泡排序性能稍微好一些.
 **/
 function bothBubbleSort(array) {
 	var tail = array.length, i, isSwap;
 	for (var i = 0; i < tail; tail--) {
 		isSwap = false;
 		for (var j = tail; j > i; j--) {//靠前的位置先确定顺序
 			array[j-1] > array[j] && isSwap = true && swap(j, j-1, array);
 		}
 		i++;
 		for (var j = i; j < tail; j++) {//靠后的位置先确定顺序
 			array[j] > array[j+1] && isSwap = true && swap(j, j+1, array);
 		}
 		if (!isSwap) {
			break;
		}
 	}
 }

 ////////////////////////////////////////////////////////////////////////////////////////////////////

 /**
  * 选择排序： 从算法逻辑上看， 选择排序是一种简单直观的排序算法， 它也是两层循环， 内层循环就像工人一样，它是正真做事
  * 的，内层循环每执行一遍，将选出本次待排序的元素中最小（或最大）的一个，放在数组的起始位置。而外层循环则像老板一样，它
  * 告诉内层循环要不停的工作，直到工作完成。
  * tips： 选择排序每次交换的元素都有可能不是相邻的，因此它有可能打破原来值为相同的元素之间的排序，比如数组[2,2,1,3],
  * 正向排序时，第一个数字2将与数字1交换，那么两个数字2之间的顺序将和原来的不一样。虽然它们的值相同，但它们相对的顺序却
  * 发生了变化，我们将这种现象乘坐不稳定性。
 **/

 function selectSort(array) {
 	var length = array.length, min;
 	for (var i = 0; i < length-1; i++) {
 		min = 1;
 		for (var j = i+1; j < length; j++) {
 			array[j] < array[min] && min = j;
 		}
 		min!=1 && swap(i, min, array);
 	}
 	return array;
 }

 /**
 * 算法复杂度：
 * 平均时间复杂度		最好情况		最坏情况		空间复杂度
 * 		O(n^2)		 O(n^2)		 O(n^2)		  O(1)
 **/

 /**
  * 插入排序： 插入排序的设计初衷是往有序的数组中快速插入一个新的元素，它的算法思想：把要排序的数组分为
  * 两个部分， 一部分是数组的全部元素（除去待插入的元素），另一部分是待插入的元素；先将第一部分排序完成，
  * 然后再插入这个元素。其中第一部分的排序也是通过再次拆分为两部分来进行的。
 **/

/**
 * 1.直接插入排序： 将待排序的元素按照大小顺序，依次插入到一个已经排好序的数组之中，知道所有的元素都插入进去。
 * tips: 由于直接插入排序每次只移动一个元素的位置， 并不会改变相同的元素之间的排序，因此是一种稳定的排序。
 **/
function directInsertionSort(array) {
	var length = array.length, index, current;
	for (var i = 1; i < length; i++) {
		index = i-1; //待比较元素的下标
		current = array[i];
		while(index >= 0 && array[index] > current) {
			array[index+1] = array[index];//将待比较元素后移一位
			index--;
		}
		if (index+1 != i) {
			array[index+1] = current;
		}
	}
	return array;
}

/**
 * 2.折半插入排序： 折半插入排序是直接插入排序的升级版。鉴于插入排序第一部分已为排好序的数组， 我们不必按照顺序
 * 依次寻找插入点，只需要比较他们的中间值与待插入的大小即可。
 * tips： 同直接插入排序类似， 为稳定排序。
**/
function binaryInertionSort(array) {
	var current, i, j, low, high, m;
	for (i = 1; i < array.length; i++) {
		low = 0;
		high = i-1;
		current = array[i];
		while(low <= high) {
			m = (low + high) >> 1;
			if (array[i] >= array[m]) {
				low = m + 1;
			} else {
				high = m - 1;
			}
		}
		for (j = i; j > low; j--) {
			array[j] = array[j-1];
		}
		array[low] = current;
	}
}
/**
 * 虽然折半插入排序明显减少了查询的次数，但是数组移动的次数却没有变， 它们的时间复杂度都是O(n^2)
**/


/**
 * 希尔排序： 希尔排序也称缩小增量排序，它是直接插入排序的里一个升级版，实质就是分组插入排序。
 * 基本思想： 
 * 1、将数组拆分为若干个子分组，每个分组由相距一定‘增量’的元素组成。例如将数组[0,1,2,3,4,5,6,7,8,9,10]
 * 拆分为‘增量’为5的分组，那么自分组分别为[0,5],[1,6],[2,7],[3,8],[4,9],[5,10]
 * 2、然后对每个子分组应用直接插入排序。
 * 3、逐步较少‘增量’，重复步骤1,2
 * 4、直至‘增量’为1，这是最后一个排序，此时的排序，也就是对全数组进行直接插入排序。
**/

function directInsertionSort(array, gap) {
	gap = gap || 1;
	var length = array.length, index, current;
	for (var i = gap; i < length; i++) {
		index = i - gap; //比较元素的下标
		current = array[i];
		while(index >= 0 && array[index] > current) {
			array[index+gap] = array[index];
			index -= gap;
		}
		if (index+gap!=i) {
			array[index+gap] = current;
		}
	}
	return array;
}
function shellSort(array) {
	var length = array.length, gap = length >> 1, current, i, j;
	while(gap > 0) {
		directInsertionSort(array, gap);
		gap = gap >> 1;
	}
	return array;
}

/**
 * tips: 单次直接插入式稳定的，但是多次不同的插入排序过程中，相同的元素可能在各自的排序插入过程中移动，可能
 * 导致相同元素先对顺序发生改变，因此，希尔排序不是稳定排序
**/

/////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 归并排序： 归并排序建立在归并操作之上，它采取分而治之的思想，将数组拆分为连个子数组，为别排序，最后才将连个数组合并；
 * 拆分的两个子数组，再继续递归分为最小的数组，进而分别排序，直到数组长度为1，直接返回该数组。
**/

/**
 * 两种实现方式：
 * 1、自上而下的递归
 * 2、自下而上的递归
 * 下面是递归实现：
**/
function mergeSort(array) {
	var length = array.length;
	if (length < 2) {
		return array;
	}
	var m = length >> 1,
		left = array.slice(0,m),
		right = array.slice(m);
	return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
	var result = [];
	while(left.length && right.length) {
		var item = left[0] <= right[0] ? left.shift() : right.shift();
		result.push(item);
	}
	return result.concat(left.length ? left : right);
}

/**
 * 假设数组长度为n，那么拆分数组共需要logn步，又每一步都是一个普通的合并，时间复杂度为O(nlogn)
 * 算法复杂度：
 * 平均时间复杂度		最好情况		最坏情况		空间复杂度
 * 	O(nlogn)		O(nlogn)	O(nlogn)	  O(n)
 **/

/////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 快速排序： 快速排序借用了分治的思想，并且基于冒泡排序做了改进。它将数组拆分为两个子数组，其中一个数组的所有元素
 * 都比另一个子数组的元素小，然后对这两个子数组再重复进行上述操作，直到数组不可拆分，排序完成。
 * 算法思想：
 * 1、在数据集之中，选择一个元素作为"基准"（pivot）。
 * 2、所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。
 * 3、对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。
**/

function quickSort(array, left, right) {
	var partitionIndex,
		left = typeof left == 'number' ? left : 0,
		right = typeof right == 'number' ? right : array.length-1;
	if (left < right) {
		partitionIndex = partition(array, left, right);
		quickSort(array, left, partitionIndex-1);
		quickSort(array, partitionIndex+1, right);
	}
	return array;
}
function partition(array, left, right) {
	for (var i = left+1, j = left; i <= right; i++) {//j是较小存储位置的游标
		array[i] < array[left] && swap(i, ++j, array);//以第一个元素为基准
	}
	swap(left, j, array);
	return j;
}
/**
 * 假设数组长度为n，那么拆分数组共需要logn步，又每一步都是一个普通的合并，时间复杂度为O(n)
 * 算法复杂度：
 * 平均时间复杂度		最好情况		最坏情况		空间复杂度
 * 	O(nlogn)		O(nlogn)	O(n^2)	  	O(logn)
 **/

 /**
  * tips: 同选择排序相似，快速排序每次交换的元素有可能不是相邻的，因此它有可能打破原来值为相同的元素之
  * 间的顺序，因此， 快速排序不是稳定排序。
 **/

 /////////////////////////////////////////////////////////////////////////////////////////
 
 /**
  * 堆排序： 堆排序是利用堆这种数据结构所设计的一种派速算法。它是选择排序的一种。堆分为大根堆和小根堆。大根堆要求子节点的值都不
  * 大于其父节点的值，最大的值一定在堆顶，小根堆与之相反。因此我们可以用大根堆进行升序排序，使用小根堆进行降序排序。
  * 算法基本思想： 
  * 1、先将初始序列K[1..n]建成一个大根堆，此堆为初始的无序区。
  * 2、再将关键字最大的记录K1（即堆顶）和无序区的最后一个记录K[n]交换，由此得到新的无序区K[1..n-1]和有序区K[n],且满足K[1..n-1].keys<=K[n].key
  * 3、交换K1和K[n]后，堆顶可能违反堆性质，因此徐江K[1..n-1]调整为堆。然后重复步骤2，直到无序区只有一个元素时停止。
 **/

function heapAdjust(array, i, length) {
	var left = 2*i + 1,
		right = 2*i + 2,
		largest = i;
	if (left < length && array[largest] < array[left]) {
		largest = left;
	}
	if (right < length && array[largest] < array[right]) {
		largest = right;
	}
	if (largest != i) {
		swap(i, largest, array);
		heapAdjust(array, largest, length);
	}
}
function heapSort(array) {
	var length = array.length;
	//建立最大堆
	for (var i = length>>1; i >= 0; i--) {
		heapAdjust(array, i, length);
	}
	//调换第一个与最后一个元素，重新调整为最大堆
	for (var i = length-1; i > 0; i--) {
		swap(0, i, array);
		heapAdjust(array, 0, --length);
	}
}

/**
 * 1、建立堆得过程，从length/2一直处理到0的时间复杂度为O(n)
 * 2、调整堆得过程是沿着堆的父子节点进行调整，执行次数为堆得深度，时间复杂度为O(lgn)，
 * 3、堆排序的过程由n次第二步完成，时间复杂度为O(lgn)
 * tips： 由于堆排序中初始化堆得过程比较次数较多，因此它不太适合用于小序列。同时由于多次任意下标相互交换位置，
 * 相同元素之间原本相堆得熟悉怒被破坏了，因此，它是不稳定排序。
**/

////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 计数排序： 基数排序是唯一一个不急于比较的排序算法，使用它处理一定范围内的整数排序时时间复杂度为O(n+k),其中k是整数的范围，
 * 它几乎比任何基于比较的算法都要快.
 * 使用计数排序
**/
function countSort(array, max) {
	var tempLength = max + 1,
		temp = new Array(tempLength),
		index = 0,
		length = array.length;
	for (var i = 0; i < lenght; i++) {
		if (!temp[array[i]]) {
			temp[array[i]] = 0;
		}
		temp[array[i]]++;
	}
	for (var j = 0; j < tempLength; j++) {
		while (temp[j]) {
			array[index++] = j;
			temp[j]--;
		}
	}
	return array;
}
