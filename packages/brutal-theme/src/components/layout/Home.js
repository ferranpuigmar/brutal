import { connect } from 'frontity';
import React from 'react'
import { renderModule } from '../utils/renderModule';

const Home = ( { state } ) =>
{
  const data = state.source.get( state.router.link );
  const post = state.source[ data.type ][ data.id ];
  console.log( 'data: ', data )
  return (
    <>
      { renderModule( 'hero_home_module', post?.acf ) }
      <section id="buildingBrands" >
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
  );
}

export default connect( Home );
