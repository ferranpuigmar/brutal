import React, { useState, useEffect } from 'react';
import { styled, connect } from 'frontity';
import Container from '../layout/Container';
import GridRow from './GridRow';
import { getMediaUrl } from '../utils/images';
import { v4 as uuid_v4 } from "uuid";

const Grid = styled.div`
  margin-top: 5vh;
`;

const Projects = ( { state, actions } ) =>
{
  const [ dataProjects, setDataProjects ] = useState();

  const data = state.source.get( state.router.link );
  const post = state.source[ data.type ][ data.id ].acf.grid_row;
  const rows = Object.values( post )

  const rowFetch = async () =>
  {

    await actions.source.fetch( "/proyectos" )

    const projectsBag = state.source.proyectos
    for ( const project in projectsBag ) {
      const projectURLimg = getMediaUrl( state, projectsBag[ project ], 1000 )
      projectsBag[ project ].cover_img = projectURLimg
    }
    setDataProjects( projectsBag )
  }

  useEffect( async () => rowFetch(), [] );

  return (
    <div>
      <Container>
        <Grid>
          { dataProjects && rows.map( row =>
          {
            return (
              <GridRow
                key={ uuid_v4() }
                bigRight={ row.acf_fc_layout === "big_right" ? true : false }
                big={ dataProjects[ row.id_big ] }
                bottom={ dataProjects[ row.id_bottom ] }
                top={ dataProjects[ row.id_top ] }
              />
            )
          } ) }
        </Grid>
      </Container>
    </div>
  )
}
export default connect( Projects )