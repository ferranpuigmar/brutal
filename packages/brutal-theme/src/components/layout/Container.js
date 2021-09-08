import React from 'react'
import { styled } from 'frontity';
import { mq } from '../../assets/styles/mediaqueries';
import { maxWidths } from '../../assets/styles/variables';
import { spacing } from '../../assets/styles/spacing';

export const minPadding = spacing[ 'p-7' ];

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
    padding: 0 ${ minPadding };

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
