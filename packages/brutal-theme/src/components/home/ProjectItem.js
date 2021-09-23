import { connect, styled } from 'frontity'
import React from 'react'
import { Col } from 'styled-bootstrap-grid';
import { theme } from '../../assets/styles/theme';
import ArrowLink from '../shared/ArrowLink';
import Title from '../shared/Title';
import { css, cx } from '@emotion/css'
import { spacing } from '../../assets/styles/spacing';
import { mq } from '../../assets/styles/mediaqueries';
import { v4 as uuid_v4 } from "uuid";
import { hexToRgb } from '../utils/colors';
import { desktopPaddingBlock, mobilePaddingBlock, tabletPaddingBlock, theme_colors } from '../../assets/styles/variables';

// Styles
const DescriptionWrapper = styled.div`
  width: 100%;
  p { color: ${ theme.colors.black };}
  margin-bottom: ${ spacing[ 'mb-6' ] };
  display: none;

  ${ mq[ 'md' ] }{
    display: block;
  }
`

const block = css`
  padding: ${ mobilePaddingBlock }!important;
  position: relative;
  background-size: cover!important;
  background-position: center;
  background-repeat: no-repeat;
  background: rgba( ${ hexToRgb( theme.colors.primaryColor ) }, 0.5);
  min-height: 329px!important;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;

  ${ mq[ "md" ] } {
    display: flex;
    background: ${ theme.colors.white };
    padding: ${ tabletPaddingBlock }!important;
  }

  ${ mq[ "lg" ] } {
    min-height: 550px!important;
    padding: ${ desktopPaddingBlock }!important;
  }
`;

const titleColor = css`
  color: ${ theme.colors.black };
  text-align: left;
  width: 100%;
  margin-bottom: ${ spacing[ 'mb-3' ] };
  ${ theme.fontSize.h2 }

`

const blockColImg = css`
  ${ block };
  display: flex;
  padding: 0!important;

  ${ mq[ "sm" ] } {
    padding: 0!important;
  }

  img{
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

const whiteLink = css`
  &:hover {
      color: ${ `${theme.colors.primaryColor}!important` };
      .arrow-icon, 
      .arrow-icon:after,
      .arrow-icon:before {
        background-color: ${ `${theme.colors.primaryColor}!important` };
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

//Component 
const ProjectItem = ( {
  project, index, link_text, libraries
} ) =>
{
  const Html2React = libraries.html2react.Component;

  const evenRow = index % 2 === 0;
  const title = project?.title.rendered;
  const description = project?.excerpt.rendered;
  const link = project?.link;
  const bg_url = project?.project_media_url;

  // <SideBig className={ cx( 'big', portfolioContainer ) }>
  //         <OverLapContent className="overlap">
  //           <Title level={ 3 }>{ big.title.rendered }</Title>
  //         </OverLapContent>
  //         <Link link={ big.link }>
  //           <ImgBigSet><img alt={ big.title.rendered } src={ bigImage } /></ImgBigSet>
  //         </Link>
  //       </SideBig>

  const colContent = <Col key={ uuid_v4() } md={ 6 } className={ cx( block ) }>
    <Title className={ titleColor } level={ 3 } >{ title }</Title>
    <DescriptionWrapper>
      <Html2React html={ description } />
    </DescriptionWrapper>
    <ArrowLink isAnchor={ false } className={"nav-arrow",cx(whiteLink)} variant="bold">{ link_text }</ArrowLink>
  </Col>

  const colBg = 
  <Col key={ uuid_v4() } md={ 6 } className={ cx( blockColImg, portfolioContainer  ) }>
    <OverLapContent className="overlap">
      {/* <Title level={ 3 }>{ title }</Title> */}
    </OverLapContent>
    <img src={ bg_url } alt={ title } />
  </Col>
 

  return [ colBg, colContent ]
}

export default connect( ProjectItem )
