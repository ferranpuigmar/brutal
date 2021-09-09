import React from 'react'
import { styled } from 'frontity';
import { cx } from '@emotion/css'
import { theme } from '../../assets/styles/theme';
import { minPadding } from '../layout/Container';
import { mq } from '../../assets/styles/mediaqueries';
import { spacing } from '../../assets/styles/spacing';

// Styles
const BlockWrapper = styled.div`
  width: 100%;
  padding: ${ props => props.widthPadding ? 0 : `${ minPadding }` };
  background-color: ${ props => props.mode === 'dark' ? theme.colors.black : theme.colors.white };

  > [class*="ContainerDiv"] {
    padding-left: 0;
    padding-right: 0;
  }

  ${ mq[ "sm" ] } {
    padding: ${ props => props.widthPadding ? 0 : `${ spacing[ 'p-16' ] }` };
  }
`

const Block = ( {
  children,
  className,
  mode = 'dark'
} ) =>
{
  return (
    <BlockWrapper widthPadding={ false } mode={ mode } className={ cx( className ) }>
      { children }
    </BlockWrapper>
  )
}

export default Block
