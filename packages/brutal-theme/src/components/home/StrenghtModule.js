import React, { useState, useEffect } from 'react';
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
    transition: all .5s linear .5s;
    opacity: ${ props => props.strengthAnimation ? 1 : 0};
    transform: ${ props => props.strengthAnimation ? 'translateY(0)' : 'translateY(100px)'};
 
    flex-direction: row;
    flex-wrap: wrap;

    > div{
      width: 33.33%;
    }
  }
`

const StrenghtModuleMargin=styled.div`

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
  state
} ) =>
{
  const Html2React = libraries.html2react.Component;
  const strengthAniActive = state.theme.windowScroll > 1200 ? true : false

  return (
    <div>
      <Block>
        <Container>
        {/* <Container className={cx(moreMargin)}> */}
          <StrenghtModuleMargin>
            <Title level={ 2 } className={ cx( heroTitle ) }><Html2React html={ section_title } /></Title>
            <ItemsList strengthAnimation={strengthAniActive}>
              {
                strenght.map( module => <StrenghItem key={ uuid_v4() } { ...module } /> )
              }
            </ItemsList>
          </StrenghtModuleMargin>
        </Container>
      </Block>
    </div>
  )
}

export default connect( StrenghtModule )
