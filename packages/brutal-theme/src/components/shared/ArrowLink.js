import React from 'react'
import { styled } from 'frontity';
import { theme } from '../../assets/styles/theme';
import { cx, css } from '@emotion/css'
import { mq } from '../../assets/styles/mediaqueries';
import { spacing } from '../../assets/styles/spacing';
import Link from "@frontity/components/link";

const handleBtnStyle = ( type ) =>
{
  switch ( type ) {
    case 'primary-solid':
      return primarySolid;
    case 'white-solid':
      return whiteSolid;
    case 'outline':
      return outline
    default: {
      ''
    }
  }
}

const handleHoverColor = ( color ) =>
{
  switch ( color ) {
    case 'white':
      return hover__white;
    default: {
      ''
    }
  }
}

// Styles
const linkButton = css`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;

  ${ mq[ 'md' ] }{
    font-size: 2.5rem;
  }

  span{
    color: ${ theme.colors.black };
    transition: all 0.3s ease-in-out;

    &:last-child{
      top: 1px;
    }

    &:before,
    &:after{
      transition: all 0.1s ease-in-out;
    }
  }

  &:hover {
    span{
        color: ${ theme.colors.primaryColor };
        &:last-child{
          background-color: ${ theme.colors.primaryColor };
          width: 51px;
          margin-left: calc(2rem + 11px);
          transform: translateX(5px);
        }
        &:before,
        &:after{
          background-color: ${ theme.colors.primaryColor }
        }
      }
    }
`

const hover__white = css`
  &:hover {
    span{
      color: ${ theme.colors.white };
      &:last-child{
        background-color: ${ theme.colors.white }
      }
      &:before,
      &:after{
        background-color: ${ theme.colors.white }
      }
    }
  }
`

const buttonGenerics = css`
  padding: ${ spacing[ 'pt-3' ] } ${ spacing[ 'p-4' ] };
  font-size: 1.8rem;

  ${ mq[ 'md' ] }{
    font-size: 2rem;
  }
`

const primarySolid = css`
  background-color: ${ theme.colors.primaryColor };
`

const whiteSolid = css`
  background-color: ${ theme.colors.white };
`

const outline = css`
  background-color: transparent;
  border: 2px solid ${ theme.colors.black };
  
  &:hover {
    background-color: ${ theme.colors.primaryColor };

    span{
      color: ${ theme.colors.black };
      &:last-child{
        background-color: ${ theme.colors.black }
      }
      &:before,
      &:after{
        background-color: ${ theme.colors.black }
      }
    }
  }
`

const linkTagStyle = css`
  text-decoration: none;
  display: inline-block;

  > * {
    width: 100%;
  }
`

const Arrow = styled.span`
  width: 61px;
  display: inline-block;
  height: ${ props => props.variant === 'bold' ? '2px' : '1px' };
  background-color: black;
  position: relative;
  overflow: visible;
  margin-left: 2rem;
  transition: all 0.3s ease-in-out;

  &:before,
  &:after{
    content: "";
    width: 12px;
    height: ${ props => props.variant === 'bold' ? '2px' : '1px' };
    position: absolute;
    top: 0;
    right: 0;
    background-color: black;
  }

  &:before{
    transform-origin: right 0;
    transform: ${ props => props.variant === 'bold' ? 'rotate( 18deg )' : 'rotate( 14deg )' };
  }

  &:after {
    transform-origin: right 0;
    transform: ${ props => props.variant === 'bold' ? 'rotate( -18deg )' : 'rotate( -14deg )' };
  }

  ${ mq[ "sm" ] } {
    width: 61px;
  }

`

const ArrowLinkContent = ( { type, variant, link, hoverColor, children } ) =>
{
  const buttonType = type ? cx( buttonGenerics, handleBtnStyle( type ) ) : '';
  return <div className={ cx( linkButton, buttonType, handleHoverColor( hoverColor ) ) }>
    <span>{ children }</span>
    <Arrow type={ type } variant={ variant } link={ link } className="arrow-icon"></Arrow>
  </div >
}

const ArrowLink = ( { link, children, className, hoverColor, variant, type, isAnchor = true, hoverBackground = true } ) =>
{
  return (
    <div className={ cx( "arrow-button", className ) }>
      {
        isAnchor
          ?
          <Link link={ link } className={ linkTagStyle }>
            <ArrowLinkContent hoverColor={ hoverColor } type={ type } variant={ variant } children={ children } link={ link } />
          </Link>
          :
          <div><ArrowLinkContent type={ type } variant={ variant } children={ children } /></div>
      }
    </div>
  )
}

export default ArrowLink
