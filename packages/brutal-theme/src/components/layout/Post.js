import { connect } from 'frontity';
import React from 'react'

const Post = ( { state, actions, libraries } ) =>
{
  // Get information about the current URL.
  const data = state.source.get( state.router.link );
  // Get the data of the post.
  const post = state.source[ data.type ][ data.id ];
  // Get the data of the author.
  const author = state.source.author[ post.author ];
  // Get a human readable date.
  const date = new Date( post.date );

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  console.log( post )

  return data.isReady ? (
    <>
      <div>
        { !data.isPage && ( <div><Html2React html={ post.content.rendered } /></div> ) }
      </div>
    </>
    // Esto sería un loading en vez de null
  ) : null;
}

export default connect( Post );
