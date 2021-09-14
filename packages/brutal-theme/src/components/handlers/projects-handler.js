const projectsHandler = {
  name: "projects",
  priority: 10,
  pattern: "/projectsData/:slug",
  func: async ( { link, params, state, libraries } ) =>
  {
    const { slug } = params;

    // Fetch the menu data from the endpoint
    const response = await libraries.source.api.get( {
      endpoint: `/wp/v2/${ slug }`,
    } );

    const projectsData = await response.json();
    const projectsWithFeaturedMedia = await Promise.all(
      projectsData.map( async ( project ) =>
      {
        const mediaRequest = await libraries.source.api.get( {
          endpoint: `/wp/v2/media/${ project.featured_media }`,
        } )
        const media = await mediaRequest.json();

        return {
          ...project,
          featured_media: { ...media }
        }
      } )
    )

    // Add the menu items to source.data
    const projects = state.source.data[ link ];
    Object.assign( projects, {
      items: projectsWithFeaturedMedia
    } );
  },
};

export default projectsHandler;