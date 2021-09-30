import { connect, styled } from 'frontity'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'styled-bootstrap-grid'
import CustomImage from '../shared/CustomImage';
import { css, cx, keyframes } from '@emotion/css'
import Container from '../layout/Container';
import Title from '../shared/Title';
import { spacing } from '../../assets/styles/spacing';
import { theme } from '../../assets/styles/theme';
import { mq } from '../../assets/styles/mediaqueries';
import Typewriter from 'typewriter-effect';
import Block from '../shared/Block'
import arrowSVG from './../../assets/images/arrow_home.svg'

// STYLES
const wrapperHeroHome = css`
  height: auto;
  display: flex;
  align-items: center;
  overflow: hidden;

  ${ mq[ 'md' ] }{
    min-height: calc(100vh - 10rem);
  }
`
const heroTitle = css`
  margin-bottom: ${ spacing[ 'mb-8' ] };
  min-height: 140px;
  em {
    color: ${ theme.colors.primaryColor };
    font-style: normal;
  }
  
  .Typewriter__cursor{
    display: inline-block;
  }

  ${ mq[ "sm" ] } {
    margin-bottom: 0
  }

`;

const colHero = css`
  display: flex;
  align-items: center;
  order: 0;

  ${ mq[ "md" ] } {
    order: 1;
  }

  ${ mq[ "lg" ] } {
    order: 0;
  }
`

const colImage = css`
  order: 2;
  margin-top: ${ spacing[ 'mt-5' ] };

  ${ mq[ "md" ] } {
    order: 0;
    img{
      margin: 0 auto ${ spacing[ 'mb-10' ] };
      max-width: 300px;
    }
  }

  ${ mq[ "lg" ] } {
    order: 1;

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
  max-width: 200px;

  ${ mq[ 'md' ] }{
    max-width: 100px;
  }

  ${ mq[ 'lg' ] }{
    max-width: 300px;
  }
`

const HeroContent = styled.div`
  margin-top: ${ spacing[ 'mt-4' ] };

  ${ mq[ 'md' ] }{
    margin-top: ${ spacing[ 'mt-12' ] };
  }
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

const WrapperAnimation = styled.div`
  opacity: 1;
  transform: translateX(0);
  transition: none;
  padding-bottom: 2rem; 

  ${ mq[ 'md' ] }{
    opacity: 0;
    transform: translateX(-80px);
    transition: all 0.8s ease-out;
    filter: blur(8px);
    padding-bottom: 10rem;

    &.isAnimated {
      opacity: 1;
      transform: translateX(0);
      filter: blur(0);
    }
  }
`
const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(-50%,0,0);
  }
  40%, 43% {
    transform: translate3d(-50%, -10px, 0);
  }
  70% {
    transform: translate3d(-50%, -10px, 0);
  }
  90% {
    transform: translate3d(-50%,-4px,0);
  }
`

const ArrowDown = styled.div`
  margin: 3rem 0 0;
  display: flex;
  justify-content: center;
  animation: ${ bounce } 1.5s ease infinite;
  position: absolute;
  bottom: 0;
  left: 50%;
  opacity: ${ props => props.isScroll ? 0 : 1 };
  pointer-events: none;

  img{
    width: 50px ;
  }

  ${ mq[ 'md' ] }{
    margin: 5rem auto 0;
  }
`;

const HeroHomeModule = ( {
  libraries,
  title,
  content,
  image,
  state
} ) =>
{

  const Html2React = libraries.html2react.Component;

  const [ startAnimation, setStartAnimation ] = useState( false )
  const [ isTypeWritting, setIsTypeWritting ] = useState( true )

  const handleAnimation = () =>
  {
    setStartAnimation( !startAnimation )
  }

  const handleTypeWritting = () =>
  {
    setIsTypeWritting( false )
    setTimeout( () => setIsTypeWritting( true ), 500 )
  }

  useEffect( () =>
  {
    setTimeout( handleAnimation, 0 )
  }, [] )

  return (
    <>
      <section id="hero">
        <Block widthPadding={ true } className={ wrapperHeroHome }>
          <Container>
            <WrapperAnimation className={ cx( { [ 'isAnimated' ]: startAnimation } ) }>
              <Row >
                <Col lg={ 7 } className={ colHero }>
                  <ColHeroContentWrapper>
                    <Title level={ 1 } className={ heroTitle }>
                      { isTypeWritting && <Typewriter
                        onInit={
                          ( typewriter ) =>
                          {
                            typewriter.typeString( title )
                              .start()
                              .pauseFor( 2000 )
                              .callFunction( () =>
                              {
                                document.querySelector( '.Typewriter__cursor' ).remove()
                                handleTypeWritting()
                              } )
                          }
                        }
                        options={
                          {
                            autoStart: true,
                            delay: '70',
                          }
                        }
                      /> }
                    </Title>
                    <HeroContent>
                      <Title level={ 4 } className={ contentTitle }>{ content.title }</Title>
                      <Html2React html={ content.text } />
                    </HeroContent>
                  </ColHeroContentWrapper>
                </Col>
                <Col lg={ 5 } className={ cx( colHero, colImage ) }>
                  <CustomImage className={ imageStyles } srcSet={ image.sizes } src={ image.url } alt={ image.title } />
                </Col>
              </Row>
            </WrapperAnimation>
          </Container>
        </Block>
      </section>
      <ArrowDown isScroll={ state.theme.windowScroll > 0 }><a href="#buildingBrands"><img src={ arrowSVG } /></a></ArrowDown>
    </>
  )
}

export default connect( HeroHomeModule )
