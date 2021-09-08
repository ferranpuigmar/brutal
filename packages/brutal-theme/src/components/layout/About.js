import { connect, styled } from 'frontity';
import React from 'react'
import Title from '../shared/Title';
import Container from './Container';
import { css, cx } from '@emotion/css'
import { spacing } from '../../assets/styles/spacing';
import PageWrapper from '../shared/PageWrapper';
import { mq } from '../../assets/styles/mediaqueries';
import ArrowLink from '../shared/ArrowLink';
import { theme } from '../../assets/styles/theme';


// STYLES
const sectionTitle = css`
  margin-bottom: ${ spacing[ 'pb-6' ] };
  em {
    color: ${ theme.colors.primaryColor };
    font-style: normal;
  }

  ${ mq[ "sm" ] } {
    width: 100%;
    max-width: 65%;
    margin-bottom: ${ spacing[ 'pb-13' ] };
  }
`

const DescriptionWrapper = styled.div`
  margin-bottom: ${ spacing[ 'pb-6' ] };
  ${ mq[ "sm" ] } {
    padding-right: 80px;
    width: 100%;
    max-width: 55%;
    margin-bottom: ${ spacing[ 'pb-8' ] };
  }
`

const ButtonDiv = styled.div`
  
  ${ mq[ "sm" ] } {
    width: 100%;
    max-width: 349px;
  }
`

const OnlyTitleDesktop = styled.span`
  display: none;
  ${ mq[ "sm" ] } {
    display: block;
  }
`

// COMPONENT
const About = ( { state, libraries } ) =>
{

  const Html2React = libraries.html2react.Component;
  const data = state.source.get( state.router.link );
  const post = state.source[ data.type ][ data.id ];

  const { title, description, button_text, title_bottom } = post.acf;

  return data.isReady ? (
    <PageWrapper>
      <Container>
        <Title className={ cx( sectionTitle ) } level={ 1 }><OnlyTitleDesktop><Html2React html={ title } /></OnlyTitleDesktop><Html2React html={ title_bottom } /></Title>
        <DescriptionWrapper><Html2React html={ description } /></DescriptionWrapper>
        <ButtonDiv><ArrowLink type="white-solid" link="/contactar">{ button_text }</ArrowLink></ButtonDiv>
      </Container>
    </PageWrapper>
  ) : null;
}

export default connect( About );
