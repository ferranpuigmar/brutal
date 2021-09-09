import React from 'react';
import { styled, connect } from 'frontity';
import {theme_colors, breakpoints} from '../../assets/styles/variables';
import Link from "@frontity/components/link";


const Big = styled.div`
  .bigright { flex-direction: row-reverse }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60vh;
  margin-bottom: 30px;
  min-height: 350px;
  transform-origin: 1px;  

  @media (max-width: ${breakpoints["lg"]}px) {
    height: 40vh;
    min-height: 300px;
  }

  @media (max-width: ${breakpoints["md"]}px) {
    display: block;
    height: auto;
    margin-bottom: 0px;
  }
`;

const SideBig = styled.div`
  height: 100%;
  width: 55%;
  overflow: hidden;

  @media (max-width: ${breakpoints["md"]}px) {
    height: 60vw;
    width: 100%;
  }
`;
const SideSmall = styled.div`
  height: 100%; 
  width: calc( 45% - 30px);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  
  @media (max-width: ${breakpoints["md"]}px) {
    width: 100%;
  }
 `;
 
const BiVertical = styled.div`
  height: calc(50% - 15px);
  overflow: hidden;

  @media (max-width: ${breakpoints["md"]}px) {
    height: 60vw;
  }
`;
const ImgSmallSet = styled.div`
  display: flex;
  img {
    min-width: 100%;
    min-height: 30vh;
    object-fit: cover;

    @media (max-width: ${breakpoints["md"]}px) {
    ${'' /* height: 20vw; */}
    ${'' /* max-height: 200px; */}
  }
  }
`;

const ImgBigSet = styled.div`
  display: flex;

  img {
    min-width: 100%;
    height: 60vh;
    object-fit: cover;
    min-height: 350px;
    ${'' /* max-height: 40vh; */}
    
  @media (max-width: ${breakpoints["lg"]}px) {
    min-height: 300px;
  }
  @media (max-width: ${breakpoints["md"]}px) {
    ${'' /* height: 20vw; */}
    ${'' /* max-height: 200px; */}
  }
  }
`;

const GridRow = ({bigRight, big, top, bottom, projectsBag }) => {
  // const Row3 = ({bigRight, rowObj}) => {
  // const {big, top, bottom, bigLink, topLink, bottomLink} = rowObj
// console.log('big', big, `projectsBagRooooooow`, projectsBag)
// console.log('big cover img', big["cover_img"]

// console.log(`projectsBag*****`, projectsBag)

console.log(`big`, big)

  return (
    <Big>
        <Row className={ bigRight && "bigright" } >
          <SideBig className="big">
              <Link link={big.link}>
                <ImgBigSet><img  src={big.cover_img}/></ImgBigSet>
              </Link> 
          </SideBig>
          <SideSmall>
            <BiVertical>
              <Link link={top.link}>
                <ImgSmallSet><img   src={top.cover_img}/></ImgSmallSet>
              </Link> 
            </BiVertical>
            <BiVertical>
              <Link link={bottom.link}>
                <ImgSmallSet><img   src={bottom.cover_img}/></ImgSmallSet>
              </Link> 
            </BiVertical>
          </SideSmall>
        </Row>
    </Big>
  )
}


export default connect( GridRow )




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
