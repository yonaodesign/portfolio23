import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import styled from 'styled-components'
import Navigation from './Navigation'
import Footer from '../src/pages/components/Footer'

const Wrapper = styled.div`
padding: 0 16px;
min-height: 100vh;
min-width: 100vw;
display: flex;
flex-direction: column;
justify-content: space-between;

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
font-size: 48px;
font-weight: 400;
line-height: 72px;
`
const SubTagLine = styled(TagLine)`
font-size: 32px;
font-weight: 400;
line-height: 48px
`

const BG = styled.div`
position: fixed;
left: 0px;
right:0px;
top:0px;
bottom:0px;
z-index: -10;
background: url("./BG.png") no-repeat fixed right;
`

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <>
      <Head>
        <title>Jonas VOLNY</title>
        <meta name="description" content="Jonas Volny's Personal Website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>


      <Wrapper>
        <BG></BG>
      
      <Navigation/>

       <Main>
        <TagLine>Do you feel like doing businesses with me?</TagLine>
        <p>I am a developer with a niche blend of 
                            background in traditional art, foreign languages, and first hand experience of manufacturing industry.
                            
                            </p>
                        <p>I enjoy building applications for small and medium businesses using <b>React.js</b>, <b>React Query</b>, <b>Node.js</b>, and <b>PostgreSQL</b>. My art background in combination with my Adobe <b>Photoshop</b>, <b>Figma,</b> and <b>video
                            editing</b> skills allow me to make projects visually tempting, or give advice regarding visuals.
                        </p>
                        <p>
                            We can have a deep discussion about your projects in English, Japanese, or Czech in a formal setting or by a cup of coffee. My passion for coding and my drive to constantly
                            improve and learn new things led me to pursue programming and I have been able to produce
                            CRM or ERP-like web applications. I am constantly learning new technologies and ways how to make things more user-friendly. 
                        </p>
                        <p>
                        Contact me, if you have any questions or project ideas.
                        </p>
                        {/* <br />
                        <p>Best, <br />Jonas</p> */}
          
      </Main>

      <Footer/>
      </Wrapper>
    </>
  )
}
