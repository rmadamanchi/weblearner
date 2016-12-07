module.exports = function (source) {
  'use strict';
  this.cacheable();

  var regex = /\/\/\s*fragment:.*\s*\/\/[\r\n|\n|\r]/g;

  var matches = [];
  var match;
  while ((match = regex.exec(source)) != null) {
    matches.push(match);
  }

  if (matches.length == 0) {
    return source;
  }

  var fragments = [];
  for (var i = 0; i < matches.length; i++) {
    match = matches[i][0];

    var type;
    if (match.indexOf("es5") > 0) {
      type = 'ES5';
    } else if (match.indexOf("es6") > 0) {
      type = 'ES6';
    } else if (match.indexOf("es7") > 0) {
      type = 'ES7';
    } else if (match.indexOf("ts") > 0) {
      type = 'TypeScript';
    } else if (match.indexOf("text") > 0) {
      type = 'text';
    }

    var startIndex = matches[i].index + matches[i][0].length;
    var value = (i == matches.length - 1) ? source.substring(startIndex) : source.substring(startIndex, matches[i + 1].index);

    if (type == 'text') {
      value = value.replace(/"/g, "");
    }
    fragments.push({type: type, value: value});
  }


  //console.log(fragments);

  return "module.exports = " + JSON.stringify(fragments);
};