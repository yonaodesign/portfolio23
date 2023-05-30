import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
transition: 1s;
&:hover {
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.01);
  transform: scale(1.01);
}
`

const StyledLink = styled(Link)`
color: #000000;
text-decoration: none;
font-weight: 600;
cursor: pointer;
border-bottom: 1px solid transparent;
&: hover {
  // border-bottom: 1px solid #000000;
  text-decoration: underline;
}
}
`

const DisplayImage = styled.div`
// filter: grayscale(100%);

// &:hover {
//   filter: grayscale(0%);
}
`

const GalleryCard: React.FC = (props) => {
  if (props.payload !==undefined) return (
    <Wrapper style={{width: '100%',
    padding: 10,
    // border: '1px solid #e2e2e2',
    borderRadius: 20
    }}>
      {/* <pre>
        {JSON.stringify(, null, 1)}
      </pre> */}

<StyledLink href={`/project/${props.payload.projectSlug}`}>
    <DisplayImage style={{
      color: 'white',
      width: '100%', 
      aspectRatio: '2/1.3', 
      backgroundImage: `url("/${props.payload.projectGalleryImage}")`, 
      borderRadius: 10, 
      backgroundSize: 'cover'
    }}/>
      </StyledLink>
    <h4 style={{marginBottom: 15}}>{props.payload.projectName}</h4>
    <span>{props.payload.projectDescription}</span>
    <div style={{marginTop: 20}}>
    <StyledLink href={`/project/${props.payload.projectSlug}`}>
      View project →
    </StyledLink>
      </div>
  </Wrapper>
  )
}

export default GalleryCard