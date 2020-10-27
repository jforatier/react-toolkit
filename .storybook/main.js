const path = require('path');

module.exports = {
  stories: [
   '../packages/action/src/*.stories.@(ts|tsx|js)',
   '../packages/alert/src/*.stories.@(ts|tsx|js)',
   '../packages/badge/src/*.stories.@(ts|tsx|js)',
   '../packages/button/src/*.stories.@(ts|tsx|js)',
   '../packages/collapse/src/*.stories.@(ts|tsx|js)',
   '../packages/core/src/*.stories.@(ts|tsx|js)',
   '../packages/Form/core/src/*.stories.@(ts|tsx|js)',
   '../packages/Form/filter/src/*.stories.@(ts|tsx|js)',
   '../packages/Form/filter-inline/src/*.stories.@(ts|tsx|js)',
   '../packages/Form/Input/card/src/*.stories.@(ts|tsx|js)',
   '../packages/Form/Input/checkbox/src/*.stories.@(ts|tsx|js)',
   '../packages/Form/Input/choice/src/*.stories.@(ts|tsx|js)',
   '../packages/Form/Input/date/src/*.stories.@(ts|tsx|js)',
   '../packages/Form/Input/date-phone/src/*.stories.@(ts|tsx|js)',
   '../packages/Form/Input/file/src/*.stories.@(ts|tsx|js)',
   '../packages/Form/Input/number/src/*.stories.@(ts|tsx|js)',
   '../packages/Form/Input/pass/src/*.stories.@(ts|tsx|js)',
   '../packages/Form/Input/radio/src/*.stories.@(ts|tsx|js)',
   '../packages/Form/Input/select/src/*.stories.@(ts|tsx|js)',
   '../packages/Form/Input/select-multi/src/*.stories.@(ts|tsx|js)',
   '../packages/Form/Input/slider/src/*.stories.@(ts|tsx|js)',
   '../packages/Form/Input/switch/src/*.stories.@(ts|tsx|js)',
   '../packages/Form/Input/text/src/*.stories.@(ts|tsx|js)',
   '../packages/Form/Input/textarea/src/*.stories.@(ts|tsx|js)',
   '../packages/Form/steps/src/*.stories.@(ts|tsx|js)',
   '../packages/Form/summary/src/*.stories.@(ts|tsx|js)',
   '../packages/help/src/*.stories.@(ts|tsx|js)',
   '../packages/highlight/src/*.stories.@(ts|tsx|js)',
   '../packages/icon/src/*.stories.@(ts|tsx|js)',
   '../packages/Layout/footer/src/*.stories.@(ts|tsx|js)',
   '../packages/Layout/footer-client/src/*.stories.@(ts|tsx|js)',
   '../packages/Layout/header/src/*.stories.@(ts|tsx|js)',
   '../packages/link/src/*.stories.@(ts|tsx|js)',
   '../packages/list/src/*.stories.@(ts|tsx|js)',
   '../packages/loader/src/*.stories.@(ts|tsx|js)',
   '../packages/Modal/boolean/src/*.stories.@(ts|tsx|js)',
   '../packages/Modal/default/src/*.stories.@(ts|tsx|js)',
   '../packages/panel/src/*.stories.@(ts|tsx|js)',
   '../packages/popover/src/*.stories.@(ts|tsx|js)',
   '../packages/restitution/src/*.stories.@(ts|tsx|js)',
   '../packages/status/src/*.stories.@(ts|tsx|js)',
   '../packages/table/src/*.stories.@(ts|tsx|js)',
   '../packages/tabs/src/*.stories.@(ts|tsx|js)',
   '../packages/title/src/*.stories.@(ts|tsx|js)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-knobs',
    'storybook-readme'
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
};