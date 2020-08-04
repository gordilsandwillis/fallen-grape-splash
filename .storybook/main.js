const path = require('path')

module.exports = {
  // You will want to change this to wherever your Stories will live.
  stories: ["../**/*.stories.js"],
  addons: ["@storybook/addon-actions", "@storybook/addon-links"],
  // highlight-start
  webpackFinal: async config => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]

    // use installed babel-loader which is v8.0-beta (which is meant to work with @babel/core@7)
    config.module.rules[0].use[0].loader = require.resolve("babel-loader")

    // use @babel/preset-react for JSX and env (instead of staged presets)
    config.module.rules[0].use[0].options.presets = [
      require.resolve("@babel/preset-react"),
      require.resolve("@babel/preset-env"),
    ]

    config.module.rules[0].use[0].options.plugins = [
      // use @babel/plugin-proposal-class-properties for class arrow functions
      require.resolve("@babel/plugin-proposal-class-properties"),
      // use babel-plugin-remove-graphql-queries to remove static queries from components when rendering in storybook
      require.resolve("babel-plugin-remove-graphql-queries"),
      // error resolving
      require.resolve("@babel/plugin-proposal-optional-chaining"),
    ]

    // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
    config.resolve.mainFields = ["browser", "module", "main"]

    // Remove the default file-loader rule
    const rules = config.module.rules.filter(rule => {
      return !rule.loader || (rule.loader && rule.loader.indexOf('file-loader') === -1)
    })

    // add a new file-loader rule, omitting svg
    rules.push({
      test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
      loader: require.resolve('file-loader'),
      query: {
        name: 'static/media/[name].[hash:8].[ext]',
      },
    })

    // add our svg loader
    rules.push({
      test: /\.svg$/,
      use: 'react-svg-loader'
    })

    config.module.rules = rules

    // This updates the module resolver to deal with relative paths
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve('./'),
    ]

    return config
  },
  // highlight-end
}
