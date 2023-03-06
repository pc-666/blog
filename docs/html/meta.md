---
title: meta元素都有什么
author: oliver
date: '2023-2-28'
---


## `<meta>`：元数据元素

### meta元素表示那些不能由其它HTML元相关元素标识的元数据信息，不会显示在页面上，但对于搜索引擎是可读的

- `name` 提供文档级别的元数据，应用于整个页面，指定了 meta 元素的类型；说明该元素包含了什么类型的信息。
- `content` 指定了实际的元数据内容。
- `http-equiv` 编译指令，提供的信息与类似命名的HTTP头部相同,添加http头部内容
- `charset` 字符集声明，告诉文档使用哪种字符编码
- `itemprop` 提供用户自定义的元数据
- `viewport` 控制视口的大小和比例，其中content中可设置宽度、高度、原始比例、最大缩放比例、最小缩放比例、用户是否可缩放
- `robot` 定义网页搜索引擎索引方式

```html
<meta name="author" content="Chris Mills" />
<meta
  name="description"
  content="The MDN Web Docs Learning Area aims to provide
complete beginners to the Web with all they need to know to get
started with developing web sites and applications." />
<!-- 5秒钟后就会跳转到指定页面-->
<meta http-equiv="Refresh" content="5;url=http://blog.yangchen123h.cn" />
<!-- 定义网页搜索引擎索引方式，
	- index 允许将该网页录入搜索引擎索引。

	- follow 允许搜索引擎抓取当前页面上所有的链接。


	- noindex 禁止将该网页录入搜索引擎索引。


	- nofollow 禁止搜索引擎抓取当前页面上的链接。


	- noarchive 在搜索结果中不保存当前页面的快照


	- all 相当于index, follow，此值是默认值。


	- noodp 不使用开放目录中的网页摘要描述。


	- noydir 不使用雅虎分类目录中的网页摘要。

-->

<meta name="robots" content="index,follow">
<!-- 控制视口的大小和比例
	width viewport 宽度(数值/device-width)
	height viewport 高度(数值/device-height)
	initial-scale 初始缩放比例
	maximum-scale 最大缩放比例
	minimum-scale 最小缩放比例
	user-scalable 是否允许用户缩放(yes/no)
-->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

参考链接：

MDN

- MDN
- [meta标签作用](<https://juejin.cn/post/6844904083296370702>)
