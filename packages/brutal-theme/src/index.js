import Root from "./components/Root";
import image from "@frontity/html2react/processors/image";
import link from "@frontity/html2react/processors/link";
import menuHandler from "./components/handlers/menu-handler";
import globalOptionsHandler from "./components/handlers/global-options-handler";
import paragraph from "./processors/paragraph";

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
      services: 'servicios'
    }
  },
  actions: {
    theme: {
      beforeSSR: async ( { state, actions } ) =>
      {
        await actions.source.fetch( `/menu/${ state.theme.menuUrl }/` )
        await actions.source.fetch( `/globalOptions/${ state.theme.globalOptions }/` )
      }
    }
  },
  libraries: {
    html2react: {
      processors: [ image, link, paragraph ]
    },
    source: {
      handlers: [ menuHandler, globalOptionsHandler ]
    }
  }
};
