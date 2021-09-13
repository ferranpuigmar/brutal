import React, { useState } from 'react';
import { connect, styled } from 'frontity';
import NavMenu from './NavMenu';
import { jsx, css, keyframes } from '@emotion/react'

import { theme_colors, breakpoints } from '../../../assets/styles/variables'
import { theme } from '../../../assets/styles/theme';

import ScreenSizeDetector from 'screen-size-detector'

const screen = typeof window !== 'undefined' && new ScreenSizeDetector(); // Default options


const toptop = keyframes`
  
    0% {
      transform: ${ ( { open } ) => open ? 'translateX(0%)' : 'translateX(0)' };
      }
    100% {
      transform: ${ ( { open } ) => open ? 'translateX(100%)' : 'translateX(0)' };
    }
  
`;
const BurgerIcon = styled.div`
  width: 3rem;
  height: 3rem;
  position: relative;
  top: 5vh;
  z-index: 20;
  display: none;

  @media (max-width: ${ breakpoints[ "md" ] }px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  ${'' /* div {
    width: 3rem;
    height: 0.25rem;
    background-color: ${ theme.colors.white };
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-of-type(1) {
      transform: ${ ( { open } ) => open ? 'rotate(45deg)' : 'rotate(0)' };
    }
    &:nth-of-type(2) {
      transform: ${ ( { open } ) => open ? 'translateX(100%)' : 'translateX(0)' };
      opacity: ${ ( { open } ) => open ? 0 : 1 };
    }
    &:nth-of-type(3) {
      transform: ${ ( { open } ) => open ? 'rotate(-45deg)' : 'rotate(0)' };
    } */}
  div {
    width: 3rem;
    width: 3rem;
    height: 0.25rem;
    background-color: ${ theme.colors.white };
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.4s linear;

    

    &:nth-of-type(1) {
      transform-origin: 50% 0 ;
      animation-name: ${toptop};
      ${'' /* animation: ${ ( { open } ) => open ? `${toptop} 1s ease` : 'translateY(0)'}; */}
      ${'' /* transform: ${ ( { open } ) => open ? 'translateY(1rem) rotate(45deg) scale(1.3)' : 'translateY(0) rotate(0)' }; */}
      ${'' /* transform: ${ ( { open } ) => open ? 'translateY(-1rem)' : 'rotate(0)'; */}
    } 
    ${'' /* &:nth-of-type(2) {
      transform: ${ ( { open } ) => open ? 'translateX(100%)' : 'translateX(0)' };
      opacity: ${ ( { open } ) => open ? 0 : 1 };
    transition: all 0.4s linear;
    }
    &:nth-of-type(3) {
      transform-origin: 50% 0 ;
      transform: ${ ( { open } ) => open ? 'translateY(-1rem) rotate(-45deg)  scale(1.25)' : 'translateY(0) rotate(0)'};
    transition: all 0.4s linear;
    } */}
  }
`;


const NavStyle = styled.div`
  display: flex;
  align-content: center;
`;

const Burger = () =>
{
  const [ open, setOpen ] = useState( false )

  return (
    <NavStyle>
      <BurgerIcon open={ open } onClick={ () => setOpen( !open ) }>
        <div />
        <div />
        <div />
      </BurgerIcon>
      <NavMenu open={ open } close={ screen.width < 768 ? () => setOpen ( !open ) : () => setOpen ( open ) } />
    </NavStyle>
  )
}

export default connect( Burger )