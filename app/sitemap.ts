import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
export default function sitemap():MetadataRoute.Sitemap{return ['/','/work','/work/sl6dl7','/about','/expertise/creative-direction','/expertise/social-media-strategy','/project-monet','/contact'].map(path=>({url:site.url+(path==='/'?'':path),lastModified:new Date('2026-09-26')}));}
