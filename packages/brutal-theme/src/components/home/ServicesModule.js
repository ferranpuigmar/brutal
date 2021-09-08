import { connect } from 'frontity'
import React, { useEffect, useState } from 'react';
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
    font-size: 3.5rem;
    margin-bottom: ${ spacing[ 'mb-6' ] };
    color: ${ theme.colors.black };

    ${ mq[ "sm" ] } {
      font-size: 4.9rem;
      margin-bottom: 0;
    }
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
    margin-top: 0;
  }
`

// Component
const ServicesModule = ( { state, libraries, actions, ...rest } ) =>
{

  const { title, text_link, services } = rest;
  const [ dataServices, setDataServices ] = useState( [] );
  const Html2React = libraries.html2react.Component;

  const loadServices = async () =>
  {
    await actions.source.fetch( "/servicios" );
    const availableServices = Object.values( state?.source?.servicios ).filter( service => services.includes( service.id ) )
    setDataServices( availableServices )
  }

  useEffect( async () =>
  {
    loadServices()
  }, [] );

  useEffect( async () =>
  {
    console.log( 'dataServices: ', dataServices )
  }, [ dataServices ] );

  return <Block mode="light">
    <Container>
      <Row>
        <Col className={ cx( colTitle ) }>
          <Title className={ cx( sectionTitle ) } level={ 2 }><Html2React html={ title } /></Title>
        </Col>
        <Col className={ cx( colServices ) }>
          { dataServices.map( ( service, index ) =>
            <Accordion data={ service } />
          ) }
        </Col>
        <Col className={ cx( colButton ) }>
          <ArrowLink variant="bold" type="outline" link='/servicios'>{ text_link }</ArrowLink>
        </Col>
      </Row>


    </Container>
  </Block>

}

export default connect( ServicesModule )