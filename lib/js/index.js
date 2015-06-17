//var allcolors = require('./allcolors');
//console.dir(allcolors());

var _ = require('lodash');

var rgbMap = {
  "base03": {"r": 0, "g": 43, "b": 54},
  "base02": {"r": 7, "g": 54, "b": 66},
  "base01": {"r": 88, "g": 110, "b": 117},
  "base00": {"r": 101, "g": 123, "b": 131},
  "base0": {"r": 131, "g": 148, "b": 150},
  "base1": {"r": 147, "g": 161, "b": 161},
  "base2": {"r": 238, "g": 232, "b": 213},
  "base3": {"r": 253, "g": 246, "b": 227},
  "yellow": {"r": 181, "g": 137, "b": 0},
  "orange": {"r": 203, "g": 75, "b": 22},
  "red": {"r": 220, "g": 50, "b": 47},
  "magenta": {"r": 211, "g": 54, "b": 130},
  "violet": {"r": 108, "g": 113, "b": 196},
  "blue": {"r": 38, "g": 139, "b": 210},
  "cyan": {"r": 42, "g": 161, "b": 152},
  "green": {"r": 133, "g": 153, "b": 0}
};

rgbRaw = _.template('rgb(<%=r%>,<%=g%>,<%=b%>)');
var rgbValues=[
  rgbRaw(rgbMap.base03),
  rgbRaw(rgbMap.base02),
  rgbRaw(rgbMap.base01),
  rgbRaw(rgbMap.base00),
  rgbRaw(rgbMap.base0),
  rgbRaw(rgbMap.base1),
  rgbRaw(rgbMap.base2),
  rgbRaw(rgbMap.base3),
  rgbRaw(rgbMap.yellow),
  rgbRaw(rgbMap.orange),
  rgbRaw(rgbMap.red),
  rgbRaw(rgbMap.magenta),
  rgbRaw(rgbMap.violet),
  rgbRaw(rgbMap.blue),
  rgbRaw(rgbMap.cyan),
  rgbRaw(rgbMap.green)
];


var colorClasses = {
  "base03": "#002b36 !important",
  "base02": "#073642 !important",
  "base01": "#586e75 !important",
  "base00": "#657b83 !important",
  "base0": "#839496 !important",
  "base1": "#93a1a1 !important",
  "base2": "#eee8d5 !important",
  "base3": "#fdf6e3 !important",
  "yellow": "#b58900 !important",
  "orange": "#cb4b16 !important",
  "red": "#dc322f !important",
  "magenta": "#d33682 !important",
  "violet": "#6c71c4 !important",
  "blue": "#268bd2 !important",
  "cyan": "#2aa198 !important",
  "green": "#859900 !important"
};
var colorValues = _.invert(colorClasses);

darks = [
  colorClasses.base03,
  colorClasses.base02,
  colorClasses.base01,
  colorClasses.base00
];

lights = [
  colorClasses.base3,
  colorClasses.base2,
  colorClasses.base1,
  colorClasses.base0
];

brights = [
  colorClasses.yellow,
  colorClasses.orange,
  colorClasses.red,
  colorClasses.magenta,
  colorClasses.violet,
  colorClasses.blue,
  colorClasses.cyan,
  colorClasses.green
];

var domBorderColors = {};
var domOtherColors = {};

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbRaw2rgb(rgbRaw) {
  var rgbArray = rgbRaw.replace(/\s/g, "").match(/\d+,\d+,\d+/)[0].split(",").map(function (num) {
    return parseInt(num, 10);
  });
  return {
    "r": rgbArray[0],
    "g": rgbArray[1],
    "b": rgbArray[2]
  };
}

function rgb2rgbRaw(rgb) {
  return "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")";
}

function rgb2hex(rgb) {
  rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
  function hex(x) {
    return ("0" + parseInt(x).toString(16)).slice(-2);
  }

  return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

var r, g, b;
var props = {
  "background-color": "backgroundColor",
  "color": "color",
  "border-top-color": "borderTopColor",
  "border-right-color": "borderRightColor",
  "border-bottom-color": "borderLeftColor",
  "border-left-color": "borderLeftColor"
};
var styleTargets = Object.keys(props);
console.dir(styleTargets);
var propValues = _.values(props);
var nodes = document.querySelectorAll("*");
for(var i = 0; i < nodes.length; i++) {
  styleTargets.forEach(function (styleTarget) {
    //var hexColor = node.style[prop];
    //console.dir(node.style);
    //console.log(prop);

    var cs = global.getComputedStyle(nodes[i], null);
    var rgbRaw = cs.getPropertyValue(styleTarget);
    //console.log(rgbRaw);

    if (!rgbRaw || rgbValues.indexOf(rgbRaw) != -1) return;


    //var rgb = rgbRaw2rgb(rgbRaw);
    //if(rgbMap)
    //console.dir(rgb);


    /*
     var rgbArray = color.replace(/\s/g, "").match(/\d+,\d+,\d+/)[0].split(",").map(function (num) {
     return parseInt(num, 10);
     });
     var hexValue = '#' + componentToHex(rgbArray[0]) + componentToHex(rgbArray[1]) + componentToHex(rgbArray[2]);

     if (!hexColor || colorValues[hexValue]) return;
     */

    // border exists
    if (styleTarget.indexOf("border") != -1) {// && cs.getPropertyValue(prop.replace("color", "width")) !== "0px") {
      nodes[i].style[styleTarget] = rgbRaw[0];// rgb2rgbRaw(darks[i % darks.length]);
      //domBorderColors[hexValue] = true;
    } else {
      nodes[i].style[styleTarget] = rgbRaw[11];// rgb2rgbRaw(brights[i % brights.length]);
      //domOtherColors[hexValue] = tru;
    }
    //console.dir(node);
  });
}

console.log('-' + i + ' replacements-');
console.log('-border-');
console.dir(domBorderColors);
console.log('-other-');
console.dir(domOtherColors);

