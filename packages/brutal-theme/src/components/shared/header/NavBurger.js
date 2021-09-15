import React, { useState, useEffect } from 'react';
import { connect, styled } from 'frontity';
import NavMenu from './NavMenu';
import { jsx, css, cx, keyframes } from '@emotion/react'
import { theme_colors, breakpoints } from '../../../assets/styles/variables'
import { theme } from '../../../assets/styles/theme';


const topOpen = keyframes`
  0%      { transform: translateY(0.0rem) rotate(0deg); }
  45%,60% { transform: translateY(1.1rem) rotate(0deg); }
  100%    { transform: translateY(1.1rem) rotate(45deg); }
`;
const topClose = keyframes`
  0%      { transform: translateY(1.1rem) rotate(45deg); }
  45%,60% { transform: translateY(1.1rem) rotate(0deg); }
  100%    { transform: translateY(0.0rem) rotate(0deg); }
`;
const bottomOpen = keyframes`
  0%      { transform: translateY(0.0rem) rotate(0deg); }
  45%,60% { transform: translateY(-.9rem) rotate(0deg); }
  100%    { transform: translateY(-.9rem) rotate(-45deg); }
`;
const bottomClose = keyframes`
  0%      { transform: translateY(-.9rem) rotate(-45deg); }
  45%,60% { transform: translateY(-.9rem) rotate(0deg); }
  100%    { transform: translateY(0.0rem) rotate(0deg); }
`;

const BurgerIcon = styled.div`
  width: 3rem;
  height: 3rem;
  position: relative;
  top: 3.6rem;
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
        animation: ${topOpen} .7s ease-in-out 0s ;
        animation-fill-mode: forwards;
      } 
      &:nth-of-type(2) {
        transition: opacity .7s ease-in-out;
        opacity: 0;
      }
      &:nth-of-type(3) {
        animation:${bottomOpen} .7s ease-in-out 0s ;
        animation-fill-mode: forwards;
      } 
    }
    .close {
      &:nth-of-type(1){
        animation:${topClose} 1s ease;
        transform: translateY(0) rotate(0);
      } 
      &:nth-of-type(2){
        transition: opacity .7s ease-in-out;
        opacity: 1;
      } 
      &:nth-of-type(3){
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


const Burger = ({ screenWidth }) =>
{ 
  const [ open, setOpen ] = useState()

  const handleAnimation = () => {
    const elem = document.querySelector('html');
    elem.style.overflow = open?.status ? "visible" : "hidden";
    setOpen( !open ? {status:true} : {status:!open.status}  )
  } 
  const handelBurgerClass = (open) => {
    return !open ? "line" : open.status? "line open" : "line close";
  }   
  
  if (screenWidth > breakpoints.md) {
    const elem = document.querySelector('html');
    elem.style.overflow = "visible" ;
  }

  return (
    <NavStyle>
      <BurgerIcon open={ open }  onClick={handleAnimation}>
          <div className={handelBurgerClass(open)}/>
          <div className={handelBurgerClass(open)}/>
          <div className={handelBurgerClass(open)}/>
      </BurgerIcon>
      <NavMenu 
        screenWidth={screenWidth} 
        open={ open?.status } 
        close={ screenWidth < breakpoints.md? () => setOpen({status:!open.status}) : () => setOpen({status:open.status})} 
      />
    </NavStyle>
  )
}

export default connect( Burger )