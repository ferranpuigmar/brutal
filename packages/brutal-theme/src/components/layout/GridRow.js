import React from 'react';
import { styled, connect } from 'frontity';
import { breakpoints } from '../../assets/styles/variables';
import Link from "@frontity/components/link";
import { getMediaUrl } from '../utils/images';
import Title from '../shared/Title';
import { spacing } from '../../assets/styles/spacing';
import { theme } from '../../assets/styles/theme';
import { hexToRgb } from '../utils/colors';
import { css, cx } from '@emotion/css'


// STYLES
const Big = styled.div`
  .bigright { flex-direction: row-reverse }

  a{
    display: block;
    height: 100%;
  }
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
  position: relative;
  overflow: hidden;


  @media (max-width: ${ breakpoints[ "md" ] }px) {
    width: 100%;
    height: 30vh;
    min-height: 200px;
    margin-bottom: ${ spacing[ 'mb-5' ] };
  }
`;
const SideSmall = styled.div`
  height: 100%;
  width: calc( 45% - 30px);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;


  @media (max-width: ${ breakpoints[ "md" ] }px) {
    width: 100%;
    height: 60vh;
    min-height: 400px;
  }
`;

const BiVertical = styled.div`
  height: calc(50% - 15px);
  overflow: hidden;
  position: relative;
  overflow: hidden;

  @media (max-width: ${ breakpoints[ "md" ] }px) {
    height: 50%;
    margin-bottom: ${ spacing[ 'mb-5' ] };
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
    }

  }

`;

const OverLapContent = styled.div`
  position:absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  pointer-events: none;

  *{
    opacity: 0;
    transform: translateY(-10px);
    color: ${ theme.colors.black };
  }
`

const portfolioContainer = css`
  > div{
    transition: all 0.4s ease-out;
    padding: 0 ${ spacing[ 'p-4' ] };
    height: 0;
    opacity: 0;

    > *{
      transition: all 0.3s ease-out 0.4s;
    }
  }

  &:hover{
    > div {
      padding: ${ spacing[ 'p-3' ] } ${ spacing[ 'p-4' ] };
      opacity: 1;
      height: 100%;
      background-color: rgba( ${ hexToRgb( theme.colors.primaryColor ) }, 1);

      *{
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`


// COMPONENT
const GridRow = ( { bigRight, big, top, bottom } ) =>
{

  const bigImage = getMediaUrl( big, 1000 );
  const smallTopImage = getMediaUrl( top, 1000 );
  const smallBottomImage = getMediaUrl( bottom, 1000 );

  return (
    <Big>
      <Row className={ bigRight && "bigright" } >
        <SideBig className={ cx( 'big', portfolioContainer ) }>
          <OverLapContent className="overlap">
            <Title level={ 3 }>{ big.title.rendered }</Title>
          </OverLapContent>
          <Link link={ big.link }>
            <ImgBigSet><img alt={ big.title.rendered } src={ bigImage } /></ImgBigSet>
          </Link>
        </SideBig>
        <SideSmall>
          <BiVertical className={ cx( portfolioContainer ) }>
            <OverLapContent className="overlap">
              <Title level={ 3 }>{ top.title.rendered }</Title>
            </OverLapContent>
            <Link link={ top.link }>
              <ImgSmallSet><img alt={ top.title.rendered } src={ smallTopImage } /></ImgSmallSet>
            </Link>
          </BiVertical>
          <BiVertical className={ cx( portfolioContainer ) }>
            <OverLapContent className="overlap">
              <Title level={ 3 }>{ bottom.title.rendered }</Title>
            </OverLapContent>
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