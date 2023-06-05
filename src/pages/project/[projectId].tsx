import Head from 'next/head'
import styled from 'styled-components'
import Footer from '../components/Footer'
import { useRouter } from 'next/router';

import BREAKPOINTS from '../api/breakpoints'

import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'
import { IoContrast } from 'react-icons/io5'
import { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'

import ProjectsData from '../api/dataset'
import galleryData from '../api/galleryDataset'
import HTMLReactParser from 'html-react-parser'
import GalleryCard from '../components/GalleryCard';
import DesktopShot from '../components/DesktopShot';
import MobileShot from '../components/MobileShot';
import Image from 'next/image';
import CoverShot from '../components/CoverShot';



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
  font-weight: 400;
  line-height: 27.2px;
  margin-bottom: 16px}
`

const Section = styled.section`
transition: 3s;
padding: 100px;
@media (max-width: ${BREAKPOINTS.mobile}px) {
  padding: 50px 40px 50px 100px;
}
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
color: #000;
transition: 0.5s;


&:hover {
  // color: #001aff; 
  // color: #ffffff;
  // background-color: white;
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
font-size: 50px;
font-weight: 400;
line-height: 72px;
font-family: trap;
font-weight: 600;

@media (min-width: 1000px) {
  font-size: 100px;
  }`

const NavBar = styled.div`
color: #000000;

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
const CollapsableText = styled.span`
transition: 2s;
cursor: pointer;`

const StyledWhyAndChallengedSection = styled.section`
display: flex;
flex-direction: row;
padding: 100px;
background-color: #f5f5f5;
gap: 50px;

@media (max-width: ${BREAKPOINTS.medium}px) {
  flex-direction: column;
  padding: 50px 40px 50px 100px;
}`

const StyledOtherProjectsGrid = styled.div`
display: flex;
gap: 50px;
flex-direction: row;
@media (max-width: ${BREAKPOINTS.medium}px) {
  flex-direction: column;
}`

const CoverImage = styled.div`
transition: 1s;
position: relative; 
width: calc(100vw - 100px);
margin-bottom: 100px; 
border-radius: 20px 0px 0px 20px;
background: url("/PLACEHOLDER.png");
background-size: cover;
background-position: top center;
background-repeat: no-repeat;

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

&:hover {transform: scale(1.01)}
`

const StyledMobileSection = styled.div`
  padding: 100px;
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;

  @media(max-width: ${BREAKPOINTS.large}px) {
    grid-template-columns: 1fr;

  }
`

const HeadingAndCTAWithBreak =styled.div`
display: flex;
align-items: center;
gap: 20px;

@media (max-width: ${BREAKPOINTS.mobile}px){
  flex-direction: column;
  align-items: flex-start;
}
`


export default function Projects() {

  const [fsMenu, setFsMenu] = useState(false);
  const [scrollY, setScrollY] = useState('');
  const [loadedBg, setLoadedBg] = useState(false);

  useEffect(()=>{
    setTimeout(()=>setLoadedBg(true), 1000);
  },[])

  const router = useRouter();

  const { projectId } = router.query;

  const currentProjectData = galleryData.filter((entry) => (entry.projectSlug == projectId))
  const currentProjectDataId = galleryData.map(e => e.projectSlug).indexOf(projectId)

  const previousProjectData = currentProjectDataId === 0 ? galleryData[galleryData.length - 1] : galleryData[currentProjectDataId - 1]
  const nextProjectData = currentProjectDataId === galleryData.length - 1 ? galleryData[0] : galleryData[currentProjectDataId + 1]

  const currentProjectDescriptions = ProjectsData.filter((entry) => (entry.projectSlug == projectId))


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

  if (!currentProjectData[0] && currentProjectDescriptions[0]) return (<h1>Missing Project Data</h1>)
  if (currentProjectData[0] && !currentProjectDescriptions[0]) return (<h1>Missing Project Description</h1>)
  if (currentProjectData[0] && currentProjectDescriptions[0]) return (
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
          <span onClick={() => { setFsMenu(!fsMenu) }} style={{ whiteSpace: 'nowrap', cursor: 'pointer', paddingRight: 30 }}><StyledLink href={'/#contacts'}>Contact</StyledLink></span>
        </div>
      </FullScreenMenu>}

      {/* LEFT SIDE MENU */}
      <PermanentSideMenu>
        <div>
          <StyledLink href="https://www.linkedin.com/in/jonas-volny/" target="_blank" aria-label="Link to Jonas' LinkedIn profile">LinkedIn</StyledLink>
          <StyledLink href="https://github.com/yonaodesign" target="_blank" aria-label="Link to Jonas' Github profile">GitHub</StyledLink>
          {/* <StyledLink href="https://github.com/yonaodesign" target="_blank" aria-label="Link to Jonas' Github profile">Dribbble</StyledLink> */}
        </div>
      </PermanentSideMenu>

      {/* FULL BODY WRAPPER */}
      <Wrapper fsMenu={fsMenu} style={{ width: '100%', overflowX: 'hidden' }}>

        {/* NAVIGATION */}
        <NavBar style={{
          position: 'fixed', left: 30, right: 30, top: 20, display: 'flex', justifyContent: 'space-between', zIndex: 10, alignItems: 'center',
        }}>
          <StyledLink style={{ cursor: 'pointer' }} href="/">
            <LOGO style={{ cursor: 'pointer' }}>
              <span style={{ transition: '0.5s', cursor: 'pointer', width: scrollY > 100 ? '9px' : '45px' }}>J<CollapsableText style={{ transition: '1s' }} className={scrollY > 100 ? 'collapsable' : ''}>onas</CollapsableText></span>
              <span style={{ cursor: 'pointer' }}>V<CollapsableText style={{ transition: '1s' }} className={scrollY > 100 ? 'collapsable' : ''}>olny</CollapsableText></span>
            </LOGO>
          </StyledLink>



          <span style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <StyledLink href={'/#about'}><span style={{ whiteSpace: 'nowrap', cursor: 'pointer', }}>About Me</span></StyledLink>
            <StyledLink href={'/#projects'}><span style={{ whiteSpace: 'nowrap', cursor: 'pointer', }}>Projects</span></StyledLink>
            <StyledLink href={'/#contact'}><span style={{ whiteSpace: 'nowrap', cursor: 'pointer', }}>Contact</span></StyledLink>
          </span>

          <Hamburger onClick={() => { setFsMenu(!fsMenu) }}>{fsMenu ? <RxCross1 /> : <RxHamburgerMenu />}</Hamburger>
        </NavBar>



        <Section style={{ display: 'flex', flexDirection: 'column', backgroundColor: loadedBg ? currentProjectData[0]?.projectColor : 'white' }}>
        
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '80%' }}>
            
              <PreTagLine>
                
                  
                {(currentProjectDescriptions[0].projectTagLine || currentProjectData[0].projectDescription) ?? []}
              </PreTagLine>

              <TagLine style={{ marginTop: 30, marginBottom: 30 }}>
                {currentProjectData[0].projectName ?? []}
              </TagLine>

              <span style={{ fontSize: '20px', marginBottom: 100, maxWidth: 600 }}>
                {(currentProjectDescriptions[0].projectAnnotation || currentProjectData[0].projectDescription) ?? []}
              </span>
            </div>
            {/* <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '20%', alignItems: 'flex-end', fontWeight: 400, fontSize: 18 }}>
              <div>{currentProjectDescriptions[0].year ?? []}</div>
              <div>{currentProjectDescriptions[0].type[0].toUpperCase() + currentProjectDescriptions[0].type.slice(1) + ' project' ?? []}</div>
              {currentProjectDescriptions[0].cta.map((item, index) => (<div key={'cta' + index}><a target="_blank" rel="noreferrer" href={item.href}>{item.text} →</a></div>)) ?? []}
            </div> */}
          </div>
          {/* <CoverImage style={{ backgroundImage: `url("/${currentProjectData[0].projectGalleryImage}")`, }}>
            <div style={{ borderRadius: '20px 0px 0px 20px', zIndex: 2, position: 'absolute', width: '100%', height: '100%', backgroundColor: '#000000', mixBlendMode: 'soft-light', opacity: 0.5 }}></div>
          </CoverImage> */}

          {currentProjectDescriptions[0].projectDesktopPhoto?.slice(0, 1).map(
            (entry, index) => (
              <CoverShot index={index} fileUrl={entry} key={`desktopShop${index}`}></CoverShot>
            )
          )
            ?? []}
        </Section>







        <StyledWhyAndChallengedSection>
          <div style={{ width: '100%' }}>
            <h4>What and Why</h4>
            <p>{HTMLReactParser(currentProjectDescriptions[0].projectPurposeAndGoal ?? [])}</p>
          </div>

          {/* <MobileShot index={1} fileUrl={"shotjapanible1.png"}></MobileShot>        */}






          <div style={{ width: '100%' }}>
            <h4>How</h4>
            <p>{HTMLReactParser(currentProjectDescriptions[0].projectTechnicalCommentary ?? [])}</p>
          </div>

        </StyledWhyAndChallengedSection>

        {currentProjectDescriptions[0].projectDesktopPhoto?.length > 1 ? (
          <section style={{ padding: '100px' }}>
            {currentProjectDescriptions[0].projectDesktopPhoto?.slice(1).map((entry, index) => (
              <DesktopShot index={index} fileUrl={entry} key={`desktopShop${index}`}></DesktopShot>
            ))}</section>) : <></>}

        <Section style={{backgroundColor: '#ffffff', gap: 50 }}>
          <div style={{ width: '100%' }}>
            <h4>What Happened</h4>
            <p>{HTMLReactParser(currentProjectDescriptions[0].projectProblemsAndSolutions ?? [])}</p>
            <p>{HTMLReactParser(currentProjectDescriptions[0].projectLessonsLearnt ?? [])}</p>
          </div>
        </Section>

        {currentProjectDescriptions[0].projectMobilePhoto ? (
          <StyledMobileSection>
            {currentProjectDescriptions[0].projectMobilePhoto.slice(0, 2).map((entry, index) => (
              <MobileShot index={index} fileUrl={entry} key={`mobileShot${index}`}></MobileShot>
            ))}</StyledMobileSection>) : <></>}





        {/* <section style={{ display: 'flex', flexDirection: 'row', padding: '100px 100px', gap: 50}}>

    <div style={{width: '100%'}}>
              <h4>Development</h4>
              <ul>
                <li>React.js</li>
                <li>Node.js</li>
                <li>PostgreSQL, MongoDB</li>
                <li>Firebase, Vercel, Render</li>
                <li>AWS S3, Firebase Storage</li>

              </ul>
            </div>


            <div style={{width: '100%'}}>
              <h4>Visual</h4>
              <ul>
                <li>Figma</li>
                <li>Adobe Photoshop</li>
                <li>Adobe Premiere</li>
              </ul>
            </div>


            <div style={{width: '100%'}}>
              <h4>SEO</h4><ul>
                <li>Google Analytics</li>
                <li>SEMrush</li>
                <li>Lighthouse</li></ul>
            </div>
          </section> */}

        <Section style={{backgroundColor: '#e2e2e2'}}>
          <HeadingAndCTAWithBreak>
            <h4>Other Projects</h4>
            <StyledLink style={{ fontWeight: 600 }} href={'../#projects'}>Show All Projects →</StyledLink>
            </HeadingAndCTAWithBreak>

          <StyledOtherProjectsGrid>
            <GalleryCard key={`galleryItemNo${0}`} payload={previousProjectData} />
            <GalleryCard key={`galleryItemNo${0}`} payload={nextProjectData} />
          </StyledOtherProjectsGrid>

        </Section>

        <Main>

          {/* <div style={{ marginTop: 12, display: 'flex', width: '100%', justifyContent: 'space-between', fontSize: '20px', alignItems: 'center' }}>
            <SplitBar style={{ marginBottom: 0 }}>
              <DynamicLine />
            </SplitBar>
          </div> */}



        </Main>
        <Footer />
      </Wrapper >
      {/* <script async src="//static.getclicky.com/101403805.js"></script>
      <noscript>
        <p>
          <Image alt="Clicky" width="1" height="1" src="//in.getclicky.com/101403805ns.gif" />
        </p>
      </noscript> */}
    </>
  )
}
