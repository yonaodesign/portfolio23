import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { title } from 'process'
import parser from 'html-react-parser'

import {FaGithub} from 'react-icons/fa'


const SingleCard = styled.nav`
width: 100%;
display: column;
margin-bottom: 100px;

p {font-size: 16px;
    font-weight: 400;
    line-height: 27.2px}
`

const TagLine = styled.h1`
font-size: 48px;
font-weight: 400;
line-height: 72px;
`

const SubTagLine = styled(TagLine)`
font-size: 30px;
font-weight: 600;
line-height: 1.2;
font-family: trap;
margin-bottom: 0px;
padding-bottom: 0px;

@media (min-width: 1000px) {
    font-size: 50px;
    }
`

const SubSubTagLine = styled(TagLine)`
font-size: 30px;
font-weight: 100;
line-height: 1.2;
font-family: trap;
margin-top: 0px;
padding-top: 0px;
@media (min-width: 1000px) {
    font-size: 50px;
    }`

const CardButton = styled.a`
text-decoration: none;
min-width: 36px;
border: 1px solid #001AFF;
color: #001AFF;
background-color: #ffffff;

border-radius: 50px;
height: 36px;
padding: 0 10px;
display: flex;
align-items: center;
justify-content: center;
margin-right: 18px;

:hover {
    color: #fff;
    background-color: #001AFF;
}
`

const HashTag = styled.span`
margin-right: 3px;
align-items: center;
background-color: rgb(245, 245, 245);
border-bottom-left-radius: 4px;
border-bottom-right-radius: 4px;
border-top-left-radius: 4px;
border-top-right-radius: 4px;
box-sizing: border-box;
color: rgb(74, 74, 74);
display: inline-flex;
font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
font-size: 12px;
font-style: normal;
font-weight: 400;
height: 24px;
justify-content: center;
line-height: 18px;
padding-left: 9px;
padding-right: 9px;
text-rendering: optimizelegibility;
white-space: nowrap;
-moz-osx-font-smoothing: grayscale;

&::before {content: '#'}`

type Props = {
    title: string;
    hashtags: Array;
    image: string;
    fullText: string;
    cta: Array;
    subtitle: string,
    annotation: string,
}

export default function ProjectCard(props: Props) {
  const {title, subtitle, hashtags, image, fullText, cta, annotation} = props;

  return (<SingleCard>
        <SubTagLine>{parser(title)}</SubTagLine>
        <SubSubTagLine>{subtitle}</SubSubTagLine>
        
        {image !== null ?
        <div style={{maxWidth: '100%', aspectRatio: '1/0.6', position: 'relative', marginBottom: "50px"}}>
            <Image src={image} fill alt="Project: Japanible"></Image>
        </div> : ''}
        <div style={{display: 'flex'}}>
        {cta.map((e, i:Number)=>(<CardButton key={i} href={e.href} target={'_blank'}>{e.text}</CardButton>))}
        <CardButton><FaGithub/></CardButton>
        </div>

        <p>
        <u>Project description -</u><br/>
Japanible is a web 2 public blogging platform, catering to individuals who have something to say or are interested about Japan, its culture, and language.
</p>
<p><u>Technical description +</u></p>
<p><u>Reflections +</u></p>
        {/* <div style={{marginTop: 50, marginBottom: 112, lineHeight: 1.2 }}>
        {parser(fullText)}
        </div> */}
      </SingleCard>
  )
}