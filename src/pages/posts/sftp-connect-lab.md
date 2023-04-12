---
layout: '../../layouts/MarkdownPost.astro'
title: 'pycharm使用sftp同步服务器'
pubDate: 2023-04-12
description: 'pycharm使用sftp同步服务器'
author: 'kinshingpoon'
cover:
    url: 'https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202304121720551.png'
    square: 'https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202304121720551.png'
    alt: 'cover'
tags: ["软件使用"]
theme: 'light'
featured: true
---
# 目的
为了电脑能够使用实验室服务器的资源，且可以通过sftp进行同步，随时同步项目代码。
# 步骤
可以结合frp进行内网穿透，但是如果服务器本身就可以访问外网或者内网可以直接使用。
## 1、打开同步设置
![在这里插入图片描述 |inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202304121721269.png)
## 2、配置ssh连接
这里选择sftp，然后也可以使用ftp等，输入ssh的用户名和密码，然后配置好服务器的根目录`Root path`
![在这里插入图片描述 |inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202304121721568.png)
## 3、建立目录映射
这里建立服务器端和本地端项目之间的映射。
![在这里插入图片描述 |inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202304121722104.png)
## 4、其他设置
![在这里插入图片描述 |inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202304121722975.png)
![在这里插入图片描述 |inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202304121723403.png)
## 5、使用服务器环境

打开设置
![在这里插入图片描述 |inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202304121723221.png)

![在这里插入图片描述 |inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202304121724224.png)
![在这里插入图片描述 |inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202304121724240.png)
![在这里插入图片描述 |inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202304121724191.png)
