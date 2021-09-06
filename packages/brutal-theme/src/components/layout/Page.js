import { connect } from 'frontity';
import React from 'react'

const Page = ( { state, actions, libraries } ) =>
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

console.log(`data.link`, data.link)
  return data.isReady ? (
    <div>
      {/* {data.link === "/proyecto/" && <Projects/>} */}
 
    </div>
  ) : null;
}

export default connect( Page );
