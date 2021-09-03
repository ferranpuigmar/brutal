import React from 'react'
import { styled } from 'frontity';

// styles
const Wrapper = styled.div`
width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img{
    height: 100%;
    width: auto;
  }
`

const FullImageWrapper = ( { children } ) =>
{
  return (
    <Wrapper>
      { children }
    </Wrapper>
  )
}

export default FullImageWrapper
