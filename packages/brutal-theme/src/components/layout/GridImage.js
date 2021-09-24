import React, { useEffect, useState } from 'react'
import { styled, connect } from 'frontity';
import { theme } from '../../assets/styles/theme';
import Link from "@frontity/components/link"
import Image from "@frontity/components/image";
import { getFeaturedImageUrl } from '../utils/images';
import ImageSkeleton from '../shared/ImageSkeleton';
import { cx, css } from '@emotion/css';
import Title from '../shared/Title';

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

const imageStatus = css`
  transition: all 1s ease-in-out;
  opacity: 0;
  height: 100%;

  &.isLoaded{
    opacity: 1;
  }
`

const linkBlock = css`
  display: block;
`

const GridImage = ( { item, maxSize = 1600, libraries } ) =>
{
  const [ featuredUrl, setFeaturedUrl ] = useState( null );
  const [ loading, setIsLoading ] = useState( true );

  const handleImage = async () =>
  {
    const requestFeaturedMedia = await libraries.source.api.get( {
      endpoint: `/wp/v2/media/${ item.featured_media }`
    } )
    const response = await requestFeaturedMedia.json();
    const imageObj = getFeaturedImageUrl( response.media_details.sizes, maxSize );
    setFeaturedUrl( imageObj )
  }

  useEffect( () =>
  {
    item && handleImage()
  }, [ item ] )

  return <>
    <ImageSkeleton isLoading={ loading } />
    <Link link={ item?.link } className={ linkBlock }>
      { !loading && <OverLapContent className="overlap">
        <Title level={ 3 }>{ item?.title.rendered }</Title>
      </OverLapContent> }
      <div className={ cx( imageStatus, {
        [ 'isLoaded' ]: !loading
      } ) }>
        { featuredUrl && <Image alt={ item?.title.rendered } loading="eager" src={ featuredUrl?.url } onLoad={ () => setIsLoading( false ) } /> }
      </div>
    </Link>
  </>
}

export default connect( GridImage );