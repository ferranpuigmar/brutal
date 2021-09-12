const unit = 4;
const maxSizes = 20;
let spacingLabels = [ 'm', 'mx', 'my', 'mt', 'mb', 'ml', 'mr', 'p', 'px', 'py', 'pt', 'pb', 'pl', 'pr' ];

const formatSizes = ( type, number ) =>
{
  switch ( type ) {
    case 'mx':
    case 'px':
      return `0 ${ number * unit }px`
    case 'my':
    case 'py':
      return `${ number * unit }px 0`
    default:
      return `${ number * unit }px`
  }
}

export const spacing = spacingLabels
  .map( ( sizeType ) =>
  {
    const size = {};
    for ( let i = 0; i <= maxSizes; i++ ) {
      size[ `${ sizeType }-${ i }` ] = formatSizes( sizeType, i );
    }
    return size;
  } )
  .reduce( ( acc, type ) =>
  {
    return { ...acc, ...type };
  }, {} );