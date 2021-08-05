import React from 'react';
import { Global, css, connect } from "frontity";
import Switch from "@frontity/components/switch";
import Post from './layout/Post';
import Page from './layout/Page';
import Header from './layout/Header';
import Home from './layout/Home';
import Footer from './layout/Footer';
import FontFace from './shared/FontFace';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import { gridTheme } from '../assets/styles/grid';
import styleCSS from '../assets/styles/style.css'

const Root = ( { state } ) =>
{
  const data = state.source.get( state.router.link );
  return (
    <>
      <FontFace />
      <Global styles={ css( styleCSS ) } />
      <GridThemeProvider
        gridTheme={ gridTheme }
      >
        <Header />
        <main>
          <Switch>
            <Home when={ data.isHome } />
            <Post when={ !data.isPage && data.isPostType } />
            <Page when={ data.isPage && data.isPostType } />
          </Switch>
        </main>
        <Footer />
      </GridThemeProvider>
    </>
  );
};

export default connect( Root );
