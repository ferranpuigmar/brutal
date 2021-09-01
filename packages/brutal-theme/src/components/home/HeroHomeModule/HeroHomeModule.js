import { styled } from 'frontity';
import connect from '@frontity/connect'
import React from 'react'
import { Col, Row } from 'styled-bootstrap-grid'
import CustomImage from '../../shared/customImage/CustomImage';
import { css, cx } from '@emotion/css'
import Container from '../../layout/Container';
import Title from '../../shared/Title';
import { theme } from '../../../assets/styles/theme';
import { spacing } from '../../../assets/styles/spacing';

// Styles
const HeroWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  margin: ${ spacing[ 'my-4' ] };
`;

const heroTitle = css`
  em {
    color: ${ theme.colors.primaryColor };
    font-style: normal;
  }
`;

const imageStyles = css`
  width: 100%;
  max-width: 100%;
`

const HeroHomeModule = ( {
  libraries,
  title,
  image
} ) =>
{
  const Html2React = libraries.html2react.Component;
  return (
    <HeroWrapper>
      <Container>
        <Row>
          <Col md={ 6 }>
            <Title level={ 1 } className={ cx( heroTitle ) }><Html2React html={ title } /></Title>
          </Col>
          <Col md={ 6 }>
            <CustomImage className={ cx( imageStyles ) } srcSet={ image.sizes } src={ image.url } alt={ image.title } />
          </Col>
        </Row>
      </Container>
    </HeroWrapper>
  )
}

export default connect( HeroHomeModule )
