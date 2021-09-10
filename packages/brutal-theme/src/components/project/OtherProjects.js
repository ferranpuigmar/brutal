import React, { useEffect } from 'react'
import { connect } from 'frontity';
import Container from '../layout/Container';
import { styled } from 'frontity';
import { spacing } from '../../assets/styles/spacing';
import Title from '../shared/Title';
import { getMediaUrl } from '../utils/images';
import { theme } from '../../assets/styles/theme';
import Block from '../shared/Block';
import { cx, css } from '@emotion/css';
import { mq } from '../../assets/styles/variables';



// Styles 
const title = css`
  margin-bottom: ${ spacing[ 'mb-6' ] };
`
const Wrapper = styled.div`
  display: flex;
  align-items: middle;
  justify-content: ${ props => props.otherProjectsNumber < 4 ? 'flex-start' : 'space-around' };
  margin: 0 -${ spacing[ 'm-4' ] };
`

const WrapperLink = styled.a`
  display: block;
  height: 250px;
  width: 100%;
  max-width: 308px;
  margin-left: ${ spacing[ 'm-4' ] };
  margin-right: ${ spacing[ 'm-4' ] };
  position: relative;

  ${ mq[ 'sm' ] }{
    height: 308px;
  }

  &:hover{
    > div{
      opacity: 1;
    }
  }
`

const OtherProjectImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

const WrapperInfo = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: ${ theme.colors.primaryColor };
  padding: ${ spacing[ 'p-6' ] };
  transition: all 0.3s ease-in-out;
  opacity: 0;
  pointer-events: none;

  h2{
    color: ${ theme.colors.black }
  } 
`

// Component 
const OtherProjects = ( { state, actions, currentProject } ) =>
{

  useEffect( () =>
  {
    actions.source.fetch( "/proyectos" );
  }, [] );

  const projects = Object.values( state.source.proyectos ).filter( project => project.id !== currentProject ).slice( 0, 4 );

  return (
    projects ?
      <>
        <Block>
          <Container>
            <Title level={ 3 } className={ cx( title ) }>Otros Proyectos</Title>
            <Wrapper otherProjectsNumber={ projects.length }>
              { projects.map( project =>
              {
                return (
                  <WrapperLink key={ project.id } href={ project.link }>
                    <WrapperInfo>
                      <Title level={ 2 }>{ project.title.rendered }</Title>
                    </WrapperInfo>
                    <OtherProjectImg src={ getMediaUrl( state, project, 1600 ) } alt={ project.title.rendered }></OtherProjectImg>
                  </WrapperLink>
                )
              } ) }
            </Wrapper>
          </Container>
        </Block>
      </>
      : null
  )
}

export default connect( OtherProjects );
