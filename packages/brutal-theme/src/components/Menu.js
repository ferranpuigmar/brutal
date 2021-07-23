import { connect, styled } from 'frontity'
import React from 'react'
import Link from "@frontity/components/link"
import { BrutalLogo, HamburgerIcon, CloseIcon } from "./menu-icon"

const MenuDiv = styled.div`
    display: flex;
    width: 100%;
    text-align: center;
    color: white;
`;

const Menu = ( { state } ) =>
{
  const items = state.source.get( `/menu/${ state.theme.menuUrl }/` ).items;

  return (
    <MenuDiv>
      <nav>
        <BrutalLogo height="50px"/>
        <HamburgerIcon height="50px"/>
        <CloseIcon height="50px"/>
        { items.map( item => <Link key={ item.ID } link={ `/${ item.slug }` }>{ item.title }</Link> ) }
      </nav>
    </MenuDiv>
  )
}

export default connect( Menu )
