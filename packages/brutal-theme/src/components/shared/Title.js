import { styled } from 'frontity';
import React from 'react'
import { mq } from '../../assets/styles/mediaqueries';
import { theme } from '../../assets/styles/theme';
import { fontFamily, theme_colors } from '../../assets/styles/variables';


const Title = ( { level, className, children, color } ) =>
{
  return (
    <Heading className={ className } level={ level } color={ color } as={ `h${ level }` }>
      { children }
    </Heading>
  )
}

const renderH1Props = () =>
( {
  ...theme.fontSize.h1
} )

const renderH2Props = () =>
( {
  ...theme.fontSize.h2
} )

const renderH3Props = () =>
( {
  ...theme.fontSize.h3
} )

const renderH4Props = () =>
( {
  ...theme.fontSize.h4
} )

const renderH5Props = () =>
( {
  ...theme.fontSize.h5
} )

const renderH6Props = () =>
( {
  ...theme.fontSize.h6
} )

const generateHeaderProps = ( level ) =>
{
  switch ( level ) {
    case 1:
      return { ...renderH1Props() };
    case 2:
      return { ...renderH2Props() };
    case 3:
      return { ...renderH3Props() };
    case 4:
      return { ...renderH4Props() };
    case 5:
      return { ...renderH5Props() };
    case 6:
      return { ...renderH6Props() };
    default:
      return { ...h1 };
  }
}

const Heading = styled.div`
    font-family: ${ fontFamily.bold }, sans-serif;
    color: ${ props => props.color || theme_colors.white };
    line-height: normal;
    ${ ( { level } ) => generateHeaderProps( level ) };
    font-weight: 300;
    margin: 0;
`
export default Title
