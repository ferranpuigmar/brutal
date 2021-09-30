import React from 'react'
import { styled } from 'frontity'
import { keyframes } from '@emotion/react'
import { hexToRgb } from '../utils/colors';
import { theme } from '../../assets/styles/theme';
import { css, cx } from '@emotion/css'

// Styles
const loadingImage = keyframes`
  0%      { opacity: 0.5; }
  50%      { opacity: 1; }
  100%    { opacity: 0.5 }
`;

const WrapperSqueleton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba( ${ hexToRgb( theme.colors.primaryColor ) }, 0.3);
  pointer-events: none;
  opacity: 0;

  &.isAnimate{
    animation: ${ loadingImage } 2s infinite ${ Math.random() * 2 }s ease-in-out;
    opacity: 1;
  }
`
// Component
const ImageSkeleton = ( { isLoading } ) =>
{
  return (
    <WrapperSqueleton className={ cx( {
      'isAnimate': isLoading
    } ) } />
  )
}

export default ImageSkeleton
