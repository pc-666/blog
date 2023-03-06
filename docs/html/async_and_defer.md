---
title: script中async跟defer有什么区别
author: oliver
date: '2023-3-06'
---

## `<script>`元素 中async和defer属性的区别


> 起因：HTML在执行时，如果遇到外部JS文件引用，需要下载执行JS文件，此时会停止页面渲染，导致页面表现为空白。async与defer用来控制JS文件的下载和执行。
> 


- defer（异步，立即下载，延迟执行）：表示脚本执行时不会改变页面的结构，脚本会被延迟到整个页面都解析完毕后再运行。
  
```HTML
  <!DOCTYPE html>
    <html>
      <head>
        <title>Example HTML Page</title>
        <script defer src="example1.js"></script>
        <script defer src="example2.js"></script>
      </head>
      <body>
        <!-- 这里是页面内容 -->
      </body>
    </html>
```




    - 上面代码中，虽然`<script>`元素包含在`<head>`中，但是浏览器会解析到`<html>`标签后才执行。

    - 注意：
      1. defer属性仅适用于外部脚本（只有在使用src属性时），因此浏览器会忽略行内脚本的defer属性。
      2. 若有多个script含defer属性，推迟执行的脚本不一定总会按顺序执行或者在DOMContentLoaded事件之前执行，因此最好只包含一个这样的脚本。

- async（异步，立即下载，不保证顺序执行）：例子中第二个脚本可能先于第一个脚本执行，重点在于它们之间没有依赖关系

```HTML
<!DOCTYPE html>
<html>
    <head>
        <title>Example HTML Page</title>
        <script async src="example1.js"></script>
        <script async src="example2.js"></script>
    </head>
    <body>
        <!-- 这里是页面内容 -->
    </body>
</html>  
```
总结：
  1. 既没有defer也没有async属性，则浏览器遇到该script标签时，会立即加载并执行指定的脚本。执行完毕后，才继续解析后面的标签。
  2. 有async 属性，浏览器遇到该script标签时，加载脚本的过程与解析后面标签的过程同时进行。加载完毕后，单独执行该脚本。（如果此时标签还没有解析完，会立即暂停解析，先执行JS脚本）
  3. 有defer属性，浏览器遇到该script标签时，加载脚本的过程与解析后面标签的过程同时进行。但是执行脚本的过程，在解析完所有元素之后才执行。可以这样理解：defer本身就有推迟的意思，在加载完脚本后，将执行过程推迟到最后。
  4. 当script同时有async和defer属性时，执行效果和async一致。

延伸：
  1. 浏览器对于带有type="module"的`<script>`，都是异步加载，不会造成堵塞浏览器，即等到整个页面渲染完，再执行模块脚本，等同于打开了`<script>`标签的defer属性。
  2. `<script>`标签的async属性也可以打开，这时只要加载完成，渲染引擎就会中断渲染立即执行。执行完成后，再恢复渲染。
  3. `DOMContentLoaded`：当纯HTML被完全加载以及解析时，DOMContentLoaded 事件会被触发，而不必等待样式表，图片或者子框架完成加载。也就是只要页面DOM加载完成就触发，无需等待依赖资源的加载。
  4. `load`：当整个页面及所有依赖资源如样式表和图片都已完成加载时，将触发load事件。