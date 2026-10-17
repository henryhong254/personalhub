import fs from 'node:fs';
import path from 'node:path';
const root=path.resolve('dist');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
const failures=[];
for(const match of html.matchAll(/\b(?:src|href)="([^"]+)"/g)){
 const value=match[1].split('?')[0];
 if(value.startsWith('#')){if(!ids.has(value.slice(1))) failures.push('Missing anchor '+value)}
 else if(!/^(https?:|data:)/.test(value)&&!fs.existsSync(path.join(root,value)))failures.push('Missing asset '+value);
}
const buttons=[...html.matchAll(/<button\b([^>]*)>/g)].filter(m=>m[1].includes('data-destination'));
if(buttons.length!==3||buttons.some(m=>!m[1].includes('disabled')))failures.push('Destination buttons must remain disabled');
if(/marketing\s*4\s*founders/i.test(html))failures.push('Excluded brand found');
if(failures.length){console.error(failures.join('\n'));process.exit(1)}
console.log('PASS: local assets, section anchors, 3 disabled destination buttons, excluded brand absent.');
