const { defineConfig } = require("cypress");
const { configurePlugin } = require("cypress-mongodb");

module.exports = defineConfig({
  viewportWidth: 1400,
  viewportHeight: 660,

  env: {
    mongodb: {
      uri: `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.3bylqjg.mongodb.net/store?retryWrites=true&w=majority`,
      database: process.env.MONGODB_CLUSTERNAME,

      collection: "products",
    },
  },

  e2e: {
    baseUrl: "http://localhost:3000/",
    setupNodeEvents(on, config) {
      configurePlugin(on);
    },
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
