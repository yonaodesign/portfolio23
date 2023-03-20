import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import styled from 'styled-components'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const Wrapper = styled.div`
padding: 0 16px;
height: 100vh;
min-width: 100vw;
display: flex;
flex-direction: column;
justify-content: space-between;
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

export default function Home() {
  return (
    <>
      <Head>
        <title>Jonas VOLNY</title>
        <meta name="description" content="Jonas Volny's Personal Website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>


      <Wrapper>
        <BG>
        </BG>

      
      <Navigation/>

       <Main>
        <TagLine>

          <div>👋</div>
          <div>
          Hi, I'm Jonas. Creative Full Stack SE Developer.
          </div>
        </TagLine>
        <SubTagLine>
        Let's make world better together.
        </SubTagLine>
      </Main>

      <Footer/>
      </Wrapper>
    </>
  )
}
