import { connect } from 'frontity';
import React from 'react'
import Menu from '../Menu';

const Header = () =>
{
  return (
    <header>
      <Menu />
    </header>
  )
}

export default connect( Header );
