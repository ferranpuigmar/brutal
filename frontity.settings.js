const settings = {
  name: "brutal-front",
  state: {
    frontity: {
      url: "http://test.frontity.org/",
      title: "Brutal",
      description: "WordPress installation for Frontity development"
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
          url: "http://15.237.115.140",
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
    "@aamodtgroup/frontity-contact-form-7"
  ]
};

export default settings;
