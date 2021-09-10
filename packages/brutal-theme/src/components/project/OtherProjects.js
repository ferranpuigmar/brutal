import React, { useEffect } from 'react'
import { connect } from 'frontity';
import Container from '../layout/Container';
import { mq } from '../../assets/styles/mediaqueries';
import { styled } from 'frontity';
import { spacing } from '../../assets/styles/spacing';
import Title from '../shared/Title';
import { cx, css } from '@emotion/css';
import { getImageUrlSize, getMediaUrl } from '../utils/images';
import { theme } from '../../assets/styles/theme';


// Styles 
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
  justify-content: ${ props => props.otherProjectsNumber < 4 ? 'flex-start' : 'space-around' };
`

const WrapperLink = styled.a`
  display: block;
  height: 308px;
  width: 100%;
  max-width: 308px;
  margin-left: ${ spacing[ 'm-4' ] };
  margin-right: ${ spacing[ 'm-4' ] };
  position: relative;

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
        <Container>
          <Title className={ cx( section ) } level={ 4 }>Otros Proyectos</Title>
        </Container>
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
      </>
      : null
  )
}



export default connect( OtherProjects );
