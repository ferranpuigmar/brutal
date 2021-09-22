import React from 'react';
import { connect, styled } from 'frontity'
import Container from '../../layout/Container';
import NavBurger from './NavBurger';
import NavLogo from './NavLogo';
import { breakpoints, theme_colors } from '../../../assets/styles/variables'
import { mq } from '../../../assets/styles/mediaqueries';


const Nav = styled.nav`
  width: 100%;
  height: ${ ( { scrollSmall } ) => scrollSmall ? '3rem' : '10rem' };
  min-height: 40px;
  max-height: 110px;
  display: flex;

  justify-content: space-between;
  ${'' /* align-content: center; */}
${'' /* justify-content: center; */}
  transition: all 0.3s linear;

    ${ mq[ 'md' ] }{
      height: ${ ( { scrollSmall } ) => scrollSmall ? '5rem' : '10rem' };
    }

  .logo { 
    max-height: 3rem; 
    transition: all 0.3s linear;
    min-height: ${ ( { scrollSmall } ) => scrollSmall ? '.5rem' : '4.8rem' };

    ${ mq[ 'md' ] }{
      max-height: ${ ( { scrollSmall } ) => scrollSmall ? '3rem' : '4.8rem' };
    }
  }
`
const Header = styled.header`
  background-color: ${ theme_colors.black };
  width: 100%;
  position: fixed;
  margin-top: -10rem;
  z-index: 100000;

  .line {
    border: .5px solid white;
    border-left: 0;
    border-right: 0;
    border-top: 0px;
  }

  @media (max-width: ${ breakpoints[ "md" ] }px) {
   ${'' /* position: relative; */}
   position: fixed;
  }
`;

const Navbar = ( { scroll, mobilWidth, footerFields, currentPage } ) => {

  return (
    <Header>
      <div className={ scroll ? "line" : "" }>
        <Container>
          <Nav scrollSmall={ scroll ? true : false }>
            <NavLogo />
            <NavBurger currentPage={currentPage} footerFields={footerFields} mobilWidth={mobilWidth} />
          </Nav>
        </Container>
      </div>
    </Header>
  )
}

export default connect( Navbar )