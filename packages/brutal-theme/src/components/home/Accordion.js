import React, { useRef, useState } from 'react'
import { css, cx } from '@emotion/css'
import { styled } from 'frontity'
import { theme } from '../../assets/styles/theme'
import { spacing } from '../../assets/styles/spacing'
import Title from '../shared/Title'
import { v4 as uuid_v4 } from "uuid";
import { mq } from '../../assets/styles/mediaqueries'

// Styles
const AccordionWrapper = styled.div`
    border-top: 2px solid ${ theme.colors.black };
`
const accordionTitle = css`
  color: ${ theme.colors.black };
  font-family: ${ theme.fontFamily.regular };
`
const AccordionHeader = styled.div`
  padding-top: ${ spacing[ 'pt-6' ] };
  padding-bottom: ${ spacing[ 'pt-6' ] };
  position: relative;
  cursor: pointer;

  &:hover{
    button{
      &:before,
      &:after{
        background-color: ${ props => props.expand ? theme.colors.primaryColor : theme.colors.black }!important;
      }
    }
    ${ mq[ 'md' ] }{
      button{
        &:hover{
          &:before,
          &:after{
            background-color: ${ theme.colors.primaryColor }!important;
          }
        }
      }
    }
  }
`
const AccordionCloseBtn = styled.button`

    width: 37px;
    height: 37px;
    position: absolute;
    display: block;
    top: 50%;
    right: 0;
    transition: all 0.3s ease-in-out;
    transform: ${ props => props.expand ? 'translateY(-50%) rotate(135deg)' : 'translateY(-50%) rotate(0deg)' };
    background: transparent;
    border: 0;
    cursor: pointer;

    &:before,
    &:after{
      content: "";
      position: absolute;
      width: 100%;
      left: 0;
      height: 2px;
      transition: all 0.3s ease-in-out;
      background-color: ${ theme.colors.black };
      transform-origin: center;
      top:50%;
    }

    &:hover{
        &:before,
        &:after{
          background-color: ${ props => props.expand ? theme.colors.primaryColor : theme.colors.black }!important;
        }
      }

    ${ mq[ 'md' ] }{
      &:hover{
        &:before,
        &:after{
          background-color: ${ theme.colors.primaryColor }!important;
        }
      }
    }

    &:before{
      transform: translateY(-50%);
    }

    &:after{
      transform: translateY(-50%) rotate( 90deg );
    }

    ${ mq[ 'md' ] }{
      width: 47px;
      height: 47px;
    }

`
const AccordionContentWrapper = styled.div`
  width: 100%;
  height: ${ props => `${ props.expandHeight || 0 }px` };
  overflow: hidden;
  transition: all 0.5s ease-in-out;
`

const AccordionUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  padding-top: ${ spacing[ 'mt-3' ] };
  padding-bottom: ${ spacing[ 'mb-5' ] };
  transition: all 0.6s ease-in-out;
  opacity: ${ props => props.opacityValue ? 1 : 0 };
`

const AccordionLi = styled.li`
  padding-left: 3rem;
  padding-right: 5rem;
  font-size: 2.4rem;
  margin-bottom: 2rem;
  line-height: 1.4;
  position: relative;
  color: ${ theme.colors.black };

  ${ mq[ 'sm' ] }{
    width: 100%;
  }

  ${ mq[ 'lg' ] }{
    width: 50%;
  }

  ${ mq[ 'xl' ] }{
    width: 33.33%;
  }

  &:nth-of-type(3n){
    padding-right: 0;
  }

  &:before{
    content: '';
    height: 1px;
    width: 1.5rem;
    left: 0;
    background-color: ${ theme.colors.black };
    position: absolute;
    top: 1.5rem;
  }
`

// Component
const Accordion = ( {
  data
} ) =>
{
  const contentWrapper = useRef();
  const contentUlWrapper = useRef();

  const { name, acf } = data;
  const [ expand, setExpand ] = useState( false );
  const [ expandHeight, setExpandHeight ] = useState( 0 );

  const handleExpand = () =>
  {
    setExpandHeight( !expand ? contentUlWrapper.current.offsetHeight : 0 )
    setExpand( !expand )
  }

  return <AccordionWrapper>
    <AccordionHeader expand={ expand } onClick={ () => handleExpand() }>
      <Title className={ cx( accordionTitle ) } level={ 3 }>{ name }</Title>
      { acf?.areas && <AccordionCloseBtn expand={ expand } /> }
    </AccordionHeader>
    { acf?.areas && <AccordionContentWrapper expandHeight={ expandHeight } ref={ contentWrapper }>
      <AccordionUl ref={ contentUlWrapper } opacityValue={ expand }>
        { Object.values( acf.areas ).map( service => <AccordionLi key={ uuid_v4() }>{ service.area }</AccordionLi> ) }
      </AccordionUl>
    </AccordionContentWrapper> }
  </AccordionWrapper>

}

export default Accordion
