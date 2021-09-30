import React, { useCallback, useEffect, useState } from 'react'
import Image from "@frontity/components/image";
import { calculateSrcSet } from '../utils/images';
const CustomImage = ( { src, srcSet, className, loading = 'lazy', onReadyToShow, ...rest } ) =>
{
  const [ style, setStyle ] = useState( { visibility: 'hidden', opacity: 0 } )
  const srcUrl = src;
  const srcSetSizes = calculateSrcSet( srcSet );
  const srcset = srcSetSizes?.map( image => `${ image.url } ${ image.width }px` ).join( ',' )

  const onLoadImage = () =>
  {
    setStyle( { visibility: 'visible', opacity: 1 } )
    onReadyToShow && onReadyToShow();
  }

  useEffect( () =>
  {
    setTimeout( onLoadImage, 300 )
  }, [] )

  return (
    <Image src={ srcUrl } style={ style } { ...rest } srcSet={ srcset } loading={ loading } className={ className } onLoad={ onLoadImage } />
  )
}

export default CustomImage
