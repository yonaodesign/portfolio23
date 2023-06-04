import React from 'react'
import styled from 'styled-components'
import BREAKPOINTS from '../api/breakpoints'

const StyledSectionTools = styled.section`
  display: flex;
  flex-direction: row;
  padding: 100px 100px;
  gap: 50px;

  @media (max-width: ${BREAKPOINTS.medium}px) {
    flex-direction: column;}
`

const MyToolsSection = (props) => {
  return (
    <StyledSectionTools id={props.id}>
          <div style={{ width: '100%' }}>
            <h4>Development</h4>
            <ul>
              <li>React.js</li>
              <li>HTML, CSS & JS ES6</li>
              <li>SQL (PostgreSQL), NoSQL</li>
              <li>Firebase, Vercel, Render</li>
              <li>Node.js</li>
              <li>AWS S3, Firebase Storage</li>

            </ul>
          </div>


          <div style={{ width: '100%' }}>
            <h4>Visual</h4>
            <ul>
              <li>Basic UX/UI</li>
              <li>Wireframing & Prototyping</li>
              <li>Figma</li>
              <li>Adobe Photoshop</li>
              <li>Adobe Premiere</li>
            </ul>
          </div>


          <div style={{ width: '100%' }}>
            <h4>SEO</h4><ul>
              <li>Technical SEO</li>
              <li>Content SEO</li>
              <li>MEO</li>
              <li>Google Analytics</li>
              <li>SEMrush</li>
              <li>Lighthouse</li>

            </ul>
          </div>
        </StyledSectionTools>
  )
}

export default MyToolsSection