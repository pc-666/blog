---
title:  == 和 ===区别，分别在什么情况使用
author: oliver
date: '2023-03-21'
tags:
 - js
---

## 等于操作符(值相等)

### 强制类型转换

- 布尔值(Boolean())
  
  - 空字符串转换为false，其它任意字符串为true（包括空格串）
  - 0与NaN转换为false，其它数值为true；NaN表示一个操作结果应该返回数值但却没有返回数值的情况
  - undefind与null转换为false
  - 其它对象转换为true，包括空对象`{}`

小结：空字符串，0，NaN，undefind，null都为false，其它为true

- 数值(Number())
  
  - true转换为 1，false为0，
  - null转换为0，
  - undefined转换为 NaN
  - 字符串(parseInt()与parseFloat())
  
    - 字符串只包含数字，转换为对应数字，前面有空格将忽略
    - 空字符串，空格串，转换为0
    - 其它的全部为NaN
- 字符串

  - `toString()`
  
    - null与undefind调用报错
    - 数值变为字符串样式
    - 布尔值为 'true' 'false'
  
  - `String()`

    - null与undefined 转换为字符串样式 'null' 'undefined'
    - 能用`toString`就先用

### 隐式转换相等比较

1, 如果任意操作数是布尔值，则将其转换为数值再比较相等

`let res = (true == 1) // true`

2, 如果一个操作数是字符串，另一操作数是数值，则尝试将字符串转换为数字，在比较相等

`let res = ('55' == 55)`

3, 如果一个操作数是对象，另一个操作数不是，则调用对象的`valueOf()`取得原始值，再进行比较

```js
let obj = {valueOf:function() {return 1}}
let res = (obj == 1) // true
```

4, 如果有任意操作数是 `NaN` ,则相等返回 false（NaN和任意数相等比较都不相等，包括自己）

`let res = (NaN == NaN) // false`

5, 对象比较为比较引用地址

```js
let obj1 = {name:"xxx"}
let obj2 = {name:"xxx"}
let result1 = (obj1 == obj2 ); // false
```

小结：

- 两个都为简单类型，字符串和布尔值都会转换成数值，再比较

- 简单类型与引用类型比较，对象转化成其原始类型的值，再比较

- 两个都为引用类型，则比较它们是否指向同一个对象

- null 和 undefined 相等

- 存在 NaN 则返回 false

- null >= 0 为true null == 0 false null与0比较null不会转换类型

## 全等操作符(类型相等，值也相等)

undefined与null自身严格相等

```js
let result1 = (null === null)  //true
let result2 = (undefined === undefined)  //true
```

## 总结

1, 相等操作符（==）会做类型转换，再进行值的比较，全等运算符不会做类型转换

2, 除了在比较对象属性为null或者undefined的情况下，我们可以使用相等操作符（==），其他情况建议一律使用全等操作符（===）
