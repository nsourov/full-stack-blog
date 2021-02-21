import { override } from 'customize-cra';
import hotLoader from 'react-app-rewire-hot-loader';

const supportMjs = () => (webpackConfig) => {
  webpackConfig.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    loader: 'css-loader',
    options: {
      modules: true, // must add this
    },
    // type: 'javascript/auto',
  });
  return webpackConfig;
};

module.exports = override(

  supportMjs(),
  (config, env) => {
    return hotLoader(config, env);
  }
);
