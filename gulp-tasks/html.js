/**
 * @license
 * Copyright (c) 2016 The GDG Spain Authors. All rights reserved.
 * This code may only be used under the MIT style license found at http://gdg.es/LICENSE.txt
 */

'use strict';

const htmlmin = require('gulp-htmlmin');

function minify() {
  return htmlmin({
    collapseWhitespace: true
  });
}

module.exports = {
  minify: minify
};
