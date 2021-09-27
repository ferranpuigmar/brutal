import Root from "./components/Root";
import image from "@frontity/html2react/processors/image";
import link from "@frontity/html2react/processors/link";
import menuHandler from "./components/handlers/menu-handler";
import globalOptionsHandler from "./components/handlers/global-options-handler";
import paragraph from "./processors/paragraph";
import servicesHandler from "./components/handlers/services-handler";
import projectsHandler from "./components/handlers/projects-handler";

export default {
  name: "brutal-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      menuUrl: "all_pages",
      postType: 'servicios',
      globalOptions: 'acf-brutal-settings',
      services: 'servicios',
      projects: 'proyectos',
      windowScroll: 0
    },
  },
  actions: {
    theme: {
      beforeSSR: async ( { state, actions } ) =>
      {
        await actions.source.fetch( `/menu/${ state.theme.menuUrl }/` )
        await actions.source.fetch( `/globalOptions/${ state.theme.globalOptions }/` )
        await actions.source.fetch( `/categories/${ state.theme.services }/` )
        await actions.source.fetch( `/projectsData/${ state.theme.projects }/` )
      },
      setWindowScroll: ( {state}) => ( number ) => {
        state.theme.windowScroll = number;
        // console.log("get window scrol", number, state.theme.windowScroll)
      },
      getWindowScroll: ({ state }) => {
        // console.log("get window scrol", state.theme.windowScroll)
        return state.theme.windowScroll
      }

    //   actions: {
    //     theme: {
    //         setMenu: ({ state }) => value => {
    //             if (value === "open")
    //                 state.theme.isMenuOpen = true;
    //             else if (value === "closed")
    //                 state.theme.isMenuOpen = false;
    //         },
    //     }
    // }
      
    }
  },
  libraries: {
    html2react: {
      processors: [ image, link, paragraph ]
    },
    source: {
      handlers: [ menuHandler, globalOptionsHandler, servicesHandler, projectsHandler ]
    }
  }
};
