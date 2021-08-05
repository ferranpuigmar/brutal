import React from 'react'
import { styled } from 'frontity';
import { mq } from '../../assets/styles/mediaqueries';
import { theme_colors } from '../../assets/styles/variables';

const Text = ( { text, weigth, color } ) =>
{
  return (
    <Span fontWeigth={ weigth } color={ color }>
      { text }
    </Span>
  )
}

const renderFontFamily = ( weight ) =>
{
  switch ( weight ) {
    case 'bold':
      return '"DMSansBold", sans-serif'
    default:
      return '"DMSansRegular", sans-serif'
  }
}

const Span = styled.span`
  font-family: ${ props => renderFontFamily( props.weight ) };
  font-size: 2rem;
  letter-spacing: 0.5px;
  color: ${ props => props.color || theme_colors.white };
  ${ mq[ "sm" ] } {
    font-size: 2rem;
  }
`

export default Text
