import { connect, styled } from 'frontity';
import React from 'react'
import Title from '../shared/Title';
import Container from '../layout/Container';
import { css, cx } from '@emotion/css'
import { spacing } from '../../assets/styles/spacing';
import PageWrapper from '../shared/PageWrapper';
import { mq } from '../../assets/styles/mediaqueries';
import ArrowLink from '../shared/ArrowLink';
import { theme } from '../../assets/styles/theme';
import { Col, Row } from 'styled-bootstrap-grid';
import Loading from '../shared/Loading';
import { theme_colors } from '../../assets/styles/variables';
import CustomImage from '../shared/CustomImage';


// STYLES
const wrapper = css`
  padding-bottom: 0;
`

const sectionTitle = css`
  margin-bottom: ${ spacing[ 'pb-6' ] };
  em {
    color: ${ theme.colors.primaryColor };
    font-style: normal;
  }

  ${ mq[ "md" ] } {
    width: 100%;
    max-width: 80%;
    margin-bottom: ${ spacing[ 'pb-13' ] };
  }

  ${ mq[ "xl" ] } {
    max-width: 100%;
  }
`

const DescriptionWrapper = styled.div`
  margin-bottom: ${ spacing[ 'pb-6' ] };

  p{
    ${ theme.fontSize.h4 }
  }

  ${ mq[ "md" ] } {
    width: 100%;
    max-width: 65%;
    margin-bottom: ${ spacing[ 'pb-12' ] };
    p{
      ${ theme.fontSize.h3 }
    }
  }
`

const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;

  > div{
      justify-content: flex-start;
      width: 100%;

      a{
        max-width: 100%;
        width: 100%;
        justify-content: space-between;
      }
    }

    ${ mq[ "sm" ] } {
      width: 100%;
      max-width: 349px;
    }

    ${ mq[ "xl" ] } {
      width: 100%;

      > div{
        justify-content: flex-start;

        width: 100%;

        a{
          max-width: 100%;
          width: 100%;
          justify-content: space-between;
        }
      }
    }
`

const OnlyTitleDesktop = styled.span`
  display: none;
  ${ mq[ "sm" ] } {
    display: block;
  }
`

const BottomImg = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: ${ spacing[ 'mt-6' ] };

  img{
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  ${ mq[ 'md' ] }{
    margin-top: ${ spacing[ 'mt-14' ] };
  }
`

// COMPONENT
const About = ( { state, libraries } ) =>
{

  const Html2React = libraries.html2react.Component;
  const data = state.source.get( state.router.link );
  const post = state.source[ data.type ][ data.id ];

  const { title, description, button_text, title_bottom, image } = post.acf;

  return data.isReady ? (
    <PageWrapper className={ wrapper }>
      <Container>
        <Row>
          <Col>
            <Title className={ cx( sectionTitle ) } level={ 1 }><OnlyTitleDesktop><Html2React html={ title } /></OnlyTitleDesktop><Html2React html={ title_bottom } /></Title>
          </Col>
          <Col>
            <DescriptionWrapper><Html2React html={ description } /></DescriptionWrapper>
            <ButtonDiv><ArrowLink type="white-solid" link="/contactar">{ button_text }</ArrowLink></ButtonDiv>
          </Col>
        </Row>
      </Container>
      <BottomImg>
        <CustomImage src={ image.url } srcSet={ image.sizes } alt={ image.title } />
      </BottomImg>
    </PageWrapper>
  ) : <Loading />;
}

export default connect( About );
