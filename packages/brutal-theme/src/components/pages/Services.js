import { connect, styled } from 'frontity';
import React from 'react'
import { Col, Row } from 'styled-bootstrap-grid';
import { spacing } from '../../assets/styles/spacing';
import Title from '../shared/Title';
import { css, cx } from '@emotion/css'
import Container from '../layout/Container';
import { mq } from '../../assets/styles/mediaqueries';
import { theme } from '../../assets/styles/theme';
import Block from '../shared/Block';
import ServiceItem from '../services/ServiceItem';
import { renderModule } from '../utils/renderModule';
import Loading from '../shared/Loading';

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

  ${ mq[ "sm" ] } {
    margin: 0 -4rem -4rem;
    flex-direction: row;
    flex-wrap: wrap;

    > div{
      width: 50%;
      padding: 0 4rem 4rem;
    }
  }

  ${ mq[ "xxl" ] } {
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
    services,
    solutions_section_title
  } = post.acf;

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;
  const availableServices = state.source.get( `/categories/${ state.theme.services }/` ).items
  const selectedServices = services.map( service =>
  {
    return availableServices.find( availableService => availableService.id === service.category )
  } );

  return data.isReady ? (
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
                selectedServices
                  ? selectedServices.map( service => <ServiceItem key={ service.id } title={ service.name } data={ service.acf } /> )
                  : <Loading />
              }
            </GridServicesWrapper>
          </Container>
        </Block>
      </div>
      { renderModule( 'contact_module', post?.acf ) }
    </>
  ) : <Loading />;
}

export default connect( Services );
