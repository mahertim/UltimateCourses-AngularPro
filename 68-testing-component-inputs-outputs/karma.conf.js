module.exports = function(config) {
  config.set({
    basePath: '',
    exclude: [],
    preprocessors: {
      '**/*.spec.ts': ['typescript', 'webpack'],
      '**/*.ts': ['typescript'],
      '/**/*.scss': ['scss'],
      './tests/*.js': ['webpack'],
    },
    scssPreprocessor: {
      options: {
        sourceMap: true,
        includePaths: ['bower_components'],
      },
    },
    typescriptPreprocessor: {
      // options passed to the typescript compiler
      options: {
        sourceMap: true, // (optional) Generates corresponding .map file.
        target: 'ES5', // (optional) Specify ECMAScript target version: 'ES3' (default), or 'ES5'
        module: 'umd', // (optional) Specify module code generation: 'commonjs' or 'amd'
        noImplicitAny: true, // (optional) Warn on expressions and declarations with an implied 'any' type.
        noResolve: false, // (optional) Skip resolution and preprocessing.
        removeComments: true, // (optional) Do not emit comments to output.
        concatenateOutput: false, // (optional) Concatenate and emit output to single file. By default true if module option is omitted, otherwise false.
      },
      // transforming the filenames
      transformPath: function(path) {
        return path.replace(/\.ts$/, '.js');
      },
    },

    //files/patterns to load in the browser
    files: [
      { pattern: 'node_modules/reflect-metadata/Reflect.js', watched: false },
      { pattern: 'node_modules/zone.js/dist/zone.js', watched: false },
      { pattern: 'node_modules/zone.js/dist/proxy.js', watched: false },
      { pattern: 'node_modules/zone.js/dist/sync-test.js', watched: false },
      { pattern: 'node_modules/zone.js/dist/async-test.js', watched: false },
      { pattern: 'node_modules/zone.js/dist/jasmine-patch.js', watched: false },
      {
        pattern: 'node_modules/zone.js/dist/long-stack-trace-zone.js',
        watched: false,
      },
      __dirname + '/**/*.spec.ts',
    ],
    autoWatch: true,
    singleRun: false,
    failOnEmptyTestSuite: true,

    // reduce the kind of information passed to the bash
    // options in ascending order
    // config.LOG_DISABLE
    // config.LOG_ERROR
    // config.LOG_WARN
    // config.LOG_INFO
    // config.LOG_DEBUG
    logLevel: config.LOG_ERROR,

    frameworks: ['jasmine'],
    browsers: ['Chrome', 'Firefox' /*,'Safari'*/],
    reporters: ['mocha', 'kjhtml'],
    //address that the server will listen on, '0.0.0.0' is default
    listenAddress: '0.0.0.0',
    //hostname to be used when capturing browsers, 'localhost' is default
    hostname: 'localhost',
    //the port where the web server will be listening, 9876 is default
    port: 9876,
    //when a browser crashes, karma will try to relaunch, 2 is default
    retryLimit: 0,
    //how long does Karma wait for a browser to reconnect, 2000 is default
    browserDisconnectTimeout: 5000,
    //how long will Karma wait for a message from a browser before disconnecting from it, 10000 is default
    browserNoActivityTimeout: 10000,
    //timeout for capturing a browser, 60000 is default
    captureTimeout: 60000,
    client: {
      //capture all console output and pipe it to the terminal, true is default
      captureConsole: true,
      //if true, Karma clears the context window upon the completion of running the tests, true is default
      clearContext: true,
      //run the tests on the same window as the client, without using iframe or a new window, false is default
      runInParent: false,
      //true: runs the tests inside an iFrame; false: runs the tests in a new window, true is default
      useIframe: true,
      jasmine: {
        //tells jasmine to run specs in semi random order, false is default
        random: true,
      },
    },

    /* karma-webpack config
       pass your webpack configuration for karma
       add `babel-loader` to the webpack configuration to make 
       the ES6+ code in the test files readable to the browser  
       eg. import, export keywords */
    webpack: {
      mode: 'development',
      resolve: {
        extensions: ['.js', '.ts', '.html', '.css'],
      },
      module: {
        rules: [
          {
            test: /\.html$/,
            use: [{ loader: 'raw-loader' }, { loader: 'html-loader' }],
          },
          {
            test: /\.scss$/,
            use: [
              // { loader: 'exports-loader?module.exports.toString()' },
              { loader: 'style-loader' },
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                },
              },
              { loader: 'sass-loader' },
            ],
          },
          {
            test: /\.ts$/,
            use: [
              { loader: 'awesome-typescript-loader' },
              { loader: 'angular2-template-loader' },
            ],
          },
          {
            test: /\.js$/,
            use: [{ loader: 'babel-loader' }],
          },
        ],
      },
    },
    webpackMiddleware: {
      //turn off webpack bash output when run the tests
      noInfo: true,
      stats: 'errors-only',
    },

    /*karma-mocha-reporter config*/
    mochaReporter: {
      output: 'noFailures', //full, autowatch, minimal
    },
  });
};
