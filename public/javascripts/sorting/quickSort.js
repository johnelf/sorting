var list = [11, 44, 22, 76, 102, 1, 4, 5, 2, 6, 990];

var digHoleAndFill = function (list, l, h) {
  var low = l, high = h;
  var pivot = list[low];

  while (low < high) {
    while (low < high && list[high] >= pivot) {
      high--;
    }

    if (low < high) {
      list[low++] = list[high];
    }

    while (low < high && list[low] < pivot) {
      low++;
    }

    if (low < high) {
      list[high--] = list[low];
    }

  }
  list[low] = pivot;

  return low;
};

var quickSort = function(list, l, h) {
  if (l < h) {
    var index = digHoleAndFill(list, l, h);

    quickSort(list, l, index - 1);
    quickSort(list, index + 1, h);
  }
};

quickSort(list, 0, list.length - 1);
console.log(list);
