import { connect } from 'frontity';
import React from 'react'
import { renderHeroModule } from '../utils/renderHeroHomeModule';

const Page = ( { state, actions, libraries } ) =>
{
  const data = state.source.get( state.router.link );
  const post = state.source[ data.type ][ data.id ];
  const Html2React = libraries.html2react.Component;

  const renderModule = ( moduleName, postData ) =>
  {
    if ( !postData ) return;
    const acfModule = postData[ moduleName ];
    switch ( moduleName ) {
      case 'hero_home_module':
        return renderHeroModule( acfModule )
    }
  }

  return data.isReady ? (
    <div>
      { renderModule( 'hero_home_module', post?.acf ) }
    </div>
  ) : null;
}

export default connect( Page );
