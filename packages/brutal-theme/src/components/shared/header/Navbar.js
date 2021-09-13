import React, { useEffect, useRef } from 'react';
import { connect, styled } from 'frontity'
import Container from '../../layout/Container';
import NavBurger from './NavBurger';
import NavLogo from './NavLogo';
import { breakpoints } from '../../../assets/styles/variables'
import { mq } from '../../../assets/styles/mediaqueries';


const Nav = styled.nav`
  width: 100%;
  height: ${ ( { scrollSmall } ) => scrollSmall ? '6vh' : '14vh' };
  min-height: 40px;
  max-height: 120px;
  display: flex;
  justify-content: space-between;
  padding:  ${ ( { scrollSmall } ) => scrollSmall ? '1vh 0' : '3.5vh 0' };
  
  .logo { height: 100%; }

  @media (max-width: ${ breakpoints[ "md" ] }px) {
    padding:  0 ;
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
  return (
    <Header>
      <div className={ scroll > 40 ? "line" : "" }>
      <Container>
        <Nav scrollSmall={ scroll > 40 ? true : false}>
          <NavLogo />
          <NavBurger />
        </Nav>
      </Container>
      </div>
    </Header>
  )
}

export default connect( Navbar )