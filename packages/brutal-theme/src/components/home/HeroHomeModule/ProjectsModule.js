import { connect, styled } from 'frontity'
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'styled-bootstrap-grid';
import { css, cx } from '@emotion/css'
import { theme } from '../../../assets/styles/theme';
import { spacing } from '../../../assets/styles/spacing';
import Title from '../../shared/Title';
import { mq } from '../../../assets/styles/mediaqueries';
import ArrowLink from '../../shared/ArrowLink';
import { getImageUrlSize } from '../../utils/images';

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
`

// Component

const ProjectsModule = ( { state, libraries, actions, ...rest } ) =>
{

  const { link_text, projects } = rest;
  const [ dataProjects, setDataProjects ] = useState( [] );

  const getMedia = ( project ) =>
  {
    const media = state.source.attachment[ project.featured_media ];
    console.log( media )
    return getImageUrlSize( media.sizes, 1600 ).url
  }

  const loadProjects = async () =>
  {
    await actions.source.fetch( "/proyectos" );
    const availableProjects = Object.values( state?.source?.proyectos ).filter( project => projects.includes( project.id ) )
    const newProjects = availableProjects.map( project => ( { ...project, media: getMedia( project ) } ) )
    console.log( 'new projects: ', newProjects )
    setDataProjects( availableProjects )
  }

  useEffect( async () =>
  {
    loadProjects()
  }, [] );

  const Html2React = libraries.html2react.Component;

  return dataProjects.map( project =>
  {
    const title = project?.title.rendered;
    const description = project?.excerpt.rendered;
    const link = project?.link;

    return <Row className={ cx( fullRow ) }>
      <Col md={ 6 } className={ cx( block ) }>
        <Title className={ titleColor } level={ 3 } >{ title }</Title>
        <DescriptionWrapper>
          <Html2React html={ description } />
        </DescriptionWrapper>
        <ArrowLink link={ link }>{ link_text }</ArrowLink>
      </Col>
      <Col md={ 6 } className={ cx( block ) } style={ {
        backgroundImage: ''
      } }></Col>
    </Row >
    return <p>hola...</p>
  } )
}

export default connect( ProjectsModule )
