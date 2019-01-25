exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^node_modules/,
      'app.js': /^app/
    },
  },
  stylesheets: {
    joinTo: {
      'vendor.css': /^node_modules/,
      'app.css': /^app/
    }
  }
};

exports.plugins = {
  autoReload: {
    enabled: {
      css: true,
      js: true,
      assets: true
    }
  },
  copyfilemon:{
    'themes/default': ['node_modules/fomantic-ui-css/themes/default']
  }
};

if (process.env.NODE_ENV === 'production') {
  exports.npm = {
    styles: {
      'fomantic-ui-css': ['semantic.min.css']
    },
  }
} else {
  exports.npm = {
    styles: {
      'fomantic-ui-css': ['semantic.css']
    },
  }
}

exports.npm.globals = {
  '$': 'jquery',
  'jQuery': 'jquery'
}

exports.modules = {
  nameCleaner: path => path.replace(/^app\//, ''),
  autoRequire: {
    'app.js': ['app']
  }
}
