export const getRefElement = (
  element ) =>
{
  if ( element && 'current' in element ) {
    return element.current;
  }

  return element;
};