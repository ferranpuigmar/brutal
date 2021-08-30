import { connect } from 'frontity';
import React from 'react'

const Page = ( { state, actions, libraries } ) =>
{
  // Get information about the current URL.
  const data = state.source.get( state.router.link );

  // Get the data of the post.
  const post = state.source[ data.type ][ data.id ];
  console.log( 'post: ', post )
  // Get a human readable date.
  const date = new Date( post.date );

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  return data.isReady ? (
    <div>
      <div><Html2React html={ post.content.rendered } /></div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>      
    </div>
  ) : null;
}

export default connect( Page );
