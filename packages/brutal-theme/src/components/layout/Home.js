import { connect } from 'frontity';
import React, { useEffect } from 'react'
import { renderModule } from '../utils/renderModule';

const Page = ( { state, actions, libraries } ) =>
{
  const data = state.source.get( state.router.link );
  const post = state.source[ data.type ][ data.id ];
  const Html2React = libraries.html2react.Component;
  console.log( 'post: ', post )

  return data.isReady ? (
    <>
      { renderModule( 'hero_home_module', post?.acf ) }
      <section id="buildingBrands">
        { renderModule( 'text_image_module', post?.acf ) }
      </section>
      <section id="strengths">
        { renderModule( 'strenghts_module', post?.acf ) }
      </section>
      <section id="projects">
        { renderModule( 'projects_module', post?.acf ) }
      </section>
      { renderModule( 'contact_module', post?.acf ) }
      <section id="services">
        { renderModule( 'services_module', post?.acf ) }
      </section>
    </>
  ) : null;
}

export default connect( Page );
