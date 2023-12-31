import * as fs from 'node:fs'

const html = fs.readFileSync('./docs-html/classes/Foo.html', 'utf-8')
const md = fs.readFileSync('./docs-md/classes/Foo.md', 'utf-8')

console.log('In html Foo.bar is marked as Static', html.includes('Static'))
console.log('In md Foo.bar is marked as Static', md.includes('Static'))
