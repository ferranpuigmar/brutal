import { cx } from '@emotion/css'
import styled from '@emotion/styled'
import React from 'react'
import { mq } from '../../assets/styles/mediaqueries'
import { spacing } from '../../assets/styles/spacing'

const Wrapper = styled.div`
  padding-top: ${ spacing[ 'pt-7' ] };
  padding-bottom: ${ spacing[ 'pb-14' ] };

  ${ mq[ 'sm' ] } {
    padding-top: ${ spacing[ 'pt-10' ] };
    padding-bottom: ${ spacing[ 'pb-20' ] };
  }
`

const PageWrapper = ( { children, className } ) =>
{
  return (
    <Wrapper className={ cx( className ) }>
      { children }
    </Wrapper>
  )
}

export default PageWrapper
