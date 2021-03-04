const settings = {
  name: "frontity-in-atlas",
  state: {
    frontity: {
      url: "https://wpengine.frontity.org/",
      title: "Frontity in WP Engine",
      description: "Frontity running in WP Engine, both WP and Node",
    },
  },
  packages: [
    {
      name: "@frontity/twentytwenty-theme",
      state: {
        theme: {
          colors: {
            primary: "#007cba",
            bodyBg: "#d9eafa",
          },
          menu: [
            ["Home", "/"],
            ["Nihil", "/category/nihil/"],
            ["Delectus eius", "/category/delectus-eius/"],
            ["Neque", "/tag/neque/"],
            ["Ipsam expedita", "/ipsam-expedita-ut-et/"],
          ],
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
