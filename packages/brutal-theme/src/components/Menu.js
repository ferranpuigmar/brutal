import { connect } from 'frontity'
import React from 'react'
import Link from "@frontity/components/link"
import { styled } from "frontity";

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
        { items.map( item => <Link key={ item.ID } link={ `/${ item.slug }` }>{ item.title }</Link> ) }
      </nav>
    </MenuDiv>
  )
}

export default connect( Menu )
