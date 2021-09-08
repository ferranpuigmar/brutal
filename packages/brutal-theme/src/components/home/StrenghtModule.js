import React from 'react'
import Block from '../shared/Block';
import { css, cx } from '@emotion/css'
import { spacing } from '../../assets/styles/spacing';
import { theme } from '../../assets/styles/theme';
import Title from '../shared/Title';
import connect from '@frontity/connect';
import Container from '../layout/Container';
import { v4 as uuid_v4 } from "uuid";
import StrenghItem from './StrenghItem';
import { mq } from '../../assets/styles/mediaqueries';
import { styled } from 'frontity';

// styles

const heroTitle = css`
  margin-bottom: ${ spacing[ 'mb-10' ] };
  font-size: 3.5rem;
  line-height: normal;
  em {
    color: ${ theme.colors.primaryColor };
    font-style: normal;
  }

  ${ mq[ "sm" ] } {
    font-size: 4.9rem;
  }
`;

const ItemsList = styled.div`
  display: flex;
  flex-direction: column;

  ${ mq[ "sm" ] } {
    flex-direction: row;

    > div{
      width: 33,33%;
      margin-right: 95px;

      &:last-child{
        margin-right: 0;
      }
    }
  }
`

// component

const StrenghtModule = ( {
  section_title,
  strenght,
  libraries
} ) =>
{

  const Html2React = libraries.html2react.Component;

  return (
    <div>
      <Block>
        <Container>
          <Title level={ 2 } className={ cx( heroTitle ) }><Html2React html={ section_title } /></Title>
          <ItemsList>
            {
              strenght.map( module => <StrenghItem key={ uuid_v4() } { ...module } /> )
            }
          </ItemsList>
        </Container>
      </Block>
    </div>
  )
}

export default connect( StrenghtModule )
