---
layout: '../../layouts/MarkdownPost.astro'
title: 'Prompt Engineering in Vision and Language'
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
# 一、介绍
## 背景
自从GPT3问世以来，“预训练+微调”的模式被广泛应用在各类大模型的下游任务中。在视觉领域，同样受到语言大模型的启发，包括视觉和语言交叉的多模态领域，“预训练+微调”的模式在多个领域被使用。但是这套模式最突出的问题在于微调的代价还是太高，对于中小型企业来讲，技术难度和成本都太大，不仅需要大量的数据去进行支持，同时最终的效果也是难以保证的，因此一个可以通用的且微调代价小的通用大模型范式亟待挖掘。
	将近代自然语言处理（Natural Language Processing，NLP）技术的发展可以总结为四种范式，分别为：
1.	非神经网络时代的完全监督学习 （Fully Supervised Learning, Non-Neural Network）
2.	基于神经网络的完全监督学习 (Fully Supervised Learning, Neural Network)
3.	预训练，精调范式 (Pre-train, Fine-tune)
4.	预训练，提示，预测范式（Pre-train, Prompt, Predict）
现在的第四个范式——提示工程下的通用大模型在计算机视觉，自然语言，多模态领域广泛使用。相比于Fine-tuning范式，Prompting有着更符合实际应用的优势和趋势（结合下图理解）：
Fine-tuning是预训练语言模型“迁就“各种下游任务。具体体现就是上面提到的通过引入各种辅助任务loss，将其添加到预训练模型中，然后继续pre-training，以便让其更加适配下游任务。总之，这个过程中，预训练语言模型做出了更多的牺牲。
Prompting是各种下游任务“迁就“预训练语言模型。具体体现也是上面介绍的，我们需要对不同任务进行重构，使得它达到适配预训练语言模型的效果。总之，这个过程中，是下游任务做出了更多的牺牲。（部分参考来自https://zhuanlan.zhihu.com/p/395115779）

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202305191512884.png)

当前大模型时代下的四驾马车分别是数据，模型、预训练方式、提示工程，其中提示工程在视觉和语言任务中发挥重要作用。

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202306041042639.png)

## 发展历史
（以下chatGPT生成内容）
Prompt tuning或Prompt engineering是一种自然语言处理模型优化方法，其发展历史可以追溯到2015-2016年，当时它被称为Input reshaping，是一种集成语言建模和模型迁移的方法。然而，该方法并没有得到广泛的应用，直到OpenAI和Google在2019年以后开始使用这种方法来优化GPT-2等语言模型的性能。
2019年，OpenAI的研究团队发表了《Language Models are Unsupervised Multitask Learners》一文，该论文中提到了使用Input Perturbation方法来研究语言模型的隐式知识表示。在这个实验中，研究者发现通过调整输入序列（如添加特定前缀或后缀）来影响模型的预测性能。这成为了prompt tuning背后的核心思想。
2020年，OpenAI发表了《Language Models are Few-Shot Learners》一文，提出了GPT-3，该模型使用了一种基于样例推理的方法，即使用少量的样例数据来完成一些特定的任务，这也是一个基于Prompt tuning的应用实例。
在GPT-3的发展中，Google的研究者也进行了类似的工作，他们在2020年通过大量的Prompt tuning来提高BERT的性能，这进一步推进了Prompt tuning在自然语言处理领域的发展。此外，Prompt tuning在一些机器学习竞赛中也得到了应用，如Kaggle中的Toxic Comment Classification Challenge等，证明了它在文本分类和序列标注等任务中的有效性。

## 应用价值
（以下chatGPT生成内容）
Prompt tuning是一种来源于自然语言处理模型优化方法，它的意义和价值在于：
1. 提高模型性能：Prompt tuning可以显着提高模型的性能，尤其是对于少样本或零样本任务，它可以通过对输入prompt进行调整，使得模型能够更好地理解任务和对文本进行分类或标注。
2. 减少数据需求：Prompt tuning通过引导模型的学习，可以让模型更快速地适应不同的任务，减少了对大量标记数据的需求。这对于许多应用场景下的数据稀缺问题有着很重要的意义。
3. 提高系统的可用性：Prompt tuning可以改善自然语言处理系统的可用性，使其更加用户友好。通过调整输入prompt，系统可以更准确地理解用户的需求和意图。
4. 提高泛化能力：通过Prompt tuning提高模型性能，可以增强模型的泛化能力，让它可以更好地适应新的场景和任务。
5. 降低开发成本：Prompt tuning可以通过减少开发人员需要手动调整模型的调整次数，从而降低开发的人工成本。

# 二、方法
首先主要从几篇重要论文讲述提示工程在视觉和语言上的应用：（第一部分关于介绍什么是Prompt Tuning，第二部分介绍Prompt Tuning在视觉和语言任务上的应用。）
I.	Prompt Tuning
A.	Visual prompt tuning
B.	Prompting visual-language models for efficient video understanding

## I.A. Visual prompt tuning
当前的迁移学习协议根据调整范围进行分组:完全微调，面向头部和面向骨干的方法。相反，视觉提示微调（Visual prompt tuning, VPT）在输入空间中添加了额外的参数。方法对比如下图所示：

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202306041047642.png)

其中VPT方法具体方法可以分为VPT-Deep和VPT-Shallow，其主要区别在于Transformer Encoder Layer添加Visual-Prompt的层数：

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202306041048690.png)

使用表达式可以表示成如下所示（蓝色表示冻结的参数，橙色表示需要微调的参数）：

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202306041049298.png)

VPT方法只在输入空间中引入少量特定于任务的可学习参数，而在下游训练期间冻结整个预训练的Transformer主干。在实践中，这些附加参数被简单地添加到每个transformer层的输入序列中，并在微调期间与线性头部一起学习。

## I.B. Prompting visual-language models for efficient video understanding
在视频理解任务中，本方法通过优化任务特定的提示向量和时间转换器，我们有效地使CLIP适应各种视频理解任务: action recognition, text-video retrieval, and action localisation, across closed-set, few-shot, and zero-shot scenarios.

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202306041050635.png)

在此方法（如上图所示）学习提示的模式适应，在训练时，CLIP的图像和文本编码器都保持冻结状态，梯度将流经文本编码器，只更新提示向量。 最终，这些可学习的向量最终构建文本编码器可以理解的“虚拟”提示模板，并生成所需的分类器或查询嵌入。通过这个方式可以将多个任务共享一个共享的参数权重，且使用了预训练的CLIP模型，减少训练难度。举例多任务共享权重：
(a) Action Recognition 考虑将视频剪辑或片段分类为动作类别之一。

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202306041050256.png)

其中提示向量{𝑎_}是所有操作类别共享的，因此它们只是特定于任务的。
(b) Action Localisation 考虑在未修剪的长视频中定位和分类动作。
两阶段范式: class-agnostic proposal detection和proposal classification（参考上一个图中的Action Localisation）。为了proposal classification，此方法采用了与动作识Action Recognition别相同的实现细节。这也表明了Promts使得模型通用的一个原因就是可以将任务拆分成多个子任务，其中部分子任务共享一个共同的模型参数。
(c) Text-Video Retrieval 考虑联合学习将视频及其相应的文本描述配对的视觉和文本嵌入。在这个任务中的跨模态检索框架，与动作识别Action Recognition和动作定位Action Localisation任务共享模型参数。想比于动作识别任务，此任务可以理解为微细粒度分类任务，而动作识别Action Recognition可以理解为此任务的一个子任务。
由于分类和检索都可以使用一个框架，使用从文本生成的分类器或查询嵌入来处理，无论是类别名称还是自由形式的描述，所有任务都可以利用一个共享的主干，但却可以实现竞争性能。适应新任务只需要优化几个提示向量，促进了少数镜头问题，也因此可以更好地利用丰富的训练数据，并进一步泛化超越闭集类别。

其次Prompt Engineering在视觉和语言任务上的应用（按照下面大纲进行说明）：
II.	Segment Anything ++
A.	Segment anything
B.	Track anything: Segment anything meets videos
C.	Caption Anything: Interactive Image Description with Diverse Multimodal Controls
## II.A. Segment anything
首先关于什么是Segment anything，区别于语义分割和实例分割，它分割的物体更加多元，的更加广泛，包括实力分割目标的部分（例如，剪刀的剪刀把和剪刀头）。下面是Segment anything中的300个masks以上分割结果图：

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202306041052650.png)

本文提出了一种新的图像分割任务、模型和数据集，如下图所示。该模型使用提示工程进行设计和训练，因此它可以将zero-shot到新的图像分布和任务上。

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202306041052376.png)

关于上图中(b) SAM具体结构如下图所示：

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202306041053202.png)

此方法使用一个MAE预训练的视觉变压器(ViT)最低限度地适应处理高分辨率输入
用位置编码对点和框进行学习嵌入求和; 使用CLIP现成的文本编码器的自由格式文本;蒙版嵌入使用卷积和求和元素与图像嵌入; 利用焦损和色块损耗的线性组合进行掩模预测。
此任务还通过设计一个子任务解决了分割中的歧义问题：对于一个输出，如果给出一个模糊的提示，该模型将平均多个有效掩码。即通过一个提示可以输出多个有效的分割结果，选取得分较高的掩码进行输出。如下图所示：

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202306041054846.png)

本模型在多个下游子任务上可以表现出较好的效果Zero-Shot Edge Detection、Zero-Shot Object Proposals，Zero-Shot Instance Segmentation，Zero-Shot Text-to-Mask。
## II.B. Track anything: Segment anything meets videos
考虑到Segment anything强大的图像分割能力和与不同提示的高交互性，但是它在视频的一致分割方面表现不佳。因此提出了Segment anything在视频分割上的拓展——Track anything，如下图所示：

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202306041054547.png)

TAM分成四个步骤：
Step 1: Initialization with SAM.
Step 2: Tracking with XMem.
Step 3: Reﬁnement with SAM.
Step 4: Correction with human participation.
SAM仅在图像分割方面表现出优越的性能，而不能处理复杂的视频分割。XMem的缺点也很明显:(1)作为半监督VOS模型，需要精确的掩码进行初始化;(2)对于长视频，XMem很难从跟踪或分割失败中恢复。目前的交互式VOS方法需要多轮来改进结果，这阻碍了它们在实际应用中的效率。
## II.C. Caption Anything: Interactive Image Description with Diverse Multimodal Controls
最先进的方法是在带注释的输入控件和输出标题对上进行训练的。然而，这种标注良好的多模态数据的稀缺性在很大程度上限制了它们在交互式人工智能系统中的可用性和可扩展性。可控图像描述(CIC)是一个很有前途的研究方向，它使语言输出与用户意图保持一致。但是现有的CIC模型通常依赖于人工注释(图像、文本、控制信号)元组的训练。数据集的有限规模限制了这些模型理解控制信号的能力; 这些模型只支持预定义的单个或多个控制信号，这限制了它们组合不同控制和引入可控制性新维度的灵活性。
为了解决上述问题，通过引入Segment Anything，使得CIC模型可以实现多种与用户交互的任务：以目标为中心的对话、多种视觉控制的文本描述等，如下图所示：

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202306041056970.png)

相比之前的文本描述方法，此方法使用了SAM作为视觉提示模版的输出模型，同时使用了LLM模型作为文本提示模版的生成模型，如下图所示：

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202306041056591.png)

具体CAT模型如下所示：

![|inline](https://raw.githubusercontent.com/kinshingpoon/images/main/blog-imgs/202306041057069.png)

此模型通过引入了SAM和LLM分别作为视觉和语言提示模版生成模型，扩展了文本生成模型，使其更加通用和具有更人性化的价值。

# 三、讨论
通用人工智能人工智能发展的一个阶段，目前我们正处于朝着通用人工智能的方向迈进，其中当前提示工程为通用人工智能提供了一个源动力，其逐渐在计算机视觉、自然语言以及多模态学习中发挥着中要作用。关于Prompt tuning在未来的发展趋势，可能未来在以下几个方面有着较大的发展潜力：（以下chatGPT生成内容）
1. 自动Prompt tuning：目前，Prompt tuning中大量的操作需要人工参与，这使得Prompt tuning的应用范围受到了较大的限制。因此，自动Prompt tuning是一个非常有前途的发展方向。
2. 非监督学习的Prompt tuning：监督学习的Prompt tuning需要使用大量有标注的数据，这会增加数据的成本和难度。因此，非监督学习的Prompt tuning是一个很有吸引力的选项。
3. 更加可扩展的Prompt tuning方法：目前的Prompt tuning方法大多是基于输入序列的修改，这限制了Prompt tuning的扩展性。面向特定任务和领域的Prompt tuning模型不足以适应普遍性的Prompt tuning需求，因此更加通用的和可扩展的Prompt tuning方法是值得研究的方向。
为了提高Prompt tuning的性能和效率，以下是一些可以采用的方案：（以下chatGPT生成内容）
1. 多样性Prompt design：提高Prompt diversity和灵活性，增加Prompt样本的多样性，从而更充分地利用模型的潜力，提高模型性能。
2. 融合外部知识：通过加入外部知识，如知识图谱、领域专家知识等，来指导模型生成更准确的Prompt，提高Prompt tuning的性能。
3. 生成式Prompt tuning方法：生成式Prompt tuning方法可以使用概率分布生成Prompt序列，这种生成式方法具有更高的自适应性和灵活性。
4. 结合自动调参：结合自动调参技术，可以通过优化Prompt tuning的超参数来提高模型的性能。这可以减少手动调整的成本，提高Prompt tuning的效率。


相关内容可以参考slides：https://kinshingpoon.github.io/Presentations/Prompt-Engineering.pdf

# 四、参考文献
[1] Ju, Chen, et al. "Prompting visual-language models for efficient video understanding." Computer Vision–ECCV 2022: 17th European Conference, Tel Aviv, Israel, October 23–27, 2022, Proceedings, Part XXXV. Cham: Springer Nature Switzerland, 2022.

[2] Jia, Menglin, et al. "Visual prompt tuning." Computer Vision–ECCV 2022: 17th European Conference, Tel Aviv, Israel, October 23–27, 2022, Proceedings, Part XXXIII. Cham: Springer Nature Switzerland, 2022.

[3] Kirillov, Alexander, et al. "Segment anything." arXiv preprint arXiv:2304.02643 (2023).

[4] Yang, Jinyu, et al. "Track anything: Segment anything meets videos." arXiv preprint arXiv:2304.11968 (2023).

[5] Wang, Teng, et al. "Caption Anything: Interactive Image Description with Diverse Multimodal Controls." arXiv preprint arXiv:2305.02677 (2023).
