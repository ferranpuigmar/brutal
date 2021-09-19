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
import { v4 as uuid_v4 } from "uuid";

// Styles
const pageTitle = css`
  margin-bottom: ${ spacing[ 'm-6' ] };
`;

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

  ${ mq[ "md" ] } {
    margin: 0 -4rem -4rem;
    flex-direction: row;
    flex-wrap: wrap;

    > div{
      width: 50%;
      padding: 0 4rem 4rem;
    }
  }

  ${ mq[ "lg" ] } {
    > div{
      width: 33.33%;
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

const colBlock = css`
    margin-bottom: 4rem;

    &:last-child{
      margin-bottom: 0;
    }

    ${ mq[ 'sm' ] }{
      margin-bottom: 0;
    }
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
  const services = state.source.get( `/categories/${ state.theme.services }/` ).items;

  return (
    <>
      <Block>
        <Container>
          <Title className={ cx( pageTitle ) } level={ 1 }><Html2React html={ post.title.rendered } /></Title>
          <Row>
            <Col md={ 6 } className={ cx( colBlock ) }>
              <Html2React html={ col_left_text } />
            </Col>
            <Col md={ 6 } className={ cx( colBlock ) }>
              <Html2React html={ col_right_text } />
            </Col>
          </Row>
        </Container>
      </Block>
      <div id="services">
        <ServicesTitleWrapper>
          <Container>
            <Title level={ 2 } className={ cx( servicesh2 ) }>{ solutions_section_title }</Title>
          </Container>
        </ServicesTitleWrapper>
        <Block>
          <Container>
            <GridServicesWrapper>
              {
                services.map( service => <ServiceItem key={ uuid_v4() } title={ service.name } data={ service.acf } /> )
              }
            </GridServicesWrapper>
          </Container>
        </Block>
      </div>
      { renderModule( 'contact_module', post?.acf ) }
    </>
  );
}

export default connect( Services );
