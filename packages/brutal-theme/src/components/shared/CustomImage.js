import React, { useCallback, useEffect, useState } from 'react'
import Image from "@frontity/components/image";
import { calculateSrcSet } from '../utils/images';
const CustomImage = ( { src, srcSet, className, loading = 'lazy', onReadyToShow, ...rest } ) =>
{
  const [ loaded, setLoaded ] = useState( false );
  const [ style, setStyle ] = useState( { visibility: 'hidden', opacity: 0 } )
  const srcUrl = src;
  const srcSetSizes = calculateSrcSet( srcSet );
  const srcset = srcSetSizes?.map( image => `${ image.url } ${ image.width }px` ).join( ',' )

  const onLoadImage = useCallback( () =>
  {
    console.log( 'loaded' );
    setLoaded( true );
    setStyle( { visibility: 'visible', opacity: 1 } )
    onReadyToShow && onReadyToShow()
  }, [] )

  return (
    <Image src={ srcUrl } style={ style } { ...rest } srcSet={ srcset } loading={ loading } className={ className } onLoad={ onLoadImage } />
  )
}

export default CustomImage
