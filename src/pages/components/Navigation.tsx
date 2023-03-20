import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const NavigationBar = styled.nav`
width: 100%;
max-width: 1000px;
margin: 0px auto;

display: flex;
flex-direction: row;
padding: 16px 0px;
align-items: center;
justify-content: space-between;

div {
  display: flex;
  flex-direction: row;
  a {
    margin-right: 6px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    
    text-decoration-color: rgb(72, 95, 199);
    text-decoration-line: none;
    text-decoration-style: solid;
    text-decoration-thickness: auto;
    text-rendering: optimizelegibility;
    -moz-osx-font-smoothing: grayscale;
    color: rgb(74, 74, 74);
}
}
`

type Props = {}

export default function Navigation({}: Props) {
  return (
    <NavigationBar>
      {/* <div>LOL</div> */}
    <div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
    </div>

    <div>
      <Link href="/files/Jonas_Volny.pdf" target={'_blank'}>Resume</Link>
      <Link href="/contact">Contact</Link>
    </div>
   </NavigationBar>
  )
}