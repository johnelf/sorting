var list = [11, 44, 22, 76, 102, 1, 4, 5, 2, 6, 990];


var bubbleSorting = function (list) {
  for (var i = 0; i < list.length - 1; i++) {
    for (var j = 0; j < list.length - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        var temp = list[j];
        list[j] = list[j + 1];
        list[j + 1] = temp;
      }
    }
  }
  return list;
};

var result = bubbleSorting(list);

console.log(result);
