export const portfolioData = {
  name: 'Kaushalya Rasanjali',
  initials: 'H.H.M.K.R.',
  title: 'Software Developer',
  email: 'krherath.dev@gmail.com',
  phone: '+94 77 82 66 824',
  location: 'No.54, Beramana, wijayabhahukandha',
  profileSummary: `Software Developer with hands-on experience in PHP, MySQL, and modern JavaScript frameworks including React. Skilled in developing responsive web applications, RESTful APIs, and database-driven systems. Familiar with Spring Boot, SQL Server, and full-stack development. Passionate about building scalable and high-performance applications aligned with industry standards.`,
  
  links: {
    github: 'https://github.com/RasanjaliHerath',
    linkedin: 'https://www.linkedin.com',
    medium: 'https://medium.com/@rasanjaliherath',
    blog: 'https://rasanjaliherath.blogspot.com',
    instagram: 'https://www.instagram.com/__.l_i_l_y.__?igsh=Mnd1ZWExejJkYzZq&utm_source=qr',
    /** WhatsApp chat link (digits only, country code, no +) */
    whatsapp: 'https://wa.me/94778266824',
  },

  education: [
    {
      id: 1,
      institution: 'University of Jaffna',
      degree: 'BICT (Honors)',
      period: '2020-2024',
    },
    {
      id: 2,
      institution: 'Institute of Digital Engineering Technology',
      degree: 'Diploma - Enterprise Software Application Development by Java',
      period: '2023-2024',
    },
    {
      id: 3,
      institution: 'Institute of Digital Engineering Technology',
      degree: 'Diploma - Enterprise Software Application Development by MERN Stack',
      period: '2024-2025',
    },
  ],

  experience: [
    {
      id: 1,
      position: 'Software Engineer - Intern',
      company: 'IDET (Institute of Digital Engineering Technology)',
      period: 'Aug 2023 - Jan 2024',
      description: 'Developed full-stack web applications using modern technologies',
    },
    {
      id: 2,
      position: 'Customer Service Executive',
      company: 'SMCL (Sejaya Micro Credit Limited)',
      period: 'Feb 2021 - Aug 2021',
      description: 'Provided excellent customer support and service management',
    },
  ],

  skills: {
    languages: ['PHP', 'Java (Core Java)', 'JavaScript', 'C#', 'C++', 'C', 'SQL'],
    frameworks: ['Spring Boot', 'React', 'React Native', 'Angular', 'Express.js', '.NET'],
    technologies: ['RESTful APIs', 'JSON', 'Database Management', 'Responsive UI Design', 'Microsoft SQL Server'],
  },

  projectCategories: [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Front-end' },
    { id: 'mobile', name: 'Mobile App' },
    { id: 'website', name: 'Website' },
    { id: 'research', name: 'Research' },
    { id: 'creative', name: 'Creative' }
  ],

projects: [
  {
    id: 1,
    name: 'KECT Consults Website',
    category: 'fullstack',
    description:
      'Developed a responsive certification services platform with dynamic UI, animations, and contact features.',

    longDescription:
      'A comprehensive certification services platform built with React for the frontend and PHP/MySQL for the backend. Features include dynamic animations, responsive design, service listings, and contact management system.',

    technologies: ['React', 'PHP', 'MySQL', 'XAMPP', 'REST API','Tailwind CSS',
  'Material UI',
    'Vite',],

    images: [
      '/images/kect.png',
      '/images/kect2.png',
      '/images/kect3.png',
    ],

    github: 'https://github.com/RasanjaliHerath/KECT-Consults-Website',
    demo: 'https://kectholding.com/',
    featured: true,
  },

  {
    id: 2,
    name: 'SWIGO - Smart Food Ordering Platform',
    category: 'fullstack',

    description:
      'Built a full-stack web app for restaurant browsing and data management with backend integration.',

    longDescription:
      'A complete food ordering platform that allows users to browse restaurants, view menus, place orders, and track their delivery. Admin panel for restaurant management with real-time order tracking.',

    technologies: ['React', 'PHP', 'MySQL', 'XAMPP', 'Tailwind CSS','REST API',
  'Material UI',
    'Vite',],

    images: [
      '/images/swigo1.png',
      '/images/swigo2.png',
      '/images/swigo3.png',
    ],

    github: 'https://github.com/RasanjaliHerath/swigo-website',
    demo: 'https://swigofood.netlify.app/',
    featured: true,
  },

  {
    id: 3,
    name: 'LUXE Fashion Apparel E-Commerce Platform',
    category: 'fullstack',

    description:
      'Created a full-stack fashion e-commerce platform with product management and responsive design.',

    longDescription:
      'A modern e-commerce platform specialized in fashion apparel with advanced filtering, shopping cart, payment integration, and admin dashboard for inventory management.',

    technologies: ['React', 'PHP', 'MySQL', 'XAMPP','Tailwind CSS',
  'Material UI', 'REST API',
    'Vite',],

    images: [
      '/images/luxe1.png',
      '/images/luxe2.png',
      '/images/luxe3.png',
      '/images/luxe4.png',
      '/images/luxe5.png',
    ],

    github: 'https://github.com/RasanjaliHerath/Luxe-Apparel-Fashion-Website',
    demo: 'https://liluxe.netlify.app/',
    // videoDemo: 'https://liluxe.netlify.app/',
    featured: true,
  },
  {
  id: 13,

  name: 'Voluré Beauty & Personal Care Platform',

  category: 'fullstack',

  description:
    'A modern full-stack beauty and personal care platform designed to showcase luxury salons, spas, cosmetics, and grooming services.',

  longDescription:
    'Voluré is a modern and elegant full-stack web application built with React, designed to deliver a premium digital experience for the beauty and personal care industry. The platform allows users to explore luxury salons, spas, cosmetics, skincare products, and grooming services through a visually rich and responsive interface. The application focuses on modern UI/UX design, seamless navigation, dynamic content presentation, and scalable architecture suitable for future booking systems, customer management, and e-commerce integration.',

  technologies: [
    'React',
    'JavaScript',
    'CSS3',
    'Responsive Design',
    'PHP',
    'MySQL',
    'REST API',
    'Vite',
  ],

  images: [
    '/images/v1.png',
    '/images/v6.png',
    '/images/v2.png',
    '/images/v3.png',
    '/images/v4.png',
    '/images/v5.png',
    '/images/v7.png',

  ],

  github:
    'https://github.com/RasanjaliHerath/Voloure',

  demo:
    'https://volure.netlify.app/',

  videoDemo:
    'https://youtu.be/voloure-demo',

  featured: true,
},

  {
    id: 4,
    name: 'Email AI Reply Generator',
    category: 'fullstack',

    description:
      'Developed an AI-based system for automated, context-aware email responses.',

    longDescription:
      'An intelligent email response system that uses AI/ML to automatically generate relevant replies based on email content. Integrated with email platforms and includes custom rule configuration.',

    technologies: ['Java', 'Spring Boot', 'React', 'AI/ML'],

    images: [
      '/images/emailai2.png',
      '/images/emailai1.png',
      
      '/images/emailai3.png',
    ],

    github: 'https://github.com/RasanjaliHerath/Email-AI_Reply_Generator',
    demo: 'https://updatelaunchingsoon.netlify.app/',
    videoDemo: 'https://youtu.be/demo4',
    featured: true,
  },

  {
    id: 5,
    name: 'IoT-Based Vehicular Accident Detection',
    category: 'research',

    description:
      'Developed an ML-based IoT system with real-time accident detection, GPS/GSM alerts, and a React dashboard (99.64% accuracy).',

    longDescription:
      'A research project combining IoT sensors with machine learning for real-time accident detection in vehicles. Features GPS/GSM alert system, real-time dashboard, and emergency notification system with 99.64% accuracy.',

    technologies: ['ML', 'IoT', 'React', 'GPS/GSM', 'Python'],

    images: [
      '/images/rpo.jpeg',
      '/images/rpo1.png',
      '/images/rpo2.jpeg',
      '/images/rpo3.jpeg',
       '/images/rpo4.png',
        '/images/rpo5.png',
         '/images/rpo6.png',
          '/images/rpo7.png',
    ],

    github: 'https://github.com/RasanjaliHerath/IoT-Integrated-Response-System-for-Vehicular-Accident-Detection-with-Real-Time-Tracking',
    demo: 'https://updatelaunchingsoon.netlify.app/',
    videoDemo: 'https://youtu.be/demo5',
    featured: false,
  },
  //noticehub

 {
  id: 6,

  name: 'Notice Hub',

  category: 'mobile',

  description:
    'A React Native mobile application for viewing and managing notices offline with a clean and interactive user experience.',

  longDescription:
    'Notice Hub is a frontend-focused React Native mobile application designed to help users view, organize, and manage notices efficiently without requiring a backend service. The application features categorized notices, smooth animations, interactive UI components, and local notification support for important updates. Built with scalability in mind, backend integration and cloud synchronization features are planned for future updates.',

  technologies: [
    'React Native',
    'JavaScript',
    'Expo',
    'AsyncStorage',
    'React Navigation',
    'Local Notifications',
    'CSS',
  ],

  images: [
    '/images/notice5.png',
    '/images/notice1.png',
    '/images/notice2.png',
    '/images/notice3.png',
    '/images/notice4.png',
      
   
    '/images/notice6.png',
    '/images/notice7.png',
      '/images/notice8.png',
        '/images/notice9.png',


  ],

  github:
    'https://github.com/RasanjaliHerath/NoticeHub',

  demo:
    'https://updatelaunchingsoon.netlify.app/',

  videoDemo:
    'https://youtu.be/noticehub-demo',

  featured: true,
},

  {
    id: 7,
    name: 'Personal Portfolio Website',
    category: 'website',

    description:
      'A modern, responsive portfolio website with theme switching and smooth animations.',

    longDescription:
      'A professional portfolio website showcasing projects, skills, and experience. Features light/dark theme toggle, smooth scrolling, and fully responsive design.',

    technologies: ['React', 'CSS3', 'Vite'],

    images: [
      '/images/portfolio1.png',
      '/images/portfolio2.png',
      '/images/portfolio3.png',
      '/images/portfolio5.png',
    ],

    github: 'https://github.com/RasanjaliHerath/krh-portfolio',
    demo: 'https://app.netlify.com/projects/hi-im-mis-lily/',
    videoDemo: 'https://youtu.be/portfolio-demo',
    featured: false,
  },
//streamit
 {
  id: 9,

  name: 'Streamit Clone',

  category: 'frontend',

  description:
    'A modern movie streaming platform clone built with React featuring smooth carousels, responsive layouts, and video playback functionality.',

  longDescription:
    'Streamit Clone is a frontend-focused movie streaming web application developed using React. The project replicates the experience of modern OTT platforms with interactive movie carousels, dynamic navigation, responsive layouts, and immersive UI design. Features include a featured movies homepage carousel, trending and upcoming movie sections powered by React Slick, single movie pages with trailer and full video playback, and fully responsive navigation for mobile devices. The application also includes static pages such as Terms of Use, Privacy Policy, Blog, and FAQ pages. Dummy movie data is managed through a centralized dummyData.js file to simulate a real streaming platform experience.',

  technologies: [
    'React',
    'React Router DOM',
    'React Slick',
    'JavaScript',
    'CSS3',
    'Flexbox',
    'FontAwesome',
    'Icons8',
    'Responsive Design',
  ],

  images: [
    '/images/streamit1.png',
    '/images/streamit2.png',
    '/images/streamit3.png',
    '/images/streamit4.png',
    '/images/streamit5.png',
    '/images/streamit6.png',
  ],

  github:
    'https://github.com/RasanjaliHerath/Streamit-Clone',

  demo:
    'https://streamobytechharmony.netlify.app/',

  videoDemo:
    'https://youtu.be/streamit-demo',

  featured: true,
},



//task
  {
  id: 8,

  name: 'Task Management System',

  category: 'fullstack',

  description:
    'A full-stack task management system built with Spring Boot, MySQL, React, and Redux Toolkit for efficient real-time task handling.',

  longDescription:
    'A modern full-stack Task Management System developed using Spring Boot for the backend and React with Redux Toolkit for the frontend. The application allows users to create, update, delete, and manage tasks efficiently in real-time. Features include task status management, filtering by priority/status, responsive UI design, RESTful API integration, and centralized state management using Redux Toolkit. The backend uses MySQL with Spring Data JPA for database operations and Lombok for cleaner code structure.',

  technologies: [
    'React',
    'Redux Toolkit',
    'Spring Boot',
    'MySQL',
    'Axios',
    'Spring Data JPA',
    'Lombok',
    'Tailwind CSS',
  ],

  images: [
    '/images/task.png',
    '/images/tasks.png',
    '/images/task1.png',
    '/images/task2.png',
    '/images/task3.png',
    '/images/task4.png',
    '/images/task5.png',
    '/images/task6.png',
  ],

  github:
    'https://github.com/RasanjaliHerath/Task-Management-System',

  demo:
    'https://updatelaunchingsoon.netlify.app/',

  videoDemo:
    'https://youtu.be/task-demo',

  featured: true,
},
//pixi
{
  id: 10,

  name: 'Pixie Edit - Photo Editor',

  category: 'creative',

  description:
    'A modern React-based photo editor with real-time filters, image transformations, and responsive UI design.',

  longDescription:
    'Pixie Edit is a sleek and interactive photo editor developed using React.js and Vite. The application allows users to upload images, apply real-time filters such as brightness, saturation, inversion, and grayscale, and perform image transformations including rotation and flipping. Built with Tailwind CSS and enhanced using Font Awesome and Boxicons, the project focuses on responsive UI design, smooth animations, and intuitive user interaction. Users can save edited images, reset filters, and experience a lightweight browser-based image editing workflow without requiring any backend integration.',

  technologies: [
    'React',
    'Vite',
    'Tailwind CSS',
    'JavaScript',
    'CSS3',
    'Font Awesome',
    'Boxicons',
  ],

  images: [
    '/images/pixie.png',
    '/images/pixie1.png',
    '/images/pixie2.png',
    '/images/pixie3.png',
    '/images/pixie4.png',
    
    
  ],

  github:
    'https://github.com/RasanjaliHerath/Pixie-Edit',

  demo:
    'https://updatelaunchingsoon.netlify.app/',

  videoDemo:
    'https://youtu.be/pixie-edit-demo',

  featured: true,
},
//sep
{
  id: 11,

  name: 'SEP - Student Exam Registration Portal',

  category: 'mobile',

  description:
    'A React Native mobile application that allows students to register for examinations through an interactive multi-screen workflow.',

  longDescription:
    'SEP (Student Exam Registration Portal) is a mobile application developed using React Native that enables students to securely log in, select examination subjects, and complete exam registration processes through a user-friendly mobile interface. Features include subject selection, personal information management, exam type selection such as Medical, Resit, and Update exams, payment information viewing, and smooth navigation between screens using React Navigation.',

  technologies: [
    'React Native',
    'Expo',
    'JavaScript',
    'React Navigation',
    'Stack Navigator',
    'CSS',
  ],

  images: [
    '/images/sep1.jpeg',
    '/images/sep2.jpeg',
    '/images/sep3.jpeg',
    '/images/sep4.jpeg',
    '/images/sep5.jpeg',
  ],

  github:
    'https://github.com/RasanjaliHerath/Student-Exame-Registration-App#sep---student-exam-registration-portal',

  demo:
    'https://updatelaunchingsoon.netlify.app/',

  videoDemo:
    'https://youtu.be/sep-demo',

  featured: false,
},
//ini
{
  id: 12,

  name: 'INIZIO Social UI',

  category: 'frontend',

  description:
    'A modern and responsive social media user interface with interactive feeds, stories, messaging, and theme customization.',

  longDescription:
    'INIZIO Social UI is a modern frontend social media interface built using HTML, CSS, and JavaScript. The project features a clean and responsive three-column layout consisting of a sidebar, interactive main feed, and messaging panel. Users can explore stories, image and video feeds, notifications, and search functionality for creators and messages. The application also includes theme customization options such as font size adjustment, color themes, and background personalization, creating a highly interactive and visually engaging social media experience.',

  technologies: [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Responsive Design',
    'Unicons',
  ],

  images: [
    '/images/inizio1.png',
    '/images/inizio2.png',
    '/images/inizio3.png',
    '/images/inizio4.png',
    '/images/inizio5.png',
  ],

  github:
    'https://github.com/RasanjaliHerath/INIZIO-Social-UI',

  demo:
    '/images/inisio.gif',

  videoDemo:
    'https://youtu.be/inizio-demo',

  featured: false,
},


{
  id: 14,

  name: 'Cowboy.com Clone',

  category: 'frontend',

  description:
    'A modern and responsive Cowboy.com landing page clone built with React, Vite, Tailwind CSS, and Material UI.',

  longDescription:
    'Cowboy.com Clone is a frontend web application developed to replicate the sleek and immersive design of the original Cowboy.com landing page. Built using React and Vite, the project focuses on modern UI/UX principles with smooth layouts, responsive sections, bold typography, and engaging hero video backgrounds. Tailwind CSS and Material UI were used to create visually polished components and adaptive responsive designs that provide a seamless browsing experience across desktop and mobile devices.',

  technologies: [
    'React',
    'Vite',
    'Tailwind CSS',
    'Material UI',
    'JavaScript',
    'Responsive Design',
    'CSS3',
  ],

  images: [
    '/images/cowboy.png',
    '/images/cowboy1.png',
    '/images/cowboy2.png',
    '/images/cowboy3.png',
    '/images/cowboy4.png',
    '/images/cowboy5.png',
  ],

  github:
    'https://github.com/RasanjaliHerath/Cowboy.com-Clone',

  demo:
    'https://cowboyclone.netlify.app',

  videoDemo:
    'https://youtu.be/cowboy-demo',

  featured: false,
},
{
  id: 15,

  name: 'Sri Lankan Job Type Prediction System',

  category: 'research',

  description:
    'A supervised machine learning system that predicts suitable job categories using Sri Lankan job market data.',

  longDescription:
    'This project applies Supervised Machine Learning techniques to predict suitable job categories for individuals based on demographic information, educational background, work experience, certifications, and skill sets. The system was developed to help students choose career paths, assist job seekers in identifying suitable roles, and analyze job market trends in Sri Lanka. The project uses a Random Forest Classifier trained on a Sri Lanka Job Market Dataset and includes data preprocessing, exploratory data analysis, feature scaling, model evaluation, and deployment using Streamlit for interactive predictions.',

  technologies: [
    'Python',
    'Pandas',
    'NumPy',
    'Matplotlib',
    'Seaborn',
    'Scikit-learn',
    'Streamlit',
    'Joblib',
    'Machine Learning',
    'Random Forest',
  ],

  images: [
    '/images/jobml1.png',
    '/images/jobml2.png',
  ],

  github:
    'https://github.com/RasanjaliHerath/Job-type-prediction-ml',

  demo:
    'https://updatelaunchingsoon.netlify.app/',

  videoDemo:
    'https://youtu.be/jobml-demo',

  featured: true,
},
],

  faqs: [
    {
      id: 1,
      question: 'What technologies do you specialize in?',
      answer: 'I specialize in full-stack development with expertise in React, PHP, MySQL, Spring Boot, and modern JavaScript frameworks. I have hands-on experience building responsive web applications, RESTful APIs, and database-driven systems.',
    },
    {
      id: 2,
      question: 'What is your development approach?',
      answer: 'I follow a user-centered design approach, focusing on creating intuitive interfaces and robust backend systems. I emphasize clean code, scalability, and performance optimization in all my projects.',
    },
    {
      id: 3,
      question: 'Do you work on mobile applications?',
      answer: 'Yes, I have experience developing mobile applications using React Native, which allows me to build cross-platform apps for both iOS and Android with a single codebase.',
    },
    {
      id: 4,
      question: 'How do you handle project timeline and deadlines?',
      answer: 'I maintain clear communication with clients and stakeholders, provide regular updates on project progress, and ensure timely delivery. I use agile methodologies to manage projects efficiently.',
    },
    {
      id: 5,
      question: 'Do you provide post-deployment support?',
      answer: 'Yes, I provide comprehensive post-deployment support including bug fixes, performance optimization, feature enhancements, and maintenance services to ensure your application runs smoothly.',
    },
    {
      id: 6,
      question: 'What is your experience with databases?',
      answer: 'I have experience with MySQL, SQL Server, and MongoDB. I can design efficient database schemas, write optimized queries, and implement proper data security measures.',
    },
  ],

  referees: [
    {
      name: 'Ms. W. Pirunthavi',
      title: 'Lecturer (Probationary)',
      institution: 'University of Vavuniya',
      email: 'pirunthaviw@vau.ac.com',
    },
    {
      name: 'Mr. Gawesh Prabhashwara',
      title: 'Engineer at Virtusa',
      qualification: 'B.Sc. [Special] (UWU), M.Sc. (Peradeniya) [Reading]',
      email: 'gawesh2020java@gmail.com',
    },
  ],
};
