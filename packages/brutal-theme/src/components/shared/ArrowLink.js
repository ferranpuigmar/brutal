import React from 'react'
import { styled } from 'frontity';
import { theme } from '../../assets/styles/theme';
import { cx } from '@emotion/css'
import { mq } from '../../assets/styles/mediaqueries';
import { spacing } from '../../assets/styles/spacing';

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
      false
    }
  }

}

// Styles
const buttonGenerics = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between'
}

const primarySolid = {
  backgroundColor: theme.colors.primaryColor,
  padding: `${ spacing[ 'pt-3' ] } ${ spacing[ 'p-4' ] }`,
  ...buttonGenerics
}

const whiteSolid = {
  backgroundColor: theme.colors.white,
  padding: `${ spacing[ 'pt-3' ] } ${ spacing[ 'p-4' ] }`,
  ...buttonGenerics
}

const outline = {
  backgroundColor: 'transparent',
  padding: `${ spacing[ 'pt-3' ] } ${ spacing[ 'p-4' ] }`,
  border: `2px solid ${ theme.colors.black }`,
  ...buttonGenerics
}

const ArrowAnchorWrapper = styled.a`
  text-decoration: none;
  ${ props => handleBtnStyle( props.type ) };
  color: ${ theme.colors.black }!important;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const ArrowWrapper = styled.div`
  display: inline-block;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  color: ${ theme.colors.black }!important;
  font-size: 1.6rem;
  font-family: ${ props => props.variant === 'bold' ? theme.fontFamily.bold : theme.fontFamily.regular };
  ${ props => handleBtnStyle( props.type ) };

  span{
    display: inline-block;
  }

  &:hover{
    span:last-child{
      transform: translateX(5px);
    }
  }

  ${ mq[ "sm" ] } {
    font-size: 1.8rem;
  }

`
const Arrow = styled.span`
  width: 48px;
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

const ArrowLinkContent = ( { type, variant, link, children } ) => <>
  <span>{ children }</span>
  <Arrow type={ type } variant={ variant } link={ link } className="arrow-icon"></Arrow>
</>

const ArrowLink = ( { link, children, className, variant, type, isAnchor = true } ) =>
{
  return (
    <ArrowWrapper className={ cx( "arrow-element", className ) } variant={ variant }>
      {
        isAnchor
          ? <ArrowAnchorWrapper type={ type } href={ link } ><ArrowLinkContent variant={ variant } children={ children } /></ArrowAnchorWrapper>
          : <><ArrowLinkContent variant={ variant } children={ children } /></>
      }
    </ArrowWrapper>
  )
}

export default ArrowLink
