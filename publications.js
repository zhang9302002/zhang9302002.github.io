const publications = [
    {
        image: "images/vital.png",
        title: "Thinking With Videos: Multimodal Tool-Augmented Reinforcement Learning for Long Video Reasoning",
        authors: "<strong>Haoji Zhang</strong>*, Xin Gu*, Jiawen Li, Chixiang Ma, Sule Bai, Chubin Zhang, Bowen Zhang, Zhichao Zhou, Dongliang He, Yansong Tang<sup>&dagger;</sup>",
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
        image: "images/flash.jpg",
        title: "Flash-VStream: Efficient Real-Time Understanding for Long Video Streams",
        authors: "<strong>Haoji Zhang</strong>*, Yiqin Wang*, Yansong Tang<sup>&dagger;</sup>, Yong Liu, Jiashi Feng, Xiaojie Jin<sup>&dagger;</sup>",
        venue: "IEEE/CVF International Conference on Computer Vision (<strong style=\"color:red\">ICCV</strong>)",
        year: 2025,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2506.23825" },
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
        authors: "Yiqin Wang*, <strong>Haoji Zhang</strong>*, Jingqi Tian, Yansong Tang<sup>&dagger;</sup>",
        venue: "Findings of the Association for Computational Linguistics (<strong style=\"color:red\">ACL</strong>)",
        year: 2025,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2412.01268" },
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
        authors: "Yulin Wang*, <strong>Haoji Zhang</strong>*, Yang Yue, Shiji Song, Chao Deng, Junlan Feng, Gao Huang<sup>&dagger;</sup>",
        venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence (<strong style=\"color:red\">TPAMI</strong>)",
        year: 2025,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2412.11228" },
            { label: "IEEE Paper", url: "https://ieeexplore.ieee.org/abstract/document/10787270" },
            { label: "Code", url: "https://github.com/LeapLabTHU/Uni-AdaFocus" }
        ],
        description: "We explore the phenomenon of spatial/temporal/sample-wise redundancy and propose Uni-AdaFocus, an efficient end-to-end video recognition framework.",
        selected: true,
        topics: ["Efficient Deep Learning"]
    },
    {
        image: "images/flash_vstream.png",
        title: "Flash-VStream: Memory-Based Real-Time Understanding for Long Video Streams",
        authors: "<strong>Haoji Zhang</strong>*, Yiqin Wang*, Yansong Tang<sup>&dagger;</sup>, Yong Liu, Jiashi Feng, Jifeng Dai, Xiaojie Jin<sup>&dagger;</sup>",
        venue: "Preprint, 1st place solution of LOVEU workshop@CVPR",
        year: 2024,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2406.08085" },
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
        selected: false,
        topics: []
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
        image: "images/scclip.jpg",
        title: "Self-Calibrated CLIP for Training-Free Open-Vocabulary Segmentation",
        authors: "Sule Bai*, Yong Liu*, Yifei Han, <strong>Haoji Zhang</strong>, Yansong Tang<sup>&dagger;</sup>",
        venue: "Preprint",
        year: 2024,
        links: [
            { label: "arXiv", url: "https://arxiv.org/abs/2411.15869" },
            { label: "Code", url: "https://github.com/SuleBai/SC-CLIP" }
        ],
        description: "We propose SC-CLIP, a training-free open-vocabulary segmentation framework that achieves competitive performance on various segmentation tasks.",
        selected: false,
        topics: ["Efficient Deep Learning"]
    }
];
