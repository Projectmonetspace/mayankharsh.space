import { ExpertisePage } from '@/components/expertise-page';
import { metadata } from '@/lib/site';
export const generateMetadata=()=>metadata('Creative Direction — Concept, Narrative & Visual Language','Mayank Harsh’s creative-direction approach: connect concept, narrative, cultural references, image and motion into a coherent body of work.','/expertise/creative-direction');
export default function Page(){return <ExpertisePage kind="creative-direction"/>;}
