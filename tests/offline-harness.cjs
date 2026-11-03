// Development-only disconnected package simulation. This does NOT test file:// or Windows.
const fs=require('node:fs'),path=require('node:path');
const ORIGIN='http://rainy-offline.test',PREFIX='/课堂 资料/雨山 冒险/';
exports.url=ORIGIN+encodeURI(PREFIX)+'index.html';
exports.install=async(context,folder)=>{
 const root=path.resolve(folder);let count=0;
 await context.route('**/*',async route=>{
  const url=new URL(route.request().url()),decoded=decodeURIComponent(url.pathname);
  if(url.origin!==ORIGIN||!decoded.startsWith(PREFIX))throw new Error('Unexpected simulated offline URL: '+url.href);
  const file=path.resolve(root,decoded.slice(PREFIX.length));
  if(!file.startsWith(root+path.sep)||!fs.existsSync(file)||!fs.statSync(file).isFile())throw new Error('Missing/invalid bundled asset: '+file);
  const type={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.png':'image/png'}[path.extname(file)]||'application/octet-stream';
  count++;await route.fulfill({status:200,body:fs.readFileSync(file),contentType:type});
 });
 return ()=>count;
};
