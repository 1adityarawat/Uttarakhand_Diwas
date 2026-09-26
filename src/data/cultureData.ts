export interface CultureItem {
  id: string;
  name: string;
  hindiName: string;
  region: 'Kumaon' | 'Garhwal' | 'Jaunsar-Bawar' | 'Pan-Uttarakhand';
  category: 'dance' | 'music' | 'cuisine' | 'attire' | 'heritage';
  tagline: string;
  description: string;
  keyFeatures: string[];
  culturalSignificance: string;
  image: string;
  badge?: string;
}

export const DANCES_DATA: CultureItem[] = [
  {
    id: 'chholiya',
    name: 'Chholiya Dance',
    hindiName: 'छोलिया नृत्य',
    region: 'Kumaon',
    category: 'dance',
    tagline: 'Martial Sword & Shield Dance with Thousand-Year Rajput Heritage',
    description: 'The iconic warrior folk dance of Kumaon dating back over a thousand years to the Khasia Rajput dynasties. Dancers dressed in brilliant red chogas and turbans wield real bronze swords and brass shields, executing agile acrobatic spins to the thunderous pulse of Dhol-Damau, Ransingha, and Mashakbeen.',
    keyFeatures: [
      'Performed with genuine swords (Talwar) and brass shields (Dhal)',
      'Royal crimson attire adorned with silver ornaments and feather headdress',
      'Accompanied by heroic war trumpets (Ransingha) and rhythmic dhol beats',
      'Believed to ward off evil spirits during wedding processions and royal yatras'
    ],
    culturalSignificance: 'Symbol of Rajput chivalry, martial prowess, and protective blessings for the community.',
    image: 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1000&q=80',
    badge: 'State Folk Treasure'
  },
  {
    id: 'jhora-chanchari',
    name: 'Jhora & Chanchari',
    hindiName: 'झोड़ा एवं चांचरी',
    region: 'Kumaon',
    category: 'dance',
    tagline: 'Lyrical Moonlit Circle Dance of Communal Harmony',
    description: 'A deeply communal, circular folk dance where men and women lock arms in concentric rings, swaying rhythmically forward and backward. Sung in call-and-response style led by the Mukhiya (lead singer) with a Hurka drum, Jhora lyrics narrate romantic legends, seasonal blooms, and mythological deities.',
    keyFeatures: [
      'Synchronized community footsteps creating hypnotic circular waves',
      'Accompanied by the rhythmic slap of Hurka and ringing of brass cymbals',
      'Performed under moonlit skies during fairs like Bageshwar and Nanda Devi Melas',
      'Transcends caste and social boundaries in celebration of unity'
    ],
    culturalSignificance: 'Embodies the spirit of togetherness, collective joy, and oral storytelling traditions of Kumaoni villages.',
    image: 'https://images.unsplash.com/photo-1609137144822-0d52bc81e355?auto=format&fit=crop&w=1000&q=80',
    badge: 'Community Circle Dance'
  },
  {
    id: 'barada-nati',
    name: 'Barada Nati',
    hindiName: 'बारदा नाटी',
    region: 'Jaunsar-Bawar',
    category: 'dance',
    tagline: 'Graceful Geometric Folk Dance of the Jaunsari Hills',
    description: 'The vibrant pride of Chakrata and Jaunsar-Bawar, Barada Nati is performed during festive times and community gatherings. Both men and women wear elaborate embroidered Thalka robes, woven woolen jackets, and heavy silver coin necklaces, moving in mesmerizing undulating lines.',
    keyFeatures: [
      'Distinctive embroidered traditional Jaunsari caps and woolen coats',
      'Complex footwork shifting between slow measured sways and energetic stomps',
      'Celebrates nature, crop harvests, and fraternal warmth',
      'Unique folk instruments like the Dhol, Nagara, and Karnal'
    ],
    culturalSignificance: 'Preserves the rich cultural identity and distinct folklore of the Jaunsari indigenous culture.',
    image: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?auto=format&fit=crop&w=1000&q=80',
    badge: 'Jaunsari Heritage'
  },
  {
    id: 'pandav-nritya',
    name: 'Pandav Nritya',
    hindiName: 'पांडव नृत्य',
    region: 'Garhwal',
    category: 'dance',
    tagline: 'Sacred Ritualistic Enactment of the Mahabharata Warriors',
    description: 'An ancient devotional dance-drama exclusive to the Garhwal Himalayas, where villagers re-enact the life of the five Pandavas and Draupadi. Accompanied by the sacred rhythms of Dhol-Damau, performers enter a spiritual trance believed to be the divine presence of Arjuna, Bhima, and Yudhisthira.',
    keyFeatures: [
      'Ritualistic performance over 10-12 winter nights following harvest season',
      'Dynamic weapon choreography representing Bhima’s Gada and Arjuna’s Bow',
      'Dhol rhythms played according to ancient rhythmic codes (Taals) passed orally',
      'Sacred village blessings ensuring protection against natural calamities'
    ],
    culturalSignificance: 'Binds the Garhwali people to their legendary ancestral ties with the Mahabharata, who walked the Swargarohini trail.',
    image: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=1000&q=80',
    badge: 'Devotional Epic'
  },
  {
    id: 'langvir-nritya',
    name: 'Langvir Nritya',
    hindiName: 'लांगवीर नृत्य',
    region: 'Garhwal',
    category: 'dance',
    tagline: 'High-Altitude Acrobatic Balancing Feat on Bamboo Poles',
    description: 'A perilous, awe-inspiring acrobatic folk dance of Tehri Garhwal. A young performer climbs atop a 30-foot vertical wooden pole, balances precisely on his navel or chest without harness, and spins dramatically while playing brass plates or swords to the live beat of Dhol-Damau below.',
    keyFeatures: [
      'Unassisted balancing on a 30-foot vertical beam',
      'Requires intense yogic core strength, balance, and lifelong discipline',
      'Heart-stopping crowd pleaser at Uttarayani and Gauchar Melas',
      'Dynamic speed transitions driven by live drum tempos'
    ],
    culturalSignificance: 'Showcases the fearless physical agility, courage, and athletic traditions of the high Himalayan youth.',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
    badge: 'Acrobatic Feat'
  }
];

export const MUSIC_INSTRUMENTS_DATA: CultureItem[] = [
  {
    id: 'dhol-damau',
    name: 'Dhol & Damau',
    hindiName: 'ढोल एवं दमाऊँ',
    region: 'Pan-Uttarakhand',
    category: 'music',
    tagline: 'The Sacred Percussion Soul of Devbhoomi',
    description: 'The inseparable twin heartbeat of Uttarakhand. The Dhol (double-headed copper/wood drum played with stick and hand) and the Damau (shallow conical kettle drum beaten with wooden sticks) produce over 32 sacred rhythmic patterns (Naupat, Mangal, Bada-Taal) for every life stage from birth to divine invocation.',
    keyFeatures: [
      'Mastered by traditional Aujaars / Das community of hereditary master drummers',
      'Capable of evoking deep trance during Jagar rituals and immense ecstasy at festivals',
      'Ritual consecration requires offerings before each major ceremonial performance',
      'Resonant sound carries across valleys and terraced mountain ridges'
    ],
    culturalSignificance: 'Recognized as the primary spiritual conduit connecting humans to Himalayan deities in sacred Jagars.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80',
    badge: 'Sacred Heartbeat'
  },
  {
    id: 'ransingha-bhankora',
    name: 'Ransingha & Bhankora',
    hindiName: 'रणसिंघा एवं भंकोरा',
    region: 'Pan-Uttarakhand',
    category: 'music',
    tagline: 'Majestic S-Shaped Himalayan War and Ritual Horns',
    description: 'Crafted from hand-hammered copper and brass, the Ransingha is curved into an iconic dramatic "S" curve, producing a piercing, resonant blare that heralds royal processions, deity palanquins (Doli), and warrior dances. The Bhankora is a straight, slender copper horn that echoes through mist-shrouded peaks.',
    keyFeatures: [
      'Hand-crafted by traditional copper coppersmiths (Tamta) of Almora and Srinagar',
      'Produces commanding, spiritual overtone frequencies',
      'Essential herald at Nanda Devi Raj Jat and Char Dham temple openings',
      'Can be heard over 5 kilometers across mountain canyons'
    ],
    culturalSignificance: 'The ancient siren of Himalayan kings, warning of invasions and calling communities together for sacred celebrations.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80',
    badge: 'Warrior Brass'
  },
  {
    id: 'hurka',
    name: 'Hurka',
    hindiName: 'हुड़का',
    region: 'Kumaon',
    category: 'music',
    tagline: 'The Hourglass Drum of the Himalayan Balladeers',
    description: 'An hourglass-shaped percussion instrument played by holding the waist strap with the left hand while striking the drumhead with the fingers of the right hand. By pulling or releasing the strap cords, the player continuously alters the skin tension, creating dynamic sliding pitch bends that accompany lyrical Jhora songs.',
    keyFeatures: [
      'Unique pitch-modulation mechanism using cord tension',
      'Played by the lead narrator/singer (Mukhiya) during agricultural Ropa-Boi songs',
      'Carved from seasoned mountain timber with goat-hide diaphragms',
      'Creates infectious foot-tapping cadence in open village squares'
    ],
    culturalSignificance: 'The primary musical instrument of oral balladry, village love poetry, and heroic folklore in Kumaon.',
    image: 'https://images.unsplash.com/photo-1520523839898-5071282543e2?auto=format&fit=crop&w=1000&q=80',
    badge: 'Balladeer Percussion'
  },
  {
    id: 'mashakbeen',
    name: 'Mashakbeen (Himalayan Bagpipe)',
    hindiName: 'मशकबीन',
    region: 'Pan-Uttarakhand',
    category: 'music',
    tagline: 'The Naturalized Scottish Bagpipe of Pahadi Celebrations',
    description: 'Originally introduced through British Gurkha and Garhwal Rifle regiments in the 19th century, the bagpipe was embraced so wholeheartedly by Pahadi musicians that it became a quintessential staple of village wedding processions, Chholiya troupes, and festive Melas.',
    keyFeatures: [
      'Produces continuous polyphonic drone and high spirited melodies',
      'Played in tight rhythmic synchrony with Dhol-Damau',
      'Mastered by indigenous Pahadi folk troupes with energetic flair',
      'Instantly creates an electric celebration atmosphere in any gathering'
    ],
    culturalSignificance: 'A fascinating testament to Uttarakhand’s ability to adopt external art forms and infuse them with authentic mountain soul.',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1000&q=80',
    badge: 'Highland Legend'
  }
];

export const CUISINE_DATA: CultureItem[] = [
  {
    id: 'bhatt-ki-churkani',
    name: 'Bhatt ki Churkani',
    hindiName: 'भट्ट की चुड़कानी',
    region: 'Kumaon',
    category: 'cuisine',
    tagline: 'Nutrient-Dense Black Soybean Curry in Iron Kadhai',
    description: 'The undisputed royal delicacy of Kumaoni kitchens. Organic black soybeans (Bhatt) are lightly roasted in pure mustard oil, simmered slowly with rice flour roux, mountain spices, and aromatic jambu (Himalayan chives) inside a heavy cast-iron cauldron, yielding a glossy, pitch-black gravy packed with protein and iron.',
    keyFeatures: [
      'Cooked exclusively in iron kadhai to infuse natural dietary iron',
      'Tempered with Jambu (allium stracheyi) herb sourced from high Bugyals',
      'Served piping hot with steaming aromatic mountain rice and fresh radish',
      'Known to fortify the body against sub-zero Himalayan winters'
    ],
    culturalSignificance: 'The soul food of Kumaoni families, cherished for its warming medicinal properties and comfort.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80',
    badge: 'Superfood Heritage'
  },
  {
    id: 'kafuli',
    name: 'Kafuli',
    hindiName: 'काफुली / कफली',
    region: 'Garhwal',
    category: 'cuisine',
    tagline: 'Velvety Iron-Rich Mountain Greens Puree',
    description: 'A signature dish of Garhwal prepared with fresh tender leaves of local spinach (Palak) and fenugreek (Methi) slow-boiled with ginger, garlic, and green chilies. Thickened with rice paste or besan and simmered on charcoal embers, Kafuli is crowned with a sizzling tadka of Jakhiya (wild mustard seeds).',
    keyFeatures: [
      'Tempered with crunchy Jakhiya seeds (Cleome viscosa) unique to Garhwal',
      'Creamy, velvety texture without adding processed cream or butter',
      'Highly praised by nutritionists for its bio-available zinc, iron, and fibers',
      'The centerpiece of traditional festive Pahadi banquets'
    ],
    culturalSignificance: 'A testament to the sustainable, foraging culinary wisdom of Himalayan mothers.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80',
    badge: 'Garhwali Classic'
  },
  {
    id: 'aloo-gutke-bhang-chutney',
    name: 'Aloo ke Gutke & Bhang ki Chutney',
    hindiName: 'आलू के गुटके और भांग की चटनी',
    region: 'Pan-Uttarakhand',
    category: 'cuisine',
    tagline: 'Spiced Mountain Potatoes with Roasted Hempseed Dip',
    description: 'Mountain baby potatoes boiled and stir-fried with turmeric, red chilies, coriander, and crackling Jakhiya seeds. Served with a tart, nutty, fragrant chutney made by roasting non-psychoactive indigenous hemp seeds (Bhang ke beej) ground with mint, green chilies, and sour mountain lemon (Nimbu).',
    keyFeatures: [
      'Crispy golden potato wedges coated in aromatic whole spices',
      'Bhang chutney is rich in Omega-3 and Omega-6 fatty acids with zero intoxicating effects',
      'The quintessential tea-time snack served across roadside dhabas from Nainital to Joshimath',
      'Often paired with crisp mountain cucumber sticks (Kakdi)'
    ],
    culturalSignificance: 'The unofficial street-food anthem of Uttarakhand hills, bringing nostalgic smiles to every traveler.',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=1000&q=80',
    badge: 'Pahadi Street Classic'
  },
  {
    id: 'bal-mithai-singori',
    name: 'Bal Mithai & Singori',
    hindiName: 'बाल मिठाई एवं सिंगोरी',
    region: 'Kumaon',
    category: 'cuisine',
    tagline: 'Iconic Roasted Khoya Fudge Wrapped in Maalu Leaves',
    description: 'Almora’s world-renowned confectionery heritage. Bal Mithai is a dense, dark brown roasted fudge made from slow-cooked milk solids (Khoya) coated with tiny crunchy white sugar beads. Singori is a delicate conical sweet made of condensed milk flavored with cardamom, wrapped inside fresh, fragrant leaves of the Maalu vine.',
    keyFeatures: [
      'Slow roasted milk solids caramelized over hours to deep chocolate brown',
      'Maalu leaf wrapping imparts a distinct forest aroma to Singori',
      'Originated in Almora during the 19th-century Chand dynasty era',
      'GI-tagged regional sweet gift carried back by travelers across the world'
    ],
    culturalSignificance: 'The supreme sweet ambassador of Uttarakhand, representing warmth, hospitality, and celebration.',
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=1000&q=80',
    badge: 'GI Confectionery'
  },
  {
    id: 'jhangore-ki-kheer',
    name: 'Jhangore ki Kheer',
    hindiName: 'झंगोरे की खीर',
    region: 'Garhwal',
    category: 'cuisine',
    tagline: 'Sublime Barnyard Millet & Saffron Mountain Pudding',
    description: 'A decadent, healthy dessert made from Jhangora (Himalayan barnyard millet) gently simmered in full-cream mountain cow milk, perfumed with green cardamom, Kashmiri saffron strands, and roasted cashews and almonds. Naturally low in glycemic index and gluten-free.',
    keyFeatures: [
      'Made from drought-resistant ancient millets harvested on rain-fed terraced steps',
      'Silky pudding texture that melts effortlessly on the tongue',
      'Offered as sacred Prasad during Navratri and temple ceremonies',
      'A triumph of indigenous Himalayan grain culinary craftsmanship'
    ],
    culturalSignificance: 'Celebrates the resurrection of Shree Anna (ancient millets) in the modern gourmet landscape.',
    image: 'https://images.unsplash.com/photo-1517244683847-7456b63c5969?auto=format&fit=crop&w=1000&q=80',
    badge: 'Millet Gourmet'
  }
];

export const ATTIRE_CRAFTS_DATA: CultureItem[] = [
  {
    id: 'pichora',
    name: 'Rangwali Pichora',
    hindiName: 'रंगवाली पिछौड़ा',
    region: 'Kumaon',
    category: 'attire',
    tagline: 'The Sacred Saffron-Red Dupatta of Kumaoni Brides',
    description: 'A sacred drape dyed in bright turmeric yellow or saffron, meticulously hand-printed with deep red circular dots (Pooja patterns). At its center lies an auspicious medallion featuring the Sun, the Moon, a Conch (Shankh), a Bell (Ghanti), and Goddess Lakshmi, symbolizing eternal marital bliss and cosmic protection.',
    keyFeatures: [
      'Traditionally dyed using organic turmeric and vermilion',
      'Central medallion depicts celestial bodies and sacred temple iconography',
      'Essential sacred wear for brides and women during weddings, Namkaran, and Upnayan',
      'Passed down through generations as cherished family heirloom'
    ],
    culturalSignificance: 'The pinnacle emblem of Kumaoni womanhood, auspiciousness, and sacred marital heritage.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80',
    badge: 'Sacred Textile'
  },
  {
    id: 'pahadi-nathuli',
    name: 'Tehri Nathuli & Galobandh',
    hindiName: 'टिहरी नथुली एवं गलोबन्द',
    region: 'Garhwal',
    category: 'attire',
    tagline: 'Magnificent Peacock-Engraved Gold Nose Ring & Velvet Choker',
    description: 'The monumental circular nose ring of Garhwal (Nathuli), crafted in 22-carat gold and studded with uncut rubies, pearls, and embossed peacock motifs. Paired with the Galobandh—a plush red velvet band adorned with hand-carved square gold plates tied closely around the neck.',
    keyFeatures: [
      'Can weigh up to 30-50 grams of pure hand-hammered gold',
      'Intricate filigree work depicting dancing peacocks and lotus buds',
      'Pauchi (gold bead bracelet on red cloth) complements the ensemble',
      'Showcased with pride during wedding ceremonies across the Himalayas'
    ],
    culturalSignificance: 'A majestic statement of royal grace, artisan goldsmithing (Sunar) heritage, and matrimonial honor.',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80',
    badge: 'Royal Jewelry'
  },
  {
    id: 'aipan-art',
    name: 'Aipan Folk Art',
    hindiName: 'ऐपण लोककला',
    region: 'Kumaon',
    category: 'attire',
    tagline: 'Ritualistic Sacred Geometry in Terracotta and Rice Flour',
    description: 'A centuries-old ritualistic folk art native to Kumaon. Women paint doorsteps, courtyards, and prayer altars with a base coat of Geru (ochre red clay) and hand-draw sacred patterns using Biswar (smooth wet paste made of soaked ground rice). Motifs include lotus buds, Chowki, footprints of Lakshmi, and geometric swastikas.',
    keyFeatures: [
      'Executed freehand using solely three fingers (forefinger, middle finger, ring finger)',
      'Specific designs for each occasion: Namkaran Chowki, Janeu Chowki, Dhuli Arghya',
      'Draws positive cosmic energies and prosperity into Himalayan households',
      'Now granted prestigious Geographical Indication (GI) tag'
    ],
    culturalSignificance: 'The visual sacred grammar of Uttarakhand, preserving sacred geometry across millennia.',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=80',
    badge: 'GI Heritage Art'
  },
  {
    id: 'pahadi-topi',
    name: 'Pahadi Topi & Brahma Kamal',
    hindiName: 'पहाड़ी टोपी एवं ब्रह्मकमल',
    region: 'Pan-Uttarakhand',
    category: 'attire',
    tagline: 'Symbol of Mountain Dignity and Self-Respect',
    description: 'A handsome, dignified woolen cap with a folded rim and upturned peak, usually in charcoal grey, earthy fawn, or maroon wool. It is traditionally pinned with a metallic brooch of the sacred Brahma Kamal (Saussurea obvallata), the state flower that blooms only on high Himalayan glacial crags.',
    keyFeatures: [
      'Woven from fine pure indigenous hill sheep wool',
      'Worn with pride by youth, elders, and state dignitaries alike',
      'Brahma Kamal emblem represents purity, penance, and Himalayan resilience',
      'Gifted as the ultimate gesture of honor and hospitality to esteemed guests'
    ],
    culturalSignificance: 'The universal insignia of Pahadi identity, unity, and pride worldwide.',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1000&q=80',
    badge: 'Pahadi Identity'
  }
];

export const SACRED_HERITAGE_DATA: CultureItem[] = [
  {
    id: 'char-dham',
    name: 'The Sacred Char Dham',
    hindiName: 'श्री चार धाम तीर्थ',
    region: 'Garhwal',
    category: 'heritage',
    tagline: 'Yamunotri, Gangotri, Kedarnath, and Badrinath',
    description: 'The supreme spiritual circuit nestled amidst snow-crowned peaks of Garhwal. From the holy origins of Yamuna and Ganga to the jyotirlinga of Kedarnath standing resilient against time and Badrinath’s golden sanctum of Lord Vishnu, this pilgrimage is the spiritual axis of India.',
    keyFeatures: [
      'Kedarnath: One of the 12 sacred Jyotirlingas, located at 3,583m altitude',
      'Badrinath: Ancient temple renovated by Adi Shankaracharya in the 8th century',
      'Gangotri & Yamunotri: Glacial cradles of India’s most sacred rivers',
      'Attracts millions seeking spiritual liberation (Moksha) every summer'
    ],
    culturalSignificance: 'The spiritual crown of Devbhoomi, earning Uttarakhand its name as the Land of the Gods.',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80',
    badge: 'Spiritual Epicenter'
  },
  {
    id: 'valley-of-flowers',
    name: 'Valley of Flowers & Hemkund',
    hindiName: 'फूलों की घाटी एवं हेमकुण्ड साहिब',
    region: 'Garhwal',
    category: 'heritage',
    tagline: 'UNESCO World Heritage Alpine Floral Sanctuary',
    description: 'A paradise nestled in West Himalaya, where over 600 species of alpine wild blossoms paint the glacial meadows in hues of violet, gold, and crimson during the monsoon. Higher up sits Hemkund Sahib, a sacred Sikh pilgrimage by a pristine glacial lake surrounded by seven snow peaks.',
    keyFeatures: [
      'Home to endangered Himalayan Musk Deer, Snow Leopard, and Asiatic Black Bear',
      'Rare medicinal herbs including Sanjeevani Booti and Blue Poppy',
      'Breathtaking amphitheater of glaciers and gushing waterfalls',
      'Discovered internationally by Frank Smythe in 1931'
    ],
    culturalSignificance: 'A living testament to the virgin beauty and fragile ecological splendor of the higher Himalayas.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
    badge: 'UNESCO Heritage'
  }
];

export interface ScheduleEvent {
  time: string;
  title: string;
  hindiTitle: string;
  venue: string;
  description: string;
  category: 'ceremony' | 'cultural' | 'food' | 'interactive' | 'musical';
  icon: string;
}

export const IITR_SCHEDULE: ScheduleEvent[] = [
  {
    time: '10:00 AM - 11:30 AM',
    title: 'Devbhoomi Shobha Yatra (Grand Procession)',
    hindiTitle: 'देवभूमि शोभा यात्रा',
    venue: 'James Thomason Building to Multi-Activity Centre (MAC)',
    description: 'Vibrant inaugural cultural parade led by student Chholiya troupes, live Dhol-Damau ensembles, sacred palanquins (Doli), and traditional attire showcase across campus avenues.',
    category: 'ceremony',
    icon: 'Sparkles'
  },
  {
    time: '11:45 AM - 01:00 PM',
    title: 'Deep Prajwalan & Mangal Gaan Inaugural',
    hindiTitle: 'दीप प्रज्वलन एवं मंगल गान',
    venue: 'MAC Auditorium, IIT Roorkee',
    description: 'Formal address by the Director & Chief Guest, sacred invocatory chants, felicitation of Pahadi artisans, and screening of the documentary "IIT Roorkee: Gateway to the Garhwal Himalayas".',
    category: 'ceremony',
    icon: 'Flame'
  },
  {
    time: '01:00 PM - 03:00 PM',
    title: 'Pahadi Dawat: Grand Feast of the Hills',
    hindiTitle: 'पहाड़ी दावत एवं स्वाद संगम',
    venue: 'Student Activity Center (SAC) Lawns',
    description: 'Authentic lunch banquet serving hot Kafuli, Bhatt ki Churkani cooked in iron kadhai, Aloo ke Gutke with Bhang chutney, Mandua ki Roti, Jhangore ki Kheer, and fresh Almora Bal Mithai.',
    category: 'food',
    icon: 'UtensilsCrossed'
  },
  {
    time: '03:15 PM - 04:45 PM',
    title: 'Hands-on Aipan Art & Woodcraft Studio',
    hindiTitle: 'ऐपण कला एवं काष्ठ शिल्प कार्यशाला',
    venue: 'Open Air Theatre (OAT)',
    description: 'Interactive folk workshop where students and professors learn to hand-paint traditional Aipan chowkis with rice paste on terracotta tiles, guided by master artists from Almora.',
    category: 'interactive',
    icon: 'Palette'
  },
  {
    time: '05:00 PM - 06:30 PM',
    title: 'Pahadi Veshbhusha: Traditional Attire Showcase',
    hindiTitle: 'पहाड़ी वेशभूषा रैंप वॉक',
    venue: 'Convocation Hall Front Courtyard',
    description: 'IIT Roorkee students, research scholars, and faculty walk the ramp in resplendent Pichoras, Tehri Nathulis, Galobandhs, Mirzai, and embroidered Pahadi Topis.',
    category: 'cultural',
    icon: 'Shirt'
  },
  {
    time: '07:00 PM - 09:30 PM',
    title: 'Mega Cultural Evening: Negi Ji Tribute & Chholiya Beats',
    hindiTitle: 'महा सांस्कृतिक संध्या एवं लोक संगीत',
    venue: 'MAC Main Stage, IIT Roorkee',
    description: 'High-voltage live performances: electrifying Chholiya sword dance, emotional tributes to folk icon Narendra Singh Negi, Jagar recital, and live Pahadi folk fusion band.',
    category: 'musical',
    icon: 'Music'
  },
  {
    time: '09:30 PM - 10:30 PM',
    title: 'Community Jhora Dance & Campfire Finale',
    hindiTitle: 'सामूहिक झोड़ा नृत्य एवं अलाव',
    venue: 'Thomason Lawn under the Himalayan Stars',
    description: 'Every attendee locks hands in vast concentric circles for the traditional Jhora community dance around a crackling bonfire, celebrating the unbroken mountain brotherhood.',
    category: 'cultural',
    icon: 'Users'
  }
];

export interface DialectWord {
  garhwaliOrKumaoni: string;
  hindi: string;
  english: string;
  context: string;
}

export const PAHAD_DICTIONARY: DialectWord[] = [
  {
    garhwaliOrKumaoni: 'Bhalu Che? / Bhalu Chha?',
    hindi: 'सब ठीक है? / बढ़िया हो?',
    english: 'How are you? / Is everything well?',
    context: 'The warmest, universal greeting when meeting family or friends in the hills.'
  },
  {
    garhwaliOrKumaoni: 'Daju (Kumaoni) / Bhula (Garhwali)',
    hindi: 'बड़े भाई / छोटे भाई',
    english: 'Elder Brother (Daju) / Younger Brother (Bhula)',
    context: 'Used affectionately across campuses and villages to address peers and juniors.'
  },
  {
    garhwaliOrKumaoni: 'Mitha Pahad',
    hindi: 'हमारा प्यारा पहाड़',
    english: 'Sweet, beloved hills',
    context: 'Poetic term denoting deep nostalgia and affection for Uttarakhand’s villages.'
  },
  {
    garhwaliOrKumaoni: 'Ghar-Aana',
    hindi: 'घर वापसी',
    english: 'Homecoming to the mountains',
    context: 'The soulful pull that brings Pahadis back to their ancestral homes during festivals.'
  },
  {
    garhwaliOrKumaoni: 'Thau / Baand',
    hindi: 'लड़का / लड़की',
    english: 'Boy / Girl',
    context: 'Common dialect words used lovingly in local folklore and friendly chatter.'
  },
  {
    garhwaliOrKumaoni: 'Kaudal / Dhung',
    hindi: 'कौतुक / पत्थर',
    english: 'Wonder / Mountain Stone',
    context: 'Depicting the rugged natural landscape and awe-inspiring Himalayan vistas.'
  }
];

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: 'Which sacred martial dance of Kumaon features performers wielding real swords and brass shields?',
    options: ['Barada Nati', 'Chholiya', 'Jhora', 'Pandav Nritya'],
    correctAnswerIndex: 1,
    explanation: 'Chholiya is the 1000-year-old Rajput martial dance of Kumaon performed with genuine swords (Talwar) and brass shields (Dhal).'
  },
  {
    question: 'What is the auspicious saffron/yellow and red dotted sacred dupatta worn by Kumaoni brides called?',
    options: ['Pichora', 'Dhaantu', 'Kullu Shawl', 'Gagra'],
    correctAnswerIndex: 0,
    explanation: 'Rangwali Pichora is the sacred saffron drape patterned with red polka dots and sacred motifs including the sun, moon, conch, and bell.'
  },
  {
    question: 'Which town in Kumaon is internationally renowned for authentic Bal Mithai and Singori?',
    options: ['Haridwar', 'Almora', 'Rishikesh', 'Dehradun'],
    correctAnswerIndex: 1,
    explanation: 'Almora is the historic cultural capital of Kumaon, world-famous for its caramelized khoya Bal Mithai and leaf-wrapped Singori.'
  },
  {
    question: 'Which state flower of Uttarakhand is famously pinned on the traditional Pahadi Topi?',
    options: ['Buransh (Rhododendron)', 'Brahma Kamal', 'Himalayan Marigold', 'Blue Poppy'],
    correctAnswerIndex: 1,
    explanation: 'Brahma Kamal (Saussurea obvallata), the sacred mythic lotus of the high Himalayas and state flower of Uttarakhand.'
  },
  {
    question: 'Which wild spice seed from the Garhwal hills gives authentic Pahadi tadka its distinct nutty crunch?',
    options: ['Jakhiya', 'Cumin', 'Mustard', 'Fenugreek'],
    correctAnswerIndex: 0,
    explanation: 'Jakhiya (Cleome viscosa) is the indigenous wild crunchy seed used in tempering Kafuli, Aloo ke Gutke, and Garhwali gravies.'
  }
];
