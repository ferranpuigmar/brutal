import { styled } from 'frontity';
import React from 'react'
import loading from './icons/loading.svg'

// styles
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  top: left;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const SpinnerWrapper = () =>
{
  return (
    <Wrapper>
      <img src={ loading } />
    </Wrapper>
  )
}

export default SpinnerWrapper
