import connect from '@frontity/connect'
import React from 'react'
import { Col, Row } from 'styled-bootstrap-grid'
import { css, cx } from '@emotion/css'
import { theme } from '../../assets/styles/theme';
import { spacing } from '../../assets/styles/spacing';
import Title from '../shared/Title';
import { getImageUrlSize } from '../utils/images';
import { mq } from '../../assets/styles/mediaqueries';
import { v4 as uuid_v4 } from "uuid";
import { desktopPaddingBlock, mobilePaddingBlock, tabletPaddingBlock } from '../../assets/styles/variables';

// Styles
const block = css`
  padding: ${ mobilePaddingBlock }!important;
  position: relative;
  background: ${ theme.colors.white };
  min-height: 329px!important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${ mq[ "md" ] } {
    min-height: 550px!important;
    padding: ${ tabletPaddingBlock }!important;
  }

  ${ mq[ "lg" ] } {
    padding: ${ desktopPaddingBlock }!important;
  }
`;


const blockColImg = css`
  ${ block };
  display: flex;
  padding: 0!important;

  ${ mq[ "sm" ] } {
    padding: 0!important;
  }

  img{
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

const moduleTitle = css`
  color: ${ theme.colors.black };
  margin-bottom: ${ spacing[ 'mb-4' ] };
  width: 100%;
`;

const moduleDescription = css`
  p { color: ${ theme.colors.black } }
`;

const fullRow = css`
  margin: 0!important;
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
          return <img key={ uuid_v4() } src={ getImageUrlSize( image.sizes, 1600 ).url } alt={ title } />
        default:
          return null
      }
    } )

    return <>
      { elements }
    </>
  }

  return (
    <Row className={ cx( fullRow ) }>
      <Col md={ 6 } className={ cx( data.col_left.image ? blockColImg : block ) }>
        { renderCol( data.col_left ) }
      </Col>
      <Col md={ 6 } className={ cx( data.col_right.image ? blockColImg : block ) }>
        { renderCol( data.col_right ) }
      </Col>
    </Row >
  )
}

export default connect( ImageTextModule )
