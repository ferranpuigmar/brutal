import { orderByBreakpoint } from "./order"

export const calculateSrcSet = ( sizes ) =>
{
  if ( !sizes ) return;
  const srcSet = Object.keys( sizes )
    .filter( size => typeof ( sizes[ size ] ) === 'string' || Object )
    .reduce( ( acc, size ) =>
    {
      const sizesOption = {
        brakpoint: size,
        url: sizes[ size ].source_url || sizes[ size ],
        width: sizes[ `${ size }-width` ] || sizes[ size ].width
      }
      return [ ...acc, { ...sizesOption } ]
    }, [] )
    .sort( orderByBreakpoint )

  return srcSet
}

export const calculateImageAttributes = ( sizes ) =>
{
  if ( !sizes ) return [];
  return Object.keys( sizes )
    .reduce( ( acc, size ) =>
    {
      const sizesOption = {
        url: sizes[ size ].source_url,
        width: sizes[ size ].width,
        height: sizes[ size ].height
      }
      return [ ...acc, { ...sizesOption } ]
    }, [] )
}

export const getFeaturedImageUrl = ( sizes, maxSize ) =>
{
  if ( !sizes ) return '';
  const sizeFormats = calculateImageAttributes( sizes ).sort( orderByBreakpoint( 'desc' ) );
  return sizeFormats.find( size => size.width < maxSize );
}

export const getImageUrlSize = ( sizes, maxSize ) =>
{
  if ( !sizes ) return '';
  const sizeFormats = calculateSrcSet( sizes ).sort( orderByBreakpoint( 'desc' ) );
  return sizeFormats.find( size => size.width < maxSize );
}

export const getMediaUrl = async ( project, maxSize, state ) =>
{
  const media = await state ? state.source.attachment[ project.featured_media ] : project.featured_media;
  const urlList = Object.values( media.media_details.sizes ).sort( orderByBreakpoint( 'desc' ) )
  const url = urlList.find( urlListItem => urlListItem.width < maxSize ).source_url
  return url;
}