const settings = {
  name: "brutal-front",
  state: {
    frontity: {
      url: "http://esmuybrutal.com/",
      title: "Es Muy Brutal"
    }
  },
  packages: [
    {
      name: "brutal-theme"
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://puigmar.me/back",
          postTypes: [
            {
              type: "proyectos",
              endpoint: "proyectos",
              archive: "/proyectos"
            },
          ],
          taxonomies: [
            {
              taxonomy: "servicios",
              endpoint: "servicios",
            },
          ],
          homepage: "home",
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/head-tags",
    "@aamodtgroup/frontity-contact-form-7",
    "@frontity/yoast"
  ]
};

export default settings;
