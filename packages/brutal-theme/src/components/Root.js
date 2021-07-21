import React from 'react';
import { connect } from 'frontity';
import Switch from "@frontity/components/switch";
import Post from './layout/Post';
import Page from './layout/Page';
import Header from './layout/Header';
import Home from './layout/Home';
import Footer from './layout/Footer';

const Root = ( { state } ) =>
{
  const data = state.source.get( state.router.link );
  return (
    <div className="page">
      <Header />
      <main>
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