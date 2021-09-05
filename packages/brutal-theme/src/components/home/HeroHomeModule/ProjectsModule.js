import { connect, styled } from 'frontity'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'styled-bootstrap-grid';
import { css, cx } from '@emotion/css'
import { theme } from '../../../assets/styles/theme';
import { spacing } from '../../../assets/styles/spacing';
import Title from '../../shared/Title';
import { mq } from '../../../assets/styles/mediaqueries';
import ArrowLink from '../../shared/ArrowLink';
import { orderByBreakpoint } from '../../utils/order';
import { hexToRgb } from '../../utils/colors';

// Styles
const block = css`
  padding: ${ spacing[ 'p-10' ] }!important;
  position: relative;
  background-size: cover!important;
  background-position: center;
  background-repeat: no-repeat;
  background: ${ theme.colors.white };
  min-height: 329px!important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${ mq[ "sm" ] } {
    min-height: 550px!important;
    padding: ${ spacing[ 'p-20' ] }!important;
  }
`;

const titleColor = css`
  color: ${ theme.colors.black };
  text-align: left;
  width: 100%;
  margin-bottom: ${ spacing[ 'mb-3' ] };
`

const DescriptionWrapper = styled.div`
  width: 100%;
  p { color: ${ theme.colors.black };}
`

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

  const renderCols = ( project, index ) =>
  {

    const evenRow = index % 2 === 0;
    const title = project?.title.rendered;
    const description = project?.excerpt.rendered;
    const link = project?.link;
    const bg_url = project?.project_media_url;

    const colContent = <Col md={ 6 } className={ cx( block ) }>
      <Title className={ titleColor } level={ 3 } >{ title }</Title>
      <DescriptionWrapper>
        <Html2React html={ description } />
      </DescriptionWrapper>
      <ArrowLink link={ link }>{ link_text }</ArrowLink>
    </Col>

    const colBg = <Col md={ 6 } className={ cx( block ) } style={ {
      backgroundImage: `url(${ bg_url })`
    } }></Col>

    return evenRow ? [ colContent, colBg ] : [ colContent, colBg ]
  }

  useEffect( async () =>
  {
    loadProjects()
  }, [] );

  const Html2React = libraries.html2react.Component;

  return dataProjects.map( ( project, index ) => <Row className={ cx( fullRow ) }>
    { renderCols( project, index ) }
  </Row >
  )
}

export default connect( ProjectsModule )
