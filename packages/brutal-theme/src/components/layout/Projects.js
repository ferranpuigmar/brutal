import React, { useState, useEffect } from 'react';
import { styled, connect } from 'frontity';
import Container from '../layout/Container';
import {theme_colors, breakpoints} from '../../assets/styles/variables';
import GridRow from './GridRow';
import { getMediaUrl } from '../utils/images';

// const StyleRow = styled.div`
const Grid = styled.div`
margin-top: 5vh;
`;

const Projects = ({state, actions }) => {
  
  
  const [ dataProjects, setDataProjects ] = useState();

  const data = state.source.get( state.router.link );
  const post = state.source[ data.type ][ data.id ].acf.grid_block["0"].grid_row;
  // const acf = state.source[ data.type ][ data.id ].acf ;

  // const projectsObj = Object.values(state.source[ data.type ][ data.id ].acf.projects_module.projects);


  const rows = Object.values(post)
  console.log(`rows!!`, rows)
  
  
  const rowFetch = async () => {
  console.log(`rows!!`, rows)

  await actions.source.fetch( "/proyectos" )

    const projectsBag = state.source.proyectos
    for (const project in projectsBag) {
      const projectURLimg=getMediaUrl(state, projectsBag[project], 1000)
      projectsBag[project].cover_img= projectURLimg
    }
    setDataProjects(projectsBag)
    

  }

  useEffect( async () => rowFetch(), []  );

  return (
    <div>
      <Container>
        <Grid>
          {dataProjects && rows.map(row=> { 
            return (
                <GridRow 
                  bigRight={row.acf_fc_layout === "big_right" ? true: false} 
                  big={dataProjects[row.id_big]} 
                  bottom={dataProjects[row.id_bottom]} 
                  top={dataProjects[row.id_top]} 
                />
            )
          })}
        </Grid>
      </Container>
    </div>
  )
}


export default connect(Projects)




//  const data = state.source.get( state.router.link );
//   const post = state.source[ data.type ][ data.id ].acf.grid_block["0"].grid_row;
//   console.log(`post`, post)


  
//   // console.log(`data`, data)
//   // Background footer logic
//   const rows = Object.values(post)
//   console.log(`rows`, rows[0])


//   // const rows = Object.values(post).find(row=>row.link=== data.link)
//   // const blackBackground = objPageIDs?.acf.footer_default_black
//   //buscar or ID

//   // useEffect( () =>
//   // {
//   //   actions.source.fetch( "/proyecto" );
//   // }, [] );

//   // const proyects = Object.values( state.source.proyecto );
//   // proyects.forEach( project =>
//   // {
//   //   const media = state.source.attachment[ project.featured_media ].media_details.sizes.full.source_url;
//   // console.log(`proyects`, project)
//   // srcset
//     // console.log(`media`, media)
//   // } ) 
//   //title: {rendered/ link:
//   // console.log("state.sourcede Projects", state.source)
