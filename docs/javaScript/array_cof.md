---
title:  数组操作
author: oliver
date: '2023-03-22'
tags:
 - js
---


## 数组方法

### 操作方法

归纳为 `增删改查`，需要注意是否会对原数组产生影响

#### 增

- push 是 （添加到数组末尾,返回新的数组长度）

  ```javascript
  let colors = []; // 创建一个数组
  let count = colors.push("red", "green"); // 推入两项
  console.log(count) // 2
  ```

- unshift 是 （添加到数组开头,返回新的数组长度）
  
  ```javascript
  let colors = new Array(); // 创建一个数组
  let count = colors.unshift("red", "green"); // 从数组开头推入两项
  alert(count); // 2
  ```

- splice 是 （分别是开始位置、0（要删除的元素数量）、插入的元素，返回包含删除元素的数组）
  
  ```javascript
  let colors = ["red", "green", "blue"];
  let removed = colors.splice(1, 0, "yellow", "orange")
  console.log(colors) // red,yellow,orange,green,blue
  console.log(removed) // []
  ```

- concat 否 （创建一个当前数组的副本，然后再把它的参数添加到副本末尾，最后返回这个新构建的数组）

  ```javascript
  let colors = ["red", "green", "blue", "yellow", "purple"];
  let colors2 = colors.slice(1);
  let colors3 = colors.slice(1, 4);
  console.log(colors)   // red,green,blue,yellow,purple
  concole.log(colors2); // green,blue,yellow,purple
  concole.log(colors3); // green,blue,yello
  ```

#### 删

- pop 是 （删除数组的最后一项,返回被删除的项）

  ```javascript
  let colors = ["red", "green"]
  let item = colors.pop(); // 取得最后一项
  console.log(item) // green
  console.log(colors.length) // 1
  ```

- shift 是 （删除数组的第一项,返回被删除的项）
  
  ```javascript
  let colors = new Array(); // 创建一个数组
  let count = colors.unshift("red", "green"); // 从数组开头推入两项
  alert(count); // 2
  ```

- splice 是 （开始位置，删除元素的数量，返回包含删除元素的数组）
  
  ```javascript
  let colors = ["red", "green", "blue"];
  let removed = colors.splice(1, 0, "yellow", "orange")
  console.log(colors) // [red,yellow,orange,green,blue]
  console.log(removed) // []
  ```

- slice 否 （创建一个包含原有数组中一个或多个元素的新数组，最后返回这个新构建的数组）

  ```javascript
  let colors = ["red", "green", "blue"];
  let colors2 = colors.concat("yellow", ["black", "brown"]);
  console.log(colors); // ["red", "green","blue"]
  console.log(colors2); // ["red", "green", "blue", "yellow", "black", "brown"]

#### 改

- splice 是 （开始位置，要删除元素的数量，要插入的任意多个元素，返回删除元素的数组）

   ```javascript
  let colors = ["red", "green", "blue"];
  let removed = colors.splice(1, 1, "red", "purple"); // 插入两个值，删除一个元素
  console.log(colors); // red,red,purple,blue
  console.log(removed); // green，只有一个元素的数组
   ```

#### 查

- indexOf 否 （返回查找元素在数组中的位置，找到返回下标，否则返回-1）

  ```javascript
  let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
  numbers.indexOf(4) // 3
  ```

- includes 否 （返回查找元素在数组中的位置，找到返回true，否则false）

  ```javascript
  let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
  numbers.includes(4) // true
  ```

- find 否 （返回第一个匹配元素）

  ```javascript
  const people = [
    {
        name: "Matt",
        age: 27
    },
    {
        name: "Nicholas",
        age: 29
    }
  ];
  people.find((element, index, array) => element.age < 28) // // {name: "Matt", age: 27}
  ```

### 排序方法

- reverse 是 （将数组方向反转）

  ```javascript
  let values = [1, 2, 3, 4, 5];
  values.reverse();
  alert(values); // [5,4,3,2,1]
  ```

- sort 是 （接受一个比较函数，用于判断哪个值应该排在前面）

  ```javascript
  function compare(value1, value2) {
    if (value1 < value2) {
        return -1;
    } else if (value1 > value2) {
        return 1;
    } else {
        return 0;
    }
  }
  let values = [0, 1, 5, 10, 15];
  values.sort(compare);
  alert(values); // [0,1,5,10,15]
  ```

### 转换方法

- join 否 （接收一个字符串分隔符参数，返回包含所有项的字符串）

  ```javascript
  let colors = ["red", "green", "blue"];
  alert(colors.join(",")); // red,green,blue
  alert(colors.join("||")); // 'red||green||blue'
  ```

### 迭代方法

- some 否 （对数组每一项传入测试函数，至少有一个元素返回true，则返回true）
  
  ```javascript
  let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
  let someResult = numbers.some((item, index, array) => item > 2);
  console.log(someResult) // true
  ```

- every 否 （对数组每一项传入测试函数，所有元素返回true，则返回true）

  ```javascript
  let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
  let someResult = numbers.every((item, index, array) => item > 2);
  console.log(someResult) // true
  ```

- forEach 否 （对数组每一项执行传入函数，没有返回值）

  ```javascript
  let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
  numbers.forEach((item, index, array) => {
    // 执行某些操作
  });
  ```

- map 否 （对数组的每一项都运行传入函数，返回每次函数调用结构构成的数组）

  ```javascript
  let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
  let mapResult = numbers.map((item, index, array) => item * 2);
  console.log(mapResult) // [2,4,6,8,10,8,6,4,2]
  ```

- filter 否 （对数组的每一项执行传入函数，返回true的项会组成数组之后返回）

  ```javascript
  let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
  let filterResult = numbers.filter((item, index, array) => item > 2);
  console.log(filterResult); // [3,4,5,4,3 ]
  ```

- reduce 否 （
arr.reduce(callback, initialValue)
callback（一个在数组中每一项上调用的函数，接受四个函数分别为：
previousValue（上一次调用回调函数时的返回值，或者初始值）
currentValue（当前正在处理的数组元素）
currentIndex（当前正在处理的数组元素下标）
array（调用reduce()方法的数组）
initialValue（可选的初始值。作为第一次调用回调函数时传给previousValue的值）
）

`1.做累加2.数组扁平化3.属性对object分类4.数组去重等等`

## 数组去重

### 值类型数组

1, Set

```javascript
// 扩展运算符
var arr = [1,2,3,2,9]
var nArr = [...new Set(arr)]
console.log(nArr)

// Arry.from

var nArr = Array.from(new Set(arr))
```

2, 双重for循环

```javascript
function recursive (arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    for(let j = i + 1 ; j < len; j++) {
      if(arr[i] === arr[j]) {
        arr.splice(j,1)
        j--;
        len--
      }
    }
    return arr
}
```

3, indexOf （includes同理）

```javascript
var arr = [1,2,3,2,9]
function recursive (arr) {
  var nArr = []
  arr.forEach((item,index) => {
    if(nArr.indexOf(item) === -1) {
      nArr.push(item)
    }    
  })
  return nArr
}
```

4, indexOf + filter （includes同理）

```javascript
function recursive (arr) {
  return arr.filter((item,index) => arr.indexOf(item,0) === index) 
}
```

5, reduce （先排序）

```javascript
var arr = [1,2,3,2,9]
function fn(arr) {
  var nArr = []
  arr.sort().reduce((pre,cur,index) => {
    // 比较pre中最后一个元素和当前值是否相等，不相等加入新数组
    if(pre[index-1] !== value) {
      nArr.push(value)
    }    
  },[])
  return nArr
}
```

6, 计数去重

```javascript
function recursive (arr) {
  let res = [],
      obj = {};
  for (let i = 0, len = arr.length; i < len; i++) {
    if(!obj[arr[i]]) {
      res.push(arr[obj])
      obj[arr[i]] = 1
    } else {
      obj[arr[i]] ++ 
    }
  }
  return res
}

```

7, 相邻元素去重 （先排序）

```javascript
function recursive (arr) {
  arr = arr.sort()
  let res = [],
  for (let i = 0, len = arr.length; i < len; i++) {
    if(arr[i] !== arr[i-1]) {
      res.push(arr[i])
    }
  }
  return res
}

```

### 对象数组

1, 对象属性的字符串化去重 （但是要注意属性顺序的问题，因为顺序不同的属性值的字符串化结果也不同）

```javascript
// Map

function recursive (arr) {
  const map = new Map();
  const res= []
  for(const obj of arr) {
    const str = JSON.stringify(obj);
    if(!map.has(str)) {
      res.push(obj)
      map.set(str, true)
    }
  }
}
// Set

let arr = [{a:1}, {b:2}, {a:1}];
let uniqueArr = [...new Set(arr.map(item => JSON.stringify(item)))].map(item => JSON.parse(item));

console.log(uniqueArr); // [{a:1}, {b:2}]
```

2, reduce

```javascript

let arr = [{a:1}, {b:2}, {a:1}];
let uniqueArr = arr.reduce((accumulator, currentValue) => {
    let existItem = accumulator.find(item => JSON.stringify(item) === JSON.stringify(currentValue));
    if (!existItem) {
        accumulator.push(currentValue);
    }
    return accumulator;
}, []);

console.log(uniqueArr); // [{a:1}, {b:2}]

```

## 数组扁平化

1, ES6 flat

```javascript
const arr = [1, [2, [3, [4, 5]]], 6]

function flatten(arr) {
  return arr.flat(Infinity)
}
console.log(flatten(arr));

```

2, toString

```javascript
function flatten(arr) {
  return arr.toString().split(',').map(item => parseFloat(item))
}
console.log(flatten(arr));
```

3, 正则表达式

```javascript
function flatten(arr) {
  let str= JSON.stringify(arr).replace(/(\[|\])/g, '');
  str = '[' + str + ']';
  arr = JSON.parse(str);
  return arr
}
```

4, 递归循环

4.1, 循环 + concat + push

  只有一层嵌套数组

```javascript
let arr = [1,[2,3,4,5,6]]
let res = []
for(let i = 0;i<arr.length;i++) {
  res = res.concat(arr[i])
}
console.log(res)

```

  嵌套多层用递归

```javascript
function flatten(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i])
    }
  }
  return result
}

console.log(flatten(arr));

```
4.2 控制扁平化深度

```javascript

1,
const eachFlat = (arr = [],depth = 1) => {
  const res = []; // 缓存递归结果
  // forEach 会自动去除数组空位
  (function flat(arr,depth) {
    arr.forEach(item => {
      if(Array.isArray(item) && depth > 0) {
        flat(item,depth-1)
      }else {
        res.push(item)
      }
    }
  })(arr,depth)
  return res
}

2,

// for of 循环不能去除数组空位，需要手动去除
const forFlat = (arr = [], depth = 1) => {
  const result = [];
  (function flat(arr, depth) {
    for (let item of arr) {
      if (Array.isArray(item) && depth > 0) {
        flat(item, depth - 1)
      } else {
        // 去除空元素，添加非 undefined 元素
        item !== void 0 && result.push(item);
      }
    }
  })(arr, depth)
  return result;

```

4.3, reduce

```javascript
const arr = [1,[2,3,4,5]]
const flatten = (arr,deep = 1) => {
  if(deep <=0) return arr;
  return arr.reduce((pre,cur) => pre.concat(Array.isArray(cur) ? flatten(cur,deep-1) : cur),[])
}
```

5, 使用堆栈stack避免递归

思路：
1, 将数组通过一个栈来维护
2, 当栈不为空的时候循环执行处理
3, pop将栈尾出栈
4, 如果出栈的元素是数组，将该元素结构赋值进行入栈操作
5, 出栈的元素不是数组就push进返回值
6, 反转恢复数组顺序

```javascript
var arr = [1,2,3,[1,2,3,[2,3,4]]];
function flatten(arr) {
  const stack = [...arr];
  const res = [];
  while(stack.length) {
    const next = stack.pop();
    if(Array.isArray(next)) {
      stack.push(...next);
    } else {
      res.push(next)
    }
  }
  return res.reverse()
}

console.log(flatten(arr1));// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4])
```

6, while 循环+ some方法

思路：
通过some来判断数组中是否用数组,通过while不断循环执行判断, 如果是数组的话可以使用 拓展运算符... ... 每次只能展开最外层的数组,加上contact来减少嵌套层数,

```javascript
function flatten(arr) {
  while (arr.some(item=> Array.isArray(item))) {
    console.log(...arr)
    arr = [].concat(...arr)
    console.log(arr)
  }
  return arr
}
console.log(flatten(arr));
```


参考链接:

- [数组常用方法](https://www.developers.pub/wiki/1065322/1067408)
- [数组方法及常见数组面试题](https://juejin.cn/post/6969785442564571143)
- [手写flat](https://juejin.cn/post/7118763684209524767)
