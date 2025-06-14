import logoImg from "./assets/logo/logo.png";
import logoBw from "./assets/logo/logo-bw.png";
import {
  FaCode,
  FaMobileAlt,
  FaEthereum,
  FaGamepad,
  FaRobot,
  FaBrain,
  FaChartLine,
  FaCloud,
  FaDatabase,
  FaLanguage,
  FaCloudUploadAlt,
  FaPalette,
  FaLink,
  FaShieldAlt,
  FaCoins,
  FaExchangeAlt,
  FaUnity,
  FaMobile,
  FaVrCardboard,
  FaUsers,
  FaServer,
  FaCogs,
  FaFileExcel,
  FaChartBar,
  FaEye,
  FaSearch,
  FaShoppingCart,
  FaMedal,
  FaSync,
  FaNetworkWired,
  FaComments,
  FaBook,
  FaHeadset,
  FaTools,
  FaTachometerAlt,
  FaLayerGroup,
  FaDesktop,
  FaUserCheck,
  FaProjectDiagram,
} from "react-icons/fa";

// app development services
import { ReactComponent as appServiceIcon1 } from "./assets/svgs/services/iOS App Development.svg";
import { ReactComponent as appServiceIcon2 } from "./assets/svgs/services/Android.svg";
import { ReactComponent as appServiceIcon3 } from "./assets/svgs/services/Flutter.svg";
import { ReactComponent as appServiceIcon4 } from "./assets/svgs/services/Hybrid App Development.svg";

// web development services
import { ReactComponent as webServiceIcon1 } from "./assets/svgs/services/E-Commerce Development.svg";
import { ReactComponent as webServiceIcon2 } from "./assets/svgs/services/Social Media Websites.svg";
import { ReactComponent as webServiceIcon3 } from "./assets/svgs/services/Web Development.svg";
import { ReactComponent as webServiceIcon4 } from "./assets/svgs/services/UIUX Design.svg";
import { lazy } from "react";
import { LuChartNetwork } from "react-icons/lu";

export { logoImg, logoBw };

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Services = lazy(() => import("./pages/Services"));
const Blogs = lazy(() => import("./pages/Blogs"));
const Industries = lazy(() => import("./pages/Industries"));

export const companyDetails = {
  phone: "919535855717",
  address:
    "CB1604 Salarpuria Greenage Bommanahalli Hosur road Bangalore 560068",
  // email: "mpranavprem@gmail.com",
  email: "techsolutions@awdinfotech.com",
  linkedin: "",
  instagram: "",
  twitter: "",
  facebook: "",
};

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/about-us",
    name: "About Us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    name: "Services",
    element: <Services />,
  },
  {
    path: "/blogs",
    name: "Blogs",
    element: <Blogs />,
  },
  {
    path: "/industries",
    name: "Industries",
    element: <Industries />,
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    element: <ContactUs />,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "Online Stores",
    icon: webServiceIcon1,
    description:
      "We create dynamic digital storefronts that enhance user experience, simplify transactions, and boost your online sales effortlessly.",
  },
  {
    id: 2,
    title: "Community Platforms",
    icon: webServiceIcon2,
    description:
      "Build engaging social networking platforms designed to connect people, foster interactions, and grow your brand’s digital presence.",
  },
  {
    id: 3,
    title: "Conversion-Focused Pages",
    icon: webServiceIcon3,
    description:
      "Designing sleek, results-driven landing pages that capture leads, showcase your brand effectively, and encourage user action.",
  },
  {
    id: 4,
    title: "Bespoke Web Solutions",
    icon: webServiceIcon4,
    description:
      "Developing custom-built websites tailored to your objectives, ensuring a blend of innovation, functionality, and seamless performance.",
  },
];

// App Development Services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS Solutions",
    icon: appServiceIcon1,
    description:
      "Our experts craft high-performance iOS applications using advanced technology, ensuring smooth operation and a seamless user experience.",
  },
  {
    id: 2,
    title: "Android Applications",
    icon: appServiceIcon2,
    description:
      "Developing intuitive and scalable mobile applications for Android devices, tailored to your business goals and user needs.",
  },
  {
    id: 3,
    title: "Cross-Platform Apps",
    icon: appServiceIcon3,
    description:
      "Leveraging Flutter’s capabilities to deliver visually appealing and responsive apps that work across multiple platforms efficiently.",
  },
  {
    id: 4,
    title: "Multi-Device Applications",
    icon: appServiceIcon4,
    description:
      "Creating adaptive mobile applications that function flawlessly on both iOS and Android, ensuring consistent user experiences.",
  },
];

// Blockchain Development Services
export const blockchainDevelopmentServices = [
  {
    id: 1,
    title: "Smart Contract Development",
    icon: FaEthereum,
    description:
      "Secure, audited smart contracts for decentralized applications, tokens, and blockchain protocols.",
  },
  {
    id: 2,
    title: "DApp Development",
    icon: FaLink,
    description:
      "Decentralized applications built on Ethereum, Polygon, Solana, and other leading blockchains.",
  },
  {
    id: 3,
    title: "Blockchain Security",
    icon: FaShieldAlt,
    description:
      "Comprehensive security audits and penetration testing for your blockchain solutions.",
  },
  {
    id: 4,
    title: "Token Development",
    icon: FaCoins,
    description:
      "Custom token creation including ERC-20, ERC-721, and other token standards.",
  },
  {
    id: 5,
    title: "DeFi Solutions",
    icon: FaExchangeAlt,
    description:
      "Decentralized finance platforms including lending protocols, DEXs, and yield farming.",
  },
  {
    id: 6,
    title: "NFT Marketplaces",
    icon: FaChartLine,
    description:
      "Custom NFT platforms with minting, trading, and auction capabilities.",
  },
];

// game development services
export const gameDevelopmentServices = [
  {
    id: 1,
    title: "Mobile Game Development",
    icon: FaMobile,
    description:
      "Engaging 2D and 3D mobile games for iOS and Android platforms.",
  },
  {
    id: 2,
    title: "PC/Console Games",
    icon: FaGamepad,
    description:
      "High-performance games for Windows, Mac, PlayStation, and Xbox.",
  },
  {
    id: 3,
    title: "Unity Game Development",
    icon: FaUnity,
    description: "Cross-platform games developed with Unity engine.",
  },
  {
    id: 4,
    title: "VR/AR Games",
    icon: FaVrCardboard,
    description: "Immersive virtual and augmented reality gaming experiences.",
  },
  {
    id: 5,
    title: "Multiplayer Games",
    icon: FaUsers,
    description:
      "Online multiplayer games with matchmaking and social features.",
  },
  {
    id: 6,
    title: "Game Backend Services",
    icon: FaServer,
    description:
      "Scalable backend infrastructure for game analytics, leaderboards, and more.",
  },
];

// rpa development services
export const rpaServices = [
  {
    id: 1,
    title: "Process Automation",
    icon: FaRobot,
    description:
      "Automate repetitive tasks across applications to improve efficiency.",
  },
  {
    id: 2,
    title: "Workflow Automation",
    icon: FaCogs,
    description:
      "Streamline complex business processes with intelligent automation.",
  },
  {
    id: 3,
    title: "Data Migration",
    icon: FaDatabase,
    description: "Automated data transfer between systems with zero errors.",
  },
  {
    id: 4,
    title: "Excel Automation",
    icon: FaFileExcel,
    description: "Automate spreadsheet tasks and complex data manipulations.",
  },
  {
    id: 5,
    title: "ERP Integration",
    icon: FaExchangeAlt,
    description: "Connect disparate systems and automate data flows.",
  },
  {
    id: 6,
    title: "Analytics Automation",
    icon: FaChartBar,
    description: "Automated report generation and data visualization.",
  },
];

// ai development services
export const aiServices = [
  {
    id: 1,
    title: "AI Strategy Consulting",
    icon: FaBrain,
    description: "Roadmap for AI implementation aligned with business goals.",
  },
  {
    id: 2,
    title: "Computer Vision",
    icon: FaEye,
    description:
      "Image and video recognition systems for various applications.",
  },
  {
    id: 3,
    title: "Predictive Analytics",
    icon: FaChartLine,
    description: "AI models that forecast trends and behaviors.",
  },
  {
    id: 4,
    title: "Chatbots & Virtual Assistants",
    icon: FaRobot,
    description: "Intelligent conversational agents for customer support.",
  },
  {
    id: 5,
    title: "Natural Language Processing",
    icon: FaLanguage,
    description: "Text analysis and generation capabilities.",
  },
  {
    id: 6,
    title: "AI Process Automation",
    icon: FaCogs,
    description: "Combine AI with RPA for cognitive automation.",
  },
];

// ml development services
export const mlServices = [
  {
    id: 1,
    title: "Predictive Modeling",
    icon: FaChartBar,
    description:
      "Build models that forecast future outcomes based on historical data.",
  },
  {
    id: 2,
    title: "Recommendation Systems",
    icon: FaShoppingCart,
    description: "Personalized product/content recommendations for users.",
  },
  {
    id: 3,
    title: "Anomaly Detection",
    icon: FaSearch,
    description: "Identify unusual patterns in data for fraud prevention.",
  },
  {
    id: 4,
    title: "Computer Vision ML",
    icon: FaEye,
    description: "Image classification and object recognition models.",
  },
  {
    id: 5,
    title: "Natural Language ML",
    icon: FaLanguage,
    description: "Text classification, sentiment analysis, and more.",
  },
  {
    id: 6,
    title: "ML Model Optimization",
    icon: FaMedal,
    description: "Improve accuracy and performance of existing models.",
  },
];

// cloud computing services
export const cloudServices = [
  {
    id: 1,
    title: "Cloud Infrastructure",
    icon: FaServer,
    description: "Design and deploy scalable cloud architecture.",
  },
  {
    id: 2,
    title: "Cloud Migration",
    icon: FaSync,
    description: "Seamless transition of applications and data to the cloud.",
  },
  {
    id: 3,
    title: "Database Solutions",
    icon: FaDatabase,
    description: "Managed database services in the cloud.",
  },
  {
    id: 4,
    title: "Cloud Security",
    icon: FaShieldAlt,
    description: "Comprehensive security for cloud environments.",
  },
  {
    id: 5,
    title: "Hybrid Cloud",
    icon: FaNetworkWired,
    description: "Integration of on-premise and cloud infrastructure.",
  },
  {
    id: 6,
    title: "Serverless Computing",
    icon: FaCloud,
    description: "Build and run applications without managing servers.",
  },
];

// data science services
export const dataScienceServices = [
  {
    id: 1,
    title: "Data Analytics",
    icon: FaChartLine,
    description: "Turn raw data into actionable business insights.",
  },
  {
    id: 2,
    title: "Big Data Solutions",
    icon: FaDatabase,
    description: "Process and analyze large, complex datasets.",
  },
  {
    id: 3,
    title: "Data Visualization",
    icon: FaSearch,
    description: "Interactive dashboards and reports for data storytelling.",
  },
  {
    id: 4,
    title: "Predictive Modeling",
    icon: FaBrain,
    description: "Statistical models to forecast future trends.",
  },
  {
    id: 5,
    title: "Data Engineering",
    icon: FaCode,
    description: "Build robust data pipelines and infrastructure.",
  },
  {
    id: 6,
    title: "Data Governance",
    icon: FaShieldAlt,
    description: "Ensure data quality, security, and compliance.",
  },
];

// nlp development services
export const nlpServices = [
  {
    id: 1,
    title: "Text Classification",
    icon: FaBook,
    description: "Categorize and organize text data automatically.",
  },
  {
    id: 2,
    title: "Sentiment Analysis",
    icon: FaComments,
    description: "Determine emotional tone in customer feedback.",
  },
  {
    id: 3,
    title: "Chatbots & Virtual Agents",
    icon: FaRobot,
    description: "AI-powered conversational interfaces.",
  },
  {
    id: 4,
    title: "Machine Translation",
    icon: FaLanguage,
    description: "Automated translation between languages.",
  },
  {
    id: 5,
    title: "Text Summarization",
    icon: FaSearch,
    description: "Condense long documents into key points.",
  },
  {
    id: 6,
    title: "Voice Assistants",
    icon: FaHeadset,
    description: "Speech recognition and voice response systems.",
  },
];

// cloud migration services
export const cloudMigrationServices = [
  {
    id: 1,
    title: "Assessment & Planning",
    icon: FaSearch,
    description: "Comprehensive analysis of current infrastructure.",
  },
  {
    id: 2,
    title: "Lift & Shift Migration",
    icon: FaCloudUploadAlt,
    description: "Move applications with minimal changes.",
  },
  {
    id: 3,
    title: "Refactoring Services",
    icon: FaTools,
    description: "Optimize applications for cloud-native architecture.",
  },
  {
    id: 4,
    title: "Data Migration",
    icon: FaDatabase,
    description: "Secure transfer of databases to the cloud.",
  },
  {
    id: 5,
    title: "Performance Optimization",
    icon: FaTachometerAlt,
    description: "Tune applications for cloud performance.",
  },
  {
    id: 6,
    title: "Security & Compliance",
    icon: FaShieldAlt,
    description: "Ensure secure transition meeting all regulations.",
  },
];

// ui ux design services
export const uiuxServices = [
  {
    id: 1,
    title: "User Research",
    icon: FaUserCheck,
    description: "Understand user needs through comprehensive research.",
  },
  {
    id: 2,
    title: "UI Design",
    icon: FaPalette,
    description: "Beautiful, intuitive interfaces for all devices.",
  },
  {
    id: 3,
    title: "UX Strategy",
    icon: FaBrain,
    description: "Holistic approach to user experience design.",
  },
  {
    id: 4,
    title: "Mobile App Design",
    icon: FaMobile,
    description: "iOS and Android interfaces with platform conventions.",
  },
  {
    id: 5,
    title: "Web Design",
    icon: FaDesktop,
    description: "Responsive designs that work across all browsers.",
  },
  {
    id: 6,
    title: "Design Systems",
    icon: FaLayerGroup,
    description: "Scalable component libraries for consistent UI.",
  },
];

// agentic ai services
export const agenticAIServices = [
  {
    id: 1,
    title: "Autonomous Agents",
    icon: FaRobot,
    description: "AI systems that can act independently to achieve goals.",
  },
  {
    id: 2,
    title: "Multi-Agent Systems",
    icon: FaProjectDiagram,
    description: "Coordinated AI agents working together on complex tasks.",
  },
  {
    id: 3,
    title: "Cognitive Architectures",
    icon: FaBrain,
    description: "AI systems with human-like reasoning capabilities.",
  },
  {
    id: 4,
    title: "Agent Learning Systems",
    icon: FaCogs,
    description: "AI agents that improve through experience.",
  },
  {
    id: 5,
    title: "Agent Security",
    icon: FaShieldAlt,
    description: "Ensure safe operation of autonomous AI systems.",
  },
  {
    id: 6,
    title: "Agent Monitoring",
    icon: LuChartNetwork,
    description: "Track and analyze agent behavior and performance.",
  },
];

// testimonials
export const testimonials = [
  {
    id: 1,
    name: "Anna L",
    position: "Marketing Director at EcoFlow Systems",
    img: require("./assets/images/testimonial3.png"),
    desc: "“We were looking for a way to integrate blockchain technology into our business, and the team at AWD Infotech delivered an exceptional solution. Their expertise in developing a secure and decentralized system has truly transformed our business operations. We’ve seen a marked improvement in transparency and efficiency. Highly recommend their services!”",
  },
  {
    id: 2,
    name: "Michael P",
    position: "CEO at PlayForge Studios",
    img: require("./assets/images/testimonial1.png"),
    desc: "“The website that AWD Infotech built for us has made a world of difference for our online presence. They took the time to understand our brand, and the final product is both visually appealing and incredibly functional. We’ve seen increased traffic and conversions, and it’s become a vital tool for engaging with our customers.”",
  },
  {
    id: 3,
    name: "Emily H",
    position: "Operations Manager at Health Innovations Group",
    img: require("./assets/images/testimonial2.png"),
    desc: "“The UI/UX design team at AWD Infotech truly understood our vision and created an intuitive, beautiful design for our product. They paid close attention to every detail, ensuring that the user experience was seamless from start to finish. The feedback from our users has been overwhelmingly positive, and we’ve seen an increase in user engagement.”",
  },
  {
    id: 4,
    name: "Daniel R",
    position: "Founder of Nexus Tech",
    img: require("./assets/images/testimonial4.jpg"),
    desc: "“As a growing business, we needed a site that could evolve as we did. AWD Infotech delivered a scalable solution that looks amazing and performs even better. Their team was professional, easy to work with, and committed to helping us achieve our goals. Our website is now a key driver of our growth, and we’re excited to continue working with them as we expand.”",
  },
  {
    id: 5,
    name: "Jessica M",
    position: "COO of Creative Solutions",
    img: require("./assets/images/testimonial5.jpg"),
    desc: "“The data science services provided by AWD Infotech have been a game-changer for us. Their team helped us analyze complex data, providing valuable insights that have improved our decision-making process. The predictive models they built have allowed us to better understand customer behavior and market trends, resulting in a more targeted business approach.”",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    title: "Web Development",
    landingPageUrl: "/experience-design",
    description:
      "We build more than just websites—we create digital experiences that are crafted to perform.",
    icon: FaCode,
    detailHeading: "Web Development: Tailored Websites that Deliver Results",
    detailContent: `<p>At AWD Infotech, we build more than just websites—we create digital experiences that are crafted to perform. Whether you're a small business looking to establish an online presence or a larger company needing a full-featured, scalable platform, our web development services are designed to meet your specific needs. Our team of developers, designers, and strategists work together to:</p>
    <br/>
    <ol>
      <li><b>Develop Custom Websites:</b><br/> No cookie-cutter solutions here. We build each site from the ground up, ensuring it aligns with your brand and business goals.</li>
      <br/>
      <li><b>Optimize for Speed and Security:</b> <br/> Performance matters. We ensure your website loads fast and is equipped with the latest security features to protect your data and users.</li>
      <br/>
      <li><b>Ensure Scalability:</b><br/>  As your business grows, your website should too. Our websites are built to handle increased traffic and scale with your success.</li>
    </ol>
    <br/>
    <br/>
    <p>Whether you need an e-commerce platform, a corporate site, or a portfolio, our custom web development services deliver results that enhance your online visibility and user engagement.</p>`,
  },
  {
    id: 2,
    title: "App Development",
    landingPageUrl: "/experience-design",
    description:
      "We specialize in creating custom mobile applications that are user-friendly, feature-rich, and tailored to your specific goals.",
    icon: FaMobileAlt,
    detailHeading:
      "App Development: Powerful Mobile Solutions for Modern Businesses",
    detailContent: `<p>In a mobile-first world, having a well-designed app can set your business apart. At AWD Infotech, we specialize in creating custom mobile applications that are user-friendly, feature-rich, and tailored to your specific goals. Our app development services cover everything from concept to deployment:</p>
      <br/>
      <ol>
        <li><b>iOS and Android Apps:</b><br/>Whether you're targeting iPhone users or Android fans, we develop native apps for both platforms to ensure optimal performance and user experience.</li>
        <br/>
        <li><b>Cross-Platform Solutions:</b> <br/> Need to reach a wider audience with one codebase? We develop cross-platform apps that work seamlessly on both iOS and Android, reducing development time and cost without compromising quality.</li>
        <br/>
        <li><b>Feature Integration:</b><br/>  From in-app purchases to push notifications and social media integration, we ensure your app has all the features it needs to engage users and drive results.</li>
      </ol>
      <br/>
      <br/>
      <p>We're not just about writing code—we're about building apps that solve real business problems and provide exceptional user experiences.</p>`,
  },
  {
    id: 3,
    title: "Blockchain Development",
    landingPageUrl: "/blockchain-development",
    description:
      "We build secure, decentralized applications and smart contracts to power the next generation of digital solutions.",
    icon: FaEthereum,
    detailHeading:
      "Blockchain Development: Building Trust Through Decentralization",
    detailContent: `<p>Blockchain technology is transforming industries by enabling secure, transparent, and tamper-proof transactions. Our blockchain development services help businesses leverage this revolutionary technology:</p>
      <br/>
      <ol>
        <li><b>Smart Contract Development:</b><br/>We create self-executing contracts with predefined rules that automate processes and eliminate intermediaries.</li>
        <br/>
        <li><b>DApp Development:</b> <br/> Build decentralized applications that run on blockchain networks, offering enhanced security and transparency.</li>
        <br/>
        <li><b>Tokenization Solutions:</b><br/> Develop custom cryptocurrency tokens for your business needs, whether for utility, security, or governance purposes.</li>
      </ol>
      <br/>
      <br/>
      <p>From Ethereum to Hyperledger, we work with various blockchain platforms to deliver solutions that meet your specific requirements.</p>`,
  },
  {
    id: 4,
    title: "Game Development",
    landingPageUrl: "/game-development",
    description:
      "We specialize in creating immersive, engaging games for mobile, console, and PC platforms.",
    icon: FaGamepad,
    detailHeading:
      "Game Development: Bringing Your Ideas to Life with Interactive Experiences",
    detailContent: `<p>Whether you're an indie developer with a fresh idea or a large studio looking to expand your portfolio, we offer comprehensive game development services to bring your vision to life. At AWD Infotech, we specialize in creating immersive, engaging games for mobile, console, and PC platforms. Our game development services include:</p>
      <br/>
      <ol>
        <li><b>Concept and Story Development:</b><br/>We work with you to develop compelling narratives, unique characters, and engaging gameplay mechanics that keep players coming back.</li>
        <br/>
        <li><b>Multi-Platform Development:</b> <br/> Whether it's Unity or Unreal Engine, we use the latest tools and technologies to ensure your game runs smoothly on all platforms, including iOS, Android, PC, and consoles.</li>
        <br/>
        <li><b>2D/3D Design and Animation:</b><br/> Our artists and animators create stunning graphics and immersive environments that enhance the gameplay experience.</li>
      </ol>
      <br/>
      <br/>
      <p>From mobile games to AAA titles, we are committed to delivering high-quality games that resonate with players and stand out in the market.</p>`,
  },
  // {
  //   id: 5,
  //   title: "Robotic Process Automation (RPA)",
  //   landingPageUrl: "/rpa-development",
  //   description:
  //     "We automate repetitive tasks and business processes to increase efficiency and reduce operational costs.",
  //   icon: FaRobot,
  //   detailHeading: "RPA: Streamlining Business Processes Through Automation",
  //   detailContent: `<p>Robotic Process Automation (RPA) allows businesses to automate repetitive, rule-based tasks, freeing up human resources for more strategic work. Our RPA solutions help organizations:</p>
  //     <br/>
  //     <ol>
  //       <li><b>Process Automation:</b><br/>Identify and automate repetitive tasks across various departments including finance, HR, and customer service.</li>
  //       <br/>
  //       <li><b>Integration with Legacy Systems:</b> <br/> Connect modern RPA solutions with your existing systems without costly infrastructure changes.</li>
  //       <br/>
  //       <li><b>Continuous Improvement:</b><br/> Our bots learn and adapt over time, continuously improving process efficiency and accuracy.</li>
  //     </ol>
  //     <br/>
  //     <br/>
  //     <p>We implement RPA solutions that deliver measurable ROI by reducing errors, increasing speed, and lowering operational costs.</p>`,
  // },
  {
    id: 6,
    title: "Artificial Intelligence",
    landingPageUrl: "/ai-development",
    description:
      "We develop AI solutions that transform business operations and create intelligent, adaptive systems.",
    icon: FaBrain,
    detailHeading:
      "Artificial Intelligence: Building Smarter Business Solutions",
    detailContent: `<p>Artificial Intelligence is revolutionizing how businesses operate and interact with customers. Our AI services help organizations harness this transformative technology:</p>
      <br/>
      <ol>
        <li><b>Computer Vision:</b><br/>Develop image and video recognition systems for quality control, security, and analytics applications.</li>
        <br/>
        <li><b>Predictive Modeling:</b> <br/> Create AI models that forecast trends, customer behavior, and business outcomes with high accuracy.</li>
        <br/>
        <li><b>Intelligent Automation:</b><br/> Combine AI with RPA to create cognitive automation solutions that handle complex, decision-based processes.</li>
      </ol>
      <br/>
      <br/>
      <p>From chatbots to recommendation engines, we build AI solutions that learn, adapt, and deliver tangible business value.</p>`,
  },
  {
    id: 7,
    title: "Machine Learning",
    landingPageUrl: "/ml-development",
    description:
      "We develop machine learning solutions that help businesses automate processes, make smarter decisions, and uncover new insights.",
    icon: FaChartLine,
    detailHeading:
      "Machine Learning Solutions: Harnessing Data to Drive Innovation",
    detailContent: `<p>In an era where data is king, machine learning (ML) can give your business the competitive edge it needs. At AWD Infotech, we develop machine learning solutions that help businesses automate processes, make smarter decisions, and uncover new insights. Our ML services include:</p>
      <br/>
      <ol>
        <li><b>Predictive Analytics:</b><br/>Use machine learning to forecast trends, predict customer behavior, and make data-driven decisions with confidence.</li>
        <br/>
        <li><b>Automation:</b> <br/> From customer segmentation to process automation, we build ML models that streamline workflows and increase efficiency.</li>
        <br/>
        <li><b>Personalization:</b><br/> Leverage your data to deliver personalized experiences to your users, increasing engagement, retention, and satisfaction.</li>
      </ol>
      <br/>
      <br/>
      <p>Our machine learning solutions are designed to simplify complex data and empower you with actionable insights that drive business growth.</p>`,
  },
  {
    id: 8,
    title: "Cloud Computing",
    landingPageUrl: "/cloud-computing",
    description:
      "We provide scalable, secure cloud solutions to help businesses optimize their IT infrastructure and operations.",
    icon: FaCloud,
    detailHeading: "Cloud Computing: Scalable Solutions for Modern Businesses",
    detailContent: `<p>Cloud computing offers businesses flexibility, scalability, and cost-efficiency in their IT operations. Our cloud services help organizations make the most of this technology:</p>
      <br/>
      <ol>
        <li><b>Cloud Architecture Design:</b><br/>We design optimized cloud infrastructures tailored to your specific business needs and workloads.</li>
        <br/>
        <li><b>Multi-Cloud Solutions:</b> <br/> Implement strategies that leverage multiple cloud providers to maximize performance and minimize risk.</li>
        <br/>
        <li><b>Cloud Security:</b><br/> Protect your data and applications with robust security measures designed for cloud environments.</li>
      </ol>
      <br/>
      <br/>
      <p>Whether you need IaaS, PaaS, or SaaS solutions, we help you navigate the cloud landscape to find the right fit for your business.</p>`,
  },
  {
    id: 9,
    title: "Data Science",
    landingPageUrl: "/data-science",
    description:
      "We turn your data into actionable insights that drive business growth and innovation.",
    icon: FaDatabase,
    detailHeading: "Data Science: Unlocking the Value in Your Data",
    detailContent: `<p>In today's data-driven world, the ability to extract meaningful insights from information is a competitive advantage. Our data science services help businesses:</p>
      <br/>
      <ol>
        <li><b>Advanced Analytics:</b><br/>Apply statistical models and algorithms to uncover patterns and trends in your data.</li>
        <br/>
        <li><b>Big Data Solutions:</b> <br/> Process and analyze large, complex datasets that traditional tools can't handle.</li>
        <br/>
        <li><b>Data Visualization:</b><br/> Transform complex data into clear, actionable visual representations that drive decision-making.</li>
      </ol>
      <br/>
      <br/>
      <p>From predictive modeling to customer segmentation, we help you turn raw data into strategic assets that fuel growth and innovation.</p>`,
  },
  {
    id: 10,
    title: "Natural Language Processing (NLP)",
    landingPageUrl: "/nlp-development",
    description:
      "We develop NLP solutions that enable machines to understand, interpret, and generate human language.",
    icon: FaLanguage,
    detailHeading: "NLP: Bridging the Gap Between Humans and Machines",
    detailContent: `<p>Natural Language Processing allows computers to understand, interpret, and respond to human language in valuable ways. Our NLP solutions help businesses:</p>
      <br/>
      <ol>
        <li><b>Text Analysis:</b><br/>Extract meaning, sentiment, and intent from customer feedback, documents, and other text sources.</li>
        <br/>
        <li><b>Chatbots and Virtual Assistants:</b> <br/> Build conversational AI that understands natural language queries and provides human-like responses.</li>
        <br/>
        <li><b>Language Translation:</b><br/> Develop systems that automatically translate between languages while preserving context and meaning.</li>
      </ol>
      <br/>
      <br/>
      <p>We implement NLP solutions that enhance customer experiences, automate processes, and unlock insights from unstructured data.</p>`,
  },
  {
    id: 11,
    title: "Cloud Migration",
    landingPageUrl: "/cloud-migration",
    description:
      "We help businesses seamlessly transition their applications and data to the cloud with minimal disruption.",
    icon: FaCloudUploadAlt,
    detailHeading: "Cloud Migration: Smooth Transition to the Cloud",
    detailContent: `<p>Moving to the cloud requires careful planning and execution to ensure business continuity. Our cloud migration services provide:</p>
      <br/>
      <ol>
        <li><b>Migration Strategy:</b><br/>We assess your current infrastructure and develop a tailored migration roadmap.</li>
        <br/>
        <li><b>Application Refactoring:</b> <br/> Modernize legacy applications for optimal cloud performance and scalability.</li>
        <br/>
        <li><b>Data Migration:</b><br/> Securely transfer your data to the cloud with minimal downtime and maximum integrity.</li>
      </ol>
      <br/>
      <br/>
      <p>We handle the technical complexities of cloud migration so you can focus on your business, ensuring a smooth transition with measurable benefits.</p>`,
  },
  {
    id: 12,
    title: "UI/UX Design",
    landingPageUrl: "/ui-ux-design",
    description:
      "Our UI/UX design services focus on creating intuitive, user-centered designs that make it easy for your customers to engage with your business.",
    icon: FaPalette,
    detailHeading: "UI/UX Design: Crafting Seamless and Engaging User Journeys",
    detailContent: `<p>A great digital product is nothing without an exceptional user experience. Our UI/UX design services focus on creating intuitive, user-centered designs that make it easy for your customers to engage with your business. Here's how we bring your vision to life:</p>
      <br/>
      <ol>
        <li><b>User-Centered Design:</b><br/>We take the time to understand your users—their needs, behaviors, and goals—so we can design interfaces that feel natural and engaging.</li>
        <br/>
        <li><b>Prototyping and Testing:</b> <br/> Before anything goes live, we create interactive prototypes to test and gather feedback. This ensures that the final design is both functional and delightful to use.</li>
        <br/>
        <li><b>Beautiful and Functional Interfaces:</b><br/>  Our UI designers craft stunning visuals that not only look great but also provide a smooth, seamless experience for your users.</li>
      </ol>
      <br/>
      <br/>
      <p>From websites to mobile apps, we design user experiences that lead to higher engagement, satisfaction, and loyalty.</p>`,
  },
  {
    id: 13,
    title: "Agentic AI Solutions",
    landingPageUrl: "/agentic-ai",
    description:
      "We build autonomous, decision-making AI agents that revolutionize how businesses operate.",
    icon: FaRobot,
    detailHeading: "Agentic AI Solutions: Redefining Intelligent Automation",
    detailContent: `<p>AI is no longer just a chatbot—it's evolving into autonomous, decision-making agents that revolutionize how businesses operate. At AWD Infotech, we build Agentic AI Solutions that empower businesses with AI-driven intelligence, automation, and adaptive learning across industries.</p>
      <br/>
      <ol>
        <li><b>Smart Search & Filtering:</b><br/>AI-powered contextual search delivering precise, relevant results.</li>
        <br/>
        <li><b>Conversational AI & Chatbots:</b> <br/> Self-learning virtual assistants enhancing customer interactions.</li>
        <br/>
        <li><b>Autonomous AI Agents:</b><br/> Decision-making AI optimizing workflows and business operations.</li>
        <br/>
        <li><b>AI in Cybersecurity:</b><br/> Intelligent threat detection and proactive security management.</li>
        <br/>
        <li><b>Hyper-Personalization:</b><br/> AI-driven recommendations tailored to user behavior and preferences.</li>
      </ol>
      <br/>
      <br/>
      <p>AI is not just automating tasks—it's reshaping the future of business. Are you ready to integrate the next generation of AI?</p>`,
  },
];

// web development portfolio
export const webDevelopmentPortfolio = [
  {
    id: 1,
    title: "5G Homes",
    image: require("./assets/images/portfolio/web development/5ghomes.png"),
  },
  {
    id: 2,
    title: "Autopilot",
    image: require("./assets/images/portfolio/web development/Autopilot.png"),
  },
  {
    id: 3,
    title: "Bayut",
    image: require("./assets/images/portfolio/web development/bayut.png"),
  },
  {
    id: 4,
    title: "Cold Creekcap",
    image: require("./assets/images/portfolio/web development/cold creekcap.png"),
  },
  {
    id: 5,
    title: "College Nutritionist",
    image: require("./assets/images/portfolio/web development/collegenutritionnist.png"),
  },
  {
    id: 6,
    title: "Leadership.net",
    image: require("./assets/images/portfolio/web development/leadership.net.png"),
  },
  {
    id: 7,
    title: "Menissa Caterings",
    image: require("./assets/images/portfolio/web development/menissa caterings.png"),
  },
  {
    id: 8,
    title: "Think Reality",
    image: require("./assets/images/portfolio/web development/think reality.png"),
  },
];

// game development portfolio
export const gameDevelopmentPortfolio = [
  {
    id: 1,
    title: "3D Bowling Game",
    image: require("./assets/images/portfolio/game development/3d bowling game.png"),
  },
  {
    id: 2,
    title: "Car Stunt Extreme Racing",
    image: require("./assets/images/portfolio/game development/car stunt extreme racing.png"),
  },
];

// app development portfolio
export const appDevelopmentPortfolio = [
  {
    id: 1,
    title: "Cryptopadie",
    image: require("./assets/images/portfolio/app development/cryptopadie.png"),
  },
  {
    id: 2,
    title: "Doctor Plus",
    image: require("./assets/images/portfolio/app development/doctorplus.png"),
  },
  {
    id: 3,
    title: "Dubai Travel Guide",
    image: require("./assets/images/portfolio/app development/dubai travel guide.png"),
  },
  {
    id: 4,
    title: "Elora Hair Palour",
    image: require("./assets/images/portfolio/app development/elora hair palour.png"),
  },
  {
    id: 5,
    title: "Evans Francis",
    image: require("./assets/images/portfolio/app development/evans francis.png"),
  },
  {
    id: 6,
    title: "House of Deliverance",
    image: require("./assets/images/portfolio/app development/house of deliverance.png"),
  },
  {
    id: 7,
    title: "MyBitsShop",
    image: require("./assets/images/portfolio/app development/mybitsshop.png"),
  },
  {
    id: 8,
    title: "Namaz",
    image: require("./assets/images/portfolio/app development/namaz.png"),
  },
  {
    id: 9,
    title: "Potea",
    image: require("./assets/images/portfolio/app development/potea.png"),
  },
  {
    id: 10,
    title: "Rentop",
    image: require("./assets/images/portfolio/app development/rentop.png"),
  },
];

// industries
export const industriesCompanyServe = [
  {
    id: 1,
    title: "Hitech",
    img: require("./assets/images/industries/Hitech.webp"),
    desc: "Drive innovation with AI, IoT, and cloud solutions. We deliver cutting-edge tech for digital transformation and operational excellence.",
  },
  {
    id: 2,
    title: "Retail",
    img: require("./assets/images/industries/Retail.webp"),
    desc: "Boost sales with AI-powered personalization and smart inventory systems. Transform omnichannel experiences and streamline supply chains.",
  },
  {
    id: 3,
    title: "Education",
    img: require("./assets/images/industries/Education.webp"),
    desc: "Enhance learning through adaptive platforms and AI tutors. Automate admin tasks and gain insights to improve student outcomes.",
  },
  {
    id: 4,
    title: "Healthcare",
    img: require("./assets/images/industries/Healthcare.webp"),
    desc: "Improve care with AI diagnostics and telemedicine. Optimize EHR systems and enable data-driven clinical decisions.",
  },
  {
    id: 5,
    title: "Wealth Management",
    img: require("./assets/images/industries/Wealth Management.webp"),
    desc: "Optimize portfolios with AI-driven insights. Streamline financial planning and risk assessment for HNW clients.",
  },
  {
    id: 6,
    title: "Banking & Payments",
    img: require("./assets/images/industries/Banking & Payments.webp"),
    desc: "Secure transactions with blockchain and AI fraud detection. Modernize digital banking and payment ecosystems.",
  },
  {
    id: 7,
    title: "Telecom",
    img: require("./assets/images/industries/Telecom.webp"),
    desc: "Enhance networks with AI-driven optimization and 5G solutions. Improve connectivity and customer experiences through smart tech.",
  },
];
