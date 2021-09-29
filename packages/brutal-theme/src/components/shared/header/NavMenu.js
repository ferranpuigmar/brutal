import React, { useState, useEffect } from 'react';
import { connect, styled } from 'frontity';
import Link from "@frontity/components/link";
import { css, cx, keyframes } from '@emotion/css'
import { theme_colors, breakpoints } from '../../../assets/styles/variables'
import ArrowLink from '../ArrowLink';
import { theme } from '../../../assets/styles/theme';
import FooterText from '../FooterText';


const menuDropDown = keyframes`
  0%  { opacity: 0; }
 10%  { transform: translateY(0); }
 20%  { opacity: 1; }
100%  { transform: translateY(-100%); }
`;

const menuLinkpDown = keyframes`
  0%  { transform: translate3d(0, -100%, 0); 
        opacity: 0; }
 10%  { transform: translate3d(0, -100%, 0); 
        opacity: 1; }
100%  { transform: translate3d(0, 0, 0);}
`;


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  text-transform: uppercase;
  z-index: 10;

  li { 
    margin: auto 3.5rem; 
    text-align: center;
    
    @media (max-width: ${ breakpoints[ "xl" ] }px) {
    margin: auto 2rem; 
    }  
    @media (max-width: ${ breakpoints[ "lg" ] }px) {
      margin: auto 0 auto 1.5rem; 
    }  
  }

  a { 
    text-decoration: none;
    color: ${ theme_colors.white };
    font-size: 1.2rem;

    
  }
  .green a { color: ${ theme_colors.primaryColor } }

  
  
  .navigation__footer { display: none }


  //////////////////////////////mobile-phone-styles-menus
  @media (max-width: ${ breakpoints[ "md" ] }px) {

    flex-flow: column nowrap;
    background-color: ${ theme_colors.black };
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 12vh;
    transition: transform 0.5s ease-in-out;
    transition-delay: .1s;
    transform: ${ ( { open } ) => open ? 'translateY(0)' : 'translateY(-100%)' };
    text-align: center;

    li { margin: 3vh 0;  }

    .navigation__link-box {
      height: 100%;
      overflow: hidden;
      position: relative;
      width: 100%;

    }
    
    .navigation__link-box div {
      animation: ${ menuLinkpDown } 0.8s;
      animation-fill-mode: forwards;
      transform: translate(200%, -100%);
    }

    .navigation__link-box.box1 div { animation-delay: .75s; } 
    .navigation__link-box.box2 div { animation-delay: .80s; } 
    .navigation__link-box.box3 div { animation-delay: .70s; } 
    .navigation__link-box.box4 div { animation-delay: .85s; } 

    .navigation__link-box.box-footer div { animation-delay: 1.2s; }  

    .navigation__link-box__close div {
      opacity: 0;
      animation: ${ menuDropDown } 0.3s;

      animation-delay: 1.2s;
      animation-fill-mode: forwards;
      transform: translate(-250%, 0);
    }
    .navigation__link { 
      font-size: 2.6rem; 
      letter-spacing: 0px;

      @media (max-width: ${ breakpoints[ "sm" ] }px) {
        font-size: 2.2rem; 
      }
    }
    ${ '' /* .green a { color: ${theme_colors.white} } */ }

    //////////////////////////////////////////FOOTER-NAV
    .navigation__footer { 
      display: flex;

      .t1 { display: none; }
    }

    .footer__text {
      color: ${ theme_colors.white } ;
      letter-spacing: 1px;
      line-height: 2rem;
    
      .footer__text-title { font-size: 1.2rem; }
      .footer__text-text a {
        color: ${ theme_colors.white } ;
        text-decoration: none;
        font-size: 1.2rem; 
        
        :hover { color: ${ theme_colors.primaryColor }; }
      }

      @media (max-width: ${ breakpoints[ "sm" ] }px) {
        .footer__text-title  { font-size: 1.1rem; }
        .footer__text-text a { font-size: 1.1rem; }
      }  
    }
  }
.arrow-button:hover {color: ${ theme_colors.primaryColor };}

  li a:hover { 
      transition: color .2s linear .08s;
      color: ${ theme_colors.primaryColor }; 
      }
`;

const NavFooter = styled.div`
  margin: 12vh 0 6vh;
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
    &:hover {
      color: ${ `${ theme_colors.primaryColor }!important` };
      ${ theme.fontSize.h6 };
      .arrow-icon, 
      .arrow-icon:after,
      .arrow-icon:before {
      background-color: ${ `${ theme_colors.primaryColor }!important` };
    }
  }
`;

const NavMenu = ( { state, open, close, mobilWidth, footerFields, currentPage } ) =>
{
  const items = state.source.get( `/menu/${ state.theme.menuUrl }/` ).items;

  return (

    <Ul open={ open }>
      { items.map( ( item, index ) =>
      {
        return (
          <li className="navigation__item" onClick={ close } key={ item.ID }>
            { ( items.length - 1 ) === index && !mobilWidth ?
              <Link className="navigation__link" nonekey={ item.ID } link={ `/${ item.slug }` }>
                <ArrowLink className={ "nav-arrow", cx( whiteLink ) } isAnchor={ false }>{ item.title }</ArrowLink>
              </Link>
              :
              <div className={ open ? `navigation__link-box box${ index + 1 }` : "navigation__link-box__close" } >
                {/* <div className= {currentPage2===item.slug && !mobilWidth ? "navigation__link-wrapper green" : "navigation__link-wrapper" } > */ }
                <div className={ currentPage === item.slug && !mobilWidth ? "navigation__link-wrapper green" : "navigation__link-wrapper" } >
                  <Link nonekey={ item.ID }
                    className={ "navigation__link" }
                    link={ `/${ item.slug }` }>
                    { item.title }
                  </Link>
                </div>
              </div>
            }
          </li>
        )
      } ) }
      <NavFooter className={ open ? "navigation__footer navigation__link-box box-footer" : "navigation__footer navigation__link-box__close" }>
        <FooterText footerFields={ footerFields } />
      </NavFooter>
    </Ul>
  )
}

export default connect( NavMenu )