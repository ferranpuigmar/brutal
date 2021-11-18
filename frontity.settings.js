const settings = {
  name: "brutal-front",
  state: {
    frontity: {
      url: "https://www.esmuybrutal.com/",
      title: "Es Muy Brutal",
    },
  },
  packages: [
    {
      name: "brutal-theme",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "http://back.esmuybrutal.com/",
          postTypes: [
            {
              type: "proyectos",
              endpoint: "proyectos",
              archive: "/proyectos",
            },
          ],
          taxonomies: [
            {
              taxonomy: "servicios",
              endpoint: "servicios",
            },
          ],
          homepage: "home",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/head-tags",
    "@aamodtgroup/frontity-contact-form-7",
    "@frontity/yoast",
  ],
};

export default settings;
