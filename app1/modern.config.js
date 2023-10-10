import { appTools, defineConfig } from '@modern-js/app-tools';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  server: {
    port: 3001,
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
          name: 'app1',
          remotes: {
            app2: 'app2@http://localhost:3002/static/js/remoteEntry.js',
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
