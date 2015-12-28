/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

var TmodJS = require('tmodjs'),
    path = require('path');

module.exports = function(content, file, conf){

    var base = path.resolve(conf.base || './');
    var tmod = new TmodJS(base, conf);
    tmod.compile();
    return false;
};
