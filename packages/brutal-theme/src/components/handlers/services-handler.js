const servicesHandler = {
  name: "services",
  priority: 10,
  pattern: "/service_taxonomy/:slug",
  func: async ( { link, params, state, libraries } ) =>
  {
    const { slug } = params;

    // Fetch the menu data from the endpoint
    const response = await libraries.source.api.get( {
      endpoint: `/taxonomies//${ slug }`,
    } );

    // Parse the JSON to get the object
    const servicesData = await response.json();

    // Add the menu items to source.data
    const settings = state.source.data[ link ];
    Object.assign( settings, {
      items: servicesData
    } );
  },
};

export default servicesHandler;