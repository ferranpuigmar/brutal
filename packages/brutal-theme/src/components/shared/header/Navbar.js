import React, { useEffect, useRef } from 'react';
import { connect, styled } from 'frontity'
import Container from '../../layout/Container';
import NavBurger from './NavBurger';
import NavLogo from './NavLogo';
import { breakpoints } from '../../../assets/styles/variables'
import { mq } from '../../../assets/styles/mediaqueries';


const Nav = styled.nav`
  width: 100%;
  height: ${ ( { scrollSmall } ) => scrollSmall ? '4rem' : '10rem' };
  min-height: 40px;
  max-height: 120px;
  display: flex;
  justify-content: space-between;
  transition: all 0.3s linear;

  .logo { 
    max-height: 3.7rem; 
    transition: all 0.3s linear;

    ${ mq[ 'md' ] }{
      max-height: ${ ( { scrollSmall } ) => scrollSmall ? '2.5rem' : '4.8rem' };
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

const Navbar = ( { scroll, screenWidth, footerFields } ) =>
{
  return (
    <Header>
      <div className={ scroll > 40 ? "line" : "" }>
        <Container>
          <Nav scrollSmall={ scroll > 40 ? true : false }>
            <NavLogo />
            <NavBurger footerFields={footerFields} screenWidth={screenWidth}/>
          </Nav>
        </Container>
      </div>
    </Header>
  )
}

export default connect( Navbar )