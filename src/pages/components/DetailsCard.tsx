// @ts-ignore
import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import parser from 'html-react-parser'

const SingleCard = styled.nav`
width: 100%;
display: column;

p {font-size: 16px;
    font-weight: 400;
    line-height: 27.2px}
`

const Title = styled.button`
text-align: left;
width: 100%;
font-size: 26px;
font-family: trap;
font-weight: 600;
margin: 0px;
transition: 0.5s;
border: none;
border-top: none;
border-bottom: 1px dotted #001FAA;
background-color: transparent;
cursor: pointer;
color: #001AFF;

&:hover {
  background-color: #001FAA;
  color: #ffffff;}

&:focus-visible {
    background-color: #001FAA;
    color: #ffffff;
  }



@media (min-width: 1000px) {
  line-height: 72px;
  font-size: 40px;
  }
  
@media (max-width: 999px) {
  line-height: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
}  
  `
const SubTitle = styled.span`
font-weight: 100;
margin-left: 18px;

@media (max-width: 1000px) {
  margin-left: 8px;
}`

const Body = styled.div`
transition: 2s;
overflow: hidden;
`


const CardButton = styled.a`
transition: 0.5s;
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
margin-bottom: 50px;

:hover {
  color: #fff;
  background-color: #001AFF;
  border-color: #001AFF;
}

:focus-visible {
  color: #fff;
  background-color: #001AFF;
  border-color: #001AFF;
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

const IMAGEBOX = styled.div`
`

const RESPONSIVEBOX = styled.div`
// border: 2px dotted green;
width: 100%;
@media (min-width: 1000px) {
  width: 48%;
  }
`

const RESPONSIVEOUTERBOX = styled.div`
flex-direction: column;

@media (min-width: 1000px) {
  flex-direction: row;
`

type Props = {
  title: string | any;
  hashtags: Array<String>;
  image: string | any;
  fullText: string | any;
  cta: Array<CTA | any>;
  subtitle: string | any,
  annotation: string | any,
  projectDescription: string | any,
  technicalDescription: string | any,
  reflections: string | any,
  year: string | any,
  order: number
}


type CTA = {
  key: Number,
  href: String,
}

export default function DetailsCard(props: Props) {
  const {
    title,
    subtitle,
    hashtags,
    image,
    fullText,
    cta,
    annotation,
    projectDescription,
    technicalDescription,
    reflections,
    year,
    order
  } = props;

  const [opened, setOpened] = useState(false)

  return (<SingleCard>
    <div style={{ cursor: 'pointer' }}>
      <Title
        onClick={() => { setOpened(!opened) }}
        style={order == 0  ? {borderTop: '1px dotted #001FAA'} : {borderTop: 'none'}}
        // style={{borderTop: order == 0 ? '1px dotted #001FAA' : '1px dotted #001FAA'}}
        
        
        >
        {year} / {title}<SubTitle>{subtitle}</SubTitle>
      </Title>
    </div>

    {opened && <Body role="tabpanel" id="section1" aria-hidden="false" >

      <RESPONSIVEOUTERBOX style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
        <RESPONSIVEBOX>
          {image !== null ?
            <IMAGEBOX style={{ maxWidth: '100%', aspectRatio: '1/0.6', position: 'relative', marginBottom: "50px", marginTop: 20 }}>
              <Image src={image} fill alt="Project image"></Image>
            </IMAGEBOX> : ''}
        </RESPONSIVEBOX>

        <RESPONSIVEBOX>
          <p><u>Project description</u><br />
            {projectDescription && parser(projectDescription)}</p>
          <p><u>Technical description</u>
            {technicalDescription && parser(technicalDescription)}</p>
          <div style={{ display: 'flex' }}>
            {cta.map((e, i: Number) => (<CardButton key={i} href={e.href} target={'_blank'} aria-label={e.aria}>{e.text}</CardButton>))}
          </div>
        </RESPONSIVEBOX>
      </RESPONSIVEOUTERBOX>
    </Body>}
  </SingleCard>
  )
}