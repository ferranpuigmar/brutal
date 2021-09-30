import connect from '@frontity/connect'
import React, { useEffect, useRef, useState } from 'react'
import Title from '../shared/Title'
import { styled } from 'frontity';
import { css, cx, keyframes } from '@emotion/css'
import { spacing } from '../../assets/styles/spacing';
import { mq } from '../../assets/styles/mediaqueries';
import CustomImage from '../shared/CustomImage';
import { offset } from '../../utils/scroll';


// Styles
const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0,30%,0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0,0,0);
}
`

const wrapperItems = css`
  margin-bottom: ${ spacing[ 'mb-15' ] };

  &:last-child{
    margin-bottom: 0;
  }

  ${ mq[ 'md' ] }{
    margin-bottom: 0;
  }
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  img{
    width: 100%;
    max-width: 180px;
    margin-bottom: ${ spacing[ 'mb-4' ] };
  }

  ${ mq[ 'md' ] }{
    opacity: 0;

    &.isAnimate{
      margin-bottom: 0;
      animation-name: ${ fadeInUp };
      animation-delay: ${ props => props.delay };
      animation-duration: .5s;
      animation-fill-mode: forwards;
    }
  }
`

const itemTitle = css`
  margin-bottom: ${ spacing[ 'mb-4' ] };

  ${ mq[ "sm" ] } {
    min-height: 66px;
    margin-bottom: ${ spacing[ 'mb-8' ] };
  }
`

// Component

const StrenghItem = ( {
  libraries,
  state,
  delay,
  ...rest
} ) =>
{
  const [ animateStarted, setAnimateStarted ] = useState( false )
  const [ animation, setAnimation ] = useState( false )
  const [ elementsVisibles, setElementsVisibles ] = useState( false )
  const itemRef = useRef()
  const Html2React = libraries.html2react.Component;

  useEffect( () =>
  {
    if ( !animateStarted && elementsVisibles ) {
      setAnimation( true )
    }

    if ( animation && !animateStarted ) {
      setAnimateStarted( true )
    }

  }, [ animation, animateStarted, elementsVisibles ] )

  useEffect( () =>
  {
    if ( itemRef.current ) {
      const scrollToShow = offset( itemRef.current );
      if ( scrollToShow.top < 0 ) {
        setElementsVisibles( true )
      }
    }
  }, [ itemRef, state.theme.windowScroll ] )

  return (
    <div className={ wrapperItems } ref={ itemRef }>
      <Item delay={ delay } className={ cx( {
        [ 'isAnimate' ]: animateStarted
      } ) }>
        <CustomImage src={ rest?.image } alt={ rest?.title } loading='eager' />
        <Title className={ cx( itemTitle ) } level={ 3 } >{ rest?.title }</Title>
        <Html2React html={ rest?.description } />
      </Item>
    </div>
  )
}

export default connect( StrenghItem )
