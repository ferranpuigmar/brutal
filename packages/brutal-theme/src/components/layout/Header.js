import { connect } from 'frontity';
import React from 'react'
import Menu from '../Menu';

const Header = ( { state } ) =>
{
  const settings = state.source.get( `/globaloptions/${ state.theme.globalOptions }/` ).acf;
  return (
    <header>
      <img src={ settings.logo } alt="logo brutal" />
      <Menu />
    </header>
  )
}

export default connect( Header );
