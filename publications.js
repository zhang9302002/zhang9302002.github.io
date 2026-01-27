const publications = [
    {
        image: "images/vital.png",
        title: "Thinking With Videos: Multimodal Tool-Augmented Reinforcement Learning for Long Video Reasoning",
        authors: "<strong>Haoji Zhang*</strong>, Xin Gu*, Jiawen Li, Chixiang Ma, Sule Bai, Chubin Zhang, Bowen Zhang, Zhichao Zhou, Dongliang He, Yansong Tang<sup>&dagger;</sup>",
        venue: "Preprint",
        year: 2025,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2508.04416" },
            { label: "Code", url: "https://github.com/zhang9302002/ThinkingWithVideos" },
            { label: "Data", url: "https://huggingface.co/datasets/zhang9302002/MultiTaskVideoReasoning" },
            { label: "Project Page", url: "https://zhang9302002.github.io/thinkingwithvideos-page/" },
        ],
        description: "We propose Flash-VStream, an efficient VLM with a novel memory mechanism that enables real-time understanding and querying of extremely long video streams.",
        selected: true,
        topics: ["Multimodal Reasoning", "Agentic Model", "Long Video Understanding"]
    },
    {
        image: "images/stvgo1.png",
        title: "Thinking With Bounding Boxes: Enhancing Spatio-Temporal Video Grounding via Reinforcement Fine-Tuning",
        authors: "Xin Gu*, <strong>Haoji Zhang*</strong>, Qihang Fan, Jingxuan Niu, Zhipeng Zhang, Libo Zhang, Guang Chen, Fan Chen, Longyin Wen, Sijie Zhu<sup>&dagger;</sup>",
        venue: "Preprint",
        year: 2025,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2511.21375" },
        ],
        description: "We developed STVG-o1, a new method that enables off-the-shelf multimodal large language models to achieve state-of-the-art video grounding performance by using a \"bounding-box chain-of-thought\" and reinforcement learning.",
        selected: true,
        topics: ["Multimodal Reasoning", "Agentic Model"]
    },
    {
        image: "images/vidi2_5.png",
        title: "Vidi2.5: Large Multimodal Models for Video Understanding and Creation",
        // authors: "Celong Liu, Chia-Wen Kuo, Chuang Huang, Dawei Du, Fan Chen, Guang Chen, <strong>Haoji Zhang</strong>, Haojun Zhao, Lingxi Zhang, Lu Guo, Lusha Li, Longyin Wen<sup>&dagger;</sup>, Qihang Fan, Qingyu Chen, Rachel Deng, Sijie Zhu, Stuart Siew, Tong Jin, Weiyan Tao, Wen Zhong, Xiaohui Shen<sup>&dagger;</sup>, Xin Gu, Zhenfang Chen, Zuhua Lin (Alphabetical)",
        authors: "<strong>Haoji Zhang*</strong>, Chia-Wen Kuo*, Dawei Du*, Fan Chen*, Guang Chen*, Sijie Zhu*, Xin Gu*, Zhenfang Chen*, Longyin Wen<sup>&dagger;</sup>, Xiaohui Shen<sup>&dagger;</sup>, et al.",
        venue: "Technical Report",
        year: 2025,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2511.19529" },
            { label: "Code", url: "https://github.com/bytedance/vidi" },
            { label: "Model", url: "https://huggingface.co/bytedance-research/Vidi1.5-9B" },
            { label: "Project Page", url: "https://bytedance.github.io/vidi-website/" },
        ],
        description: "Vidi2 delivers fine-grained spatio‑temporal grounding and improved temporal retrieval for long videos, with new benchmarks showing strong performance versus leading proprietary models.",
        selected: true,
        topics: ["Long Video Understanding"]
    },
    {
        image: "images/flash.jpg",
        title: "Flash-VStream: Efficient Real-Time Understanding for Long Video Streams",
        authors: "<strong>Haoji Zhang*</strong>, Yiqin Wang*, Yansong Tang<sup>&dagger;</sup>, Yong Liu, Jiashi Feng, Xiaojie Jin<sup>&dagger;</sup>",
        venue: "IEEE/CVF International Conference on Computer Vision (<strong style=\"color:red\">ICCV</strong>)",
        year: 2025,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2506.23825" },
            { label: "Paper", url: "https://openaccess.thecvf.com/content/ICCV2025/html/Zhang_Flash-VStream_Efficient_Real-Time_Understanding_for_Long_Video_Streams_ICCV_2025_paper.html" },
            { label: "Code", url: "https://github.com/IVGSZ/Flash-VStream/" },
            { label: "Project Page", url: "https://zhang9302002.github.io/vstream-iccv-page/" }
        ],
        description: "We propose Flash-VStream, an efficient VLM with a novel memory mechanism that enables real-time understanding and querying of extremely long video streams.",
        selected: true,
        topics: ["Long Video Understanding", "Efficient Deep Learning"]
    },
    {
        image: "images/ponder.png",
        title: "Ponder & Press: Advancing Visual GUI Agent towards General Computer Control",
        authors: "Yiqin Wang*, <strong>Haoji Zhang*</strong>, Jingqi Tian, Yansong Tang<sup>&dagger;</sup>",
        venue: "Findings of the Association for Computational Linguistics (<strong style=\"color:red\">ACL</strong>)",
        year: 2025,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2412.01268" },
            { label: "Paper", url: "https://aclanthology.org/2025.findings-acl.76/" },
            { label: "Code", url: "https://invinciblewyq.github.io/ponder-press-page/" },
            { label: "Project Page", url: "https://invinciblewyq.github.io/ponder-press-page/" }
        ],
        description: "We propose Ponder & Press, a divide-and-conquer GUI agent framework that only relies on visual input to mimic human-like interaction with GUIs.",
        selected: true,
        topics: ["Agentic Model"]
    },
    {
        image: "images/adafocus.jpg",
        title: "Uni-AdaFocus: Spatial-Temporal Dynamic Computation for Video Recognition",
        authors: "Yulin Wang*, <strong>Haoji Zhang*</strong>, Yang Yue, Shiji Song, Chao Deng, Junlan Feng, Gao Huang<sup>&dagger;</sup>",
        venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence (<strong style=\"color:red\">TPAMI</strong>)",
        year: 2025,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2412.11228" },
            { label: "Paper", url: "https://ieeexplore.ieee.org/abstract/document/10787270" },
            { label: "Code", url: "https://github.com/LeapLabTHU/Uni-AdaFocus" }
        ],
        description: "We explore the phenomenon of spatial/temporal/sample-wise redundancy and propose Uni-AdaFocus, an efficient end-to-end video recognition framework.",
        selected: true,
        topics: ["Efficient Deep Learning"]
    },
    {
        image: "images/univg.jpg",
        title: "UniVG-R1: Reasoning Guided Universal Visual Grounding with Reinforcement Learning",
        authors: "Sule Bai, Mingxing Li, Yong Liu, Jing Tang, <strong>Haoji Zhang</strong>, Lei Sun, Xiangxiang Chu, Yansong Tang<sup>&dagger;</sup>",
        venue: "Preprint",
        year: 2025,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2505.14231" },
            { label: "Code", url: "https://github.com/AMAP-ML/UniVG-R1" },
            { label: "Project Page", url: "https://amap-ml.github.io/UniVG-R1-page/" }
        ],
        description: "We propose UniVG-R1, a reasoning guided MLLM for universal visual grounding.",
        selected: false,
        topics: ["Multimodal Reasoning"]
    },
    {
        image: "images/scclip.png",
        title: "Self-Calibrated CLIP for Training-Free Open-Vocabulary Segmentation",
        authors: "Sule Bai*, Yong Liu*, Yifei Han, <strong>Haoji Zhang</strong>, Yansong Tang<sup>&dagger;</sup>",
        venue: "IEEE Transactions on Image Processing (<strong style=\"color:red\">TIP</strong>)",
        year: 2025,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2411.15869" },
            { label: "Paper", url: "https://ieeexplore.ieee.org/document/11291123" },
            { label: "Code", url: "https://github.com/SuleBai/SC-CLIP" }
        ],
        description: "We propose SC-CLIP, a training-free open-vocabulary segmentation framework that achieves competitive performance on various segmentation tasks.",
        selected: true,
        topics: ["Efficient Deep Learning"]
    },
    {
        image: "images/flash_vstream.png",
        title: "Flash-VStream: Memory-Based Real-Time Understanding for Long Video Streams",
        authors: "<strong>Haoji Zhang*</strong>, Yiqin Wang*, Yansong Tang<sup>&dagger;</sup>, Yong Liu, Jiashi Feng, Jifeng Dai, Xiaojie Jin<sup>&dagger;</sup>",
        venue: "1st on LOVEU@<strong style=\"color:red\">CVPR'24</strong>: Long-term VQA",
        year: 2024,
        links: [
            { label: "Tech Report", url: "https://arxiv.org/abs/2406.08085" },
            { label: "Code", url: "https://github.com/IVGSZ/Flash-VStream" },
            { label: "Project Page", url: "https://invinciblewyq.github.io/vstream-page/" },
            { label: "Award", url: "images/loveu1st.png" }
        ],
        description: "We proposed Flash-VStream, a video-language model that simulates the memory mechanism of human, able to process long video streams in real-time.",
        selected: false,
        topics: ["Long Video Understanding", "Efficient Deep Learning"]
    },
    {
        image: "images/preim3d.jpg",
        title: "PREIM3D: 3D Consistent Precise Image Attribute Editing from a Single Image",
        authors: "Jianhui Li, Jianmin Li<sup>&dagger;</sup>, <strong>Haoji Zhang</strong>, Shilong Liu, Zhengyi Wang, Zihao Xiao, Kaiwen Zheng, Jun Zhu<sup>&dagger;</sup>",
        venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (<strong style=\"color:red\">CVPR</strong>)",
        year: 2023,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2304.10263" },
            { label: "Code", url: "https://github.com/mybabyyh/Preim3D" },
            { label: "Project Page", url: "https://mybabyyh.github.io/Preim3D/" }
        ],
        description: "We propose PREIM3D, a novel framework for 3D-aware image attribute editing that achieves better 3D consistency and precision at large camera poses.",
        selected: true,
        topics: []
    }
];
