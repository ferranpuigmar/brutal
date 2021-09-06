import React from 'react';
import { Global, css, connect } from "frontity";
import Switch from "@frontity/components/switch";
import Post from './layout/Post';
import Page from './layout/Page';
import Home from './layout/Home';
import Footer from './shared/Footer';
import FontFace from './shared/FontFace';
import { GridThemeProvider } from 'styled-bootstrap-grid';
import { gridTheme } from '../assets/styles/grid';
import styleCSS from '../assets/styles/style.css'
import Navbar from './shared/header/Navbar';
import Projects from './layout/Projects';

const Root = ( { state } ) =>
{
  const data = state.source.get( state.router.link );
  
  // console.log(`data`, data)
  // Background footer logic
  const objPageIDs = Object.values(state.source.page).find(page=>page.link=== data.link)
  const blackBackground = objPageIDs?.acf.footer_default_black
  
  // console.log(`data Root`, data)
  // console.log(`state Root`, state)
  return (
    <>
      <FontFace />
      <Global styles={ css( styleCSS ) } />
      <GridThemeProvider gridTheme={ gridTheme }>
        <Navbar />
        <main>
          <Switch>
            <Home when={ data.isHome } />
            <Post when={ !data.isPage && data.isPostType } />
            {/* <Page when={ data.isPage && data.isPostType } /> */}
            <Projects when={ data.isPostType && data.link==="/listado-proyectos/"}/>
            
          </Switch>
        </main>
        <Footer blackBackground={blackBackground}/>
      </GridThemeProvider>
    </>
  );
};

export default connect( Root );
