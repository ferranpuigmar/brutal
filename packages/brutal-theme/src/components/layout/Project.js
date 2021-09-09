import { connect } from 'frontity';
import React, { useEffect, useState } from 'react'
import Container from './Container';
import { Row, Col } from 'styled-bootstrap-grid';
import Text from '../shared/Text';
import Title from '../shared/Title';
import { styled } from 'frontity';
import { mq } from '../../assets/styles/mediaqueries';
import { spacing } from '../../assets/styles/spacing';
import { css, cx } from '@emotion/css'
import OtherProjects from '../project/OtherProjects';
import { v4 as uuid_v4 } from "uuid";
import PageWrapper from '../shared/PageWrapper';


// STYLES

const PortFolioImageWrapper = styled.div`
  margin-top: ${ spacing[ 'mt-10' ] };
  ${ mq[ "sm" ] } {
    margin-top: ${ spacing[ 'mt-8' ] };
  }
  img{
    max-width: 100%;
    width: 100%;
    height: auto;
  }
`

const descriptionCol = css`
  order: 1;
  ${ mq[ "sm" ] } {
    order: 0;
  }
`

const infoCol = css`
  order: 0;
  ${ mq[ "sm" ] } {
    order: 1;
  }
`

const projectTitle = css`
  margin-bottom: ${ spacing[ 'm-6' ] };
`;

const descriptionStyles = css`
  &:last-child{
    margin-bottom: 20px;
  }
  ${ mq[ "md" ] } {
    margin-bottom: 0;
  }
`;

const Wrapper = styled.div`
  margin-bottom: ${ spacing[ 'm-5' ] };
  > h4 {
    line-height: 1;
    margin-bottom: ${ spacing[ 'm-2' ] };
  }
  ${ mq[ "sm" ] } {
    margin: 0;
  }
`


const Project = ( { state, actions, libraries, params } ) =>
{

  const [ services, setServices ] = useState();

  const Html2React = libraries.html2react.Component;
  const data = state.source.get( state.router.link );
  const post = state.source[ data.type ][ data.id ];
  const { cliente, industria, portfolio } = post.acf;
  console.log( 'post: ', post.acf )
  console.log( 'data: ', data )

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
    // renderServices( post )
  }, [] )

  return data.isReady ? (
    <PageWrapper>
      <Container className="projectpage">
        <Title className={ cx( projectTitle ) } level={ 1 }>{ post.title.rendered }</Title>
        <Row>
          <Col md={ 4 } className={ cx( descriptionCol ) }>
            { !data.isPage && ( <Html2React className={ descriptionStyles } html={ post.content.rendered } /> ) }
          </Col>
          <Col md={ 8 } className={ cx( infoCol ) }>
            <Row>
              <Col xs={ 12 } md={ 3 } mdOffset={ 1 }>
                <ProjectTags tagLabel="Cliente" tagValue={ cliente } />
              </Col>
              <Col xs={ 12 } md={ 3 }>
                <ProjectTags tagLabel="Industria" tagValue={ industria } />
              </Col>
              <Col xs={ 12 } md={ 4 }>
                <ProjectTags tagLabel="Servicios" tagValue={ services } />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      { portfolio && <PortfolioList projectName={ post.title.rendered } portfolio={ portfolio } /> }
      <OtherProjects currentProject={ data.id } />

    </PageWrapper>
    // Esto sería un loading en vez de null
  ) : null;
}

// SMALL COMPONENTS

const ProjectTags = ( { tagLabel, tagValue } ) =>
{
  return (
    <Wrapper>
      <Title level={ 4 }>{ tagLabel }</Title>
      <Text text={ tagValue } />
    </Wrapper>
  )
}

const PortfolioList = ( { portfolio, projectName } ) =>
{
  return <div>
    { portfolio.map( ( portfolioImage, index ) => <PortFolioImageWrapper key={ uuid_v4() }><img src={ portfolioImage.imagen } alt={ `${ projectName } portfolio` } /></PortFolioImageWrapper> ) }
  </div>
}

export default connect( Project );
