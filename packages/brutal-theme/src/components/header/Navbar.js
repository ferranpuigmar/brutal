import React from 'react';
import { connect, styled } from 'frontity'

import Container from './../layout/Container';
import NavBurger from './NavBurger';
import NavLogo from './NavLogo';

import {theme_colors, breakpoints} from '../../assets/styles/variables'


const Nav = styled.nav`
  background: ${theme_colors["black"]};
  width: calc(100%);
  height: 8vh;
  min-height: 40px;
  max-height: 60px;
  //position: fixed;
  //top: 0;
  //left: 0;
  display: flex;
  justify-content: space-between;
  .logo {
    height: 100%;
    padding:.5vh;
  }

  @media (max-width: ${breakpoints["md"]}px) {
    height: 15vh;
    max-height: none;

    .logo {
      height: 100%;
      padding: 2vh 0;
    }
  }
`
const NavBreak = styled.hr`
  border: .5px solid white;
  border-top: 0px;
  margin: 0 -10vw;
  @media (max-width: ${breakpoints["md"]}px) {
    border-top: 0px;
    border: .5px solid white;
    margin: 0 -20vw;
    display: none;
  }

`;

const Navbar = () => {
  // const [navLine, setNavLine] = useState(false)
  return (
    
      <Container>
        <Nav>
          <NavLogo/>
          <NavBurger/>
        </Nav>
        <NavBreak />
        
      {/* { onScroll={() => setNavLine(!navLine)} navLine && <NavBreak />} */}
      </Container>
      
    
  )
}

export default connect ( Navbar )