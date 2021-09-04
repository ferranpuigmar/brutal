import { connect } from 'frontity'
import React, { useEffect } from 'react'
import { Col, Row } from 'styled-bootstrap-grid';
import { css, cx } from '@emotion/css'
import { theme } from '../../../assets/styles/theme';
import { spacing } from '../../../assets/styles/spacing';
import Title from '../../shared/Title';
import { mq } from '../../../assets/styles/mediaqueries';

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

const fullRow = css`
  margin: 0!important;
`

// Component

const ProjectsModule = ( { state, libraries, actions, ...rest } ) =>
{

  const { link_text, projects } = rest;

  useEffect( () =>
  {
    actions.source.fetch( "/proyectos" );
  }, [] );

  const Html2React = libraries.html2react.Component;
  // return projects.filter( project => projectsDataKeys.includes( project ) ).map( project => 
  // {
  //   // const bg = project
  //   return <Row className={ cx( fullRow ) }>
  //     <Col md={ 6 } className={ cx( block ) }>

  //     </Col>
  //     <Col md={ 6 } className={ cx( block ) } style={ {
  //       backgroundImage: ''
  //     } }>

  //     </Col>
  //   </Row >
  // }

  // )

  return projects.map( project =>
  {
    const dataProject = state.source.proyectos[ project ];
    const title = dataProject.title.rendered;
    const description = dataProject.excerpt.rendered;
    return <p><Html2React html={ dataProject.title.rendered } /></p>
  } )
}

export default connect( ProjectsModule )
