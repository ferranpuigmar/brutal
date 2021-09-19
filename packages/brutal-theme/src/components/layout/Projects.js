import React from 'react';
import { styled, connect } from 'frontity';
import Container from '../layout/Container';
import GridRow from './GridRow';
import { v4 as uuid_v4 } from "uuid";
import Title from '../shared/Title';
import Block from '../shared/Block';

const Grid = styled.div`
  margin: 1vh 0 5vh;
`;

const Projects = ( { state } ) =>
{
  const data = state.source.get( state.router.link );
  const gridRowData = state.source[ data.type ][ data.id ].acf.grid_row;
  const rows = Object.values( gridRowData )
  const dataProjects = state.source.get( `/projectsdata/${ state.theme.projects }/` ).items;

  const getMediaDetails = ( data, id ) =>
  {
    const mediaDetails = data.find( media => media.id === id );
    return mediaDetails;
  }

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
                  big={ getMediaDetails( dataProjects, row.id_big ) }
                  bottom={ getMediaDetails( dataProjects, row.id_bottom ) }
                  top={ getMediaDetails( dataProjects, row.id_top ) }
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
