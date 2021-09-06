import { connect } from 'frontity'
import React, { useEffect, useState } from 'react'
import { Row } from 'styled-bootstrap-grid';
import { css, cx } from '@emotion/css'
import { theme } from '../../../assets/styles/theme';
import { mq } from '../../../assets/styles/mediaqueries';
import { orderByBreakpoint } from '../../utils/order';
import { hexToRgb } from '../../utils/colors';
import ProjectItem from './ProjectItem';
import { v4 as uuid_v4 } from "uuid";

// Styles
const fullRow = css`
  margin: 0!important;
  background: ${ theme.colors.white };
  position: relative;
  height: 329px;

  > div:first-child{
    background-color: rgba(${ hexToRgb( theme.colors.white ) }, 0.8) !important;
    order: 0
  }
  > div:first-child{
    order: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    justify-content: flex-start;
  }

  ${ mq[ "sm" ] } {
    height: 516px;
    width: 100%;
    flex-direction: row;

    > div:first-child,
    &:nth-child(odd) > div:last-child{
      order: 0;
      position: relative;
    }
    > div:last-child,
    &:nth-child(odd) > div:first-child{
      order: 1;
      position: relative;
    }

    > div {
      min-height: auto!important;
    }
  }
`

// Component

const ProjectsModule = ( { state, libraries, actions, ...rest } ) =>
{

  const { link_text, projects } = rest;
  const [ dataProjects, setDataProjects ] = useState( [] );

  const getMediaUrl = ( project, maxSize ) =>
  {
    const media = state.source.attachment[ project.featured_media ];
    const urlList = Object.values( media.media_details.sizes ).sort( orderByBreakpoint( 'desc' ) )
    const url = urlList.find( urlListItem => urlListItem.width < maxSize ).source_url
    return url;
  }

  const loadProjects = async () =>
  {
    await actions.source.fetch( "/proyectos" );
    const availableProjects = Object.values( state?.source?.proyectos ).filter( project => projects.includes( project.id ) )
    const availableListProjects = availableProjects.map( ( project ) =>
    {
      const url = getMediaUrl( project, 1600 );
      return ( { ...project, project_media_url: url } )
    } )
    setDataProjects( availableListProjects )
  }

  useEffect( async () =>
  {
    loadProjects()
  }, [] );

  return dataProjects.map( ( project, index ) => <Row key={ uuid_v4() } className={ cx( fullRow ) }>
    <ProjectItem project={ project } index={ index } link_text={ link_text } />
  </Row >
  )
}

export default connect( ProjectsModule )
