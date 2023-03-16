var arr = [34, 12, 3, 5, 2, 81, 9, 8, 1];


  function bubbleSort(arr) {
    // let l = arr.length;
    // let step = 0;
    // for (let j = 0; j < l; j++) {
    //   // if (l < 0) {
    //   //   return arr;
    //   // } else {
    //   if (arr[j] > arr[j + 1]) {
    //     let a = arr[j + 1];
    //     let b = arr[j];
    //     arr[j + 1] = b;
    //     arr[j] = a;
    //   }
    //   if (j + 1 === l) {
    //     j = -1;
    //     l--;
    //   }
    //   // }
    //   step++;
    //   console.log(arr, step);
    // }
    // return arr;
    let l = arr.length;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < l; j++) {
          if (arr[j] > arr[j + 1]) {
          let a = arr[j + 1];
          let b = arr[j];
          arr[j + 1] = b;
          arr[j] = a;
        }
      }
      l--;
    }
    return arr;

  }

  console.log(bubbleSort(arr));
