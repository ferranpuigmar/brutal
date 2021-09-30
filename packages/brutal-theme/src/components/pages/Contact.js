import { styled, connect } from 'frontity';
import React, { useEffect, useState } from 'react'
import Title from '../shared/Title';
import Container from '../layout/Container';
import { Row, Col } from 'styled-bootstrap-grid';
import { css, cx } from '@emotion/css'
import { spacing } from '../../assets/styles/spacing';
import PageWrapper from '../shared/PageWrapper';
import selectArrow from '../../assets/images/select_arrow.svg';
import { mq } from '../../assets/styles/mediaqueries';
import { theme } from '../../assets/styles/theme';
import Loading from '../shared/Loading';


// STYLES
const sectionTitle = css`
  margin-bottom: ${ spacing[ 'pb-6' ] };

  ${ mq[ "md" ] } {
    padding-bottom: ${ spacing[ 'pb-7' ] };
  }
`

const descriptionWrapper = css`
  ${ mq[ "md" ] } {
    padding-bottom: ${ spacing[ 'pb-12' ] };
  }

  ${ mq[ "lg" ] } {
    padding-right: ${ spacing[ 'pr-12' ] };
    padding-bottom: 0;
  }
`

const colForm = css`

  .form{
    margin-top: 30px;

    &Row {
      display: flex;
      flex-direction: column;

      div {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 30px;

        label{
          font-size: 1.8rem;
          text-align: left;
          color: white;
          margin-bottom: ${ spacing[ 'mb-2' ] };
        }

        input,
        select{
          height: 49px;
          width: 100%;
        }

        input,
        select,
        textarea{
          font-size: 1.6rem;
          padding: 15px;
          border: 0;
          background-color: ${ theme.colors.white };

          + span{
            margin-top: 1rem;
            font-size: 1.4rem;
            text-align: left;
          }
        }

        &.select > span{
          position: relative;
          display: block;

          &:before{
            position: absolute;
            content: "";
            width: 30px;
            height: calc(100% - 2px);
            transform: translateY(-50%);
            top: 51%;
            right: 0;
            pointer-events: none;
            background: white url(${ selectArrow });
            background-size: 10px;
            background-repeat: no-repeat;
            background-position: center center;
          }
        }

        select{
          padding-right: 30px;
        }

        textarea{
          width: 100%;
        }

        br{
          display: none;
        }
      }

      &:last-child{
        div{
          width: 100%;
        }
      }
    }
  }

  .error-message {
    bottom: 40px;
    right: 40px;
    padding: 18px;
    font-size: 14px;
    color: white;
    text-align: left!important;
    margin-top: 30px;
  }

  ${ mq[ "sm" ] } {
    .form{
      margin-top: 0;

      &Row {
        display: flex;
        flex-direction: row;
        margin: 0 -16px 0;

        div {
          padding: 0 16px;
          width: 50%;

          label{
            text-align: left;
          }
        }
      }
    }
  }

  div:last-child{
    text-align: right;
    input[type="submit"]{
      justify-self: flex-end;
      padding: 10px;
      font-size: 20px;
      width: 100%;
      max-width: 309px;
    }
  }
`
const ButtonFixer = styled.div`
  form div{
    &:nth-of-type(3) {
      text-align: left!important;
    }
  }

 #sendButton {
    background-color: ${ `${ theme.colors.black }!important` };
    font-family: ${ `${ theme.fontFamily.regular }!important` };
    color: ${ `${ theme.colors.white }!important` };
    border-radius: 0!important;
    border-color: ${ `${ theme.colors.white }!important` };
    transition: color .35s linear;

    :hover {
      background-color: ${ `${ theme.colors.primaryColor }!important` };
      color: ${ `${ theme.colors.black }!important` };
      border-color: transparent!important;
      outline: none!important;
      cursor: pointer!important;
    }
  }
`;

const loadForm = ( form, Html2React ) =>
{
  return <Html2React html={ form } />
}

// COMPONENT
const Contact = ( { state, libraries } ) =>
{


  const data = state.source.get( state.router.link );
  const post = state.source[ data.type ][ data.id ];

  const { description } = post.acf;

  const handleRemoveError = ( errors ) =>
  {
    errors.forEach( error => error.remove() )
  }

  const resetForm = () =>
  {
    const errors = document.querySelectorAll( '[class*="-NotValidTip"' );
    const errroMsg = document.querySelector( '.error-message' );
    const inputs = document.querySelectorAll( '.wpcf7-form-control:not(.wpcf7-submit)' )
    inputs.forEach( input => input.value = '' )
    console.log( 'errors: ', errors.length )
    console.log( 'errroMsg: ', errroMsg )
    errors.length > 0 && errors.forEach( error => error.remove() )
    errroMsg && errroMsg.remove();
  }

  const [ startForm, setStartForm ] = useState( false )

  const handleForm = () =>
  {
    setStartForm( !startForm )
  }

  useEffect( () =>
  {
    setTimeout( handleForm, 0 )
  }, [] )

  const Html2React = libraries.html2react.Component;

  return data.isReady ? (
    <PageWrapper>
      <Container>
        <ButtonFixer className="acaaaaaaa">
          <Title className={ cx( sectionTitle ) } level={ 1 }><Html2React html={ post.title.rendered } /></Title>
          <Row>
            <Col xl={ 6 }><div className={ cx( descriptionWrapper ) }><Html2React html={ description } /></div></Col>
            <Col xl={ 6 } className={ cx( colForm ) }>{ startForm && loadForm( post.content.rendered, Html2React ) }</Col>
          </Row>
        </ButtonFixer>
      </Container>
    </PageWrapper>
  ) : <Loading />;
}

export default connect( Contact );
