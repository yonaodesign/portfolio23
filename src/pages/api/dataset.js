const ProjectsData = [
    {
    projectSlug: 'japanible',
    title: 'Japanible',
    type: 'personal',
    year: '2022',
    subtitle: 'Community Blogging Platform',
    hashtags: ['blog', 'react.js', 'firebase'],
    image: '/media/Group 15.png',
    annotation: 'Japanible is a web 2 public blogging platform, catering to individuals who have something to say or are interested about Japan, its culture, and language.',
    fullText: ``,
    projectDescription: '<p>Japanible is a web 2 public blogging platform, catering to individuals who have something to say or are interested about Japan, its culture, and language.</p>',
    technicalDescription: '<p>The goal of this project was to learn working with Firebase by creating a CRUD application utilizing React.js (CRA).</p>',
    reflections: `<p>During the course of this project, I gained hands-on experience working with React.js components, structure, and routing. I also gained proficiency in working with Firebase Auth, Firebase DB, serverless functions, and deployment. The functionality of Japanible includes the ability for users to sign in via OAuth (Google Provider), write and save drafts of articles, edit existing articles, write comments on articles, and browse articles created by other users.</p>
  
        <p>One of the key challenges I faced during the project was implementing a WYSIWYG editor. I am proud to say that I was able to successfully overcome this challenge and implement the editor effectively.</p>
        
        <p>Looking back, I realize that blog was not ideal project for this technology. A Create React App (CRA) is not an ideal solution for a blogging site that requires high SEO ranking. In retrospect, I would have used Next.js or Remix next time. Additionally, while Firebase provides a simple solution, I would have opted to implement Auth myself, used a database like Mongo or Postgres, and deployed the application to Render. I would also use packages such as react-hook-form or similar package to improve the form handling.</p>
        
        <p>Overall, Japanible was a challenging and rewarding project that allowed me to expand my skills in React.js and Firebase. I am excited to continue to develop my skills and take on new challenges in the future.</p>`,
    cta: [
      // { text: 'Video', href: '/img.png' },
      { text: 'Live site', href: 'https://japanible.com', aria: "Link to Japanible.com, that opens in a new window." },
    ],
    projectTagLine: 'Web2 platform for fans of Japan',
    projectAnnotation: 'Japanible is a web 2 public blogging platform, catering to individuals who have something to say or are interested about Japan, its culture, and language.',
    projectPurposeAndGoal: 'I always wanted to give back to the community. And as a portfolio project, I decided to make a bigger entertaining and educational site to learn Japanese. In the first stage I chose to make a blogging part that would be similiar to note.com in Japan, or Medium overseas, to attract people. In the second stage, I am currently working on a spaces repetition language learning part (similiar to Duolingo, Anki etc. using a supermemo algorithm).',
    projectTechnicalCommentary: 'For this originally portfolio project I chose React.js and Firebase, because I wanted to learn how to work with Firebase platform. However, I would have chosen Next.js and other storage and database nowadays. I want to rewrite the project into Next.js in the future, however right now, I am hosting it on Render.com and I am using Prerenderer for SEO.',
    projectProblemsAndSolutions: 'The biggest challenge was to implement a WYSIWYG editor for blog posts, I have tried many options out there and settled with this one. Current biggest challenge of this project is the server side rendering that is not included in CRA.',
    projectLessonsLearnt: '',
    projectMobilePhoto: ['shotjapanible1.webp', 'shotjapanible2.webp', 'shotjapanible4.webp'],
    projectDesktopPhoto: ['shotjapanible5.webp', 'shotjapanible3.webp'],
 
  },

  {
    projectSlug: 'zumen',
    title: 'zumen',
    type: 'work',
    year: '2023',
    subtitle: 'Web2 Community Blog',
    hashtags: ['blog', 'react.js', 'firebase'],
    image: '/media/Group 15.png',
    annotation: 'Japanible is a web 2 public blogging platform, catering to individuals who have something to say or are interested about Japan, its culture, and language.',
    fullText: ``,
    projectDescription: '',
    technicalDescription: '',
    reflections: ``,
    cta: [
      // { text: 'Video', href: '/img.png' },
      { text: 'Live site', href: 'https://japanible.com', aria: "Link to Japanible.com, that opens in a new window." },
    ],
    projectTagLine: 'An application for technical documentation.',
    projectAnnotation: 'A cloud-based PERN stack application for managing, archiving and sharing technical documentation for a sales team.',
    projectPurposeAndGoal: `The purpose of this application was to centralize the process of saving, renaming, storing, managing, retrieving, and sharing technical documentation received via email or fax. By providing a centralized platform, the application aimed to enhance the efficiency of the sales team's workflow.`,
    projectTechnicalCommentary: `For the core of the project, I selected React for the frontend, Node.js for the backend, and PostgreSQL for the database management. To ensure reliable and secure storage, I integrated AWS S3 as the storage provider.`,
    projectProblemsAndSolutions: `One of the major challenges I encountered was generating thumbnails of PDF files using external libraries that utilized C++. Through dedicated study and effort, I successfully resolved this issue on both MacOS and Windows platforms.

    `,
    projectLessonsLearnt: 'During the project, I gained valuable insights and skills, such as working with file manipulation using blobs, filtering large datasets efficiently, and integrating AWS services into the application.',
    projectMobilePhoto: [],
    projectDesktopPhoto: ['shotzumen1.webp','shotzumen2.webp','shotzumen3.webp','shotzumen4.webp'],
  },
  {
    projectSlug: 'crm',
    title: 'crm',
    type: 'work',
    year: '2023',
    subtitle: 'crm',
    hashtags: ['blog', 'react.js', 'firebase'],
    image: '/media/Group 15.png',
    annotation: 'Japanible is a web 2 public blogging platform, catering to individuals who have something to say or are interested about Japan, its culture, and language.',
    fullText: ``,
    projectDescription: '',
    technicalDescription: '',
    reflections: ``,
    cta: [
      // { text: 'Video', href: '/img.png' },
      { text: 'Live site', href: 'https://japanible.com', aria: "Link to Japanible.com, that opens in a new window." },
    ],
    projectTagLine: 'Customers on a map',
    projectAnnotation: 'An application for managing customers interactions, and aggregating data on a map.',
    projectPurposeAndGoal: `This application aimed to address the challenge of effectively managing and visualizing a large volume of leads and customer data. By providing a map-based interface, sales representatives could conveniently view nearby locations and access essential information such as sales reports and quotes, thereby empowering them in their day-to-day activities.`,
    projectTechnicalCommentary: `To develop this project, I opted for React as the frontend framework due to its component-based architecture, enabling the creation of reusable UI components. For handling relational data, PostgreSQL was chosen as the database management system. Additionally, the Google Maps API was utilized to integrate maps and location-related features into the application.`,
    projectProblemsAndSolutions: `The initial challenges I faced included setting up authentication and efficiently rendering thousands of markers on the Google Maps API. Overcoming these hurdles allowed me to enhance the application's functionality and create a seamless user experience.`,
    projectLessonsLearnt: '',
    projectMobilePhoto: ['crm.webp'],

  },
  {
    projectSlug: 'backslack',
    title: 'crm',
    type: 'work',
    year: '2023',
    subtitle: 'crm',
    hashtags: ['blog', 'react.js', 'firebase'],
    image: '/media/Group 15.png',
    annotation: '',
    fullText: ``,
    projectDescription: '',
    technicalDescription: '',
    reflections: ``,
    cta: [
      // { text: 'Video', href: '/img.png' },
      { text: 'Live site', href: 'https://japanible.com', aria: "Link to Japanible.com, that opens in a new window." },
    ],
    projectTagLine: 'Back-up UI for Slack API',
    projectAnnotation: 'An UI for Slack backup through Slack Bot; built as an alternative to paid applications.',
    projectPurposeAndGoal: 'The purpose of this application was to provide a solution for backing up one Slack workplace without relying on paid apps or manual chat copying.',
    projectTechnicalCommentary: 'Due to time constraints, I opted to develop a Slack bot with necessary OAuth permissions, allowing data retrieval from Slack.',
    projectProblemsAndSolutions: `The primary challenge in this project was deciphering the structure of the Slack API. Particularly, fetching data from private channels proved to be a struggle. By seeking assistance on platforms like Stack Overflow, I was able to find answers outside the official documentation, enabling the successful completion of this feature.`,
    projectLessonsLearnt: 'Effective communication with backend engineers played a crucial role throughout the project.'
  },
  {
    projectSlug: 'b2b',
    title: 'crm',
    type: 'work',
    year: '2023',
    subtitle: 'crm',
    hashtags: ['blog', 'react.js', 'firebase'],
    image: '/media/Group 15.png',
    annotation: '',
    fullText: ``,
    projectDescription: '',
    technicalDescription: '',
    reflections: ``,
    cta: [
      // { text: 'Video', href: '/img.png' },
      { text: 'Live site', href: 'https://japanible.com', aria: "Link to Japanible.com, that opens in a new window." },
    ],
    projectTagLine: 'Business Matching Platform',
    projectAnnotation: 'A platform for business matching based on data aggregated from government APIs and user generated content.',
    projectPurposeAndGoal: 'In Japan, numerous business matching and comparison platforms exist (such as Emidas, iPros, Metoree, etc.). However, I found them unintuitive and lacking essential functions. The goal of this project is to create a competitor platform where users can find businesses based on legal ID, product, methodology, and industry categories. The platform provides extensive filtering options and allows users to create custom lists.',
    projectTechnicalCommentary: 'For this project, I chose Next.js and a NoSQL database.',
    projectProblemsAndSolutions: `The current challenge in this project revolves around retrieving and linking data from two main Japanese governmental APIs while maintaining optimal rendering performance.

    `,
    projectLessonsLearnt: 'Continuous learning remains a key aspect of my development journey.'
  },
  {
    title: 'SMOSS',
    projectSlug: 'smoss',
    type: 'business',
    year: '2021',
    subtitle: 'No-code Production Management System',
    hashtags: ['no-code', 'reallifeproject'],
    image: '/media/smoss.png',
    projectDescription: `<p>
    
    The system is designed to streamline and automate the
    production process, making it more efficient and effective. During this project, I gained
    experience in <b>communicating with clients</b> to understand their needs and requirements. I
    also learnt about the concepts of <b>ERP models</b>, data flow, and databases basics. Additionally,
    I had the opportunity to work with bar and QR codes and gained experience in beta testing,
    customization, and after-service.
  
    </p>
  `,
    technicalDescription: `<p>
    This project is an in-house production management system and production system that I have
    developed using <b>Google Appsheet</b> as an UI and <b>Google Sheets</b> as an database. </p>`,
  
  
    reflections: `<p>
    The technical challenges that I faced during this project were related to my lack of
    knowledge on how to make apps. To overcome this, I researched the best tool and learnt it. I
    found it to be fun and this motivated me to learn how to code. The target audience for this
    project was to make an app that would connect CS, sales, procurement and manufacturing line
    in real-time without telephone. The app is still being used by one of the factories after
    two years. And it was developed by myself. In future I plan to redo the application as a web
    app instead of a no-code base.
    </p>`,
    fullText: `<p>
    This project is an in-house production management system and production system that I have
    developed using <b>Google Appsheet</b> as an UI and <b>Google Sheets</b> as an database. 
    The system is designed to streamline and automate the
    production process, making it more efficient and effective. During this project, I gained
    experience in <b>communicating with clients</b> to understand their needs and requirements. I
    also learnt about the concepts of <b>ERP models</b>, data flow, and databases basics. Additionally,
    I had the opportunity to work with bar and QR codes and gained experience in beta testing,
    customization, and after-service.
  
  </p>
  
  <p>
    One of the key is its state management, which allows users to check current orders, their
    specifications in real-time, and control the state at various points such as processing,
    quality control, and shipping. The system also includes a <b>two-way communication system
    through a reporting system, and a QR code output on printed documents linked to the database. </b>
  </p>
  
  <p>
    The technical challenges that I faced during this project were related to my lack of
    knowledge on how to make apps. To overcome this, I researched the best tool and learnt it. I
    found it to be fun and this motivated me to learn how to code. The target audience for this
    project was to make an app that would connect CS, sales, procurement and manufacturing line
    in real-time without telephone. The app is still being used by one of the factories after
    two years. And it was developed by myself. In future I plan to redo the application as a web
    app instead of a no-code base.
  </p>
  <p><i>I don't have permission to link the project, post code, or a video. I'm attaching a
        screenshot, that has been shared in mass media.</i></p>`,
    cta: [],
    projectTagLine: 'My Starting Line',
    projectAnnotation: 'A no-code application that helps managing production in-realish time with step-by-step system.',
    projectPurposeAndGoal: `This application marked the beginning of my journey as a developer. It originated from a simple question posed to me: 
    <h4>"Jonas, couldn't you find a way to make this easier?"</h4>
    Rather than creating another Excel macro sheet, I set out to explore the best solution. Over the course of a month, I built an MVP while continuously collaborating with over five individuals to refine the features. The challenge of finding the optimal solution within a specific timeframe was energizing, and the eventual adoption of the application by teams for over a year and a half was highly rewarding. Although the application was eventually phased out, the positive feedback from colleagues and friends, who could no longer imagine working without it, remains a cherished memory.
    `,
    projectTechnicalCommentary: 'Due to my limited technical knowledge at the time, I chose a no-code application as the fastest and most efficient solution, akin to Excel macros. I selected AppSheet for its intuitive user experience. Since AppSheet utilizes Google APIs, integrating Google Sheets as a database for the project was seamless.',
    projectProblemsAndSolutions: `One of the technical challenges I faced during this project was my lack of knowledge in app development. To overcome this hurdle, I dedicated myself to researching and learning the best tools available. The target audience for this project was to create an app that could connect customer service, sales, procurement, and the manufacturing line in real-time, reducing the reliance on telephonic communication. The app continued to be used by two factories for almost two years.

    `,
    projectLessonsLearnt: 'Developing no-code applications provided me with a simplified understanding of full-stack development, including data structuring and view creation. Additionally, the availability of documentation and forums discussing features such as barcode scanning prepared me for real-life development challenges.'
  },
  {
    title: 'SSKS',
    projectSlug: 'ssks',

    type: 'business',
    year: '2021',
    subtitle: 'No-code Procurement Management System',
    hashtags: ['no-code', 'reallifeproject'],
    image: '/media/Group 3.webp',
    projectDescription: `<p>This project is an in-house procurement management system that I have developed using Google
    Appsheet. It is using a ticket-based confirmation system for in-house order flow management with notifications through Slack API.
    This system also includes tracking of inbound and outbound amount of resources with
    timestamps, and checking the amount of resources in the warehouse in real-time.</p>`,
    technicalDescription: `<p>Google Appsheet, Google Sheets, Slack API.</p>`,
    reflections: `<p>Having limited options with no-code solutions  , I decided to learn javascript and make my own apps.</p>`,
    fullText: `<p>
    This project is an in-house procurement management system that I have developed using Google
    Appsheet. It is using a ticket-based confirmation system for in-house order flow management with notifications through Slack API.
    This system also includes tracking of inbound and outbound amount of resources with
    timestamps, and checking the amount of resources in the warehouse in real-time.
  </p>
  <p><i>I don't have permission to link the project, post code, screenshot or a video.</i></p>`,
    cta: [],
    projectTagLine: '',
    projectAnnotation: '',
    projectPurposeAndGoal: '',
    projectTechnicalCommentary: '',
    projectProblemsAndSolutions: '',
    projectLessonsLearnt: ''
  },
  {
    title: 'Business Site',
    projectSlug: 'sensyo',

    type: 'business',
  
    year: '2022',
    subtitle: 'Redesign',
    hashtags: ['reallifeproject ', 'headlesscms ', 'html ', 'css ', 'vanillajs', '3rdpartyjs'],
    image: '/media/sensyo.png',
  
    projectDescription: `<p>
    This project was a redesign of the main sales channel website for an
    Osaka-based Metal Surface Finisher. The goal of the project was to
    give the website a more modern feel and have a more global appeal.
    </p>
    
    <p>
    I was the sole developer responsible for redesigning the previous
    website, which had a heavy focus on human resources and was
    primarily geared towards job seekers. The new website, on the other
    hand, has a more client-focused approach, highlighting the services
    and technologies offered by the Metal Surface Finisher.
  
  </p>
  
  `,
    technicalDescription: `<p>
    HTML, CSS, Vanilla JS, MicroCMS (Japanese Headless CMS).
    </p>`,
    reflections: `<p>
    In addition to the website redesign, a new logo was also needed for
    the company. I had a help with the logo and we worked together to
    create a fresh, modern design.
  
  </p>
  <p>
    To achieve this, I have implemented a Japanese headless MicroCMS,
    making it easier for employees to upload news and updates to the
    website.
  
  </p>
  <p>
    Overall, the redesign of the website was a challenging but rewarding
    experience, and I am proud of the final product.
  
  </p>`,
  
  
  
    fullText: `<p>
    This project was a redesign of the main sales channel website for an
    Osaka-based Metal Surface Finisher. The goal of the project was to
    give the website a more modern feel and have a more global appeal.
    The technology stack used for this project was HTML, CSS, and
    Vanilla Javascript.
  
  </p>
  <p>
    I was the sole developer responsible for redesigning the previous
    website, which had a heavy focus on human resources and was
    primarily geared towards job seekers. The new website, on the other
    hand, has a more client-focused approach, highlighting the services
    and technologies offered by the Osaka-based Metal Surface Finisher.
  
  </p>
  <p>
    In addition to the website redesign, a new logo was also needed for
    the company. I had a help with the logo and we worked together to
    create a fresh, modern design.
  
  </p>
  <p>
    To achieve this, I have implemented a Japanese headless MicroCMS,
    making it easier for employees to upload news and updates to the
    website.
  
  </p>
  <p>
    Overall, the redesign of the website was a challenging but rewarding
    experience, and I am proud of the final product.
  
  </p>
  `,
    cta: [{ text: 'Live site', href: 'http://www.sensyo-ltd.co.jp', aria: "Link to Japanese only website of Japanese Manufacturer called Sensyo Company Limited. Link opens in a new window." },
    { text: 'Web archive', href: 'http://web.archive.org/web/20230401000722/http://sensyo-ltd.co.jp/', aria: "Link to an archived version of Japanese only website of Japanese Manufacturer called Sensyo Company Limited. Link opens in a new window." },],
    projectTagLine: '',
    projectAnnotation: '',
    projectPurposeAndGoal: `The goal of this project was to give the existing website a more modern and globally appealing look. Additionally, the project aimed to enable news posting functionality for the team. As the sole developer responsible for the redesign, I shifted the website's focus from primarily targeting job seekers to adopting a more client-focused approach that highlighted services and technologies.

    In addition to the website redesign, I collaborated with another person to create a fresh and modern logo for the company.`,
    projectTechnicalCommentary: 'For this project, I relied on HTML, CSS, and Vanilla JavaScript due to their simplicity and the possibility of enabling non-technical team members to contribute to website development.',
    projectProblemsAndSolutions: 'To ensure easy content editing and allow any team member to post news, I implemented a vanilla stack. Additionally, I incorporated a headless MicroCMS for seamless content management.',
    projectLessonsLearnt: '',
    projectMobilePhoto: ['shotss1.webp', 'shotss2.webp'],
    projectDesktopPhoto: [],
  
  },
  
  
  
  
  {
    title: 'Product Landing Page',
    projectSlug: 'purcher',

    type: 'business',
    
  
    year: '2023',
    subtitle: 'Design',
    hashtags: ['spa ', 'reallifeproject ', 'next.js ', 'typescript ', 'styled-components ', 'vercel '],
    image: '/media/PC.png',
  
    projectDescription: `<p>
    This project is a Single Page Application (SPA) for a product, designed to
    provide a simple and user-friendly way to showcase the product and its features.
    </p><p>
    The goal of this project was to create an easy-to-use and visually appealing
    interface for the product, with a focus on providing a streamlined user
    experience. The application is designed to be fast and responsive, providing
    users with quick access to important information about the product and its
    features.
    </p>`,
    technicalDescription: `<p>
    Next.js, Styled-components for styling, Nodemail for sending emails.
    </p>`,
    reflections: `<p>
    The application was built using Next.js and React-Hook-Form, a package for
    easily creating forms in React. During this project, I also learnt how to send
    emails with Node.js and some basics of TypeScript.
    The application also integrates with the Nodemail package, allowing users to
    send messages from the contact form and orders from the order form directly to
    the company's mailbox.
    </p>
    <p>
    Overall, this project was an excellent opportunity to learn and work with new
    technologies, as well as to improve my skills in creating user-friendly
    interfaces and learn how to send emails with node.js and some basics of
    typescript.
  </p>`,
  
  
    fullText: `<p>
    This project is a Single Page Application (SPA) for a product, designed to
    provide a simple and user-friendly way to showcase the product and its features.
    The application was built using Next.js and React-Hook-Form, a package for
    easily creating forms in React. During this project, I also learnt how to send
    emails with Node.js and some basic TypeScript.
    The application also integrates with the Nodemail package, allowing users to
    send messages from the contact form and orders from the order form directly to
    the company's mailbox.
  </p>
  <p>
    I've also used Styled-Components, a popular package for styling react
    components, and other packages to improve the overall design of the application.
    The design is fully responsive, which means that it looks and works great on all
    devices and screen sizes.
  </p>
  <p>
    The goal of this project was to create an easy-to-use and visually appealing
    interface for the product, with a focus on providing a streamlined user
    experience. The application is designed to be fast and responsive, providing
    users with quick access to important information about the product and its
    features.
  </p>
  <p>
    Overall, this project was an excellent opportunity to learn and work with new
    technologies, as well as to improve my skills in creating user-friendly
    interfaces and learn how to send emails with node.js and some basics of
    typescript.
  </p>
  `,
  
    cta: [{ text: 'Live site', href: 'http://www.cher.jp/en', aria: "Link to a landing page of a brand called PUR CHER. Link opens in a new window." },],
    projectTagLine: '',
    projectAnnotation: '',
    projectPurposeAndGoal: 'The purpose of this project was to create a presentation page specifically targeting English-speaking international buyers from hotels and gift shops. The SPA design aimed to provide a simple and user-friendly way to showcase the product and its features. Additionally, the website included a Nodemailer contact form, allowing buyers to directly place orders on the website.',
    projectTechnicalCommentary: 'To build this project, I utilized Next.js, React-Hook-Form, and Styled-Components for the frontend. For the contact form, Nodemailer was implemented. Moreover, I challenged myself by incorporating TypeScript into the project.',
    projectProblemsAndSolutions: '',
    projectLessonsLearnt: 'Throughout this project, I acquired knowledge on sending emails with Node.js and basic TypeScript usage.',
    projectMobilePhoto: ['shotcher1.webp', 'shotcher2.webp'],
    projectDesktopPhoto: [],
  }
  ]

module.exports = ProjectsData