'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { work } from '@/lib/work';
import { Arrow } from './icons';
export function WorkRail(){
 const rail=useRef<HTMLDivElement>(null);const [paused,setPaused]=useState(false);const busy=useRef(false);const until=useRef(0);
 useEffect(()=>{const el=rail.current;if(!el)return;const reduced=matchMedia('(prefers-reduced-motion: reduce)');let frame=0,last=0,position=el.scrollLeft,visible=false;
 const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;});observer.observe(el);
 const tick=(now:number)=>{const elapsed=Math.min(now-last,40);last=now;const period=el.scrollWidth/2;
  if(visible&&!paused&&!busy.current&&!reduced.matches&&!document.hidden&&now>until.current&&period>0){position+=elapsed*.028;if(position>=period)position-=period;el.scrollLeft=position;}else{position=el.scrollLeft;}frame=requestAnimationFrame(tick);};frame=requestAnimationFrame(tick);
 return()=>{cancelAnimationFrame(frame);observer.disconnect();};},[paused]);
 const interact=()=>{until.current=performance.now()+4000;};
 const move=(direction:number)=>{interact();rail.current?.scrollBy({left:direction*320,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});};
 return <div className="gallery"><div className="rail-toolbar"><p>Selected Reels · @sl6dl7</p><div className="rail-controls"><button onClick={()=>setPaused(!paused)} aria-pressed={paused}>{paused?'Resume':'Pause'}<span className="sr-only"> automatic gallery movement</span></button><button aria-label="Previous work" onClick={()=>move(-1)}>←</button><button aria-label="Next work" onClick={()=>move(1)}>→</button></div></div>
 <div ref={rail} className="work-rail" role="region" aria-label="Selected creator work, scroll horizontally" tabIndex={0} onMouseEnter={()=>{busy.current=true;}} onMouseLeave={()=>{busy.current=false;}} onFocusCapture={()=>{busy.current=true;}} onBlurCapture={(e)=>{if(!e.currentTarget.contains(e.relatedTarget as Node))busy.current=false;}} onPointerDown={interact} onWheel={interact} onTouchStart={interact} onKeyDown={interact}>
 {[0,1].map(copy=><div key={copy} className="rail-group" aria-hidden={copy===1?true:undefined} inert={copy===1?true:undefined}>{work.map((item,i)=><Link key={item.id} href={item.caseStudy} className="work-card" tabIndex={copy===1?-1:0}><div className="work-image"><Image src={item.image} alt={copy===0?item.alt:''} width={320} height={569} unoptimized loading={copy===0&&i<3?'eager':'lazy'}/><span className="work-open"><Arrow diagonal/></span></div><div className="work-caption"><h3>{item.title}</h3><p>{item.theme}</p></div></Link>)}</div>)}
 </div><p className="gallery-note">Personal creator work. Explore the collection for sources and recorded results.</p></div>;
}
