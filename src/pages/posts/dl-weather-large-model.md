---
layout: '../../layouts/MarkdownPost.astro'
title: '【气象智能大模型汇总】Weather Forcast'
pubDate: 2023-09-28
description: '气象智能大模型学习笔记'
author: 'Jack Pan'
cover:
    url: 'https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202310092014864.png'
    square: 'https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202310092014864.png'
    alt: 'cover'
tags: ["Deep Learning","Weather Forcast"]
theme: 'light'
featured: true
---
### 数值天气预报模式

观测数据、数据同化、动力核心和参数化方案、下采样、评估。  
观测数据：为了反演地球系统（大气，土壤和海洋）的初始状态，在世界各地收集了大量的气象观测资料。  
数据同化：通过数值模型填补初始场和不完全的，异构的和离散的观测数据差距。考虑不同设备，不同站点的测量误差，获得对地球系统初始状态的最优估计。  
动力核心：通过数值方法求解以动量、质量和焓描述大气的耦合偏微分方程组(Navier-Stokes方程)，得到每个模型网格单元的未来状态。  
参数化方案：通过经验参数化获取在小于模型网格大小的尺度上发生过程。

### 临近预报

临近预报被世界气象组织（WMO）定义为一种预报，它提供了从现在到未来6小时的一段时间内中尺度和小尺度的局部细节，并提供了当前天气的详细描述。临近预报在极端降水的风险预防和危机管理中至关重要，极端降水通常被定义为日降水累积频率分布的第95百分位。  
极端天气：极端天气过程通常表现出几十分钟的生命周期和对流尺度上的个别特征。  

### AI天气预报的主要问题

基于深度神经网络的天气预报缺乏可解释性和物理约束。

### 气象智能大模型汇总

AI预报探索：MetNet、MetNet-2（谷歌）  
中长期预报：FourCastNet（英伟达），盘古（华为），GraphCast（谷歌、DeepMind），ClimaX（微软），风乌（上海人工智能实验室），伏羲（复旦大学），AI-GOMS（清华）  
短临预报：DGMR（DeepMind），NowcastNet（清华、中国国家气象局）

### 谷歌“MetNet”：AI天气预报初显潜力


**（背景）** 由于复杂的大气模式和算力限制下有限分辨率，使得基于物理的天气预报模式难以题进一步提升。  
**（做了什么）** MetNet实现了8小时和高分辨率的降水预报，不使用人工编码的物理模式，而是通过深度学习的方法从数据中并行地学习所需转换，有效验证了深度神经网络在天气预报上的可行性。  
**（缺点与不足）** 深度学习方法仍落后于传统数值预报方式，漏报和误报明显。  
**（技术概要）** MetNet使用共享卷积网络对数据进行下采样，然后Conv LSTM进行时序编码，最后使用注意力机制扩大全局感受野。  

![MetNet：AI天气预报初显潜力|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/v2-4253deb24892ebec1a8e9a49f39eb43c_b.jpg)

### 英伟达“FourCastNet”：实现前所未有天气预报准确率

**（背景）** 数值模式仍然是最准确的天气预报方法，但是其计算代价是昂贵的且预报。  
**（做了什么）** FourCastNet在2秒内实现了一个星期长度的高分辨率（0.25度）天气预报，速度相比数值预报方法提升45000倍。  
**（缺点与不足）** 在性能提升上仍未超过最新的传统数值预报方法。  
**（技术概要）** FourCastNet结合傅立叶神经算子（FNO）降低计算复杂度，实现高分辨率预测，使用“预训练+微调”范式扩展到下游任务（降水预报）。

![FourCastNet： 实现前所未有天气预报准确率|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/v2-1253f84f32318ec64d7adab035efa82a_b.jpg)


### 华为“盘古天气”：首次预报效果超过传统数值模式

**（背景）** 当前最准确的数值天气预报计算代价昂贵，基于AI预报方法可以加速天气预报但准确率仍低于传统数值方法。  
**（做了什么）** 盘古天气大模型通过纯数据驱动的AI方法代替传统数值模式（NWP）中动力核心和参数化方案，在预报效果上超过传统数值模式且速度提升10000倍。  
**（缺点与不足）** 盘古天气大模型是基于欧洲中期天气预报中（ECMWF）的ERA5再分析数据，不直接基于观测数据进行预报，其AI方法未替代数据同化过程。传统数值方法的数据同化数据是分布一致，盘古天气大模型能否实际解决数据分布不一致的情况还有待考量。且实际天气预报业务更为复杂，未考虑到大范围和极端气候的影响。  
**（技术概要）** 盘古天气大模型是以3D Swin Transformer为骨干网络，输入初始大气状态，输出与初始状态结构相同的未来大气状态。同时使用层次化时域聚合策略来减少预报的迭代次数进而减少迭代误差。

![盘古天气：首次预报效果超过传统数值模式|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/v2-40a220c03b86d4275e7ceef28fd5fab6_b.jpg)

### DeepMind“GraphCast”：大部分变量预报超过数值预报方法

**（背景）** 基于AI方法的天气预报相比于数值预报取得了较为显著的优势，但是往往是手动选择少数变量，未能综合地与数值预报方法进行对比。  
**（做了什么）** GraphCast可以在60秒内预测10天内的天气，而且准确率极高，在252个变量中，有99.2%超过了现有最准确的机器学习天气预报模型；在2760个变量中，有90%超过了欧洲气象中心的高精度预报（ECMWF HRES Forecast）。  
**（技术概要）** GraphCast使用图神经网络（GNN）来创建一个自回归模型，将原始经纬度网格的输入数据映射到多网格上的学习特征中。其中多网格表征方法能够捕捉到比传统的数值预报方法更长的空间互动，从而支持更粗的原始时间步长。  

![GraphCast：大部分变量预报超过数值预报方法|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/v2-1423a4b3b8540a7ea01747a7fe5a75b9_b.jpg)

### 微软“ClimaX”：一种通用可拓展的“预训练+微调”范式

**（背景）** 相比于数值，近期基于AI的天气预报针对特定的时空和同质的气候数据集进行训练，缺乏通用性。  
**（做了什么）** ClimaX是一种可以拓展的天气和气候预报模型，可以跨越不同变量、时空覆盖和物理基础的异构数据进行训练和微调，解决了广泛的天气和气候任务。  
**（缺点和不足）** 相比于其他具有十亿参数量的AI天气预报模型，ClimaX只拓展了到相当小的模型。  
**（技术概要）** 一个通用可拓展的“预训练+微调”范式，变量编码和聚合方式使得Transformer允许使用可用计算同时保持通用性。其在CMIP6上进行自监督学习目标进行预训练，然后微调到下游任务，包括自监督和预训练看不到的大气变量和时空尺度任务。  

![ClimaX：一种通用可拓展的“预训练+微调”范式|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/v2-49514c08661cd0565c4bbab5aa0d82a8_b.jpg)

### 上海人工智能实验室“风乌”：全球气象有效预报时间首破10天

**（背景）** 当前AI天气预报的重点课题是如何进一步提高AI天气预报的时效和准确度。  
**（做了什么）** 风乌30秒即可生成未来10天全球高精度预报结果。  
**（技术概要）** 风乌将大气变量相互影响看作是多任务学习问题，采用多模态神经网络和多任务自动均衡权重解决多种大气变量表征和相互影响的问题。为了优化多步预测结果，风乌使用缓存回放（replay buffer）策略，减少自回归预测误差，提高长期预测的性能。  

![风乌：全球气象有效预报时间首破10天|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/v2-840c42af4df1711a634886263ebc83bc_b.jpg)

### 复旦“伏羲”： 首次将AI天气预报精度提升到ECMWF集合平均预报水平

**（背景）** 最先进的AI天气预报模型在10天预报中表现出优越性能，然而在15天预报中，与ECMWF集合平均相比，仍然存在挑战。  
**（做了什么）** 伏羲预报精度在评测集上首次达到欧洲中期天气预报中心集合预报（ECMWF：Atmospheric Model Ensemble 15-day forecast ）的集合平均，在预报显著领先于欧洲中心确定性预报（ECMWF：Atmospheric Model High resolution 10-day forecast）。  
**（技术概要）** 伏羲基于U-Transformer结构，并通过Cascade的方式级联模型，提升预报精度和时长，其中参数量达到了45亿。  

![伏羲： 首次将AI天气预报精度提升到ECMWF集合平均预报水平|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/v2-4b09d12bc7d9f8ad8dc21a7f67ec64c0_b.jpg)

### 清华“AI-GOMS”: 首个AI驱动全球海洋建模系统

**（背景）** 进一步发展海洋模式的主要瓶颈是当前的数值海洋建模非线性不稳定性、计算量大、重用效率低、耦合成本高。  
**（做了什么）** AI-GOMS是一个大型的人工智能驱动的全球海洋建模系统，用于准确和高效的全球海洋日常预测。  
**（技术概要）** AI-GOMS由一个基于傅立叶的Masked Autoencoder（MAE）结构的预训练模型和一个轻量的微调模型组成。其中微调模型分为区域降尺度、（波浪）解码和（生物化学）耦合三种不同结构，可以解决全球海洋的绝大部分任务。  

![AI-GOMS: 首个AI驱动全球海洋建模系统|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/v2-222ac63089eb022e7424892c1c8e2130_b-20231009211542326.jpg)

### **相关文献和资料**

*AI天气预报探索：*

- MetNet: A Neural Weather Model for Precipitation Forecasting

*中长期天气预报：*

- FourCastNet: A Global Data-driven High-resolution Weather Model using Adaptive Fourier Neural Operators

- Pangu-Weather: Accurate medium-range global weather forecasting with 3D neural networks

- GraphCast: Learning skillful medium-range global weather forecasting

- ClimaX: A foundation model for weather and climate

- FengWu: Pushing the Skillful Global Medium-range Weather Forecast beyond 10 Days Lead

- FuXi: A cascade machine learning forecasting system for 15-day global weather forecast

- AI-GOMS: Large AI-Driven Global Ocean Modeling System

*短临预报：*

- DGMR: Skilful precipitation nowcasting using deep generative models of radar

- AtmoRep: A stochastic model of atmosphere dynamics using large scale representation learning 

*天气预报基准数据集：*
- WeatherBench: A benchmark dataset for data-driven weather forecasting 

- WeatherBench 2: A benchmark for the next generation of data-driven global weather models

*其他相关论文：*

- Can deep learning beat numerical weather prediction?

- Earthformer: Exploring Space-Time Transformers for Earth System Forecasting

- PreDiff: Precipitation Nowcasting with Latent Diffusion Models

- SFNO: Spherical Fourier Neural Operators: Learning Stable Dynamics on the Sphere （AFNO的后继版本）

- Anthropogenic fingerprints in daily precipitation revealed by deep learning
