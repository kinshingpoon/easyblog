---
layout: '../../layouts/MarkdownPost.astro'
title: '【CLIP系列文章汇总】Contrastive Language-Image Pre-training'
pubDate: 2023-10-09
description: 'CLIP系列文章汇总'
author: 'Jack Pan'
cover:
    url: 'https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202310091229010.png'
    square: 'https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202310091229010.png'
    alt: 'cover'
tags: ["Deep Learning","CLIP"]
theme: 'light'
featured: true
---
# 【CLIP系列文章汇总】Contrastive Language-Image Pre-training (更新中)

调研CLIP系列文章，自从2021年CLIP出现后，后续出现了一大堆基于CLIP的工作。

### CLIP的开山之作
>（视觉-语言模型预训练）

**CLIP：** 基于4亿个图文对训练的视觉-语言模型

*在训练技巧上比较粗暴，靠OpenAI的财大气粗，因此后续很多在训练策略上的各种优化*
- [ICML 2021] `OpenAI` | **Learning Transferable Visual Models From Natural Language Supervision** | [[paper]](http://proceedings.mlr.press/v139/radford21a/radford21a.pdf)[[code]](https://github.com/OpenAI/CLIP)

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202310090019244.png)

> 附：中文CLIP

- [arXiv 2023] `DAMO Academy` | **Chinese CLIP: Contrastive Vision-Language Pretraining in Chinese** | [[paper]](https://browse.arxiv.org/pdf/2211.01335.pdf)[[code]](https://github.com/OFA-Sys/Chinese-CLIP)

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202310090350930.png)

### CLIP的优化和评估
> (训练策略优化、质量评估方式等)

**CLIP的评估方式：**

- [NeurIPS 2022] | **Quality Not Quantity: On the Interaction between
Dataset Design and Robustness of CLIP** | [[paper]](https://proceedings.neurips.cc/paper_files/paper/2022/file/86a8a512b27f49519594ebe89f66d708-Paper-Conference.pdf)[[code]](https://github.com/mlfoundations/clip_quality_not_quantity)

**引入自监督：**
- [ECCV 2022] | **SLIP: Self-supervision meets Language-Image Pre-training** | [[paper]](https://browse.arxiv.org/pdf/2112.12750.pdf)[[code]](https://github.com/facebookresearch/SLIP)

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202310090413912.png)

**引入Mask训练方法：**

- [CVPR 2023] `Meta` | **Scaling Language-Image Pre-training via Masking** | [[paper]](https://openaccess.thecvf.com/content/CVPR2023/papers/Li_Scaling_Language-Image_Pre-Training_via_Masking_CVPR_2023_paper.pdf)[[code]](https://github.com/facebookresearch/flip)

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202310091729290.png)


**Self-Distillation+Mask Image Modeling：**
*更快的CLIP训练方法*

- [CVPR 2023] | **MaskCLIP: Masked Self-Distillation Advances Contrastive
Language-Image Pretraining** | [[paper]](https://openaccess.thecvf.com/content/CVPR2023/papers/Dong_MaskCLIP_Masked_Self-Distillation_Advances_Contrastive_Language-Image_Pretraining_CVPR_2023_paper.pdf)[[code]](https://github.com/LightDXY/MaskCLIP)

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202310090255418.png)

**Attentive Mask CLIP：**

- [ICCV 2023] `MRSA` | **Attentive Mask CLIP** | [[paper]](https://openaccess.thecvf.com/content/ICCV2023/papers/Yang_Attentive_Mask_CLIP_ICCV_2023_paper.pdf)[[code]](https://github.com/microsoft/A-CLIP)

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202310090239862.png
)


### CLIP的领域应用
>（在某个领域的应用）

**3D点云方向 & NeRF：** 
*本质上还是2D图像和文本进行预训练:*

- [CVPR 2022] `ShanghaiAI Lab` | **PointCLIP: Point Cloud Understanding by CLIP** | [[paper]](https://openaccess.thecvf.com/content/CVPR2022/papers/Zhang_PointCLIP_Point_Cloud_Understanding_by_CLIP_CVPR_2022_paper.pdf)[[code]](https://github.com/ZrrSkywalker/PointCLIP)

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202310090029571.png)

*NeRF上的应用：*

- [CVPR 2022] `CityU` | **CLIP-NeRF: Text-and-Image Driven Manipulation of Neural Radiance Fields** | [[paper]](https://openaccess.thecvf.com/content/CVPR2022/papers/Wang_CLIP-NeRF_Text-and-Image_Driven_Manipulation_of_Neural_Radiance_Fields_CVPR_2022_paper.pdf)

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202310090355228.png)

*发挥了ChatGPT和CLIP的优势：*

- [ICCV 2023] `CityU` | **PointCLIP V2: Prompting CLIP and GPT for Powerful
3D Open-world Learning** | [[paper]](https://openaccess.thecvf.com/content/ICCV2023/papers/Zhu_PointCLIP_V2_Prompting_CLIP_and_GPT_for_Powerful_3D_Open-world_ICCV_2023_paper.pdf)[[code]](https://github.com/yangyangyang127/PointCLIP_V2)

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202310090325849.png)


**视觉感知：** 
- [AAAI 2023] `S-Lab` | **Exploring CLIP for Assessing the Look and Feel of Images** | [[paper]](https://ojs.aaai.org/index.php/AAAI/article/view/25353/25125)

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202310090050323.png)

**视频理解：** 合情合理的迁移应用
- [CVPR 2022] `Adobe` | **Per-Clip Video Object Segmentation** | [[paper]](https://openaccess.thecvf.com/content/CVPR2022/papers/Park_Per-Clip_Video_Object_Segmentation_CVPR_2022_paper.pdf)

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202310090353769.png)

- [ECCV 2022] `CUHK`| **Frozen CLIP Models are Efficient Video Learners**
| [[paper]](https://browse.arxiv.org/pdf/2208.03550.pdf)[[code]](https://github.com/OpenGVLab/efficient-video-recognition)

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202310090216485.png)

**MaskCLIP / MaskCLP++:** 此MaskCLIP非上面的MaskCLIP，上面讲的是加入Mask的训练方法的，而这里指的是Mask是指图像的掩码

- [ECCV 2022] `S-Lab` | **Extract Free Dense Labels from CLIP** ｜ [[paper]](https://arxiv.org/pdf/2112.01071)

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202310090230186.png)

**器官分割和肿瘤检测:**
- [ICCV 2023] | **CLIP-Driven Universal Model for Organ Segmentation and Tumor Detection** | [[paper]](https://openaccess.thecvf.com/content/ICCV2023/papers/Liu_CLIP-Driven_Universal_Model_for_Organ_Segmentation_and_Tumor_Detection_ICCV_2023_paper.pdf)[[code]](https://github.com/ljwztc/CLIP-Driven-Universal-Model)

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202310090223119.png)

**Open-Vocabulary Semantic Segmentation:**

*分割根据文本内容所指代的物体（还要包括没看到过的 zero-shot）*

-[CVPR 2023] `Meta` | **Open-Vocabulary Semantic Segmentation with Mask-adapted CLIP** | [[paper]](https://openaccess.thecvf.com/content/CVPR2023/papers/Liang_Open-Vocabulary_Semantic_Segmentation_With_Mask-Adapted_CLIP_CVPR_2023_paper.pdf)[[code]](https://jeff-liangf.github.io/projects/ovseg)

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202310090339034.png)

**RoboTHOR ObjectNav：**

- [CVPR 2022] `AllenAI`| **Simple but Effective: CLIP Embeddings for Embodied AI** | [[paper]](https://openaccess.thecvf.com/content/CVPR2022/papers/Khandelwal_Simple_but_Effective_CLIP_Embeddings_for_Embodied_AI_CVPR_2022_paper.pdf)[[code]](https://github.com/allenai/embodied-clip.)

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202310090403355.png)

**遥感领域的应用**

- [arXiv 2023] | **RemoteCLIP: A Vision Language Foundation
Model for Remote Sensing** | [[paper]](https://browse.arxiv.org/pdf/2306.11029.pdf)

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202310090406565.png)


### 其他

- [arXiv 2021] | **How Much Can CLIP Benefit Vision-and-Language Tasks?** | [[paper]](https://browse.arxiv.org/pdf/2107.06383.pdf)

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202310090418867.png)