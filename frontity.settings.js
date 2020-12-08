const settings = {
  name: "wpengine",
  state: {
    frontity: {
      url: "https://frontityengine.wpengine.com/",
      title: "Frontity in WP Engine",
      description: "Frontity running in WP Engine, both WP and Node",
    },
  },
  packages: [
    {
      name: "@frontity/twentytwenty-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["Nature", "/category/nature/"],
            ["Travel", "/category/travel/"],
            ["Japan", "/tag/japan/"],
            ["About Us", "/about-us/"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
          autoPrefetch: "hover",
        },
      },
    },
    "@frontity/wp-source",
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
