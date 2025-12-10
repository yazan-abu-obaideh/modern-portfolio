const numberToWord = (num: number): string => {
  const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  return words[num] || num.toString();
};

// Helper to get correct asset path for GitHub Pages and local builds
const getAssetPath = (path: string): string => {
  return `${process.env.PUBLIC_URL}${path}`;
};


export const personalInfo = {
  name: "Yazan Abu Obaideh",
  jobTitle: "End-to-End Software Engineering",
  profileImage: getAssetPath("/prof_with_bg.png"),
  summary: `
    I'm a full-stack software engineer working since 2022, with several A-Z projects and publications 
    under my belt, including collaborations with the Decode Lab at MIT. I believe in the power and importance of open source 
    and in having proper respect for one's users, their data, their attention, and their time.`,
};

export const projects = [
  {
    title: "Multiobjective Counterfactuals for Design (MCD)",
    githubUrl: "https://decode.mit.edu/projects/counterfactuals/",
    description:
      "MCD is a framework that recommends engineering design modifications that meet multiple, customizable objectives in both the feature and performance spaces",
    image: getAssetPath("/bike-bench-vid.gif"),
    imageAlt: "MCD",
  },
  {
    title: "MCD Demo Site",
    githubUrl: "https://github.com/yazan-abu-obaideh/mcd-demo",
    description:
      "A demonstration of the capabilities of the MCD framework, including design generation from tabular data and from text prompts.",
    image: getAssetPath("/mcd-demo-screenshot.png"),
    imageAlt: "MCD Demo Screenshot",
  },
  // {
  //   title: "Code Chunker",
  //   githubUrl: "https://github.com/yazan-abu-obaideh/code-chunker",
  //   description:
  //     "Code Chunker summarizes and breaks down your large code base into hierarchical chunks, primarily to provide your LLMs and coding agents with vastly improved system context.",
  //   image: "/code-chunker-logo.jpg",
  //   imageAlt: "Code Chunker logo",
  // },
  {
    title: "Lifeblood",
    githubUrl: "https://github.com/yazan-abu-obaideh/lifeblood",
    description:
      "An end-to-end system for alerting volunteers to blood bank shortages. This is done through push notifications and WhatsApp messages.",
    image: getAssetPath("/ml-pipeline.png"),
    imageAlt: "Lifeblood screenshot",
  },
  {
    title: "Foody",
    githubUrl: "https://github.com/yazan-abu-obaideh/foody",
    description:
      "Foody is an LLM-based friend that periodically checks on you, to make sure you're meeting your customized nutrition goals.",
    image: getAssetPath("/foody_burger_buddy.gif"),
    imageAlt: "Foody",
  },
  {
    title: "BikeCAD-AI",
    githubUrl: "https://github.com/yazan-abu-obaideh/BIKED-integration",
    description:
      "BikeCAD Integration is a Python web API that provides BikeCAD with endpoints for bike design evaluation and recommendation.",
    image: getAssetPath("/bikecad-ai-image.png"),
    imageAlt: "BikeCAD-AI",
  },
];

export const publications = [
  {
    title:
      "Bike-Bench: A Bicycle Design Benchmark for Generative Models with Objectives and Constraints",
    journal: "Neurips",
    abstract:
      "We introduce Bike-Bench, an engineering design benchmark for evaluating generative models on problems with multiple real-world objectives and constraints. As generative AI's reach continues to grow, evaluating its capability to understand physical laws, human guidelines, and hard constraints grows increasingly important. Engineering product design lies at the intersection of these difficult tasks, providing new challenges for AI capabilities. Bike-Bench evaluates AI models' capability to generate designs that not only resemble the dataset, but meet specific performance objectives and constraints. To do so, Bike-Bench quantifies a variety of human-centered and multiphysics performance characteristics, such as aerodynamics, ergonomics, structural mechanics, human-rated usability, and similarity to subjective text or image prompts. Supporting the benchmark are several datasets of simulation results, a dataset of 10K human-rated bicycle assessments, and a synthetically-generated dataset of 1.4M designs, each with a parametric, CAD/XML, SVG, and PNG representation. Bike-Bench is uniquely configured to evaluate tabular generative models, LLMs, design optimization, and hybrid algorithms side-by-side. Our experiments indicate that LLMs and tabular generative models fall short of optimization and optimization-augmented generative models in both validity and optimality scores, suggesting significant room for improvement. We hope Bike-Bench, a first-of-its-kind benchmark, will help catalyze progress in generative AI for constrained multi-objective engineering design problems. Code, data, and other resources are published at decode.mit.edu/projects/bikebench/.",
    logoAlt: "MIT",
    logo: getAssetPath("/MIT-Logo.png"),
    affiliation: "",
    journalUrl: "https://neurips.cc/virtual/2025/loc/san-diego/poster/121392",
    authors:
      "Lyle Regenwetter, Yazan Abu Obaideh, Fabien Chiotti, Ioanna Lykourentzou, Faez Ahmed",
  },
  {
    title:
      "MCD: A Model-Agnostic Counterfactual Search Method For Multi-Modal Design Modifications",
    journal: "Journal of Mechanical Design",
    abstract:
      "     Designers may often ask themselves how to adjust their design concepts to achieve demanding functional goals. To answer such questions, designers must often consider counterfactuals, weighing design alternatives and their projected performance. This paper introduces Multi-objective Counterfactuals for Design (MCD), a computational tool that automates and streamlines the counterfactual search process and recommends targeted design modifications that meet designers' unique requirements. MCD improves upon existing counterfactual search methods by supporting multi-objective requirements, which are crucial in design problems, and by decoupling the counterfactual search and sampling processes, thus enhancing efficiency and facilitating objective trade-off visualization. The paper showcases MCD's capabilities in complex engineering tasks using three demonstrative bicycle design challenges. In the first, MCD effectively identifies design modifications that quantifiably enhance functional performance, strengthening the bike frame and saving weight. In the second, MCD modifies parametric bike models in a cross-modal fashion to resemble subjective text prompts or reference images. In a final multidisciplinary case study, MCD tackles all the quantitative and subjective design requirements introduced in the first two problems, while simultaneously customizing a bike design to an individual rider's biomechanical attributes. By exploring hypothetical design alterations and their impact on multiple design objectives, MCD recommends effective design modifications for practitioners seeking to make targeted enhancements to their designs.",
    logoAlt: "MIT",
    logo: getAssetPath("/MIT-Logo.png"),
    affiliation: "",
    journalUrl:
      "https://asmedigitalcollection.asme.org/mechanicaldesign/article-abstract/147/2/021401/1201552/Multi-Objective-Counterfactuals-for-Design-A-Model",
    authors: "Lyle Regenwetter, Yazan Abu Obaideh, Faez Ahmed",
  },
  {
    title:
      "BIKED++: A Multimodal Dataset of 1.4 Million Bicycle Image and Parametric CAD Designs",
    journal: "Arxiv",
    abstract:
      "     This paper introduces a public dataset of 1.4 million procedurally-generated bicycle designs represented parametrically, as JSON files, and as rasterized images. The dataset is created through the use of a rendering engine which harnesses the BikeCAD software to generate vector graphics from parametric designs. This rendering engine is discussed in the paper and also released publicly alongside the dataset. Though this dataset has numerous applications, a principal motivation is the need to train cross-modal predictive models between parametric and image-based design representations. For example, we demonstrate that a predictive model can be trained to accurately estimate Contrastive Language-Image Pretraining (CLIP) embeddings from a parametric representation directly. This allows similarity relations to be established between parametric bicycle designs and text strings or reference images. Trained predictive models are also made public. The dataset joins the BIKED dataset family which includes thousands of mixed-representation human-designed bicycle models and several datasets quantifying design performance.",
    logoAlt: "MIT",
    logo: getAssetPath("/MIT-Logo.png"),
    affiliation: "",
    journalUrl: "https://arxiv.org/abs/2402.05301",
    authors:
      "Lyle Regenwetter, Yazan Abu Obaideh, Amin Heyrani Nobari, Faez Ahmed",
  },
  {
    title:
      "Counterfactuals For Design: A Model-Agnostic Method for Design Recommendations",
    journal: "IDETC-CIE",
    abstract:
      "We introduce Multi-Objective Counter/actuals for Design (MCD), a novel method for counterfactual optimization in design problems. Counterfactuals are hypothetical situations that can lead to a different decision or choice. In this paper, the authors frame the counterfactual search problem as a design recommendation tool that can help identify modifications to a design, leading to better functional performance. MCD improves upon existing counterfactual search methods by supporting multi-objective queries, which are crucial in design problems, and by decoupling the counterfactual search and sampling processes, thus enhancing efficiency and facilitating objective tradeoff visualization. The paper demonstrates MCD's core functionality using a two-dimensional test case, followed by three case studies of bicycle design that showcase MCD's effectiveness in real-world design problems. In the first case study, MCD excels at recommending modifications to query designs that can significantly enhance functional performance, such as weight savings and improvements to the structural safety factor. The second case study demonstrates that MCD can work with a pre-trained language model to suggest design changes based on a subjective text prompt effectively. Lastly, the authors task MCD with increasing a query design's similarity to a target image and text prompt while simultaneously reducing weight and improving structural performance, demonstrating MCD's performance on a complex multimodal query. Overall, MCD has the potential to provide valuable recommendations for practitioners and design automation researchers looking for answers to their “What if” questions by exploring hypothetical design modifications and their impact on multiple design objectives.",
    logoAlt: "MIT",
    logo: getAssetPath("/MIT-Logo.png"),
    affiliation: "",
    journalUrl:
      "https://asmedigitalcollection.asme.org/IDETC-CIE/proceedings-abstract/IDETC-CIE2023/87301/1170462",
    authors: "Lyle Regenwetter, Yazan Abu Obaideh, Faez Ahmed",
  },
];

export const experiences = [
  {
    logo: getAssetPath("/progressoft-logo.png"),
    logoAlt: "ProgressSoft Logo",
    position: "Full-Stack Software Engineer",
    company: "ProgressSoft | Fintech",
    duration: "June 2022 - March 2024 and April 2024 - Present",
    details: [
      "Co-developed ProgressSoft's Payments Hub, a cloud-native platform that centralizes payment management for financial institutions through local and cross-border networks.",
      "Implemented Swift messaging features for trade, treasury, and money market transactions, enabling instant payments.",
      "Implemented ISO 20022 and MT-based messaging for seamless integration with minimal disruption to existing systems.",
      "Practiced the agile methodology in a remote-first setting with daily meetings and CI/CD.",
    ],
  },
  {
    logo: getAssetPath("/logo-solid-sigasi-orange.svg"),
    logoAlt: "Sigasi Logo",
    position: "Full-Stack Software Engineer",
    company: "Sigasi | Developer Tools",
    duration: "April 2024 - March 2025",
    details: [
      "Developed and maintained an IDE for VHDL and SystemVerilog.",
      "Enhanced hardware design and verification processes with real-time analysis using Eclipse and VS Code APIs.",
      "Implemented early validation of HDL code, ensuring >90% test coverage through extensive unit and integration tests.",
      "Worked with grammar definitions, lexers, parsers, and linkers to provide rigorous static analysis, improving code reliability.",
      "Wrote performance-sensitive code that could run on computationally constrained Windows and Linux environments.",
      "Practiced the agile methodology in a remote-first setting with daily meetings and CI/CD.",
    ],
  },
];

export interface MergeRequest {
  title: string;
  prUrl: string;
  description: string;
  status: "merged" | "open" | "closed";
}

export interface Contribution {
  repoName: string;
  repoUrl: string;
  logo: string;
  logoAlt: string;
  mergeRequests: MergeRequest[];
}

export const contributions: Contribution[] = [
  {
    repoName: "PostHog",
    repoUrl: "https://github.com/PostHog/posthog",
    logo: getAssetPath("/posthog-logo.png"),
    logoAlt: "Posthog logo",
    mergeRequests: [
      {
        title: "fix: deleted cohort navigation experience",
        prUrl: "https://github.com/PostHog/posthog/pull/38753",
        description: "",
        status: "merged",
      },
      {
        title: "fix(cohorts): hide delete action section for new cohorts",
        prUrl: "https://github.com/PostHog/posthog/pull/38705",
        description: "",
        status: "merged",
      },
      {
        title: "chore: add description to .cursorrules",
        prUrl: "https://github.com/PostHog/posthog/pull/38190",
        description: "",
        status: "merged",
      },
    ],
  },
  {
    repoName: "Weaviate",
    repoUrl: "https://github.com/weaviate",
    logo: getAssetPath("/weaviate-logo.png"),
    logoAlt: "Weaviate logo",
    mergeRequests: [
      {
        title: "fix: Google module apiEndpoint argument misspelling",
        prUrl: "https://github.com/weaviate/weaviate/pull/8811",
        description: "",
        status: "merged",
      },
      {
        title: "Change {TEXT2VEC,MULTI2VEC}_PALM vectorizers to x-google",
        prUrl: "https://github.com/weaviate/weaviate-python-client/pull/1776",
        description: "",
        status: "open",
      },
      {
        title:
          "Add explicit image tag to alpine in ./Dockerfile and enable Dependabot checks for Dockerfile",
        prUrl: "https://github.com/weaviate/weaviate/pull/8726",
        description: "",
        status: "open",
      },
    ],
  },
  {
    repoName: "Supabase",
    repoUrl: "https://github.com/supabase/supabase",
    logo: getAssetPath("/supabase-logo.png"),
    logoAlt: "Supabase logo",
    mergeRequests: [
      {
        title:
          "'Create Table' Widget is visible when viewing protected schemata",
        prUrl: "https://github.com/supabase/supabase/pull/38856",
        description: "",
        status: "merged",
      },
    ],
  },
];
