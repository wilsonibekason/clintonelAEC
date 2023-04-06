const settings = {
  name: "aec",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "aec-theme",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://advancedengineeringcentre.com",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
