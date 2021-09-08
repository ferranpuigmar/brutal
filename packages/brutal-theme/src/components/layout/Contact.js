import { connect } from 'frontity';
import React from 'react'
import Title from '../shared/Title';
import Container from './Container';
import { Row, Col } from 'styled-bootstrap-grid';
// import Text from '../shared/Text';
// import Title from '../shared/Title';
// import { styled } from 'frontity';
// import { mq } from '../../assets/styles/mediaqueries';
// import { spacing } from '../../assets/styles/spacing';
import { css, cx } from '@emotion/css'
import { spacing } from '../../assets/styles/spacing';
// import OtherProyects from '../proyect/OtherProyects';
// import { v4 as uuid_v4 } from "uuid";


// STYLES
const sectionTitle = css`
  margin-bottom: ${ spacing[ 'pb-6' ] };
`

// COMPONENT
const Contact = ( { state, libraries } ) =>
{

  const Html2React = libraries.html2react.Component;
  const data = state.source.get( state.router.link );
  const post = state.source[ data.type ][ data.id ];

  console.log( 'data: ', data )
  console.log( 'post:', post )
  const { description } = post.acf;

  return data.isReady ? (
    <Container>
      <Title className={ cx( sectionTitle ) } level={ 1 }><Html2React html={ post.title.rendered } /></Title>
      <Row>
        <Col md={ 6 }><Html2React html={ description } /></Col>
        <Col md={ 6 }><Html2React html={ post.content.rendered } /></Col>
      </Row>
    </Container>

  ) : null;
}

export default connect( Contact );
