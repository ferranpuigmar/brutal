const globalOptionsHandler = {
  name: "globalOptions",
  priority: 10,
  pattern: "/globalOptions/:slug",
  func: async ( { link, params, state, libraries } ) =>
  {
    const { slug } = params;

    // Fetch the menu data from the endpoint
    const response = await libraries.source.api.get( {
      endpoint: `/acf/v3/options/${ slug }`,
    } );

    console.log( 'options: ', response )

    // Parse the JSON to get the object
    const globalSettingsData = await response.json();

    // Add the menu items to source.data
    const settings = state.source.data[ link ];
    Object.assign( settings, {
      acf: globalSettingsData.acf
    } );
  },
};

export default globalOptionsHandler;