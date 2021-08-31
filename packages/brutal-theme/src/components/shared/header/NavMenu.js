import React from 'react';
import { connect, styled } from 'frontity';

import Link from "@frontity/components/link";
import Title from '../Title';
import Text from '../Text';
import { theme_colors, breakpoints } from '../../../assets/styles/variables'
// import { spacing } from '../../assets/styles/spacing'; 


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  text-transform: uppercase;

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

const NavMenu = ( { state, open, close } ) =>
{


  console.log( `state clau`, state )
  const items = state.source.get( `/menu/${ state.theme.menuUrl }/` ).items;
  return (
    <Ul open={ open }>
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