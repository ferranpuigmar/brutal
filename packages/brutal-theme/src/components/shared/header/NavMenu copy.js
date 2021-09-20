import React, { useState, useEffect, useRef } from 'react';
import { connect, styled } from 'frontity';
import Link from "@frontity/components/link";
import Title from '../Title';
import Text from '../Text';
import { css, cx, keyframes  } from '@emotion/css'
import { theme_colors, breakpoints } from '../../../assets/styles/variables'
import ArrowLink from '../ArrowLink';
import { theme } from '../../../assets/styles/theme';
import FooterText from '../FooterText';


const menuDropDown = keyframes`
0%   { transform: translateY(0); }
100% { transform: translateY(-100%); }
`;
const menuLinkpDown = keyframes`
 0% { transform: translate3d(0, -111%, 0); }
  100% { transform: translate3d(0, 0, 0); }
`;


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  ${'' /* text-transform: uppercase; */}
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
    color: ${theme_colors.white};
    font-size: 1.2rem;

    :hover { 
      transition: color .3s linear .08s;
      color: ${theme_colors.primaryColor}; 
      }
  }

  .arrow-element:hover {color: ${theme_colors.primaryColor};} //no funtiona
  
  .navigation__footer { display: none }


  //////////////////////////////mobile-phone-styles-menus
  @media (max-width: ${ breakpoints[ "md" ] }px) {

    flex-flow: column nowrap;
    background-color: ${ theme_colors.black};
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 12vh;
    transition: transform 0.2s ease-in-out;
    transform: ${ ( { open } ) => open ? 'translateY(0)' : 'translateY(-100%)' };
    text-align: center;

      ${'' /* overflow: hidden; */}
    ${'' /* .box {
      height: 20px;
      overflow: hidden;
    } */}

    li {
      ${'' /* display: block; */}
      ${'' /* border: 2px solid green; */}
      margin: auto 0; 
      ${'' /* margin:  0;  */}
      
      a { 
        
        display: inline-block;
        ${'' /* color: ${ theme_colors.white };  */}
        ${'' /* position: relative;  */}
        ${'' /* opacity: 0;  */}
      }
    }
    .navigation__item{  
      background-color: #000;
 
      &:nth-of-type(1) {
      background-color: #777;
  
        animation: ${menuLinkpDown} 5.5s;
        animation-delay: .75s;
        animation-fill-mode: forwards;
        top: 0;
        transform: translate(0, -100%);

      }
      ${'' /* &:nth-of-type(2){       
        transition: all 0.5s ease-in-out 1s; 
        transform: ${ ({ open }) => open ? 'translateY(0)' : 'translateY(-200%)' };
        opacity: ${ ({ open }) => open ? '1' : '-6.5' };
        z-index: 30;
      }
      &:nth-of-type(3){
        transition: all 0.5s ease-in-out 1s;        
        transform: ${ ({ open }) => open ? 'translateY(0)' : 'translateY(-300%)' };
        opacity: ${ ({ open }) => open ? '1' : '-6.5' };
        z-index: 20;
      }
      &:nth-of-type(4){
        transition: all 0.2s ease-in-out 1s; 
        transform: ${ ({ open }) => open ? 'translateY(0)' : 'translateY(-400%)' };
        opacity: ${ ({ open }) => open ? '1' : '-6.5' };
        z-index: 10;
      } */}
      
      
    }
    .navigation__link { 
      font-size: 30px; 
      letter-spacing: 2px;
    }
    
    ${'' /* // footer del Nav ..............................................*/}
    .navigation__footer { 
      display: flex;

      .t1 { display: none; }
    }

    .footer__text {
      color: ${theme_colors.white} ;
      letter-spacing: 1px;
      line-height: 2rem;
    
      .footer__text-title { font-size: 1.2rem; }
      .footer__text-text a {
        color: ${theme_colors.white} ;
        text-decoration: none;
        font-size: 1.2rem; 
        
        :hover { color: ${theme_colors.primaryColor}; }
      }


      @media (max-width: ${ breakpoints[ "sm" ] }px) {
        .footer__text-title  { font-size: 1.1rem; }
        .footer__text-text a { font-size: 1.1rem; }
      }  
    }
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
    &:hover {
      color: ${ `${theme_colors.primaryColor}!important` };
      ${ theme.fontSize.h6 };
      .arrow-icon, 
      .arrow-icon:after,
      .arrow-icon:before {
        background-color: ${ `${theme_colors.primaryColor}!important` };
    }
    }
`;

const NavMenu = ( { state, open, close, mobilWidth, footerFields } ) => {
  
  const items = state.source.get( `/menu/${ state.theme.menuUrl }/` ).items;

  console.log(`open----`,   open)
  return (

    <Ul open={ open }>
      {/* { mobilWidth ?
        <>
        { items.map( (item,) => {
        return (
                <div className="set-link showAnchor">
                  <Link className="navigation__link" nonekey={ item.ID } link={ `/${ item.slug }` }> { item.title } </Link>                
                  <div className="indent"></div>
                </div>
              
        )}
        </>
      : */}

      { items.map( (item,index) => {
        return (
          <li className="navigation__item" key={ item.ID }>

          {/* <div className="navigation__item"> */}
            <div className="nav__link-item" onClick={ close }>
              {(items.length-1) === index && !mobilWidth ?   
                <Link className="navigation__link" nonekey={ item.ID } link={ `/${ item.slug }` }>
                  <ArrowLink className={"nav-arrow",cx(whiteLink)} isAnchor={false}>{ item.title }</ArrowLink>
                </Link>
                :
                <Link className="navigation__link" nonekey={ item.ID } link={ `/${ item.slug }` }> { item.title } </Link>                
              }
            </div>       
          {/* </div> */}
          </li>
        )
      })}
          
      <NavFooter className="navigation__footer">
        <FooterText footerFields={footerFields}/>
      </NavFooter>
    </Ul>
  )
}

export default connect( NavMenu )