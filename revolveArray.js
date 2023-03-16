//   旋转数组，给一个数组，请实现将数组中的元素向右轮转 k 个位置,其中k是非负数

  //  Example

  // Input: nums = [1,2,3,4,5,6,7], k = 3

  // Output: [5,6,7,1,2,3,4]

  function foo(arr, num) {
    let temp = [];

    for (let index = 0; index < arr.length; index++) {
      if (index + num + 1 > arr.length - 1) {
        temp.push(arr[index + num + 1 - arr.length]);
      } else {
        temp.push(arr[index + num + 1]);
      }
    }
    return temp;
  }
  console.log(foo([1, 2, 3, 4, 5, 6, 7], 3));