import React from 'react'
import { styled } from 'frontity';
import { css, cx } from '@emotion/css'
import { spacing } from '../../assets/styles/spacing';
import { theme } from '../../assets/styles/theme';

// Styles
const BlockWrapper = styled.div`
  width: 100%;
  padding: ${ spacing[ 'py-20' ] };
  background-color: ${ props => props.mode === 'dark' ? theme.colors.black : theme.colors.white };
`

const Block = ( {
  children,
  className,
  mode = 'dark'
} ) =>
{
  return (
    <BlockWrapper mode={ mode } className={ cx( className ) }>
      { children }
    </BlockWrapper>
  )
}

export default Block
