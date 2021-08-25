import React from 'react'
import { styled } from 'frontity';
import { breakpoints, fontFamily, theme_colors } from '../../assets/styles/variables';
import { css } from '@emotion/css'
import { mq } from '../../assets/styles/mediaqueries';

const Paragraph = ( { children, className } ) =>
{


  const Wrapper = styled.div`
    font-family: ${ fontFamily.regular }, sans-serif;
    margin-bottom: 20px;
    font-size: 2rem;
    letter-spacing: 0.5px;
    color: ${ theme_colors.white };
    line-height: normal;
    &:last-child{
      margin-bottom: 0;
    }
    ${ mq[ "sm" ] } {
      max-width: ${ breakpoints.sm }px;
    }
  `

  return (
    <Wrapper className={ className }>
      { children }
    </Wrapper>
  )
}

export default Paragraph
