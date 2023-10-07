---
layout: '../../layouts/MarkdownPost.astro'
title: 'python论文画图模板'
pubDate: 2023-04-12
description: 'python论文画图模板'
author: 'Jack Pan'
cover:
    url: 'https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202304121716469.png'
    square: 'https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202304121716469.png'
    alt: 'cover'
tags: ["Software Usage","数学建模","画图"]
theme: 'light'
featured: true
---
此模板为根据2022年美赛时画图经验整理出来的模板。
python虽然有很多可视化的包，但个人认为matplotlib功能时比较多比较全的。
## 初始化配置
这里要说的是那个画图导出的png、jpg等图片文件的话是由一个可以改图片的像素和分辨率的这个还是要稍微调大点，但如果你使用那个svg格式的图片话，图像像素是不会有明显改变的。（这里做了一下测验调大dpi值时，svg图片文件的大小没有变化。）
然后颜色盘中选了一些个人认为画图好看的颜色。
```python
import numpy as np
import matplotlib.pyplot as plt
plt.rcParams['savefig.dpi'] = 500 #图片像素
plt.rcParams['figure.dpi'] = 500 #分辨率
# Arial Helvetica TIMES NEW ROMAN #如果要显示中文字体，则在此处设为：SimHei
plt.rcParams['font.sans-serif']=['Arial']  
plt.rcParams['axes.unicode_minus']=False  #显示负号
import pandas as pd
import matplotlib.colors as mcolors
# color pallette 颜色盘
b1,color1,color2,color3,color4,color5 = '#636efa','#c8141c','dodgerblue', '#8714d0', 'green', 'orangered' 
```


## 框图设置
画图的话有去多基础的设置是可以配置的，这里可以提供我的设置：
### 单图

```python
### 绘制人口普查数据图 2000-2020年 
# Arizona、California、Colorado、New Mexico、Wyoming

plt.figure(figsize=(10,5))
#plt.grid(linestyle = "--")      #设置背景网格线为虚线
ax = plt.gca()
ax.spines['top'].set_visible(False)  #去掉上边框
ax.spines['right'].set_visible(False) #去掉右边框
# ax.tick_params(axis=u'both', which=u'both',length=0) # 去掉刻度线
plt.plot(df_ep['Year'],df_ep['EP_AZ'],label='Arizona',linewidth=2,color=color1)
plt.plot(df_ep['Year'],df_ep['EP_CA'],label='California',linewidth=2,color=color2)
plt.plot(df_ep['Year'],df_ep['EP_CO'],label='Colorado',linewidth=2,color=color3)
plt.plot(df_ep['Year'],df_ep['EP_NM'],label='New Mexico',linewidth=2,color=color4)
plt.plot(df_ep['Year'],df_ep['EP_WY'],label='Wyoming',linewidth=2,color=color5)

plt.legend()          #显示各曲线的图例
plt.legend(loc=0, numpoints=1)
leg = plt.gca().get_legend()
ltext = leg.get_texts()
plt.xticks(fontsize=12,fontweight='bold') #默认字体大小为10
plt.yticks(fontsize=12,fontweight='bold')
plt.setp(ltext, fontsize=12,fontweight='bold') #设置图例字体的大小和粗细
plt.xlabel("Year",fontsize=13,fontweight='bold')
plt.ylabel("Electricity price",fontsize=13,fontweight='bold')
plt.tight_layout()
# plt.xlim(3,21)         #设置x轴的范围
# plt.ylim(0.5,1)
plt.show()
plt.savefig('pic_1'.png',format='png')
```
![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202304121715830.png)

### 组合图
```python
plt.figure(figsize=(14,5))
plt.subplot(1,2,1)
#plt.grid(visible=True,axis="y",linestyle = "--")      #设置背景网格线为虚线
ax = plt.gca()
ax.spines['top'].set_visible(False)  #去掉上边框
ax.spines['right'].set_visible(False) #去掉右边框
ax.tick_params(axis=u'both', which=u'both',length=0) # 去掉刻度线

plt.bar([x-0.3 for x in range(len(df_wa['STATE']))],df_wa['IR-CUsFr'], width=0.1,color='green',label="Irrigation")
plt.bar([x-0.2 for x in range(len(df_wa['STATE']))],df_wa['PS-Wtotl'] ,width=0.1,color='orange',label="Public Supply")
plt.bar([x-0.1 for x in range(len(df_wa['STATE']))],df_wa['AQ-Wtotl'], width=0.1,color='dodgerblue',label="Aquaculture")
plt.bar([x for x in range(len(df_wa['STATE']))],df_wa['IN-Wtotl'], width=0.1,color='deeppink',label="Industrial")
plt.bar([x+0.1 for x in range(len(df_wa['STATE']))],df_wa['LI-WFrTo'], width=0.1,color='purple',label="Livestock")
plt.bar([x+0.2 for x in range(len(df_wa['STATE']))],df_wa['MI-Wtotl'], width=0.1,color='brown',label="Mining")
plt.bar([x+0.3 for x in range(len(df_wa['STATE']))],df_wa['PT-CUTot'], width=0.1,color='red',label="Thermoelectric")

plt.legend()#显示各曲线的图例
plt.legend(loc=0, numpoints=1)
leg = plt.gca().get_legend()
ltext = leg.get_texts()
plt.setp(ltext, fontsize=12,fontweight='bold') #设置图例字体的大小和粗细
plt.xticks([x for x in range(len(df_wa['STATE']))],df_wa['STATE'],size=13,fontweight='bold')
plt.yticks([2000,4000,6000,8000,10000,12000,14000,16000],['2K','4K','6K','8K','10K','12K','14K','16K'],size=13,fontweight='bold')
plt.xlabel("STATE",fontsize=13,fontweight='bold')
plt.ylabel("WATER CONSUMPTION (Mgal/d)",fontsize=13,fontweight='bold')
plt.tight_layout()

plt.subplot(1,2,2)
#plt.grid(visible=True,axis="y",linestyle = "--")      #设置背景网格线为虚线
ax = plt.gca()
ax.spines['top'].set_visible(False)  #去掉上边框
ax.spines['right'].set_visible(False) #去掉右边框
ax.tick_params(axis=u'both', which=u'both',length=0) # 去掉刻度线

plt.bar([x-0.3 for x in range(len(df_wa['STATE']))],df_wa['Agricultural'] ,width=0.3, color=b1,label="Agricultural")
plt.bar([x for x in range(len(df_wa['STATE']))],df_wa['Residential'], width=0.3, color=color4,label="Residential")
plt.bar([x+0.3 for x in range(len(df_wa['STATE']))],df_wa['Industrial'], width=0.3, color=color5,label="Industrial")
# plt.bar([i for i in range(len(df_wa['STATE']))],agricultural, alpha=0.5, width=0.5, color='r',label="1")
# plt.bar([i for i in range(len(df_wa['STATE']))],industrial, alpha=0.5, width=0.5, color='b',label="2")
# plt.bar([i for i in range(len(df_wa['STATE']))],residential, alpha=0.5, width=0.5, color='g',label="3")

plt.legend()#显示各曲线的图例
plt.legend(loc=0, numpoints=1)
leg = plt.gca().get_legend()
ltext = leg.get_texts()
plt.setp(ltext, fontsize=12,fontweight='bold') #设置图例字体的大小和粗细
plt.xticks([x for x in range(len(df_wa['STATE']))],df_wa['STATE'],size=13,fontweight='bold')
plt.yticks([2000,4000,6000,8000,10000,12000,14000,16000],['2K','4K','6K','8K','10K','12K','14K','16K'],size=13,fontweight='bold')
plt.xlabel("STATE",fontsize=13,fontweight='bold')
plt.ylabel("WATER CONSUMPTION (Mgal/d)",fontsize=13,fontweight='bold')
plt.tight_layout()
save_pic(1)
show_pic()
```
![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202304121716469.png)
还有一些其他的图，例如雷达图，各种热力图，这些都是可以用这个模板的，这样你画出来的图片会比较清晰和好看。
这里再附上一个雷达图，其他图也没有怎么画了。

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202304121716306.png)
## 其他
画图的话当然还是可以用一些软件什么的了，然后比较好的像origin专业画图的，但是这个需要专门去学习之后才能将图画的更好看一些，本人也只是要用的时候可以找一些资料画一些图，但也没有啥经验，以后的话可能会使用的更多一点。如果是话那种示意图的话，可以用viso还有PPT，个人最熟悉的还是PPT了，日常使用PPT去画图。
