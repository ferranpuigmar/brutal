import { connect } from 'frontity';
import React, { useEffect } from 'react'
import { renderModule } from '../utils/renderModule';

const Page = ( { state, actions, libraries } ) =>
{
  const data = state.source.get( state.router.link );
  const post = state.source[ data.type ][ data.id ];
  const Html2React = libraries.html2react.Component;

  return data.isReady ? (
    <div>
      { renderModule( 'hero_home_module', post?.acf ) }
    </div>
  ) : null;
}

export default connect( Page );
