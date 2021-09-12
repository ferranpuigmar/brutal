import { connect } from 'frontity'
import React, { useEffect, useState } from 'react'
import { Row } from 'styled-bootstrap-grid';
import { css, cx } from '@emotion/css'
import { theme } from '../../assets/styles/theme';
import { mq } from '../../assets/styles/mediaqueries';
import ProjectItem from './ProjectItem';
import { v4 as uuid_v4 } from "uuid";
import { getMediaUrl } from '../utils/images';
import Link from "@frontity/components/link"
import { spacing } from '../../assets/styles/spacing';

// Styles
const projectLink = css`
  text-decoration: none;
  display: block;
  margin-bottom: ${ spacing[ 'mb-6' ] };
  background-color: ${ theme.colors.white };

  > div{
    margin: 0;
    position: relative;
  }

  > div > div{
    &:last-child{
      position: absolute;
    }
  }

  ${ mq[ 'md' ] }{
    margin-bottom: 0;

    > div > div{
      &:first-child,
      &:last-child{
        position: relative;
      }
    }

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

  img {
    transform-origin: center;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    img{
      transform: scale(1.05);
    }

     .arrow-icon{
      transform: translateX(5px);
    }
  }
`

// Component

const ProjectsModule = ( { state, libraries, actions, ...rest } ) =>
{

  const { link_text, projects } = rest;
  const [ dataProjects, setDataProjects ] = useState( [] );



  const loadProjects = async () =>
  {
    await actions.source.fetch( "/proyectos" );
    const availableProjects = Object.values( state?.source?.proyectos ).filter( project => projects.includes( project.id ) )
    const availableListProjects = availableProjects.map( ( project ) =>
    {
      const url = getMediaUrl( state, project, 1600 );
      return ( { ...project, project_media_url: url } )
    } )
    setDataProjects( availableListProjects )
  }

  useEffect( async () =>
  {
    loadProjects()
  }, [] );

  return dataProjects.map( ( project, index ) =>
    <Link key={ uuid_v4() } className={ cx( projectLink ) } link={ project.link }>
      <Row>
        <ProjectItem project={ project } index={ index } link_text={ link_text } />
      </Row>
    </Link>
  )
}

export default connect( ProjectsModule )
