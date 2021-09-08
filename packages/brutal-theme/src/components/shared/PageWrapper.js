import { cx } from '@emotion/css'
import styled from '@emotion/styled'
import React from 'react'
import { spacing } from '../../assets/styles/spacing'

const Wrapper = styled.div`
  padding-top: ${ spacing[ 'pt-7' ] };
  padding-bottom: ${ spacing[ 'pb-14' ] };
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
