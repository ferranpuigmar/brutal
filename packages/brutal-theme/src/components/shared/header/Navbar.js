import React from 'react';
import { connect, styled } from 'frontity'
import Container from '../../layout/Container';
import NavBurger from './NavBurger';
import NavLogo from './NavLogo';
import { theme_colors, breakpoints } from '../../../assets/styles/variables'
import { mq } from '../../../assets/styles/mediaqueries';


const Nav = styled.nav`
  width: calc(100%);
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
  ${ mq[ 'md' ] }{
    border: .5px solid white;
    border-left: 0;
    border-right: 0;
    border-top: 0px;
  }
`;

const Navbar = () =>
{
  return (
    <Header>
      <Container>
        <Nav>
          <NavLogo />
          <NavBurger />
        </Nav>

        {/* { onScroll={() => setNavLine(!navLine)} navLine && <NavBreak />} */ }
      </Container>
    </Header>

  )
}

export default connect( Navbar )