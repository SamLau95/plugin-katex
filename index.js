var katex = require('katex')

var elCLass = '.page-inner'

var renderMath = `
<script>
renderMathInElement(document.querySelector('.page-inner'), {
  delimiters: [
    {left: "$$", right: "$$", display: true},
    {left: "\\[", right: "\\]", display: true},
    {left: "$", right: "$", display: false},
    {left: "\\(", right: "\\)", display: false},
  ],
});
</script>
`

module.exports = {
  book: {
    assets: './static',
    css: ['katex.min.css'],
    js: ['katex.min.js', 'auto-render.min.js'],
  },
  ebook: {
    assets: './static',
    css: ['katex.min.css'],
    js: ['katex.min.js', 'auto-render.min.js'],
  },
  
  hooks: {
    page: function(page) {
      page.content += renderMath
      return page
    }
  }
}
