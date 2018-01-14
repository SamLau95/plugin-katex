var katex = require('katex')

function process(blk, isInline) {
  console.log(blk, isInline)
  var tex = blk.body
  var output = ''

  try {
    output = katex.renderToString(tex, {
      displayMode: !isInline,
    })
  } catch (e) {
    console.error(e)
    output = String(e)
  }

  return output
}

module.exports = {
  book: {
    assets: './static',
    css: ['katex.min.css'],
  },
  ebook: {
    assets: './static',
    css: ['katex.min.css'],
  },
  blocks: {
    math: {
      shortcuts: {
        parsers: ['markdown', 'asciidoc', 'restructuredtext'],
        start: '$$',
        end: '$$',
      },
      process: function(blk) {
        return process(blk, false)
      },
    },
    math_inline: {
      shortcuts: {
        parsers: ['markdown', 'asciidoc', 'restructuredtext'],
        start: '$',
        end: '$',
      },
      process: function(blk) {
        return process(blk, true)
      },
    },
  },
}
