---
layout: '../../layouts/MarkdownPost.astro'
title: 'Awesome Surface Reconstruction from Point Clouds'
pubDate: 2023-07-07
description: 'Surface Reconstruction'
author: 'Jack Pan'
cover:
    url: 'https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202307071758579.png'
    square: 'https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202307071758579.png'
    alt: 'cover'
tags: ["深度学习"]
theme: 'light'
featured: true
---

### New Paradigm（Neural Fields）
- [CVPR 2023 Highlight] **Neural Kernel Surface Reconstruction** [[paper]](https://arxiv.org/pdf/2305.19590.pdf) [[code]](https://github.com/nv-tlabs/NKSR)
  - Huang J, Gojcic Z, Atzmon M, et al. (NVIDIA)
- [CVPR 2022] **Neural Fields as Learnable Kernels for 3D Reconstruction** [[paper]](https://arxiv.org/pdf/2111.13674.pdf) [[code]](https://github.com/nv-tlabs/NKSR)
  -  Williams F, Gojcic Z, Khamis S, et al. (NVIDIA)
### Optimization (Oriented Normal Estimation, Signed / Unsigned Distance Functions, Surface Representation, Priors)
- [CVPR 2023] **SHS-Net: Learning Signed Hyper Surfaces for Oriented Normal Estimation of Point Clouds** [[paper]](http://openaccess.thecvf.com/content/CVPR2023/papers/Li_SHS-Net_Learning_Signed_Hyper_Surfaces_for_Oriented_Normal_Estimation_of_CVPR_2023_paper.pdf) [[code]](https://github.com/LeoQLi/SHS-Net) 
  - Li, Qing, et al. （tsinghua BNRist）
- [CVPR 2023] **Unsupervised Inference of Signed Distance Functions from Single Sparse Point Clouds without Learning Priors** [[paper]](https://openaccess.thecvf.com/content/CVPR2023/papers/Chen_Unsupervised_Inference_of_Signed_Distance_Functions_From_Single_Sparse_Point_CVPR_2023_paper.pdf) [[code]](https://github.com/chenchao15/NeuralTPS) 
  - Chen, Chao, Yu-Shen Liu, and Zhizhong Han. （tsinghua BNRist）
- [NeruIPS 2022] **Learning Consistency-Aware Unsigned Distance Functions Progressively from Raw Point Clouds** [[paper]](https://proceedings.neurips.cc/paper_files/paper/2022/file/68d88dcd1e1917c74993902073f08e40-Paper-Conference.pdf) [[code]](https://junshengzhou.github.io/CAP-UDF.) 
  - Zhou, Junsheng, et al. （tsinghua BNRist）
- [CVPR 2022] **Surface Representation for Point Clouds** [[paper]](https://openaccess.thecvf.com/content/CVPR2022/papers/Ran_Surface_Representation_for_Point_Clouds_CVPR_2022_paper.pdf) [[code]](https://github.com/hancyran/RepSurf) 
  - Ran, Haoxi, Jun Liu, and Chengjie Wang. (Tencent Youtu Lab)
- [CVPR 2022] **Surface Reconstruction from Point Clouds by Learning Predictive Context Priors** [[paper]](https://openaccess.thecvf.com/content/CVPR2022/papers/Ma_Surface_Reconstruction_From_Point_Clouds_by_Learning_Predictive_Context_Priors_CVPR_2022_paper.pdf) [[code]](https://github.com/mabaorui/PredictableContextPrior) 
  - Ma, Baorui, et al. （tsinghua BNRist）
- [CVPR 2022] **Reconstructing Surfaces for Sparse Point Clouds with On-Surface Priors** [[paper]](https://openaccess.thecvf.com/content/CVPR2022/papers/Ma_Reconstructing_Surfaces_for_Sparse_Point_Clouds_With_On-Surface_Priors_CVPR_2022_paper.pdf) [[code]](https://github.com/mabaorui/OnSurfacePrior) 
  - Ma, Baorui, Yu-Shen Liu, and Zhizhong Han. （tsinghua BNRist）
- [CVPR 2022] **POCO: Point Convolution for Surface Reconstruction** [[paper]](http://openaccess.thecvf.com/content/CVPR2022/papers/Boulch_POCO_Point_Convolution_for_Surface_Reconstruction_CVPR_2022_paper.pdf) [[code]](https://github.com/valeoai/POCO) 
  - Boulch, Alexandre, and Renaud Marlet. (Valeo.ai)
### Underwater
- [The International Journal of Robotics Research, IF=9.2] **A Surface Reconstruction Method for In-Detail Underwater 3D Optical Mapping** [[paper]](https://inria.hal.science/hal-01030845/file/underwater.pdf) 
- [Journal of Field Robotics, IF=8.3] **Coverage Path Planning with Real-time Replanning and Surface Reconstruction for Inspection of Three-dimensional Underwater Structures using Autonomous Underwater Vehicles** [[paper]](https://deepblue.lib.umich.edu/bitstream/handle/2027.42/113717/rob21554.pdf?sequence=1) 
- **Surface reconstruction methods for the recovery of 3D models from underwater interest areas** [[paper]](https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=1abf7b97fd773eb6376d5f632d9a5f2eca303ce6)
