var Dom={
  id:{},
  byID(id) {
    if (typeof id==='object') [id]=id;
    if (!Dom.id[id]) Dom.id[id]=document.getElementById(id);
    return Dom.id[id];
  },
  sel:{},
  bySel(selector) {
    if (typeof selector==='object') [selector]=selector;
    if (!Dom.sel[selector]) Dom.sel[selector]=document.querySelector(selector);
    return Dom.sel[selector];
  }
};
