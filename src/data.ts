export const personalInfo = {
  name: "Yazan Abu Obaideh",
  jobTitle: "End-to-End Software Engineering",
  profileImage: "/prof_with_bg.png",
};

export const projects = [
  {
    title: "Multiobjective Counterfactuals for Design (MCD)",
    githubUrl:
      "https://decode.mit.edu/projects/counterfactuals/",
    description:
      "MCD is a framework that recommends engineering design modifications that meet multiple, customizable objectives in both the feature and performance spaces",
    image: "/mcd-screenshot.png",
    imageAlt: "MCD",
  },

  {
    title: "MCD Demo Site",
    githubUrl: "https://github.com/yazan-abu-obaideh/mcd-demo",
    description:
      "A website demonstrating the capabilities of the MCD framework, including design generation from tabular data and from text prompts.",
    image: "/mcd-demo-screenshot.png",
    imageAlt: "MCD Demo Screenshot",
  },
  {
    title: "ML Pipeline Framework",
    githubUrl: "https://github.com/username/ml-pipeline",
    description:
      "Scalable machine learning pipeline for training and deploying models at scale",
    image: "/projects/ml-pipeline.png",
    imageAlt: "ML Pipeline Dashboard",
  },
  {
    title: "React Component Library",
    githubUrl: "https://github.com/username/react-components",
    description:
      "Accessible, customizable React components with TypeScript and Storybook",
    image: "/projects/react-lib.png",
    imageAlt: "React Components",
  },
  {
    title: "Data Streaming Platform",
    githubUrl: "https://github.com/username/stream-platform",
    description:
      "Real-time data processing platform built on Apache Kafka and Flink",
    image: "/projects/streaming.png",
    imageAlt: "Data Streaming",
  },
  {
    title: "Mobile Dev Toolkit",
    githubUrl: "https://github.com/username/mobile-toolkit",
    description:
      "Cross-platform mobile development tools and utilities for React Native",
    image: "/projects/mobile-toolkit.png",
    imageAlt: "Mobile Development",
  },
  {
    title: "GraphQL API Gateway",
    githubUrl: "https://github.com/username/graphql-gateway",
    description:
      "High-performance GraphQL gateway with caching and authentication",
    image: "/projects/graphql.png",
    imageAlt: "GraphQL Gateway",
  },
  {
    title: "Cloud Infrastructure Tools",
    githubUrl: "https://github.com/username/cloud-tools",
    description:
      "CLI tools for managing multi-cloud infrastructure with Terraform",
    image: "/projects/cloud-tools.png",
    imageAlt: "Cloud Tools",
  },
];

export const publications = [
  {
    title:
      "Bike-Bench: A Bicycle Design Benchmark for Generative Models with Objectives and Constraints",
    journal: "Neurips",
    abstract: "We introduce Bike-Bench, an engineering design benchmark for evaluating generative models on problems with multiple real-world objectives and constraints. As generative AI's reach continues to grow, evaluating its capability to understand physical laws, human guidelines, and hard constraints grows increasingly important. Engineering product design lies at the intersection of these difficult tasks, providing new challenges for AI capabilities. Bike-Bench evaluates AI models' capability to generate designs that not only resemble the dataset, but meet specific performance objectives and constraints. To do so, Bike-Bench quantifies a variety of human-centered and multiphysics performance characteristics, such as aerodynamics, ergonomics, structural mechanics, human-rated usability, and similarity to subjective text or image prompts. Supporting the benchmark are several datasets of simulation results, a dataset of 10K human-rated bicycle assessments, and a synthetically-generated dataset of 1.4M designs, each with a parametric, CAD/XML, SVG, and PNG representation. Bike-Bench is uniquely configured to evaluate tabular generative models, LLMs, design optimization, and hybrid algorithms side-by-side. Our experiments indicate that LLMs and tabular generative models fall short of optimization and optimization-augmented generative models in both validity and optimality scores, suggesting significant room for improvement. We hope Bike-Bench, a first-of-its-kind benchmark, will help catalyze progress in generative AI for constrained multi-objective engineering design problems. Code, data, and other resources are published at decode.mit.edu/projects/bikebench/.",
    logoAlt: "MIT",
    logo: "/MIT-Logo.png",
    affiliation: "",
    journalUrl: "https://neurips.cc/virtual/2025/loc/san-diego/poster/121392",
    authors:
      "Lyle Regenwetter, Yazan Abu Obaideh, Fabien Chiotti, Ioanna Lykourentzou, Faez Ahmed",
  },
  {
    title:
      "MCD: A Model-Agnostic Counterfactual Search Method For Multi-Modal Design Modifications",
    journal: "Journal of Mechanical Design",
    abstract: "     Designers may often ask themselves how to adjust their design concepts to achieve demanding functional goals. To answer such questions, designers must often consider counterfactuals, weighing design alternatives and their projected performance. This paper introduces Multi-objective Counterfactuals for Design (MCD), a computational tool that automates and streamlines the counterfactual search process and recommends targeted design modifications that meet designers' unique requirements. MCD improves upon existing counterfactual search methods by supporting multi-objective requirements, which are crucial in design problems, and by decoupling the counterfactual search and sampling processes, thus enhancing efficiency and facilitating objective trade-off visualization. The paper showcases MCD's capabilities in complex engineering tasks using three demonstrative bicycle design challenges. In the first, MCD effectively identifies design modifications that quantifiably enhance functional performance, strengthening the bike frame and saving weight. In the second, MCD modifies parametric bike models in a cross-modal fashion to resemble subjective text prompts or reference images. In a final multidisciplinary case study, MCD tackles all the quantitative and subjective design requirements introduced in the first two problems, while simultaneously customizing a bike design to an individual rider's biomechanical attributes. By exploring hypothetical design alterations and their impact on multiple design objectives, MCD recommends effective design modifications for practitioners seeking to make targeted enhancements to their designs.",
    logoAlt: "MIT",
    logo: "/MIT-Logo.png",
    affiliation: "",
    journalUrl:
      "https://asmedigitalcollection.asme.org/mechanicaldesign/article-abstract/147/2/021401/1201552/Multi-Objective-Counterfactuals-for-Design-A-Model",
    authors: "Lyle Regenwetter, Yazan Abu Obaideh, Faez Ahmed",
  },
  {
    title:
      "BIKED++: A Multimodal Dataset of 1.4 Million Bicycle Image and Parametric CAD Designs",
    journal: "Arxiv",
    abstract: "     This paper introduces a public dataset of 1.4 million procedurally-generated bicycle designs represented parametrically, as JSON files, and as rasterized images. The dataset is created through the use of a rendering engine which harnesses the BikeCAD software to generate vector graphics from parametric designs. This rendering engine is discussed in the paper and also released publicly alongside the dataset. Though this dataset has numerous applications, a principal motivation is the need to train cross-modal predictive models between parametric and image-based design representations. For example, we demonstrate that a predictive model can be trained to accurately estimate Contrastive Language-Image Pretraining (CLIP) embeddings from a parametric representation directly. This allows similarity relations to be established between parametric bicycle designs and text strings or reference images. Trained predictive models are also made public. The dataset joins the BIKED dataset family which includes thousands of mixed-representation human-designed bicycle models and several datasets quantifying design performance.",
    logoAlt: "MIT",
    logo: "/MIT-Logo.png",
    affiliation: "",
    journalUrl: "https://arxiv.org/abs/2402.05301",
    authors:
      "Lyle Regenwetter, Yazan Abu Obaideh, Amin Heyrani Nobari, Faez Ahmed",
  },
  {
    title:
      "Counterfactuals For Design: A Model-Agnostic Method for Design Recommendations",
    journal: "IDETC-CIE",
    abstract: "We introduce Multi-Objective Counter/actuals for Design (MCD), a novel method for counterfactual optimization in design problems. Counterfactuals are hypothetical situations that can lead to a different decision or choice. In this paper, the authors frame the counterfactual search problem as a design recommendation tool that can help identify modifications to a design, leading to better functional performance. MCD improves upon existing counterfactual search methods by supporting multi-objective queries, which are crucial in design problems, and by decoupling the counterfactual search and sampling processes, thus enhancing efficiency and facilitating objective tradeoff visualization. The paper demonstrates MCD's core functionality using a two-dimensional test case, followed by three case studies of bicycle design that showcase MCD's effectiveness in real-world design problems. In the first case study, MCD excels at recommending modifications to query designs that can significantly enhance functional performance, such as weight savings and improvements to the structural safety factor. The second case study demonstrates that MCD can work with a pre-trained language model to suggest design changes based on a subjective text prompt effectively. Lastly, the authors task MCD with increasing a query design's similarity to a target image and text prompt while simultaneously reducing weight and improving structural performance, demonstrating MCD's performance on a complex multimodal query. Overall, MCD has the potential to provide valuable recommendations for practitioners and design automation researchers looking for answers to their “What if” questions by exploring hypothetical design modifications and their impact on multiple design objectives.",
    logoAlt: "MIT",
    logo: "/MIT-Logo.png",
    affiliation: "",
    journalUrl: 
      "https://asmedigitalcollection.asme.org/IDETC-CIE/proceedings-abstract/IDETC-CIE2023/87301/1170462",
    authors: "Lyle Regenwetter, Yazan Abu Obaideh, Faez Ahmed",
  },
];

export const experiences = [
  {
    logo: "/progressoft-logo.png",
    logoAlt: "ProgressSoft Logo",
    position: "Full-Stack Software Engineer",
    company: "ProgressSoft | Fintech",
    duration: "June 2022 - March 2024 and April 2024 - Present",
    details: [
      "Led development of core platform features serving 1M+ users",
      "Architected microservices infrastructure reducing latency by 40%",
      "Mentored team of 5 junior engineers",
    ],
  },
  {
    logo: "/logo-solid-sigasi-orange.svg",
    logoAlt: "Sigasi Logo",
    position: "Full-Stack Software Engineer",
    company: "Sigasi | Developer Tools",
    duration: "April 2024 - March 2025",
    details: [
      "Led development of core platform features serving 1M+ users",
      "Architected microservices infrastructure reducing latency by 40%",
      "Mentored team of 5 junior engineers",
    ],
  },
];
