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
  z-index: 20;
  display: none;

  @media (max-width: ${ breakpoints[ "md" ] }px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

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
      animation-name: ${ toptop };
    }
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
      <NavMenu open={ open } close={ screen.width < 768 ? () => setOpen( !open ) : () => setOpen( open ) } />
    </NavStyle>
  )
}

export default connect( Burger )