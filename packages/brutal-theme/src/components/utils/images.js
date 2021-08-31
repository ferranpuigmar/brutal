import { orderByBreakpoint } from "./order"

export const calculateSrcSet = ( srcSet ) =>
{
  return Object.keys( srcSet )
    .filter( size => typeof ( srcSet[ size ] ) === 'string' )
    .reduce( ( acc, size ) =>
    {
      const srcSetOption = {
        brakpoint: size,
        url: srcSet[ size ],
        width: srcSet[ `${ size }-width` ]
      }
      return [ ...acc, { ...srcSetOption } ]
    }, [] )
    .sort( orderByBreakpoint )
}