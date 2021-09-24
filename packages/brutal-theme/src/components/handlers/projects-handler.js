const projectsHandler = {
  name: "projects",
  priority: 10,
  pattern: "/projectsData/:slug",
  func: async ( { link, params, state, libraries } ) =>
  {
    const { slug } = params;

    // Fetch the menu data from the endpoint
    const response = await libraries.source.api.get( {
      endpoint: `/wp/v2/${ slug }/?per_page=100`,
    } );

    const projectsData = await response.json();

    // Add the menu items to source.data
    const projects = state.source.data[ link ];

    Object.assign( projects, {
      items: projectsData
    } );
  },
};

export default projectsHandler;