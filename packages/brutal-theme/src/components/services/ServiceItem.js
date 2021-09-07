import React from 'react'
import { css, cx } from '@emotion/css'
import { styled } from 'frontity';
import Title from '../shared/Title';
import connect from '@frontity/connect';
import { spacing } from '../../assets/styles/spacing';
import { mq } from '../../assets/styles/mediaqueries';

const Item = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const serviceTitle = css`
  margin-bottom: ${ spacing[ 'mb-4' ] };
`

const Description = styled.div`
  margin-bottom: ${ spacing[ 'mb-4' ] };
  text-align: center;
  p {
    font-size: 1.6rem;
  }

  ${ mq[ "sm" ] } {
    max-width: 90%;
  }
`
const Icon = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 158px;

  img{
    max-width: 100%;
    width: 100%;
  }
`

const ServiceItem = ( { title, data, libraries } ) =>
{

  const Html2React = libraries.html2react.Component;
  const { description, icon_service } = data;
  console.log( 'data: ', data );

  return (
    <Item>
      <Icon><img src={ icon_service } alt={ `icono ${ title }` } /></Icon>
      <Title className={ cx( serviceTitle ) } level={ 3 }>{ title }</Title>
      <Description><Html2React html={ description } /></Description>
    </Item >
  )
}

export default connect( ServiceItem )
