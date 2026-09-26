import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
const origin = process.env.TEST_BASE_URL || 'http://127.0.0.1:4174';
let server;
before(async()=>{
 if(!process.env.TEST_BASE_URL){server=spawn(process.execPath,['node_modules/next/dist/bin/next','start','--hostname','127.0.0.1','--port','4174'],{stdio:'inherit'});}
 for(let i=0;i<100;i++){try {if((await fetch(origin,{signal:AbortSignal.timeout(2000)})).ok)return;}catch{}await new Promise(r=>setTimeout(r,200));}
 throw new Error('Production server did not become ready');
});
after(()=>server?.kill());
const routes=['/','/work','/work/sl6dl7','/about','/expertise/creative-direction','/expertise/social-media-strategy','/project-monet','/contact'];
const pages=new Map();
test('all public routes render unique metadata, one H1, canonical and valid structured data',async()=>{
 const titles=new Set(),descriptions=new Set();
 for(const route of routes){const response=await fetch(origin+route);assert.equal(response.status,200,route);const html=await response.text();pages.set(route,html);
 assert.equal((html.match(/<h1[ >]/g)||[]).length,1,route);
 const title=html.match(/<title>(.*?)<\/title>/s)?.[1];assert.ok(title);assert.ok(!titles.has(title));titles.add(title);
 const description=html.match(/<meta name="description" content="([^"]+)"/)?.[1];assert.ok(description);assert.ok(!descriptions.has(description));descriptions.add(description);
 assert.ok(html.includes(`rel="canonical" href="https://mayankharsh.space${route==='/'?'':route}"`),route+' canonical');
 assert.ok(html.includes('property="og:title"'));assert.ok(html.includes('name="twitter:card"'));
 const schemas=[...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)];assert.ok(schemas.length);for(const schema of schemas)assert.ok(JSON.parse(schema[1]));
 assert.equal(response.headers.get('x-content-type-options'),'nosniff');assert.equal(response.headers.get('x-powered-by'),null);assert.ok(response.headers.get('content-security-policy').includes("object-src 'none'"));
 }
});
test('hero keeps locked copy, exact background, controls and accessible rail',async()=>{
 const html=await(await fetch(origin)).text();
 assert.match(html,/I Don(?:&#x27;|&apos;|')t Follow Trends/);assert.match(html,/I Create Them\./);
 assert.match(html,/hf_20260808_064556_051587f1-74a1-4336-8c05-4dde3594ed05.mp4/);
 for(const token of ['class="background"','playsInline','poster="/media/hero-poster.jpg"','aria-controls="tablet-navigation"','Selected creator work, scroll horizontally','Next work','Pause background motion'])assert.ok(html.includes(token),token);
 assert.ok(html.includes('inert=""'));assert.ok(html.includes('id="selected-work"'));
});
test('internal destinations and first-party media resolve',async()=>{
 const urls=new Set();for(const route of routes){const html=pages.get(route)||await(await fetch(origin+route)).text();for(const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)(?:[?#][^"]*)?"/g)){if(!match[1].startsWith('/_next/'))urls.add(match[1]);}}
 for(const url of urls){const r=await fetch(origin+url);assert.ok(r.ok,url+' '+r.status);}
});
test('sitemap, robots, manifest, social image and actual 404 work',async()=>{
 const sitemap=await(await fetch(origin+'/sitemap.xml')).text();for(const route of routes)assert.ok(sitemap.includes('https://mayankharsh.space'+route));
 assert.match(await(await fetch(origin+'/robots.txt')).text(),/Sitemap: https:\/\/mayankharsh.space\/sitemap.xml/);
 assert.equal((await(await fetch(origin+'/site.webmanifest')).json()).name,'Mayank Harsh — Creative Portfolio');
 const og=await fetch(origin+'/opengraph-image');assert.equal(og.status,200);assert.match(og.headers.get('content-type'),/image\/png/);
 const missing=await fetch(origin+'/this-page-does-not-exist');assert.equal(missing.status,404);assert.match(await missing.text(),/Mayank Harsh/);
});
