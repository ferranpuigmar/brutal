import { styled } from 'frontity';
import React from 'react'
import { mq } from '../../assets/styles/mediaqueries';
import { fontFamily, theme_colors } from '../../assets/styles/variables';

const Title = ( { level, className, children } ) =>
{
  return (
    <Heading className={ className } level={ level } as={ `h${ level }` }>
      { children }
    </Heading>
  )
}

const renderH1Props = ( mq ) =>
( {
  fontSize: '5rem',
  [ mq[ 'sm' ] ]: {
    fontSize: '4.9rem',
  }
} )

const renderH2Props = ( mq ) =>
( {
  fontSize: '4rem',
  [ mq[ 'sm' ] ]: {
    fontSize: '3.5rem',
  },
} )

const renderH3Props = ( mq ) =>
( {
  [ mq[ 'sm' ] ]: {
    fontSize: '5rem',
  },
} )

const renderH4Props = ( mq ) =>
( {
  fontSize: '2rem',
  [ mq[ 'sm' ] ]: {
    fontSize: '2rem',
  },
} )

const generateHeaderProps = ( level, mq ) =>
{
  switch ( level ) {
    case 1:
      return { ...renderH1Props( mq ) };
    case 2:
      return { ...renderH2Props( mq ) };
    case 3:
      return { ...renderH3Props( mq ) };
    case 4:
      return { ...renderH4Props( mq ) };
    default:
      return { ...h1 };
  }
}

const Heading = styled.div`
    font-family: ${ fontFamily.bold }, sans-serif;
    color: ${ theme_colors.white };
    ${ ( { level } ) => generateHeaderProps( level, mq ) };
    font-weight: 300;
    margin: 0;
`
export default Title
