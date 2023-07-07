---
layout: '../../layouts/MarkdownPost.astro'
title: 'ssh+frp 实现内网穿透'
pubDate: 2023-04-08
description: 'ssh+frp 实现内网穿透的使用教程'
author: 'Jack Pan'
cover:
    url: 'https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/20230409112208.png'
    square: 'https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/20230409112208.png'
    alt: 'cover'
tags: ["软件使用"]
theme: 'light'
featured: true
---

## 一、frp简介

**一个可用于内网穿透的高性能反向代理应用，**支持**TCP、UDP、HTTP、HTTPS**协议。

**官方文档:**

旧文档入口 ==> https://github.com/fatedier/frp/blob/master/README_zh.md

完整文档迁移至 ==> https://gofrp.org/docs/

## 二、配置步骤

### 1、配置ssh连接准备

**服务端**：需要一台可以直接访问外网的服务器 阿里云或者腾讯云服务器

**客户端**：需要需要做内网穿透的服务器

### 2、配置ssh安装步骤

（参考博客https://www.cnblogs.com/chywx/p/10939966.html）

#### 下载frp压缩包

下载地址：https://github.com/fatedier/frp/releases

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/image-20220304171619936.png)

我的是ubuntu所以就算下载了`frp_0.34.3_linux_amd64.tar.gz`可以根据自己的电脑选择

#### 服务端和客户端解压安装包

```
cd /usr/local/
wget https://github.com/fatedier/frp/releases/download/v0.34.3/frp_0.34.3_linux_amd64.tar.gz
tar -zxvf frp_0.34.3_linux_amd64.tar.gz
mv frp_0.34.3_linux_amd64 frp
```

- **`frpc`**:客户端可执行程序
- **`frpc_full.ini`**:客户端所有配置项（可以再此文件查看frp的所有的配置项）
- **`frpc.ini`**:客户端配置项
- **`frps`**:服务端可执行程序
- **`frps_full.ini`**:服务端所有配置项（可以再此文件查看frp的所有的配置项）
- **`frps.ini`**:服务端配置项
- **`LICENSE`**:许可证

#### **服务端配置**

查看`frps.ini`文件，修改为如下内容

```
[common]
bind_port = 7000 # 客户端跟服务端绑定的端口号
```

默认的配置信息中只有一个绑定端口为7000，意思是我们在外网服务器中绑定7000端口和客户端进行通信。

注：端口可以自定义，但是需要客户端和服务端进行统一。阿里云服务器需要在esc管理中配置安全组规则中暴露7000端口

**启动服务端**

```
./frps -c frps.ini
```

启动成功之后，关闭xshell或者是退出回话，都会使连接断开，可以使用nohup来进行后台启动（后面启动都可以使用这种方式）

如下是后台启动并将日志输入到file.log文件中

```
nohup ./frps -c ./frps.ini > file.log 2>&1 &
```

有要求可以配置文末的开机自动启动

#### **客户端配置**

**查看frpc.ini文件，修改为如下内容**

```
[common]
server_addr = 39.105.97.50 # 你的公网ip
server_port = 7000 # 绑定的端口，自定义，跟服务端一直即可

[ssh]
type = tcp
local_ip = 127.0.0.1 # 绑定的ip，填写127.0.0.1表示本机即可
local_port = 22
remote_port = 6008 # ssh默认是22，现在转发为6008端口
```

- **[common]**表示以下配置信息是一些公用配置信息
- **server_addr**是我们服务端即外网服务器的公网访问ip
- **server_port**是我们前面在服务端配置的frps.ini中bind_port中对应的端口。需保持两边一致
- **`[ssh]`**表示以下配置信息是我们使用ssh连接内网服务器时需要的一些配置信息
- **`type`** 是连接类型，ssh方式连接就用tcp
- **`local_ip`** 是本机ip,直接使用127.0.0.1即可
- **`local_port`** 是本地ssh端口，ssh默认端口为22
- **`remote_port`** 是外网服务器请求过来的端口 注：阿里云服务器需要在esc管理中配置安全组规则中添加6008端口

**启动客户端**

```
./frpc -c ./frpc.ini
```

 OK，之后可以通过xshell来连接，只需要指定端口号为`remote_port(6008)`即可，如下

#### **多个ssh配置**（可选）

单个ssh配置成功，项配置多个，一样的操作，在另一台机器进行下载frp，之后只需要修改`frpc.ini`文件，修改格式如下

```
[common]
server_addr = 39.105.97.50
server_port = 7000

[ssh001] # 不能重复
type = tcp
local_ip = 127.0.0.1
local_port = 22
remote_port = 6009 # 不能重复
```

需要将`remote_port`进行修改，`[ssh]`名称不能重复

frpc命令启动即可。

#### **设置frp开机自启**（非必要）

创建服务文件

```
sudo vim /etc/systemd/system/frpc.service
```

填入一下信息

```
[Unit] 
Description=Frp Client 
After=network.target 
Wants=network.target 

[Service] 
Restart=on-failure 
RestartSec=5 
ExecStart=/usr/local/frp/frpc_linux_arm 

[Install] 
WantedBy=multi-user.target
```

启动服务相关操作

```
#刷新服务列表： 
systemctl daemon-reload 
#设置开机自启 
systemctl enable frpc 
#关闭开机自启 
systemctl disable frpc 
#启动服务 
systemctl start frpc 
#停止服务 
systemctl stop frpc
```

