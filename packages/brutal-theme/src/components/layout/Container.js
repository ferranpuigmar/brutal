import React from 'react'
import { styled } from 'frontity';
import { mq } from '../../assets/styles/mediaqueries';
import { breakpoints } from '../../assets/styles/variables';



const Container = ( { children, align = 'flex-start', bgColor = 'transparent' } ) =>
{
  return (
    <ContainerDiv bgColor={ bgColor } align={ align }>
      { children }
    </ContainerDiv>
  )
}

const ContainerDiv = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: ${ props => props.align };
    background: ${ props => props.bgColor };
    ${ mq[ "sm" ] } {
      max-width: ${ breakpoints.sm }px;
    }
    ${ mq[ "md" ] } {
      max-width: ${ breakpoints.md }px;
    }
    ${ mq[ "lg" ] } {
      max-width: ${ breakpoints.lg }px;
    }
    ${ mq[ "xl" ] } {
      max-width: ${ breakpoints.xl }px;
    }
    ${ mq[ "xxl" ] } {
      max-width: ${ breakpoints.xxl }px;
    }
`

export default Container;
