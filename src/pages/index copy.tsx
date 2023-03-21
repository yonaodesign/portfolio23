import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import styled from 'styled-components'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ProjectCard from './components/ProjectCard'
import parser from "html-react-parser";


const LMAO = styled.div`
background-color: white;
width: 400px;
height: 400px;
z-index: -9;
position: absolute;
border-radius: 500px;`

const GRAD = styled.div`
background: radial-gradient(#d9d9d9 10%, transparent 60%);
width: 600px;

height: 600px;
z-index: -10;
position: absolute;
border-radius: 50px;`

const BG = styled.div`
position: fixed;
left: 0px;
right:0px;
top:0px;
bottom:0px;
z-index: -10;
background: url("./BG.png") no-repeat fixed right;
filter: grayscale(1);
`

const Wrapper = styled.div`
padding: 0 16px;
min-height: 100vh;
min-width: 100vw;
display: flex;
flex-direction: column;
justify-content: space-between;
color: #001AFF;

p {font-size: 16px;
  font-weight: 400;
  line-height: 27.2px;
  margin-bottom: 16px}
`

const Main = styled.main`
width: 100%;
max-width: 1000px;
margin: 0px auto;`


const TagLine = styled.h1`
font-size: 68px;
font-weight: 400;
line-height: 72px;
font-family: trap;
font-weight: 600;
`
const SubTagLine = styled(TagLine)`
font-size: 32px;
font-weight: 400;
line-height: 48px;
`

const NavBar = styled.div`
font-family: trap;`




const ProjectsData = [{
  title: 'Japanible<br/>Community Blogging Platform',
  hashtags: ['blog', 'react.js', 'firebase'],
  image: '/media/Group 15.png',
  fullText: `<div>
  <p>Japanible is a community blogging platform that I created as a solo project,
  catering to individuals interested in Japan, its culture, and language. The
  <b>goal
      of this project was to learn working with Firebase by creating a CRUD
      application utilizing React.js</b> (CRA).
</p>
  <iframe width="100%" height="500px" src="https://www.youtube-nocookie.com/embed/0mPeox_P5GQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


                                    <p>
                                        During the course of this project, I gained hands-on experience working with
                                        React.js components, structure, and routing. I also gained proficiency in
                                        working with <b>Firebase Auth,
                                            Firebase DB, serverless functions, and deployment</b>. The functionality of
                                        Japanible includes the ability for users to
                                        sign in via OAuth (Google Provider), write and save drafts of articles, edit
                                        existing
                                        articles, write comments on articles, and browse articles created by other
                                        users.
                                    </p>
                                    <p>
                                        One of the key challenges I faced during the project was implementing a
                                        <b>WYSIWYG
                                            editor</b>. I am proud to say that I was able to successfully overcome this
                                        challenge and implement the editor effectively.
                                    </p>
                                    <p>
                                        Looking back, I realize that blog was not ideal project for this technology. A
                                        Create React App (CRA) is not an ideal solution for a blogging site that
                                        requires high SEO ranking. In retrospect, <b>I would have used Next.js or Remix
                                            next time</b>.
                                        Additionally, while Firebase provides a simple solution, I would have opted to
                                        implement Auth myself, used a database like Mongo or Postgres, and deployed the
                                        application to Render. I would also use packages such as react-hook-form or
                                        similar package to improve the form handling.
                                    </p>
                                    <p>
                                        Overall, Japanible was a challenging and rewarding project that allowed me to
                                        expand my skills in React.js and Firebase. I am excited to continue to develop
                                        my skills and take on new challenges in the future.
                                    </p>
        </div>`,
  cta: [{ text: 'Watch Video', href: '/img.png' }, { text: 'Go to live website', href: 'https://japanible.com' },]
},
{
  title: 'Project: RESHAPE<br/>B2B Look-Up Platform',
  hashtags: ['b2b', 'react.js', 'node.js', 'restapi', 'vercel'],
  image: '/media/RESHAPE.png',
  fullText: `<div>


  <p>RESHAPE is a B2B platform that I am currently developing as a solo project. The
      platform is currently in its
      initial stage of development, and many functionalities are still missing.
      However, the goal of the platform
      is to assist Japanese companies in connecting with other companies and clients.
      The platform will offer a
      comprehensive list of all Japanese companies, organized by their VAT numbers and
      categorized into different
      branches of industries, allowing companies to easily find their best match. The
      project is using <b>Node.js</b> as
      a server and <b>Vercel</b> as a deployment environment.






  </p>
  <p>

      One of the key objectives of this project was to gain experience in working with
      <b>third-party REST APIs</b> and
      <b>handling large collections of data</b>. The platform utilizes official
      national
      sources to gather information
      about companies, providing users with accurate and up-to-date information. Users
      will be able to search for
      a company using their VAT number or company name, and can access detailed
      information about the company
      including CEO, funds, and fields of operation. Additionally, users will be able
      to claim a company and
      control it, editing details and adding a company logo.

  </p>
  <p>
      Another key objective of this project is to gain experience in <b>localization
          strategies</b>. The platform will
      offer support for multiple languages, allowing users to navigate and use the
      platform in their preferred
      language.

  </p>
  <p>
      Users will also be able to blog on different topics and industries, providing
      valuable insights and
      information to the community.


  </p>
  <p>
      One of the key challenges I faced during the project was ensuring scalability
      and performance. In the
      future, I plan to do a more thorough research on the best technology stack to
      use and be more mindful of
      these factors from the start, rather than having to optimize later on.
      Additionally, I plan to implement a
      more robust and efficient way to handle data and user authentication.

  </p>
  <p>
      Overall, I am excited about the potential of this project and am looking forward
      to continuing to develop
      and improve it in the future.
  </p>

</div>`,
  cta: []
},
{
  title: 'Project: SMOSS<br/>No-code Production Management System',
  hashtags: ['no-code', 'reallifeproject'],
  image: '/media/smoss.webp',
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
  cta: []
},
{
  title: 'Project: SSKS<br/>No-code Procurement Management System',
  hashtags: ['no-code', 'reallifeproject'],
  image: null,
  fullText: `<p>
  This project is an in-house procurement management system that I have developed using Google
  Appsheet. It is using a ticket-based confirmation system for in-house order flow management with notifications through Slack API.
  This system also includes tracking of inbound and outbound amount of resources with
  timestamps, and checking the amount of resources in the warehouse in real-time.
</p>
<p><i>I don't have permission to link the project, post code, screenshot or a video.</i></p>`,
  cta: []
},




{
  title: 'Project: Corporate Site<br/>Redesign of a Corporate Site',
  hashtags: ['reallifeproject ', 'headlesscms ', 'html ', 'css ', 'vanillajs', '3rdpartyjs'],
  image: '/media/sensyo.webp',
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
  cta: [{ text: 'Go to live website', href: 'http://www.sensyo-ltd.co.jp' }, { text: 'Web Archive', href: 'http://web.archive.org/web/20230401000722/http://sensyo-ltd.co.jp/' },]

},




{
  title: 'Project: Product Page<br/>No-code Procurement Management System',
  hashtags: ['spa ', 'reallifeproject ', 'next.js ', 'typescript ', 'styled-components ', 'vercel '],
  image: '/media/PC.png',
  fullText: `<p>
  This project is a Single Page Application (SPA) for a product, designed to
  provide a simple and user-friendly way to showcase the product and its features.
  The application was built using Next.js and React-Hook-Form, a package for
  easily creating forms in React. During this project, I also learnt how to send
  emails with Node.js and some basics of TypeScript.
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

  cta: [{ text: 'Go to live website', href: 'http://www.sensyo-ltd.co.jp' }, { text: 'Web Archive', href: 'http://web.archive.org/web/20230401000722/http://sensyo-ltd.co.jp/' },]
},

{
  title: 'Project: ERP<br/>ERP Data Aggregation Platform',
  hashtags: ['hobby ', 'erp ', 'crm ', 'spa ', 'styled-components ', 'vercel '],
  image: '/media/erp.webp',
  fullText: `<p>
  This project is a web application that I have developed to aggregate company's data.
  It is an abandoned project but I have learned a lot from it. The purpose of this
  project was to learn how to work with REST API, databases, tables, and admin rights.
  During this project, I gained experience in setting up databases and working with
  the MVC (Model-View-Controller) model. One of the things that I am proud of in this
  project is the idea itself. However, as it is an abandoned project, I did not get to
  finish the MVP (Minimum Viable Product) of the project and add more functionalities
  to it. But the knowledge and skills that I have acquired from this project will be
  beneficial for my future projects.
</p>
`,
  cta: [{ text: 'Go to live website', href: 'https://buyers.cher.jp' },]

},

]

const inter = Inter({ subsets: ['latin'] })

export default function Projects() {
  return (
    <>
      <Head>
        <title>Jonas VOLNY</title>
        <meta name="description" content="Jonas Volny's Personal Website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Wrapper>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');
        </style>

        <Main>
          <div style={{ marginTop: 12, display: 'flex', width: '100%', justifyContent: 'space-between', fontSize: '24px', alignItems: 'center' }}>
            <NavBar style={{ width: '50%', display: 'flex' }}>intro <hr style={{ backgroundColor: 'black', border: 'none', height: '1px', width: '100%', marginLeft: 6, marginRight: 6 }}></hr></NavBar>

            <NavBar style={{ width: '50%', display: 'flex', justifyContent: 'space-between' }}>
              {['intro', 'about', 'projects', 'resume', 'contact'].map((e, i) => (<span key={"menuItem_"+i}>{e}</span>))}</NavBar>
          </div>


          <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>


            <TagLine style={{ width: '50%', marginTop: 112, marginBottom: 112, lineHeight: 1.2 }}><LMAO></LMAO><GRAD style={{ transform: 'translateY(-100px)' }}></GRAD>Creative<br />
              Full Stack<br />
              Software<br />
              Developer<br />
              & Linguist</TagLine>

            <span style={{ fontSize: '30px', width: '50%', fontFamily: 'Inter' }}>Hi, don't you feel like making our world a better place today?</span>
          </div>


          <div style={{ marginTop: 12, display: 'flex', width: '100%', justifyContent: 'space-between', fontSize: '24px', alignItems: 'center' }}>
            <NavBar style={{ width: '100%', display: 'flex' }}>about <hr style={{ backgroundColor: 'black', border: 'none', height: '1px', width: '100%', marginLeft: 6, marginRight: 6 }}></hr></NavBar>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <div style={{ width: '50%' }}>
              <TagLine style={{ marginTop: 112, marginBottom: 112, lineHeight: 1.2 }}>
                Jonas <br />
                Volny</TagLine>
            </div>
            <span style={{ fontSize: '30px', width: '50%', fontFamily: 'Inter' }}>Hello, I’m Jonas.<br />
              I help small and middle sized<br />
              businesses to take on the world.</span>
          </div>


          <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'flex-start' }}>
            <div>
              <span>
                <p>Creative Skills<br />・Adobe Photoshop<br />・Figma<br />・Davinci Resolve</p>


                <p>Technical Skills<br />・React.js<br />・Node.js<br />・PostgreSQL / MongoDB<br />・Firebase / Vercel / Render.com<br />・Javascript</p>

                <p>Language Skills<br />・English / Japanese / Czech</p></span>
            </div>


            <p style={{ width: '50%', fontFamily: 'Inter' }}>Hello, I’m Jonas.<br />
              I am a creative full stack developer with a diverse background in art, languages, and manufacturing industry.

              I specialize in building applications in a Javascript based  environment using technologies like React.js, Node.js, databases like PostgreSQL, MongoDB or Firebase.

              I have experience with RPA, SEO, and low-code. My Adobe Photoshop, Figma, and video editing skills allow me to create visually appealing designs and engaging videos that can be used to promote my clients work.

              I am fluent in English, Japanese, and Czech, which allows me to communicate effectively with a diverse range of clients and colleagues.

              I am currently experimenting with web3 and code-generated art. I am constantly exploring the latest trends and new technologies in these areas.

              Feel free to contact me, if you have any questions here or on Twitter.

              Best regards,
              Jonas</p>
          </div>
          <div style={{ marginTop: 12, display: 'flex', width: '100%', justifyContent: 'space-between', fontSize: '24px', alignItems: 'center' }}>
            <NavBar style={{ width: '100%', display: 'flex' }}>projects <hr style={{ backgroundColor: 'black', border: 'none', height: '1px', width: '100%', marginLeft: 6, marginRight: 6 }}></hr></NavBar>
          </div>
          <div style={{ marginTop: 112, marginBottom: 112, lineHeight: 1.2, fontSize: 42, fontFamily: 'trap', fontWeight: 100 }}>
            {['1/ Japanible - Community Hub',
              '2/ SMOSS - No-code Production Management System',
              '3/ SSKS - No-code Procurement Management System',
              '4/ Product Landing Page for B2B Buyers',
              '5/ Corporate Site',].map((e, index) => (<div key={"projectItem_"+index}>{e}</div>))}
          </div>
          <div style={{ marginTop: 12, display: 'flex', width: '100%', justifyContent: 'space-between', fontSize: '24px', alignItems: 'center' }}>
            <NavBar style={{ width: '100%', display: 'flex' }}>projects <hr style={{ backgroundColor: 'black', border: 'none', height: '1px', width: '100%', marginLeft: 6, marginRight: 6 }}></hr></NavBar>
          </div>

          {ProjectsData.map((e) => (<ProjectCard title={e.title} hashtags={e.hashtags} image={e.image} fullText={e.fullText} cta={e.cta} />))}
        </Main>
        <Footer />
      </Wrapper>
    </>
  )
}
