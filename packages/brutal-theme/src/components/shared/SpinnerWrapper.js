import { styled } from 'frontity';
import React from 'react'
import Loading from './icons/loading.svg'

// styles
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
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
      <Loading />
    </Wrapper>
  )
}

export default SpinnerWrapper
