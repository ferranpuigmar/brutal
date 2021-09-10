import { connect, styled } from 'frontity';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'styled-bootstrap-grid';
import { spacing } from '../../assets/styles/spacing';
import Title from '../shared/Title';
import { css, cx } from '@emotion/css'
import Container from './Container';
import { mq } from '../../assets/styles/mediaqueries';
import { theme } from '../../assets/styles/theme';
import Block from '../shared/Block';
import ServiceItem from '../services/ServiceItem';
import { renderModule } from '../utils/renderModule';
import PageWrapper from '../shared/PageWrapper';

// Styles
const pageTitle = css`
  margin-bottom: ${ spacing[ 'm-6' ] };
`;

const pageWrapper = css`
  padding-bottom: 0;
`

const ServicesTitleWrapper = styled.div`
  background-color: ${ theme.colors.primaryColor };
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: ${ spacing[ 'py-4' ] };

  > div{
    text-align: center;

    h2{
      width: 100%;
    }
  }
`

const GridServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${ mq[ "sm" ] } {
    flex-direction: row;
    margin: 0 -4rem;
    flex-wrap: wrap;
    > div{
      width: 33.33%;
      padding: 4rem;
    }
  }
`

const servicesh2 = css`
    font-size: 3.5rem;
    color: ${ theme.colors.black };

    ${ mq[ "sm" ] } {
      width: 4.9rem;
    }
`;

const SectionServices = styled.section`
  margin-top: ${ spacing[ 'mt-5' ] }
`

const BlockServices = styled.div`
  padding: ${ spacing[ 'py-6' ] }
`


const Services = ( { state, actions, libraries } ) =>
{
  const data = state.source.get( state.router.link );
  const post = state.source[ data.type ][ data.id ];
  const {
    col_left_text,
    col_right_text,
    servic_items,
    solutions_section_title
  } = post.acf;

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  const [ services, setServices ] = useState( [] );

  const loadServices = async () =>
  {
    const serviceTaxonomyRequest = await libraries.source.api.get( {
      endpoint: `/wp/v2/servicios`
    } );
    const response = await serviceTaxonomyRequest.json();
    setServices( response )
  }

  useEffect( async () =>
  {
    loadServices()
  }, [] );

  return data.isReady ? (
    <PageWrapper className={ cx( pageWrapper ) }>
      <Container>
        <Title className={ cx( pageTitle ) } level={ 1 }><Html2React html={ post.title.rendered } /></Title>
        <Row>
          <Col md={ 6 }>
            <Html2React html={ col_left_text } />
          </Col>
          <Col md={ 6 }>
            <Html2React html={ col_right_text } />
          </Col>
        </Row>
      </Container>
      <SectionServices id="services">
        <ServicesTitleWrapper>
          <Container>
            <Title level={ 2 } className={ cx( servicesh2 ) }>{ solutions_section_title }</Title>
          </Container>
        </ServicesTitleWrapper>
        <BlockServices>
          <Container>
            <GridServicesWrapper>
              { services.map( service => <ServiceItem title={ service.name } data={ service.acf } /> ) }
            </GridServicesWrapper>
          </Container>
        </BlockServices>
      </SectionServices>
      { renderModule( 'contact_module', post?.acf ) }
    </PageWrapper>
  ) : null;
}

export default connect( Services );
