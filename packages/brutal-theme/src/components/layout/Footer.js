import { connect } from 'frontity';
import React from 'react'

const Footer = ( { state } ) =>
{
  // const data = state.source.get( state.router.link );
  // const {acf} = state.source[ data.type ][ data.id ];
  // const colorFooter = acf.footer.color;
  return (
    <footer>
      Soy el footer
    </footer>
  )
}

export default connect( Footer );
