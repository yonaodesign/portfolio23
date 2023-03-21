import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import styled from 'styled-components'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ProjectCard from './components/ProjectCard'
import parser from "html-react-parser";

import {FaLinkedinIn, FaInstagram, FaDribbble, FaGithub} from 'react-icons/fa'
import { useEffect, useState } from 'react'

const ChangingDirection = () => {
  let value = '100px';
  return value
}

const ForegroundBlur = styled.div`
display: none;
background-color: #001FAA;
opacity: 0.5;
z-index: 10;
position: fixed;
left: 0;
top: 0;
bottom: 0;
right: 0;
backdrop-filter: blur(10px);
`

const BG_GraphicSphere = styled.div`
background-color: white;
width: 100vw;
height: 100vw;
z-index: -9;
position: absolute;
border-radius: 500px;
transform: translateX(50%)
` 

const BG_GraphicSphereShadow = styled.div`
background: radial-gradient(#d9d9d9 10%, transparent 60%);
width: 120vw;
height: 120vw;
z-index: -10;
position: absolute;
border-radius: 50px;

`

const Wrapper = styled.div`
font-family: inter;
padding: 0 32px;
min-height: 100vh;
min-width: 100vw;
display: flex;
flex-direction: column;
justify-content: space-between;
color: #001AFF;
font-size: 18px;

p {
  font-weight: 400;
  line-height: 27.2px;
  margin-bottom: 16px}
`

const Main = styled.main`
width: 100%;
max-width: 1000px;
margin: 0px auto;`


const TagLine = styled.h1`
font-size: 50px;
font-weight: 400;
line-height: 72px;
font-family: trap;
font-weight: 600;

@media (min-width: 1000px) {
  font-size: 100px;
  }` 

const DynamicLine = styled.hr`
background-color: #001AFF;
border: none;
height: 1px;
margin-top: auto;
width: 100%;
margin-left: 32px;
margin-right: -32px;
`

const DynamicLineRunningLeft = styled(DynamicLine)`
margin-left: -32px;
margin-right: 32px;`

const NavBar = styled.div`
color: #001AFF;`

const OnlyOnBigScreenNavBar = styled.div`
display: none;
@media (min-width: 1000px) {
  display: block;
  }`

  const OnlyOnSmallScreenNavBar = styled.div`
  display: block;
  @media (min-width: 1000px) {
    display: none;
    }` 

const SplitBar = styled(NavBar)`
width: 100%;
display: flex;
margin-top: 100px;
margin-bottom: 100px;

@media (min-width: 1000px) {
  font-size: 50px;
  }`

const Button = styled.button`
cursor: pointer;
min-width: 36px;
border: none;
background-color: #001AFF;
border-radius: 50px;
height: 36px;
padding: 0 10px;
display: flex;
align-items: center;
justify-content: center;
margin-right: 18px;
color: #fff;

@media (min-width: 1000px) {
  font-size: 20px;
  }`

const ToolBox = styled.div`
display: flex;
flex-direction: column;
@media (min-width: 1000px) {
flex-direction: row;
justify-content: space-between;
}`

const ProjectsData = [{
  title: 'Japanible',
  subtitle: 'Community Blogging Platform',
  hashtags: ['blog', 'react.js', 'firebase'],
  image: '/media/Group 15.png',
  annotation: 'Japanible is a web 2 public blogging platform, catering to individuals who have something to say or are interested about Japan, its culture, and language.',
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
  cta: [{ text: 'Video', href: '/img.png' }, { text: 'Live site', href: 'https://japanible.com' },]
},
{
  title: 'SMOSS',
  subtitle: 'No-code Production Management System',
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
  title: 'SSKS',
  subtitle: 'No-code Procurement Management System',
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
  title: 'Business Presentational Web',
  subtitle: 'Redesign of a Corporate Site',
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
  cta: [{ text: 'Live site', href: 'http://www.sensyo-ltd.co.jp' }, { text: 'Web archive', href: 'http://web.archive.org/web/20230401000722/http://sensyo-ltd.co.jp/' },]

},




{
  title: 'Landing Page',
  subtitle: 'Product Page',
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

  cta: [{ text: 'Live site', href: 'http://www.sensyo-ltd.co.jp' }, { text: 'Web archive', href: 'http://web.archive.org/web/20230401000722/http://sensyo-ltd.co.jp/' },]
},

// {
//   title: 'Project: ERP<br/>ERP Data Aggregation Platform',
//   hashtags: ['hobby ', 'erp ', 'crm ', 'spa ', 'styled-components ', 'vercel '],
//   image: '/media/erp.webp',
//   fullText: `<p>
//   This project is a web application that I have developed to aggregate company's data.
//   It is an abandoned project but I have learned a lot from it. The purpose of this
//   project was to learn how to work with REST API, databases, tables, and admin rights.
//   During this project, I gained experience in setting up databases and working with
//   the MVC (Model-View-Controller) model. One of the things that I am proud of in this
//   project is the idea itself. However, as it is an abandoned project, I did not get to
//   finish the MVP (Minimum Viable Product) of the project and add more functionalities
//   to it. But the knowledge and skills that I have acquired from this project will be
//   beneficial for my future projects.
// </p>
// `,
//   cta: [{ text: 'Live site', href: 'https://buyers.cher.jp' },]

// },

]

const inter = Inter({ subsets: ['latin'] })

export default function Projects() {
  const [scrollPosition, setScrollPosition] = useState<Number>(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  return (
    <>
      <Head>
        <title>Jonas VOLNY</title>
        <meta name="description" content="Jonas Volny's Personal Website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Wrapper>
        <ForegroundBlur/>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');
        </style>

        <Main>
          <div style={{ marginTop: 12, display: 'flex', width: '100%', justifyContent: 'space-between', fontSize: '20px', alignItems: 'center' }}>
            
            <NavBar style={{ width: '100%', display: 'flex' }}>
              <DynamicLineRunningLeft/>
              <OnlyOnSmallScreenNavBar>menu</OnlyOnSmallScreenNavBar>
              <OnlyOnBigScreenNavBar>
                {['top', 'about', 'tools', 'projects', 'resume', 'contact'].map((e, i) => <a href="#" style={{marginRight: 16}}>{e}</a>)}
              </OnlyOnBigScreenNavBar>
            </NavBar>

          </div>


          <div style={{ display: 'flex', flexDirection: 'column'}}>


            <TagLine style={{marginTop: 112, marginBottom: 20, lineHeight: 1.2 }}>
              <BG_GraphicSphere></BG_GraphicSphere>
              <BG_GraphicSphereShadow style={{ transform: 'translateY(-100px)' }}/>
              Hi,<br />
              I'm Jonas,<br />
              a creative<br />
              & developer.
            </TagLine>

            <span style={{ fontSize: '20px', fontFamily: 'Inter', marginBottom: 50 }}>
            I help small and middle sized
businesses to take on the world.
              </span>

            <span style={{display: 'flex'}}>
              <Button>Contact me</Button>
              <Button><FaLinkedinIn/></Button>
              <Button><FaInstagram/></Button>
              <Button><FaDribbble/></Button>
              <Button><FaGithub/></Button>
            </span>
          </div>


          <div style={{ marginTop: 12, display: 'flex', width: '100%', justifyContent: 'space-between', fontSize: '20px', alignItems: 'center' }}>
            
            
            <SplitBar style={{ width: '100%', display: 'flex', marginBottom: 50 }}>
              <span style={{display: 'flex', whiteSpace: 'nowrap'}}>a few facts</span>
              <DynamicLine/>
            </SplitBar>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
          
          <p>I care about saving businesses time with on point solutions and intuitive UX.</p>
          <p>I have a diverse background in art, languages, and manufacturing industry.</p>
          <p>I specialize in building applications in a JS based environment.</p>
          <p>I use Adobe Photoshop, Figma, and Adobe Premier.</p>
          <p>I am fluent in English, Japanese, and Czech.</p>
          <p>I am constantly exploring both time-tested and latest trends and new technologies to find best answers.</p>
          </div>

          <div style={{ marginTop: 12, display: 'flex', width: '100%', justifyContent: 'space-between', fontSize: '20px', alignItems: 'center' }}>
            
            
            <SplitBar>
              <span style={{display: 'flex', whiteSpace: 'nowrap'}}>
                my tools
              </span>
              <DynamicLine/>
            </SplitBar>
          </div>

          <ToolBox>
        
                <p><u>Visual</u><br />
                ・Adobe Photoshop<br />
                ・Figma<br />
                ・Davinci Resolve</p>


                <p><u>Development</u><br />
                ・React.js<br />
                ・Node.js<br />
                ・PostgreSQL / MongoDB<br />
                ・Firebase, Vercel, Render</p>
                <p><u>SEO</u><br />
                ・Google Analytics<br/>
                ・Lighthouse</p>
                <p><u>Language</u><br />
                ・English<br/>
                ・Japanese<br/>
                ・Czech</p>


            
          </ToolBox>



          {/* <div style={{ marginTop: 12, display: 'flex', width: '100%', justifyContent: 'space-between', fontSize: '20px', alignItems: 'center' }}>
            <SplitBar style={{ width: '100%', display: 'flex' }}>
              projects
              <DynamicLine/>
               </SplitBar>
          </div>
          <div style={{ marginTop: 112, marginBottom: 112, lineHeight: 1.2, fontSize: 30, fontFamily: 'trap', fontWeight: 100 }}>
            {['1/ Japanible - Community Hub',
              '2/ SMOSS - No-code Production Management System',
              '3/ SSKS - No-code Procurement Management System',
              '4/ Product Landing Page for B2B Buyers',
              '5/ Corporate Site',].map((e, index) => (<div key={"projectItem_"+index}>{e}</div>))}
          </div> */}






            <SplitBar style={{ width: '100%', display: 'flex' }}>
              <span>projects</span> 
            <DynamicLine/>
            </SplitBar>


          {ProjectsData.map((e) => (
          <ProjectCard
            title={e.title} hashtags={e.hashtags} annotation={e.annotation} subtitle={e.subtitle} image={e.image} fullText={e.fullText} cta={e.cta} />))}
        </Main>
        <Footer />
      </Wrapper>
    </>
  )
}
