import { styled, keyframes } from 'frontity';
import React from 'react'
import { theme } from '../../assets/styles/theme';
import loading from './icons/loading.svg'

// Styles
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  top: left;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${ theme.colors.black };
`

const loadingAnimation = keyframes`
    0%{
        opacity: 0.08;
        filter: blur(5px);
        letter-spacing: 3px;
        }
    100%{
    }
`;

const LoadingElement = styled.div`
  display:flex;
	justify-content: center;
	align-items: center;
	height:100%;
	margin: auto;
	font-family: "DMSansRegular", sans-serif, Arial;
	animation: ${ loadingAnimation } 1.2s infinite 0s ease-in-out;
	animation-direction: alternate;
	text-shadow: 0 0 1px white;
  font-size: ${ theme.fontSize.h3 };
  color: ${ theme.colors.primaryColor }
`


// Component
const Loading = () =>
{
  return (
    <Wrapper>
      <LoadingElement>Cargando</LoadingElement>
    </Wrapper>
  )
}

export default Loading
