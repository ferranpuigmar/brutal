import { orderByBreakpoint } from "./order"

export const calculateSrcSet = ( sizes ) =>
{
  if ( !sizes ) return;
  return Object.keys( sizes )
    .filter( size => typeof ( sizes[ size ] ) === 'string' )
    .reduce( ( acc, size ) =>
    {
      const sizesOption = {
        brakpoint: size,
        url: sizes[ size ],
        width: sizes[ `${ size }-width` ]
      }
      return [ ...acc, { ...sizesOption } ]
    }, [] )
    .sort( orderByBreakpoint )
}

export const getImageUrlSize = ( sizes, maxSize ) =>
{
  if ( !sizes ) return '';
  const sizeFormats = calculateSrcSet( sizes ).sort( orderByBreakpoint( 'desc' ) );
  return sizeFormats.find( size => size.width < maxSize );
}