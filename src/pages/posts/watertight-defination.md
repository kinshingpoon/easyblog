---
layout: '../../layouts/MarkdownPost.astro'
title: 'A Formal Definition of Watertight Meshes'
pubDate: 2023-07-20
description: '水密网格定义'
author: 'Jack Pan'
cover:
    url: 'https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/meshes-600x246.jpg'
    square: 'https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/meshes-600x246.jpg'
    alt: 'cover'
tags: ["深度学习","3D","网格"]
theme: 'light'
featured: true
---

水密网格定义-A Formal Definition of Watertight Meshes:

https://davidstutz.de/a-formal-definition-of-watertight-meshes/

在计算机图形学中，水密（watertight）网格通常描述由一个封闭曲面组成的网格；

![| inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/meshes-600x246.jpg)

Examples of very complex car models (left) and examples of the semi-convex hull algorithm for simplification (right).

Mario Botsch, Leif Kobbelt, Mark Pauly, Pierre Alliez, and Bruno Levy. Polygon Mesh Processing. AK Peters, 2010.

![| inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/Pasted%20Graphic.png)

- We note that a triangular mesh only defines the surface of an object.-三角网格只定义物体的表面

- Without additional constraints it is generally hard to reason about the interior and exterior of the surface — and whether the surface is closed. 
-如果没有额外的约束，通常很难推断出表面的内部和外部，以及表面是否封闭。

- watertight meshes are usually defined as 2-manifold meshes without boundary edges. 

## Reference Definitions

1. A self intersection is an intersection of two faces of the same mesh.-自交：同一网格两个面的相交
2. A non-manifold edge has more than two incident faces.-非流形边有超过两个入射面
3. The star of a vertex is the union of all its incident faces.-顶点的星形是所有入射面的并集？
4. A non-manifold vertex is a vertex where the corresponding star is not connected when removing the vertex.-非流形顶点-移除顶点时，相应的星号没有连接的顶点
5. A mesh is 2-manifold if it does contain neither self intersections, nor non-manifold edges, nor non-manifold vertices.-如果一个网格既不包含自交，也不包含非流形边，也不包含非流形顶点，那么它就是2流形的。

![| inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/manifold.jpg)

Non-manifold vertex (left) and non-manifold edge (right); 


## Watetight Mesh Definition
A 2-manifold mesh is called watertight if each edge has exactly two incident faces, i.e. no boundary edges exist.

In general, 2-manifold meshes are preferable to arbitrary meshes as many algorithms and applications are not applicable to non-manifold meshes.


## 上述提到的关键概念补充说明：
- manifold mesh流形网格

https://zhuanlan.zhihu.com/p/464675628

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/Pasted%20Graphic%201.png)

In other words, in a manifold mesh, there are at one place more than two faces that meet at a single edge that is common to those faces.

- incident faces 入射面

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/300px-Inclined_plane.png)

