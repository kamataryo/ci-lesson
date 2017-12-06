const obj = require('./index.js')

if (obj.hello === 'ci') {
  process.stdout.write('OK!')
} else {
  process.stderr.write('NG!')
}
