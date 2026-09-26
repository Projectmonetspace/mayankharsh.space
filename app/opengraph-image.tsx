import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
export const alt='Mayank Harsh — Creative direction, culture and social storytelling';
export const size={width:1200,height:630};
export const contentType='image/png';
export default async function Image(){const font=await readFile(path.join(process.cwd(),'public/fonts/manrope-og.ttf'));return new ImageResponse(<div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',width:'100%',height:'100%',background:'#080909',color:'#f4f2ef',padding:70,fontFamily:'Manrope'}}><div style={{display:'flex',justifyContent:'space-between',fontSize:24}}><span>Mayank Harsh</span><span style={{color:'#aaa'}}>Art • Culture • Social</span></div><div style={{display:'flex',flexDirection:'column',fontSize:67,lineHeight:1.15,letterSpacing:-3}}><span>I Don’t Follow Trends</span><span style={{color:'#a39c96'}}>I Create Them.</span></div><div style={{display:'flex',justifyContent:'space-between',fontSize:21,borderTop:'1px solid #45413f',paddingTop:24}}><span>Creative direction & social strategy</span><span>mayankharsh.space</span></div></div>,{...size,fonts:[{name:'Manrope',data:font,weight:500}]});}
