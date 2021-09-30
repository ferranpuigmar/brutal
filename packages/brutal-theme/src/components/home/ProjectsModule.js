import { connect, styled } from 'frontity'
import React from 'react'
import { theme } from '../../assets/styles/theme';
import { mq } from '../../assets/styles/mediaqueries';
import ProjectItem from './ProjectItem';
import { v4 as uuid_v4 } from "uuid";
import Container from '../layout/Container'

// Styles
const ProjectWrapper = styled.div`
  position: relative;
  text-decoration: none;
  display: block;
  min-height: 290px;

  ${ mq[ 'md' ] }{
    background-color: ${ theme.colors.white };
  }

  > div{
    margin: 0 auto;
  }

  ${ mq[ 'md' ] }{
    margin-bottom: 0;

    &:nth-of-type(even) > div > div {
      &:first-child{
        order: 1
      }

      &:last-child{
        order: 0;
        position: relative;
      }
    }
  }

  @media (max-width: 767px){
    > div {
      padding: 0;
    }
  }

  img {
    transform-origin: center;
    transition: all 0.3s ease-in-out;
  }
`

// Component
const ProjectsModule = ( { state, libraries, actions, ...rest } ) =>
{
  const { link_text, projects } = rest;
  const stateProjects = state.source.get( `/projectsdata/${ state.theme.projects }/` ).items;
  const availableProjects = stateProjects.filter( project => projects.includes( project.id ) )

  return availableProjects.map( ( project, index ) =>
    <ProjectWrapper key={ uuid_v4() }>
      <Container>
        <ProjectItem link_project={ project.link } project={ project } index={ index } link_text={ link_text } />
      </Container>
    </ProjectWrapper>
  )

}

export default connect( ProjectsModule )
