import { connect, styled } from 'frontity'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'styled-bootstrap-grid'
import CustomImage from '../shared/CustomImage';
import { css, cx } from '@emotion/css'
import Container from '../layout/Container';
import Title from '../shared/Title';
import { spacing } from '../../assets/styles/spacing';
import Block from '../shared/Block';
import { theme } from '../../assets/styles/theme';
import { mq } from '../../assets/styles/mediaqueries';
import Typewriter from 'typewriter-effect';

// STYLES
const heroTitle = css`
  margin-bottom: ${ spacing[ 'mb-8' ] };
  em {
    color: ${ theme.colors.primaryColor };
    font-style: normal;
  }

  ${ mq[ "sm" ] } {
    margin-bottom: 0
  }
`;

const colHero = css`
  display: flex;
  align-items: center;

  ${ mq[ "sm" ] } {
    align-items: center;
  }
`

const colImage = css`
  ${ mq[ "md" ] } {
    img{
      margin: 0 auto;
      max-width: 100%;
    }
  }

  ${ mq[ "lg" ] } {
    img{
      margin: 0 auto;
      height: 100%;
      width: auto;
      max-height: 455px;
    }
  }
`

const imageStyles = css`
  width: 100%;
  max-width: 300px;
`

const HeroContent = styled.div`
  margin-top: ${ spacing[ 'mt-12' ] }
`

const ColHeroContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const contentTitle = css`
  ${ theme.fontSize.h3 }
  font-size: 24px!important;
  margin-bottom: ${ spacing[ 'mb-4' ] };
`

const animation = css`
  opacity: 0;
  transform: translateX(-15px);
  transition: all 0.3s ease-in-out;
`

const WrapperAnimation = styled.div`
  opacity: 0;
  transform: translateX(-30px);
  transition: all 1s ease-in-out;

  &.isAnimated {
    opacity: 1;
    transform: translateX(0);

  }
`

const HeroHomeModule = ( {
  libraries,
  title,
  content,
  image
} ) =>
{

  const Html2React = libraries.html2react.Component;

  const [ startAnimation, setStartAnimation ] = useState( false )

  const handleAnimation = () =>
  {
    setStartAnimation( !startAnimation )
  }

  useEffect( () =>
  {
    setTimeout( handleAnimation, 0 )
  }, [] )

  return (
    <section id="hero">
      <div style={ { height: 'calc( 100vh - 10rem )' } }>
        <Block widthPadding={ true }>
          <Container>
            <WrapperAnimation className={ cx( { [ 'isAnimated' ]: startAnimation } ) }>
              <Row >
                <Col md={ 7 } lg={ 7 } className={ colHero }>
                  <ColHeroContentWrapper>
                    <Title level={ 1 } className={ heroTitle }>
                      <Typewriter
                        onInit={
                          ( typewriter ) =>
                          {
                            typewriter.typeString( title )
                              .start()
                              .callFunction( () => document.querySelector( '.Typewriter__cursor' ).remove() )
                          }
                        }
                        options={
                          {
                            autoStart: true,
                            changeDeleteSpeed: 'natural',
                          }
                        }
                      />
                    </Title>
                    <HeroContent>
                      <Title level={ 4 } className={ contentTitle }>{ content.title }</Title>
                      <Html2React html={ content.text } />
                    </HeroContent>
                  </ColHeroContentWrapper>
                </Col>
                <Col md={ 5 } className={ cx( colHero, colImage ) }>
                  <CustomImage className={ imageStyles } srcSet={ image.sizes } src={ image.url } alt={ image.title } />
                </Col>
              </Row>
            </WrapperAnimation>
          </Container>
        </Block>
      </div>
    </section >
  )
}

export default connect( HeroHomeModule )
