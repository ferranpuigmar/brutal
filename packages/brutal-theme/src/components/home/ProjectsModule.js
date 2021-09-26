import { connect } from 'frontity'
import React from 'react'
import { Row } from 'styled-bootstrap-grid';
import { css, cx } from '@emotion/css'
import { theme } from '../../assets/styles/theme';
import { mq } from '../../assets/styles/mediaqueries';
import ProjectItem from './ProjectItem';
import { v4 as uuid_v4 } from "uuid";
import Link from "@frontity/components/link"
import { spacing } from '../../assets/styles/spacing';
import { hexToRgb } from '../utils/colors';
import Container from '../layout/Container'

// Styles
const projectLink = css`
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

  .arrow-icon,
  .arrow-icon:before,
  .arrow-icon:after {
    transition: all 0.1s ease-in-out!important;
  }

  &:hover {
    .arrow-element{
      span{
        color: ${ theme.colors.primaryColor }!important;
      }

      .arrow-icon,
      .arrow-icon:before,
      .arrow-icon:after {
        background-color: ${ theme.colors.primaryColor }!important;
      }
    }

    .arrow-icon {
      transform: translateX(5px);
    }
  }
`

// Component
const ProjectsModule = ( { state, libraries, actions, ...rest } ) =>
{

  const { link_text, projects } = rest;
  const stateProjects = state.source.get( `/projectsdata/${ state.theme.projects }/` ).items;
  const availableProjects = stateProjects.filter( project => projects.includes( project.id ) )

  return availableProjects.map( ( project, index ) =>
    <Link key={ uuid_v4() } className={ cx( projectLink ) } link={ project.link }>
      <Container>
        <ProjectItem project={ project } index={ index } link_text={ link_text } />
      </Container>
    </Link>
  )

}

export default connect( ProjectsModule )
