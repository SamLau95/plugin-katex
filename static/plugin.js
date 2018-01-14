/* globals: katex, renderMathInElement */

require(['gitbook'], function(gitbook) {
  var elCLass = '.page-inner'
  var katexOpts = {
    macros: {
      "\\begin{align*}": "\\begin{aligned}",
      "\\end{align*}": "\\end{aligned}",
    },
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '\\[', right: '\\]', display: true },
      { left: '$', right: '$', display: false },
      { left: '\\(', right: '\\)', display: false },
    ],
  }

  gitbook.events.bind('page.change', function() {
    console.log('Rendering math...')
    renderMathInElement(document.querySelector('.page-inner'), katexOpts)
  })
})
