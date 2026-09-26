'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Header } from './header';
import { Arrow, Play } from './icons';
import { videoSource } from '@/lib/site';
export function Hero() {
 const video = useRef<HTMLVideoElement>(null); const [paused,setPaused] = useState(false);
 useEffect(()=>{
  const media = matchMedia('(prefers-reduced-motion: reduce)');
  const sync = () => {if(media.matches || paused){video.current?.pause();}else{video.current?.play().catch(()=>{});}};
  sync(); media.addEventListener('change',sync);
  const visible = () => { if(document.hidden) video.current?.pause(); else if(!media.matches && !paused) video.current?.play().catch(()=>{}); };
  document.addEventListener('visibilitychange',visible);
  const observer = new IntersectionObserver(([entry])=>{if(!entry.isIntersecting) video.current?.pause(); else if(!media.matches && !paused) video.current?.play().catch(()=>{});});
  if(video.current) observer.observe(video.current);
  return ()=>{media.removeEventListener('change',sync);document.removeEventListener('visibilitychange',visible);observer.disconnect();};
 },[paused]);
 return <section className="screen" id="screen" aria-label="Introduction">
  <video ref={video} className="background" autoPlay muted loop playsInline disablePictureInPicture preload="metadata" poster="/media/hero-poster.jpg" aria-hidden="true"><source src={videoSource} type="video/mp4"/></video>
  <Header/>
  <div className="hero">
   <div className="hero-content"><h1 className="hero-title"><span className="line line-one"><span className="line-reveal">I Don&apos;t Follow Trends</span></span><span className="line line-two"><span className="line-reveal">I Create Them.</span></span></h1>
   <p className="hero-copy">Creative direction and social strategy shaped by art, literature, music, culture, and emotion.</p>
   <a className="primary-cta" href="#selected-work"><span className="label">Explore Work</span><span className="arrow-box"><Arrow/></span></a></div>
   <article className="demo-card" onAnimationEnd={(e)=>{if(e.target===e.currentTarget) document.documentElement.classList.remove('motion-pending');}}>
    <div className="demo-visual"><Image src="/media/C093-LuKwqW.jpg" alt="Portrait of a woman wearing a pearl earring, from Mayank’s selected Reel" fill sizes="215px" priority/><a className="play" href="https://www.instagram.com/reel/C093-LuKwqW/" target="_blank" rel="noopener noreferrer" aria-label="Watch art and poetry Reel on Instagram (opens in new tab)"><Play/></a></div>
    <a className="watch-button" href="https://www.instagram.com/reel/C093-LuKwqW/" target="_blank" rel="noopener noreferrer">Watch Reel<span className="sr-only"> on Instagram (opens in new tab)</span></a>
   </article>
  </div>
  <button className="motion-toggle" aria-label={paused ? 'Play background motion' : 'Pause background motion'} onClick={()=>{if(paused)video.current?.play().catch(()=>{});else video.current?.pause();setPaused(!paused);}}>{paused ? 'Play motion' : 'Pause motion'}</button>
 </section>;
}
