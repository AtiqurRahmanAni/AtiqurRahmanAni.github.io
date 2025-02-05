import austLogo from "@/public/austlogo.png";
import pioneerLogo from "@/public/pioneerlogo.png";
import btriLogo from "@/public/btrilogo.png";
import collegeLogo from "@/public/clglogo.png";
import seuLogo from "@/public/seulogo.png";
import fklogo from "@/public/fklogo.jpg";

import {
  faGithub,
  faGoogleScholar,
  faLinkedin,
  faOrcid,
  faResearchgate,
  faStackOverflow,
  faSteam,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faGraduationCap,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

export const navItems = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "Education", href: "/education" },
  { name: "Publications", href: "/publications" },
  { name: "Honours & Awards", href: "/honours-and-awards" },
  { name: "Projects", href: "/projects" },
  { name: "CV", href: "/cv" },
];

export const connectItems = [
  { name: "Dhaka, Bangladesh", link: "#", icon: faLocationArrow },
  { name: "Email", link: "mailto:ani.atikur99@gmail.com", icon: faEnvelope },
  {
    name: "Google Scholar",
    link: "https://scholar.google.com/citations?user=Z6zb-DMAAAAJ&hl=en",
    icon: faGoogleScholar,
  },
  {
    name: "ResearchGate",
    link: "https://www.researchgate.net/profile/Md-Atiqur-Rahman-14",
    icon: faResearchgate,
  },
  {
    name: "Semantic Scholar",
    link: "https://www.semanticscholar.org/author/Md.-Atiqur-Rahman/2197669866",
    icon: faGraduationCap,
  },
  {
    name: "ORCID",
    link: "https://orcid.org/0009-0006-4054-3183",
    icon: faOrcid,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/atiqur-rahman-06b0a41bb/",
    icon: faLinkedin,
  },
  {
    name: "Github",
    link: "https://github.com/AtiqurRahmanAni",
    icon: faGithub,
  },
  {
    name: "Steam",
    link: "https://steamcommunity.com/id/atiqur99",
    icon: faSteam,
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@codingwitharduino7558",
    icon: faYoutube,
  },
  {
    name: "Stack Overflow",
    link: "https://stackoverflow.com/users/11562384/atikur-rahman",
    icon: faStackOverflow,
  },
];

export const experienceItems = [
  {
    position: "Junior Python Developer",
    department: "",
    organization: "filerskeepers",
    organizationSite: "https://filerskeepers.co",
    duration: "Duration: February 2025 - Present",
    organizationLogo: fklogo,
  },
  {
    position: "Part-Time Lecturer",
    department: "Department of Computer Science and Engineering",
    organization: "Ahsanullah University of Science and Technology",
    organizationSite: "https://aust.edu",
    duration: "Duration: April 2024 - Present",
    organizationLogo: austLogo,
  },
  {
    position: "Part-Time Lecturer",
    department: "Department of Computer Science and Engineering",
    organization: "Southeast University",
    organizationSite: "https://new.seu.edu.bd",
    duration: "Duration: August 2024 - Present",
    organizationLogo: seuLogo,
  },
  {
    position: "Former Junior Software Engineer",
    department: "Tech Team",
    organization: "Pioneer Alpha Ltd.",
    organizationSite: "https://pioneeralpha.com/",
    duration: "Duration: May 2023 - Dec 2023",
    organizationLogo: pioneerLogo,
  },
];

export const educationItems = [
  {
    institution: "Ahsanullah University of Science and Technology",
    institutionLink: "https://aust.edu/",
    institutionLogo: austLogo,
    degree: "Bachelor of Science (B.Sc.)",
    major: "Computer Science and Engineering",
    duration: "Duration: 2019 - 2023",
    result: (
      <>
        CGPA: <span className="font-semibold">3.841/4.00</span> scale (Ranked
        <span className="font-semibold">
          4<sup>th</sup>
        </span>
        )
      </>
    ),
    certificate:
      "https://drive.google.com/file/d/15mMnj5v70ZTMtR7QXnukujfCN33hLdRQ/view",
    transcript:
      "https://drive.google.com/file/d/16L-TaIGpjcJ709As6phSNmAeDL3bDIIz/view",
  },
  {
    institution: "Govt. Tolaram College",
    institutionLink: "http://www.nubd.info/college/college.php?code=5601",
    institutionLogo: collegeLogo,
    degree: "Higher Secondary Certificate (HSC)",
    major: "Science",
    duration: "Duration: 2016 - 2018",
    result: (
      <>
        GPA: <span className="font-semibold">4.75/5.00</span> scale
      </>
    ),
    certificate:
      "https://drive.google.com/file/d/1Bs1RXLpvfW7wigqE1XcViAlYQAXctPq6/view",
    transcript: null,
  },
  {
    institution: "Bangladesh Tea Research Institute High School",
    institutionLogo: btriLogo,
    institutionLink: "https://www.btrihs.edu.bd/",
    degree: "Secondary School Certificate (SSC)",
    major: "Science",
    duration: "Duration: 2014 - 2016",
    result: (
      <>
        GPA: <span className="font-semibold">5.00/5.00</span> scale
      </>
    ),
    certificate:
      "https://drive.google.com/file/d/1Z-tfcBCqJJEIJF5ORqA2FccrX5bDr9VR/view",
    transcript: null,
  },
];

export const honours = [
  {
    title: (
      <>
        <span style={{ color: "#1FAB89", fontWeight: 600 }}>
          Dean’s List of Honor (Ranked 4<sup>th</sup>)
        </span>
        , Ahsanullah University of Science and Technology, 2023
      </>
    ),
    certificate: null,
  },
  {
    title:
      "Tuition Fee Waiver for Spring-2022 Semester, Ahsanullah University of Science and Technology",
    certificate: null,
  },
  {
    title: "Best Paper Award at IEEE CCWC, 2023",
    certificate:
      "https://drive.google.com/file/d/19b9uqVvAvdnwi8eUv9zyhedf3MNtcTZz/view",
  },
  {
    title: "1st Winner of TechshopBD Project Competition, 2022 ",
    certificate:
      "https://drive.google.com/file/d/1k3b8AuIczEPnv6p9-dqnxpwOqA955ka0/view",
  },
  {
    title: "On Campus Winner of Hult Prize at AUST",
    certificate:
      "https://drive.google.com/file/d/1nGhQuWgeAcdLz7tfeTe1VQrjnmsxWYov/view",
  },
  {
    title: "Winner of Building Standalone Applications using MATLAB",
    certificate:
      "https://drive.google.com/file/d/1rXVJTt6tCaeGwfaaoVJRq8GpL8r8v6ph/view",
  },
];

export const courseCompletedItems = [
  {
    title: "Python Beginner Course, Coursera",
    certificate:
      "https://drive.google.com/file/d/1jPhY4_ULVy-x_Fyzkvl3rZz2sFqlWmUg/view",
  },
  {
    title:
      "Arduino Fundamentals certification on Electronics and Physical Computing, Arduino",
    certificate:
      "https://drive.google.com/file/d/13r9n7dEPSAgpcZ90mtKTd43Gc_R-LQeN/view",
  },
];

export const projectItems = [
  {
    title: "ClipFinder",
    description:
      "An AI-based application designed to separate video clips based on reference faces",
    gitLink: "https://github.com/AtiqurRahmanAni/clip-finder.git",
    demoLink: "https://www.youtube.com/watch?v=cDSp6RYn1lY",
    embedLink: "https://www.youtube.com/embed/cDSp6RYn1lY?si=oWqvY9XB77C7ZDTK",
  },
  {
    title: "Speech to Text",
    description:
      "An audio-to-text generator with timestamp utilizing SOTA Whisper model from OpenAI",
    gitLink: "https://github.com/AtiqurRahmanAni/audio-transcribe.git",
    demoLink: "https://youtu.be/JMygNyHvT4E?si=wQrG7CCYu0EdhgEh",
    embedLink: "https://www.youtube.com/embed/JMygNyHvT4E?si=wQrG7CCYu0EdhgEh",
  },
  {
    title: "Digits Recognition",
    description: "A simple webapp to recognize handwritten digits from 0 to 9",
    gitLink: "https://github.com/AtiqurRahmanAni/handwritten_digits_cnn.git",
    demoLink: "https://www.youtube.com/watch?v=FFNXYUJcOMA",
    embedLink: "https://www.youtube.com/embed/FFNXYUJcOMA?si=0TCC-cF61xv0hxZU",
  },
  {
    title: "Connectly",
    description:
      "A messenger like webapp where users can chat with each other in real time",
    gitLink: "https://github.com/AtiqurRahmanAni/real-time-message.git",
    demoLink: "https://www.youtube.com/watch?v=doNflwl3nys",
    embedLink: "https://www.youtube.com/embed/doNflwl3nys?si=ce07S6EbWgEl9qtd",
  },
  {
    title: "Robo-Waiter",
    description:
      "A robot waiter which is capable of delivering food to the customer autonomously",
    gitLink: "https://github.com/AtiqurRahmanAni/Robo-Waiter",
    demoLink: "https://www.youtube.com/watch?v=fkcC4ygjQmU",
    embedLink: "https://www.youtube.com/embed/fkcC4ygjQmU?si=ZAyq3Pba_lxZJnfJ",
  },
  {
    title: "JobSeeker Web",
    description: "A medium between freelancers and hirers in Bangladesh",
    gitLink: "https://github.com/TeamAugmentors/JobseekerWeb",
    demoLink: "https://www.youtube.com/watch?v=PN0mgFHmdnI",
    embedLink: "https://www.youtube.com/embed/PN0mgFHmdnI?si=itXYISlAwiO6GX6d",
  },
  {
    title: "JobSeeker",
    description:
      "A user friendly and easy to use android app for freelancing where people can post their requirements and freelancers can accept the job they are interested in",
    gitLink: "https://github.com/TeamAugmentors/JobSeeker",
    demoLink: "https://www.youtube.com/watch?v=YYKiquIiLZ4",
    embedLink: "https://www.youtube.com/embed/YYKiquIiLZ4?si=X6VX2raWQBma3yni",
  },
  {
    title: "Vaccine Distribution System",
    description:
      "A database management system for managing Covid-19 vaccines and tracking",
    gitLink: "https://github.com/TeamAugmentors/VaccineDistributionSystem",
    demoLink: "https://www.youtube.com/watch?v=3LjfySrpGjM",
    embedLink: "https://www.youtube.com/embed/3LjfySrpGjM?si=O5H9q9MQW03xsAI8",
  },
  {
    title: "Alice",
    description:
      "A fun to use Java application consisting of Tic Tac Toe, Hangman and Snake games",
    gitLink: "https://github.com/TeamAugmentors/SD-Project",
    demoLink: "https://www.youtube.com/watch?v=HxwJTcHEUoY",
    embedLink: "https://www.youtube.com/embed/HxwJTcHEUoY?si=kxjO4e8oXJ152wIC",
  },
  {
    title: "Arrival",
    description:
      "Arrival is a survival game taking place in the space. It is an infinite scrolling game continuously defending two objects, the player’s spacecraft and the earth",
    gitLink: "https://github.com/TeamAugmentors/Arrival.git",
    demoLink: "https://www.youtube.com/watch?v=hKz_J2qHpe4",
    embedLink: "https://www.youtube.com/embed/hKz_J2qHpe4?si=u5IWprMg_SKiRIDA",
  },
];

export const publicationItems = [
  {
    year: 2024,
    publications: [
      {
        paperTitle:
          "GliomaCNN: An Effective Lightweight CNN Model in Assessment of Classifying Brain Tumor from Magnetic Resonance Images Using Explainable AI",
        authors:
          "Md. Atiqur Rahman, Mustavi Ibne Masum, Khan Md Hasib, M. F. Mridha, Sultan Alfarhood, Mejdl Safran, Dunren Che",
        conference: "Computer Modeling in Engineering & Sciences (CMES)",
        extra: "ISSN 1526-1506",
        paperLink: "https://www.techscience.com/CMES/online/detail/20790",
        abstract:
          "Brain tumors pose a significant threat to human lives and have gained increasing attention as the tenth leading cause of global mortality. This study addresses the pressing issue of brain tumor classification using Magnetic resonance imaging (MRI). It focuses on distinguishing between Low-Grade Gliomas (LGG) and High-Grade Gliomas (HGG). LGGs are benign and typically manageable with surgical resection, while HGGs are malignant and more aggressive. The research introduces an innovative custom convolutional neural network (CNN) model, Glioma-CNN. GliomaCNN stands out as a lightweight CNN model compared to its predecessors. The research utilized the BraTS 2020 dataset for its experiments. Integrated with the gradient-boosting algorithm, GliomaCNN has achieved an impressive accuracy of 99.1569%. The model’s interpretability is ensured through SHapley Additive exPlanations (SHAP) and Gradient-weighted Class Activation Mapping (Grad-CAM++). They provide insights into critical decision-making regions for classification outcomes. Despite challenges in identifying tumors in images without visible signs, the model demonstrates remarkable performance in this critical medical application, offering a promising tool for accurate brain tumor diagnosis which paves the way for enhanced early detection and treatment of brain tumors.",
      },
    ],
  },
  {
    year: 2023,
    publications: [
      {
        paperTitle:
          "Informational Query Detection on Social Media Posts in Bengali Language Using Machine Learning And Transfer Learning Techniques.",
        authors: "Md. Atiqur Rahman, S. I. C.; and Sadid Rafan, N. J",
        conference:
          "2023 IEEE 13th Annual Computing and Communication Workshop and Conference (CCWC)",
        extra: "pages 0458–0464, 2023",
        paperLink: "https://ieeexplore.ieee.org/document/10099305/",
        abstract:
          "Informational Queries are those queries or questions where a user's goal is to get an answer or fact to a specific question or to find a relevant piece of information. In recent years, social media has become an important platform for people to seek knowledge, data, and information from others. However, the vast amount of information on social media makes it difficult to identify and prioritize posts that are specifically informational queries. This paper presents machine learning and transfer learning methods for detecting informational queries on social media in the Bengali language using natural language processing and machine learning techniques. The approach involves analyzing the text of posts to identify keywords and phrases commonly used in informational queries and using this information to train machine learning classifiers, including transfer learning models. The method was evaluated on a dataset of real-world Bengali social media posts and was effective in accurately identifying posts that are informational queries with high precision and recall. This work aims to assist organizations and individuals in providing support to individuals seeking information, data, and knowledge on social media, particularly in low-resource languages.",
      },
      {
        paperTitle:
          "Evaluating the Reliability of CNN Models on Classifying Traffic and Road Signs using LIME.",
        authors:
          "Md. Atiqur Rahman, A. S. T.; Sanjid Islam, F. P.; and G.M. Shahariar, M. T. R. S.",
        conference: "arXiv preprint arXiv:2309.05747",
        extra: "2023",
        paperLink: "https://arxiv.org/abs/2309.05747",
        abstract:
          "The objective of this investigation is to evaluate and contrast the effectiveness of four state-of-the-art pre-trained models, ResNet-34, VGG-19, DenseNet-121, and Inception V3, in classifying traffic and road signs with the utilization of the GTSRB public dataset. The study focuses on evaluating the accuracy of these models' predictions as well as their ability to employ appropriate features for image categorization. To gain insights into the strengths and limitations of the model's predictions, the study employs the local interpretable model-agnostic explanations (LIME) framework. The findings of this experiment indicate that LIME is a crucial tool for improving the interpretability and dependability of machine learning models for image identification, regardless of the models achieving an f1 score of 0.99 on classifying traffic and road signs. The conclusion of this study has important ramifications for how these models are used in practice, as it is crucial to ensure that model predictions are founded on the pertinent image features.",
      },
      {
        paperTitle:
          "Bengali News Abstractive Summarization: T5 Transformer and Hybrid Approach.",
        authors:
          "Hasib, K. M.; Rahman, M. A.; Masum, M. I.; De Boer, F.; Azam, S.; and Karim, A.",
        conference:
          "2023 International Conference on Digital Image Computing: Techniques and Applications (DICTA)",
        extra: "pages 539–545, 2023. IEEE",
        paperLink: "https://ieeexplore.ieee.org/abstract/document/10410939",
        abstract:
          "In today’s fast-paced world, everyone wants things to happen quickly. Thanks to the internet, news spreads super fast. But not all news is important. News summarization helps by giving a short version of each news story, so readers can easily figure out what type of news they want to read. There are two main types of summarization: Abstractive Text Summarization and Extractive Text Summarization. The process of abstractive text summarization is much more complex than that of extractive text summarization. This study proposes a model for generating extractive summaries, which are then utilized as input to generate abstractive summaries. The model uses the Bengali Text Summarization (BenSumm) model for extractive summarization and the Bangla Text-to-Text Transfer Transformer (BanlaT5) for abstractive summarization. The research also compares summarization acquired straight from the BanglaT5 model with summarization obtained via the proposed model. Abstractive summarization in the Bengali language has been accomplished using the Text-to-Text Transfer Transformer(T5) in this research. Although abstractive summarization of the Bengali language has been accomplished over the years using a variety of techniques, the field of using T5 in this field has only recently been discovered, and there is still a wide range of opportunities to be explored. The study has achieved promising results.",
      },
    ],
  },
  {
    year: 2022,
    publications: [
      {
        paperTitle:
          "LFR Waiter: Arduino Based Android Application Controlled Waiter Robot.",
        authors:
          "Hasib, K. M.; Rahman, M. A.; Tahsin, M.; Karim, A.; Azam, S.; and DeBoer, F.",
        conference: "TENCON 2022-2022 IEEE Region 10 Conference (TENCON)",
        extra: "pages 1–6, 2022. IEEE",
        paperLink: "https://ieeexplore.ieee.org/document/9977936",
        abstract:
          "One of the most pressing challenges facing restaurants since the COVID-19 outbreak began is personnel. A staffing scarcity across the business has resulted in a slew of issues, including significantly longer wait times and irritated clients. A robot waiter may make a huge impact in a restaurant in this situation. This research led to the formation of a low-cost Arduino-based Android application control Robot that can work as a restaurant waiter. The proposed model can follow a path, avoid obstacles, serve meals to a specific consumer, and return to the kitchen on its own. To precisely follow the line, the PID algorithm is utilized. To detect potential obstructions, a sonar sensor is used. On an LCD, messages and warnings are displayed. An Android app that allows the chief to select a particular table for serving meals. For convenience, the robot's current state is displayed in the application. Our testing results show that the robot performs satisfactorily over 90% of the time. It should be emphasized that the offered model is adaptable to any restaurant.",
      },
    ],
  },
];

export const languageCertifications = [
  {
    title: "International English Language Testing System",
    certificate:
      "https://drive.google.com/file/d/12sUepbJNANTNCS3QheC7l3ZC09j5oEUP/view?usp=drive_link",
  },
];
