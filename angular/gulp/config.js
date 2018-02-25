export default {

  browserPort: 3000,
  UIPort: 3001,

  sourceDir: './app/',
  buildDir: '../dist/',

  styles: {
    src: 'app/assets/styles/*.scss',
    dest: '../dist/styles',
    prodSourcemap: false,
    sassIncludePaths: []
  },

  scripts: {
    src: 'app/scripts/**/*.js',
    dest: '../dist/scripts'
  },

  images: {
    src: 'app/assets/images/catalog/**/*',
    dest: '../dist/images'
  },

  fonts: {
    src: ['app/fonts/**/*'],
    dest: '../dist/fonts'
  },

  assetExtensions: [
    'js',
    'css',
    'png',
    'jpe?g',
    'gif',
    'svg',
    'eot',
    'otf',
    'ttc',
    'ttf',
    'woff2?',
    'json'
  ],

  views: {
    index: 'app/*.html',
    src: [
      'app/views/*.html',
      'app/views/**/**/*.html',
      'app/views/**/**/**/*.html',
      'app/views/**/**/**/**/*.html'
    ],
    dest: 'app/scripts'
  },

  gzip: {
    src: '../dist/*',
    dest: '../',
    fileName: 'dist.zip'
  },

  browserify: {
    bundleName: 'main.js',
    prodSourcemap: false
  },

  test: {
    karma: 'test/karma.conf.js',
    protractor: 'test/protractor.conf.js'
  },

  init: function() {
    this.views.watch = [
      this.views.index,
      this.views.src
    ];

    return this;
  }

}.init();
