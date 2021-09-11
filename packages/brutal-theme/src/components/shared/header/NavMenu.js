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
console.log("pantallaaa width ......", screen)
// console.log("pantallaaaaaaaaaaso", screen)

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  text-transform: uppercase;
  z-index: 10;
  li { margin: auto 2vw }
  a { text-decoration: none }
  .navigation__titles:hover { color: ${ theme_colors.grey_dark } }
  .navigation__footer { display: none }
  
  //////////////////////////////mobile-phone-styles-menus
  @media (max-width: ${ breakpoints[ "md" ] }px) {
    flex-flow: column nowrap;
    background-color: ${ theme_colors[ "black" ] };
    position: fixed;
    transform: ${ ( { open } ) => open ? 'translateX(0)' : 'translateX(100%)' };
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 12vh;
    transition: transform 0.3s ease-in-out;
    text-align: center;
    li {
      color: ${ theme_colors[ "white" ] };
      margin: 4.5vh auto;
    }
    .navigation__titles { 
      font-size: 24px 
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
  ${theme.fontSize.h6};
  .arrow-icon, 
  .arrow-icon:after,
  .arrow-icon:before {
    background-color: #fff!important;
  }
`;
const Cooo = styled.div`
  .centermenu{
    display: flex;
    align-content: center;
  }
`;
const NavMenu = ( { state, open, close } ) => {

  const items = state.source.get( `/menu/${ state.theme.menuUrl }/` ).items;
  const [ isMobileWidth, setIsMobileWidth ] = useState(true )
  // const refMenu = useRef()

  console.log(`isMobileWidth1`, isMobileWidth)
  useEffect (()=>{
    const mobileWidth = screen.width < 768 ? true: false;
    setIsMobileWidth(mobileWidth)
    console.log(`isMobileWidth2 `, isMobileWidth )
  }, [] )

    // if (screen.width){
    //   const mobileWidthx = refMenu.current.getBoundingClientRect().width > 992? true: false
    //   const scrolly = refMenu.current.getBoundingClientRect()
    // }
    // console.log(`scrolly`, scrolly)
  // }, [refMenu] )
  
  return (
    
    <Ul open={ open }>
    {/* <div ref={refMenu}>
    </div> */}
    { items.map( (item,index) => {
        return (
          <li className="navigation__item" key={ item.ID }>
            {/* <div onClick={ isMobileWidth ? close : null}> */}
            <div onClick={ close }>
              {(items.length-1) === index && !open ?  
                <Link className="navigation__link" nonekey={ item.ID } link={ `/${ item.slug }` }>
                  <ArrowLink className={cx(whiteLink)} isAnchor={false}>{ item.title }</ArrowLink>
                </Link>
                :
                <Link className="navigation__link" nonekey={ item.ID } link={ `/${ item.slug }` }>
                  <Title level={ 6 } className="navigation__titles">{ item.title }</Title>
                </Link>                
              }
            </div>       
          </li>
        )
      })
    }
          
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