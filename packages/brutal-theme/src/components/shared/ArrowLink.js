import React from 'react'
import { styled } from 'frontity';
import { theme } from '../../assets/styles/theme';
import { cx } from '@emotion/css'
import { mq } from '../../assets/styles/mediaqueries';

// Styles

const ArrowLinkWrapper = styled.a`
  display: inline-block;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  text-transform: uppercase;
  text-decoration: none;
  color: ${ theme.colors.black }!important;
  font-size: 1.2rem;
  font-family: ${ props => props.variant === 'bold' ? theme.fontFamily.bold : theme.fontFamily.regular };

  span{
    display: inline-block;
  }

  &:hover{
    span:last-child{
      width: 58px;
    }
  }

  ${ mq[ "sm" ] } {
    &:hover{
      span:last-child{
        width: 71px;
      }
    }
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

const ArrowLink = ( { link, children, className, variant } ) =>
{
  return (
    <ArrowLinkWrapper variant={ variant } href={ link } className={ cx( className ) }>
      <span>{ children }</span>
      <Arrow variant={ variant }></Arrow>
    </ArrowLinkWrapper>
  )
}

export default ArrowLink
