#!/usr/bin/env node
function fibs (n)
{
   let  arr = [];
   if (n == 1 || n == 0) return n;

     if (n >= 1)
     {
        arr.push(0);
     }
     if (n >= 2){
      arr.push(1);
     }
     for (let i = 2; i < n; i++){
      let tmp = arr[i - 1] + arr[i - 2];
      arr.push(tmp);
     }
     return arr;
}
console.log(fibs(8))


function fibRec(n) {
    if (n === 0) {
        return [0];
    } else if (n === 1) {
        return [0, 1];
    } else {
        let arr = fibRec(n - 1);
        arr.push(arr[n - 1] + arr[n - 2]);
        return arr;
    }
}
console.log(fibRec(8))


function mergeSort(arr, left, right) {
    if (left < right) {
        let mid = Math.floor((left + right) / 2);
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        merge(arr, left, mid, right);
    }
  }

  function merge(arr, left, mid, right) {
    let i = left;
    let j = mid + 1;
    let k = left;
    let temp = [];

    while (i <= mid && j <= right) {
        if (arr[i] < arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }

    // Copy the remaining elements from both halves
    while (i <= mid) {
        temp[k++] = arr[i++];
    }
    while (j <= right) {
        temp[k++] = arr[j++];
    }

    // Copy elements back to the original array
    for (let m = left; m <= right; m++) {
        arr[m] = temp[m];
    }
  }
  let arr = [3, 2, 1, 13, 8, 5, 0, 1];
  mergeSort(arr, 0, arr.length - 1);
  console.log(arr);
