import austLogo from "@/public/austlogo.png";
import pioneerLogo from "@/public/pioneerlogo.png";
import btriLogo from "@/public/btrilogo.png";
import collegeLogo from "@/public/clglogo.png";
import {
  faGithub,
  faGoogleScholar,
  faLinkedin,
  faOrcid,
  faResearchgate,
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
    name: "LinkdIn",
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
];

export const experienceItems = [
  {
    position: "Part-Time Lecturer",
    department: "Department of Computer Science and Engineering",
    organization: "Ahsanullah University of Science and Technology",
    organizationSite: "https://aust.edu/",
    duration: "Duration: April 2024 - Present",
    organizationLogo: austLogo,
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
    gitLink: null,
    demoLink: "https://www.youtube.com/watch?v=hKz_J2qHpe4",
    embedLink: "https://www.youtube.com/embed/hKz_J2qHpe4?si=u5IWprMg_SKiRIDA",
  },
];

export const publicationItems = [
  {
    year: 2023,
    publications: [
      <>
        <strong>
          Informational Query Detection on Social Media Posts in Bengali
          Language Using Machine Learning And Transfer Learning Techniques.
        </strong>{" "}
        <span>Md. Atiqur Rahman, S. I. C.; and Sadid Rafan, N. J.</span>{" "}
        <span>
          In{" "}
          <span className="italic">
            2023 IEEE 13th Annual Computing and Communication Workshop and
            Conference (CCWC)
          </span>
          , pages 0458–0464, 2023.
        </span>
      </>,
      <>
        <strong>
          Evaluating the Reliability of CNN Models on Classifying Traffic and
          Road Signs using LIME.
        </strong>{" "}
        <span>
          Md. Atiqur Rahman, A. S. T.; Sanjid Islam, F. P.; and G.M. Shahariar,
          M. T. R. S.
        </span>{" "}
        <span>
          In <span className="italic">arXiv preprint arXiv:2309.05747</span>,
          2023.
        </span>
      </>,
      <>
        <strong>
          Bengali News Abstractive Summarization: T5 Transformer and Hybrid
          Approach.
        </strong>{" "}
        <span>
          Hasib, K. M.; Rahman, M. A.; Masum, M. I.; De Boer, F.; Azam, S.; and
          Karim, A.
        </span>{" "}
        <span>
          In{" "}
          <span className="italic">
            2023 International Conference on Digital Image Computing: Techniques
            and Applications (DICTA)
          </span>
          , pages 539–545, 2023. IEEE
        </span>
      </>,
    ],
  },
  {
    year: 2022,
    publications: [
      <>
        <strong>
          LFR Waiter: Arduino Based Android Application Controlled Waiter Robot.
        </strong>{" "}
        <span>
          Hasib, K. M.; Rahman, M. A.; Tahsin, M.; Karim, A.; Azam, S.; and
          DeBoer, F.
        </span>{" "}
        <span>
          In{" "}
          <span className="italic">
            TENCON 2022-2022 IEEE Region 10 Conference (TENCON)
          </span>
          , pages 1–6, 2022. IEEE.
        </span>
      </>,
    ],
  },
];
