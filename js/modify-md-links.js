window.addEventListener("zero-md-rendered", function() {
  const links = markdown.shadowRoot.querySelectorAll("a");
  links.forEach(function(elem) {
    if (elem.href.slice(-3) === '.md') {
      elem.href = elem.href.slice(0, -3);
    }
  });
});
