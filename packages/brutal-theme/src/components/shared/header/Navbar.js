import React, { useEffect, useRef } from 'react';
import { connect, styled } from 'frontity'
import Container from '../../layout/Container';
import NavBurger from './NavBurger';
import NavLogo from './NavLogo';
import { breakpoints } from '../../../assets/styles/variables'
import { mq } from '../../../assets/styles/mediaqueries';

// const screen = typeof window !== 'undefined' && new ScreenSizeDetector(); // Default options
// console.log("pantallaaaaaaaaaaso", screen.width)

const Nav = styled.nav`
  width: 100%;
  height: 8vh;
  min-height: 40px;
  max-height: 60px;
  display: flex;
  justify-content: space-between;

  z-index: 10000;
  ${'' /* position: fixed; */}
  ${'' /* background-color: #000; */}
 
  
  .logo {
    height: 100%;
    padding:.5vh .1vw;
  }

  @media (max-width: ${ breakpoints[ "md" ] }px) {
    height: 15vh;
    max-height: none;
    .logo {
      height: 100%;
      padding: 2vh 0;
    }
  }
`
const Header = styled.header`

  .line {
    z-index: 100000;
    ${ mq[ 'md' ] }{
      border: .5px solid white;
      border-left: 0;
      border-right: 0;
      border-top: 0px;
    }
  }
`;

const Navbar = ({ scroll }) => {
  // console.log(`window`, window.pageYOffset)
  console.log(`scroll`, scroll)
//   const refMenu = useRef()
// useEffect (()=>{
//   // console.log(refMenu, "-------------------")
//   if (refMenu.current){
//     const currentWidth = refMenu.current.getBoundingClientRect().width > 992? true: false
//     // console.log(refMenu.current.offsetWidth , "--------2-----------")
//     console.log("----ref", currentWidth)
//   }

// }, [refMenu] )

  return (
    <Header>
      <div className={ scroll > 0 ? "line all" : "all" }>
      <Container>
        <Nav>
          <NavLogo />
          <NavBurger />
        </Nav>
      </Container>
      </div>
    </Header>

  )
}

export default connect( Navbar )