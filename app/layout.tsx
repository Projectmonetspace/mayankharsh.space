import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import './globals.css';
const sans = localFont({src:'../public/fonts/manrope.ttf',variable:'--font-sans',display:'swap',weight:'200 800'});
const display = localFont({src:'../public/fonts/bodoni.ttf',variable:'--font-display',display:'swap',weight:'400 900'});
export const metadata: Metadata = { metadataBase: new URL('https://mayankharsh.space'), title: {default:'Mayank Harsh — Creative Director & Social Media Strategist',template:'%s | Mayank Harsh'}, manifest:'/site.webmanifest', icons:{icon:'/icon.svg'}, robots:process.env.VERCEL_ENV === 'preview' ? {index:false,follow:true} : {index:true,follow:true} };
export const viewport: Viewport = {themeColor:'#000000',colorScheme:'dark',width:'device-width',initialScale:1,viewportFit:'cover'};
const entrance = `if(!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('motion-pending');setTimeout(function(){document.documentElement.classList.remove('motion-pending')},3500)}`;
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en" className={`${sans.variable} ${display.variable}`} suppressHydrationWarning><head><script dangerouslySetInnerHTML={{__html:entrance}}/></head><body><a className="skip-link" href="#main">Skip to content</a>{children}</body></html>; }
