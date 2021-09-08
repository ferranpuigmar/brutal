export function hexToRgb ( hex )
{
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace( shorthandRegex, function ( m, r, g, b )
  {
    return r + r + g + g + b + b;
  } );

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec( hex );
  const r = parseInt( result[ 1 ], 16 );
  const g = parseInt( result[ 2 ], 16 )
  const b = parseInt( result[ 3 ], 16 )
  return result ? `${ r },${ g },${ b }` : null;
}