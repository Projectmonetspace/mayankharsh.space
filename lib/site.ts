import type { Metadata } from 'next';
export const site = { name: 'Mayank Harsh', url: 'https://mayankharsh.space', instagram: 'https://www.instagram.com/sl6dl7/', agency: 'https://projectmonet.com', email: 'contact@mayankharsh.space' };
export const videoSource = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260808_064556_051587f1-74a1-4336-8c05-4dde3594ed05.mp4';
export function metadata(title: string, description: string, path: string): Metadata {
 return { title, description, alternates: { canonical: site.url + path }, openGraph: { title, description, url: site.url + path, siteName: site.name, type: 'website', images: [{ url: '/opengraph-image', width: 1200, height: 630 }] }, twitter: { card: 'summary_large_image', title, description, images: ['/opengraph-image'] } };
}
export const person = { '@type': 'Person', '@id': site.url + '/#person', name: site.name, url: site.url, jobTitle: ['Creative Director','Social Media Strategist'], sameAs: [site.instagram,'https://www.instagram.com/shehzada.says/'], worksFor: { '@type': 'Organization', name: 'Project Monet', url: site.agency } };
