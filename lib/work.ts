// Public founder/creator evidence, checked 2026-09-25. Counts are a published
// snapshot, not a live Instagram API feed or claims of client outcomes.
export const evidenceDate = '2026-09-25';
export const evidenceUrl = 'https://www.projectmonet.com/#results';
export const work = [
 {id:'C093-LuKwqW',title:'A face. A feeling.',theme:'Portrait / Emotion',alt:'Close-up portrait of a woman in a white blouse wearing a pearl earring',views:'9.5M',likes:'685K'},
 {id:'CzuANP0K5ML',title:'Between the lines.',theme:'Cinema / Atmosphere',alt:'A figure in a black leather jacket seen from behind in a dark interior',views:'4.2M',likes:'236K'},
 {id:'C3xkNnAoWa_',title:'The quiet in between.',theme:'Motion / Mood',alt:'A figure in dark clothing ascending a wooden staircase',views:'3.6M',likes:'290K'},
 {id:'CrodTefqiKm',title:'A world in colour.',theme:'Art / Culture',alt:'Vincent van Gogh’s The Starry Night with swirling blue sky and yellow stars',views:'3.6M',likes:'340K'},
 {id:'CzpAg5nKgWc',title:'For the love of words.',theme:'Literature / Texture',alt:'A person in a tan coat holding a tall stack of books',views:'3.2M',likes:'247K'},
 {id:'CytnwFRq0c2',title:'An unhurried moment.',theme:'Literature / Stillness',alt:'A seated reader in a checked jacket holding an open book',views:'2.5M',likes:'217K'},
].map(item=>({...item,image:`/media/${item.id}.jpg`,href:`https://www.instagram.com/reel/${item.id}/`,caseStudy:`/work/sl6dl7#reel-${item.id}`}));
