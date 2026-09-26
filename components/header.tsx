'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Mark } from './icons';
const query = '(max-width: 790px), (max-width: 1100px) and (orientation: portrait)';
export function Header() {
 const path = usePathname(); const [open, setOpen] = useState(false);
 const header = useRef<HTMLElement>(null); const panel = useRef<HTMLDivElement>(null); const toggle = useRef<HTMLButtonElement>(null);
 useEffect(() => {
  const mq = matchMedia(query); const sync = () => { if (panel.current) panel.current.inert = mq.matches && !open; };
  sync(); mq.addEventListener('change',sync);
  const outside = (e: PointerEvent) => { if (!header.current?.contains(e.target as Node)) setOpen(false); };
  const escape = (e: KeyboardEvent) => { if(e.key === 'Escape' && open) {setOpen(false);toggle.current?.focus();} };
  document.addEventListener('pointerdown',outside); document.addEventListener('keydown',escape);
  if(open && mq.matches) panel.current?.querySelector('a')?.focus();
  return () => {mq.removeEventListener('change',sync);document.removeEventListener('pointerdown',outside);document.removeEventListener('keydown',escape);};
 },[open]);
 return <header ref={header} className={`header ${open ? 'menu-open' : ''}`}>
  <Link href="/" className="brand" aria-label="Mayank Harsh home"><Mark/></Link>
  <div ref={panel} className="header-actions" id="tablet-navigation" onBlur={(e) => {if(open && !header.current?.contains(e.relatedTarget as Node)) setOpen(false);}}>
   <nav className="nav" aria-label="Main navigation">{[['Home','/'],['Work','/work'],['About','/about'],['Contact','/contact']].map(([label,href],i)=><Link style={{'--nav-delay': `${130+i*45}ms`} as React.CSSProperties} key={href} href={href} onClick={()=>setOpen(false)} aria-current={path===href || (href==='/work' && path.startsWith('/work/')) ? 'page' : undefined}>{label}</Link>)}</nav>
   <div className="time-panel"><span>Creative practice</span><strong>Art • Culture • Social</strong></div>
   <Link href="/contact" className="sign-up" onClick={()=>setOpen(false)}>Let&apos;s Talk</Link>
  </div>
  <button ref={toggle} className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-controls="tablet-navigation" aria-expanded={open} onClick={()=>setOpen(!open)}><span/><span/></button>
 </header>;
}
