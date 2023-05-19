---
layout: '../../layouts/MarkdownPost.astro'
title: 'Prompt Engineering in Vision and Language(更新中...)'
pubDate: 2023-05-19
description: '准备课堂汇报整理一下看的几篇prompt tuning的文章'
author: 'kinshingpoon'
cover:
    url: 'https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202305191512828.png'
    square: 'https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202305191512828.png'
    alt: 'cover'
tags: ["深度学习"]
theme: 'light'
featured: true
---

Fine-tuning中：是预训练语言模型“迁就“各种下游任务。具体体现就是上面提到的通过引入各种辅助任务loss，将其添加到预训练模型中，然后继续pre-training，以便让其更加适配下游任务。总之，这个过程中，预训练语言模型做出了更多的牺牲。
Prompting中，是各种下游任务“迁就“预训练语言模型。具体体现也是上面介绍的，我们需要对不同任务进行重构，使得它达到适配预训练语言模型的效果。总之，这个过程中，是下游任务做出了更多的牺牲。

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202305191512884.png)