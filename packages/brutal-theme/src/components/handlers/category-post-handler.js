const categoryPostHandler = {
  name: "postCategories",
  priority: 10,
  pattern: "/custom-post/:postType/:slug",
  func: async ( { link, params, state, libraries } ) =>
  {
    const { post_type, post, slug } = params;
    console.log( 'params: ', params )
    console.log( 'link: ', link )

    // Fetch the menu data from the endpoint
    const postTypeRequest = await libraries.source.api.get( {
      endpoint: `/acf/v3/${ slug }`
    } );
    const response = await postTypeRequest.json();

    console.log( 'response: ', response )


    // // Parse the JSON to get the object
    // const categoriesData = await response.json();
    // console.log( categoriesData )
    // Add the menu items to source.data
    // const menu = state.source.data[ link ];
    // Object.assign( menu, {
    //   items: menuData.items,
    //   isMenu: true,
    // } );
  },
};

export default categoryPostHandler;