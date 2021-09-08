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

// Styles
const block = css`
  padding: ${ spacing[ 'p-10' ] }!important;
  position: relative;
  background-size: cover!important;
  background-position: center;
  background-repeat: no-repeat;
  background: ${ theme.colors.white };
  min-height: 329px!important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${ mq[ "sm" ] } {
    min-height: 550px!important;
    padding: ${ spacing[ 'p-20' ] }!important;
  }
`;

const moduleTitle = css`
  color: ${ theme.colors.black };
  margin-bottom: ${ spacing[ 'mb-4' ] }
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
        default:
          return null
      }
    } )

    return <>
      { elements }
    </>
  }

  const bgColLeft = data.col_left?.image?.sizes ? `url('${ getImageUrlSize( data.col_left.image.sizes, 1600 ).url }')` : '';
  const bgColRight = data.col_right?.image?.sizes ? `url('${ getImageUrlSize( data.col_right.image.sizes, 1600 ).url }')` : '';

  return (
    <Row className={ cx( fullRow ) }>
      <Col md={ 6 } className={ cx( block ) } style={ {
        backgroundImage: bgColLeft
      } }>
        { renderCol( data.col_left ) }
      </Col>
      <Col md={ 6 } className={ cx( block ) } style={ {
        backgroundImage: bgColRight
      } }>
        { renderCol( data.col_right ) }
      </Col>
    </Row >
  )
}

export default connect( ImageTextModule )
