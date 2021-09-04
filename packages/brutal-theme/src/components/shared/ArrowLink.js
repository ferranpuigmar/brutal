import React from 'react'
import { styled } from 'frontity';
import { theme } from '../../assets/styles/theme';

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

  span{
    display: inline-block;
  }

  &:hover{
    span:last-child{
      width: 70px;
    }
  }

`
const Arrow = styled.span`
  width: 61px;
  display: inline-block;
  height: 1px;
  background-color: black;
  position: relative;
  overflow: visible;
  margin-left: 2rem;
  transition: all 0.3s ease-in-out;

  &:before,
  &:after{
    content: "";
    width: 12px;
    height: 1px;
    position: absolute;
    top: 0;
    right: 0;
    background-color: black;
  }

  &:before{
    transform-origin: right 0;
    transform: rotate(14deg);
  }

  &:after {
    transform-origin: right 0;
    transform: rotate(-14deg);
  }

`

const ArrowLink = ( { link, children } ) =>
{
  return (
    <ArrowLinkWrapper href={ link }>
      <span>{ children }</span>
      <Arrow></Arrow>
    </ArrowLinkWrapper>
  )
}

export default ArrowLink
