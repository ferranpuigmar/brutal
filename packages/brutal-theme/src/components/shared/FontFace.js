import { Global, css } from 'frontity'
import React from 'react'
import DMSansBold_woff2 from '../../assets/fonts/DMSans-Bold.woff2'
import DMSansBold_woff from '../../assets/fonts/DMSans-Bold.woff'
import DMSansBold_svg from '../../assets/fonts/DMSans-Bold.svg'
import DMSansRegular_woff2 from '../../assets/fonts/DMSans-Regular.woff2'
import DMSansRegular_woff from '../../assets/fonts/DMSans-Regular.woff'
import DMSansRegular_svg from '../../assets/fonts/DMSans-Regular.svg'
import { fontFamily } from '../../assets/styles/variables'

const FontFace = () => ( <>
  <Global
    styles={ css`
      @font-face {
        font-family: ${ fontFamily.bold };
        src: url(${ DMSansBold_woff2 }) format('woff2'),
            url(${ DMSansBold_woff }) format('woff'),
            url(${ DMSansBold_svg }#DMSansBold) format('woff');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }
      @font-face {
        font-family: ${ fontFamily.regular };
        src: url(${ DMSansRegular_woff2 }) format('woff2'),
            url(${ DMSansRegular_woff }) format('woff'),
            url(${ DMSansRegular_svg }#DMSansRegular) format('woff');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
      }
    `}
  />
</> )

export default FontFace
