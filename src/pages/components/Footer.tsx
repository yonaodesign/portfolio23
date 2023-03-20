import React from 'react'
import styled from 'styled-components'

const FooterBar = styled.nav`
width: 100%;
max-width: 1000px;
margin: 0px auto;
padding: 16px 0px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
font-size: 16px;
font-weight: 400;
line-height: 24px
`



type Props = {}

export default function Footer({}: Props) {
  return (<FooterBar>
        <div>2023 Jonas Volny</div>
      </FooterBar>
  )
}