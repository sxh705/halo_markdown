# halo_markdown

一个油猴拓展脚本

给halo1.x博客文章编辑界面增加了StackEdit编辑器快捷方式

方便编辑和管理markdown文章内容. 

# 使用

1. 浏览器安装油猴插件

2. 打开 [油猴脚本链接](https://greasyfork.org/zh-CN/scripts/456713-halo%E5%8D%9A%E5%AE%A2%E6%96%87%E7%AB%A0%E7%BC%96%E8%BE%91%E5%99%A8%E6%8B%93%E5%B1%95) 进行安装

3. 进入 halo 1.x 博客所有文章界面, 刷新网页

4. 点击右下角编辑器进行使用. 

# 使用截图

![image](https://user-images.githubusercontent.com/78729115/208230527-ae8b68f7-f7ba-4a46-842e-fbdc15f7dd82.png)

![image](https://user-images.githubusercontent.com/78729115/208231254-c40516af-41e9-4db8-a1df-709e97780ec7.png)

![image](https://user-images.githubusercontent.com/78729115/208231232-f069a01a-0ddd-4d74-b5e8-9f768791b16e.png)

![image](https://user-images.githubusercontent.com/78729115/208232827-18312a95-05e8-4144-b9ba-7e83aeda50c7.png)

# 存储原理

在StackEdit编辑器内的内容暂存于浏览器LocalStorage内

使用网址作为存储key, 每次修改编辑器内文字都会自动保存, 不用担心数据丢失. 

在不清空浏览器数据的清空下可以长时间保存.

![image](https://user-images.githubusercontent.com/78729115/208231443-0ad45b12-25b8-404a-ac6b-652d1e5b4fb2.png)
