function addClass(el, className) {
  el.classList.add(className);
}

function removeClass(el, className) {
  el.classList.remove(className);
}

function getElementTop(el) {
  var top = el.offsetTop;
  var parent = el.offsetParent;
  while (true) {
    top += parent.offsetTop;
    parent = parent.offsetParent;
    if (parent === null) return top;
  }
}
