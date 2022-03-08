import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget as react } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'zmrevogrid',
  globalScript: './src/global/global.ts',
  plugins: [
    sass({
      injectGlobalPaths: ['src/global/_colors.scss', 'src/global/_icons.scss', 'src/global/_mixins.scss', 'src/global/_buttons.scss'],
    }),
  ],
  outputTargets: [
    react({
      componentCorePackage: 'zmrevogrid',
      proxiesFile: '../zmrevogrid-react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      copy: [{ src: 'utilsExternal' }],
      serviceWorker: null, // disable service workers
    },
  ],
};
