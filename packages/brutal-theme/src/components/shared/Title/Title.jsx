import { styled } from 'frontity';
import React from 'react'

const Title = ( { level, className, children } ) =>
{
  return (
    <Heading className={ className } level={ level } as={ `h${ level }` }>
      { children }
    </Heading>
  )
}

const headerFontSizes = ( level, mq ) =>
{
  const defaultSize = 4.9;
  switch ( level ) {
    case 1:
      return defaultSize;
    case 2:
      return 3.;
    default:
      return defaultSize;
  }
}

const Heading = styled.div`
    font-size: ${ ( { level } ) => headerFontSizes( level ) }em;
    font-weight: 300;
    margin: 0;
`
export default Title
