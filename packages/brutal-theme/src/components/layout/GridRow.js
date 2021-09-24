import React from 'react';
import { styled } from 'frontity';
import { breakpoints } from '../../assets/styles/variables';
import { spacing } from '../../assets/styles/spacing';
import { theme } from '../../assets/styles/theme';
import { hexToRgb } from '../utils/colors';
import { css, cx } from '@emotion/css'
import GridImage from './GridImage';


// STYLES
const Big = styled.div`
  .bigright { flex-direction: row-reverse }

  a{
    display: block;
    height: 100%;
    width: 100%;
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
const imgSmallSet = css`
  display: flex;
  justify-content:center;

  img {
    /* min-width: 100%; */
    min-height: 30vh;
    width: 100%;
    object-fit: cover;

    @media (max-width: ${ breakpoints[ "md" ] }px) {
      min-height: 200px;
      height: 30vh;
    }
  }
`;

const imgBigSet = css`
  display: flex;

  img {
    /* min-width: 100%;
    height: 60vh; */
    width: 100%;
    object-fit: cover;
    min-height: 350px;
    color: #fff;

    @media (max-width: ${ breakpoints[ "md" ] }px) {
      min-height: 200px;
      height: 30vh;
    }

  }

`;

export const portfolioContainer = css`
  .overlap{
    transition: all 0.4s ease-out;
    padding: 0 ${ spacing[ 'p-4' ] };
    height: 0;
    opacity: 0;

    > *{
      transition: all 0.3s ease-out 0.4s;
    }
  }

  &:hover{
    .overlap {
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
  return (
    <Big>
      <Row className={ bigRight && "bigright" } >
        <SideBig className={ cx( 'big', portfolioContainer, imgBigSet ) }>
          <GridImage item={ big } />
        </SideBig>
        <SideSmall>
          <BiVertical className={ cx( portfolioContainer, imgSmallSet ) }>
            <GridImage item={ top } />
          </BiVertical>
          <BiVertical className={ cx( portfolioContainer, imgSmallSet ) }>
            <GridImage item={ bottom } />
          </BiVertical>
        </SideSmall>
      </Row>
    </Big>
  )
}

export default GridRow