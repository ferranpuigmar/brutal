import React, { useState, useEffect, useRef } from 'react';
import { connect, styled } from 'frontity';
import Link from "@frontity/components/link";
import Title from '../Title';
import Text from '../Text';
import { css, cx } from '@emotion/css'
import { theme_colors, breakpoints } from '../../../assets/styles/variables'
import ArrowLink from '../ArrowLink';
import { theme } from '../../../assets/styles/theme';
import ScreenSizeDetector from 'screen-size-detector'

const screen = typeof window !== 'undefined' && new ScreenSizeDetector(); // Default options

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  text-transform: uppercase;
  z-index: 10;
  li { 
    margin: auto 2vw; 
    text-align: center;
    
  @media (max-width: ${ breakpoints[ "lg" ] }px) {
    margin: auto 0 auto 1.2vw; 
  }
    }
  a { text-decoration: none }
  .navigation__titles:hover { color: ${ theme_colors.grey_dark } }
  .navigation__footer { display: none }
  z-index: 10;
  
  @media (max-width: ${ breakpoints[ "lg" ] }px) {
    margin-left: 30px;
  }

  //////////////////////////////mobile-phone-styles-menus
  @media (max-width: ${ breakpoints[ "md" ] }px) {

    .navigation__link {
      .arrow-icon {
      ${'' /* .arrow-element { */}
        display: none;
      }
    }

    flex-flow: column nowrap;
    background-color: ${ theme_colors[ "black" ] };
    position: fixed;
    transform: ${ ( { open } ) => open ? 'translateY(0)' : 'translateY(-100%)' };
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 12vh;
    transition: transform .2s ease-in-out;
    text-align: center;

    li {

      
      .arrow-element span {
        ${theme.fontSize.h6}
      }
    }
      color: ${ theme_colors[ "white" ] };
      ${'' /* margin: 4.5vh auto; */}

      &:nth-of-type(1){
        overflow: hidden;
        ${'' /* animation-delay: 15s; */}
        transition: transform .1s linear;
        transform: ${ ( { open } ) => open ? 'translateY(0)' : 'translateY(-100%)' };
        opacity: ${ ( { open } ) => open ? '1' : '0' };
        :hover {

        }
      }
      &:nth-of-type(2){
        ${'' /* animation-delay: 15s; */}
        transition: transform .12s linear;
        transform: ${ ( { open } ) => open ? 'translateY(0)' : 'translateY(-100%)' };
      }
      &:nth-of-type(3){
        ${'' /* animation-delay: 15s; */}
        transition: transform .15s linear;
        transform: ${ ( { open } ) => open ? 'translateY(0)' : 'translateY(-100%)' };
      }
      &:nth-of-type(4){
        ${'' /* animation-delay: 15s; */}
        transition: transform .18s linear;
        transform: ${ ( { open } ) => open ? 'translateY(0)' : 'translateY(-100%)' };
      }
    }

    

    .navigation__titles { 
      font-size: 24px;
      overflow: hidden; 
    }
    
    .navigation__footer { display: flex }

    
  }
`;

const NavFooter = styled.div`
  margin: 15vh 0;
  text-align: left;
  text-transform: none;
  display: flex;
  justify-content: space-around;
  .navigation__footer-title { font-size: 15px }
`;

const whiteLink = css`
  color: #fff!important;
  ${ theme.fontSize.h6 };
  .arrow-icon, 
  .arrow-icon:after,
  .arrow-icon:before {
    background-color: #fff!important;
  }
`;

const NavMenu = ( { state, open, close } ) => {

  const items = state.source.get( `/menu/${ state.theme.menuUrl }/` ).items;

  return (

    <Ul open={ open }>
      { items.map( ( item, index ) =>
      {
        return (
          <li className="navigation__item" key={ item.ID }>
            <div onClick={ close }>
              {(items.length-1) === index && !open ?  
                <Link className="navigation__link" nonekey={ item.ID } link={ `/${ item.slug }` }>
                  <ArrowLink className={cx(whiteLink)} variant="bold" isAnchor={false}>{ item.title }</ArrowLink>
                </Link>
                :
                <Link className="navigation__link" nonekey={ item.ID } link={ `/${ item.slug }` }>
                  <Title level={ 6 } className="navigation__titles">{ item.title }</Title>
                </Link>
              }
            </div>
          </li>
        )
      } ) }

      <NavFooter className="navigation__footer">
        <div>
          <Title level={ 5 } className="navigation__footer-title">ENCUÉNTRANOS</Title>
          <Text text={ "hola@esmuybrutal.com" } size={ "1.2rem" } className="navigation__footer-text" />
        </div>
        <div>
          <Title level={ 5 } className="navigation__footer-title">SIGUENOS</Title>
          <Link link="https://www.instagram.com/esmuybrutal/">
            <Text text={ "@esmuybrutal" } size={ "1.2rem" } className="navigation__footer-text" />
          </Link>
        </div>
      </NavFooter>
    </Ul>
  )
}

export default connect( NavMenu )