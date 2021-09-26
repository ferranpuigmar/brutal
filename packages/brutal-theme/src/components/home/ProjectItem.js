import { connect, styled } from 'frontity'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'styled-bootstrap-grid';
import { theme } from '../../assets/styles/theme';
import ArrowLink from '../shared/ArrowLink';
import Title from '../shared/Title';
import { css, cx } from '@emotion/css'
import { spacing } from '../../assets/styles/spacing';
import { mq } from '../../assets/styles/mediaqueries';
import { v4 as uuid_v4 } from "uuid";
import { hexToRgb } from '../utils/colors';
import { desktopPaddingBlock, mobilePaddingBlock, tabletPaddingBlock } from '../../assets/styles/variables';
import ImageSkeleton from '../shared/ImageSkeleton';
import CustomImage from '../shared/CustomImage';

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
  background-size: cover!important;
  background-position: center;
  background-repeat: no-repeat;
  background: rgba( ${ hexToRgb( theme.colors.primaryColor ) }, 0.5);
  min-height: 329px!important;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  ${ mq[ "md" ] } {
    display: flex;
    background: ${ theme.colors.white };
    padding: ${ tabletPaddingBlock }!important;

    &.isLeft{
      padding-left: 0!important;
    }

    &.isRight{
      padding-right: 0!important;
    }
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

const ProjectImg = styled.div`
  display: flex;
  padding: 0!important;

  height: 100%;


  ${ mq[ "sm" ] } {
    padding: 0!important;
    position: absolute;
    left: ${ props => props.isEven ? 0 : 'auto' };
    right: ${ props => props.isEven ? 'auto' : 0 };
    width: 50%;
  }

  img{
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

const projectImageWrapper = css`
  opacity: 0;
  transition: all 0.3s ease-in-out;
  min-height: 290px;
  width: 100%;

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

const rowContent = css`
  display: none!important;

  ${ mq[ 'md' ] }{
    display: flex!important;
  }
`

//Component
const ProjectItem = ( {
  project, index, link_text, libraries
} ) =>
{
  const Html2React = libraries.html2react.Component;
  const title = project?.title.rendered;
  const description = project?.excerpt.rendered;
  const imageId = project?.featured_media;

  const [ featuredUrl, setFeaturedUrl ] = useState( null );
  const [ isLoading, setIsLoading ] = useState( true );

  const isEven = index % 2 === 0;

  const loadFeaturedMedia = async ( id ) =>
  {
    const requestFeaturedMedia = await libraries.source.api.get( {
      endpoint: `/wp/v2/media/${ id }`
    } )
    const response = await requestFeaturedMedia.json();
    setFeaturedUrl( response )
  }

  useEffect( () =>
  {
    loadFeaturedMedia( imageId );
  }, [] )

  const colContent = <Row className={ rowContent }><Col key={ uuid_v4() } md={ 6 } mdOffset={ isEven ? 6 : 0 }>
    <div className={ cx( block, { [ 'isLeft' ]: !isEven, [ 'isRight' ]: isEven } ) } >
      <Title className={ titleColor } level={ 3 } >{ title }</Title>
      <DescriptionWrapper>
        <Html2React html={ description } />
      </DescriptionWrapper>
      <ArrowLink isAnchor={ false } className={ "nav-arrow", cx( whiteLink ) } variant="bold">{ link_text }</ArrowLink>
    </div>
  </Col></Row>

  const colBg = <ProjectImg key={ uuid_v4() } isEven={ isEven }>
    <ImageSkeleton isLoading={ isLoading } />
    { <div className={ cx( projectImageWrapper, {
      [ 'isLoaded' ]: !isLoading
    } ) }>
      <OverLapContent className="overlap">
        <Title className={ cx( overlapContentTitle ) } level={ 3 }>{ title }</Title>
      </OverLapContent>
      { featuredUrl && <CustomImage loading="lazy" width={ featuredUrl.media_details.width } height={ featuredUrl.media_details.height } src={ featuredUrl.source_url } srcSet={ featuredUrl.media_details.sizes } alt={ title } onLoad={ () => setIsLoading( false ) } /> }
    </div> }
  </ProjectImg>
  return [ colBg, colContent ]
}

export default connect( ProjectItem )
