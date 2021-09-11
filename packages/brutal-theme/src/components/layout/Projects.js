import React, { useState, useEffect } from 'react';
import { styled, connect } from 'frontity';
import Container from '../layout/Container';
import GridRow from './GridRow';
import { getMediaUrl } from '../utils/images';
import { v4 as uuid_v4 } from "uuid";
import Title from '../shared/Title';
import Block from '../shared/Block';

const Grid = styled.div`
  margin: 1vh 0 5vh;
`;

const Projects = ( { state, actions } ) =>
{
  const [ dataProjects, setDataProjects ] = useState();

  const data = state.source.get( state.router.link );
  const gridRowData = state.source[ data.type ][ data.id ].acf.grid_row;
  const rows = Object.values( gridRowData )
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
    <section className="projects-grid">
      <Block>

        <Container>
          <Title level={ 3 } >Proyectos</Title>
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
      </Block>

    </section>
  )
}

export default connect( Projects )
