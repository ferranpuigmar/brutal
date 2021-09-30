import React from 'react'
import { styled } from 'frontity';
import { cx } from '@emotion/css'
import { theme } from '../../assets/styles/theme';
import { mq } from '../../assets/styles/mediaqueries';
import { desktopPaddingBlock, mobilePaddingBlock, tabletPaddingBlock } from '../../assets/styles/variables';

// Styles
const BlockWrapper = styled.div`
  min-height: ${ props => props.height ? props.height : "" };
  display: ${ props => props.height ? "flex" : "" };
  align-items: ${ props => props.height ? "center" : "" };

  width: 100%;
  padding: ${ props => props.widthPadding ? 0 : `${ mobilePaddingBlock }` };
  background-color: ${ props => props.mode === 'dark' ? theme.colors.black : theme.colors.white };

  > .containerDiv {
    padding-left: 0;
    padding-right: 0;
  }

  ${ mq[ "md" ] } {
    padding: ${ props => props.widthPadding ? `0 ${ tabletPaddingBlock }` : `${ tabletPaddingBlock }` };
  }

  ${ mq[ "lg" ] } {
    ${ '' /* padding: ${ props => props.widthPadding ? `0 ${ tabletPaddingBlock }` : `${ desktopPaddingBlock }` }; */ }
    padding: ${ props => props.widthPadding ? 0 : `${ desktopPaddingBlock }` };
  }
`

const Block = ( {
  children,
  className,
  height,
  mode = 'dark',
} ) =>
{
  return (
    <BlockWrapper height={ height } widthPadding={ false } mode={ mode } className={ cx( className ) }>
      { children }
    </BlockWrapper>
  )
}

export default Block
