import { connect } from 'frontity'
import React from 'react';
import Block from '../shared/Block';
import Container from '../layout/Container'
import Title from '../shared/Title';
import { css, cx } from '@emotion/css'
import { spacing } from '../../assets/styles/spacing';
import { mq } from '../../assets/styles/mediaqueries';
import { theme } from '../../assets/styles/theme';
import { Row, Col } from 'styled-bootstrap-grid';
import Accordion from './Accordion';
import ArrowLink from '../shared/ArrowLink';


// Styles
const sectionTitle = css`
    margin-bottom: ${ spacing[ 'mb-6' ] };
    color: ${ theme.colors.black };
    ${ mq[ "sm" ] } {
      margin-bottom: 0;
    }
    ${ theme.fontSize.h1 }
`

const colTitle = css`
  order: 0;
  display: flex;
  align-items: center;

  ${ mq[ "sm" ] } {
    flex-basis: 70%
  }
`
const colServices = css`
  ${ mq[ "sm" ] } {
    order: 2;
    margin-top: ${ spacing[ 'mt-12' ] };
  }
`
const colButton = css`
  margin-top: ${ spacing[ 'mt-6' ] };

  ${ mq[ "sm" ] } {
    align-items: center;
    order: 1;
    flex-basis: 30%;
    display: flex;
    justify-content: flex-end;
    margin-top: ${ spacing[ 'mt-6' ] };
  }

  ${ mq[ "xl" ] } {
    > div{
      justify-content: right;
    }
  }
`

// Component
const ServicesModule = ( { state, libraries, actions, ...rest } ) =>
{
  const { title, text_link, services } = rest;

  const availableServices = state.source.get( `/categories/${ state.theme.services }/` ).items;
  const selectedServices = services.map( service =>
  {
    return availableServices.find( availableService => availableService.id === service.category )
  } )

  const Html2React = libraries.html2react.Component;

  return <Block mode="light">
    <Container>
      <Row>
        <Col md={ 12 } xl={ 8 } className={ cx( colTitle ) }>
          <Title className={ cx( sectionTitle ) } level={ 2 }><Html2React html={ title } /></Title>
        </Col>
        <Col className={ cx( colServices ) }>
          { selectedServices.map( ( service, index ) =>
            <Accordion key={ service.id } data={ service } />
          ) }
        </Col>
        <Col md={ 12 } xl={ 4 } className={ cx( colButton ) }>
          <ArrowLink variant="bold" type="outline" link='/servicios'>{ text_link }</ArrowLink>
        </Col>
      </Row>


    </Container>
  </Block>

}

export default connect( ServicesModule )
