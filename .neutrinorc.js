module.exports = {
    use: [
      "neutrino-preset-eslint-google",
      "neutrino-preset-stylelint-standard",
      ["neutrino-preset-web", {
        html: {
          title: "A História da _rte"
        }
      }],
      "neutrino-preset-cssnext",
      "neutrino-preset-vue"
    ]
};
