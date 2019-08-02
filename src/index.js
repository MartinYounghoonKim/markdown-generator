import fs from 'fs';
import path from 'path';

var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt({
      html: false,
    });

fs.readFile(path.resolve(__dirname, './mocks/TEST.md'), 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }
  var result = md.render(data);
  console.log(result);
});
