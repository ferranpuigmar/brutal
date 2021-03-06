import React from 'react'
import { styled } from 'frontity'
import { css, cx } from '@emotion/css'
import { theme } from '../../assets/styles/theme'
import Container from '../layout/Container'
import Title from './Title'
import connect from '@frontity/connect'
import ArrowLink from './ArrowLink'
import { Col, Row } from 'styled-bootstrap-grid'
import Block from '../../components/shared/Block'
import { mq } from '../../assets/styles/mediaqueries'
import { spacing } from '../../assets/styles/spacing'
//styles
const Section = styled.section`
  background: ${ theme.colors.primaryColor };
  width: 100%;

  h2{
    color: ${ theme.colors.black };
    margin-bottom: ${ spacing[ 'mb-6' ] };

    ${ mq[ "sm" ] } {
      margin-bottom: 0;
    }

    ${ theme.fontSize.h1 }
  }
`

const Subtitle = styled.div`
  color: ${ theme.colors.black };
  ${ theme.fontSize.h2 }
`

const projectLink = css`
  font-size: 1.4rem;
  line-height: normal;
  margin-top: ${ spacing[ 'mt-4' ] };
  width: auto;

  ${ mq[ "sm" ] } {
    font-size: 2rem;
    margin-top: ${ spacing[ 'mt-4' ] };
  }
`

const blockColor = css`
  background-color: transparent;
`

const colLeft = css`
  ${ mq[ "sm" ] } {
    align-items: center;
  }
`
const colRight = css`
  ${ mq[ "sm" ] } {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`

// component
const ContactModule = ( {
  link,
  subtitle,
  title,
  libraries
} ) =>
{

  const Html2React = libraries.html2react.Component;

  return (
    <Section id="contact">
      <Block widthPadding={ true } className={ cx( blockColor ) }>
        <Container>
          <Row>
            <Col md={ 7 } className={ cx( colLeft ) }>
              <Title level={ 2 }><Html2React html={ title } /></Title>
            </Col>
            <Col md={ 5 } className={ cx( colRight ) }>
              <Subtitle><Html2React html={ subtitle } /></Subtitle>
              <ArrowLink hoverColor="white" variant="bold" className={ cx( projectLink ) } link={ '/contactar' }>{ link }</ArrowLink>
            </Col>
          </Row>
        </Container>
      </Block>
    </Section>
  )
}

export default connect( ContactModule )
