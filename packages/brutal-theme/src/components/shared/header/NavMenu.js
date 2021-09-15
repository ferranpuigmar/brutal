import React, { useState, useEffect, useRef } from 'react';
import { connect, styled } from 'frontity';
import Link from "@frontity/components/link";
import Title from '../Title';
import Text from '../Text';
import { css, cx } from '@emotion/css'
import { theme_colors, breakpoints } from '../../../assets/styles/variables'
import ArrowLink from '../ArrowLink';
import { theme } from '../../../assets/styles/theme';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  text-transform: uppercase;
  z-index: 10;

  li { 
    margin: auto 2rem; 
    text-align: center;
    
    @media (max-width: ${ breakpoints[ "lg" ] }px) {
      margin: auto 0 auto 1.5rem; 
    }  
  }

  a { 
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;

    :hover { color: ${theme_colors.primaryColor}; }
  }

  .arrow-element:hover {color: ${theme_colors.primaryColor};} //no funtiona
  
  .navigation__footer { display: none }


  //////////////////////////////mobile-phone-styles-menus
  @media (max-width: ${ breakpoints[ "md" ] }px) {
    ${'' /* .arrow-icon { */}
    ${'' /* .arrow-element { */}
      ${'' /* display: none; */}
    ${'' /* } */}

    flex-flow: column nowrap;
    background-color: ${ theme_colors[ "black" ] };
    position: fixed;
    transform: ${ ( { open } ) => open ? 'translateY(0)' : 'translateY(-100%)' };
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 12vh;
    transition: transform 0.3s ease-in-out;
    text-align: center;

    li {
      margin: auto 0 ;
      color: ${ theme_colors[ "white" ] };

      &:nth-of-type(1){
        overflow: hidden;
        ${'' /* animation-delay: 15s; */}
        transition: transform .1s linear;
        transform: ${ ( { open } ) => open ? 'translateY(0)' : 'translateY(-100%)' };
        opacity: ${ ( { open } ) => open ? '1' : '0' };
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

    .navigation__link { 
      font-size: 24px;
      ${'' /* overflow: hidden;  */}
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

const NavMenu = ( { state, open, close, screenWidth } ) => {
  
  const items = state.source.get( `/menu/${ state.theme.menuUrl }/` ).items;
  const desktopWidth = screenWidth >= breakpoints.md ? true : false;

  return (

    <Ul open={ open }>
      { items.map( (item,index) => {
        return (
          <li className="navigation__item" key={ item.ID }>
            <div className="nav__link-item"onClick={ close }>
              {(items.length-1) === index && desktopWidth ?   
                <Link className="navigation__link" nonekey={ item.ID } link={ `/${ item.slug }` }>
                  <ArrowLink className={"nav-arrow",cx(whiteLink)} isAnchor={false}>{ item.title }</ArrowLink>
                </Link>
                :
                <Link className="navigation__link" nonekey={ item.ID } link={ `/${ item.slug }` }> { item.title } </Link>                
              }
            </div>       
          </li>
        )
      })}
          
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