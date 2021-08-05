import { connect } from 'frontity';
import React, { useEffect, useState } from 'react'
import Container from './Container';
import { Row, Col } from 'styled-bootstrap-grid';
import Text from '../shared/Text';
import Title from '../shared/Title';
import Paragraph from '../shared/Paragraph';

const Post = ( { state, actions, libraries, params } ) =>
{

  const [ services, setServices ] = useState();

  const Html2React = libraries.html2react.Component;
  const data = state.source.get( state.router.link );
  const post = state.source[ data.type ][ data.id ];
  const { cliente, industria, portfolio } = post.acf;
  console.log( 'data: ', data )
  console.log( 'post:', post )

  const getIdServiceTaxonomies = async ( post ) =>
  {
    const idCategories = await post[ 'servicios' ].reduce( ( acc, category ) => [ ...acc, `${ category }` ], [] ).join( ',' )
    return idCategories;
  }

  const renderServices = async ( post ) =>
  {
    const includedPostTaxonomies = await getIdServiceTaxonomies( post );
    const serviceTaxonomyRequest = await libraries.source.api.get( {
      endpoint: `/wp/v2/servicios`,
      params: { include: includedPostTaxonomies }
    } );
    const response = await serviceTaxonomyRequest.json();
    setServices(
      response
        .map( ( taxonomy, index ) => index !== 0 ? taxonomy.name.toLowerCase() : taxonomy.name )
        .join( ', ' )
    );
  }

  useEffect( () =>
  {
    renderServices( post )
  }, [] )

  return data.isReady ? (
    <>
      <Container className="projectpage">
        <Title level={ 1 }>{ post.title.rendered }</Title>
        <Row>
          <Col md={ 4 } >
            <Paragraph>
              { !data.isPage && ( <Html2React html={ post.content.rendered } /> ) }
            </Paragraph>
          </Col>
          <Col md={ 7 }>
            <Row>
              { cliente && <Col md={ 3 }>
                <ProjectTags tagLabel="Cliente" tagValue={ cliente } />
              </Col> }
              <Col md={ 4 }>
                <ProjectTags tagLabel="Industria" tagValue={ industria } />
              </Col>
              <Col md={ 5 }>
                <ProjectTags tagLabel="Servicios" tagValue={ services } />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
    // Esto sería un loading en vez de null
  ) : null;
}

const ProjectTags = ( { tagLabel, tagValue } ) =>
{
  return (
    <>
      <Title level={ 4 }>{ tagLabel }</Title>
      <Text text={ tagValue } />
    </>
  )
}

export default connect( Post );
