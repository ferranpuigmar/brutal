import { styled } from 'frontity';
import connect from '@frontity/connect'
import React from 'react'
import { Col, Row } from 'styled-bootstrap-grid'
import CustomImage from '../../shared/customImage/CustomImage';
import { css, cx } from '@emotion/css'

// Styles
const HeroWrapper = styled.div`
  width: 100%;
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
  console.log( 'images: ', image )
  const Html2React = libraries.html2react.Component;
  return (
    <HeroWrapper>
      <Row>
        <Col md={ 6 }>
          <Html2React html={ title } />
        </Col>
        <Col md={ 6 }>
          <CustomImage className={ cx( imageStyles ) } srcSet={ image.sizes } src={ image.url } alt={ image.title } />
        </Col>
      </Row>
    </HeroWrapper>
  )
}

export default connect( HeroHomeModule )
