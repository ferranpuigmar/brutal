import React, { useEffect } from 'react'
import { connect } from 'frontity';
import Container from '../layout/Container';
import { mq } from '../../assets/styles/mediaqueries';
import { styled } from 'frontity';
import { spacing } from '../../assets/styles/spacing';
import Title from '../shared/Title';
import { cx, css } from '@emotion/css';



const OtherProyects = ( { state, actions, currentProyect } ) =>
{

  useEffect( () =>
  {
    actions.source.fetch( "/proyectos" );
  }, [] );

  const proyects = Object.values( state.source.proyectos ).filter( project => project.id !== currentProyect ).slice( 0, 4 );

  return (
    proyects ?
      <>
        <Container>
          <Title className={ cx( section ) } level={ 4 }>Otros Proyectos</Title>
        </Container>
        <Wrapper otherProyectsNumber={ proyects.length }>

          { proyects.map( project =>
          {
            const media = state.source.attachment[ project.featured_media ];
            return <WrapperLink href={ project.link }><OtherProject background={ media.media_details.sizes } ></OtherProject></WrapperLink>
          } ) }

        </Wrapper>
      </>
      : null
  )
}

const section = css`
  margin-bottom: ${ spacing[ 'mb-2' ] };
  margin-top: ${ spacing[ 'mt-20' ] };
`;

const Wrapper = styled.div`
  ${ mq[ "sm" ] } {
    padding: ${ spacing[ 'py-4' ] };
  }
  display: flex;
  align-items: middle;
  justify-content: ${ props => props.otherProyectsNumber < 4 ? 'flex-start' : 'space-around' };
`

const WrapperLink = styled.a`
  display: block;
  height: 308px;
  width: 100%;
  max-width: 308px;
  margin-left: ${ spacing[ 'm-4' ] };
  margin-right: ${ spacing[ 'm-4' ] };
`

const OtherProject = styled.div`
  display: flex;
  align-items: middle;
  justify-content: space-around;
  ${ mq[ "sm" ] } {
    background-image: ${ props => `url("${ props.background[ 'medium_large' ]?.source_url || props.background[ 'medium' ]?.source_url }")` };
  }
  width: 100%;
  height: 100%;
  background-size: cover;

`

export default connect( OtherProyects );
