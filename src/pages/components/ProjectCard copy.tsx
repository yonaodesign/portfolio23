import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { title } from 'process'
import parser from 'html-react-parser'

const SingleCard = styled.nav`
width: 100%;
display: column;

p {font-size: 16px;
    font-weight: 400;
    line-height: 27.2px}

a {margin-right: 6px;
    margin-top: 32px;
    background-color: #ececec;
padding: 12px;
border-radius: 3px;}    
margin-bottom: 64px;`

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
}

export default function ProjectCard(props: Props) {
  const {title, hashtags, image, fullText, cta} = props;

  return (<SingleCard>
        <SubTagLine>{parser(title)}</SubTagLine>
        {hashtags.map(e=>(<HashTag>{e}</HashTag>))}

        {image !== null ? <div style={{maxWidth: '100%', aspectRatio: '1/0.6', position: 'relative', marginTop: "28px"}}>
            <Image src={image} fill alt="Project: Japanible"></Image>
        </div> : ''}

        <div>
        {parser(fullText)}
        </div>
        {cta.map(e=>(<a href={e.href} target={'_blank'}>{e.text}</a>))}
      </SingleCard>
  )
}