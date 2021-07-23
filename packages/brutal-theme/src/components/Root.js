import React from 'react';
// import { connect } from 'frontity';
import { Global, css, connect } from "frontity";
import styleCSS from '../assets/styles/style.css'

import Switch from "@frontity/components/switch";
import Post from './layout/Post';
import Page from './layout/Page';
import Header from './layout/Header';
import Home from './layout/Home';
import Footer from './layout/Footer';
import Title from './shared/Title/Title';

const Root = ( { state } ) =>
{
  const data = state.source.get( state.router.link );
  return (
    <div className="page">
      {/* <Global styles={globalStyles} /> */ }
      <Global styles={ css( styleCSS ) } />
      <Header />
      <main>
        <Container>
          <Title level={ 2 }>Hola</Title>
        </Container>
        <Switch>
          <Home when={ data.isHome } />
          <Post when={ !data.isPage && data.isPostType } />
          <Page when={ data.isPage && data.isPostType } />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default connect( Root );

const globalStyles = css`
  body {
    margin: 0;
    color: pink;
    font-family: Arial;
    font-size: 20px;
  }
  ${ '' /* a,
  a:visited {
    color: inherit;
    text-decoration: none;
  } */}
`;
