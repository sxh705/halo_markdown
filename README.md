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

![image](https://user-images.githubusercontent.com/78729115/208232951-d8728e75-8f1e-49c2-a4ff-5c4a13a4bf74.png)

![image](https://user-images.githubusercontent.com/78729115/208232962-938e6f71-2906-442f-a173-6ff6ef3caec0.png)

![image](https://user-images.githubusercontent.com/78729115/208232969-06a2b664-5f5b-4a82-bd12-2613ac5624c3.png)

# 存储原理

在StackEdit编辑器内的内容暂存于浏览器LocalStorage内

使用网址作为存储key, 每次修改编辑器内文字都会自动保存, 不用担心数据丢失. 

在不清空浏览器数据的清空下可以长时间保存.

![image](https://user-images.githubusercontent.com/78729115/208231443-0ad45b12-25b8-404a-ac6b-652d1e5b4fb2.png)
