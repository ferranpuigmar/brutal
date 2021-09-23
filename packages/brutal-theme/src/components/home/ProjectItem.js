import { connect, styled } from 'frontity'
import React, { useEffect, useState } from 'react'
import { Col } from 'styled-bootstrap-grid';
import { theme } from '../../assets/styles/theme';
import ArrowLink from '../shared/ArrowLink';
import Title from '../shared/Title';
import { css, cx } from '@emotion/css'
import { spacing } from '../../assets/styles/spacing';
import { mq } from '../../assets/styles/mediaqueries';
import { v4 as uuid_v4 } from "uuid";
import { hexToRgb } from '../utils/colors';
import { desktopPaddingBlock, mobilePaddingBlock, tabletPaddingBlock } from '../../assets/styles/variables';
import { getFeaturedImageUrl } from '../utils/images';
import { keyframes } from '@emotion/react'
import Image from "@frontity/components/image";

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

const loadingImage = keyframes`
  0%      { opacity: 0.5; }
  50%      { opacity: 1; }
  100%    { opacity: 0.5 }
`;

const ImgSqueleton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba( ${ hexToRgb( theme.colors.primaryColor ) }, 0.5);
  animation:${ loadingImage } 1s infinite 0s ease-in-out;
`

const initImage = css`
  opacity: 0;
  transition: all 1s ease-in-out;

  &.isLoaded{
    opacity: 1;
  }
`

const whiteLink = css`
  &:hover {
      color: ${ `${ theme.colors.primaryColor }!important` };
      .arrow-icon,
      .arrow-icon:after,
      .arrow-icon:before {
        background-color: ${ `${ theme.colors.primaryColor }!important` };
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

const overlapContentTitle = css`
  ${ mq[ 'lg' ] }{
    display: none;
  }
`

//Component
const ProjectItem = ( {
  project, link_text, libraries
} ) =>
{
  const Html2React = libraries.html2react.Component;
  const title = project?.title.rendered;
  const description = project?.excerpt.rendered;
  const imageId = project?.featured_media;

  const [ featuredUrl, setFeaturedUrl ] = useState();

  const loadFeaturedMedia = async ( id ) =>
  {
    const requestFeaturedMedia = await libraries.source.api.get( {
      endpoint: `/wp/v2/media/${ id }`
    } )

    const response = await requestFeaturedMedia.json();

    setFeaturedUrl( getFeaturedImageUrl( response.media_details.sizes, 1600 ) )
  }

  useEffect( () =>
  {
    loadFeaturedMedia( imageId );
  }, [] )

  const colContent = <Col key={ uuid_v4() } md={ 6 } className={ cx( block ) }>
    <Title className={ titleColor } level={ 3 } >{ title }</Title>
    <DescriptionWrapper>
      <Html2React html={ description } />
    </DescriptionWrapper>
    <ArrowLink isAnchor={ false } className={ "nav-arrow", cx( whiteLink ) } variant="bold">{ link_text }</ArrowLink>
  </Col>

  const colBg = <Col key={ uuid_v4() } md={ 6 } className={ cx( blockColImg ) }>
    { !featuredUrl && <ImgSqueleton /> }
    { featuredUrl && <>
      <OverLapContent className="overlap">
        <Title className={ cx( overlapContentTitle ) } level={ 3 }>{ title }</Title>
      </OverLapContent>
      <Image className={ cx( initImage, {
        [ 'isLoaded' ]: featuredUrl
      } ) } loading="lazy" src={ featuredUrl?.url } width={ featuredUrl?.width } height={ featuredUrl?.height } alt={ title } />
    </> }

  </Col >
  return [ colBg, colContent ]
}

export default connect( ProjectItem )
