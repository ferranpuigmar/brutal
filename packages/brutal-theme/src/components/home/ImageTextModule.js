import { connect, styled } from 'frontity'
import React from 'react'
import { Col, Row } from 'styled-bootstrap-grid'
import { css, cx } from '@emotion/css'
import { theme } from '../../assets/styles/theme';
import { spacing } from '../../assets/styles/spacing';
import Title from '../shared/Title';
import { mq } from '../../assets/styles/mediaqueries';
import Container from '../layout/Container'
import { v4 as uuid_v4 } from "uuid";
import { desktopPaddingBlock, mobilePaddingBlock, tabletPaddingBlock } from '../../assets/styles/variables';
import CustomImage from '../shared/CustomImage';
import Block from '../shared/Block'

// Styles
const block = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 200px!important;


  ${ mq[ "lg" ] } {
    min-height: 530px!important;
    padding-right: ${ desktopPaddingBlock }!important;
  }
`;

const moduleTitle = css`
  color: ${ theme.colors.black };
  margin-bottom: ${ spacing[ 'mb-4' ] };
  width: 100%;
`;

const moduleDescription = css`
  p { color: ${ theme.colors.black } }
`;

const fullRow = css`
  margin: 0 auto!important;
`

const Wrapper = styled.div`
  background: ${ theme.colors.white };
  position: relative;
  flex-direction: column;

  ${ mq[ 'lg' ] }{
    flex-direction: row;
  }
`

const ColImage = styled.div`
  position: relative;
  right: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  ${ mq[ 'lg' ] }{
    position: absolute;
    width: 50%;
    align-items: center;
  }
`

// External Methods

const transformDataToObject = ( data ) =>
{
  const requiredKeys = [ 'col_left', 'col_right' ];
  const requiredProps = [ 'title', 'description', 'image' ];

  const dataObject = {};

  for ( let colKey in data ) {
    if ( requiredKeys.includes( colKey ) ) {
      const props = data[ colKey ].reduce( ( acc, prop ) => ( { ...acc, ...prop } ) );
      for ( let prop in props ) {
        if ( !requiredProps.includes( prop ) ) {
          delete props[ prop ];
        }
        dataObject[ colKey ] = { ...props };
      }
    }
  }

  return dataObject
}

// Component
const ImageTextModule = ( {
  libraries,
  mode,
  ...rest
} ) =>
{

  const Html2React = libraries.html2react.Component;
  const data = transformDataToObject( rest );

  const renderCol = ( col ) =>
  {
    const { title, description, image } = col;

    const elements = Object.keys( col ).map( key =>
    {
      switch ( key ) {
        case 'title':
          return <Title key={ uuid_v4() } className={ cx( moduleTitle ) } level={ 2 }><Html2React html={ title } /></Title>
        case 'description':
          return <div key={ uuid_v4() } className={ cx( moduleDescription ) }><Html2React html={ description } /></div>
        case 'image':
          return <CustomImage key={ uuid_v4() } src={ image.url } srcSet={ image.sizes } alt={ title } />
        default:
          return null
      }
    } )

    return <>
      { elements }
    </>
  }

  const colContent = ( data, position ) =>
  {
    return <Block mode="light">
      <Container className={ fullRow }>
        <Row>
          <Col lg={ 6 } lgOffset={ position === 'col_left' ? -6 : 6 } className={ block }>
            { renderCol( data[ position ] ) }
          </Col>
        </Row >

      </Container>
    </Block>
  }

  const colImg = ( data, position ) =>
  {
    return <ColImage>
      { renderCol( data[ position ] ) }
    </ColImage>
  }

  return (
    <Wrapper>
      {
        data.col_left.image ? [ colImg( data, 'col_left' ), colContent( data, 'col_right' ) ] : [ colContent( data, 'col_left' ), colImg( data, 'col_right' ) ]
      }
    </Wrapper>
  )
}

export default connect( ImageTextModule )
