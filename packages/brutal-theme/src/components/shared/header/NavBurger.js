import React, { useState } from 'react';
import { connect, styled } from 'frontity';
import NavMenu from './NavMenu';
import { jsx, css, cx, keyframes } from '@emotion/react'

import { theme_colors, breakpoints } from '../../../assets/styles/variables'
import { theme } from '../../../assets/styles/theme';

import ScreenSizeDetector from 'screen-size-detector'

const screen = typeof window !== 'undefined' && new ScreenSizeDetector(); // Default options


const topOpen = keyframes`
  0%   { transform: translateY(0.0rem) rotate(0deg); }
  60%  { transform: translateY(1.1rem) rotate(0deg); }
  100% { transform: translateY(1.1rem) rotate(45deg); }
`;
const topClose = keyframes`
  0%   { transform: translateY(1.1rem) rotate(45deg); }
  60%  { transform: translateY(1.1rem) rotate(0deg); }
  100% { transform: translateY(0.0rem) rotate(0deg); }
`;
const bottomOpen = keyframes`
  0%   { transform: translateY(0.0rem) rotate(0deg); }
  55%  { transform: translateY(-.9rem) rotate(0deg); }
  100% { transform: translateY(-.9rem) rotate(-45deg); }
`;
const bottomClose = keyframes`
  0%   { transform: translateY(-.9rem) rotate(-45deg); }
  55%  { transform: translateY(-.9rem) rotate(0deg); }
  100% { transform: translateY(0.0rem) rotate(0deg); }
`;
const middleOpen = keyframes`
  0%  { opacity: 1; }
  40% { opacity: 1; }
  55% { opacity: 0; }
`;
const middleClose = keyframes`
  0%, 50%  { opacity: 0; }
  85% { opacity: 1; }
  100% { opacity: 1; }
`;
const bounce = keyframes`
  from, 20%, 53%, 80%, to { transform: translate3d(0,0,0); }
  40%, 43% { transform: translate3d(0, -30px, 0); }
  70% { transform: translate3d(0, -15px, 0); }
  90% { transform: translate3d(0,-4px,0); }
`
const BurgerIcon = styled.div`
  width: 3rem;
  height: 3rem;
  position: relative;
  top: 5vh;
  ${'' /* top: ${ ( { open } ) => open ? '5vh' : '5vh'}; */}
  ${'' /* right: ${ ( { open } ) => open ? '10vw' : '0vw'}; */}
  z-index: 20;
  display: none;

  @media (max-width: ${ breakpoints[ "md" ] }px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

    .line {
      width: 3rem;
      width: 3rem;
      height: 0.25rem;
      background-color: ${ theme.colors.white };
      border-radius: 10px;
      opacity: 1;
      transform-origin: center center;
    }

    .open {

      &:nth-of-type(1){
        animation: ${topOpen} 1s ease 0s ;
        animation-fill-mode: forwards;
      } 
      &:nth-of-type(2) {
        transition: opacity 1s ease;
        opacity: 0;
      }
      &:nth-of-type(3) {
        animation:${bottomOpen} 1s ease 0s ;
        animation-fill-mode: forwards;
      } 
    }

    .close {
      &:nth-of-type(1){
        animation:${topClose} 1s ease;
        transform: translateY(0) rotate(0);
      } 
      &:nth-of-type(2){
        transform-origin: center center;
        animation:${middleClose} 1s ease;
        opacity: 1;
      } 
      &:nth-of-type(3){
        transform-origin: center center;
        animation:${bottomClose} 1s ease;
        transform: translateY(0) rotate(0);
      } 
    }
  } 
  
`;

const NavStyle = styled.div`
  display: flex;
  align-content: center;
`;



const Burger = () =>
{
  const [ open, setOpen ] = useState()

  const handleAnimation = () => {
    const elem = document.querySelector('html');
    elem.style.overflow = open?.status ? "visible" : "hidden";
    setOpen( !open ? {status:true} : {status:!open.status}  )
  } 
  const pintar = (open) => {
    if (!open)  return "line"
    return open.status? "line open" : "line close";
  }   
  return (
    <NavStyle>
      <BurgerIcon open={ open }  onClick={handleAnimation}>
          <div className={pintar(open)}/>
          <div className={pintar(open)}/>
          <div className={pintar(open)}/>
          {/* <div className={handleAnimation()}/> */}
          {/* <div className={handleAnimation()}/> */}
      </BurgerIcon>
      <NavMenu open={ open?.status } close={ screen.width < 768 ? () => setOpen ( {status:!open.status}  ) : () => setOpen ( {status:open.status}  ) } />
    </NavStyle>
  )
}

export default connect( Burger )