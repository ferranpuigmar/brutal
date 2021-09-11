import React, { useEffect, useRef } from 'react';
import { connect, styled } from 'frontity'
import Container from '../../layout/Container';
import NavBurger from './NavBurger';
import NavLogo from './NavLogo';
import { breakpoints } from '../../../assets/styles/variables'
import { mq } from '../../../assets/styles/mediaqueries';


const Nav = styled.nav`
  width: 100%;
  height: 8vh;
  min-height: 40px;
  max-height: 60px;
  display: flex;
  justify-content: space-between;
  
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
  width: 100%;
  position: fixed;
  background-color: #000;
  z-index: 100000;

  .line {

    ${ mq[ 'md' ] }{
      border: .5px solid white;
      border-left: 0;
      border-right: 0;
      border-top: 0px;
    }
  }

  @media (max-width: ${ breakpoints[ "md" ] }px) {
  position: relative;

  }  
`;

const Navbar = ({ scroll }) => {
  console.log(`scroll`, scroll)

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