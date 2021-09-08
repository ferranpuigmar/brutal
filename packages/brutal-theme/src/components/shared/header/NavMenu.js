import React from 'react';
import { connect, styled } from 'frontity';
import Link from "@frontity/components/link";
import Title from '../Title';
import { theme_colors, breakpoints } from '../../../assets/styles/variables'
import FooterText from '../FooterText';
import Container from '../../layout/Container';
import { mq } from '../../../assets/styles/mediaqueries';
import { theme } from '../../../assets/styles/theme';


const Menu = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  padding: 40px;
  transform: ${ props => props.open ? 'translateX( 0 )' : 'translateX( 100%)' };
  transition: transform 0.3s ease-in-out;
  background-color: ${ theme.colors.black };
  z-index: 10;

  ${ mq[ 'lg' ] }{
    position: static;
    display: flex;
    align-items: center;
    height: 100%;
    transform: translateX(0);
    padding: 0;
  }
`

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  text-transform: uppercase;

  li { margin: auto 2vw }
  a { text-decoration: none }
  .navigation__titles:hover { color: ${ theme.colors.white } }
  .navigation__footer { display: none; }  

  //////////////////////////////mobile-phone-styles-menus
  @media (max-width: ${ breakpoints[ "md" ] }px) {
    flex-flow: column nowrap;
    background-color: ${ theme.colors.black };
    text-align: center;
    li {
      color: c;
      margin: 4vh auto;
    }
    .navigation__titles { font-size: 24px }    
    .navigation__footer { display: flex }
  }
`;

const NavFooter = styled.div`
  text-align: left;
  text-transform: none;
  display: flex;
  justify-content: space-around;
  color: #ffffff;
  .t1 { display: none; }

  h5, span {
    color: #ffffff;
  }

  ${ mq[ 'lg' ] }{
    display: none;
  }
`;

const NavMenu = ( { state, open, close } ) =>
{

  const items = state.source.get( `/menu/${ state.theme.menuUrl }/` ).items;

  return (
    <Menu open={ open }>
      <Ul >
        { items.map( item =>
        {
          return (
            <li className="navigation__item" key={ item.ID }>
              <div onClick={ close }>
                <Link className="navigation__link" nonekey={ item.ID } link={ `/${ item.slug }` }>
                  <Title level={ 6 } className="navigation__titles">{ item.title }</Title>
                </Link>
              </div>
            </li>
          )
        } ) }



      </Ul>
      <NavFooter className="navigation__footer">
        <FooterText blackback textsize={ "1.4rem" } titlelevel={ 5 } />
      </NavFooter>
    </Menu>
  )
}

export default connect( NavMenu )