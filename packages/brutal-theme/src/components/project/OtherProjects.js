import React from 'react'
import { connect } from 'frontity';
import Container from '../layout/Container';
import { styled } from 'frontity';
import { spacing } from '../../assets/styles/spacing';
import Title from '../shared/Title';
import { theme } from '../../assets/styles/theme';
import Block from '../shared/Block';
import { cx, css } from '@emotion/css';
import { breakpoints, mq } from '../../assets/styles/variables';
import { hexToRgb } from '../utils/colors';
import GridImage from '../layout/GridImage';
import { portfolioContainer } from '../layout/GridRow';

// Styles 
const title = css`
  margin-bottom: ${ spacing[ 'mb-6' ] };
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: middle;
  justify-content: ${ props => props.otherProjectsNumber < 4 ? 'flex-start' : 'space-around' };

  > * {
    margin-bottom: ${ spacing[ 'mb-8' ] };
  }

  ${ mq[ 'sm' ] }{
    flex-direction: row;
    flex-wrap: nowrap;
    margin: 0 -${ spacing[ 'm-4' ] };
  }
`

const WrapperLink = styled.div`
  display: inline-flex;
  height: 250px;
  width: 100%;
  position: relative;

  ${ mq[ 'sm' ] }{
    height: 308px;
    max-width: 308px;
    margin-left: ${ spacing[ 'm-4' ] };
    margin-right: ${ spacing[ 'm-4' ] };
  }

  > div{
    transition: all 0.4s ease-out;
    padding: 0 ${ spacing[ 'p-4' ] };
    opacity: 0;

    > *{
      transition: all 0.3s ease-out 0.4s;
      transform: translateY(-10px);
      opacity: 0;
    }
  }

  &:hover{
    > div{
      padding: ${ spacing[ 'p-3' ] } ${ spacing[ 'p-4' ] };
      opacity: 1;
      height: 100%;
      background-color: rgba( ${ hexToRgb( theme.colors.primaryColor ) }, 1);

      > *{
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  img {
    width: 100%;
    object-fit: cover;
    height: 100%;
    color: #fff;
  }
`

// Component 
const OtherProjects = ( { state, currentProject } ) =>
{
  const allProjects = state.source.get( `/projectsdata/${ state.theme.projects }/` ).items;
  const projects = allProjects.filter( project => project.id !== currentProject ).slice( 0, 4 );

  return (
    projects ?
      <>
        <Block>
          <Container>
            <Title level={ 3 } className={ cx( title ) }>Otros Proyectos</Title>
            <Wrapper otherProjectsNumber={ projects.length }>
              { projects.map( project =>
                <WrapperLink key={ project.id } className={ cx( portfolioContainer ) }>
                  <GridImage item={ project } maxSize={ 500 } />
                </WrapperLink>
              ) }
            </Wrapper>
          </Container>
        </Block>
      </>
      : null
  )
}

export default connect( OtherProjects );
