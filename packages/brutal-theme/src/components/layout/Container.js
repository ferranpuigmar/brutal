import React from 'react'
import { styled } from 'frontity';
import { mq } from '../../assets/styles/mediaqueries';
import { breakpoints, maxWidths } from '../../assets/styles/variables';



const Container = ( { children, align = 'flex-start', bgColor = 'transparent', className } ) =>
{
  return (
    <ContainerDiv className={ className } bgColor={ bgColor } align={ align }>
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
    padding: 0 20px;
    ${ mq[ "sm" ] } {
      padding: 0;
      max-width: ${ maxWidths.sm }px;
    }
    ${ mq[ "md" ] } {
      max-width: ${ maxWidths.md }px;
    }
    ${ mq[ "lg" ] } {
      max-width: ${ maxWidths.lg }px;
    }
    ${ mq[ "xl" ] } {
      max-width: ${ maxWidths.xl }px;
    }
    ${ mq[ "xxl" ] } {
      max-width: ${ maxWidths.xxl }px;
    }
`

export default Container;
