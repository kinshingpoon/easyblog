---
layout: '../../layouts/MarkdownPost.astro'
title: '腾讯云域名绑定博客服务器Vercel'
pubDate: 2023-05-19
description: '给网站设置自定义域名'
author: 'Jack Pan'
cover:
    url: 'https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202305191620264.png'
    square: 'https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202305191620264.png'
    alt: 'cover'
tags: ["Software Usage"]
theme: 'light'
featured: true
---

## 一、购买域名服务器
这里使用的腾讯的域名，也可以从其他地方。

## 二、Vercel中配置域名（https://vercel.com/）

这里默认在Vercel中已经有项目，点击进入项目。Setting >> Domains

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202305191608425.png)

点击设置，打开domain

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202305191609782.png)
![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202305191610355.png)

添加网站解析，记住这个在进入第三步，设置网站解析

> `A`记录就是把一个域名解析到一个IP地址（Address，特指数字IP地址）；
`CNAME`记录就是把域名解析到另外一个域名。

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202305191617752.png)

## 三、域名解析
购买后可以查询自己购买的域名：

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202305191602397.png)

点击域名进入我的域名，然后点击解析进入网站解析,点击添加解析

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202305191604639.png)

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202305191615075.png)
按照第二步的最后一个的信息填上去

## 四、常见问题

**问题1: Vercel域名在国内被墙**

vercel.app因为被大量使用被墙掉了， 对于国内的用户来说，Vercel 官方提供了单独的 IP 和 CNAME 地址配置一下单独的解析。
将上述步骤中用到的 ip和 cname地址替换成以下内容即可：
A记录地址：`76.223.126.88` 或 `76.76.21.98` 等
CNAME 记录地址：`cname-china.vercel-dns.com`

**问题2: 注意优先级**

`A`记录和`CNAME`下面两个顺序需要对应好

![inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202310092006707.png)

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202310092005014.png)