---
layout: '../../layouts/MarkdownPost.astro'
title: 'A Prior Instruction Representation Framework for Remote Sensing Image-text Retrieval'
pubDate: 2023-10-03
description: 'ACMMM 2023 Paper'
author: 'Jack Pan'
cover:
    url: 'https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202310032023903.png'
    square: 'https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202310032023903.png'
    alt: 'cover'
tags: ["Deep Learning","Image-text Retrieval","Remote Sensing"]
theme: 'light'
featured: true
---
## A Prior Instruction Representation Framework for Remote Sensing Image-text Retrieval

 [A Prior Instruction Representation Framework for Remote Sensing Image-text Retrieval](). **Jiancheng Pan**, Qing Ma, Cong Bai*. **ACM MM 2023.**

## Introduction

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202310032023903.png)

This paper presents a prior instruction representation framework (PIR) for remote sensing image-text retrieval, aimed at remote sensing vision-language understanding tasks to solve the semantic noise problem. Our highlight is the proposal of a paradigm that draws on prior knowledge to instruct adaptive learning of vision and text representations. Concretely, two progressive attention encoder (PAE) structures, Spatial-PAE and Temporal-PAE, are proposed to perform long-range dependency modeling to enhance key feature representation. In vision representation, Vision Instruction Representation (VIR) based on Spatial-PAE exploits the prior-guided knowledge of the remote sensing scene recognition by building a belief matrix to select key features for reducing the impact of semantic noise. In text representation, Language Cycle Attention (LCA) based on Temporal-PAE uses the previous time step to cyclically activate the current time step to enhance text representation capability. A cluster-wise affiliation loss is proposed to constrain the inter-classes and to reduce the semantic confusion zones in the common subspace. Comprehensive experiments demonstrate that using prior knowledge instruction could enhance vision and text representations and could outperform the state-of-the-art methods on two benchmark datasets, RSICD and RSITMD.

文章中提出了一种利用先验知识指导视觉和文本自适应表征的范式（PIR），旨在解决遥感视觉-语言理解任务中的语义噪音问题。在视觉表征方面，提出了空间的视觉指示表征（VIR）模块，利用遥感场景识别的先验知识来构建信念矩阵，筛选关键特征来降低语义噪声的影响。在文本表征方面，提出了时空的语言循环注意模块（LCA），利用前一时间步循环激活当前时间步，解决位置信息模糊的问题。最后团队提出了一种基于聚类的归属损失（Cluster-wise Affiliation Loss）来约束类间关系，减少公共子空间中的语义混淆区。综合实验证明，使用先验知识指令方法可以降低语义噪声影响，增强视觉和文本表征能力，且在两个基准数据集 RSICD 和 RSITMD 上的表现优于最先进的方法。

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202310032018345.png)

## Citation

If you find this code useful for your work or use it in your project, please consider citing:

```
--wating--
```
