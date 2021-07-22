import Root from "./components/Root";
import image from "@frontity/html2react/processors/image";
import link from "@frontity/html2react/processors/link";
import menuHandler from "./components/handlers/menu-handler";

export default {
  name: "brutal-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      menuUrl: "all_pages",
    }
  },
  actions: {
    theme: {
      beforeSSR: async ( { state, actions } ) =>
      {
        await actions.source.fetch( `/menu/${ state.theme.menuUrl }/` )
      }
    }
  },
  libraries: {
    html2react: {
      processors: [ image, link ]
    },
    source: {
      handlers: [ menuHandler ]
    }
  }
};
