const settings = {
  "name": "brutal-front",
  "state": {
    "frontity": {
<<<<<<< HEAD
      "url": "http://test.frontity.org/",
      "title": "Brutal",
=======
      "url": "https://test.frontity.org",
      "title": "Test Frontity Blog",
>>>>>>> d019bc8a9d78368bf61fd8fe6db1855ed9966214
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
<<<<<<< HEAD
      "name": "brutal-theme"
=======
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Nature",
              "/category/nature/"
            ],
            [
              "Travel",
              "/category/travel/"
            ],
            [
              "Japan",
              "/tag/japan/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
>>>>>>> d019bc8a9d78368bf61fd8fe6db1855ed9966214
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
<<<<<<< HEAD
          "url": "http://15.237.115.140",
          "postTypes": [
            {
              type: "proyectos",
              endpoint: "proyectos",
              archive: "/proyectos"
            },
          ],
          "homepage": "home",
=======
          "url": "https://test.frontity.org"
>>>>>>> d019bc8a9d78368bf61fd8fe6db1855ed9966214
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
