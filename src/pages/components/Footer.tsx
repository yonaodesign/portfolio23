import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

import BREAKPOINTS from '../api/breakpoints'


const FooterBar = styled.nav`
width: 100%;
max-width: 1000px;
margin: 0px auto;
padding: 16px 0px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
font-size: 16px;
font-weight: 400;
line-height: 24px;

@media (max-width: ${BREAKPOINTS.medium}px) {
  justify-content: flex-start;
  margin-left: 35px;
}
`

const StyledLink = styled(Link)`
color: #000000;
text-decoration: none;
cursor: pointer;
// font-weight: 600;
border-bottom: 1px solid transparent;
&: hover {
  // border-bottom: 1px solid #000000;
  text-decoration: underline;
}
}
`

type Props = {}

export default function Footer({}: Props) {
  return (<FooterBar>
        <span>&copy; 2023 Jonas Volny</span>
        <div style={{position: 'absolute', right: 20}}><StyledLink style={{color: 'black'}} href="#">To the top ↑</StyledLink></div>
      </FooterBar>
  )
}