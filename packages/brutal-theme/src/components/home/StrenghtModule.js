import React, { useState, useEffect, useRef } from 'react';
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

  em {
    color: ${ theme.colors.primaryColor };
    font-style: normal;
  }
  
  ${ theme.fontSize.h1 }
`;

const ItemsList = styled.div`
  display: flex;
  flex-direction: column;

  ${ mq[ "md" ] } {
    flex-direction: row;
    flex-wrap: wrap;
  }

  ${ mq[ "md" ] } {
    margin: 0 -${ spacing[ 'p-8' ] };
    > div{
      width: 50%;
      padding: 0 ${ spacing[ 'p-8' ] };

      &:last-child{
        margin-right: 0;
      }
    }
  }

  ${ mq[ "lg" ] } {
    margin-top: 8rem;
    flex-direction: row;
    flex-wrap: wrap;

    > div{
      width: 33.33%;
    }
  }
`

const StrenghtModuleMargin = styled.div`

  margin: 4rem 0;

  ${ mq[ "md" ] } {
    margin: 5rem 0;
  }
  ${ mq[ "lg" ] } {
    margin: 7rem 0;
  }
  ${ mq[ "xl" ] } {
    margin: 9rem 0;
  }
  ${ mq[ "xxl" ] } {
    margin: 11rem 0;
  }

`;

// component

const StrenghtModule = ( {
  section_title,
  strenght,
  libraries,
} ) =>
{
  const Html2React = libraries.html2react.Component;

  return (
    <div>
      <Block>
        <Container>
          <StrenghtModuleMargin>
            <Title level={ 2 } className={ cx( heroTitle ) }><Html2React html={ section_title } /></Title>
            <ItemsList>
              {
                strenght?.map( ( module, index ) => <StrenghItem key={ uuid_v4() } { ...module } delay={ `${ 0 + index / 10 }s` } /> )
              }
            </ItemsList>
          </StrenghtModuleMargin>
        </Container>
      </Block>
    </div>
  )
}

export default connect( StrenghtModule )
