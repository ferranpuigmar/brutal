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
  width: 3.5rem;
  height: 3rem;
  position: relative;
  top: 3.6rem;
  z-index: 20;
  display: none;

  @media (max-width: ${ breakpoints[ "md" ] }px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;

  
    .line {
      ${'' /* width: 3rem; */}
      width: 3rem;
      height: 0.25rem;
      background-color: ${ theme.colors.white };
      border-radius: 10px;
      opacity: 1;
      transform-origin: center center;
    }
    .open {
      &:nth-of-type(1){
        animation: ${topOpen} .6s ease-in-out 0s ;
        animation-fill-mode: forwards;
      } 
      &:nth-of-type(2) {
        transition: opacity .6s ease-in-out;
        opacity: 0;
      }
      &:nth-of-type(3) {
        animation:${bottomOpen} .6s ease-in-out 0s ;
        animation-fill-mode: forwards;
      } 
    }
    .close {
      &:nth-of-type(1){
        animation:${topClose} .6s ease;
        transform: translateY(0) rotate(0);
      } 
      &:nth-of-type(2){
        transition: opacity .6 ease-in-out;
        opacity: 1;
      } 
      &:nth-of-type(3){
        animation:${bottomClose} .6s ease;
        transform: translateY(0) rotate(0);
      } 
    }
    :hover {
      .line {
        &:nth-of-type(1) { transform: translateY(-.2rem); } 
        &:nth-of-type(3) { transform: translateY(0.2rem); }
      }
    }
  }   
`;

const NavStyle = styled.div`
  display: flex;
  align-content: center;
`;


const Burger = ({ screenWidth, mobilWidth, footerFields }) =>
{ 
  const [ open, setOpen ] = useState()
  
  const handleAnimation = () => {
    
    console.log(`window`, window)
    const elem = document.querySelector('html');
    elem.style.overflow = open?.status ? "visible" : "hidden";
    setOpen( !open ? {status:true} : {status:!open.status} )
    console.log(`open2`, open.status)
  } 
  const handelBurgerClass = (open) => {
    return !open ? "line" : open.status? "line open" : "line close";
  }   
  
  if (!mobilWidth) {
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
        footerFields={footerFields}
        mobilWidth={mobilWidth}
        open={ open?.status } 
        close={ () => setOpen({status:!open.status})} 
      />
    </NavStyle>
  )
}

export default connect( Burger )