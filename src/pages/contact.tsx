import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import styled from 'styled-components'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

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

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return (
    <>
      <Head>
        <title>Jonas VOLNY</title>
        <meta name="description" content="Jonas Volny's Personal Website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>


      <Wrapper>
      
      <Navigation/>

       <Main>
        <TagLine>Contact me!</TagLine>
        <a href='mailto:jonas.volny@gmail.com'>My mail!</a>
        {/* <input></input>
        <textarea></textarea> */}
          
      </Main>

      <Footer/>
      </Wrapper>
    </>
  )
}
