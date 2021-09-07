import React from 'react';
import { Global, css, connect, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Project from './layout/Project';
import Page from './layout/Page';
import Home from './layout/Home';
import Footer from './shared/Footer';
import FontFace from './shared/FontFace';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import { gridTheme } from '../assets/styles/grid';
import styleCSS from '../assets/styles/style.css'
import Navbar from './shared/header/Navbar';
import Services from './layout/Services';

const Root = ( { state } ) =>
{
  const data = state.source.get( state.router.link );
  console.log( 'data: ', data )
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
        <Navbar />
        <main>
          <Switch>
            <Home when={ data.isHome } />
            <Project when={ !data.isPage && data.isPostType } />
            <Services when={ data.isPage && data.link === '/servicios/' } />
          </Switch>
        </main>
        <Footer />
      </GridThemeProvider>
    </>
  );
};

export default connect( Root );
