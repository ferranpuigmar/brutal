import React, { useEffect, useState } from 'react'
import Image from "@frontity/components/image";
import { calculateSrcSet } from '../utils/images';
const CustomImage = ( { src, srcSet, className, loading = 'lazy', onLoad, ...rest } ) =>
{
  const [ didLoad, setLoad ] = React.useState( false );
  const [ style, setStyle ] = useState( { visibility: 'hidden', opacity: 0 } )
  const srcUrl = src;


  const srcSetSizes = calculateSrcSet( srcSet );
  const srcset = srcSetSizes?.map( image => `${ image.url } ${ image.width }px` ).join( ',' )

  const handleLoad = () =>
  {
    setLoad( true )
    onLoad && onLoad()
  }

  useEffect( () =>
  {
    if ( didLoad ) {
      setStyle( { visibility: 'visible', opacity: 1 } )
    }
  }, [ didLoad ] )

  return (
    <Image src={ srcUrl } style={ style } { ...rest } srcSet={ srcset } loading={ loading } className={ className } onLoad={ handleLoad } />
  )
}

export default CustomImage
