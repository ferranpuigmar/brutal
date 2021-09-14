const servicesHandler = {
  name: "categories",
  priority: 10,
  pattern: "/categories/:slug",
  func: async ( { link, params, state, libraries } ) =>
  {
    const { slug } = params;

    // Fetch the menu data from the endpoint
    const response = await libraries.source.api.get( {
      endpoint: `/wp/v2/${ slug }`,
    } );

    // Parse the JSON to get the object
    const servicesData = await response.json();

    // Add the menu items to source.data
    const services = state.source.data[ link ];
    Object.assign( services, {
      items: servicesData
    } );
  },
};

export default servicesHandler;