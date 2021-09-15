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
import { hexToRgb } from '../utils/colors';
import Link from "@frontity/components/link";

// Styles 
const title = css`
  margin-bottom: ${ spacing[ 'mb-6' ] };
`
const Wrapper = styled.div`
  display: flex;
  align-items: middle;
  justify-content: ${ props => props.otherProjectsNumber < 4 ? 'flex-start' : 'space-around' };

  ${ mq[ 'sm' ] }{
    margin: 0 -${ spacing[ 'm-4' ] };
  }
`

const WrapperLink = styled.div`
  display: block;
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
`

const OtherProjectImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

const WrapperInfo = styled.div`
  width: 100%;
  height: 0;
  position: absolute;
  pointer-events: none;

  h2{
    color: ${ theme.colors.black }
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
              {
                return (
                  <WrapperLink key={ project.id }>
                    <WrapperInfo>
                      <Title level={ 2 }>{ project.title.rendered }</Title>
                    </WrapperInfo>
                    <Link link={ project.link }>
                      <OtherProjectImg src={ getMediaUrl( project, 1600 ) } alt={ project.title.rendered }></OtherProjectImg>
                    </Link>
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
