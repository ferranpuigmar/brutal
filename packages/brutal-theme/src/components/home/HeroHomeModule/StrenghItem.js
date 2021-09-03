import connect from '@frontity/connect'
import React from 'react'
import Title from '../../shared/Title'
import { styled } from 'frontity';
import { css, cx } from '@emotion/css'
import { spacing } from '../../../assets/styles/spacing';
import { mq } from '../../../assets/styles/mediaqueries';


// Styles

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: ${ spacing[ 'mb-15' ] };

  img{
    width: 100%;
    max-width: 180px;
    margin-bottom: ${ spacing[ 'mb-4' ] };
  }
`

const itemTitle = css`
  line-height: 1.1;
  font-size: 3rem;
  margin-bottom: ${ spacing[ 'mb-4' ] };

  ${ mq[ "sm" ] } {
    min-height: 66px;
    margin-bottom: ${ spacing[ 'mb-8' ] };
  }
`

// Component

const StrenghItem = ( {
  description,
  title,
  image,
  libraries
} ) =>
{

  const Html2React = libraries.html2react.Component;

  return (
    <Item>
      <img src={ image } />
      <Title className={ cx( itemTitle ) } level={ 3 } >{ title }</Title>
      <Html2React html={ description } />
    </Item>
  )
}

export default connect( StrenghItem )
