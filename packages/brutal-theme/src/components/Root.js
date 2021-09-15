import React, { useState, useEffect, useRef } from 'react';
import { Global, css, connect, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Project from './layout/Project';
import Home from './layout/Home';
import Footer from './shared/Footer';
import FontFace from './shared/FontFace';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import { gridTheme } from '../assets/styles/grid';
import styleCSS from '../assets/styles/style.css'
import Navbar from './shared/header/Navbar';
import Services from './layout/Services';
import Contact from './layout/Contact';
import { styled } from 'frontity';
import { spacing } from '../assets/styles/spacing';
import About from './layout/About';
import Projects from './layout/Projects';
import { mq } from '../assets/styles/variables';
import ScreenSizeDetector from 'screen-size-detector'

const screen = typeof window !== 'undefined' && new ScreenSizeDetector(); // Default options

const Main = styled.main`
  ${ mq[ 'lg' ] }{
    padding-top: 8vh;
  }
`

const Root = ( { state } ) =>
{
  const data = state.source.get( state.router.link );
  const objPageIDs = Object.values( state.source.page ).find( page => page.link === data.link )
  const blackBackground = objPageIDs?.acf.footer_default_black

  const [ lineY, setLineY ] = useState( 0 );
  const [ screenWidth, setScreenWidth ] = useState(screen.width)

  useEffect( () =>{
    window.onscroll = () => setLineY( window.pageYOffset )
    window.onresize = () => setScreenWidth(screen.width)
  }, [] )

  return (
    <>
      <Head>
        <title>{ state.frontity.title }</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <html lang="en" />
      </Head>

      <FontFace />
      <Global styles={ css( styleCSS ) } />
      <GridThemeProvider gridTheme={ gridTheme }>
        <Navbar screenWidth={screenWidth} scroll={ lineY } />
        <Main>
          <Switch>
            <Home when={ data.isHome } />
            <Project when={ !data.isPage && data.isPostType && data.type === "proyectos" } />
            <Services when={ data.isPage && data.link === '/servicios/' } />
            <Contact when={ data.isPage && data.link === '/contactar/' } />
            <About when={ data.isPage && data.link === '/sobre-nosotros/' } />
            <Projects when={ data.isPostType && data.link === "/listado-proyectos/" } />
          </Switch>
        </Main>
        <Footer blackBackground={ blackBackground } />
      </GridThemeProvider>
    </>
  );
};

export default connect( Root );
