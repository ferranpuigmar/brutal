import connect from '@frontity/connect'
import React from 'react'
import { Col, Row } from 'styled-bootstrap-grid'
import CustomImage from '../../shared/CustomImage';
import { css, cx } from '@emotion/css'
import Container from '../../layout/Container';
import Title from '../../shared/Title';
import { spacing } from '../../../assets/styles/spacing';
import Block from '../../shared/Block';
import { theme } from '../../../assets/styles/theme';
import { mq } from '../../../assets/styles/mediaqueries';

// Styles
const heroWrapper = css`
  padding-top: ${ spacing[ 'pt-8' ] };
`;

const heroTitle = css`
  margin-bottom: ${ spacing[ 'mb-8' ] };
  em {
    color: ${ theme.colors.primaryColor };
    font-style: normal;
  }

  ${ mq[ "sm" ] } {
    margin-bottom: 0
  }
`;

const colHero = css`
  display: flex;

  ${ mq[ "sm" ] } {
    align-items: center;
  }
`

const colImage = css`
  ${ mq[ "sm" ] } {
    img{
      margin: 0 auto;
      height: 100%;
      width: auto;
      max-height: 455px;
    }
  }
`

const imageStyles = css`
  width: 100%;
  max-width: 300px;
`

const HeroHomeModule = ( {
  libraries,
  text,
  image
} ) =>
{
  const Html2React = libraries.html2react.Component;

  return (
    <section id="hero">
      <Block className={ heroWrapper }>
        <Container>
          <Row>
            <Col md={ 7 } lg={ 7 } className={ cx( colHero ) }>
              <Title level={ 1 } className={ cx( heroTitle ) }><Html2React html={ text } /></Title>
            </Col>
            <Col md={ 5 } className={ cx( colHero, colImage ) }>
              <CustomImage className={ cx( imageStyles ) } srcSet={ image.sizes } src={ image.url } alt={ image.title } />
            </Col>
          </Row>
        </Container>
      </Block>
    </section>
  )
}

export default connect( HeroHomeModule )
