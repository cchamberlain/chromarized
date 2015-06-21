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
  div: c.base02,
  section: c.base02,
  article: c.base02,
  button: c.base02,
  a: c.base02,
  ul: c.base02,
  li: c.base02
};

var fgRecolor = {
  html: c.base0,
  body: c.base0,
  div: c.base0,
  span: c.base1,
  header: c.base1,
  h1: c.base1,
  h2: c.base1,
  h3: c.base1,
  h4: c.base1,
  h5: c.base1,
  h6: c.base1,
  a: c.base2,
  button: c.base2,
  input: c.base2,
  ul: c.base2,
  li: c.base2,
  cite: c.violet
};

borderRecolor = {
  div: c.blue,
  input: c.blue,
  button: c.blue,
  img: c.cyan,
  a: c.cyan
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

function color(node) {
  if(node.style) {
    bg = bgRecolor[node.localName];
    fg = fgRecolor[node.localName];
    border = borderRecolor[node.localName];
    if(bg) {
      node.style.backgroundColor = bg;
    }
    if(fg) {
      node.style.color = fg;
    }
    if(border && node.style.borderColor) {
      node.style.borderColor=border;
    }
  }
}

walk(document.documentElement);
