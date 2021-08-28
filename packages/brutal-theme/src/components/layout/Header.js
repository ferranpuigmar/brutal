import { connect, styled } from 'frontity'
import React from 'react'
import Link from "@frontity/components/link"
import { BrutalLogo, HamburgerIcon, CloseIcon } from "../menu-icon";
import Title from '../shared/Title';
import Container from './Container';
import logo from '../../assets/images/logo-blackback.png'
import { spacing } from '../../assets/styles/spacing';

const MenuDiv = styled.div`
  width: 100%; 
  height: 10vh;
  text-align: center;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
  //  padding-left: ${spacing["pl-20"]}; 

const NavLogo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  > a img {
    display: block;
    height: 8vh;
  }
`;

const NavTitles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  > a {
    color: #aaa;
    text-decoration: none;
    margin: max(2vw, 10px); 
  }
`;
// const colorWhite = "#fffff";
// const colorBlack = "#333333";
// const colorPrimaryLight= "#CCCCCC";
// const colorPrimaryDark  = "#AAAAAA";
// const colorPrimary  = "#0000FF";


const Navigation = styled.div`
padding: 0px;
`;
// const Navigation = styled.div`
//   .navigation {
//     &__checkbox {
//       display: none;
//     } 

//     &__button {
//     background-color: ${colorWhite};
//     height: 7rem;
//     width: 7rem;
//     position: fixed;
//     top: 6rem;
//     right: 6rem;
//     border-radius: 50%;
//     z-index: 2000; 
//     box-shadow: 0 1rem 3rem rgba( ${colorBlack}, .1);
//     text-align: center;
//     cursor: pointer;
//     }

//     &__background {
//     height: 6rem;
//     width: 6rem;
//     border-radius: 50%;
//     position: fixed;
//     top: 6.5rem;
//     right: 6.5rem;
//     background-image: radial-gradient(${colorPrimaryLight}, ${colorPrimaryDark});
//     z-index: 1000;
//     transition: transform .8s cubic-bezier(0.83, 0, 0.17, 1);
//   }

//   &__nav {
//     height: 100vh;
//     position: fixed;
//     top: 0;
//     left: 0;
//     z-index: 1500;
//     opacity: 0;
//     width: 0;
//     transition: all .8s cubic-bezier(0.83, 0, 0.17, 1);
//   }

//   &__list {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     list-style: none;
//     text-align: center;
//     width: 100%;
//   }

//   &__item {
//     margin: 1rem;
//   }

//   &__link {
//     &:link,
//     &:visited {
//       display: inline-block;
//       font-size: 3rem;
//       font-weight: 300;
//       padding: 1rem 2rem;
//       color: ${colorWhite};
//       text-decoration: none;
//       text-transform: uppercase;
//       background-image: linear-gradient(120deg, transparent 0%, transparent 50%, ${colorWhite} 50%, ${colorWhite} 100%);
//       background-size: 225%;
//       transition: all .4s;
//     }

//     &:hover,
//     &:active {
//       background-position: 100%;
//       color: ${colorPrimary};
//       transform: translateX(1rem);
//     }
//   }

//   &__checkbox:checked ~ &__background {
//     transform: scale(80);
//   }
  
//   &__checkbox:checked ~ &__nav { 
//     opacity: 1;
//     width: 100%;
//   }

//   &__icon {
//     position: relative;
//     margin-top: 3.5rem;

//     &,
//     &::before,
//     &::after {
//       width: 3rem;
//       height: 2px;
//       background-color: $color-grey-dark-3;
//       display: inline-block;
//     }

//     &::before,
//     &::after {
//       content: "";
//       position: absolute;
//       left: 0;
//       transition: all .2s;
//     }

//     &::before { top: -.8rem; }
//     &::after { top: .8rem; }
    
//   }

//   &__button:hover &__icon::before { top: -1rem; }
  
//   &__button:hover &__icon::after { top: 1rem; }

//   &__checkbox:checked + &__button &__icon { background-color: transparent;}
  
//   &__checkbox:checked + &__button &__icon::before { 
//     top: 0;
//     transform: rotate(135deg); 
//   }

//   &__checkbox:checked + &__button &__icon::after { 
//     top: 0;
//     transform: rotate(-135deg); 
//   }

    
// }
// `;

const Header = ( { state } ) => {
  const items = state.source.get( `/menu/${ state.theme.menuUrl }/` ).items;

  return (
    <Container align="flex" bgColor="#777" className="header">
    <MenuDiv>

      <NavLogo className="nav-logo">
        <Link link={ `/` }><img src={logo} className="logo" /></Link>         
      </NavLogo>

      <Navigation>
        <div className="navigation">

          <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
          <label for="navi-toggle" className="navigation__button">
              <span className="navigation__icon"></span>
          </label>
          <div className="navigation__background">&nbsp;</div>
          
          <nav className="navigation__nav">
            <NavTitles className="nav-titles">
              <ul>
                { items.map( item => {
                  return (
                    <li className="navigation__item">
                      <Link className="navigation__link" nonekey={item.ID} link={`/${item.slug}`}>
                          <Title level={5} className="navigation__titles">{ item.title }</Title> 
                      </Link> 
                    </li>
                  )
                })}
              </ul>
            </NavTitles>      
          </nav>

        </div>

      </Navigation>
    </MenuDiv>
      {/* <BrutalLogo height="50px"/> */}
      {/* <HamburgerIcon height="50px"/> */}
      {/* <CloseIcon height="50px"/> */}
    </Container>
  )
}

export default connect( Header );



//---------------------------------------------------------------
// import { connect } from 'frontity';
// import React from 'react'
// import Menu from '../Menu';

// const Header = () =>
// {
//   return (
//     <header>
//       <Menu />
//     </header>
//   )
// }

// export default connect( Header );



// import { connect, styled } from 'frontity'
// import React from 'react'
// import Link from "@frontity/components/link"
// import { BrutalLogo, HamburgerIcon, CloseIcon } from "./menu-icon"


// -------------------------------------------------------------------
// const MenuDiv = styled.div`
//     display: flex;
//     width: 100%;
//     text-align: center;
//     color: white;
// `;

// const Menu = ( { state } ) =>
// {
//   const items = state.source.get( `/menu/${ state.theme.menuUrl }/` ).items;

//   return (
//     <MenuDiv>
//       <nav>
//         <BrutalLogo height="50px"/>
//         <HamburgerIcon height="50px"/>
//         <CloseIcon height="50px"/>
//         { items.map( item => <Link key={ item.ID } link={ `/${ item.slug }` }>{ item.title }</Link> ) }
//       </nav>
//     </MenuDiv>
//   )
// }

// export default connect( Menu )