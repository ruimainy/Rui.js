Rui.js
======

结构仿照kendo.js；
继承关系依照的jQuery；

四个公共方法：
1、addClass；
2、getAttr；
3、setAttr；
4、getRandomString；

主要思路就是把一个dom节点，通过$()包装成一个Rui类型的对象，使其自身带有addClass、getAttr、getRandomString、setAttr四个自定义方法。
使用时，调用setAttr方法，通过config方式，把自定义属性添加到Rui对象身上