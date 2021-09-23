import React, { useState, useEffect, useRef } from 'react';
import { Global, css, connect, Head, styled } from "frontity";
import Switch from "@frontity/components/switch";
import Project from './pages/Project';
import Home from './pages/Home';
import Footer from './shared/Footer';
import FontFace from './shared/FontFace';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import { gridTheme } from '../assets/styles/grid';
import styleCSS from '../assets/styles/style.css'
import Navbar from './shared/header/Navbar';
import Services from './pages/Services';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import { breakpoints, theme_colors } from '../assets/styles/variables';
import ScreenSizeDetector from 'screen-size-detector'
import Error404 from './pages/Error404';
import Loading from './shared/Loading';
import { cx, css as cssEmotion } from '@emotion/css';

//Styles
const footerFixed = cssEmotion`
  width:100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  z-index: -10;
`

const Main = styled.main`
  margin: 10rem 0 calc(33vw + 18rem + 129px);
  background-color: ${theme_colors.black}
`

// Component
const screen = typeof window !== 'undefined' && new ScreenSizeDetector(); // Default options

const Root = ( { state } ) =>
{
  const footerRef = useRef( null );
  const data = state.source.get( state.router.link );
  const objPageIDs = Object.values( state.source.page ).find( page => page.link === data.link )
  const blackBackground = objPageIDs?.acf.footer_default_black;

  const [ isScolling, setIsScolling ] = useState( false );
  const [ movilWidth, setMovilWidth ] = useState( true );
  const [ footerFields, setFooterFields ] = useState();
  const [ mainMarginBottom, setMainMarginBottom ] = useState( 0 );

  const handleFooterHeight = () =>
  {
    if ( footerRef.current ) {
      setTimeout( () => setMainMarginBottom( footerRef.current.offsetHeight ), 400 );
    }
  }

  useEffect( () =>
  {
    setMovilWidth( screen.width <= breakpoints.md +1 ? true : false )
    window.onscroll = () => setIsScolling( window.pageYOffset > 30 ? true : false )
    window.onresize = () => screen.width <= breakpoints.md ? setMovilWidth( true ) : setMovilWidth( false )
    !footerFields && setFooterFields( state.source.get( `/globaloptions/${ state.theme.globalOptions }/` ).acf.footer_fields )
  }, [] )

  useEffect( () =>
  {
    if ( footerRef.current ) {
      window.addEventListener( 'resize', handleFooterHeight )
      window.addEventListener( 'load', handleFooterHeight )
    }
  }, [ footerRef ] )

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
        <Navbar
          mobilWidth={ movilWidth }
          scroll={ isScolling }
          footerFields={ footerFields ? footerFields : {} }
        />
        <Main style={ { marginBottom: mainMarginBottom } }>
          <Switch>
            <Loading when={ data.isFetching } />
            <Home when={ data.isHome } />
            <Project when={ !data.isPage && data.isPostType && data.type === "proyectos" } />
            <Services when={ data.isPage && data.link === '/servicios/' } />
            <Contact when={ data.isPage && data.link === '/contactar/' } />
            <About when={ data.isPage && data.link === '/sobre-nosotros/' } />
            <Projects when={ data.isPostType && data.link === "/listado-proyectos/" } />
            <Error404 when={ data.is404 } />
          </Switch>
        </Main>

        <div aria-hidden="false" ref={ footerRef } className={ cx( footerFixed ) }><Footer footerFields={ footerFields ? footerFields : {} } blackBackground={ blackBackground } /></div>
      </GridThemeProvider>
    </>
  );
};

export default connect( Root );
