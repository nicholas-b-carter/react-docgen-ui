import babelify from 'babelify';
import envify from 'envify';

const vendors = [
  'react',
  'react/lib/ReactComponentWithPureRenderMixin',
  'react-dom'
];

const jsDestFolder = 'public/assets/js';

export default {
  files: [{
    entry: './example/index.jsx',
    dest: jsDestFolder,
    options: {
      debug: true,
      basename: 'index',
      external: vendors
    }
  }, {
    entry: './example/components.jsx',
    dest: jsDestFolder,
    options: {
      debug: true,
      basename: 'components',
      external: vendors
    }
  }, {
    dest: jsDestFolder,
    options: {
      basename: 'vendor',
      require: vendors
    }
  }],
  options: {
    extensions: ['.jsx', '.js'],
    transform: [
      babelify,
      envify
    ]
  }
}
