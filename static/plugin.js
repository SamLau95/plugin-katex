/* globals: katex, renderMathInElement */

require(['gitbook'], function(gitbook) {
  var elCLass = '.page-inner'
  var katexOpts = {
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
