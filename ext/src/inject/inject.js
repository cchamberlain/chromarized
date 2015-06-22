(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var c = {
  "base03": "#002b36",
  "base02": "#073642",
  "base01": "#586e75",
  "base00": "#657b83",
  "base0": "#839496",
  "base1": "#93a1a1",
  "base2": "#eee8d5",
  "base3": "#fdf6e3",
  "yellow": "#b58900",
  "orange": "#cb4b16",
  "red": "#dc322f",
  "magenta": "#d33682",
  "violet": "#6c71c4",
  "blue": "#268bd2",
  "cyan": "#2aa198",
  "green": "#859900"
};

var bgRecolor = {
  html: c.base03,
  body: c.base03,
  main: c.base03,
  header: c.base03,
  footer: c.base03,
  div: c.base02,
  table: c.base02,
  tbody: c.base02,
  thead: c.base02,
  th: c.base02,
  tr: c.base02,
  td: c.base02,
  section: c.base02,
  article: c.base02,
  button: c.base02,
  input: c.base02,
  textarea: c.base02,
  a: c.base02,
  ul: c.base02,
  li: c.base02,
  p: c.base02,
  blockquote: c.base02,
  pre: c.base02,
  code: c.base02
};

var fgRecolor = {
  html: c.base0,
  body: c.base0,
  main: c.base0,
  div: c.base0,
  table: c.base0,
  thead: c.base0,
  tbody: c.base0,
  th: c.base0,
  tr: c.base0,
  td: c.base0,
  header: c.base1,
  footer: c.base1,
  h1: c.base1,
  h2: c.base1,
  h3: c.base1,
  h4: c.base1,
  h5: c.base1,
  h6: c.base1,
  a: c.base2,
  button: c.base2,
  input: c.base2,
  textarea: c.base2,
  ul: c.base2,
  li: c.base2,
  p: c.base2,
  cite: c.violet,
  span: c.base2,
  blockquote: c.base3,
  pre: c.base3,
  code: c.base3
};

var borderRecolor = {
  div: c.blue,
  table: c.blue,
  tr: c.blue,
  td: c.blue,
  input: c.blue,
  button: c.blue,
  img: c.violet,
  a: c.violet,
  blockquote: c.yellow,
  pre: c.yellow,
  code: c.yellow
};

function walk(node) {
  color(node);
  for (var i = 0; i < node.children.length; i++) {
    var childNode = node.children[i];
    walk(childNode);
  }
}

var bg = null;
var fg = null;
var border = null;
var style = null;

function color(node) {
  if(node.style) {
    style = window.getComputedStyle(node);
    bg = bgRecolor[node.localName];
    fg = fgRecolor[node.localName];
    border = borderRecolor[node.localName];
    if(bg && style.backgroundColor) {
      node.style.backgroundColor = bg;
    }
    if(bg && style.backgroundRepeat) {
      node.style.backgroundImage = 'none';
    }
    if(fg) {
      node.style.color = fg;
    }
    if(border) {
      /*
      if(style.borderColor) {
        node.style.borderColor=border;
      }
      */
      if(style.borderTopColor) {
        node.style.borderTopColor=border;
      }
      if(style.borderBottomColor) {
        node.style.borderBottomColor=border;
      }
      if(style.borderLeftColor) {
        node.style.borderLeftColor=border;
      }
      if(style.borderRightColor) {
        node.style.borderRightColor=border;
      }
    }
  }
}

walk(document.documentElement);

},{}]},{},[1]);
