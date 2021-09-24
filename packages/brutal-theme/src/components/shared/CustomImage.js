import React from 'react'
import Image from "@frontity/components/image";
import { calculateSrcSet } from '../utils/images';
const CustomImage = ( { srcSet, className, ...rest } ) =>
{
  const srcSetSizes = calculateSrcSet( srcSet );

  const srcset = srcSetSizes.map( image => `${ image.url } ${ image.width }px` ).join( ',' )

  return (
    <Image { ...rest } srcSet={ srcset } loading="lazy" className={ className } />
  )
}

export default CustomImage
