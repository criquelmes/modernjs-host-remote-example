import appTools, { defineConfig } from '@modern-js/app-tools';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  server: {
    port: 3002,
  },
  dev: {
    // set publicPath
    // assetPrefix: 'auto',
  },
  runtime: {
    router: true,
  },
  source: {
    enableAsyncEntry: true,
  },
  tools: {
    webpack: (config, { webpack, appendPlugins }) => {
      delete config.optimization.splitChunks;
      config.output.publicPath = 'auto';

      appendPlugins([
        new webpack.container.ModuleFederationPlugin({
          name: 'app2',
          library: { type: 'window', name: 'app2' },
          runtime: false,
          filename: 'static/js/remoteEntry.js',
          exposes: {
            './Button': './src/components/Button.js',
          },
          shared: {
            react: { singleton: true },
            'react-dom': { singleton: true },
          },
        }),
      ]);
    },
  },
  plugins: [appTools()],
});
