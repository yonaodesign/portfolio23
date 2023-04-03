// @ts-ignore
import Head from 'next/head'
// import { Inter } from '@next/font/google'
// const inter = Inter({ subsets: ['latin'] })
import styled from 'styled-components'
import Footer from './components/Footer'

import {RxHamburgerMenu, RxCross1} from 'react-icons/rx'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
// import { useEffect, useState } from 'react'
import DetailsCard from './components/DetailsCard'
import { useState } from 'react'
import Link from 'next/link'

const BG_GraphicSphere = styled.div`
background-color: white;
width: 100vw;
height: 100vw;
z-index: -9;
position: absolute;
border-radius: 500px;
transform: translateX(50%);
overflow: hidden;

@media (min-width: 1000px) {
  width: 500px;
  height: 500px;
  transform: translateX(600px);
  overflow: hidden;
  }
`

const BG_GraphicSphereShadow = styled.div`
background: radial-gradient(#d9d9d9 10%, transparent 60%);
width: 120vw;
height: 120vw;
z-index: -10;
position: absolute;
border-radius: 50px;
overflow: hidden;

@media (min-width: 1000px) {
  width: 1000px;
  height: 1000px;
  transform: translateX(120%);
  overflow: hidden;
  }
`

const Wrapper = styled.div`
position: relative;
font-family: inter;
padding: 0 32px;
min-height: 99vh;
min-width: 99vw;
max-width: 99vw;
display: flex;
flex-direction: column;
justify-content: space-between;
color: #001AFF;
font-size: 18px;
overflow-x: hidden;

@media (max-width: 1000px) {
  height: ${(props)=>(props.fsMenu ? '100vh' : '100%')};
  overflow-y: ${(props)=>(props.fsMenu ? 'hidden' : 'scroll')};
}

p {
  font-weight: 400;
  line-height: 27.2px;
  margin-bottom: 16px}
`

const Main = styled.main`
width: 100%;
max-width: 1000px;
margin: 0px auto;
// overflow-x: hidden;
`


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
margin-left: 0px;
margin-right: 0px;
`
const DynamicLineRunningRight = styled(DynamicLine)`
margin-left: 32px;
margin-right: 0px;
`

const DynamicLineRunningLeft = styled(DynamicLine)`
margin-left: 0px;
margin-right: 32px;`

const NavBar = styled.div`
color: #001AFF;

span {
  a {
    @media (max-width: 1000px) {display: none}
    
    &:hover {
      // border-bottom: 1px solid blue;
      }}}
}`


const StyledLink = styled(Link)`
color: blue;
text-decoration: none;
cursor: pointer;
border-bottom: 1px solid transparent;
&: hover {
  // border-bottom: 1px solid blue;
  text-decoration: underline;
}

}
`

const Hamburger = styled.span `
cursor: pointer;
display: none;
@media (max-width: 1000px) {display: flex}`

const FullScreenMenu = styled.div`
@media (max-width: 1000px) {
transition: 0.5s;
z-index: 10;
position: fixed;
left: 0px;
right: 0px;
top: 0px;
bottom: 0px;
background-color: rgba(255,255,255,0.5);
backdrop-filter: blur(20px);
display: flex;
justify-content: center;
align-items: center;}
display: none;

`


const SplitBar = styled(NavBar)`
width: 100%;
display: flex;
margin-top: 100px;
margin-bottom: 100px;
font-size: 30px;

@media (min-width: 1000px) {
  font-size: 50px;
  }`

const Button = styled.a`
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
text-decoration: none;
transition: 1s;
border: 1px solid transparent;

:hover {
  border: 1px solid #001FAA;
  color: #001FAA;
  background: #ffffff;
}

:focus-visible {
  border: 1px solid #001FAA;
  color: #001FAA;
  background: #ffffff;
}

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
  type: 'personal',
  year: '2022',
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
  projectDescription: '<p>Japanible is a web 2 public blogging platform, catering to individuals who have something to say or are interested about Japan, its culture, and language.</p>',
  technicalDescription: '<p>The goal of this project was to learn working with Firebase by creating a CRUD application utilizing React.js (CRA).</p>',
  reflections: `<p>During the course of this project, I gained hands-on experience working with React.js components, structure, and routing. I also gained proficiency in working with Firebase Auth, Firebase DB, serverless functions, and deployment. The functionality of Japanible includes the ability for users to sign in via OAuth (Google Provider), write and save drafts of articles, edit existing articles, write comments on articles, and browse articles created by other users.</p>

      <p>One of the key challenges I faced during the project was implementing a WYSIWYG editor. I am proud to say that I was able to successfully overcome this challenge and implement the editor effectively.</p>
      
      <p>Looking back, I realize that blog was not ideal project for this technology. A Create React App (CRA) is not an ideal solution for a blogging site that requires high SEO ranking. In retrospect, I would have used Next.js or Remix next time. Additionally, while Firebase provides a simple solution, I would have opted to implement Auth myself, used a database like Mongo or Postgres, and deployed the application to Render. I would also use packages such as react-hook-form or similar package to improve the form handling.</p>
      
      <p>Overall, Japanible was a challenging and rewarding project that allowed me to expand my skills in React.js and Firebase. I am excited to continue to develop my skills and take on new challenges in the future.</p>`,
  cta: [
    // { text: 'Video', href: '/img.png' },
    { text: 'Live site', href: 'https://japanible.com', aria: "Link to Japanible.com, that opens in a new window." },
  ]
},
{
  title: 'SMOSS',
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
  technicalDescription: `<p>This project is an in-house production management system and production system that I have
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
  cta: []
},
{
  title: 'SSKS',
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
  cta: []
},




{
  title: 'Business Site',
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
  cta: [{ text: 'Live site', href: 'http://www.sensyo-ltd.co.jp', aria: "Link to Japanese only website of Japanese Manufacturer called Sensyo Company Limited. Link opens in a new window."  },
        { text: 'Web archive', href: 'http://web.archive.org/web/20230401000722/http://sensyo-ltd.co.jp/', aria: "Link to an archived version of Japanese only website of Japanese Manufacturer called Sensyo Company Limited. Link opens in a new window."  },]

},




{
  title: 'Product Landing Page',
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

  cta: [{ text: 'Live site', href: 'http://www.cher.jp/en', aria: "Link to a landing page of a brand called PUR CHER. Link opens in a new window."  },]
}
]



export default function Projects() {

  const [fsMenu, setFsMenu] = useState(false);  

  return (
    <>
      <Head>
        <title>Jonas 2023</title>
        <meta name="description" content="Jonas Volny's Personal Website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* <div style={{height: 40, width: '100%', backgroundColor: 'white', boxShadow: '0px 0px 20px #b7b7b7', color: '#001FAA', alignItems: 'center', display: 'flex'}}>
        <Main style={{ marginTop: 12, display: 'flex', width: '100%', justifyContent: 'space-between', fontSize: '20px', alignItems: 'center' }}>
          LOL LOL
        </Main>
        </div> */}

{fsMenu && <FullScreenMenu>
                <div style={{lineHeight: 3, fontSize: 24, color: 'blue', display: 'flex', flexDirection: 'column' }}>
                <span onClick={()=>{setFsMenu(!fsMenu)}} style={{ whiteSpace: 'nowrap', cursor: 'pointer', paddingRight: 30}}><StyledLink href={'/#about'}>about</StyledLink></span>
                <span onClick={()=>{setFsMenu(!fsMenu)}} style={{ whiteSpace: 'nowrap', cursor: 'pointer', paddingRight: 30}}><StyledLink href={'/#personal'}>projects</StyledLink></span>
                <span onClick={()=>{setFsMenu(!fsMenu)}} style={{ whiteSpace: 'nowrap', cursor: 'pointer', paddingRight: 30}}><StyledLink href={'/#work'}>work</StyledLink></span>
                <span onClick={()=>{setFsMenu(!fsMenu)}} style={{ whiteSpace: 'nowrap', cursor: 'pointer', paddingRight: 30}}><StyledLink href={'/#mytools'}>my tools</StyledLink></span>
              </div>
</FullScreenMenu>}

      <Wrapper fsMenu={fsMenu} style={{ width: '100wv', overflowX: 'hidden'}}>

        <Main>

          <div style={{ marginTop: 12, display: 'flex', width: '100%', justifyContent: 'space-between', fontSize: '20px', alignItems: 'center' }}>
            <NavBar style={{ width: '100%', display: 'flex', justifyContent: 'space-between', zIndex: 100 }}>


              {/* <span style={{whiteSpace: 'nowrap'}}>portfolio 2023</span> */}
              {/* <span style={{fontFamily: 'trap', fontWeight: 400, border: '1px solid #001fAA', minWidth: 32, minHeight: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 500}}>jv</span> */}
                <StyledLink href={'/'}>Portfolio 2023</StyledLink>
              {/* <DynamicLineRunningLeft /> */}
              <span style={{display: 'flex', gap: 12}}>
                <StyledLink href={'/#about'}><span style={{ whiteSpace: 'nowrap', cursor: 'pointer'}}>about</span></StyledLink>
                <StyledLink href={'/#personal'}><span style={{ whiteSpace: 'nowrap', cursor: 'pointer'}}>projects</span></StyledLink>
                <StyledLink href={'/#work'}><span style={{ whiteSpace: 'nowrap', cursor: 'pointer'}}>work</span></StyledLink>
                <StyledLink href={'/#mytools'}><span style={{ whiteSpace: 'nowrap', cursor: 'pointer'}}>my tools</span></StyledLink>
              </span>
              <Hamburger onClick={()=>{setFsMenu(!fsMenu)}}>{fsMenu ? <RxCross1/> : <RxHamburgerMenu/>}</Hamburger>
              </NavBar>
          </div>


          <div style={{ display: 'flex', flexDirection: 'column' }}>


            <TagLine style={{ marginTop: 112, marginBottom: 20, lineHeight: 1.2, overflowX: 'hidden' }}>
              <BG_GraphicSphere></BG_GraphicSphere>
              <BG_GraphicSphereShadow style={{ transform: 'translateY(-100px)' }} />
              Hi,<br />
              I&apos;m Jonas,<br />
              a creative<br />
              & developer.
            </TagLine>

            <span style={{ fontSize: '20px', marginBottom: 50 }}>
              I help small and middle sized
              businesses to take on the world.
            </span>

            <span style={{ display: 'flex' }}>
              <Button href="https://www.linkedin.com/in/jonas-volny/" target="_blank" aria-label="Link to Jonas' LinkedIn profile"><FaLinkedinIn /></Button>
              <Button href="https://github.com/yonaodesign" target="_blank" aria-label="Link to Jonas' Github profile"><FaGithub /></Button>
            </span>
          </div>


          <div style={{ marginTop: 12, display: 'flex', width: '100%', justifyContent: 'space-between', fontSize: '20px', alignItems: 'center' }}>


            <SplitBar style={{ width: '100%', display: 'flex', marginBottom: 50 }} id={'about'}>
              <span style={{ display: 'flex', whiteSpace: 'nowrap' }}>me in bullet points</span>
              <DynamicLineRunningRight />
            </SplitBar>
          </div>

          <ul style={{ display: 'flex', flexDirection: 'column' }}>

            <li>I have a diverse background in art, languages, and manufacturing industry.</li>
            <li>I am fluent in English, Japanese, and Czech.</li>
            <li>I specialize in building applications in a JS based environment.</li>
            <li>I use Adobe Photoshop, Figma, and Adobe Premier.</li>
            <li>I am constantly exploring both time-tested and latest trends and new technologies to find best answers.</li>
            <li>I care about saving businesses time with on point solutions and intuitive UX.</li>

          </ul>

          <SplitBar style={{ width: '100%', display: 'flex' }} id={'personal'}>
            <span style={{ whiteSpace: 'nowrap' }}>projects</span>
            <DynamicLineRunningRight />
          </SplitBar>

          <div 
            style={{ display: 'flex', flexDirection: 'column' }}
            >
            
            {ProjectsData.filter((x) => (x.type === 'personal')).map((e, i) => (
            <div key={"personal" + i}>
              <DetailsCard
                order={i}
                title={e.title}
                hashtags={e.hashtags}
                annotation={e.annotation}
                subtitle={e.subtitle}
                image={e.image}
                fullText={e.fullText}
                year={e.year}
                projectDescription={e.projectDescription}
                technicalDescription={e.technicalDescription}
                reflections={e.reflections}
                cta={e.cta} />
            </div>
            ))}

          </div>


          <SplitBar style={{ width: '100%', display: 'flex' }} id={'work'}>
            <span style={{ whiteSpace: 'nowrap' }}>work</span>
            <DynamicLineRunningRight />
          </SplitBar>

          <div
            style={{ display: 'flex', flexDirection: 'column' }}
            >
            
            {ProjectsData.filter((x) => (x.type === 'business')).reverse().map((e, i) => (<div key={"business" + i}>

              <DetailsCard
                order={i}
                title={e.title}
                hashtags={e.hashtags}
                annotation={e.annotation}
                subtitle={e.subtitle}
                image={e.image}
                fullText={e.fullText}
                year={e.year}
                projectDescription={e.projectDescription}
                technicalDescription={e.technicalDescription}
                reflections={e.reflections}
                cta={e.cta} />
            </div>
            ))}
          </div>

          <div style={{ marginTop: 12, display: 'flex', width: '100%', justifyContent: 'space-between', fontSize: '20px', alignItems: 'center' }} id={'mytools'}>
            <SplitBar>
              <span style={{ display: 'flex', whiteSpace: 'nowrap' }}>
                my tools
              </span>
              <DynamicLineRunningRight />
            </SplitBar>
          </div>

          <ToolBox>

            <div>
              <u>Visual</u>
              <ul>
                <li>Figma</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Premiere</li>
              </ul>
            </div>

            <div>
              <u>Development</u>
              <ul>
                <li>React.js</li>
                <li>Node.js</li>
                <li>PostgreSQL, MongoDB</li>
                <li>Firebase, Vercel, Render</li>
                <li>AWS S3, Firebase Storage</li>

              </ul>
            </div>
            <div>
              <u>SEO</u><ul>
                <li>Google Analytics</li>
                <li>SEMrush</li>
                <li>Lighthouse</li></ul>
            </div>
          </ToolBox>


          <div style={{ marginTop: 12, display: 'flex', width: '100%', justifyContent: 'space-between', fontSize: '20px', alignItems: 'center' }}>
            <SplitBar style={{marginBottom: 0}}>
              <DynamicLine/>
            </SplitBar>
          </div>


          <Footer />
        </Main>

      </Wrapper>
        <script async src="//static.getclicky.com/101403805.js"></script>
      <noscript>
        <p>
          <img alt="Clicky" width="1" height="1" src="//in.getclicky.com/101403805ns.gif" />
          </p>
        </noscript>
    </>
  )
}
