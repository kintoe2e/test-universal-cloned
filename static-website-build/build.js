const mkdirp = require('mkdirp');
const fs = require('fs');

mkdirp('./build')

let content = fs.readFileSync('web/index.html').toString();
content = content.replace('Anonymous', process.env.USERNAME || 'Nobody')

fs.writeFileSync('build/index.html', content);
