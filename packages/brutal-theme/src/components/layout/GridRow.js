import React from 'react';
import { styled, connect } from 'frontity';
import { breakpoints } from '../../assets/styles/variables';
import Link from "@frontity/components/link";
import { getMediaUrl } from '../utils/images';

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

  @media (max-width: ${ breakpoints[ "lg" ] }px) {
    height: 40vh;
    min-height: 300px;
  }

  @media (max-width: ${ breakpoints[ "md" ] }px) {
    display: block;
    height: auto;
    margin-bottom: 0px;
  }
`;

const SideBig = styled.div`
  height: 100%;
  width: 55%;
  overflow: hidden;

  @media (max-width: ${ breakpoints[ "md" ] }px) {
    width: 100%;
    height: 30vh;
    min-height: 200px;
  }

  img:hover {
    opacity:.4;
  }
`;
const SideSmall = styled.div`
  height: 100%;
  width: calc( 45% - 30px);
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media (max-width: ${ breakpoints[ "md" ] }px) {
    width: 100%;
    height: 60vh;
    min-height: 400px;
  }

  img:hover {
    opacity:.4;
  }
 `;

const BiVertical = styled.div`
  height: calc(50% - 15px);
  overflow: hidden;

  @media (max-width: ${ breakpoints[ "md" ] }px) {
    height: 50%;
  }
`;
const ImgSmallSet = styled.div`
  display: flex;
  justify-content:center;
  img {
    min-width: 100%;
    min-height: 30vh;
    object-fit: cover;

    @media (max-width: ${ breakpoints[ "md" ] }px) {
      min-height: 200px;
      height: 30vh;
      margin: 20px 0;
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
    color: #fff;

    @media (max-width: ${ breakpoints[ "md" ] }px) {
      min-height: 200px;
      height: 30vh;
      margin: 20px 0;
    }

  }

`;

const GridRow = ( { bigRight, big, top, bottom } ) =>
{

  const bigImage = getMediaUrl( big, 1000 );
  const smallTopImage = getMediaUrl( top, 1000 );
  const smallBottomImage = getMediaUrl( bottom, 1000 );

  return (
    <Big>
      <Row className={ bigRight && "bigright" } >
        <SideBig className="big">
          <Link link={ big.link }>
            <ImgBigSet><img alt={ big.title.rendered } src={ bigImage } /></ImgBigSet>
          </Link>
        </SideBig>
        <SideSmall>
          <BiVertical>
            <Link link={ top.link }>
              <ImgSmallSet><img alt={ top.title.rendered } src={ smallTopImage } /></ImgSmallSet>
            </Link>
          </BiVertical>
          <BiVertical>
            <Link link={ bottom.link }>
              <ImgSmallSet><img alt={ bottom.title.rendered } src={ smallBottomImage } /></ImgSmallSet>
            </Link>
          </BiVertical>
        </SideSmall>
      </Row>
    </Big>
  )
}

export default connect( GridRow )