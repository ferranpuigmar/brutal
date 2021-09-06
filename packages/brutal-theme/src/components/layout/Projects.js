import React, { useEffect } from 'react';
import { styled, connect } from 'frontity';
import Container from '../layout/Container';
import {theme_colors, breakpoints} from '../../assets/styles/variables';
import Row3 from './Row3';

// const StyleRow = styled.div`
const Grid = styled.div`
margin-top: 5vh;
`;

const Projects = ({state, actions }) => {

  const data = state.source.get( state.router.link );
  const post = state.source[ data.type ][ data.id ].acf.grid_block["0"].grid_row;
  const acf = state.source[ data.type ][ data.id ].acf ;
  const projectsObj = state.source[ data.type ][ data.id ].acf.projects_module.projects;
  console.log(`acf!!`, acf)
  console.log(`projectsObj!!`, projectsObj)

  const rows = Object.values(post)
  console.log(`rows!!`, rows[0].acf_fc_layout)

  return (
    <div>
      <Container>
        <Grid>
          {rows.map(row=> { 
            return (
                <Row3 
                  bigRight={row.acf_fc_layout === "grande_der" ? true: false} 
                  rowObj={row}
                  big={"https://1.bp.blogspot.com/-QQsSl1p555c/Xwg48x5xyQI/AAAAAAAAMxI/JwBJHUzc2_4DjshP7097XxzjJENi62L7QCLcBGAsYHQ/s1600/congost-mont-rebei.jpg"} 
                  top={"https://elgiroscopo.es/wp-content/uploads/2016/08/pasarela_congost_mont_rebei.jpg"}
                  // top={"https://meraviglia.es/wp-content/uploads/2020/09/Ruta-Pasarelas-Montfalco-Congost-Mont-Rebei-scaled.jpg"}
                  bottom={"https://etheriamagazine.com/wp-content/uploads/2020/05/mont-rebei-gr1.jpg"}
                  bigLink={"/"} 
                  topLink={"/"}  
                  bottomLink={"/"} 
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
