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

export const getMediaUrl = ( state, project, maxSize ) =>
  {
    // console.log(`project    id`, project)
    const media = state.source.attachment[ project.featured_media ];
    // console.log(`media`, media)
    const urlList = Object.values( media.media_details.sizes ).sort( orderByBreakpoint( 'desc' ) )
    const url = urlList.find( urlListItem => urlListItem.width < maxSize ).source_url
    return url;
  }