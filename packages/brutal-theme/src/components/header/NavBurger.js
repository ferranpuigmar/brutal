import React, { useState } from 'react';
import { connect, styled } from 'frontity'
import NavMenu from './NavMenu';

import {theme_colors, breakpoints} from '../../assets/styles/variables'

const BurgerIcon = styled.div`
  width: 3rem;
  height: 3rem;
  position: relative;
  top: 5vh;
  right: 3vh;

  z-index: 20;
  display: none;
  @media (max-width: ${breakpoints["md"]}px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 3rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? theme_colors["grey_dark"] : theme_colors["grey_dark2"]};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-of-type(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-of-type(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-of-type(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const NavStyle = styled.div`
  display: flex;
  align-content: center;
`;

const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <NavStyle>
      <BurgerIcon open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerIcon>
      <NavMenu open={open} close={() => setOpen(!open)}/>
    </NavStyle>
  )
}

export default connect ( Burger )