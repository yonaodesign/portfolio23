// @ts-ignore
import Head from 'next/head'
import styled from 'styled-components'
import BREAKPOINTS from './api/breakpoints'
// import { useTheme } from 'styled-components'


import Footer from './components/Footer'

import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import {IoContrast} from 'react-icons/io5'
import DetailsCard from './components/DetailsCard'
import { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import ProjectsData from './api/dataset'
import galleryData from './api/galleryDataset'
import GalleryCard from './components/GalleryCard'


import HTMLReactParser from 'html-react-parser'
import ContactForm from './components/contactform'
import Image from 'next/image'

const Wrapper = styled.div`
position: relative;
font-family: inter;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: space-between;
color: #000000;
font-size: 18px;
overflow-x: hidden;

@media (max-width: 1000px) {
  height: ${(props) => (props.fsMenu ? '100vh' : '100%')};
  overflow-y: ${(props) => (props.fsMenu ? 'hidden' : 'scroll')};
}

p {
  color: ${({ theme }) => theme.text};
  font-weight: 400;
  line-height: 27.2px;
  margin-bottom: 16px}
`


const PermanentSideMenu = styled.div`
  // filter: invert(1);
  z-index: 10;
  position: fixed;
  top: 50%;
  transform: translateX(50%);
  transform: rotate(270DEG);
  
// mixBlendMode: 'difference', backgroundColor: 'white', webkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}

div {
  transform: translateY(-20px);
  display: flex;
  gap: 30px;
}`

const Main = styled.main`

margin-left: 100px;
margin-right: 100px;
max-width: 100%;
// max-width: 1400px;
// overflow-x: hidden;
`
const LOGO = styled.span`
font-family: trap; 


// font-weight: 100; 
display: flex;
gap: 3px;
align-items: center;
// background-color: #001aff; 
min-width: 32px; 
min-height: 32px; 
display: flex; 
align-items: center; 
justify-content: center; 
border-radius: 0px; 
padding: 0px 8px;
letter-spacing: -1px;
color: ${({ theme }) => theme.text};
transition: 0.5s;


&:hover {
  // text-decoration: underline;
}
`
const PreTagLine = styled.span`
margin-top: 200px;
max-width: 600px;
font-size: 33px;

@media(max-width: ${BREAKPOINTS.medium}px) {
  font-size: 24px;
}`
const TagLine = styled.h1`
color: ${({ theme }) => theme.text};
font-size: 50px;
font-weight: 400;
line-height: 72px;
font-family: trap;
font-weight: 600;

@media (min-width: 1000px) {
  font-size: 100px;
  }`

const NavBar = styled.div`
color: ${({ theme }) => theme.text};

span {
  a {
    @media (max-width: 1000px) {display: none}
    &:hover {
      // border-bottom: 1px solid #000000;
      }}}
}`


const StyledLink = styled(Link)`
color: #000000;
text-decoration: none;
cursor: pointer;
border-bottom: 1px solid transparent;
&: hover {
  // border-bottom: 1px solid #000000;
  text-decoration: underline;
}
}
`

const Hamburger = styled.span`
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

const StyledSectionTools = styled.section`
  display: flex;
  flex-direction: row;
  padding: 100px 100px;
  gap: 50px;

  @media (max-width: ${BREAKPOINTS.medium}px) {
    flex-direction: column;}
`

const StyledSectionProjects = styled.section`
  display: flex;
  flex-direction: column;
  padding: 100px;
  gap: 50px;
  background-color: #f5f5f5;
  // color: #ffffff;

  @media (max-width: ${BREAKPOINTS.medium}px) {
  }
`

const StyledProjectsGrid = styled.div`
display: inline-grid;
grid-template-columns: 1fr 1fr;
gap: 100px 50px;
width: 100%;

@media (max-width: ${BREAKPOINTS.medium}px) {
  grid-template-columns: 1fr;

}
`

const CollapsableText = styled.span`
transition: 2s;
cursor: pointer;`

const CoverImage = styled.div`
transition: 1s;

position: relative; 
width: calc(100vw - 100px);
margin-bottom: 100px; 
border-radius: 20px 0px 0px 20px;
background: url("/media/cover.webp");
background-size: cover;
background-position: center;
background-repeat: no-repeat;

&:hover {
  transform: scale(1.01)
}

aspect-ratio: 2/0.75; 

@media (max-width: ${BREAKPOINTS.large}px){
  aspect-ratio: 2/1; 
}
@media (max-width: ${BREAKPOINTS.medium}px){
  aspect-ratio: 2/1.5; 
}
@media (max-width: ${BREAKPOINTS.mobile}px){
  aspect-ratio: 2/2; 
}
`

const TwoColumnTextDiv = styled.div`
width: 100%;
column-count: 2;
column-gap: 50px;


@media (max-width: ${BREAKPOINTS.mobile}px){
  column-count: 1;
}
`


export default function Projects() {
  const [fsMenu, setFsMenu] = useState(false);
  const [scrollY, setScrollY] =useState('')


  const onScroll = useCallback(e => {
    const { pageYOffset, scrollY } = window;
    // console.log("yOffset", pageYOffset, "scrollY", scrollY);
    setScrollY(window.pageYOffset);
}, []);

useEffect(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => {
     window.removeEventListener("scroll", onScroll, { passive: true });
  }
}, [onScroll]);

//

  return (
    <>
      <Head>
        <title>JV23</title>
        <meta name="description" content="Jonas Volny's Personal Website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

{/* FULL SCREEN MENU */}
{fsMenu && <FullScreenMenu>
        <div style={{ lineHeight: 3, fontSize: 24, color: '#000000', display: 'flex', flexDirection: 'column' }}>
          <span onClick={() => { setFsMenu(!fsMenu) }} style={{ whiteSpace: 'nowrap', cursor: 'pointer', paddingRight: 30 }}><StyledLink href={'/#about'}>About Me</StyledLink></span>
          <span onClick={() => { setFsMenu(!fsMenu) }} style={{ whiteSpace: 'nowrap', cursor: 'pointer', paddingRight: 30 }}><StyledLink href={'/#projects'}>Projects</StyledLink></span>
          <span onClick={() => { setFsMenu(!fsMenu) }} style={{ whiteSpace: 'nowrap', cursor: 'pointer', paddingRight: 30 }}><StyledLink href={'/#contact'}>Contact</StyledLink></span>
          {/* <span onClick={() => { setFsMenu(!fsMenu) }} style={{ whiteSpace: 'nowrap', cursor: 'pointer', paddingRight: 30 }}><StyledLink href={'/#projects'}><IoContrast/></StyledLink></span> */}
        </div>
      </FullScreenMenu>}

{/* LEFT SIDE MENU */}
<PermanentSideMenu 
>
<div >
    <StyledLink href="https://www.linkedin.com/in/jonas-volny/" target="_blank" aria-label="Link to Jonas' LinkedIn profile">LinkedIn</StyledLink>
    <StyledLink href="https://github.com/yonaodesign" target="_blank" aria-label="Link to Jonas' Github profile">GitHub</StyledLink>
    {/* <StyledLink href="https://github.com/yonaodesign" target="_blank" aria-label="Link to Jonas' Github profile">Dribbble</StyledLink> */}

  </div>
</PermanentSideMenu>

{/* FULL BODY WRAPPER */}
<Wrapper fsMenu={fsMenu} style={{ width: '100%', overflowX: 'hidden' }}>


  {/* <div style={{width: 800, height: 800, position: 'fixed', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'blue', zIndex: 100, borderRadius: 1000, mixBlendMode: 'difference'}}>O</div> */}

  
{/* NAVIGATION */}
            <NavBar style={{ position: 'fixed', left: 30, right: 30, top: 20, display: 'flex', justifyContent: 'space-between', zIndex: 10, alignItems: 'center',
            // mixBlendMode: 'difference', backgroundColor: 'white', webkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' 
            }}>
              <StyledLink style={{cursor: 'pointer'}} href="/">
                <LOGO style={{cursor: 'pointer'}}>
                  <span style={{cursor: 'pointer'}}>J<CollapsableText style={{transition: '1s'}} className={scrollY > 100 ? 'collapsable' : ''}>onas</CollapsableText></span>
                  <span style={{cursor: 'pointer'}}>V<CollapsableText style={{transition: '1s'}} className={scrollY > 100 ? 'collapsable' : ''}>olny</CollapsableText></span>
                </LOGO>
              </StyledLink>

                <span style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <StyledLink href={'/#about'}><span style={{ whiteSpace: 'nowrap', cursor: 'pointer', }}>About Me</span></StyledLink>
                  <StyledLink href={'/#projects'}><span style={{ whiteSpace: 'nowrap', cursor: 'pointer', }}>Projects</span></StyledLink>
                  <StyledLink href={'/#contact'}><span style={{ whiteSpace: 'nowrap', cursor: 'pointer', }}>Contact</span></StyledLink>
                  {/* <StyledLink href={'/#projects'}><span style={{ whiteSpace: 'nowrap', cursor: 'pointer', }}><IoContrast style={{transform: 'translateY(3px)'}}/></span></StyledLink> */}
                </span>

              <Hamburger onClick={() => { setFsMenu(!fsMenu) }}>{fsMenu ? <RxCross1 /> : <RxHamburgerMenu />}</Hamburger>
            </NavBar>

          <section style={{ display: 'flex', flexDirection: 'column', backgroundColor: '#fff'}}>
                <PreTagLine>
                    Frontend Developer
                  </PreTagLine>

                <TagLine style={{marginTop: 30, marginBottom: 30 }}>
                    Jonas Volny
                </TagLine>
                
                <span style={{ fontSize: '20px', marginBottom: 150, maxWidth: 600 }}>
                      Hello, my name is Jonas Volny and Im a Prague based developer. I build things on the web.
                </span>

                <CoverImage>
                  <div style={{zIndex: 2, borderRadius: '20px 0px 0px 20px',  position: 'absolute', width: '100%', height: '100%', backgroundColor: '#000000', mixBlendMode: 'soft-light', opacity: 0.5}}></div>

                  <div style={{zIndex: 3, borderRadius: '20px 0px 0px 20px', width: '100%', height: '100%', backgroundColor: '#000000', mixBlendMode: 'color',
                  // opacity: scrollY > 400 ? 0 : 1,
                  transition: '1s'}}></div>
                </CoverImage>
                
          </section>

          <section id="about" style={{ display: 'flex', flexDirection: 'column', padding: '100px', backgroundColor: '#f5f5f5', gap: 50}}>
          <h4>About Me</h4>
          <TwoColumnTextDiv>
<p style={{marginTop: 0}}>
  Hello! I’m Jonas. I love building things that make a difference.</p>
<p>My first experience with programming was when I was 11. I build a website to showcase some of the games I made with Game Maker v5.
  {/* I met with some critique online, “there’s no way, you’ve made this.” Being little kid I took it too personally, eventhough  */}
  {' '}Learning HTML & CSS I occasionally made websites for friends, however the passion was supressed for a long time.</p>
<p>I always loved learning and when I was deciding what route to take, I chose Asian studies, as being something completely unknown with a lot of to learn. From zero to being promoted in a fully Japanese company, felt like my drive and dedication was rewarded.</p>
<p>At some point, I was asked to improve in-house processes. Knowing that there’re solutions like Game Maker for Software, I decided to use a no-code solution. The learning was fun, but the joy of collegues actually using it was even more rewarding. I refound my passion for building in a field that keeps expanding every day and there is no treshold like in Japanaese langauge.</p>
<p>Since then, I’ve been learning Javascript, React, Node and more. I’m looking for a role where I can help a company to achieve customers goals.</p>
                    </TwoColumnTextDiv>    
                    
                                    

                                       <h4>Sum Up</h4> 
                                        <TwoColumnTextDiv>
                                       

                      
                      <ul style={{ display: 'flex', flexDirection: 'column', marginTop: 0 }}>
                            <li>I have a diverse background in art, languages, and manufacturing industry.</li>
                            <li>I specialize in building applications in a JS based environment.</li>
                            <li>I am constantly exploring both time-tested and latest trends and new technologies to find best answers.</li>
                            <li>I care about saving businesses time with on point solutions and intuitive UX.</li>
                            <li>I use Adobe Photoshop, Figma, and Adobe Premier.</li>
                            <li>I am fluent in English, Japanese, and Czech.</li>

                      </ul>
                    </TwoColumnTextDiv>
                                        {/* <div style={{width: '100%'}}>


                      <h4>My Skills</h4>
                      <ul style={{ display: 'flex', flexDirection: 'column' }}>
                            <li>React</li>
                            <li>Javascript ES6</li>
                            <li>HTML, CSS, Styled-components</li>
                            <li>SQL, NoSQL</li>
                            <li>NodeJS</li>
                            <li>Git</li>
                      </ul>
                    </div> */}
          </section>

<StyledSectionTools>
<div style={{width: '100%'}}>
          <h4>Development</h4>
          <ul>
            <li>React.js</li>
            <li>HTML, CSS & JS ES6</li>
            <li>SQL (PostgreSQL), NoSQL</li>
            <li>Firebase, Vercel, Render</li>
            <li>Node.js</li>
            <li>AWS S3, Firebase Storage</li>

          </ul>
        </div>


        <div style={{width: '100%'}}>
          <h4>Visual</h4>
          <ul>
            <li>Basic UX/UI</li>
            <li>Wireframing & Prototyping</li>
            <li>Figma</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Premiere</li>
          </ul>
        </div>


        <div style={{width: '100%'}}>
          <h4>SEO</h4><ul>
            <li>Technical SEO</li>
            <li>Content SEO</li>
            <li>MEO</li>
            <li>Google Analytics</li>
            <li>SEMrush</li>
            <li>Lighthouse</li>

            </ul>
        </div>
      </StyledSectionTools>

          <StyledSectionProjects id="projects">
            <h4>What I&apos;ve been working on</h4>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <StyledProjectsGrid>
                    {galleryData.map((item, index)=>(
                      <GalleryCard key={`galleryItemNo${index}`} payload={item}/>
                    ))}

                </StyledProjectsGrid>
                </div>
          </StyledSectionProjects>






          {/* <SplitBar style={{ width: '100%', display: 'flex' }} id={'personal'}>
            <span style={{ whiteSpace: 'nowrap' }}>projects</span>
            <DynamicLineRunningRight />
          </SplitBar> */}

          {/* <div
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

          </div> */}


          {/* <SplitBar style={{ width: '100%', display: 'flex' }} id={'work'}>
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
          </div> */}

  

          <section id="contact" style={{ display: 'flex', flexDirection: 'row', padding: '100px', backgroundColor: '#e2e2e2', gap: 50}}>
            <ContactForm/>
          </section>

          <Main>

        </Main>
        <Footer />
      </Wrapper>
      {/* <script async src="https://static.getclicky.com/101403805.js"></script>
      <noscript>
        <p>
          <Image alt="Clicky" width="1" height="1" src="https://in.getclicky.com/101403805ns.gif" />
        </p>
      </noscript> */}
    </>
  )
}
