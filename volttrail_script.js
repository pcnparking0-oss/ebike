
// ── PRODUCT DATA ──
const bikes = [
  // ── Sur-Ron ──
  { id:'ultra-bee', img:'/images/product-ultra-bee.jpg', desc:'The Sur-Ron Ultra Bee MX 2025 is the do-it-all mid-weight electric dirt bike, delivering 11kW peak power, around 55mph and up to 50 miles of range. A favourite step-up for adult riders who have outgrown the Light Bee X.', brand:'Sur-Ron', name:'Ultra Bee MX 2025', specs:['11kW peak','55mph','50mi range'], price:'£4,999', tags:['surron','adult','offroad'], badges:['new','stock'], finance:'~£139/mo', page:'product-ultra-bee', color:'#aaff00', colours:[{hex:'#aaff00',name:'Volt Green'},{hex:'#ffffff',name:'White'},{hex:'#1a1a2e',name:'Midnight Blue'},{hex:'#cc2200',name:'Racing Red'}] },
  { id:'lbx', img:'/images/product-lbx.jpg', desc:'The Sur-Ron Light Bee X (LBX) is the UK\'s best-selling electric dirt bike. Lightweight, agile and endlessly upgradeable, with 6kW peak power and roughly 45mph for trails, pit-bike racing and backyard fun.', brand:'Sur-Ron', name:'Light Bee X (LBX)', specs:['6kW peak','45mph','47mi range'], price:'£3,199', tags:['surron','adult','offroad'], badges:['stock'], finance:'~£89/mo', color:'#aaff00', colours:[{hex:'#aaff00',name:'Volt Green'},{hex:'#ffffff',name:'White'},{hex:'#e8a020',name:'Gold'},{hex:'#333333',name:'Stealth Black'}] },
  { id:'lbx-road', img:'/images/product-lbx-road.jpg', desc:'The Sur-Ron Light Bee L1e is the road-legal version of the legendary Light Bee, type-approved for UK roads. Restricted to 28mph, it needs L-plates, insurance and a CBT, making it ideal for 16+ riders.', brand:'Sur-Ron', name:'Light Bee L1e – Road Legal', specs:['6kW peak','28mph restricted','L1e road legal'], price:'£3,499', tags:['surron','adult','road'], badges:['road','stock'], finance:'~£97/mo', color:'#ffaa00', colours:[{hex:'#ffaa00',name:'Amber'},{hex:'#333333',name:'Stealth Black'}] },
  { id:'storm-bee', img:'/images/product-storm-bee.jpg', desc:'The Sur-Ron Storm Bee is a full-size electric motocross machine and a genuine 1:1 replacement for a 250-350cc petrol bike, with 21.5kW peak power, around 68mph and up to 60 miles of range.', brand:'Sur-Ron', name:'Storm Bee', specs:['21.5kW peak','68mph','60mi range'], price:'£7,999', tags:['surron','adult','offroad'], badges:['new'], finance:'~£222/mo', color:'#aaff00', colours:[{hex:'#aaff00',name:'Volt Green'},{hex:'#cc2200',name:'Red'}] },
  { id:'hyper-bee', img:'/images/product-hyper-bee.jpg', desc:'The Sur-Ron Hyper Bee is the brand\'s youth and pit-bike model on 14in/12in wheels, bringing Sur-Ron build quality and ride feel to younger and smaller riders for off-road use.', age:'Ages 8+', brand:'Sur-Ron', name:'Hyper Bee 2025', specs:['Youth/pit bike','14in/12in wheels','Off-road'], price:'£2,999', tags:['surron','kids','offroad'], badges:['new','stock'], finance:'~£83/mo', color:'#aaff00', colours:[{hex:'#aaff00',name:'Volt Green'},{hex:'#ff6600',name:'Orange'},{hex:'#0088ff',name:'Blue'}] },
  // ── Talaria ──
  { id:'talaria-sting-r', img:'/images/product-talaria-sting-r.jpg', desc:'The Talaria Sting R MX4 is a popular adult off-road electric dirt bike with 8kW peak power, around 53mph and roughly 53 miles of range. Gear-drive delivery and a tough chassis make it a strong Sur-Ron rival.', brand:'Talaria', name:'Sting R MX4 – Off Road', specs:['8kW peak','53mph','53mi range'], price:'£3,735', tags:['talaria','adult','offroad'], badges:['stock'], finance:'~£104/mo', color:'#aaff00', colours:[{hex:'#aaff00',name:'Volt Green'},{hex:'#333333',name:'Black'},{hex:'#cc2200',name:'Red'}] },
  { id:'talaria-sting-road', img:'/images/product-talaria-sting-road.jpg', desc:'The Talaria Sting L1e is the road-legal Sting, type-approved for UK roads at 28mph. It adds lights, indicators, mirrors and a number plate holder so 16+ riders can ride legally with a CBT.', brand:'Talaria', name:'Sting L1e – Road Legal', specs:['8kW peak','28mph L1e','Road legal'], price:'£3,890', tags:['talaria','adult','road'], badges:['road','stock'], finance:'~£108/mo', color:'#ffaa00', colours:[{hex:'#ffaa00',name:'Amber'},{hex:'#333333',name:'Black'}] },
  { id:'talaria-mx5', img:'/images/product-talaria-mx5.jpg', desc:'The Talaria Sting MX5 Pro steps up to a 72V 40Ah battery for a substantial power and range boost over 60V models. Talaria\'s most potent Sting, built for demanding off-road riding.', brand:'Talaria', name:'Sting MX5 Pro – 72V', specs:['72V 40Ah battery','Off-road','Gear drive'], price:'£3,995', tags:['talaria','adult','offroad'], badges:['new'], finance:'~£111/mo', color:'#aaff00', colours:[{hex:'#aaff00',name:'Volt Green'},{hex:'#333333',name:'Black'}] },
  { id:'talaria-x3', img:'/images/product-talaria-x3.jpg', desc:'The Talaria X3 (also known as the XXX) features a distinctive frame-spanning 60V battery design and a lightweight chassis, offering precise handling for off-road adventures.', brand:'Talaria', name:'X3 (XXX)', specs:['60V battery','Off-road','Lightweight chassis'], price:'£3,235', tags:['talaria','adult','offroad'], badges:['stock'], finance:'~£90/mo', color:'#aaff00', colours:[{hex:'#aaff00',name:'Volt Green'},{hex:'#0088ff',name:'Blue'}] },
  { id:'talaria-komodo', img:'/images/product-talaria-komodo.jpg', desc:'The Talaria Komodo TL6000 is a high-power electric dirt bike with 22kW peak power, around 66mph and up to 70 miles of range — Talaria\'s answer to high-end electric performance bikes.', brand:'Talaria', name:'Komodo TL6000', specs:['22kW peak','66mph','70mi range'], price:'£5,495', tags:['talaria','adult','offroad'], badges:['new'], finance:'~£153/mo', color:'#aaff00', colours:[{hex:'#aaff00',name:'Volt Green'},{hex:'#0088ff',name:'Blue'}] },
  // ── Stark Varg ──
  { id:'stark-mx', img:'/images/product-stark-mx.jpg', desc:'The Stark Varg MX 1.2 is the world\'s most powerful electric motocross bike, with up to 80HP, a 7.2kWh battery and KYB suspension. The MX 1.2 brings a lighter chassis and around 20% more range.', brand:'Stark Varg', name:'Varg MX 1.2', specs:['60kW / 80HP','7.2kWh battery','KYB suspension'], price:'£10,490', tags:['stark','adult','offroad'], badges:['new'], finance:'~£291/mo', color:'#aaff00', colours:[{hex:'#aaff00',name:'Volt'},{hex:'#cc2200',name:'Red'},{hex:'#333333',name:'Black'}] },
  { id:'stark-ex', img:'/images/product-stark-ex.jpg', desc:'The Stark Varg EX is the road-legal version of the Varg, adding UK road approval and an 18in rear wheel for enduro use, with up to 80HP of fully adjustable electric power.', brand:'Stark Varg', name:'Varg EX – Road Legal', specs:['60kW / 80HP','Road legal','73mi range'], price:'£11,290', tags:['stark','adult','road'], badges:['new','road'], finance:'~£314/mo', color:'#ffaa00', colours:[{hex:'#ffaa00',name:'Amber'},{hex:'#333333',name:'Black'}] },
  // ── KTM ──
  { id:'ktm-sxe5', img:'/images/product-ktm-sxe5.jpg', desc:'The KTM SX-E 5 is an advanced all-electric youth motocross bike with 5kW peak power, a 907Wh battery and fully adjustable WP Xact suspension. A genuine READY TO RACE platform for junior racers.', age:'Ages 8-12', brand:'KTM', name:'SX-E 5', specs:['5kW peak','907Wh battery','WP Xact suspension'], price:'£4,999', tags:['ktm','kids','offroad'], badges:['new'], finance:'~£139/mo', color:'#ff6600', colours:[{hex:'#ff6600',name:'KTM Orange'}] },
  { id:'ktm-sxe3', img:'/images/product-ktm-sxe3.jpg', desc:'The KTM SX-E 3 is the ideal electric mini-crosser for thrill-seeking juniors, with a 3.8kW motor, 648Wh battery and six ride modes — the perfect step up from a balance bike.', age:'Ages 6-9', brand:'KTM', name:'SX-E 3', specs:['3.8kW motor','648Wh battery','6 ride modes'], price:'£4,399', tags:['ktm','kids','offroad'], badges:['new'], finance:'~£122/mo', color:'#ff6600', colours:[{hex:'#ff6600',name:'KTM Orange'}] },
  { id:'ktm-sxe2', img:'/images/product-ktm-sxe2.jpg', desc:'The KTM SX-E 2 bridges the gap between a balance bike and the SX-E 3. On 10in wheels with adjustable ergonomics, it is the ideal first electric motorcycle for the youngest riders.', age:'Ages 4-7', brand:'KTM', name:'SX-E 2', specs:['Electric mini','10in wheels','Youth entry'], price:'£3,799', tags:['ktm','kids','offroad'], badges:['new'], finance:'~£106/mo', color:'#ff6600', colours:[{hex:'#ff6600',name:'KTM Orange'}] },
  // ── E Ride Pro ──
  { id:'eride-ss', img:'/images/product-eride-ss.jpg', desc:'The E Ride Pro SS 2.0 is a high-value 72V electric dirt bike with 12kW peak power and around 56mph. It sits between the Sur-Ron and Stark Varg price brackets for riders wanting more power affordably.', brand:'E Ride Pro', name:'SS 2.0 (19in) – 72V 12kW', specs:['12kW peak','56mph','50mi range'], price:'£4,300', tags:['eride','adult','offroad'], badges:['stock'], finance:'~£120/mo', color:'#aaff00', colours:[{hex:'#aaff00',name:'Green'},{hex:'#333333',name:'Black'}] },
  { id:'eride-s', img:'/images/product-eride-s.jpg', desc:'The E Ride Pro S is the 17in, 72V 6kW model in the E Ride Pro range — a more compact, accessible off-road electric dirt bike with strong value.', brand:'E Ride Pro', name:'S (17in) – 72V 6kW', specs:['6kW peak','72V battery','Off-road'], price:'£3,500', tags:['eride','adult','offroad'], badges:['stock'], finance:'~£97/mo', color:'#aaff00', colours:[{hex:'#aaff00',name:'Green'},{hex:'#333333',name:'Black'}] },
  // ── RFN by Apollo ──
  { id:'rfn-ares-rally', img:'/images/product-rfn-ares-rally.jpg', desc:'The RFN Ares Rally is an award-winning adult off-road electric dirt bike with a 5kW motor, long range and 200mm of suspension travel. Its convertible design adapts from enduro to trail riding tool-free.', brand:'RFN', name:'Ares Rally', specs:['5kW motor','140km range','200mm travel'], price:'£3,995', tags:['rfn','adult','offroad'], badges:['new'], finance:'~£111/mo', color:'#cc2200', colours:[{hex:'#cc2200',name:'Red'},{hex:'#333333',name:'Black'}] },
  { id:'rfn-ares-rally-pro', img:'/images/product-rfn-ares-rally-pro.jpg', desc:'The RFN Ares Rally Pro is the race-focused version of the Ares Rally, with a 72V 12.5kW system and top-tier components built for competition and extreme off-road performance.', brand:'RFN', name:'Ares Rally Pro', specs:['Race-spec','72V 12.5kW','Off-road MX'], price:'£4,995', tags:['rfn','adult','offroad'], badges:['new'], finance:'~£139/mo', color:'#cc2200', colours:[{hex:'#cc2200',name:'Red'},{hex:'#333333',name:'Black'}] },
  { id:'rfn-ares-rs', img:'/images/product-rfn-ares-rs.jpg', desc:'The RFN Ares RS Endurance is the road-legal L1e model in the Ares range, with a 74V 4kW system designed for comfortable daily commuting with light off-road capability.', brand:'RFN', name:'Ares RS Endurance (L1e)', specs:['74V 4kW','Road legal L1e','Commuter'], price:'£4,295', tags:['rfn','adult','road'], badges:['road'], finance:'~£119/mo', color:'#ffaa00', colours:[{hex:'#ffaa00',name:'Amber'},{hex:'#333333',name:'Black'}] },
  { id:'rfn-warrior-sxe5', img:'/images/product-rfn-warrior-sxe5.jpg', desc:'The RFN Warrior Youth SX-E5 is a kids\' electric dirt bike aimed at 6-10 year olds, delivering a balanced mix of power and control to build young riders\' confidence off-road.', age:'Ages 6-10', brand:'RFN', name:'Warrior Youth SX-E5', specs:['Ages 6-10','Off-road','Kids MX'], price:'£1,995', tags:['rfn','kids','offroad'], badges:['stock'], finance:'~£55/mo', color:'#cc2200', colours:[{hex:'#cc2200',name:'Red'}] },
  { id:'rfn-warrior-sxe8', img:'/images/product-rfn-warrior-sxe8.jpg', desc:'The RFN Warrior Youth SX-E8 is a youth electric dirt bike for older kids, with more performance than the SX-E5 while keeping RFN\'s core safety technology.', age:'Ages 10-14', brand:'RFN', name:'Warrior Youth SX-E8', specs:['Youth','Off-road','Kids MX'], price:'£2,795', tags:['rfn','kids','offroad'], badges:['stock'], finance:'~£78/mo', color:'#cc2200', colours:[{hex:'#cc2200',name:'Red'}] },
  // ── Revvi (kids) ──
  { id:'revvi-12', img:'/images/product-revvi-12.jpg', desc:'The Revvi 12in is the UK\'s best-selling kids\' electric balance bike. At just 9kg with two speed settings, it lets children aged 2-6 learn balance then progress to throttle control.', age:'Ages 2-6', brand:'Revvi', name:'Revvi 12in Kids Electric Balance Bike', specs:['250W motor','Ages 2-6','9kg, 2 speeds'], price:'£325', tags:['revvi','kids','offroad'], badges:['stock'], finance:null, color:'#0088ff', colours:[{hex:'#0088ff',name:'Blue'},{hex:'#cc2200',name:'Red'},{hex:'#aaff00',name:'Green'}] },
  { id:'revvi-16', img:'/images/product-revvi-16.jpg', desc:'The Revvi 16in is a kids\' electric balance bike for ages 4-6, with a 250W motor, three speed settings and larger 16in wheels for a wider variety of terrain.', age:'Ages 4-6', brand:'Revvi', name:'Revvi 16in Kids Electric Balance Bike', specs:['250W motor','Ages 5+','3 speeds, 11kg'], price:'£449', tags:['revvi','kids','offroad'], badges:['stock'], finance:null, color:'#0088ff', colours:[{hex:'#0088ff',name:'Blue'},{hex:'#cc2200',name:'Red'},{hex:'#aaff00',name:'Green'}] },
  { id:'revvi-16-plus', img:'/images/product-revvi-16-plus.jpg', desc:'The Revvi 16in Plus adds front suspension forks, knobbly tyres and alloy rims to the popular 16in model, giving young riders genuine off-road capability on dirt tracks and pump tracks.', age:'Ages 6-8', brand:'Revvi', name:'Revvi 16in Plus Kids Electric Balance Bike', specs:['250W motor','Front suspension','Knobbly tyres'], price:'£559', tags:['revvi','kids','offroad'], badges:['stock'], finance:null, color:'#0088ff', colours:[{hex:'#0088ff',name:'Blue'},{hex:'#aaff00',name:'Green'},{hex:'#ff6600',name:'Orange'}] },
  { id:'revvi-18', img:'/images/product-revvi-18.jpg', desc:'The Revvi 18in is a popular step-up electric dirt bike for kids aged 8-12, reaching up to 20mph with hydraulic disc brakes and a lightweight aluminium frame.', age:'Ages 8-12', brand:'Revvi', name:'Revvi 18in Kids Electric Bike', specs:['Ages 8-12','20mph','Hydraulic discs'], price:'£849', tags:['revvi','kids','offroad'], badges:['stock'], finance:'~£24/mo', color:'#0088ff', colours:[{hex:'#0088ff',name:'Blue'},{hex:'#333333',name:'Black'}] },
  { id:'revvi-20', img:'/images/product-revvi-20.jpg', desc:'The Revvi 20in is the top of the Revvi range for riders aged 10+, with an 800W motor, three speeds up to 22mph and full suspension for a genuine mini dirt bike experience.', age:'Ages 10+', brand:'Revvi', name:'Revvi 20in Kids Electric Bike', specs:['Ages 10+','22mph, 800W','Full suspension'], price:'£1,099', tags:['revvi','kids','offroad'], badges:['stock'], finance:'~£31/mo', color:'#0088ff', colours:[{hex:'#0088ff',name:'Blue'},{hex:'#333333',name:'Black'},{hex:'#aaff00',name:'Green'}] },
  // ── FunBikes (kids) ──
  { id:'funbikes-mx350', img:'/images/product-funbikes-mx350.jpg', desc:'The FunBikes MX350 is a 350W, 36V kids\' electric dirt bike with a lithium battery — an affordable, fun entry point for younger off-road riders.', age:'Ages 4-8', brand:'FunBikes', name:'MX350 350W Kids Electric Dirt Bike', specs:['350W','36V','Lithium battery'], price:'£325', tags:['funbikes','kids','offroad'], badges:['stock'], finance:null, color:'#cc2200', colours:[{hex:'#cc2200',name:'Red'}] },
  { id:'funbikes-790', img:'/images/product-funbikes-790.jpg', desc:'The FunBikes MXR 790W is a kids\' electric dirt bike for ages 6-10, reaching up to 15mph with an adjustable speed limiter so parents can match the power to the child.', age:'Ages 6-10', brand:'FunBikes', name:'MXR 790W – Ages 6–10', specs:['790W','15mph','Adjustable limiter'], price:'£435', tags:['funbikes','kids','offroad'], badges:['sale','stock'], finance:null, color:'#cc2200', colours:[{hex:'#cc2200',name:'Red'},{hex:'#0088ff',name:'Blue'},{hex:'#aaff00',name:'Green'}] },
  { id:'funbikes-1400', img:'/images/product-funbikes-1400.jpg', desc:'The FunBikes MXR 1400W is a kids\' electric dirt bike for ages 10-14, with 1400W of power, up to 20mph and an adjustable speed limiter.', age:'Ages 10-14', brand:'FunBikes', name:'MXR 1400W – Ages 10–14', specs:['1400W','20mph','Adjustable limiter'], price:'£799', tags:['funbikes','kids','offroad'], badges:['stock'], finance:'~£22/mo', color:'#cc2200', colours:[{hex:'#cc2200',name:'Red'},{hex:'#0088ff',name:'Blue'}] },
  { id:'funbikes-1800', img:'/images/product-funbikes-1800.jpg', desc:'The FunBikes MXR 1800W is the most powerful bike in the MXR range, with 1800W, up to 25mph and a lithium battery — built for older, more confident young riders.', age:'Ages 12+', brand:'FunBikes', name:'MXR 1800W 2025', specs:['1800W','25mph','Lithium battery'], price:'£995', tags:['funbikes','kids','offroad'], badges:['new','stock'], finance:'~£28/mo', color:'#cc2200', colours:[{hex:'#cc2200',name:'Red'},{hex:'#ff6600',name:'Orange'},{hex:'#333333',name:'Black'}] },
  // ── Razor (kids) ──
  { id:'razor-mx350', img:'/images/product-razor-mx350.jpg', desc:'The Razor MX350 Dirt Rocket is a well-known, affordable kids\' electric dirt bike reaching up to 14mph, with a steel frame and authentic off-road styling.', age:'Ages 13+', brand:'Razor', name:'MX350 Dirt Rocket', specs:['Up to 14mph','Steel frame','Ages 13+'], price:'£325', tags:['razor','kids','offroad'], badges:['stock'], finance:null, color:'#cc2200', colours:[{hex:'#cc2200',name:'Red'}] },
  { id:'razor-mx400', img:'/images/product-razor-mx400.jpg', desc:'The Razor MX400 Dirt Rocket is a slightly larger kids\' electric dirt bike than the MX350, with a steel frame and up to 14mph for young off-road riders.', age:'Ages 13+', brand:'Razor', name:'MX400 Dirt Rocket', specs:['Up to 14mph','Steel frame','Ages 13+'], price:'£399', tags:['razor','kids','offroad'], badges:['stock'], finance:null, color:'#cc2200', colours:[{hex:'#cc2200',name:'Red'}] },
];

const quads = [
  // ── Segway Powersports ──
  { id:'segway-snarler', img:'/images/product-segway-snarler.jpg', desc:'The Segway Snarler ATV6 is an electric utility quad with 30kW of power and around 50mph, combining Segway-Ninebot engineering with all-terrain capability.', brand:'Segway', name:'Snarler ATV6 Electric', specs:['30kW','50mph','Utility ATV'], price:'£6,999', tags:['segway','adult','utility'], badges:['new'], finance:'~£194/mo', color:'#aaff00', colours:[{hex:'#aaff00',name:'Green'},{hex:'#888888',name:'Grey'}] },
  // ── Eco Rider (adult / farm electric quads) ──
  { id:'ecorider-explorer-gt', img:'/images/product-ecorider-explorer-gt.jpg', desc:'The Eco Rider Explorer GT is a UK-made adult electric quad with 4-wheel direct drive, a 3000W brushless motor and around 70km of range — built for farms, estates and utility work.', brand:'Eco Rider', name:'Explorer GT Electric Quad', specs:['4-wheel drive','3000W brushless','70km range'], price:'£5,054', tags:['ecorider','adult','utility'], badges:['stock'], finance:'~£140/mo', color:'#aaff00', colours:[{hex:'#aaff00',name:'Green'},{hex:'#333333',name:'Black'}] },
  { id:'ecorider-explorer', img:'/images/product-ecorider-explorer.jpg', desc:'The Eco Rider Explorer is a 2100W brushless electric utility quad with a tow ball and front winch, offering 40-50km of range for silent, low-maintenance estate and farm work.', brand:'Eco Rider', name:'Explorer 2100W Electric Quad', specs:['2100W brushless','Tow ball + winch','40-50km range'], price:'£4,295', tags:['ecorider','adult','utility'], badges:['stock'], finance:'~£119/mo', color:'#aaff00', colours:[{hex:'#aaff00',name:'Green'},{hex:'#888888',name:'Grey'}] },
  { id:'ecorider-shredder', img:'/images/product-ecorider-shredder.jpg', desc:'The Eco Rider Shredder is the sport-focused model in the Eco Rider electric quad range, built for off-road fun with zero emissions and near-silent running.', brand:'Eco Rider', name:'Shredder Electric Sport Quad', specs:['Sport quad','Off-road','Electric'], price:'£3,995', tags:['ecorider','adult','utility'], badges:['stock'], finance:'~£111/mo', color:'#aaff00', colours:[{hex:'#aaff00',name:'Green'},{hex:'#cc2200',name:'Red'}] },
  // ── Segway kids ──
  { id:'segway-kids-quad', img:'/images/product-segway-kids-quad.jpg', desc:'The Segway Junior Electric Quad is a youth-sized electric ATV with a speed limiter, bringing Segway engineering to younger riders for safe off-road fun.', age:'Ages 8-14', brand:'Segway', name:'Segway Junior Electric Quad', specs:['Youth ATV','Speed limiter','Electric'], price:'£1,499', tags:['segway','kids'], badges:['stock'], finance:null, color:'#aaff00', colours:[{hex:'#aaff00',name:'Green'},{hex:'#333333',name:'Black'}] },
  // ── FunBikes (kids quads) ──
  { id:'funbikes-quad-500', img:'/images/product-funbikes-quad-500.jpg', desc:'The FunBikes Kids Quad 500W is an electric quad bike for children aged 6-12, reaching up to 10mph with an adjustable speed limiter.', age:'Ages 6-12', brand:'FunBikes', name:'Kids Quad 500W – Ages 6–12', specs:['500W','10mph','Adjustable limiter'], price:'£499', tags:['funbikes','kids'], badges:['stock'], finance:null, color:'#cc2200', colours:[{hex:'#cc2200',name:'Red'},{hex:'#0088ff',name:'Blue'},{hex:'#ffaa00',name:'Yellow'}] },
  { id:'funbikes-quad-1000', img:'/images/product-funbikes-quad-1000.jpg', desc:'The FunBikes Kids Quad 1000W is an electric quad for ages 10+, with 1000W of power, up to 18mph and a lithium battery.', age:'Ages 10+', brand:'FunBikes', name:'Kids Quad 1000W – Ages 10+', specs:['1000W','18mph','Lithium battery'], price:'£699', tags:['funbikes','kids'], badges:['stock'], finance:'~£19/mo', color:'#cc2200', colours:[{hex:'#cc2200',name:'Red'},{hex:'#333333',name:'Black'}] },
  { id:'funbikes-quad-1500', img:'/images/product-funbikes-quad-1500.jpg', desc:'The FunBikes Kids Quad 1500W is the most powerful kids\' quad in the FunBikes range, built for teenage riders with an adjustable speed limiter and lithium battery.', age:'Ages 12+', brand:'FunBikes', name:'Kids Quad 1500W – Teens', specs:['1500W','Adjustable limiter','Lithium battery'], price:'£899', tags:['funbikes','kids'], badges:['stock'], finance:'~£25/mo', color:'#cc2200', colours:[{hex:'#cc2200',name:'Red'},{hex:'#0088ff',name:'Blue'}] },
  // ── Razor (kids quad) ──
  { id:'razor-quad', img:'/images/product-razor-quad.jpg', desc:'The Razor Dirt Quad is a kids\' electric ATV with 350W of power and up to 8mph, designed for off-road fun for children aged 8 and over.', age:'Ages 8+', brand:'Razor', name:'Razor Dirt Quad – Kids Electric ATV', specs:['350W','Up to 8mph','Ages 8+'], price:'£399', tags:['razor','kids'], badges:['stock'], finance:null, color:'#cc2200', colours:[{hex:'#cc2200',name:'Red'}] },
];

const BLOG_POSTS = [
  {slug:"are-sur-rons-legal-uk", title:"Are Sur-Rons Legal in the UK? Full 2026 Guide", h1:"Are Sur-Rons Legal in the UK?", kw:"are surrons legal in the uk", desc:"Are Sur-Rons legal in the UK? Only the L1e Light Bee road legal model is. Full guide to UK Sur-Ron law, private land use and what you need to ride legally.", cat:"Legal & Riding", read:"6 min read", date:"2026-01-15", hdrEmoji:"⚖️", hdrColor:"#aaff00", body:"<p class=\"lead\">The short answer: <strong>most Sur-Rons sold in the UK are not road legal</strong> — but one is. The standard Sur-Ron Light Bee X and Ultra Bee are off-road, private-land machines, while the Sur-Ron Light Bee L1e is a type-approved, road-legal version you can ride on UK roads with the right licence.</p>\n\n<h2>Are Sur-Rons road legal in the UK?</h2>\n<p>Out of the box, a standard Sur-Ron Light Bee X, Ultra Bee, Storm Bee or Hyper Bee is <strong>not</strong> road legal in the UK. They do not come with European Whole Vehicle Type Approval (eWVTA), they cannot be registered with the DVLA, and they have no number plate, mirrors, horn or DVLA-compliant lighting. Riding one on a public road, pavement, cycle path or bridleway is illegal and can result in a fine, points and the bike being seized.</p>\n<p>The exception is the <a href=\"/product/lbx-road\" data-route=\"product:lbx-road\">Sur-Ron Light Bee L1e</a> — a homologated version restricted to 28mph that meets the L1e moped category and can be registered, plated and ridden on UK roads.</p>\n\n<h2>Where can you legally ride a Sur-Ron in the UK?</h2>\n<p>A non-road-legal Sur-Ron is fine to ride on:</p>\n<ul>\n<li><strong>Private land</strong> — your own property, or someone else's land with the owner's explicit permission. This includes private MX tracks and pay-to-ride trail centres.</li>\n<li><strong>Designated motocross tracks</strong> that allow electric bikes.</li>\n<li><strong>Private estates</strong>, farms or industrial sites with permission.</li>\n</ul>\n<p>It is <strong>not</strong> legal to ride on bridleways, byways, footpaths, public parks, common land, or any road — including quiet country lanes. The Road Traffic Act treats a Sur-Ron the same as any unregistered motorcycle.</p>\n\n<h2>What about the Sur-Ron L1e?</h2>\n<p>The L1e road legal version is type-approved as a moped equivalent. To ride it on UK roads legally you need a CBT (Compulsory Basic Training) certificate, a valid provisional or full driving licence, insurance, road tax (free for electric), an MOT once it is three years old, and a helmet. You also need to display L plates if you only have a CBT.</p>\n\n<h2>What happens if you get caught riding a Sur-Ron on the road?</h2>\n<p>Police can — and routinely do — seize unregistered electric motorcycles being ridden illegally. Expect a fixed-penalty fine, six points on your licence if you have one (or a future one), and a recovery and storage bill to get the bike back. Repeat offences can lead to the bike being crushed.</p>\n\n<h2>Can you convert a Sur-Ron to road legal?</h2>\n<p>Not realistically. A retrofit conversion would need full type approval as an Individual Vehicle Approval (IVA) submission to the DVSA, which is expensive, slow and often fails. The practical route is to buy the factory-approved <a href=\"/product/lbx-road\" data-route=\"product:lbx-road\">Light Bee L1e</a> instead.</p>\n\n<h2>The bottom line</h2>\n<p>Sur-Rons are legal to own in the UK. They are legal to ride on private land with permission. They are not legal to ride on roads or public rights of way unless you have the L1e road-legal model and a valid licence and CBT.</p>\n<p>Browse the road-legal range on our <a href=\"/road-legal-electric-bikes\" data-route=\"road-legal\">road legal electric dirt bikes</a> page, or see the full <a href=\"/brands/surron\" data-route=\"brand-surron\">Sur-Ron lineup</a>.</p>", faq:[["Are Sur-Rons road legal in the UK?", "Only the Sur-Ron Light Bee L1e is road legal in the UK. The standard Light Bee X, Ultra Bee, Storm Bee and Hyper Bee are off-road models only."], ["Do I need insurance for a Sur-Ron?", "Not for off-road use on private land. You do need insurance, a CBT, a licence and a number plate for the road-legal L1e model."], ["Can I ride a Sur-Ron on a bridleway?", "No. Bridleways are restricted to walkers, horse riders and pedal cyclists. Riding a motorised vehicle on a bridleway is illegal."], ["What licence do I need for the Sur-Ron L1e?", "A provisional or full UK driving licence plus a valid CBT certificate is the minimum. You also need L plates if you only have a CBT."]], rel:["lbx", "lbx-road", "ultra-bee"]},
  {slug:"surron-vs-talaria", title:"Sur-Ron vs Talaria: Which Should You Buy in the UK?", h1:"Sur-Ron vs Talaria: Which Should You Buy?", kw:"surron vs talaria", desc:"Sur-Ron vs Talaria: full comparison of the two best-selling electric dirt bike brands in the UK. Top speed, price, build quality and which is right for you.", cat:"Buying Guides", read:"8 min read", date:"2026-02-02", hdrEmoji:"⚡", hdrColor:"#aaff00", body:"<p class=\"lead\">If you are buying your first eMoto-class electric dirt bike, the choice almost always comes down to Sur-Ron or Talaria. Both build pit-bike-sized electric dirt bikes around similar designs at similar prices — but they handle differently, sell at different price points and have different strengths.</p>\n\n<h2>Sur-Ron at a glance</h2>\n<p>Sur-Ron is the original eMoto and the brand that defined the category. The <a href=\"/product/lbx\" data-route=\"product:lbx\">Light Bee X</a> is the UK's best-selling electric dirt bike — established, well-supported and with the strongest parts and aftermarket ecosystem of any electric dirt bike brand. Top speed is around 45mph for the Light Bee X, 55mph for the larger <a href=\"/product/ultra-bee\" data-route=\"product:ultra-bee\">Ultra Bee</a>.</p>\n\n<h2>Talaria at a glance</h2>\n<p>Talaria arrived as a Sur-Ron alternative and quickly built a reputation for slightly punchier delivery and more aggressive styling. The <a href=\"/product/talaria-sting-r\" data-route=\"product:talaria-sting-r\">Talaria Sting R MX4</a> is the Sur-Ron Light Bee's direct competitor, with around 53mph top speed and a 60V 45Ah pack. The <a href=\"/product/talaria-mx5\" data-route=\"product:talaria-mx5\">Sting MX5 Pro</a> moves up to a 72V system.</p>\n\n<h2>Sur-Ron vs Talaria: head-to-head</h2>\n\n<h3>Performance</h3>\n<p>The Sting R is slightly faster than the Light Bee X on paper (around 53mph vs 45mph) and many riders describe it as feeling punchier off the line. The Sur-Ron Ultra Bee answers back at 55mph. Both brands cap top speed primarily through gearing and software, not raw motor power.</p>\n\n<h3>Build quality and components</h3>\n<p>Sur-Ron generally uses slightly better stock suspension and brakes, particularly on the Light Bee X. Talaria has closed the gap on recent models. Both are well-engineered for the price.</p>\n\n<h3>Price</h3>\n<p>Pricing is close. Talaria tends to undercut Sur-Ron slightly at like-for-like spec.</p>\n\n<h3>Aftermarket and parts</h3>\n<p>Sur-Ron wins here clearly. The aftermarket parts and upgrade ecosystem for the Light Bee X is enormous — chains, sprockets, controllers, batteries, suspension upgrades, lighting kits, road-legal kits. Talaria's aftermarket is catching up but smaller.</p>\n\n<h3>Resale value</h3>\n<p>Both hold value well; Sur-Ron has a slight edge on the second-hand market thanks to the larger installed base.</p>\n\n<h2>Which should you buy?</h2>\n<ul>\n<li><strong>Buy a Sur-Ron if</strong> you want the established platform, the biggest parts ecosystem, the strongest resale value, and you don't mind paying a small premium.</li>\n<li><strong>Buy a Talaria if</strong> you want a slightly punchier feel, more aggressive styling and a slight price advantage. The Sting MX5 Pro is also worth a look if you want a 72V system at this size.</li>\n</ul>\n\n<h2>Both brands on VoltTrail</h2>\n<p>See the full <a href=\"/brands/surron\" data-route=\"brand-surron\">Sur-Ron range</a> and <a href=\"/brands/talaria\" data-route=\"brand-talaria\">Talaria range</a>. All bikes ship with free UK mainland delivery and the option to pay in 4 interest-free instalments.</p>", faq:[["Is a Sur-Ron faster than a Talaria?", "Not in entry-level form. The Talaria Sting R is around 53mph; the Sur-Ron Light Bee X is around 45mph. But the Sur-Ron Ultra Bee reaches around 55mph and the Storm Bee 68mph."], ["Is a Talaria cheaper than a Sur-Ron?", "Generally yes, by a small margin at like-for-like spec."], ["Which has better parts support?", "Sur-Ron, by a clear margin. The Light Bee X has the largest aftermarket of any electric dirt bike in production."], ["Which should I buy as my first electric dirt bike?", "Either is a good first eMoto. If you want maximum parts choice and resale value, buy a Sur-Ron Light Bee X. If you want a slightly punchier feel for slightly less money, buy a Talaria Sting R."]], rel:["lbx", "talaria-sting-r", "ultra-bee"]},
  {slug:"best-electric-dirt-bikes-adults-uk", title:"Best Electric Dirt Bikes for Adults UK 2026", h1:"Best Electric Dirt Bikes for Adults UK 2026", kw:"electric dirt bike for adults", desc:"The best electric dirt bikes for adults in the UK for 2026: Sur-Ron, Talaria, Stark Varg, E Ride Pro and RFN. Full comparison by price, top speed and use case.", cat:"Buying Guides", read:"9 min read", date:"2026-02-13", hdrEmoji:"🏁", hdrColor:"#aaff00", body:"<p class=\"lead\">The adult electric dirt bike market splits into two clear tiers: the eMoto class (pit-bike-sized, ~45-55mph, accessible price) and the full-size electric motocross class (450-equivalent power, race-spec components, premium price). Here are the best options in each.</p>\n\n<h2>eMoto-class: the volume sellers</h2>\n\n<h3>Sur-Ron Light Bee X</h3>\n<p>The <a href=\"/product/lbx\" data-route=\"product:lbx\">Sur-Ron Light Bee X</a> remains the UK's best-selling adult electric dirt bike. Around 45mph top speed, 47-mile range, the strongest aftermarket of any electric dirt bike, and proven build quality. The default first-eMoto choice.</p>\n\n<h3>Sur-Ron Ultra Bee MX</h3>\n<p>The <a href=\"/product/ultra-bee\" data-route=\"product:ultra-bee\">Sur-Ron Ultra Bee</a> is the step-up — bigger 19\" wheels, more power, around 55mph, and a much more MX-style ride than the Light Bee. The natural progression for riders who outgrow the Light Bee X.</p>\n\n<h3>Talaria Sting R MX4</h3>\n<p>The <a href=\"/product/talaria-sting-r\" data-route=\"product:talaria-sting-r\">Talaria Sting R</a> is the most direct Sur-Ron alternative. 60V 45Ah pack, around 53mph, punchier delivery than the Light Bee. Slightly cheaper at like-for-like spec.</p>\n\n<h3>Talaria MX5 Pro / Komodo</h3>\n<p>The <a href=\"/product/talaria-mx5\" data-route=\"product:talaria-mx5\">Talaria Sting MX5 Pro</a> moves to a 72V system for more power. The Komodo is Talaria's biggest model with around 66mph and a 70-mile range.</p>\n\n<h3>E Ride Pro SS 2.0</h3>\n<p>The <a href=\"/product/eride-ss\" data-route=\"product:eride-ss\">E Ride Pro SS 2.0</a> punches above its price with 12kW peak and around 56mph. A good value alternative to the Sur-Ron Ultra Bee.</p>\n\n<h3>RFN Ares Rally</h3>\n<p>The <a href=\"/product/rfn-ares-rally\" data-route=\"product:rfn-ares-rally\">RFN Ares Rally</a> brings a different design with 200mm of suspension travel and convertible enduro/trail geometry.</p>\n\n<h2>Full-size MX class</h2>\n\n<h3>Stark Varg MX 1.2</h3>\n<p>The <a href=\"/product/stark-mx\" data-route=\"product:stark-mx\">Stark Varg</a> is the most powerful production electric motocross bike — up to 80hp, 6.5kWh battery, fully race-spec. The Varg matches or exceeds a 450cc petrol bike on paper and is the choice for serious MX riders who want to go electric.</p>\n\n<h3>Stark Varg EX (road legal)</h3>\n<p>The <a href=\"/product/stark-ex\" data-route=\"product:stark-ex\">Varg EX</a> is the road-legal Varg, type-approved with an 18\" rear wheel set up for enduro use.</p>\n\n<h3>Sur-Ron Storm Bee</h3>\n<p>The <a href=\"/product/storm-bee\" data-route=\"product:storm-bee\">Sur-Ron Storm Bee</a> is Sur-Ron's full-size electric motocross bike — around 68mph, 21.5kW peak, 60-mile range. Less power than a Varg, more competitive on price.</p>\n\n<h2>Road legal options</h2>\n<p>If you need to ride on UK roads, the road-legal options are the <a href=\"/product/lbx-road\" data-route=\"product:lbx-road\">Sur-Ron Light Bee L1e</a>, <a href=\"/product/talaria-sting-road\" data-route=\"product:talaria-sting-road\">Talaria Sting L1e</a>, <a href=\"/product/rfn-ares-rs\" data-route=\"product:rfn-ares-rs\">RFN Ares RS</a> and Stark Varg EX. The L1e bikes are restricted to 28mph; the Varg EX is not restricted but needs a full motorcycle licence path.</p>\n\n<h2>How to choose</h2>\n<ul>\n<li><strong>First electric dirt bike, want maximum support:</strong> Sur-Ron Light Bee X</li>\n<li><strong>First electric dirt bike, want better value:</strong> Talaria Sting R or E Ride Pro</li>\n<li><strong>Step up from a Light Bee:</strong> Sur-Ron Ultra Bee or Talaria MX5 Pro</li>\n<li><strong>Race motocross:</strong> Stark Varg MX or Sur-Ron Storm Bee</li>\n<li><strong>Road legal:</strong> Sur-Ron Light Bee L1e or Talaria Sting L1e</li>\n</ul>\n<p>See the full <a href=\"/electric-dirt-bikes/adult\" data-route=\"adult-bikes\">adult electric dirt bikes range</a>.</p>", faq:[["What is the best electric dirt bike for adults in the UK?", "For most adult riders the Sur-Ron Light Bee X is the best all-round choice. For more performance, the Sur-Ron Ultra Bee, Talaria MX5 Pro or Stark Varg MX are the leading step-ups."], ["How fast is the fastest electric dirt bike?", "The Stark Varg MX is the most powerful with up to 80hp and a top speed in the 60–75mph range depending on gearing."], ["What is the cheapest adult electric dirt bike?", "The Sur-Ron Light Bee X and Talaria Sting R sit at the entry point of the adult eMoto class. The E Ride Pro S undercuts both."], ["Are adult electric dirt bikes worth it?", "For off-road riding they are — silent operation, near-zero maintenance vs petrol, instant torque and lower running costs."]], rel:["lbx", "ultra-bee", "stark-mx"]},
  {slug:"best-kids-electric-dirt-bikes-uk", title:"Best Kids Electric Dirt Bikes UK 2026", h1:"Best Kids Electric Dirt Bikes UK 2026", kw:"kids electric dirt bike", desc:"The best kids electric dirt bikes in the UK for 2026: Revvi, KTM SX-E, FunBikes MXR, Sur-Ron Hyper Bee and Razor. Full comparison by age and price.", cat:"Buying Guides", read:"8 min read", date:"2026-02-10", hdrEmoji:"🧒", hdrColor:"#0088ff", body:"<p class=\"lead\">The kids electric dirt bike market in the UK has expanded fast — from balance-bike-style starters at age 3 right up to youth motocross machines for teens. This guide groups the best options by age and budget.</p>\n\n<h2>Ages 2-6: Balance bikes and starters</h2>\n<p>For the youngest riders, the <a href=\"/product/revvi-12\" data-route=\"product:revvi-12\">Revvi 12in</a> is the UK's best-selling kids electric balance bike. At 9kg with two speed settings, it lets a child learn balance first, then progress to throttle control. The <a href=\"/product/revvi-16\" data-route=\"product:revvi-16\">Revvi 16in</a> steps up for slightly older or larger children.</p>\n\n<h2>Ages 6-10: First proper electric dirt bike</h2>\n<p>This is the most competitive age bracket:</p>\n<ul>\n<li><a href=\"/product/revvi-16-plus\" data-route=\"product:revvi-16-plus\">Revvi 16in Plus</a> — adds front suspension and knobbly tyres to the popular 16in.</li>\n<li><a href=\"/product/ktm-sxe3\" data-route=\"product:ktm-sxe3\">KTM SX-E 3</a> — the KTM youth motocross bike with a 648Wh battery and six ride modes.</li>\n<li><a href=\"/product/funbikes-790\" data-route=\"product:funbikes-790\">FunBikes MXR 790W</a> — the budget option with an adjustable speed limiter.</li>\n<li><a href=\"/product/rfn-warrior-sxe5\" data-route=\"product:rfn-warrior-sxe5\">RFN Warrior Youth SX-E5</a> — a value alternative to the KTM SX-E 3.</li>\n</ul>\n\n<h2>Ages 8-12: Stepping up</h2>\n<ul>\n<li><a href=\"/product/revvi-18\" data-route=\"product:revvi-18\">Revvi 18in</a> — up to 20mph with hydraulic disc brakes.</li>\n<li><a href=\"/product/ktm-sxe5\" data-route=\"product:ktm-sxe5\">KTM SX-E 5</a> — the KTM youth flagship, with a 907Wh battery and adjustable WP Xact suspension.</li>\n<li><a href=\"/product/funbikes-1400\" data-route=\"product:funbikes-1400\">FunBikes MXR 1400W</a> — 1400W with an adjustable speed limiter, up to 20mph.</li>\n</ul>\n\n<h2>Ages 10+: Teens and bigger riders</h2>\n<ul>\n<li><a href=\"/product/revvi-20\" data-route=\"product:revvi-20\">Revvi 20in</a> — 800W, up to 22mph, full suspension.</li>\n<li><a href=\"/product/hyper-bee\" data-route=\"product:hyper-bee\">Sur-Ron Hyper Bee</a> — Sur-Ron's youth/pit-bike model, around 47mph in top mode.</li>\n<li><a href=\"/product/funbikes-1800\" data-route=\"product:funbikes-1800\">FunBikes MXR 1800W</a> — the most powerful in the MXR range at 1800W, 25mph.</li>\n<li><a href=\"/product/rfn-warrior-sxe8\" data-route=\"product:rfn-warrior-sxe8\">RFN Warrior Youth SX-E8</a> — a larger youth bike step-up from the SX-E5.</li>\n</ul>\n\n<h2>What about Razor?</h2>\n<p>The <a href=\"/product/razor-mx350\" data-route=\"product:razor-mx350\">Razor MX350</a> and MX400 are well-known affordable starters for ages 13+ at around 14mph. They use a SLA battery rather than lithium, which makes them cheap but heavier and shorter-range than the alternatives above.</p>\n\n<h2>How to choose</h2>\n<p>Start with rider age and size, then think about how serious the child is about MX. A casual play bike for the garden suits a Revvi or FunBikes. A child who is going to race or ride proper tracks is better served by a KTM SX-E or RFN Warrior. Almost every kids bike on our site has an adjustable speed limiter so parents can dial in the power.</p>\n<p>See the full <a href=\"/kids-electric-dirt-bikes\" data-route=\"kids-bikes\">kids electric dirt bikes range</a>.</p>", faq:[["What is the best electric dirt bike for a 6-year-old?", "The Revvi 16in or the KTM SX-E 3 are the strongest options for a 6-year-old, depending on budget."], ["What age is the Sur-Ron Hyper Bee for?", "The Hyper Bee suits older children and teens (roughly 8 years and up) under supervision on private land."], ["Are kids electric dirt bikes safe?", "They are safe when used on private land with appropriate gear and with the speed limiter set to match the child."], ["Can kids electric dirt bikes be used on the road?", "No. None of the kids electric dirt bikes on the UK market are road legal."]], rel:["revvi-18", "ktm-sxe5", "hyper-bee"]},
  {slug:"road-legal-electric-dirt-bikes-uk", title:"Road Legal Electric Dirt Bikes UK: Full 2026 Guide", h1:"Road Legal Electric Dirt Bikes UK", kw:"road legal electric dirt bike", desc:"Which electric dirt bikes are road legal in the UK? Full guide to type-approved L1e models: Sur-Ron Light Bee L1e, Talaria Sting L1e, RFN Ares RS, Stark Varg EX.", cat:"Legal & Riding", read:"7 min read", date:"2026-02-06", hdrEmoji:"🛣️", hdrColor:"#ffaa00", body:"<p class=\"lead\">A road-legal electric dirt bike is one that has been type-approved (homologated) so it can be registered with the DVLA, given a number plate and ridden on UK roads. Most electric dirt bikes are not road legal — but a handful of factory road-legal models are, and they are the only legal way to ride an eMoto on a public road in the UK.</p>\n\n<h2>What does road legal mean in the UK?</h2>\n<p>For UK road use, a motorcycle needs European Whole Vehicle Type Approval (eWVTA) under one of the L-categories. For electric dirt bikes the relevant category is <strong>L1e</strong> — restricted to 28mph (45km/h), treated as a moped equivalent, accessible with a CBT and a provisional licence. Some larger road-legal eMotos fall into L3e (full motorcycle category).</p>\n\n<h2>Road legal electric dirt bikes on VoltTrail</h2>\n\n<h3>Sur-Ron Light Bee L1e</h3>\n<p>The <a href=\"/product/lbx-road\" data-route=\"product:lbx-road\">Sur-Ron Light Bee L1e</a> is the road-legal version of the Light Bee X. Restricted to 28mph, fully homologated, requires CBT + provisional licence + insurance + L plates if on a CBT. This is the volume road-legal eMoto in the UK.</p>\n\n<h3>Talaria Sting L1e</h3>\n<p>The <a href=\"/product/talaria-sting-road\" data-route=\"product:talaria-sting-road\">Talaria Sting L1e</a> is the road-legal Sting. Same 28mph restriction, same licence requirements. A natural Sur-Ron alternative for road riders.</p>\n\n<h3>RFN Ares RS Endurance</h3>\n<p>The <a href=\"/product/rfn-ares-rs\" data-route=\"product:rfn-ares-rs\">RFN Ares RS Endurance</a> is the L1e model in the RFN range, with a 74V 4kW system designed for daily commuting.</p>\n\n<h3>Stark Varg EX</h3>\n<p>The <a href=\"/product/stark-ex\" data-route=\"product:stark-ex\">Stark Varg EX</a> is at the other end of the spectrum — a road-legal version of the 80hp Varg with an 18\" rear wheel. This is L3e-class and requires the full motorcycle licence path, not just a CBT.</p>\n\n<h2>What do you need to ride one on UK roads?</h2>\n<ul>\n<li><strong>CBT certificate</strong> for L1e moped-class bikes</li>\n<li><strong>Provisional or full UK driving licence</strong></li>\n<li><strong>Insurance</strong> — third party minimum, fully comp recommended</li>\n<li><strong>DVLA registration and number plate</strong> (we handle this on supply)</li>\n<li><strong>Vehicle tax</strong> — currently £0 for fully electric vehicles</li>\n<li><strong>L plates</strong> if you are riding on a CBT</li>\n<li><strong>Approved helmet</strong> and (recommended) proper riding gear</li>\n</ul>\n\n<h2>How fast does a road-legal electric dirt bike go?</h2>\n<p>L1e is restricted to 28mph by law. L3e bikes like the Stark Varg EX are not speed-restricted, but the licence requirement is higher.</p>\n\n<h2>Where to buy a road-legal electric dirt bike in the UK</h2>\n<p>VoltTrail stocks every road-legal model above. All ship with free UK mainland delivery and the option to pay in 4 interest-free instalments. The road-legal models are flagged with a \"Road Legal\" badge throughout the site. See the <a href=\"/road-legal-electric-bikes\" data-route=\"road-legal\">road legal range</a>.</p>", faq:[["Which electric dirt bikes are road legal in the UK?", "The Sur-Ron Light Bee L1e, Talaria Sting L1e, RFN Ares RS Endurance and Stark Varg EX are road-legal in the UK. All other Sur-Rons, Talarias and Stark Vargs are off-road only."], ["How fast is a road-legal electric dirt bike?", "L1e-category road-legal electric dirt bikes are restricted to 28mph (45km/h) by law. L3e bikes like the Stark Varg EX are not restricted."], ["Do I need a CBT for a road-legal electric dirt bike?", "Yes, for L1e-class bikes a valid CBT is the minimum. For L3e you need the full motorcycle licence appropriate to the bike."], ["Is road tax free on electric dirt bikes?", "Yes, fully electric vehicles in the UK are currently zero-rated for vehicle excise duty."]], rel:["lbx-road", "talaria-sting-road", "stark-ex"]},
  {slug:"ktm-sxe-2-vs-3-vs-5", title:"KTM SX-E 2 vs SX-E 3 vs SX-E 5: Which Electric Youth Bike?", h1:"KTM SX-E 2 vs SX-E 3 vs SX-E 5 Compared", kw:"ktm electric dirt bike", desc:"KTM SX-E 2 vs SX-E 3 vs SX-E 5 compared by age, battery size, power and price. Full UK buying guide to choosing the right KTM electric youth motocross bike.", cat:"Buying Guides", read:"7 min read", date:"2026-03-25", hdrEmoji:"🏍️", hdrColor:"#ff6600", body:"<p class=\"lead\">KTM's SX-E range is the only factory electric youth motocross lineup in the UK, built by the same Austrian engineers behind KTM's full-size petrol bikes. Three models cover ages 4 to roughly 12 — here's how the SX-E 2, SX-E 3 and SX-E 5 differ, and which one fits your rider.</p>\n\n<h2>KTM SX-E 2: the entry point (ages 4-7)</h2>\n<p>The <a href=\"/product/ktm-sxe2\" data-route=\"product:ktm-sxe2\">KTM SX-E 2</a> bridges the gap between a balance bike and a proper electric motocross machine. It runs on 10in wheels with adjustable ergonomics so it grows with a young rider, and it's built to be the first electric motorcycle a 4-7 year old throws a leg over. Priced at £3,799, it's the most affordable bike in the SX-E range.</p>\n\n<h2>KTM SX-E 3: the mini-crosser (ages 6-9)</h2>\n<p>The <a href=\"/product/ktm-sxe3\" data-route=\"product:ktm-sxe3\">KTM SX-E 3</a> steps up to a 3.8kW motor and a 648Wh battery, with six selectable ride modes so parents can dial in how much power is available. At £4,399, it's aimed at kids who've outgrown a starter bike and want something closer to a real motocross experience, with proper suspension travel and motocross geometry.</p>\n\n<h2>KTM SX-E 5: the flagship (ages 8-12)</h2>\n<p>The <a href=\"/product/ktm-sxe5\" data-route=\"product:ktm-sxe5\">KTM SX-E 5</a> is the junior racer's bike. It carries a 5kW peak motor and a larger 907Wh battery for longer ride time, plus fully adjustable WP Xact suspension — the same suspension brand used on KTM's full-size race bikes. At £4,999, it's built for kids who are serious about racing, not just riding the garden.</p>\n\n<h2>SX-E 2 vs SX-E 3 vs SX-E 5: side by side</h2>\n<ul>\n<li><strong>SX-E 2</strong> — Ages 4-7 · 10in wheels · adjustable ergonomics · £3,799</li>\n<li><strong>SX-E 3</strong> — Ages 6-9 · 3.8kW motor · 648Wh battery · 6 ride modes · £4,399</li>\n<li><strong>SX-E 5</strong> — Ages 8-12 · 5kW peak · 907Wh battery · WP Xact suspension · £4,999</li>\n</ul>\n\n<h2>Can you upgrade between models?</h2>\n<p>Yes, partially. The SX-E 3's <a href=\"/product/bat-ktm-sxe3\" data-route=\"product:bat-ktm-sxe3\">648Wh battery</a> can be upgraded to the larger SX-E 5 pack for extra ride time without buying a whole new bike, which is a useful option if your child is growing into the SX-E 5's power band but isn't quite ready for the bigger machine. All three models share the same official <a href=\"/product/chg-ktm\" data-route=\"product:chg-ktm\">KTM 900W charger</a>, which charges the SX-E 5's pack from 0-80% in around 45 minutes.</p>\n\n<h2>Which KTM SX-E should you buy?</h2>\n<p>Go by age and ambition rather than budget alone. A genuinely young or first-time rider (4-7) should start on the SX-E 2. A 6-9 year old who's outgrown a starter bike and wants real motocross riding fits the SX-E 3. An 8-12 year old who's racing, or about to start, gets the most out of the SX-E 5's bigger battery and adjustable suspension.</p>\n\n<h2>Where to buy KTM SX-E bikes in the UK</h2>\n<p>VoltTrail stocks the full KTM SX-E range with free UK mainland delivery and the option to pay in 4 interest-free instalments. See the <a href=\"/brands/ktm\" data-route=\"brand-ktm\">full KTM SX-E lineup</a>, or browse our wider <a href=\"/kids-electric-dirt-bikes\" data-route=\"kids-bikes\">kids electric dirt bikes range</a> to compare against Revvi, FunBikes and RFN Warrior.</p>", faq:[["What age is the KTM SX-E 5 for?", "The KTM SX-E 5 is built for ages 8-12, with a 907Wh battery and adjustable WP Xact suspension for riders stepping up to junior racing."], ["Can the KTM SX-E 3 use the SX-E 5 battery?", "Yes, the SX-E 3's 648Wh pack can be upgraded to the larger 907Wh SX-E 5 battery for extra ride time."], ["How long does a KTM SX-E take to charge?", "The official 900W KTM charger takes the SX-E 5 from 0-80% in around 45 minutes, and works across the whole SX-E range."], ["What is the cheapest KTM electric dirt bike?", "The KTM SX-E 2 is the most affordable model at £3,799, designed for ages 4-7."]], rel:["ktm-sxe2", "ktm-sxe3", "ktm-sxe5"]},
  {slug:"talaria-x3-review", title:"Talaria X3 (XXX) Review: Price, Specs & What You Need to Know", h1:"Talaria X3 (XXX) Review", kw:"talaria x3", desc:"Talaria X3 (also known as the XXX) review: price, frame-battery design and how it compares to the Sting R. Full UK buying guide for the Talaria X3.", cat:"Buying Guides", read:"6 min read", date:"2026-04-22", hdrEmoji:"⚡", hdrColor:"#aaff00", body:"<p class=\"lead\">The Talaria X3 — also sold as the XXX — is the brand's distinctive frame-battery electric dirt bike, built around a 60V pack that spans the frame rather than sitting in a conventional battery box. Here's what it costs, how it's built, and how it compares to the rest of the Talaria range.</p>\n\n<h2>What is the Talaria X3 (XXX)?</h2>\n<p>The <a href=\"/product/talaria-x3\" data-route=\"product:talaria-x3\">Talaria X3</a> uses a 60V battery design that spans the chassis itself rather than bolting into a separate box, which keeps the bike's centre of gravity low and the chassis genuinely lightweight. The result is a bike Talaria pitches on agility and precise handling for off-road riding rather than outright power, and it sits at £3,235 — the most accessible entry point into the Talaria range.</p>\n\n<h2>Talaria X3 vs Talaria Sting R</h2>\n<p>The X3's closest sibling is the <a href=\"/product/talaria-sting-r\" data-route=\"product:talaria-sting-r\">Talaria Sting R MX4</a>, which uses a more conventional 60V 45Ah pack, an 8kW peak motor and sells for £3,735. The Sting R is the more powerful, more mainstream choice; the X3 trades some of that outright performance for a lighter, more agile chassis and a lower price. If raw power and top speed matter most, the Sting R is the safer pick. If you want the lightest, most flickable bike in the Talaria range at the lowest price, the X3 is the one to look at.</p>\n\n<h2>Battery and charging</h2>\n<p>The X3 shares its <a href=\"/product/bat-talaria-sting38\" data-route=\"product:bat-talaria-sting38\">60V 38Ah replacement battery</a> with the standard Talaria Sting and Sting L1e, which is good news for parts availability and long-term ownership — it's a common, well-stocked pack rather than a bike-specific one-off. The matching <a href=\"/product/chg-talaria-60v\" data-route=\"product:chg-talaria-60v\">official 60V charger</a> takes the Sting-class pack to a full charge in around 3 hours.</p>\n\n<h2>Is the Talaria X3 road legal?</h2>\n<p>No. Like the standard Sting, the X3 is an off-road, private-land machine only. If you need a road-legal Talaria, the <a href=\"/product/talaria-sting-road\" data-route=\"product:talaria-sting-road\">Talaria Sting L1e</a> is the type-approved option, restricted to 28mph and requiring a CBT, insurance and L-plates.</p>\n\n<h2>Should you buy a Talaria X3?</h2>\n<p>The X3 makes sense if you want the lightest, most agile bike in the Talaria lineup and don't need the Sting R's extra power, or if budget is the deciding factor and you want to stay inside the Talaria ecosystem rather than stepping down to a different brand. For riders prioritising top speed and torque, the Sting R or the 72V <a href=\"/product/talaria-mx5\" data-route=\"product:talaria-mx5\">Sting MX5 Pro</a> are the better fit.</p>\n\n<h2>Where to buy</h2>\n<p>VoltTrail stocks the Talaria X3 with free UK mainland delivery and the option to pay in 4 interest-free instalments. See the <a href=\"/brands/talaria\" data-route=\"brand-talaria\">full Talaria range</a>, or read our <a href=\"/blog/surron-vs-talaria\" data-route=\"blog:surron-vs-talaria\">Sur-Ron vs Talaria comparison</a> if you're still deciding between brands.</p>", faq:[["What is the Talaria X3 also known as?", "The Talaria X3 is also sold under the name XXX. They are the same bike."], ["How much does the Talaria X3 cost in the UK?", "The Talaria X3 is priced at £3,235, making it the most affordable model in the Talaria range."], ["Does the Talaria X3 share a battery with the Sting?", "Yes. The 60V 38Ah replacement battery fits the Talaria Sting, Sting L1e and X3, so parts and chargers are shared across the range."], ["Is the Talaria X3 road legal?", "No, the X3 is an off-road, private-land bike. The road-legal Talaria model is the Sting L1e."]], rel:["talaria-x3", "talaria-sting-r", "bat-talaria-sting38"]},
  {slug:"surron-ultra-bee-review", title:"Sur-Ron Ultra Bee Review: Price, Top Speed & Specs (2026)", h1:"Sur-Ron Ultra Bee Review: Price, Top Speed & Specs", kw:"surron ultra bee", desc:"Sur-Ron Ultra Bee review: price, top speed, range and how it compares to the Light Bee X and Storm Bee. Full UK buying guide for the Ultra Bee.", cat:"Buying Guides", read:"7 min read", date:"2026-05-18", hdrEmoji:"🐝", hdrColor:"#aaff00", body:"<p class=\"lead\">The Sur-Ron Ultra Bee is the natural step up from the Light Bee X — a bigger, more powerful eMoto for riders who've outgrown Sur-Ron's entry bike but aren't ready to jump to a full-size motocross machine. Here's the full breakdown of price, performance and how it stacks up.</p>\n\n<h2>Sur-Ron Ultra Bee specs at a glance</h2>\n<p>The <a href=\"/product/ultra-bee\" data-route=\"product:ultra-bee\">Sur-Ron Ultra Bee MX 2025</a> delivers 11kW of peak power, a top speed of around 55mph and up to 50 miles of range, built around bigger 19in wheels and a more MX-focused chassis than the Light Bee. It's priced at £4,999, split into 4 interest-free instalments of £1,249.75 through VoltTrail's Pay in 4 option.</p>\n\n<h2>Ultra Bee vs Light Bee X</h2>\n<p>The <a href=\"/product/lbx\" data-route=\"product:lbx\">Light Bee X</a> remains Sur-Ron's best-selling model at £3,199, with 6kW peak power, around 45mph and 47 miles of range — lighter, more agile and noticeably cheaper. The Ultra Bee almost doubles peak power, adds roughly 10mph of top speed and swaps to bigger wheels for a more confident ride at speed and over rougher terrain. If you've ridden a Light Bee X and want more of everything, the Ultra Bee is the obvious next step.</p>\n\n<h2>Ultra Bee vs Storm Bee</h2>\n<p>For riders who want to go further still, the <a href=\"/product/storm-bee\" data-route=\"product:storm-bee\">Sur-Ron Storm Bee</a> is the full-size option — 21.5kW peak, around 68mph and up to 60 miles of range at £7,999, pitched by Sur-Ron as a genuine 1:1 replacement for a 250-350cc petrol motocross bike. The Ultra Bee sits in between the Light Bee X and the Storm Bee on every metric, including price, which makes it the mid-range pick for riders who want a meaningful upgrade without the Storm Bee's full-size cost and weight.</p>\n\n<h2>Battery and charging</h2>\n<p>The Ultra Bee runs a <a href=\"/product/bat-surron-ultrabee\" data-route=\"product:bat-surron-ultrabee\">74V replacement battery</a> with 55-60Ah of capacity and a smart BMS, priced at £1,599 with a matching £129 fast charger — useful to know if you're budgeting for a long-term second battery or eventual replacement.</p>\n\n<h2>Is the Ultra Bee road legal?</h2>\n<p>No, the standard Ultra Bee is an off-road, private-land machine. If you need to ride on UK roads, the <a href=\"/product/lbx-road\" data-route=\"product:lbx-road\">Sur-Ron Light Bee L1e</a> is the type-approved option in the Sur-Ron range — see our <a href=\"/road-legal-electric-bikes\" data-route=\"road-legal\">road legal electric dirt bikes guide</a> for the full list.</p>\n\n<h2>Should you buy a Sur-Ron Ultra Bee?</h2>\n<p>The Ultra Bee suits riders who've outgrown a Light Bee X, or anyone buying their first eMoto who already knows they want more power and bigger wheels from day one. It keeps Sur-Ron's strong aftermarket and parts support while stepping up the performance meaningfully over the entry model.</p>\n\n<h2>Where to buy</h2>\n<p>VoltTrail stocks the Ultra Bee with free UK mainland delivery and the option to pay in 4 interest-free instalments. See the <a href=\"/brands/surron\" data-route=\"brand-surron\">full Sur-Ron range</a> or our <a href=\"/electric-dirt-bikes/adult\" data-route=\"adult-bikes\">adult electric dirt bikes</a> for the wider eMoto market.</p>", faq:[["How fast is the Sur-Ron Ultra Bee?", "The Sur-Ron Ultra Bee has a top speed of around 55mph, with 11kW of peak power."], ["How much does a Sur-Ron Ultra Bee cost?", "The Ultra Bee MX 2025 is priced at £4,999, split into 4 interest-free instalments of £1,249.75 with VoltTrail's Pay in 4 option."], ["What is the difference between the Ultra Bee and Light Bee X?", "The Ultra Bee has nearly double the peak power (11kW vs 6kW), bigger 19in wheels and around 10mph more top speed than the Light Bee X, at a higher price."], ["Is the Sur-Ron Ultra Bee road legal?", "No, the standard Ultra Bee is for off-road, private-land use only. The Sur-Ron Light Bee L1e is the road-legal model in the range."]], rel:["ultra-bee", "lbx", "storm-bee"]},
  {slug:"stark-varg-review-uk", title:"Stark Varg Review: Top Speed, Price & Is It Worth It? (2026)", h1:"Stark Varg Review: Top Speed, Price & Is It Worth It?", kw:"stark varg top speed", desc:"Stark Varg review: power, price and range for the Varg MX 1.2 and road-legal Varg EX. Is the world's most powerful electric motocross bike worth it?", cat:"Buying Guides", read:"8 min read", date:"2026-06-08", hdrEmoji:"🔥", hdrColor:"#aaff00", body:"<p class=\"lead\">The Stark Varg is the most powerful production electric motocross bike on sale, built to match or beat a 450cc petrol bike on paper. Here's what the MX 1.2 and road-legal Varg EX actually cost in the UK, what they offer, and whether the Varg lives up to the hype.</p>\n\n<h2>Stark Varg power and performance</h2>\n<p>The <a href=\"/product/stark-mx\" data-route=\"product:stark-mx\">Stark Varg MX 1.2</a> puts out 60kW — around 80HP — from a 7.2kWh battery, with KYB suspension and a chassis Stark says is lighter and around 20% longer-range than the original Varg. Stark doesn't publish a single official top speed figure, because actual speed depends heavily on gearing and track configuration, but with 80HP on tap the Varg comfortably matches or exceeds a 450cc petrol motocross bike's pace — that's the benchmark Stark itself targets.</p>\n\n<h2>How much does a Stark Varg cost?</h2>\n<p>The Varg MX 1.2 is priced at £10,490 in the UK, split into 4 interest-free instalments of £2,622.50 through Pay in 4. It's a premium price point reflecting the Varg's race-spec components and class-leading power output — this is not a budget eMoto, it's a genuine alternative to a 450 motocross bike.</p>\n\n<h2>Stark Varg EX: the road-legal version</h2>\n<p>The <a href=\"/product/stark-ex\" data-route=\"product:stark-ex\">Stark Varg EX</a> takes the same 80HP powertrain and adds UK road type-approval plus an 18in rear wheel set up for enduro use, at £11,290. Because it carries the Varg's full power output rather than a restricted moped-class motor, the EX falls into the L3e category and needs a full motorcycle licence — not just a CBT — to ride on UK roads. See our <a href=\"/road-legal-electric-bikes\" data-route=\"road-legal\">road legal electric dirt bikes guide</a> for the full licensing breakdown.</p>\n\n<h2>Battery: the \"Flying V\" pack</h2>\n<p>Stark's battery is housed in a patented honeycomb magnesium case nicknamed the \"Flying V,\" designed for cooling and a class-leading capacity-to-weight ratio. A genuine replacement pack is available from VoltTrail at £3,499, with the official 3.3kW fast charger delivering a full charge in under 2 hours.</p>\n\n<h2>Stark Varg vs Sur-Ron Storm Bee</h2>\n<p>The closest competitor on VoltTrail is the <a href=\"/product/storm-bee\" data-route=\"product:storm-bee\">Sur-Ron Storm Bee</a>, a full-size electric motocross bike at £7,999 with 21.5kW peak power and around 68mph top speed. The Storm Bee is significantly cheaper and more accessible, but the Varg's 80HP output puts it in a different performance class entirely — the Varg is built for riders who want genuine race-spec power and are prepared to pay for it.</p>\n\n<h2>Is the Stark Varg worth it?</h2>\n<p>For serious motocross riders looking to switch from a 450 petrol bike to electric without giving up performance, the Varg is the only production option that genuinely competes on power. For casual or first-time off-road riders, the price and power are overkill — a Light Bee X, Ultra Bee or Storm Bee will be easier and cheaper to live with.</p>\n\n<h2>Where to buy</h2>\n<p>VoltTrail stocks the full Stark Varg range with free UK mainland delivery and the option to pay in 4 interest-free instalments. See the <a href=\"/brands/stark-varg\" data-route=\"brand-stark\">full Stark Varg lineup</a>.</p>", faq:[["What is the top speed of the Stark Varg?", "Stark doesn't publish one official top speed figure because it depends on gearing and track setup, but with 80HP (60kW) on tap, the Varg matches or exceeds a 450cc petrol motocross bike's pace."], ["How much horsepower does the Stark Varg have?", "The Stark Varg produces up to 80HP (60kW) of peak power, making it the most powerful production electric motocross bike available."], ["How much does a Stark Varg cost in the UK?", "The Stark Varg MX 1.2 is £10,490 and the road-legal Varg EX is £11,290, both available via 4 interest-free instalments."], ["Is the Stark Varg EX road legal?", "Yes, the Varg EX is UK type-approved for road use with an 18in rear wheel, but it falls into the L3e category and requires a full motorcycle licence, not just a CBT."]], rel:["stark-mx", "stark-ex", "bat-stark-varg"]},
  {slug:"how-much-does-a-surron-cost-uk", title:"How Much Does a Sur-Ron Cost? UK Price Guide 2026", h1:"How Much Does a Sur-Ron Cost? UK Price Guide", kw:"surron price", desc:"How much does a Sur-Ron cost in the UK? Full 2026 price guide covering the Light Bee X, Light Bee L1e, Ultra Bee, Storm Bee and Hyper Bee, plus finance options.", cat:"Buying Guides", read:"6 min read", date:"2026-06-22", hdrEmoji:"💷", hdrColor:"#aaff00", body:"<p class=\"lead\">Sur-Ron prices in the UK range from just under £3,000 for the youth Hyper Bee to £7,999 for the full-size Storm Bee. Here's exactly what every model costs, what you get for the money, and how VoltTrail's interest-free finance breaks the cost down.</p>\n\n<h2>Sur-Ron price list (UK, 2026)</h2>\n<ul>\n<li><strong><a href=\"/product/hyper-bee\" data-route=\"product:hyper-bee\">Hyper Bee 2025</a></strong> (youth/pit bike, ages 8+) — £2,999</li>\n<li><strong><a href=\"/product/lbx\" data-route=\"product:lbx\">Light Bee X (LBX)</a></strong> (6kW, 45mph, 47mi range) — £3,199</li>\n<li><strong><a href=\"/product/lbx-road\" data-route=\"product:lbx-road\">Light Bee L1e</a></strong> (road-legal, 28mph restricted) — £3,499</li>\n<li><strong><a href=\"/product/ultra-bee\" data-route=\"product:ultra-bee\">Ultra Bee MX 2025</a></strong> (11kW, 55mph, 50mi range) — £4,999</li>\n<li><strong><a href=\"/product/storm-bee\" data-route=\"product:storm-bee\">Storm Bee</a></strong> (21.5kW, 68mph, 60mi range) — £7,999</li>\n</ul>\n\n<h2>Why prices vary so much</h2>\n<p>The spread reflects what each bike is built to do, not inconsistent pricing. The Hyper Bee is a youth and pit-bike model on smaller wheels, built down to a lower price for younger or smaller riders. The Light Bee X is the volume adult model — Sur-Ron's best-seller and the benchmark price point for the eMoto class. The Ultra Bee and Storm Bee step up in power, wheel size and range, and price rises accordingly: the Storm Bee is pitched as a genuine 1:1 replacement for a 250-350cc petrol motocross bike, which is reflected in its near-£8,000 price.</p>\n\n<h2>Pay in 4: how the cost breaks down</h2>\n<p>Every Sur-Ron on VoltTrail can be split into 4 equal, interest-free instalments with no fees, subject to status. For example:</p>\n<ul>\n<li>Light Bee X (£3,199) — 4 x £799.75</li>\n<li>Light Bee L1e (£3,499) — 4 x £874.75</li>\n<li>Ultra Bee (£4,999) — 4 x £1,249.75</li>\n<li>Storm Bee (£7,999) — 4 x £1,999.75</li>\n</ul>\n<p>The first instalment is taken at checkout and the remaining three at regular intervals. See our <a href=\"/finance\" data-route=\"finance\">finance options page</a> for full terms, or use the <a href=\"/finance-calculator\" data-route=\"finance-calc\">finance calculator</a> to check any specific model.</p>\n\n<h2>What else affects the price you pay?</h2>\n<p>Replacement batteries and chargers are sold separately and vary by model — for example a genuine <a href=\"/product/bat-surron-ultrabee\" data-route=\"product:bat-surron-ultrabee\">Ultra Bee 74V battery</a> is £1,599, while a <a href=\"/product/bat-surron-lightbee\" data-route=\"product:bat-surron-lightbee\">Light Bee 60V battery</a> is £699. These only become relevant for long-term ownership or a second battery — every bike ships complete and ready to ride. Delivery is free to UK mainland addresses on every model.</p>\n\n<h2>Which Sur-Ron should you buy for your budget?</h2>\n<p>Under £3,500, the Hyper Bee or Light Bee X are the realistic options depending on rider age and size. Around £3,500-£5,000, the Light Bee L1e (if you need road legality) or Ultra Bee (if you want more power off-road) are the step-up choices. Above £5,000, the Storm Bee is the only Sur-Ron in full-size motocross territory.</p>\n\n<h2>Where to buy</h2>\n<p>VoltTrail is an authorised Sur-Ron UK dealer stocking the full range with free mainland delivery and Pay in 4 on every model. See the <a href=\"/brands/surron\" data-route=\"brand-surron\">full Sur-Ron range</a>, or read our <a href=\"/blog/surron-vs-talaria\" data-route=\"blog:surron-vs-talaria\">Sur-Ron vs Talaria comparison</a> if you're weighing up brands too.</p>", faq:[["What is the cheapest Sur-Ron?", "The Sur-Ron Hyper Bee is the most affordable model at £2,999, designed as a youth and pit-bike model for riders aged 8 and up."], ["How much is a Sur-Ron Light Bee X?", "The Sur-Ron Light Bee X (LBX), Sur-Ron's best-selling adult model, is priced at £3,199."], ["What is the most expensive Sur-Ron?", "The Sur-Ron Storm Bee, a full-size electric motocross bike, is the most expensive model at £7,999."], ["Can you pay for a Sur-Ron in instalments?", "Yes, every Sur-Ron on VoltTrail can be split into 4 equal interest-free instalments with no fees, subject to status."]], rel:["lbx", "ultra-bee", "storm-bee"]},
  {slug:"electric-dirt-bike-battery-charger-guide", title:"Electric Dirt Bike Battery & Charger Guide (2026)", h1:"Electric Dirt Bike Battery & Charger Guide", kw:"electric dirt bike battery", desc:"Electric dirt bike battery and charger guide: voltages, charge times and genuine replacement packs for Sur-Ron, Talaria, Stark Varg, KTM, Revvi and more.", cat:"Parts & Maintenance", read:"9 min read", date:"2026-06-29", hdrEmoji:"🔋", hdrColor:"#0088ff", body:"<p class=\"lead\">Every electric dirt bike brand uses a different battery voltage, capacity and charger — which makes buying the right replacement pack confusing fast. This guide breaks down voltages, charge times and genuine replacement options across every brand VoltTrail stocks.</p>\n\n<h2>Why battery specs vary so much by brand</h2>\n<p>Voltage and capacity are tuned to each bike's power output and chassis design, so there's no universal \"electric dirt bike battery\" — packs range from Revvi's 36V kids' batteries up to Sur-Ron's 104V Storm Bee pack and Stark's 6.5kWh-plus \"Flying V\" design. Always buy the battery and charger matched to your exact model; mismatched voltage can damage the pack, the motor controller, or both.</p>\n\n<h2>Sur-Ron batteries by model</h2>\n<ul>\n<li><strong>Light Bee X / L1e:</strong> <a href=\"/product/bat-surron-lightbee\" data-route=\"product:bat-surron-lightbee\">60V 32-40Ah pack</a>, £699 — official 10A charger (£89) gives a full charge in around 2.5-3.5 hours.</li>\n<li><strong>Ultra Bee:</strong> <a href=\"/product/bat-surron-ultrabee\" data-route=\"product:bat-surron-ultrabee\">74V 55-60Ah pack</a>, £1,599 — matching fast charger £129.</li>\n<li><strong>Storm Bee:</strong> <a href=\"/product/bat-surron-stormbee\" data-route=\"product:bat-surron-stormbee\">104V 55Ah pack</a>, £2,499 — high-voltage fast charger £169.</li>\n<li><strong>Hyper Bee:</strong> <a href=\"/product/bat-surron-hyperbee\" data-route=\"product:bat-surron-hyperbee\">58V 22Ah pack</a>, £749 — matching charger £79.</li>\n</ul>\n\n<h2>Talaria batteries by model</h2>\n<ul>\n<li><strong>Sting, Sting L1e and X3:</strong> <a href=\"/product/bat-talaria-sting38\" data-route=\"product:bat-talaria-sting38\">60V 38Ah pack</a> with cell-balancing BMS, £799 — these three models share the same battery and the same 60V charger (£99, ~3hr charge).</li>\n<li><strong>Sting R MX4:</strong> <a href=\"/product/bat-talaria-stingr\" data-route=\"product:bat-talaria-stingr\">60V 45Ah pack</a>, £899, using 2.7kWh of LG cells.</li>\n<li><strong>Sting MX5 Pro / Komodo:</strong> <a href=\"/product/bat-talaria-72v\" data-route=\"product:bat-talaria-72v\">72V 40Ah pack</a> (2,880Wh), £1,099 — note the 72V charger (£119) is not interchangeable with 60V Talaria models.</li>\n</ul>\n\n<h2>Stark Varg battery</h2>\n<p>The <a href=\"/product/bat-stark-varg\" data-route=\"product:bat-stark-varg\">Stark Varg replacement pack</a> uses Stark's patented honeycomb magnesium \"Flying V\" case for cooling, priced at £3,499. The official 3.3kW fast charger (£349) gives a full charge in under 2 hours from a standard 220V socket — a 110V adapter (£89) is available for use on 110V supplies.</p>\n\n<h2>KTM SX-E batteries</h2>\n<p>The KTM PowerPack range covers the youth SX-E line: a <a href=\"/product/bat-ktm-sxe3\" data-route=\"product:bat-ktm-sxe3\">648Wh pack for the SX-E 3</a> (£999) and a <a href=\"/product/bat-ktm-sxe5\" data-route=\"product:bat-ktm-sxe5\">907Wh pack for the SX-E 5</a> (£1,299), both using genuine KTM lithium-ion cells with an integrated BMS. The official 900W charger (£249) works across the whole SX-E range and charges the SX-E 5 pack from 0-80% in around 45 minutes.</p>\n\n<h2>E Ride Pro, RFN, Revvi and Razor</h2>\n<p>An <a href=\"/product/bat-eride-72v\" data-route=\"product:bat-eride-72v\">E Ride Pro 72V pack</a> (£849) covers the SS 2.0 and S models, and an <a href=\"/product/bat-rfn-ares\" data-route=\"product:bat-rfn-ares\">RFN Ares replacement battery</a> (£849) covers the Rally and Rally Pro. For kids' bikes, <a href=\"/product/bat-revvi-3618\" data-route=\"product:bat-revvi-3618\">Revvi's removable 36V 5.0Ah pack</a> (£99, Revvi 18in) and the Razor MX350/MX400 24V battery set (£59) round out the range — both are budget, easy-swap packs designed for parents to replace at home.</p>\n\n<h2>Buying tips for replacement batteries</h2>\n<p>Always confirm the exact model and year before ordering — some ranges (like the E Ride Pro and RFN packs) cover multiple model variants, so it's worth contacting us to confirm fitment first. Buy genuine packs only: third-party batteries on marketplaces rarely match the BMS specification of the original, and using the wrong charger voltage is one of the most common causes of battery and controller failure on electric dirt bikes.</p>\n\n<h2>Where to buy</h2>\n<p>VoltTrail stocks genuine replacement batteries and chargers for every brand we sell, with free UK mainland delivery. Browse the full <a href=\"/parts-accessories/batteries-chargers\" data-route=\"parts-batteries\">batteries & chargers range</a>, or get in touch if you're not sure which pack fits your bike.</p>", faq:[["Are electric dirt bike batteries interchangeable between brands?", "No. Voltage, capacity and connector design vary by brand and model, so batteries and chargers are not interchangeable between brands and usually not between different models from the same brand either."], ["How long does an electric dirt bike battery take to charge?", "It depends on the model: the Stark Varg charges in under 2 hours, KTM's SX-E 5 reaches 0-80% in around 45 minutes, and Sur-Ron Light Bee packs take roughly 2.5-3.5 hours."], ["Can I use a third-party battery on my electric dirt bike?", "We recommend genuine replacement packs only. Third-party batteries rarely match the original BMS specification, and mismatched voltage is a common cause of controller and battery failure."], ["Do Talaria models share the same battery?", "Some do. The standard Sting, Sting L1e and X3 share the same 60V 38Ah pack and charger, while the Sting MX5 Pro and Komodo use a separate 72V system."]], rel:["bat-surron-lightbee", "bat-stark-varg", "bat-ktm-sxe5"]},
  {slug:"surron-light-bee-x-review", title:"Sur-Ron Light Bee X Review: Specs, Top Speed & UK Price (2026)", h1:"Sur-Ron Light Bee X Review: Specs, Top Speed & UK Price", kw:"surron light bee x", desc:"Sur-Ron Light Bee X (LBX) review for UK buyers: 6kW power, ~45mph top speed, 47-mile range and £3,199 price. Why the LBX is still the UK's best-selling electric dirt bike.", cat:"Reviews", read:"7 min read", date:"2026-07-10", hdrEmoji:"⚡", hdrColor:"#aaff00", body:"<p class=\"lead\">The <strong>Sur-Ron Light Bee X</strong> — the LBX — is the UK's best-selling electric dirt bike and the machine that turned an entire generation of riders electric. It weighs roughly 57kg with the battery in, tops out around 45mph, and costs £3,199 with free UK delivery. If you're considering your first serious electric dirt bike, this is almost certainly the one you've been looking at — and this guide covers everything you need to know before you buy.</p><h2>Sur-Ron Light Bee X specs at a glance</h2><table class=\"spec-table\"><tbody><tr><td><strong>Peak power</strong></td><td>6kW mid-drive motor</td></tr><tr><td><strong>Top speed</strong></td><td>~45mph (Sport mode)</td></tr><tr><td><strong>Battery</strong></td><td>60V removable lithium-ion pack</td></tr><tr><td><strong>Range</strong></td><td>Up to 47 miles (Eco mode, steady pace)</td></tr><tr><td><strong>Weight</strong></td><td>~57kg including battery</td></tr><tr><td><strong>Seat height</strong></td><td>830mm (32.7in)</td></tr><tr><td><strong>Wheels</strong></td><td>19in front / 18in rear off-road</td></tr><tr><td><strong>Suspension</strong></td><td>Inverted front forks, multi-link adjustable rear</td></tr><tr><td><strong>Brakes</strong></td><td>Hydraulic discs front and rear</td></tr><tr><td><strong>Ride modes</strong></td><td>Eco + Sport</td></tr><tr><td><strong>Charge time</strong></td><td>~3 hours with the standard charger</td></tr><tr><td><strong>Price at VoltTrail</strong></td><td>£3,199 — free UK delivery, pay in 4</td></tr></tbody></table><h2>Why the Light Bee X is still the benchmark</h2><p>Every electric dirt bike released in the last five years gets compared to the LBX, and there's a simple reason: the balance. At around 57kg it's light enough for almost any adult to pick up, load into a hatchback, and manhandle out of a rut — yet the 6kW mid-drive delivers instant torque that makes 125cc petrol bikes feel lazy off the line. That power-to-weight combination is what makes the Light Bee X so addictive on tight UK trails, and it's why the bike has built the biggest owner and tuning community of any electric dirt bike in the country.</p><p>The forged aluminium alloy frame is a genuine piece of engineering rather than a cost-cut item, and the component spec — inverted forks, an adjustable multi-link rear end and hydraulic discs at both ends — is tuned for real off-road use, not car-park cruising. It soaks up roots, ruts and small jumps confidently, though it isn't built for full-size motocross features; that's <a href=\"/blog/surron-storm-bee-review\">Storm Bee</a> territory.</p><h2>Sur-Ron Light Bee X top speed and performance</h2><p>The <strong>Sur-Ron Light Bee X top speed</strong> is approximately 45mph in Sport mode. Eco mode caps output to stretch the battery, and the throttle mapping is smooth enough that newer riders can build up gradually rather than being thrown in at the deep end. What the spec sheet doesn't convey is how the power arrives: instantly, silently, and with no clutch or gears to manage. Hill climbs that require momentum and commitment on a petrol bike become simple throttle-and-go exercises, and the regenerative feel on deceleration gives a natural engine-braking character.</p><h2>Battery and real-world range</h2><p>The 60V removable pack drops out of the frame in seconds, so you can charge it indoors instead of trailing a cable to the shed. Sur-Ron rates range at up to 47 miles at a steady pace in Eco mode. Ride it hard in Sport mode on demanding terrain and you'll see nearer 20–25 miles — still plenty for a typical trail session on private land. A full recharge takes around three hours. When the pack eventually ages, a genuine <a href=\"/product/bat-surron-lightbee\">Sur-Ron Light Bee replacement battery</a> restores full range, and our <a href=\"/blog/electric-dirt-bike-battery-charger-guide\">battery &amp; charger guide</a> covers how to maximise pack life in the meantime.</p><h2>LBX vs Ultra Bee: which Sur-Ron should you buy?</h2><p>The <a href=\"/blog/surron-ultra-bee-review\">Sur-Ron Ultra Bee</a> (£4,999) is the bigger, more powerful sibling — 12.5kW, a larger chassis and a 74V system. If you're a taller or heavier rider, or you want full-size trail pace, the Ultra Bee justifies its premium. But if you value light weight, playful handling, easier transport and lower cost, the LBX remains the smarter buy — and its enormous aftermarket means you can upgrade the controller, suspension or battery later as your riding develops. Riders weighing up the other big name should read our <a href=\"/blog/surron-vs-talaria\">Sur-Ron vs Talaria comparison</a>.</p><h2>Is the Light Bee X road legal in the UK?</h2><p>No — the standard LBX is an off-road machine for private land with the landowner's permission. Sur-Ron's separate L1e-homologated Light Bee is the road-legal option, registered as a moped. Our guides on <a href=\"/blog/are-sur-rons-legal-uk\">UK Sur-Ron law</a> and <a href=\"/blog/road-legal-electric-dirt-bikes-uk\">road-legal electric dirt bikes</a> explain exactly what's required.</p><h2>Who is the Sur-Ron Light Bee X for?</h2><p>Adults and taller teens (under supervision on private land) who want a genuinely capable trail and pit bike without the weight, noise, fuel and maintenance of petrol. It suits riders from roughly 5ft 3in to 6ft 2in, it fits in the back of most cars with the front wheel out, and at £3,199 — or about £89/month on <a href=\"/finance\">interest-free finance</a> — it's the most accessible route into serious electric off-road riding in the UK.</p><h2>Verdict</h2><p>The Light Bee X earns its best-seller status every single year. It's light, quick, brilliantly supported by parts and community, and priced sensibly. If you're buying your first proper electric dirt bike, start here. <a href=\"/product/lbx\">View the Sur-Ron Light Bee X at VoltTrail</a> — free UK mainland delivery, pay in 4 available.</p>", faq:[["What is the Sur-Ron Light Bee X top speed?", "The Light Bee X reaches approximately 45mph in Sport mode. Eco mode reduces power to extend battery range."], ["How much does the Sur-Ron Light Bee X cost in the UK?", "The Light Bee X is £3,199 at VoltTrail with free UK mainland delivery, and can be split into 4 interest-free instalments (~£89/month)."], ["Is the Sur-Ron Light Bee X road legal?", "No. The standard LBX is off-road only, for private land with the landowner's permission. The separate Light Bee L1e model is the road-legal version."], ["How far does the Light Bee X go on a charge?", "Up to 47 miles at a steady pace in Eco mode. Hard riding in Sport mode typically returns 20–25 miles. A full recharge takes around 3 hours."]], rel:["lbx", "ultra-bee", "bat-surron-lightbee"]},
  {slug:"surron-hyper-bee-review", title:"Sur-Ron Hyper Bee Review: Youth Electric Dirt Bike Guide (2026)", h1:"Sur-Ron Hyper Bee Review: The Youth Bike With Adult-Grade Engineering", kw:"surron hyper bee", desc:"Sur-Ron Hyper Bee review for UK buyers: specs, top speed, age suitability and why this £2,999 youth electric dirt bike outclasses everything else at the price.", cat:"Reviews", read:"6 min read", date:"2026-07-10", hdrEmoji:"🐝", hdrColor:"#0088ff", body:"<p class=\"lead\">The <strong>Sur-Ron Hyper Bee</strong> is the model that brings genuine Sur-Ron engineering down to youth and pit-bike size. On 14in/12in wheels, weighing far less than the adult bikes and priced at £2,999, it's built for riders aged roughly 8 and up who have outgrown toy-grade electric bikes — and for smaller adults who want a seriously fun pit bike. Here's the full picture for UK buyers.</p><h2>Sur-Ron Hyper Bee specs at a glance</h2><table class=\"spec-table\"><tbody><tr><td><strong>Class</strong></td><td>Youth / pit bike (ages 8+, supervised)</td></tr><tr><td><strong>Battery</strong></td><td>58V removable lithium-ion pack</td></tr><tr><td><strong>Wheels</strong></td><td>14in front / 12in rear off-road</td></tr><tr><td><strong>Top speed</strong></td><td>~34mph in the highest mode</td></tr><tr><td><strong>Ride modes</strong></td><td>3 selectable power modes + reverse</td></tr><tr><td><strong>Suspension</strong></td><td>Inverted front forks, adjustable rear shock</td></tr><tr><td><strong>Brakes</strong></td><td>Hydraulic discs front and rear</td></tr><tr><td><strong>Seat height</strong></td><td>~683mm, adjustable</td></tr><tr><td><strong>Use</strong></td><td>Off-road only — private land</td></tr><tr><td><strong>Price at VoltTrail</strong></td><td>£2,999 — free UK delivery, pay in 4</td></tr></tbody></table><h2>Real Sur-Ron build quality in a smaller package</h2><p>Most kids' electric dirt bikes are built to a toy budget: plastic-heavy frames, cosmetic suspension, drum or cable brakes. The Hyper Bee is not that. It uses a forged aluminium alloy frame, properly damped inverted front forks, an adjustable rear shock and hydraulic disc brakes at both ends — a component list you'd normally only see on adult machines. For a young rider progressing quickly, that hardware matters: predictable brakes and composed suspension are what build confidence and keep riding safe as speeds rise.</p><h2>Power that grows with the rider</h2><p>The Hyper Bee's mid-drive motor delivers its output through three selectable ride modes. Mode 1 softens the throttle right down for beginners; Mode 3 opens the bike up to around 34mph for confident riders. That progression is the Hyper Bee's biggest parenting feature — you buy one bike and unlock performance as skill develops, rather than replacing a starter bike after a season. A reverse mode rounds it out, making the bike easy for a smaller rider to manoeuvre out of tight spots without help.</p><h2>Battery, range and charging</h2><p>The 58V removable lithium pack releases quickly for indoor charging, and a typical session on private land or a youth track sits well within a single charge. As with all lithium packs, storage charge level and charging habits determine long-term health — our <a href=\"/blog/electric-dirt-bike-battery-charger-guide\">electric dirt bike battery guide</a> covers the essentials, and a genuine <a href=\"/product/bat-surron-hyperbee\">Hyper Bee 58V replacement battery</a> is available when the original eventually ages.</p><h2>Who fits the Hyper Bee?</h2><p>As a guide, the Hyper Bee suits riders from roughly age 8 upwards (always supervised, on private land), with the adjustable seat height accommodating growth. Its 14in/12in wheel setup places it above small starter bikes like the Razor MX350 and the smaller <a href=\"/blog/best-kids-electric-dirt-bikes-uk\">Revvi models</a>, but below the full-size <a href=\"/blog/surron-light-bee-x-review\">Light Bee X</a>. Many compact adults also run the Hyper Bee as a pit bike — the build quality takes adult weight and adult riding without complaint.</p><h2>Hyper Bee vs the alternatives</h2><p>Against KTM's <a href=\"/blog/ktm-sxe-2-vs-3-vs-5\">SX-E electric youth range</a>, the Hyper Bee undercuts on price while offering a more trail-oriented (rather than race-focused) character. Against budget youth e-bikes, it's simply in a different league of build. The honest comparison is this: if your child is still learning to balance and use a throttle, start with a Revvi or Razor; if they're past that stage and hungry for a real dirt bike, the Hyper Bee is the natural next step — and the last bike they'll need before an adult machine.</p><h2>Is it road legal? What about insurance?</h2><p>The Hyper Bee is an off-road model only — private land with the landowner's permission. No licence or insurance is required for that use. Our <a href=\"/blog/are-sur-rons-legal-uk\">UK Sur-Ron legality guide</a> covers the rules in full.</p><h2>Verdict</h2><p>The Sur-Ron Hyper Bee fills a real gap in the UK market: a youth bike with genuine adult-grade engineering, adjustable power that grows with the rider, and a price that undercuts the racier competition. If your young rider has outgrown their starter bike, this is the upgrade to make. <a href=\"/product/hyper-bee\">View the Sur-Ron Hyper Bee at VoltTrail</a> — £2,999 with free UK mainland delivery and pay-in-4 finance.</p>", faq:[["What age is the Sur-Ron Hyper Bee for?", "The Hyper Bee suits riders from roughly age 8 upwards under adult supervision on private land, with three power modes to match ability. Compact adults also use it as a pit bike."], ["What is the Sur-Ron Hyper Bee top speed?", "Around 34mph in its highest power mode. Modes 1 and 2 progressively restrict speed and power for younger or newer riders."], ["How much is the Sur-Ron Hyper Bee in the UK?", "£2,999 at VoltTrail with free UK mainland delivery, or about £83/month split into 4 interest-free instalments."], ["Is the Sur-Ron Hyper Bee road legal?", "No — it is an off-road model for private land with the landowner's permission. No licence or insurance is needed for that use."]], rel:["hyper-bee", "revvi-18", "bat-surron-hyperbee"]},
  {slug:"surron-storm-bee-review", title:"Sur-Ron Storm Bee Review: Full-Size Electric MX Power (2026)", h1:"Sur-Ron Storm Bee Review: 21.5kW of Full-Size Electric MX Power", kw:"surron storm bee", desc:"Sur-Ron Storm Bee review for UK buyers: 21.5kW peak power, ~68mph top speed, 60-mile range and £7,999 price. A genuine electric replacement for a 250–350cc petrol MX bike.", cat:"Reviews", read:"7 min read", date:"2026-07-10", hdrEmoji:"🌩️", hdrColor:"#ffaa00", body:"<p class=\"lead\">The <strong>Sur-Ron Storm Bee</strong> is a different animal to everything else Sur-Ron makes. This is a full-size electric motocross machine — a genuine 1:1 replacement for a 250–350cc petrol bike — with 21.5kW of peak power, a top speed around 68mph and up to 60 miles of range. At £7,999 it's the flagship of the range, and this review covers exactly what that money buys and who should be spending it.</p><h2>Sur-Ron Storm Bee specs at a glance</h2><table class=\"spec-table\"><tbody><tr><td><strong>Peak power</strong></td><td>21.5kW mid-drive motor</td></tr><tr><td><strong>Top speed</strong></td><td>~68mph</td></tr><tr><td><strong>Battery</strong></td><td>104V high-voltage lithium-ion pack</td></tr><tr><td><strong>Range</strong></td><td>Up to 60 miles at moderate pace</td></tr><tr><td><strong>Class</strong></td><td>Full-size electric motocross / enduro</td></tr><tr><td><strong>Wheels</strong></td><td>21in front / 18in rear</td></tr><tr><td><strong>Suspension</strong></td><td>Long-travel fully adjustable front and rear</td></tr><tr><td><strong>Ride modes</strong></td><td>Multiple, including full-power Turbo</td></tr><tr><td><strong>Traction control</strong></td><td>Sur-Ron ASR active spin reduction</td></tr><tr><td><strong>Regen braking</strong></td><td>Adjustable energy recovery system</td></tr><tr><td><strong>Price at VoltTrail</strong></td><td>£7,999 — free UK delivery, pay in 4</td></tr></tbody></table><h2>A genuine petrol-bike replacement</h2><p>The Light Bee X and Ultra Bee are brilliant, but they are trail bikes. The Storm Bee is a motocross machine: full-size 21in/18in wheels, motorcycle-grade ergonomics, a long wheelbase for high-speed stability and a chassis built around a compact three-layer stack of battery, controller and motor that centralises mass and keeps unsprung weight low. Riders stepping across from 250–350cc four-strokes consistently report the same thing — the Storm Bee holds its own on real enduro terrain, then beats the petrol bike on instant torque, silence and zero maintenance.</p><h2>21.5kW and the Turbo button</h2><p>In its standard riding modes the Storm Bee is fast but civilised, with smooth, linear power that flatters technical riding. Activate Turbo mode and the motor releases its full 21.5kW — acceleration that genuinely surprises riders used to anything smaller. Sur-Ron's ASR traction control, developed from the brand's cross-country racing programme, monitors rear wheel spin in real time and keeps that power usable on loose ground rather than lighting up the rear tyre. The result is a bike whose huge performance remains controllable — but make no mistake, this is a machine for experienced riders.</p><h2>Battery, range and charging</h2><p>The Storm Bee runs a 104V high-voltage pack — a completely different architecture to the 60V and 74V systems in Sur-Ron's smaller bikes — delivering up to 60 miles at a moderate pace. Push hard with regular Turbo use and range drops, as with any performance EV, but a full trail session on one charge is realistic. Adjustable regenerative braking recovers energy on descents and gives a natural engine-braking feel. When the time comes, a genuine <a href=\"/product/bat-surron-stormbee\">Storm Bee 104V replacement battery</a> is available, and our <a href=\"/blog/electric-dirt-bike-battery-charger-guide\">battery &amp; charger guide</a> covers care for high-voltage packs.</p><h2>Suspension and chassis</h2><p>Long-travel, fully adjustable suspension at both ends is tuned for genuine motocross and enduro use — jumps, whoops and rough terrain at speed, not just trail imperfections. The steering geometry balances high-speed stability with a tight turning ability that's unusual for a bike this size, and hydraulic disc brakes provide the stopping power that 68mph demands.</p><h2>Storm Bee vs Stark Varg</h2><p>The obvious rival is the <a href=\"/blog/stark-varg-review-uk\">Stark Varg</a>, the Swedish competition machine. The Varg is the more extreme motocross weapon with a higher performance ceiling and a higher price; the Storm Bee counters with strong real-world range, Sur-Ron's established UK parts and dealer ecosystem, and a £7,999 price that undercuts the Varg significantly. For pure MX competition, look at the Varg. For fast trail and enduro riding with occasional track days, the Storm Bee is the more rounded — and more affordable — choice.</p><h2>Who is the Storm Bee for?</h2><p>Experienced riders only. If you're currently on a <a href=\"/blog/surron-light-bee-x-review\">Light Bee X</a> or <a href=\"/blog/surron-ultra-bee-review\">Ultra Bee</a>, the step up in power is substantial and demands respect. The ideal Storm Bee owner already rides petrol enduro or MX machinery and wants electric advantages — instant torque, silence, near-zero maintenance and no fuel costs — without giving up full-size performance. It's off-road only, for private land and tracks; see our <a href=\"/blog/road-legal-electric-dirt-bikes-uk\">road-legal guide</a> for what UK road use requires.</p><h2>Verdict</h2><p>The Storm Bee is one of the most capable electric off-road motorcycles money can currently buy in the UK, and at £7,999 it's priced well below its closest competition. If you have the experience to use it and the land or track access to enjoy it, it delivers everything the spec sheet promises. <a href=\"/product/storm-bee\">View the Sur-Ron Storm Bee at VoltTrail</a> — free UK mainland delivery, pay in 4 available (~£222/month).</p>", faq:[["What is the Sur-Ron Storm Bee top speed?", "Approximately 68mph with Turbo mode engaged. Standard riding modes deliver smoother, more progressive power for technical terrain."], ["How much does the Sur-Ron Storm Bee cost in the UK?", "£7,999 at VoltTrail with free UK mainland delivery, or roughly £222/month split into 4 interest-free instalments."], ["Is the Storm Bee suitable for beginners?", "No. With 21.5kW of peak power it demands prior motocross or enduro experience. Newer riders should start on the Light Bee X or Ultra Bee."], ["How does the Storm Bee compare to the Stark Varg?", "The Stark Varg is the more extreme pure-motocross competition machine at a higher price; the Storm Bee offers strong range, Sur-Ron's UK parts ecosystem and a significantly lower £7,999 price, making it the more rounded fast trail and enduro choice."]], rel:["storm-bee", "ultra-bee", "bat-surron-stormbee"]},
  {slug:"talaria-komodo-review", title:"Talaria Komodo Review: 22kW Flagship Electric Dirt Bike (2026)", h1:"Talaria Komodo Review: The 22kW Flagship That Undercuts Everyone", kw:"talaria komodo", desc:"Talaria Komodo (TL6000) review for UK buyers: 22kW peak power, ~66mph top speed, up to 70 miles of range and a £5,495 price that undercuts the full-power competition.", cat:"Reviews", read:"7 min read", date:"2026-07-10", hdrEmoji:"🦎", hdrColor:"#ff4040", body:"<p class=\"lead\">The <strong>Talaria Komodo</strong> (TL6000) is Talaria's high-performance flagship — a 22kW electric dirt bike with a top speed around 66mph and up to 70 miles of range, built on full-size dirt bike geometry with 21in/18in wheels. At £5,495 it's Talaria's answer to the high-end electric performance bikes, and it lands at a price that seriously undercuts the established full-power competition. Here's the complete UK buyer's guide.</p><h2>Talaria Komodo specs at a glance</h2><table class=\"spec-table\"><tbody><tr><td><strong>Peak power</strong></td><td>22kW mid-mounted motor</td></tr><tr><td><strong>Top speed</strong></td><td>~66mph</td></tr><tr><td><strong>Range</strong></td><td>Up to 70 miles at steady pace</td></tr><tr><td><strong>Battery</strong></td><td>High-capacity removable lithium-ion pack</td></tr><tr><td><strong>Wheels</strong></td><td>21in front / 18in rear — full dirt bike sizing</td></tr><tr><td><strong>Suspension</strong></td><td>Long-travel adjustable air forks, adjustable rear shock</td></tr><tr><td><strong>Ride modes</strong></td><td>Eco / Sport / Hyper + reverse</td></tr><tr><td><strong>Regen braking</strong></td><td>4-level adjustable</td></tr><tr><td><strong>Display</strong></td><td>Full-colour TFT</td></tr><tr><td><strong>Brakes</strong></td><td>4-piston hydraulic discs front and rear</td></tr><tr><td><strong>Price at VoltTrail</strong></td><td>£5,495 — free UK delivery, pay in 4</td></tr></tbody></table><h2>Talaria's step into the big leagues</h2><p>Talaria built its reputation on the Sting — a brilliant lightweight trail bike, but a trail bike nonetheless. The Komodo is a different proposition entirely: proper 21in/18in dirt bike wheels, generous ground clearance, a long wheelbase and a 22kW peak motor that puts it in genuine competition with 350–450cc petrol machinery. It's the bike Talaria riders asked for once they'd outgrown the Sting, and it slots into the market squarely between the lightweight class and premium competition machines like the <a href=\"/blog/stark-varg-review-uk\">Stark Varg</a>.</p><h2>Performance: Eco, Sport and Hyper</h2><p>Three forward ride modes cover the Komodo's huge performance envelope. Eco delivers soft, range-friendly power for technical singletrack; Sport is the strong everyday setting; Hyper unlocks the full 22kW and the ~66mph top speed. The throttle uses a dual-sensor design for redundancy and precision — the bike responds to small inputs with an accuracy that makes the big power feel manageable rather than intimidating. A reverse mode (genuinely useful on a bike this size) and four-level adjustable regenerative braking complete the package. The regen system is worth highlighting: dialled up, it behaves like engine braking and claws back meaningful range on descents.</p><h2>Battery, range and charging</h2><p>The Komodo's removable high-capacity pack delivers up to 70 miles at a steady pace — one of the strongest range figures in the class, and a big part of why the Komodo works as an all-day trail bike rather than a short-session machine. Ridden hard in Hyper mode, expect less, as with any performance EV. The pack removes for indoor charging, and our <a href=\"/blog/electric-dirt-bike-battery-charger-guide\">battery &amp; charger guide</a> covers how to keep a big lithium pack healthy long-term.</p><h2>Chassis and suspension</h2><p>Long-travel adjustable air forks up front and an adjustable rear shock give the Komodo genuine rough-terrain capability, and air suspension brings a practical bonus: sag and spring rate adjust without tools or new springs. Four-piston hydraulic brakes at both ends handle the speeds this bike reaches. The full-size ergonomics suit adult riders — shorter riders should check the tall dirt-bike seat height before committing.</p><h2>Komodo vs Sting MX5 Pro — and vs the Storm Bee</h2><p>Within Talaria's own range, the Komodo sits far above the <a href=\"/blog/talaria-sting-mx5-pro-review\">Sting MX5 Pro</a>: roughly double the power, full-size wheels versus 19in, and £1,500 more. The MX5 Pro is the lighter, more playful trail bike; the Komodo is the full-power machine. Against the <a href=\"/blog/surron-storm-bee-review\">Sur-Ron Storm Bee</a> (£7,999, 21.5kW), the Komodo matches the headline power figure while undercutting it by £2,500 — the Storm Bee counters with Sur-Ron's longer-established parts ecosystem. Both are superb; the Komodo is the value play in the full-power class. For the wider brand picture, see our <a href=\"/blog/surron-vs-talaria\">Sur-Ron vs Talaria comparison</a>.</p><h2>Who is the Talaria Komodo for?</h2><p>Experienced off-road riders stepping up from a Sting, an <a href=\"/blog/surron-ultra-bee-review\">Ultra Bee</a> or a petrol trail bike, who want full-size electric performance without a full-size price. The 22kW output demands respect — this is not a first electric dirt bike. It's off-road only for private land use; our <a href=\"/blog/road-legal-electric-dirt-bikes-uk\">road-legal guide</a> covers UK requirements for road use.</p><h2>Verdict</h2><p>The Komodo is the bike that moves Talaria from challenger to genuine contender at the top of the market. Match-of-the-class power, standout range and full-size geometry at £5,495 make it arguably the strongest value in high-performance electric dirt bikes right now. <a href=\"/product/talaria-komodo\">View the Talaria Komodo at VoltTrail</a> — free UK mainland delivery, pay in 4 available (~£153/month).</p>", faq:[["How fast is the Talaria Komodo?", "The Komodo reaches approximately 66mph in Hyper mode. Eco and Sport modes progressively soften power for range and technical terrain."], ["How much is the Talaria Komodo in the UK?", "£5,495 at VoltTrail with free UK mainland delivery, or roughly £153/month split into 4 interest-free instalments."], ["What is the Talaria Komodo's range?", "Up to 70 miles at a steady pace — one of the best figures in its class. Aggressive riding in Hyper mode reduces that, as with any performance EV."], ["Is the Talaria Komodo better than the Sur-Ron Storm Bee?", "They're closely matched on power (22kW vs 21.5kW peak). The Komodo undercuts the Storm Bee by £2,500 at £5,495, while the Storm Bee offers Sur-Ron's longer-established UK parts ecosystem. Both are excellent full-size electric MX machines."]], rel:["talaria-komodo", "talaria-mx5", "talaria-sting-r"]},
  {slug:"talaria-sting-mx5-pro-review", title:"Talaria Sting MX5 Pro Review: The 72V Sting Tested (2026)", h1:"Talaria Sting MX5 Pro Review: The 72V Upgrade That Changes the Game", kw:"talaria mx5", desc:"Talaria Sting MX5 Pro review for UK buyers: 72V 40Ah battery, ~47mph top speed, upgraded brakes and £3,995 price. Why the MX5 is the most capable Sting ever built.", cat:"Reviews", read:"7 min read", date:"2026-07-10", hdrEmoji:"🏁", hdrColor:"#aaff00", body:"<p class=\"lead\">The <strong>Talaria Sting MX5 Pro</strong> is the most potent Sting ever built. The headline change is simple but transformative: a 72V 40Ah battery replaces the 60V system of earlier Stings, delivering a substantial boost in power, acceleration and range. At £3,995 it sits directly against the Sur-Ron Light Bee X and Ultra Bee — and for many riders it's now the pick of the lightweight class. Here's why.</p><h2>Talaria Sting MX5 Pro specs at a glance</h2><table class=\"spec-table\"><tbody><tr><td><strong>Electrical system</strong></td><td>72V — up from 60V on earlier Stings</td></tr><tr><td><strong>Battery</strong></td><td>72V 40Ah (2,880Wh) with premium Samsung cells</td></tr><tr><td><strong>Drive</strong></td><td>Gear drive (no belt) — quiet, low-maintenance</td></tr><tr><td><strong>Top speed</strong></td><td>~47mph (delimited: 60mph+)</td></tr><tr><td><strong>Ride modes</strong></td><td>3 modes including high-performance Hyper mode</td></tr><tr><td><strong>Regen braking</strong></td><td>4 levels + variable thumb-actuated regen lever</td></tr><tr><td><strong>Brakes</strong></td><td>Upgraded 220mm discs, 4-piston calipers front and rear</td></tr><tr><td><strong>Suspension</strong></td><td>Adjustable air + dual-spring forks, adjustable linkage rear</td></tr><tr><td><strong>Frame</strong></td><td>Forged 6061 aluminium alloy</td></tr><tr><td><strong>Display</strong></td><td>Colour TFT</td></tr><tr><td><strong>Price at VoltTrail</strong></td><td>£3,995 — free UK delivery, pay in 4</td></tr></tbody></table><h2>Why 72V changes everything</h2><p>Voltage is the foundation of an electric bike's performance. The MX5 Pro's move from 60V to 72V delivers a substantial power increase over the 60V Sting R MX4 across the whole rev range — not just a higher top speed, but stronger mid-range pull, better sustained hill-climbing and a motor that runs cooler under load. On the trail, the difference is obvious: where a 60V Sting starts to feel breathless, the MX5 Pro keeps pulling cleanly. The 2,880Wh pack is also the largest in the Sting range, built with premium Samsung cells rather than budget alternatives, and it charges from flat in around three hours with the included smart charger.</p><h2>Gear drive, not belt</h2><p>Like every Sting, the MX5 Pro uses Talaria's gear-driven primary transmission instead of the belt drive found on Sur-Ron's Light Bee. The practical upsides: no belt to snap in deep mud, quieter operation, and less maintenance. It's one of the defining differences between the two brands — our <a href=\"/blog/surron-vs-talaria\">Sur-Ron vs Talaria comparison</a> covers the debate in full — and for riders in typical wet, muddy UK conditions, the gear drive is a genuine advantage.</p><h2>Upgraded brakes to match the power</h2><p>Talaria didn't just add power — the braking system was redesigned to match. The MX5 Pro runs larger 220mm x 3mm discs with oversized four-piston calipers and a redesigned master cylinder, with far larger pads than the MX4. Stopping power and heat resistance under hard riding are dramatically improved. Add four selectable levels of regenerative braking plus a thumb-actuated variable regen lever — a feature previously reserved for custom builds with aftermarket controllers — and the MX5 Pro gives you more deceleration control than anything else in the lightweight class.</p><h2>Top speed and delimiting</h2><p>Out of the box the MX5 Pro tops out around 47mph. With the factory limiter removed for closed-course use, it will exceed 60mph. Most UK owners riding private land keep the standard setting — 47mph is genuinely quick on tight trails — but the performance headroom is there for track use.</p><h2>MX5 Pro vs Sting R MX4 — worth the upgrade?</h2><p>The <a href=\"/product/talaria-sting-r\">Sting R MX4</a> (£3,735) remains an excellent bike, but the £260 step to the MX5 Pro buys the 72V system, the bigger Samsung-cell battery, the upgraded brake package and the improved motor. For anyone buying new, the MX5 Pro is the obvious choice — the gap in capability is far larger than the gap in price. Existing MX4 owners with healthy bikes needn't rush; the upgrade case is strongest when your battery is due for replacement anyway.</p><h2>MX5 Pro vs Sur-Ron Light Bee X</h2><p>At £3,995 vs £3,199, the MX5 Pro costs £800 more than the <a href=\"/blog/surron-light-bee-x-review\">Light Bee X</a> — and delivers a higher-voltage system, a bigger battery, stronger brakes and the gear drive. The LBX counters with lower weight, a lower price and the biggest aftermarket in the business. Riders who prioritise outright performance per pound increasingly land on the MX5 Pro; riders who want the lightest, most modifiable platform still choose the LBX. There's no wrong answer, but the MX5 Pro has closed the gap and then some.</p><h2>Who is the MX5 Pro for?</h2><p>Adult riders who want the most capable lightweight electric trail bike available without stepping up to full-size machines like the <a href=\"/blog/talaria-komodo-review\">Komodo</a> or <a href=\"/blog/surron-storm-bee-review\">Storm Bee</a>. It's off-road only for private land use — see our <a href=\"/blog/road-legal-electric-dirt-bikes-uk\">road-legal guide</a> for UK road requirements — and its combination of power, brakes and low-maintenance drive makes it the thinking rider's choice in this class.</p><h2>Verdict</h2><p>The Sting MX5 Pro is the best bike Talaria has ever made in the lightweight class — a substantial, engineering-led upgrade rather than a facelift. If your budget stretches to £3,995, it's one of the strongest buys in UK electric off-road riding right now. <a href=\"/product/talaria-mx5\">View the Talaria Sting MX5 Pro at VoltTrail</a> — free UK mainland delivery, pay in 4 available (~£111/month).</p>", faq:[["What is the Talaria MX5 top speed?", "Approximately 47mph as delivered. With the factory limiter removed for closed-course use, the MX5 Pro exceeds 60mph."], ["How much is the Talaria Sting MX5 Pro in the UK?", "£3,995 at VoltTrail with free UK mainland delivery, or roughly £111/month split into 4 interest-free instalments."], ["What's the difference between the MX5 Pro and the Sting R MX4?", "The MX5 Pro upgrades to a 72V system (from 60V), a larger 40Ah Samsung-cell battery, significantly bigger 220mm brakes with 4-piston calipers, an improved motor and a variable regen lever — a substantial step up for £260 more."], ["Does the Talaria MX5 use a belt or gear drive?", "Gear drive. Unlike belt-driven bikes, there's no belt to snap in mud and less maintenance — a real advantage in typical UK riding conditions."]], rel:["talaria-mx5", "talaria-sting-r", "talaria-komodo"]},
];

const parts = [
  // ════ BATTERIES & CHARGERS ════
  // ── Sur-Ron ──
  { id:'bat-surron-lightbee', img:'/images/product-bat-surron-lightbee.jpg', desc:'Genuine replacement 60V lithium-ion battery pack for the Sur-Ron Light Bee X and Light Bee L1e. High-quality 21700 cells with a smart BMS restore full range and performance to your electric dirt bike.', brand:'Sur-Ron', name:'Sur-Ron Light Bee 60V Replacement Battery', specs:['60V','32-40Ah Li-Ion','Fits Light Bee X & L1e'], price:'£699', tags:['batteries'], badges:['stock'], finance:null, color:'#aaff00', colours:[] },
  { id:'chg-surron-lightbee', img:'/images/product-chg-surron-lightbee.jpg', desc:'Official Sur-Ron 10A fast charger for the 60V Light Bee X and L1e. Intelligent power delivery with over-voltage, temperature and short-circuit protection. Full charge in around 2.5-3.5 hours from any UK socket.', brand:'Sur-Ron', name:'Sur-Ron Light Bee 60V Charger (10A)', specs:['60V 10A output','~3hr charge','UK plug'], price:'£89', tags:['batteries'], badges:['stock'], finance:null, color:'#aaff00', colours:[] },
  { id:'bat-surron-stormbee', img:'/images/product-bat-surron-stormbee.jpg', desc:'Genuine replacement 104V high-voltage lithium-ion battery pack for the Sur-Ron Storm Bee. Delivers the full power and range the Storm Bee was built for.', brand:'Sur-Ron', name:'Sur-Ron Storm Bee 104V Replacement Battery', specs:['104V','55Ah Li-Ion','Fits Storm Bee'], price:'£2,499', tags:['batteries'], badges:['stock'], finance:'~£69/mo', color:'#aaff00', colours:[] },
  { id:'chg-surron-stormbee', img:'/images/product-chg-surron-stormbee.jpg', desc:'Official Sur-Ron high-voltage fast charger for the 104V Storm Bee battery. Engineered for safe, stable charging with full battery protection.', brand:'Sur-Ron', name:'Sur-Ron Storm Bee 104V Fast Charger', specs:['104V fast charger','High-voltage','UK plug'], price:'£169', tags:['batteries'], badges:['stock'], finance:null, color:'#aaff00', colours:[] },
  { id:'bat-surron-ultrabee', img:'/images/product-bat-surron-ultrabee.jpg', desc:'Genuine replacement 74V lithium-ion battery pack for the Sur-Ron Ultra Bee. High-capacity cells with smart BMS for maximum range and performance.', brand:'Sur-Ron', name:'Sur-Ron Ultra Bee 74V Replacement Battery', specs:['74V','55-60Ah Li-Ion','Fits Ultra Bee'], price:'£1,599', tags:['batteries'], badges:['stock'], finance:'~£44/mo', color:'#aaff00', colours:[] },
  { id:'chg-surron-ultrabee', img:'/images/product-chg-surron-ultrabee.jpg', desc:'Official Sur-Ron fast charger for the 74V Ultra Bee battery pack. Reliable, protected charging from any standard UK socket.', brand:'Sur-Ron', name:'Sur-Ron Ultra Bee 74V Charger', specs:['74V fast charger','Smart protection','UK plug'], price:'£129', tags:['batteries'], badges:['stock'], finance:null, color:'#aaff00', colours:[] },
  { id:'bat-surron-hyperbee', img:'/images/product-bat-surron-hyperbee.jpg', desc:'Genuine replacement 58V lithium-ion battery pack for the Sur-Ron Hyper Bee youth electric dirt bike.', brand:'Sur-Ron', name:'Sur-Ron Hyper Bee 58V Replacement Battery', specs:['58V','22Ah Li-Ion','Fits Hyper Bee'], price:'£749', tags:['batteries'], badges:['stock'], finance:null, color:'#aaff00', colours:[] },
  { id:'chg-surron-hyperbee', img:'/images/product-chg-surron-hyperbee.jpg', desc:'Official Sur-Ron charger for the 58V Hyper Bee battery pack. Safe, protected charging from any UK socket.', brand:'Sur-Ron', name:'Sur-Ron Hyper Bee 58V Charger', specs:['58V charger','Smart protection','UK plug'], price:'£79', tags:['batteries'], badges:['stock'], finance:null, color:'#aaff00', colours:[] },
  // ── Talaria ──
  { id:'bat-talaria-stingr', img:'/images/product-bat-talaria-stingr.jpg', desc:'Genuine replacement 60V 45Ah lithium-ion battery pack for the Talaria Sting R MX4. 2.7kWh of high-quality LG cells for extended range.', brand:'Talaria', name:'Talaria Sting R 60V 45Ah Replacement Battery', specs:['60V 45Ah','2.7kWh LG cells','Fits Sting R MX4'], price:'£899', tags:['batteries'], badges:['stock'], finance:'~£25/mo', color:'#aaff00', colours:[] },
  { id:'bat-talaria-sting38', img:'/images/product-bat-talaria-sting38.jpg', desc:'Genuine OEM 60V 38Ah lithium-ion battery pack for the Talaria Sting, Sting L1e, TL45 and TL3000. Removable pack with cell balancing BMS.', brand:'Talaria', name:'Talaria Sting 60V 38Ah Replacement Battery', specs:['60V 38Ah','Cell-balancing BMS','Fits Sting / L1e / X3'], price:'£799', tags:['batteries'], badges:['stock'], finance:'~£22/mo', color:'#aaff00', colours:[] },
  { id:'chg-talaria-60v', img:'/images/product-chg-talaria-60v.jpg', desc:'Official Talaria 60V OEM charger for the Sting, Sting R, Sting L1e and X3. The Sting R charger achieves a full 0-100% charge in around 3 hours.', brand:'Talaria', name:'Talaria 60V OEM Charger', specs:['60V charger','~3hr charge','UK plug'], price:'£99', tags:['batteries'], badges:['stock'], finance:null, color:'#aaff00', colours:[] },
  { id:'bat-talaria-72v', img:'/images/product-bat-talaria-72v.jpg', desc:'Genuine replacement 72V 40Ah lithium-ion battery pack (2,880Wh) for the Talaria Sting MX5 Pro and Komodo. Talaria\'s most powerful battery with advanced BMS.', brand:'Talaria', name:'Talaria 72V 40Ah Replacement Battery (MX5 / Komodo)', specs:['72V 40Ah','2,880Wh','Fits MX5 Pro & Komodo'], price:'£1,099', tags:['batteries'], badges:['stock'], finance:'~£31/mo', color:'#aaff00', colours:[] },
  { id:'chg-talaria-72v', img:'/images/product-chg-talaria-72v.jpg', desc:'Official Talaria 72V charger for the Sting MX5 Pro and Komodo battery packs. Not interchangeable with 60V Talaria models.', brand:'Talaria', name:'Talaria 72V Charger (MX5 / Komodo)', specs:['72V charger','Smart protection','UK plug'], price:'£119', tags:['batteries'], badges:['stock'], finance:null, color:'#aaff00', colours:[] },
  // ── Stark Varg ──
  { id:'bat-stark-varg', img:'/images/product-bat-stark-varg.jpg', desc:'Genuine replacement 6.5kWh battery pack for the Stark Varg MX 1.2 and Varg EX. Features the patented honeycomb magnesium "Flying V" case for cooling and a class-leading capacity-to-weight ratio.', brand:'Stark Varg', name:'Stark Varg 6.5kWh Replacement Battery Pack', specs:['6.5kWh','Honeycomb magnesium case','Fits Varg MX & EX'], price:'£3,499', tags:['batteries'], badges:['stock'], finance:'~£97/mo', color:'#aaff00', colours:[] },
  { id:'chg-stark-varg', img:'/images/product-chg-stark-varg.jpg', desc:'Official Stark Varg 3.3kW fast charger. Delivers a full battery charge in under 2 hours from a standard 220V power socket.', brand:'Stark Varg', name:'Stark Varg 3.3kW Fast Charger', specs:['3.3kW output','Full charge under 2hr','220V'], price:'£349', tags:['batteries'], badges:['stock'], finance:null, color:'#aaff00', colours:[] },
  { id:'chg-stark-110v', img:'/images/product-chg-stark-110v.jpg', desc:'110V charging adapter for the Stark Varg fast charger, for use with 110V power sockets.', brand:'Stark Varg', name:'Stark Varg 110V Charging Adapter', specs:['110V adapter','For Varg charger','Compact'], price:'£89', tags:['batteries'], badges:['stock'], finance:null, color:'#aaff00', colours:[] },
  // ── KTM ──
  { id:'bat-ktm-sxe5', img:'/images/product-bat-ktm-sxe5.jpg', desc:'Genuine KTM PowerPack lithium-ion battery for the SX-E 5. 84 cells in a die-cast aluminium casing storing 907Wh, with an integrated battery management system.', brand:'KTM', name:'KTM PowerPack 907Wh Battery (SX-E 5)', specs:['907Wh / 21Ah','84 Li-Ion cells','Fits SX-E 5'], price:'£1,299', tags:['batteries'], badges:['stock'], finance:'~£36/mo', color:'#ff6600', colours:[] },
  { id:'bat-ktm-sxe3', img:'/images/product-bat-ktm-sxe3.jpg', desc:'Genuine KTM PowerPack lithium-ion battery for the SX-E 3. 60 cells storing 648Wh with an integrated BMS. The SX-E 3 can also be upgraded to the larger SX-E 5 pack.', brand:'KTM', name:'KTM PowerPack 648Wh Battery (SX-E 3)', specs:['648Wh','60 Li-Ion cells','Fits SX-E 3'], price:'£999', tags:['batteries'], badges:['stock'], finance:'~£28/mo', color:'#ff6600', colours:[] },
  { id:'chg-ktm', img:'/images/product-chg-ktm.jpg', desc:'Official KTM 900W worldwide charger for the SX-E 2, SX-E 3 and SX-E 5. Connects to any 80-240V socket and charges the SX-E 5 from 0-80% in just 45 minutes.', brand:'KTM', name:'KTM 900W Charger (SX-E Range)', specs:['900W, 80-240V','0-80% in 45 min','Fits all SX-E'], price:'£249', tags:['batteries'], badges:['stock'], finance:null, color:'#ff6600', colours:[] },
  // ── E Ride Pro ──
  { id:'bat-eride-72v', img:'/images/product-bat-eride-72v.jpg', desc:'Replacement 72V lithium-ion battery pack for the E Ride Pro SS 2.0 and S electric dirt bikes. Please contact us to confirm the exact pack for your model.', brand:'E Ride Pro', name:'E Ride Pro 72V Replacement Battery', specs:['72V Li-Ion','Fits SS 2.0 & S','Smart BMS'], price:'£849', tags:['batteries'], badges:['stock'], finance:'~£24/mo', color:'#aaff00', colours:[] },
  { id:'chg-eride-72v', img:'/images/product-chg-eride-72v.jpg', desc:'Replacement 72V charger for the E Ride Pro SS 2.0 and S electric dirt bikes. Safe, protected charging from a standard UK socket.', brand:'E Ride Pro', name:'E Ride Pro 72V Charger', specs:['72V charger','Smart protection','UK plug'], price:'£109', tags:['batteries'], badges:['stock'], finance:null, color:'#aaff00', colours:[] },
  // ── RFN ──
  { id:'bat-rfn-ares', img:'/images/product-bat-rfn-ares.jpg', desc:'Replacement lithium-ion battery pack for the RFN Ares Rally and Rally Pro electric dirt bikes. Please contact us to confirm the exact pack for your model and year.', brand:'RFN', name:'RFN Ares Replacement Battery', specs:['Li-Ion pack','Fits Ares Rally / Pro','RFN OEM'], price:'£849', tags:['batteries'], badges:['stock'], finance:'~£24/mo', color:'#cc2200', colours:[] },
  { id:'chg-rfn', img:'/images/product-chg-rfn.jpg', desc:'RFN OEM charger for the Ares and Warrior ranges. Reliable, protected charging from a standard UK socket.', brand:'RFN', name:'RFN OEM Charger', specs:['RFN OEM charger','Smart protection','UK plug'], price:'£99', tags:['batteries'], badges:['stock'], finance:null, color:'#cc2200', colours:[] },
  // ── Revvi ──
  { id:'bat-revvi-3618', img:'/images/product-bat-revvi-3618.jpg', desc:'Genuine removable 36V 5.0Ah battery pack to fit the Revvi 18in kids electric bike. Easy to swap for extended ride time.', brand:'Revvi', name:'Revvi 36V 5.0Ah Battery (18in)', specs:['36V 5.0Ah','Removable','Fits Revvi 18in'], price:'£99', tags:['batteries'], badges:['stock'], finance:null, color:'#0088ff', colours:[] },
  { id:'chg-revvi-36v', img:'/images/product-chg-revvi-36v.jpg', desc:'Genuine Revvi 36V 3.0A charger for use with the Revvi 18in and 20in kids electric bikes.', brand:'Revvi', name:'Revvi 36V 3.0A Charger (18in / 20in)', specs:['36V 3.0A','Fits 18in & 20in','UK plug'], price:'£39', tags:['batteries'], badges:['stock'], finance:null, color:'#0088ff', colours:[] },
  { id:'bat-revvi-small', desc:'Replacement battery pack for the Revvi 12in and 16in kids electric balance bikes. Please contact us to confirm the correct pack for your model.', brand:'Revvi', name:'Revvi Battery (12in / 16in)', specs:['Removable pack','Fits 12in & 16in','Revvi OEM'], price:'£69', tags:['batteries'], badges:['stock'], finance:null, color:'#0088ff', colours:[] },
  // ── Razor ──
  { id:'chg-razor-24v', img:'/images/product-chg-razor-24v.jpg', desc:'Replacement 24V 2A battery charger for the Razor MX350 and MX400 Dirt Rocket electric dirt bikes.', brand:'Razor', name:'Razor 24V 2A Charger (MX350 / MX400)', specs:['24V 2A','Fits MX350 & MX400','UK plug'], price:'£25', tags:['batteries'], badges:['stock'], finance:null, color:'#cc2200', colours:[] },
  { id:'bat-razor-24v', img:'/images/product-bat-razor-24v.jpg', desc:'Replacement 24V battery set (2 x 12V) for the Razor MX350 and MX400 Dirt Rocket electric dirt bikes.', brand:'Razor', name:'Razor 24V Battery Set (MX350 / MX400)', specs:['24V (2 x 12V)','Fits MX350 & MX400','Razor spec'], price:'£59', tags:['batteries'], badges:['stock'], finance:null, color:'#cc2200', colours:[] },
  // ════ HELMETS & PROTECTION ════
  { id:'helmet-mx', img:'/images/product-helmet-mx.jpg', desc:'An ECE 22.06-certified adult off-road MX helmet — lightweight, well-ventilated and available in multiple sizes for electric dirt bike and quad riding.', brand:'VoltTrail', name:'Off-Road MX Helmet – Adult', specs:['ECE 22.06','Lightweight','Multiple sizes'], price:'£89', tags:['protection'], badges:['stock'], finance:null, color:'#aaff00', colours:[{hex:'#333333',name:'Black'},{hex:'#ffffff',name:'White'},{hex:'#cc2200',name:'Red'},{hex:'#0088ff',name:'Blue'}] },
  { id:'helmet-kids', img:'/images/product-helmet-kids.jpg', desc:'An ECE-certified kids\' off-road MX helmet in junior sizes — lightweight protection for young electric dirt bike and quad riders.', brand:'VoltTrail', name:'Kids Off-Road MX Helmet', specs:['ECE certified','Junior sizes','Lightweight'], price:'£49', tags:['protection'], badges:['stock'], finance:null, color:'#aaff00', colours:[{hex:'#333333',name:'Black'},{hex:'#cc2200',name:'Red'},{hex:'#aaff00',name:'Green'}] },
  { id:'body-armour', img:'/images/product-body-armour.jpg', desc:'A CE Level 1 body armour set with chest and back protection — lightweight off-road protection for adult electric dirt bike and quad riders.', brand:'VoltTrail', name:'Body Armour Set – Chest & Back', specs:['CE Level 1','Adult','Lightweight'], price:'£65', tags:['protection'], badges:['stock'], finance:null, color:'#aaff00', colours:[] },
  { id:'mx-goggles', img:'/images/product-mx-goggles.jpg', desc:'Anti-fog MX goggles with an adjustable strap and tear-off compatibility — clear vision for off-road electric dirt bike and quad riding.', brand:'VoltTrail', name:'MX Goggles – Anti-Fog', specs:['Anti-fog lens','Adjustable strap','Tear-off ready'], price:'£25', tags:['protection','gear'], badges:['stock'], finance:null, color:'#aaff00', colours:[{hex:'#333333',name:'Black'},{hex:'#aaff00',name:'Green'}] },
  { id:'mx-gloves', img:'/images/product-mx-gloves.jpg', desc:'Breathable off-road riding gloves with touchscreen-compatible fingertips, available in all sizes for electric dirt bike and quad riders.', brand:'VoltTrail', name:'Off-Road Riding Gloves', specs:['Breathable','Touchscreen','All sizes'], price:'£22', tags:['gear'], badges:['stock'], finance:null, color:'#aaff00', colours:[{hex:'#333333',name:'Black'},{hex:'#cc2200',name:'Red'}] },
  { id:'mx-boots', img:'/images/product-mx-boots.jpg', desc:'Adult motocross boots with strong ankle support, secure buckle closure and a grippy off-road sole for electric dirt bike and quad riding.', brand:'VoltTrail', name:'Motocross Boots – Adult', specs:['Ankle support','Buckle closure','Off-road sole'], price:'£119', tags:['gear'], badges:['stock'], finance:null, color:'#aaff00', colours:[{hex:'#333333',name:'Black'},{hex:'#ffffff',name:'White'}] },
  { id:'chain-sprocket', img:'/images/product-chain-sprocket.jpg', desc:'A durable off-road chain and sprocket kit sized to fit popular Sur-Ron and Talaria electric dirt bikes.', brand:'VoltTrail', name:'Chain & Sprocket Kit', specs:['Off-road spec','Sur-Ron/Talaria fit','Durable'], price:'£59', tags:['parts-upgrades'], badges:['stock'], finance:null, color:'#aaff00', colours:[] },
  { id:'brake-pads', img:'/images/product-brake-pads.jpg', desc:'Sintered performance brake pads (sold as a pair) offering a strong bite and long service life for electric dirt bikes.', brand:'VoltTrail', name:'Performance Brake Pads (Pair)', specs:['Sintered','Strong bite','Long life'], price:'£29', tags:['parts-upgrades'], badges:['stock'], finance:null, color:'#aaff00', colours:[] },
  { id:'offroad-tyre', img:'/images/product-offroad-tyre.jpg', desc:'An off-road knobbly tyre in 19in and 18in fitments, with an aggressive tread pattern for grip on dirt, trails and tracks.', brand:'VoltTrail', name:'Off-Road Knobbly Tyre', specs:['19in / 18in','Off-road tread','Tube type'], price:'£45', tags:['tyres'], badges:['stock'], finance:null, color:'#aaff00', colours:[] },
  // ════ BIKE PARTS & UPGRADES ════
  { id:'front-sprocket', img:'/images/product-front-sprocket.jpg', desc:'An upgraded front sprocket for Sur-Ron and Talaria electric dirt bikes — the cheapest, most popular performance mod. Change your gearing for more top speed or more low-end torque to suit your riding.', brand:'VoltTrail', name:'Upgraded Front Sprocket', specs:['Sur-Ron / Talaria fit','Changes gearing','Hardened steel'], price:'£24', tags:['parts-upgrades'], badges:['stock'], finance:null, color:'#aaff00', colours:[] },
  { id:'inner-tube', img:'/images/product-inner-tube.jpg', desc:'A heavy-duty inner tube for 19in and 18in electric dirt bike wheels. A high-wear consumable — keep a spare for trail-side puncture repairs.', brand:'VoltTrail', name:'Heavy-Duty Inner Tube (19in / 18in)', specs:['19in / 18in','Heavy-duty','Puncture spare'], price:'£15', tags:['parts-upgrades'], badges:['stock'], finance:null, color:'#aaff00', colours:[] },
  { id:'handlebar-kit', img:'/images/product-handlebar-kit.jpg', desc:'A handlebar and grips upgrade kit for electric dirt bikes — a popular comfort and control upgrade, and a common replacement after a fall. Improves feel and confidence on the trail.', brand:'VoltTrail', name:'Handlebar & Grips Upgrade Kit', specs:['Tapered alloy bar','Off-road grips','Universal fit'], price:'£45', tags:['parts-upgrades'], badges:['stock'], finance:null, color:'#aaff00', colours:[] },
  { id:'kickstand', img:'/images/product-kickstand.jpg', desc:'A folding side stand for Sur-Ron and Talaria electric dirt bikes. The OEM stand is a common early weak point — this heavy-duty replacement is a popular upgrade.', brand:'VoltTrail', name:'Folding Side Stand / Kickstand', specs:['Sur-Ron / Talaria fit','Heavy-duty','Spring-loaded'], price:'£35', tags:['parts-upgrades'], badges:['stock'], finance:null, color:'#aaff00', colours:[] },
  { id:'led-headlight', img:'/images/product-led-headlight.jpg', desc:'An LED headlight upgrade for electric dirt bikes — the top off-road visibility upgrade and an essential part of any road-legal conversion. Bright, low-draw and durable.', brand:'VoltTrail', name:'LED Headlight Upgrade', specs:['High-output LED','Low power draw','Off-road & road use'], price:'£49', tags:['parts-upgrades'], badges:['stock'], finance:null, color:'#aaff00', colours:[] },
  { id:'cooling-fan', img:'/images/product-cooling-fan.jpg', desc:'A motor and controller cooling fan kit for electric dirt bikes — sought-after by riders pushing higher power. Helps keep your drivetrain cool on long, hard rides. Confirm fitment for your model.', brand:'VoltTrail', name:'Motor / Controller Cooling Fan Kit', specs:['Improves cooling','For higher power','Confirm fitment'], price:'£39', tags:['parts-upgrades'], badges:['stock'], finance:null, color:'#aaff00', colours:[] },
  // ════ TYRES & WHEELS ════
  { id:'shinko-241', img:'/images/product-shinko-241.jpg', desc:'The Shinko 241 dual-sport tyre in 19in — the most popular tyre in the electric dirt bike segment. Excels on hard-pack, rocky trails and the road, making it the default choice for Sur-Ron and Talaria-class bikes.', brand:'Shinko', name:'Shinko 241 Dual-Sport Tyre (19in)', specs:['19in dual-sport','Hard-pack & road','Segment best-seller'], price:'£55', tags:['tyres'], badges:['stock'], finance:null, color:'#aaff00', colours:[] },
  { id:'front-mx-tyre', img:'/images/product-front-mx-tyre.jpg', desc:'A front knobbly MX tyre in 70/100-19 — the front-specific companion to a rear knobbly. Aggressive tread for confident steering and grip on loose off-road terrain.', brand:'VoltTrail', name:'Front Knobbly MX Tyre (70/100-19)', specs:['70/100-19 front','Off-road tread','Sur-Ron / Talaria fit'], price:'£42', tags:['tyres'], badges:['stock'], finance:null, color:'#aaff00', colours:[] },
  { id:'tyre-tubes-pair', img:'/images/product-tyre-tubes-pair.jpg', desc:'A pair of heavy-duty tyre tubes for electric dirt bikes — a high-turnover consumable bought with every new tyre. Keep spares for trail-side repairs.', brand:'VoltTrail', name:'Heavy-Duty Tyre Tubes (Pair)', specs:['Pair of tubes','Heavy-duty','19in / 18in'], price:'£22', tags:['tyres'], badges:['stock'], finance:null, color:'#aaff00', colours:[] },
  { id:'wheel-rear', img:'/images/product-wheel-rear.jpg', desc:'A complete rear wheel for 19in electric dirt bikes with the tyre already fitted. Saves a workshop visit — a popular choice after rim damage. Confirm fitment for your model.', brand:'VoltTrail', name:'Complete Rear Wheel (19in, Tyre Fitted)', specs:['19in rear','Tyre pre-fitted','Confirm fitment'], price:'£199', tags:['tyres'], badges:['stock'], finance:null, color:'#aaff00', colours:[] },
  { id:'wheel-front', img:'/images/product-wheel-front.jpg', desc:'A complete front wheel for 19in electric dirt bikes with the tyre already fitted. Sold as a pair option with the rear wheel — a fast fix after rim damage. Confirm fitment for your model.', brand:'VoltTrail', name:'Complete Front Wheel (19in, Tyre Fitted)', specs:['19in front','Tyre pre-fitted','Confirm fitment'], price:'£189', tags:['tyres'], badges:['stock'], finance:null, color:'#aaff00', colours:[] },
];

// ── BIKE SVG GENERATOR ──
function bikeSVG(color) {
  const c = color || '#aaff00';
  return `<svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="45" cy="100" r="26" stroke="${c}" stroke-width="2.5" fill="none"/>
    <circle cx="45" cy="100" r="17" stroke="#1e231e" stroke-width="7" fill="none"/>
    <circle cx="45" cy="100" r="5" fill="${c}"/>
    <circle cx="155" cy="100" r="26" stroke="${c}" stroke-width="2.5" fill="none"/>
    <circle cx="155" cy="100" r="17" stroke="#1e231e" stroke-width="7" fill="none"/>
    <circle cx="155" cy="100" r="5" fill="${c}"/>
    <path d="M65 98 L58 55 L98 38 L135 46 L155 72 L155 98" stroke="#8a9488" stroke-width="2" fill="none"/>
    <path d="M58 55 L98 98" stroke="#8a9488" stroke-width="1.5" fill="none"/>
    <path d="M98 38 L97 98" stroke="#8a9488" stroke-width="1.5" fill="none"/>
    <rect x="90" y="28" width="52" height="14" rx="7" fill="#1e231e" stroke="#4a5248" stroke-width="1"/>
    <path d="M70 66 L96 44 L133 50 L138 68 L98 74Z" fill="#1e231e" stroke="#4a5248" stroke-width="1"/>
    <rect x="82" y="74" width="30" height="22" rx="3" fill="${c}" opacity="0.18"/>
    <rect x="82" y="74" width="30" height="22" rx="3" stroke="${c}" stroke-width="1.5" fill="none"/>
    <path d="M58 55 L47 98" stroke="#8a9488" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M65 55 L54 98" stroke="#4a5248" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M97 96 L155 96" stroke="#8a9488" stroke-width="2" stroke-linecap="round"/>
    <path d="M52 48 L63 38 L78 40" stroke="#8a9488" stroke-width="2" stroke-linecap="round" fill="none"/>
    <ellipse cx="48" cy="52" rx="7" ry="5" fill="${c}" opacity="0.7"/>
  </svg>`;
}

function quadSVG(color) {
  const c = color || '#aaff00';
  return `<svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="38" cy="98" r="22" stroke="${c}" stroke-width="2.5" fill="none"/>
    <circle cx="38" cy="98" r="14" stroke="#1e231e" stroke-width="6" fill="none"/>
    <circle cx="38" cy="98" r="4" fill="${c}"/>
    <circle cx="162" cy="98" r="22" stroke="${c}" stroke-width="2.5" fill="none"/>
    <circle cx="162" cy="98" r="14" stroke="#1e231e" stroke-width="6" fill="none"/>
    <circle cx="162" cy="98" r="4" fill="${c}"/>
    <rect x="55" y="60" width="90" height="30" rx="8" fill="#1e231e" stroke="#4a5248" stroke-width="1.5"/>
    <rect x="65" y="38" width="70" height="26" rx="6" fill="#181c18" stroke="#4a5248" stroke-width="1.5"/>
    <rect x="75" y="68" width="50" height="18" rx="3" fill="${c}" opacity="0.15"/>
    <rect x="75" y="68" width="50" height="18" rx="3" stroke="${c}" stroke-width="1.5" fill="none"/>
    <path d="M55 75 L38 88" stroke="#8a9488" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M145 75 L162 88" stroke="#8a9488" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M80 38 L80 30 L120 30 L120 38" stroke="#8a9488" stroke-width="2" stroke-linecap="round" fill="none"/>
    <rect x="82" y="24" width="36" height="10" rx="5" fill="#1e231e" stroke="#4a5248" stroke-width="1"/>
  </svg>`;
}

function partSVG() {
  return `<svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="60" y="35" width="80" height="60" rx="8" fill="#1e231e" stroke="#4a5248" stroke-width="1.5"/>
    <rect x="72" y="47" width="56" height="36" rx="4" fill="#aaff00" opacity="0.1"/>
    <rect x="72" y="47" width="56" height="36" rx="4" stroke="#aaff00" stroke-width="1.5" fill="none"/>
    <line x1="100" y1="35" x2="100" y2="25" stroke="#8a9488" stroke-width="2" stroke-linecap="round"/>
    <line x1="100" y1="95" x2="100" y2="105" stroke="#8a9488" stroke-width="2" stroke-linecap="round"/>
    <line x1="60" y1="65" x2="50" y2="65" stroke="#8a9488" stroke-width="2" stroke-linecap="round"/>
    <line x1="140" y1="65" x2="150" y2="65" stroke="#8a9488" stroke-width="2" stroke-linecap="round"/>
    <circle cx="100" cy="65" r="10" fill="#aaff00" opacity="0.2"/>
    <circle cx="100" cy="65" r="6" stroke="#aaff00" stroke-width="1.5" fill="none"/>
  </svg>`;
}

// ── RENDER PRODUCT CARD ──
function renderCard(item, type) {
  const activeColor = item.color || '#aaff00';
  const svg = type === 'quad' ? quadSVG(activeColor) : type === 'part' ? partSVG() : bikeSVG(activeColor);
  const visual = item.img
    ? `<picture><source srcset="${item.img.replace('.jpg','.webp')}" type="image/webp"><img src="${item.img}" alt="${item.name} - ${item.brand} electric ${type==='quad'?'quad bike':'dirt bike'}" class="product-photo" loading="lazy" decoding="async" width="600" height="600"></picture>`
    : svg;
  const cardId = 'card-' + item.id + '-' + Math.random().toString(36).slice(2,6);
  const badgeHtml = (item.badges||[]).map(b => {
    if(b==='new') return '<span class="badge badge-new">New</span>';
    if(b==='sale') return '<span class="badge badge-sale">Sale</span>';
    if(b==='road') return '<span class="badge badge-road">Road Legal</span>';
    if(b==='stock') return '<span class="badge badge-stock"><span class="dot dot-green"></span> In Stock</span>';
    if(b==='preorder') return '<span class="badge badge-preorder">Pre-Order</span>';
    return '';
  }).join('');
  const specHtml = (item.specs||[]).map(s=>`<span class="product-spec-tag">${s}</span>`).join('');
  const oldPrice = item.oldPrice ? `<span class="product-price-old">${item.oldPrice}</span>` : '';
  const _pi4 = payIn4(item.price);
  const financeLine = (item.finance && _pi4) ? `<div class="product-finance">or 4 payments of ${_pi4}</div>` : '';
  const pageTarget = item.page || 'shop';
  // Colour swatches
  const colours = item.colours || [];
  const swatchHtml = colours.length > 1 ? `
    <div class="colour-picker">
      <div class="colour-picker-head">Colour: <strong id="${cardId}-label">${colours[0].name}</strong></div>
      <div class="colour-swatches" id="${cardId}-swatches">
        ${colours.map((c,i) => `<div class="colour-swatch${i===0?' active':''}" style="background:${c.hex}" title="${c.name}" data-card="${cardId}" data-hex="${c.hex}" data-name="${c.name}" onclick="event.preventDefault();event.stopPropagation();selectColour(this,'${cardId}')"></div>`).join('')}
      </div>
    </div>` : '';
  const _prodPath = '/product/' + item.id;
  return `<a class="product-card" id="${cardId}" href="${_prodPath}" data-route="product:${item.id}" aria-label="${item.name}">
    <div class="product-img" id="${cardId}-img">
      ${visual}
      <div class="product-img-overlay"></div>
      <div class="product-badges">${badgeHtml}</div>
      <button class="wishlist-btn" aria-label="Add to wishlist" onclick="event.preventDefault();event.stopPropagation()">♡</button>
    </div>
    <div class="product-info">
      <div class="product-brand">${item.brand}${item.age ? ` <span class="product-age">${item.age}</span>` : ''}</div>
      <div class="product-name">${item.name}</div>
      <div class="product-spec-row">${specHtml}</div>
      ${swatchHtml}
      <div class="product-price-row">
        <div>${oldPrice}<div class="product-price">${item.price}</div>${financeLine}</div>
        ${item.price === 'Enquire'
          ? `<button class="add-btn" onclick="event.preventDefault();event.stopPropagation();showPage('contact')">Enquire</button>`
          : `<button class="add-btn" onclick="event.preventDefault();event.stopPropagation();addToCartFromCard('${cardId}','${item.name}','${item.price}')">Add</button>`}
      </div>
    </div>
  </a>`;
}

function selectColour(swatchEl, cardId) {
  const hex = swatchEl.dataset.hex;
  const name = swatchEl.dataset.name;
  // Update active swatch
  const container = document.getElementById(cardId + '-swatches');
  if(container) container.querySelectorAll('.colour-swatch').forEach(s => s.classList.remove('active'));
  swatchEl.classList.add('active');
  // Update label
  const label = document.getElementById(cardId + '-label');
  if(label) label.textContent = name;
  // Re-render the SVG in the card with new colour
  const imgDiv = document.getElementById(cardId + '-img');
  if(imgDiv && !imgDiv.querySelector('.product-photo')) {
    const type = imgDiv.querySelector('svg') ? (imgDiv.innerHTML.includes('cx="38"') ? 'quad' : 'bike') : 'part';
    let newSvg;
    if(type === 'quad') newSvg = quadSVG(hex);
    else if(type === 'bike') newSvg = bikeSVG(hex);
    else newSvg = partSVG();
    // Preserve overlay, badges, wishlist
    const overlay = imgDiv.querySelector('.product-img-overlay').outerHTML;
    const badges = imgDiv.querySelector('.product-badges').outerHTML;
    const wishlist = imgDiv.querySelector('.wishlist-btn').outerHTML;
    imgDiv.innerHTML = newSvg + overlay + badges + wishlist;
  }
}

// ── POPULATE GRIDS ──
function populateGrid(id, items, type) {
  const el = document.getElementById(id);
  if(!el) return;
  el.innerHTML = items.map(i => renderCard(i, type)).join('');
}

// ══════════════════════════════════════════════════════════
//  UNIVERSAL PRODUCT DETAIL PAGE
//  Renders any product (bike/quad/part) from its data record,
//  builds breadcrumbs, full spec table, and JSON-LD for SEO.
// ══════════════════════════════════════════════════════════
function findProduct(id) {
  return bikes.find(b=>b.id===id) || quads.find(q=>q.id===id) || parts.find(p=>p.id===id) || null;
}
function productType(item) {
  if(bikes.includes(item)) return 'bike';
  if(quads.includes(item)) return 'quad';
  return 'part';
}
function priceToNumber(p) {
  const n = parseFloat(String(p).replace(/[^0-9.]/g,''));
  return isNaN(n) ? null : n;
}
// Pay-in-4: returns the per-instalment amount as a formatted string, or null
function payIn4(price) {
  const n = priceToNumber(price);
  if(n === null || n <= 0) return null;
  const each = n / 4;
  return '£' + each.toLocaleString('en-GB', {minimumFractionDigits:2, maximumFractionDigits:2});
}

// ══════════════════════════════════════════════════════════
//  BLOG SYSTEM
// ══════════════════════════════════════════════════════════
function findBlogPost(slug) {
  return BLOG_POSTS.find(p => p.slug === slug) || null;
}
function _blogDateFmt(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString('en-GB', {day:'numeric', month:'long', year:'numeric'});
  } catch(e) { return iso; }
}
function _blogCardHTML(post) {
  return '<a class="blog-card" href="/blog/' + post.slug + '" data-route="blog:' + post.slug + '">'
    + '<div class="blog-card-header" style="background:linear-gradient(135deg,' + post.hdrColor + ' 0%,#0a0a0a 100%)">' + post.hdrEmoji + '</div>'
    + '<div class="blog-card-body">'
    + '<div class="blog-card-cat">' + post.cat + '</div>'
    + '<h2 class="blog-card-title">' + post.title + '</h2>'
    + '<p class="blog-card-desc">' + post.desc + '</p>'
    + '<div class="blog-card-meta"><span>' + _blogDateFmt(post.date) + '</span><span>' + post.read + '</span></div>'
    + '</div></a>';
}
function renderBlogIndex() {
  const grid = document.getElementById('blog-index-grid');
  if(!grid) return;
  // Sort newest first
  const posts = BLOG_POSTS.slice().sort((a,b) => b.date.localeCompare(a.date));
  grid.innerHTML = posts.map(_blogCardHTML).join('');
}
function _injectBlogSchema(post) {
  ['blog-jsonld','blog-faq-jsonld','blog-breadcrumb-jsonld'].forEach(id => {
    const o = document.getElementById(id); if(o) o.remove();
  });
  const url = SITE_ORIGIN + '/blog/' + post.slug;
  // Article schema
  const article = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.desc,
    "image": SITE_ORIGIN + '/og-image.jpg',
    "datePublished": post.date,
    "dateModified": post.date,
    "author": { "@type": "Organization", "name": "VoltTrail" },
    "publisher": {
      "@type": "Organization", "name": "VoltTrail",
      "logo": { "@type": "ImageObject", "url": SITE_ORIGIN + '/og-image.jpg' }
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": url },
    "url": url,
    "keywords": post.kw
  };
  const s1 = document.createElement('script');
  s1.type = 'application/ld+json'; s1.id = 'blog-jsonld';
  s1.textContent = JSON.stringify(article);
  document.head.appendChild(s1);
  // FAQ schema (if FAQs present)
  if(post.faq && post.faq.length) {
    const faq = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": post.faq.map(qa => ({
        "@type": "Question",
        "name": qa[0],
        "acceptedAnswer": { "@type": "Answer", "text": qa[1] }
      }))
    };
    const s2 = document.createElement('script');
    s2.type = 'application/ld+json'; s2.id = 'blog-faq-jsonld';
    s2.textContent = JSON.stringify(faq);
    document.head.appendChild(s2);
  }
  // Breadcrumb
  const crumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type":"ListItem","position":1,"name":"Home","item":SITE_ORIGIN+'/'},
      {"@type":"ListItem","position":2,"name":"Blog","item":SITE_ORIGIN+'/blog'},
      {"@type":"ListItem","position":3,"name":post.title,"item":url}
    ]
  };
  const s3 = document.createElement('script');
  s3.type = 'application/ld+json'; s3.id = 'blog-breadcrumb-jsonld';
  s3.textContent = JSON.stringify(crumb);
  document.head.appendChild(s3);
}
function renderBlogPost(slug) {
  const post = findBlogPost(slug);
  if(!post) { showPage('404'); return; }
  // SEO meta
  document.title = post.title + ' | VoltTrail';
  _setMeta('description', post.desc);
  _setMeta('og:title', post.title, 'property');
  _setMeta('og:description', post.desc, 'property');
  _setMeta('og:type', 'article', 'property');
  _setMeta('og:url', SITE_ORIGIN + '/blog/' + post.slug, 'property');
  _setMeta('og:image', SITE_ORIGIN + '/og-image.jpg', 'property');
  _setMeta('twitter:card', 'summary_large_image');
  _setMeta('twitter:title', post.title);
  _setMeta('twitter:description', post.desc);
  _setMeta('twitter:image', SITE_ORIGIN + '/og-image.jpg');
  _setMeta('article:published_time', post.date, 'property');
  _setMeta('keywords', post.kw);
  let canon = document.head.querySelector('link[rel="canonical"]');
  if(canon) canon.setAttribute('href', SITE_ORIGIN + '/blog/' + post.slug);
  _setMeta('robots', 'index, follow, max-image-preview:large, max-snippet:-1');
  _injectBlogSchema(post);
  // Breadcrumb
  const bc = document.getElementById('blog-post-breadcrumb');
  if(bc) bc.innerHTML = '<a href="/" data-route="home">Home</a><span class="sep">/</span>'
    + '<a href="/blog" data-route="blog">Blog</a><span class="sep">/</span>'
    + '<span class="current">' + post.title + '</span>';
  // Header
  const hdr = document.getElementById('blog-post-header');
  if(hdr) hdr.innerHTML =
    '<div class="blog-post-hero" style="background:linear-gradient(135deg,' + post.hdrColor + ' 0%,#0a0a0a 100%)">' + post.hdrEmoji + '</div>'
    + '<div class="blog-post-cat">' + post.cat + '</div>'
    + '<h2 class="page-h1 blog-post-h1">' + post.h1 + '</h2>'
    + '<div class="blog-post-meta"><span>' + _blogDateFmt(post.date) + '</span><span>' + post.read + '</span><span>By VoltTrail</span></div>';
  // Update the static H1 placeholder (promoted by early bootstrap) with the real blog title.
  // The visible heading stays as the H2 inside the blog hero — the H1 stays off-screen for SEO.
  try {
    var staticBlogH1 = document.getElementById('blog-h1-static');
    if (staticBlogH1) staticBlogH1.textContent = post.h1;
  } catch(e) {}
  // Body
  const body = document.getElementById('blog-post-body');
  if(body) body.innerHTML = post.body;
  // FAQ
  const faqEl = document.getElementById('blog-post-faq');
  if(faqEl && post.faq && post.faq.length) {
    faqEl.innerHTML = '<div class="blog-faq"><h2>Frequently Asked Questions</h2>'
      + post.faq.map(qa => '<div class="blog-faq-q"><div class="blog-faq-q-title">' + qa[0] + '</div><div class="blog-faq-q-ans">' + qa[1] + '</div></div>').join('')
      + '</div>';
  } else if(faqEl) {
    faqEl.innerHTML = '';
  }
  // Related products
  const relEl = document.getElementById('blog-post-rel');
  if(relEl && post.rel && post.rel.length && typeof findProduct === 'function') {
    const rel = post.rel.map(findProduct).filter(Boolean);
    if(rel.length) {
      relEl.innerHTML = '<div class="blog-rel"><h2>Related Products</h2><div class="product-grid">'
        + rel.map(p => renderCard(p, productType(p))).join('')
        + '</div></div>';
    } else { relEl.innerHTML = ''; }
  } else if(relEl) {
    relEl.innerHTML = '';
  }
}

function _injectProductSchema(item) {
  ['product-jsonld','breadcrumb-jsonld'].forEach(idv=>{
    const o = document.getElementById(idv); if(o) o.remove();
  });
  const num = priceToNumber(item.price);
  const type = productType(item);
  const catName = type==='quad' ? 'Electric Quad Bike' : (type==='part' ? 'Parts & Accessories' : 'Electric Dirt Bike');
  const url = SITE_ORIGIN + '/product/' + item.id;
  const imgUrl = item.img ? SITE_ORIGIN + item.img : SITE_ORIGIN + '/og-image.jpg';
  // Product schema — fully Merchant Center-ready
  const data = {
    "@context":"https://schema.org/","@type":"Product",
    "name": item.name,
    "sku": "VT-" + item.id.toUpperCase(),
    "mpn": item.id,
    "brand": {"@type":"Brand","name": item.brand},
    "manufacturer": {"@type":"Organization","name": item.brand},
    "description": item.desc || (item.name + '. Available at VoltTrail UK.'),
    "category": catName,
    "image": [imgUrl],
    "url": url,
    "inLanguage": "en-GB"
  };
  if(num !== null) {
    data.offers = {
      "@type":"Offer","priceCurrency":"GBP","price":num,
      "availability": item.badges && item.badges.includes('stock') ? "https://schema.org/InStock" : "https://schema.org/PreOrder",
      "itemCondition":"https://schema.org/NewCondition",
      "url": url,
      "priceValidUntil": (new Date().getFullYear()+1) + "-12-31",
      "seller": {"@type":"Organization","name":"VoltTrail","url":SITE_ORIGIN},
      "shippingDetails": {"@type":"OfferShippingDetails",
        "shippingRate":{"@type":"MonetaryAmount","value":0,"currency":"GBP"},
        "shippingDestination":{"@type":"DefinedRegion","addressCountry":"GB"},
        "deliveryTime":{"@type":"ShippingDeliveryTime",
          "handlingTime":{"@type":"QuantitativeValue","minValue":0,"maxValue":1,"unitCode":"DAY"},
          "transitTime":{"@type":"QuantitativeValue","minValue":3,"maxValue":5,"unitCode":"DAY"}}},
      "hasMerchantReturnPolicy": {"@type":"MerchantReturnPolicy",
        "applicableCountry":"GB",
        "returnPolicyCategory":"https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays":14,
        "returnMethod":"https://schema.org/ReturnByMail",
        "returnFees":"https://schema.org/FreeReturn"}
    };
  }
  const s = document.createElement('script');
  s.type = 'application/ld+json'; s.id = 'product-jsonld';
  s.textContent = JSON.stringify(data);
  document.head.appendChild(s);
  // BreadcrumbList schema
  const catPath = type==='quad' ? '/electric-quad-bikes' : (type==='part' ? '/parts-accessories' : '/electric-dirt-bikes');
  const crumbData = {
    "@context":"https://schema.org/","@type":"BreadcrumbList",
    "itemListElement":[
      {"@type":"ListItem","position":1,"name":"Home","item":SITE_ORIGIN+'/'},
      {"@type":"ListItem","position":2,"name":catName+'s',"item":SITE_ORIGIN+catPath},
      {"@type":"ListItem","position":3,"name":item.name,"item":url}
    ]
  };
  const b = document.createElement('script');
  b.type = 'application/ld+json'; b.id = 'breadcrumb-jsonld';
  b.textContent = JSON.stringify(crumbData);
  document.head.appendChild(b);
}
function renderProductPage(id) {
  const item = findProduct(id);
  const body = document.getElementById('product-detail-body');
  const crumb = document.getElementById('product-breadcrumb');
  if(!item || !body) { showPage('404'); return; }
  const type = productType(item);
  // SEO: title, meta, canonical
  const seoTitle = item.name + ' | ' + item.brand + ' \u2013 VoltTrail UK';
  const seoDesc = (item.desc ? item.desc + ' ' : 'Buy the ' + item.name + ' at VoltTrail. ')
    + (item.price!=='Enquire' ? item.price + '. ' : '') + 'Free UK delivery, finance available.';
  document.title = seoTitle;
  _setMeta('description', seoDesc);
  _setMeta('og:title', seoTitle, 'property');
  _setMeta('og:description', seoDesc, 'property');
  _setMeta('og:type', 'product', 'property');
  _setMeta('og:url', SITE_ORIGIN + '/product/' + item.id, 'property');
  _setMeta('og:image', item.img ? SITE_ORIGIN + item.img : SITE_ORIGIN + '/og-image.jpg', 'property');
  _setMeta('twitter:card', 'summary_large_image');
  _setMeta('twitter:title', seoTitle);
  _setMeta('twitter:description', seoDesc);
  _setMeta('twitter:image', item.img ? SITE_ORIGIN + item.img : SITE_ORIGIN + '/og-image.jpg');
  if(item.price !== 'Enquire') {
    _setMeta('product:price:amount', String(priceToNumber(item.price)), 'property');
    _setMeta('product:price:currency', 'GBP', 'property');
  }
  let canon = document.head.querySelector('link[rel="canonical"]');
  if(canon) canon.setAttribute('href', SITE_ORIGIN + '/product/' + item.id);
  _setMeta('robots','index, follow, max-image-preview:large, max-snippet:-1');
  _injectProductSchema(item);
  // Update the static H1 placeholder (promoted by early bootstrap) with the real product name
  // so the H1 text matches the product. The H1 stays visually hidden — the visible product name
  // is the H2.detail-name inside the product-detail-body grid, which preserves the existing layout.
  try {
    var staticH1 = document.getElementById('product-h1-static');
    if (staticH1) staticH1.textContent = item.name;
  } catch(e) {}
  // Fire Meta Pixel + GA ViewContent / view_item event for ad optimisation
  try {
    const _vcPrice = priceToNumber(item.price) || 0;
    if (typeof fbq === 'function') fbq('track', 'ViewContent', {
      content_ids: [item.id],
      content_name: item.name,
      content_type: 'product',
      content_category: item.brand,
      value: _vcPrice,
      currency: 'GBP'
    });
    if (typeof gtag === 'function') gtag('event', 'view_item', {
      currency: 'GBP', value: _vcPrice,
      items: [{ item_id: item.id, item_name: item.name, item_brand: item.brand, price: _vcPrice, quantity: 1 }]
    });
  } catch(e) {}
  // Breadcrumb
  const catRoute = type==='quad' ? 'quads' : (type==='part' ? 'parts' : 'shop');
  const catName = type==='quad' ? 'Electric Quad Bikes' : (type==='part' ? 'Parts & Accessories' : 'Electric Dirt Bikes');
  crumb.innerHTML = '<a href="/" data-route="home">Home</a><span class="sep">/</span>'
    + '<a href="'+ROUTES[catRoute].path+'" data-route="'+catRoute+'">'+catName+'</a><span class="sep">/</span>'
    + '<span class="current">'+item.name+'</span>';
  // SVG image
  const svg = type==='quad' ? quadSVG(item.color) : (type==='part' ? partSVG() : bikeSVG(item.color));
  const detailVisual = item.img
    ? '<picture><source srcset="'+item.img.replace('.jpg','.webp')+'" type="image/webp"><img src="'+item.img+'" alt="'+item.name+' - '+item.brand+' electric '+(type==='quad'?'quad bike':'dirt bike')+'" class="product-photo" decoding="async" width="800" height="800"></picture>'
    : svg;
  // Badges
  const badgeMap = {new:'<span class="badge badge-new">New</span>', stock:'<span class="badge badge-stock"><span class="dot dot-green" style="display:inline-block;margin-right:4px"></span>In Stock</span>', road:'<span class="badge badge-road">Road Legal</span>', sale:'<span class="badge" style="background:var(--red);color:#fff">Sale</span>'};
  const badges = (item.badges||[]).map(b=>badgeMap[b]||'').join(' ');
  // Spec table
  const specRows = (item.specs||[]).map((s,i)=>'<tr><td>Spec '+(i+1)+'</td><td>'+s+'</td></tr>').join('');
  const roadLegal = (item.tags||[]).includes('road') ? 'Yes — UK road legal' : 'No — off-road / private land use';
  // Finance line
  const _detailPi4 = payIn4(item.price);
  const financeLine = (item.finance && _detailPi4)
    ? '<div class="detail-finance"><strong>Pay in 4:</strong> Split into 4 interest-free payments of '+_detailPi4+'. No interest, no fees. Subject to status.</div>'
    : '';
  // Colour swatches — interactive selector
  let swatches = '';
  if(item.colours && item.colours.length) {
    swatches = '<div class="detail-colour" id="detail-colour-block">'
      + '<div class="detail-colour-head">Choose Colour: <strong id="detail-colour-label">'+item.colours[0].name+'</strong></div>'
      + '<div class="detail-colour-swatches">'
      + item.colours.map((c,i)=>'<span class="detail-swatch'+(i===0?' active':'')+'" title="'+c.name+'" data-name="'+c.name+'" style="background:'+c.hex+'" onclick="selectDetailColour(this)"></span>').join('')
      + '</div></div>';
  }
  const priceLabel = item.price==='Enquire'
    ? '<div class="detail-price">Enquire for price</div>'
    : '<div class="detail-price">'+item.price+'</div><div class="detail-vat">Price inc. VAT. Free UK mainland delivery.</div>';
  const buyBtn = item.price==='Enquire'
    ? '<button class="btn-add-large" onclick="showPage(\'contact\')">Enquire Now</button>'
    : '<button class="btn-add-large" onclick="addToCartFromDetail(\''+item.name.replace(/'/g,"")+'\',\''+item.price+'\')">Add to Cart</button>';
  body.innerHTML =
    '<div class="product-detail-img">'+detailVisual+'</div>'
    + '<div>'
    + '<div class="detail-brand">'+item.brand+'</div>'
    + '<h2 class="page-h1 detail-name">'+item.name+'</h2>'
    + '<p class="detail-subtitle">'+(item.desc || ((type==='quad'?'Electric quad bike':(type==='part'?'Genuine parts & accessories':'Electric dirt bike'))
        + ' from '+item.brand+'. Supplied by VoltTrail with free UK mainland delivery'+(item.finance?' and finance options':'')+'.'))+'</p>'
    + '<div style="display:flex;gap:8px;margin-bottom:20px;flex-wrap:wrap">'+badges+'</div>'
    + priceLabel
    + financeLine
    + swatches
    + (specRows ? '<table class="spec-table" aria-label="Specifications"><tr><td>Brand</td><td>'+item.brand+'</td></tr>'
        + (item.age ? '<tr><td>Suitable Age</td><td>'+item.age+'</td></tr>' : '')
        + specRows
        + (type!=='part' ? '<tr><td>Road Legal</td><td>'+roadLegal+'</td></tr>' : '')
        + '<tr><td>Delivery</td><td>Free UK mainland delivery</td></tr>'
        + '<tr><td>Warranty</td><td>Manufacturer UK warranty</td></tr></table>' : '')
    + '<div class="detail-actions">'+buyBtn
    + '<button class="btn-outline" style="padding:16px 20px" onclick="showPage(\'contact\')">Ask a Question</button></div>'
    + (type!=='part' && !(item.tags||[]).includes('road')
        ? '<div class="legal-disclaimer" style="margin-top:20px;font-size:12px"><strong>\u26a0 Off-road use on private land only.</strong> Not road legal in the UK without type approval and DVLA registration.</div>'
        : '')
    + '</div>';
  // Related products — same type, prefer same brand
  let pool = (type==='quad'?quads:type==='part'?parts:bikes).filter(p=>p.id!==item.id);
  const sameBrand = pool.filter(p=>p.brand===item.brand);
  const related = (sameBrand.length>=3 ? sameBrand : sameBrand.concat(pool.filter(p=>p.brand!==item.brand))).slice(0,3);
  const relGrid = document.getElementById('product-related-grid');
  if(relGrid) relGrid.innerHTML = related.map(p=>renderCard(p, productType(p))).join('');
  // ── SEO: full description section with H2, prose, key features ──
  const descEl = document.getElementById('product-description-section');
  if(descEl) {
    const features = (item.specs||[]).map(s=>'<li>'+s+'</li>').join('');
    const isKids = (item.tags||[]).includes('kids');
    descEl.innerHTML =
      '<div class="product-desc-block">'
      + '<h2>About the '+item.name+'</h2>'
      + '<p>'+(item.desc || (item.name+' from '+item.brand+', available at VoltTrail.'))+'</p>'
      + (features ? '<h3>Key Features</h3><ul class="product-feature-list">'+features
          + (item.age ? '<li>Suitable age: '+item.age+'</li>' : '')
          + '<li>Free UK mainland delivery</li><li>Manufacturer UK warranty</li></ul>' : '')
      + '<h3>Buying the '+item.name+' from VoltTrail</h3>'
      + '<p>VoltTrail is a UK specialist in electric dirt bikes and quad bikes. Order the '+item.name
      + ' online with free UK mainland delivery'+(item.finance?' and the option to pay in 4 interest-free instalments':'')
      + '. Need help choosing? Our team is available Monday to Saturday \u2014 '
      + '<a href="/contact" data-route="contact" style="color:var(--volt)">get in touch</a>.</p>'
      + (isKids ? '<p><strong>Parents:</strong> always ensure children wear appropriate safety gear and ride under supervision on private land. '
          + 'See our <a href="/guides/best-kids-electric-dirt-bikes-uk" data-route="guide-kids" style="color:var(--volt)">kids electric dirt bike buying guide</a> for advice.</p>' : '')
      + (type!=='part' && !(item.tags||[]).includes('road')
          ? '<p><strong>Off-road use:</strong> this model is designed for off-road, private land use and is not road legal in the UK without type approval and DVLA registration. See our <a href="/guides/are-electric-dirt-bikes-legal-uk" data-route="guide-legal" style="color:var(--volt)">UK riding laws guide</a>.</p>' : '')
      + '</div>';
  }
}

function initGrids() {
  // Home + main category grids
  populateGrid('featured-grid', bikes.slice(0,4), 'bike');
  populateGrid('shop-grid', bikes.filter(b=>!b.tags.includes('kids')), 'bike');
  populateGrid('quads-grid', quads, 'quad');
  populateGrid('kids-grid', bikes.filter(b=>b.tags.includes('kids')), 'bike');
  populateGrid('road-grid', bikes.filter(b=>b.tags.includes('road')), 'bike');
  // Subcategory grids
  populateGrid('adult-grid', bikes.filter(b=>b.tags.includes('adult')), 'bike');
  populateGrid('adult-quads-grid', quads.filter(q=>q.tags.includes('adult')), 'quad');
  populateGrid('kids-quads-grid', quads.filter(q=>q.tags.includes('kids')), 'quad');
  // Brand grids — dirt bikes
  populateGrid('surron-grid', bikes.filter(b=>b.tags.includes('surron')), 'bike');
  populateGrid('talaria-grid', bikes.filter(b=>b.tags.includes('talaria')), 'bike');
  populateGrid('stark-grid', bikes.filter(b=>b.tags.includes('stark')), 'bike');
  populateGrid('eride-grid', bikes.filter(b=>b.tags.includes('eride')), 'bike');
  populateGrid('ktm-grid', bikes.filter(b=>b.tags.includes('ktm')), 'bike');
  populateGrid('revvi-grid', bikes.filter(b=>b.tags.includes('revvi')), 'bike');
  populateGrid('rfn-grid', bikes.filter(b=>b.tags.includes('rfn')), 'bike');
  // Brand grids — mixed (bikes + quads)
  populateGrid('funbikes-grid', bikes.filter(b=>b.tags.includes('funbikes')).concat(quads.filter(q=>q.tags.includes('funbikes'))), 'bike');
  populateGrid('razor-grid', bikes.filter(b=>b.tags.includes('razor')).concat(quads.filter(q=>q.tags.includes('razor'))), 'bike');
  // Brand grids — quads only
  populateGrid('segway-grid', quads.filter(q=>q.tags.includes('segway')), 'quad');
  populateGrid('ecorider-grid', quads.filter(q=>q.tags.includes('ecorider')), 'quad');
  // Parts
  populateGrid('parts-grid', parts, 'part');
  populateGrid('parts-batteries-grid', parts.filter(p=>p.tags.includes('batteries')), 'part');
  populateGrid('parts-protection-grid', parts.filter(p=>p.tags.includes('protection')), 'part');
  populateGrid('parts-gear-grid', parts.filter(p=>p.tags.includes('gear')), 'part');
  populateGrid('parts-upgrades-grid', parts.filter(p=>p.tags.includes('parts-upgrades')), 'part');
  populateGrid('parts-tyres-grid', parts.filter(p=>p.tags.includes('tyres')), 'part');
  // Related
  populateGrid('related-grid', bikes.filter(b=>b.tags.includes('surron') && b.id!=='ultra-bee').slice(0,3), 'bike');
}

// ── FAQ ──
const faqs = [
  { q:'Are electric dirt bikes legal in the UK?', a:'Riding on private land with the landowner\'s permission is fully legal with no licence required. Riding on public roads requires type-approved bikes, DVLA registration, insurance and the appropriate licence. See our full UK Legal Guide for details.' },
  { q:'Do I need a licence to ride an electric dirt bike?', a:'For off-road, private land use: no licence needed. For road-legal models (L1e): you need a CBT certificate and must be 16+. For L3e models: a full motorcycle licence is required.' },
  { q:'What is the difference between road legal and off-road electric dirt bikes?', a:'Off-road bikes are designed for private land use only. Road-legal bikes have factory type approval (L1e or L3e), meaning they can be registered with the DVLA, insured, and ridden on public roads. Road-legal bikes are labelled clearly on our site.' },
  { q:'Do you offer finance?', a:'Yes. You can pay in 4 interest-free instalments on all orders. The total is split into 4 equal payments with no interest and no fees. Subject to status and minimum age 18.' },
  { q:'How long does delivery take?', a:'In-stock bikes are dispatched within 1–3 business days. Most UK mainland orders arrive within 3–5 business days. Free delivery on all orders. You\'ll receive tracking by email and SMS.' },
  { q:'What warranty do the bikes come with?', a:'All bikes come with a minimum 12-month UK manufacturer warranty. Extended warranty options may be available. Contact us for details.' },
  { q:'Which is better — Sur-Ron or Talaria Sting?', a:'Both are excellent. Sur-Ron is lighter and has the best parts availability and UK community. Talaria Sting R is more powerful and has a higher seat height. See our full comparison guide for a detailed breakdown.' },
  { q:'What age can a child ride an electric dirt bike?', a:'On private land with parental supervision, there is no minimum age requirement in law. We recommend bikes rated 350W and under for ages 3–6, 350W–800W for ages 6–10, and 800W–1800W for ages 10–14. Always supervise young riders.' },
];

function initFAQ() {
  const el = document.getElementById('faq-list');
  if(!el) return;
  el.innerHTML = faqs.map((f,i) => `
    <div class="faq-item" id="faq-${i}">
      <button class="faq-q" onclick="toggleFAQ(${i})" aria-expanded="false">
        <span>${f.q}</span><span class="faq-icon">+</span>
      </button>
      <div class="faq-a">${f.a}</div>
    </div>`).join('');
}

function toggleFAQ(i) {
  const el = document.getElementById('faq-'+i);
  const isOpen = el.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(e=>e.classList.remove('open'));
  if(!isOpen) el.classList.add('open');
}

// ── PAGE NAVIGATION ──
let cartItems = [];

// NOTE: showPage is fully defined later in the script after all page hooks are declared.
// This stub is replaced by the final definition below.

// ════════════════════════════════════════════════════════════
//  SEO ROUTER  — gives every "page" a real, indexable URL.
//  Updates path, <title>, <meta description> and <canonical>
//  so Google Search Console & Bing Webmaster Tools can index
//  each page individually.
// ════════════════════════════════════════════════════════════
const SITE_ORIGIN = 'https://volttrail.org';
// ⚠ REPLACE WITH YOUR WHATSAPP NUMBER — international format, digits only, no + or spaces.
// Example for UK: '447700900000'  (44 = UK, then the number without the leading 0)
const WHATSAPP_NUMBER = '447838207659';
// ⚠ FORMSPREE ENDPOINT — POSTs all forms (orders, contact, newsletter) to contact@volttrail.org.
// If you ever need to change this, sign up at https://formspree.io and paste the new endpoint URL.
const FORMSPREE_URL = 'https://formspree.io/f/xvzydvpb';
const ROUTES = {
  'blog':            { path:'/blog',                              title:"VoltTrail Blog — Electric Dirt Bike & Quad Guides UK", desc:"Reviews, buying guides and legal advice for electric dirt bike and electric quad bike owners in the UK." },
  'home':                  { path: '/',                                                 title: 'Electric Dirt Bikes UK 2026 | Sur-Ron, Talaria, Stark Varg',                  desc: 'Electric dirt bikes UK \u2014 Sur-Ron, Talaria, Stark Varg, KTM & Revvi. Adult, kids and road-legal electric dirt bikes. Free UK delivery, pay in 4. Shop now.' },
  'shop':                  { path: '/electric-dirt-bikes',                              title: 'Electric Dirt Bikes UK | Adult Off-Road Models \u2013 VoltTrail',                      desc: 'Shop adult electric dirt bikes in the UK. Surron, Talaria, Stark Varg and more. Free UK delivery. Pay in 4 interest-free instalments.' },
  'quads':                 { path: '/electric-quad-bikes',                              title: 'Electric Quad Bikes UK | Adult Electric ATVs \u2013 VoltTrail',                        desc: 'Electric quad bikes and ATVs for adults in the UK. Segway Powersports and more. Free UK delivery, finance available.' },
  'kids-bikes':            { path: '/kids-electric-dirt-bikes',                         title: 'Kids Electric Dirt Bikes UK 2026 | Ages 3\u201314 \u2014 VoltTrail',                         desc: 'Kids electric dirt bikes for the UK. Revvi, KTM SX-E, FunBikes & Sur-Ron Hyper Bee. Ages 3\u201314. Free UK delivery, pay in 4.' },
  'kids-quads':            { path: '/kids-electric-quad-bikes',                         title: 'Kids Electric Quad Bikes UK | Children\u2019s ATVs \u2013 VoltTrail',                   desc: 'Electric quad bikes for children in the UK. Safe, fun kids ATVs with free UK delivery.' },
  'road-legal':            { path: '/road-legal-electric-bikes',                        title: 'Road Legal Electric Dirt Bikes UK 2026 | L1e \u2014 VoltTrail',                          desc: 'Road legal electric dirt bikes for UK roads. L1e type-approved Sur-Ron, Talaria, Stark Varg & RFN. Free UK delivery, pay in 4.' },
  'parts':                 { path: '/parts-accessories',                                title: 'Parts & Accessories | Surron Parts, Helmets, Batteries \u2013 VoltTrail',               desc: 'Electric dirt bike parts and accessories. Surron parts, helmets, batteries, chargers and riding gear. Free UK delivery.' },
  'brands':                { path: '/brands',                                           title: 'Electric Dirt Bike Brands UK | Surron, Talaria, Stark \u2013 VoltTrail',                desc: 'Browse electric dirt bike and quad brands. Authorised UK dealer for Surron, Talaria, Stark Varg, Segway and E Ride Pro.' },
  'brand-surron':          { path: '/brands/surron',                                    title: 'Sur-Ron Electric Dirt Bikes UK | Light Bee, Ultra Bee, Storm Bee \u2013 VoltTrail',     desc: 'Shop the full Sur-Ron range in the UK. Light Bee X, Ultra Bee MX and Storm Bee. Authorised UK dealer, free delivery.' },
  'brand-talaria':         { path: '/brands/talaria',                                   title: 'Talaria Electric Dirt Bikes UK | Sting, Komodo \u2013 VoltTrail',                       desc: 'Shop Talaria electric dirt bikes in the UK. Sting R and Komodo TL6000. Authorised UK dealer, free delivery.' },
  'brand-stark':           { path: '/brands/stark-varg',                                title: 'Stark Varg Electric Dirt Bikes UK | MX 1.2, EX \u2013 VoltTrail',                       desc: 'Shop the Stark Varg range in the UK. The world\u2019s most powerful electric motocross bike. Free UK delivery.' },
  'brand-segway':          { path: '/brands/segway',                                    title: 'Segway Powersports UK | Electric Quads & ATVs \u2013 VoltTrail',                        desc: 'Shop Segway Powersports electric quads and ATVs in the UK. X260 and Snarler ATV6. Free UK delivery.' },
  'brand-eride':           { path: '/brands/eride-pro',                                 title: 'E Ride Pro Electric Dirt Bikes UK | SS Pro \u2013 VoltTrail',                           desc: 'Shop E Ride Pro electric dirt bikes in the UK. High value off-road performance. Free UK delivery.' },
  'brand-ktm':             { path: '/brands/ktm',                                       title: 'KTM Electric Motocross UK | SX-E 2, SX-E 3, SX-E 5 \u2013 VoltTrail',                   desc: 'Shop the KTM SX-E electric youth motocross range in the UK. SX-E 2, SX-E 3 and SX-E 5. Designed and built in Austria.' },
  'brand-revvi':           { path: '/brands/revvi',                                     title: 'Revvi Kids Electric Bikes UK | 12\u2033 to 20\u2033 \u2013 VoltTrail',                    desc: 'Shop Revvi kids electric bikes in the UK. 12\u2033, 16\u2033, 18\u2033 and 20\u2033 models for ages 3+. Free UK delivery.' },
  'brand-rfn':             { path: '/brands/rfn',                                       title: 'RFN Electric Dirt Bikes UK | Ares & Warrior \u2013 VoltTrail',                          desc: 'Shop RFN electric dirt bikes in the UK. Ares adult range and Warrior youth range. Free UK delivery.' },
  'brand-funbikes':        { path: '/brands/funbikes',                                  title: 'FunBikes Kids Electric Dirt Bikes & Quads UK \u2013 VoltTrail',                         desc: 'Shop the FunBikes range in the UK. Kids electric dirt bikes and quad bikes with adjustable speed limiters. Free UK delivery.' },
  'brand-razor':           { path: '/brands/razor',                                     title: 'Razor Kids Electric Dirt Bikes & ATVs UK \u2013 VoltTrail',                             desc: 'Shop Razor kids electric dirt bikes and ATVs in the UK. MX350 and MX400 Dirt Rocket. Free UK delivery.' },
  'brand-ecorider':        { path: '/brands/eco-rider',                                 title: 'Eco Rider Electric Quad Bikes UK | Farm & Utility ATVs \u2013 VoltTrail',               desc: 'Shop Eco Rider 100% electric quad bikes in the UK. Adult, farm and utility ATVs. Free UK delivery.' },
  'adult-bikes':           { path: '/electric-dirt-bikes/adult',                        title: 'Adult Electric Dirt Bikes UK | Off-Road Models \u2013 VoltTrail',                       desc: 'Adult off-road electric dirt bikes in the UK. Sur-Ron, Talaria, Stark Varg, E Ride Pro and RFN. Free UK delivery, finance available.' },
  'adult-quads':           { path: '/electric-quad-bikes/adult',                        title: 'Adult Electric Quad Bikes UK | Utility ATVs \u2013 VoltTrail',                           desc: 'Adult and utility electric quad bikes in the UK. Segway Powersports and Eco Rider. Free UK delivery.' },
  'parts-batteries':       { path: '/parts-accessories/batteries-chargers',             title: 'Electric Dirt Bike Batteries & Chargers UK \u2013 VoltTrail',                           desc: 'Replacement batteries and fast chargers for electric dirt bikes. Sur-Ron and more. Free UK delivery.' },
  'parts-protection':      { path: '/parts-accessories/helmets-protection',             title: 'Off-Road Helmets & Body Armour UK \u2013 VoltTrail',                                    desc: 'Off-road MX helmets, body armour and goggles for adults and kids. Free UK delivery.' },
  'parts-gear':            { path: '/parts-accessories/riding-gear',                    title: 'Off-Road Riding Gear & Clothing UK \u2013 VoltTrail',                                   desc: 'Motocross gloves, boots, goggles and off-road riding clothing. Free UK delivery.' },
  'parts-upgrades':        { path: '/parts-accessories/parts-upgrades',                 title: 'Electric Dirt Bike Parts & Upgrades UK \u2013 VoltTrail',                               desc: 'Chains, sprockets, brake pads and performance upgrade parts for electric dirt bikes. Free UK delivery.' },
  'parts-tyres':           { path: '/parts-accessories/tyres-wheels',                   title: 'Electric Dirt Bike Tyres & Wheels UK \u2013 VoltTrail',                                 desc: 'Off-road knobbly tyres and wheel components for electric dirt bikes. Free UK delivery.' },
  'product-ultra-bee':     { path: '/electric-dirt-bikes/surron-ultra-bee-mx-2025',     title: 'Sur-Ron Ultra Bee MX 2025 | Electric Dirt Bike \u2013 VoltTrail',                       desc: 'Buy the 2025 Sur-Ron Ultra Bee MX electric dirt bike. 11kW peak power, 55mph, 50 mile range. Free UK delivery, finance available.' },
  'product-talaria-sting': { path: '/electric-dirt-bikes/talaria-sting-r-off-road',     title: 'Talaria Sting R Off-Road | Electric Dirt Bike \u2013 VoltTrail',                        desc: 'Buy the Talaria Sting R off-road electric dirt bike. Strong torque, long range and free UK delivery. Finance available.' },
  'product-stark-mx':      { path: '/electric-dirt-bikes/stark-varg-mx-1-2',            title: 'Stark Varg MX 1.2 | Electric Motocross Bike \u2013 VoltTrail',                          desc: 'Buy the Stark Varg MX 1.2 electric motocross bike. Up to 80hp of adjustable power. Free UK delivery, finance available.' },
  'guide':                 { path: '/guides',                                           title: 'Electric Dirt Bike Guides UK | Buying & Riding Advice \u2013 VoltTrail',                desc: 'Expert guides on electric dirt bikes and quads. UK riding laws, brand comparisons, kids bike advice and buying tips.' },
  'guide-legal':           { path: '/guides/are-electric-dirt-bikes-legal-uk',          title: 'Are Electric Dirt Bikes Legal in the UK? | Riding Laws \u2013 VoltTrail',               desc: 'A full guide to UK electric dirt bike law. Where you can ride, road-legal requirements, age limits and licensing explained.' },
  'guide-surron-talaria':  { path: '/guides/surron-vs-talaria-sting',                   title: 'Sur-Ron vs Talaria Sting | Which Is Best? \u2013 VoltTrail',                            desc: 'Sur-Ron vs Talaria Sting compared \u2013 power, range, build quality and price. Find out which electric dirt bike suits you.' },
  'guide-kids':            { path: '/guides/best-kids-electric-dirt-bikes-uk',          title: 'Best Kids Electric Dirt Bikes UK | Buying Guide \u2013 VoltTrail',                       desc: 'The best electric dirt bikes for kids in the UK. Age-by-age advice, safety tips and top model recommendations.' },
  'compare-tool':          { path: '/compare',                                          title: 'Compare Electric Dirt Bikes | Side-by-Side Tool \u2013 VoltTrail',                       desc: 'Compare electric dirt bikes side by side. Power, range, speed and price compared to help you choose.' },
  'finance-calc':          { path: '/finance-calculator',                               title: 'Finance Calculator | Electric Dirt Bike Repayments \u2013 VoltTrail',                    desc: 'See how your electric dirt bike or quad splits into 4 equal interest-free instalments with our pay in 4 calculator.' },
  'about':                 { path: '/about',                                            title: 'About VoltTrail | UK Electric Off-Road Specialists',                                    desc: 'Learn about VoltTrail, the UK\u2019s electric off-road specialists. Our story, mission and commitment to electric riding.' },
  'contact':               { path: '/contact',                                          title: 'Contact VoltTrail | Get in Touch \u2013 UK Electric Dirt Bikes',                          desc: 'Contact VoltTrail for help with electric dirt bikes and quads. Phone, email and contact form. Mon\u2013Sat support.' },
  'finance':               { path: '/finance',                                          title: 'Finance Options | Electric Dirt Bike Finance UK \u2013 VoltTrail',                        desc: 'Pay in 4 interest-free instalments on electric dirt bikes and quads. Spread the cost with VoltTrail. Subject to status.' },
  'delivery':              { path: '/delivery',                                         title: 'Delivery Information | Free UK Delivery \u2013 VoltTrail',                               desc: 'Free UK mainland delivery on all electric dirt bikes and quads. Delivery times, tracking and what to expect.' },
  'returns':               { path: '/returns',                                          title: 'Returns Policy | 14-Day Returns \u2013 VoltTrail',                                       desc: 'VoltTrail returns policy. 14-day returns on electric dirt bikes and quads. How to return an item explained.' },
  'sale':                  { path: '/sale',                                             title: 'Sale | Electric Dirt Bike & Quad Deals \u2013 VoltTrail',                                desc: 'Save on electric dirt bikes and quad bikes in the VoltTrail sale. Limited-time deals with free UK delivery.' },
  'privacy':               { path: '/privacy-policy',                                   title: 'Privacy Policy \u2013 VoltTrail',                                                       desc: 'How VoltTrail collects, uses and protects your personal data. Our full privacy policy.' },
  'terms':                 { path: '/terms-and-conditions',                             title: 'Terms & Conditions \u2013 VoltTrail',                                                   desc: 'VoltTrail terms and conditions of sale and website use.' },
  'cookies':               { path: '/cookie-policy',                                    title: 'Cookie Policy \u2013 VoltTrail',                                                        desc: 'How VoltTrail uses cookies and how to manage your cookie preferences.' },
  'sitemap':               { path: '/sitemap',                                          title: 'Sitemap | All Pages \u2013 VoltTrail',                                                  desc: 'Browse all pages on the VoltTrail website. Electric dirt bikes, quads, brands, guides and company information.' },
  'cart':                  { path: '/cart',                                             title: 'Your Cart \u2013 VoltTrail',          desc: 'Review the items in your VoltTrail shopping cart.' },
  'checkout':              { path: '/checkout',                                         title: 'Checkout \u2013 VoltTrail',           desc: 'Complete your VoltTrail order securely.' },
  'order-confirm':         { path: '/order-confirmation',                               title: 'Order Confirmed \u2013 VoltTrail',     desc: 'Your VoltTrail order has been confirmed.' },
  'search':                { path: '/search',                                           title: 'Search \u2013 VoltTrail',             desc: 'Search electric dirt bikes, quad bikes and brands at VoltTrail.' },
  'newsletter':            { path: '/newsletter',                                       title: 'Newsletter \u2013 VoltTrail',         desc: 'Subscribe to the VoltTrail newsletter for the latest electric dirt bike and quad deals.' },
  '404':                   { path: '/404',                                              title: 'Page Not Found \u2013 VoltTrail',     desc: 'The page you were looking for could not be found.' }
};
// Pages that should NOT be indexed (utility/transactional)
const NOINDEX_PAGES = ['cart','checkout','order-confirm','search','newsletter','404'];

// Reverse lookup: path -> page id
const PATH_TO_ID = {};
Object.keys(ROUTES).forEach(id => { PATH_TO_ID[ROUTES[id].path] = id; });

function _setMeta(name, content, attr) {
  attr = attr || 'name';
  let el = document.head.querySelector('meta[' + attr + '="' + name + '"]');
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function _applySEO(id) {
  const r = ROUTES[id] || ROUTES['404'];
  document.title = r.title;
  _setMeta('description', r.desc);
  _setMeta('og:title', r.title, 'property');
  _setMeta('og:description', r.desc, 'property');
  _setMeta('twitter:title', r.title);
  _setMeta('twitter:description', r.desc);
  // Canonical
  let canon = document.head.querySelector('link[rel="canonical"]');
  if (!canon) {
    canon = document.createElement('link');
    canon.setAttribute('rel', 'canonical');
    document.head.appendChild(canon);
  }
  const canonUrl = SITE_ORIGIN + r.path;
  canon.setAttribute('href', canonUrl);
  _setMeta('og:url', canonUrl, 'property');
  // robots: noindex for utility pages, index for everything else
  if (NOINDEX_PAGES.indexOf(id) !== -1) {
    _setMeta('robots', 'noindex, follow');
  } else {
    _setMeta('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  }
}

// Resolve current URL path to a page id
function _idFromLocation() {
  let p = window.location.pathname.replace(/\/+$/, '');
  if (p === '') p = '/';
  // Legacy product URLs → universal product page (avoids duplicate content)
  const LEGACY = {
    '/electric-dirt-bikes/surron-ultra-bee-mx-2025': 'product:ultra-bee',
    '/electric-dirt-bikes/talaria-sting-r-off-road': 'product:talaria-sting-r',
    '/electric-dirt-bikes/stark-varg-mx-1-2': 'product:stark-mx'
  };
  if (LEGACY[p]) return LEGACY[p];
  if (PATH_TO_ID[p]) return PATH_TO_ID[p];
  // Product detail URLs: /product/<id>
  const pm = p.match(/^\/product\/([a-z0-9-]+)$/);
  if (pm) return 'product:' + pm[1];
  // Blog post URLs: /blog/<slug>
  const bm = p.match(/^\/blog\/([a-z0-9-]+)$/);
  if (bm) return 'blog:' + bm[1];
  // legacy hash support (e.g. #shop)
  const h = (window.location.hash || '').replace('#', '');
  if (h && document.getElementById('page-' + h)) return h;
  return '404';
}

function showPage(id, opts) {
  opts = opts || {};
  // ── Product detail page: id format is "product:<productId>" ──
  if (id && id.indexOf('product:') === 0) {
    const pid = id.slice(8);
    if (typeof findProduct === 'function' && findProduct(pid)) {
      if (!opts.noPush) {
        const newPath = '/product/' + pid;
        if (window.location.pathname !== newPath) {
          history.pushState({ page: id }, '', newPath);
        }
      }
      _showPageFull('product');
      renderProductPage(pid);
      return;
    }
    id = '404';
  }
  // ── Blog post: id format is "blog:<slug>" ──
  if (id && id.indexOf('blog:') === 0) {
    const slug = id.slice(5);
    if (typeof findBlogPost === 'function' && findBlogPost(slug)) {
      if (!opts.noPush) {
        const newPath = '/blog/' + slug;
        if (window.location.pathname !== newPath) {
          history.pushState({ page: id }, '', newPath);
        }
      }
      _showPageFull('blog-post');
      renderBlogPost(slug);
      return;
    }
    id = '404';
  }
  if (!document.getElementById('page-' + id)) id = '404';
  // Update the URL so the page is a real, shareable, indexable address
  if (!opts.noPush && ROUTES[id]) {
    const newPath = ROUTES[id].path;
    if (window.location.pathname !== newPath) {
      history.pushState({ page: id }, '', newPath);
    }
  }
  _applySEO(id);
  _showPageFull(id);
}

// ── ROUTER BOOT: handle direct loads, back/forward, and link clicks ──
window.addEventListener('popstate', function () {
  showPage(_idFromLocation(), { noPush: true });
});

document.addEventListener('DOMContentLoaded', function () {
  // Intercept any internal <a data-route> link for instant SPA navigation
  document.body.addEventListener('click', function (e) {
    const a = e.target.closest('a[data-route]');
    if (!a) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return; // allow open-in-new-tab
    e.preventDefault();
    const id = a.getAttribute('data-route');
    if (typeof closeMobileNav === 'function') closeMobileNav();
    showPage(id);
  });
  // Show the correct page for the URL the visitor actually landed on.
  // Special case: if 404.html caught a request and stashed the original URL in sessionStorage
  // (because Cloudflare's _redirects didn't catch it), restore that URL now so the
  // SPA router renders the page the user actually asked for.
  try {
    var _stashedPath = sessionStorage.getItem('vt_redirect_path');
    if (_stashedPath && _stashedPath !== '/' && _stashedPath !== window.location.pathname) {
      sessionStorage.removeItem('vt_redirect_path');
      history.replaceState({}, '', _stashedPath);
    }
  } catch(e) {}
  showPage(_idFromLocation(), { noPush: true });
});


function openMobileNav() {
  document.getElementById('mobileNav').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMobileNav() {
  document.getElementById('mobileNav').classList.remove('open');
  document.body.style.overflow = '';
  // Also collapse any open accordion groups so menu opens clean next time
  document.querySelectorAll('.mobile-nav-group.open').forEach(g => {
    g.classList.remove('open');
    const btn = g.querySelector('.mobile-nav-group-toggle');
    if (btn) btn.setAttribute('aria-expanded','false');
  });
}
// Toggle a mobile-nav accordion section. Closes other open sections so only one is open at a time.
function toggleMobileNavGroup(id) {
  const group = document.getElementById(id);
  if (!group) return;
  const isOpen = group.classList.contains('open');
  // Close all groups
  document.querySelectorAll('.mobile-nav-group.open').forEach(g => {
    g.classList.remove('open');
    const btn = g.querySelector('.mobile-nav-group-toggle');
    if (btn) btn.setAttribute('aria-expanded','false');
  });
  // Open the one tapped (unless it was already open)
  if (!isOpen) {
    group.classList.add('open');
    const btn = group.querySelector('.mobile-nav-group-toggle');
    if (btn) btn.setAttribute('aria-expanded','true');
  }
}

// ── FILTER PRODUCTS ──
// ══════════════════════════════════════════════════════════
//  UNIVERSAL FILTER + SORT ENGINE
//  Works on every shop / category / brand page. Each listing
//  page registers a config in FILTER_PAGES below.
// ══════════════════════════════════════════════════════════
const FILTER_PAGES = {
  // pageId : { grid, type, base(items), pills:[{label,tag}] }
  'shop':        { grid:'shop-grid', type:'bike', base:()=>bikes.filter(b=>!b.tags.includes('kids')),
    pills:[['All','all'],['Sur-Ron','surron'],['Talaria','talaria'],['Stark Varg','stark'],['E Ride Pro','eride'],['RFN','rfn'],['Road Legal','road']] },
  'quads':       { grid:'quads-grid', type:'quad', base:()=>quads,
    pills:[['All','all'],['Adult & Utility','adult'],['Kids','kids'],['Segway','segway'],['Eco Rider','ecorider']] },
  'kids-bikes':  { grid:'kids-grid', type:'bike', base:()=>bikes.filter(b=>b.tags.includes('kids')),
    pills:[['All','all'],['Sur-Ron','surron'],['KTM','ktm'],['Revvi','revvi'],['RFN','rfn'],['FunBikes','funbikes'],['Razor','razor']] },
  'kids-quads':  { grid:'kids-quads-grid', type:'quad', base:()=>quads.filter(q=>q.tags.includes('kids')),
    pills:[['All','all'],['FunBikes','funbikes'],['Razor','razor'],['Segway','segway']] },
  'road-legal':  { grid:'road-grid', type:'bike', base:()=>bikes.filter(b=>b.tags.includes('road')),
    pills:[['All','all'],['Sur-Ron','surron'],['Talaria','talaria'],['Stark Varg','stark'],['RFN','rfn']] },
  'adult-bikes': { grid:'adult-grid', type:'bike', base:()=>bikes.filter(b=>b.tags.includes('adult')),
    pills:[['All','all'],['Sur-Ron','surron'],['Talaria','talaria'],['Stark Varg','stark'],['E Ride Pro','eride'],['RFN','rfn'],['Road Legal','road']] },
  'adult-quads': { grid:'adult-quads-grid', type:'quad', base:()=>quads.filter(q=>q.tags.includes('adult')),
    pills:[['All','all'],['Segway','segway'],['Eco Rider','ecorider']] },
  'sale':        { grid:'sale-grid', type:'bike', base:()=>bikes.filter(b=>b.badges&&b.badges.includes('sale')),
    pills:[['All','all']] }
};
// Brand-page configs (grid + dataset), filter by sub-brand model lines is light → sort only
const FILTER_BRAND_PAGES = {
  'brand-surron':{grid:'surron-grid',type:'bike',tag:'surron'}, 'brand-talaria':{grid:'talaria-grid',type:'bike',tag:'talaria'},
  'brand-stark':{grid:'stark-grid',type:'bike',tag:'stark'}, 'brand-eride':{grid:'eride-grid',type:'bike',tag:'eride'},
  'brand-ktm':{grid:'ktm-grid',type:'bike',tag:'ktm'}, 'brand-revvi':{grid:'revvi-grid',type:'bike',tag:'revvi'},
  'brand-rfn':{grid:'rfn-grid',type:'bike',tag:'rfn'}, 'brand-segway':{grid:'segway-grid',type:'quad',tag:'segway'},
  'brand-ecorider':{grid:'ecorider-grid',type:'quad',tag:'ecorider'}
};

const _filterState = {}; // pageId -> {tag, sort}

function _sortItems(items, sort) {
  const arr = items.slice();
  if(sort==='price-asc') arr.sort((a,b)=>(priceToNumber(a.price)||1e9)-(priceToNumber(b.price)||1e9));
  else if(sort==='price-desc') arr.sort((a,b)=>(priceToNumber(b.price)||0)-(priceToNumber(a.price)||0));
  else if(sort==='name') arr.sort((a,b)=>a.name.localeCompare(b.name));
  else if(sort==='newest') arr.sort((a,b)=>((b.badges||[]).includes('new')?1:0)-((a.badges||[]).includes('new')?1:0));
  return arr;
}
function _applyListing(pageId) {
  const cfg = FILTER_PAGES[pageId];
  if(!cfg) return;
  const st = _filterState[pageId] || {tag:'all',sort:'recommended'};
  let items = cfg.base();
  if(st.tag && st.tag!=='all') items = items.filter(i=>(i.tags||[]).includes(st.tag));
  items = _sortItems(items, st.sort);
  const grid = document.getElementById(cfg.grid);
  if(grid) grid.innerHTML = items.length
    ? items.map(i=>renderCard(i,cfg.type)).join('')
    : '<p style="color:var(--muted);padding:40px 0">No products match these filters.</p>';
}
function setFilterTag(pageId, tag, el) {
  _filterState[pageId] = Object.assign({tag:'all',sort:'recommended'}, _filterState[pageId], {tag:tag});
  const bar = el.closest('.filter-bar');
  if(bar) bar.querySelectorAll('.filter-pill').forEach(p=>p.classList.remove('active'));
  el.classList.add('active');
  _applyListing(pageId);
}
function setFilterSort(pageId, sort) {
  _filterState[pageId] = Object.assign({tag:'all',sort:'recommended'}, _filterState[pageId], {sort:sort});
  _applyListing(pageId);
}
// Brand pages: sort only
function setBrandSort(pageId, sort) {
  const cfg = FILTER_BRAND_PAGES[pageId];
  if(!cfg) return;
  const src = cfg.type==='quad' ? quads : bikes;
  let items = src.filter(i=>(i.tags||[]).includes(cfg.tag));
  items = _sortItems(items, sort);
  const grid = document.getElementById(cfg.grid);
  if(grid) grid.innerHTML = items.map(i=>renderCard(i,cfg.type)).join('');
}
// Build a filter bar HTML string for injection
function _filterBarHTML(pageId) {
  const cfg = FILTER_PAGES[pageId];
  if(!cfg) return '';
  const pills = cfg.pills.map((p,i)=>
    '<span class="filter-pill'+(i===0?' active':'')+'" onclick="setFilterTag(\''+pageId+'\',\''+p[1]+'\',this)">'+p[0]+'</span>'
  ).join('');
  return '<div class="filter-bar"><span class="filter-label">Filter:</span>'
    + '<div class="filter-pills">'+pills+'</div>'
    + '<select class="sort-select" aria-label="Sort products" onchange="setFilterSort(\''+pageId+'\',this.value)">'
    + '<option value="recommended">Sort: Recommended</option>'
    + '<option value="price-asc">Price: Low to High</option>'
    + '<option value="price-desc">Price: High to Low</option>'
    + '<option value="name">Name: A to Z</option>'
    + '<option value="newest">Newest First</option></select></div>';
}
function _brandSortHTML(pageId) {
  return '<div class="filter-bar" style="justify-content:flex-end">'
    + '<select class="sort-select" aria-label="Sort products" onchange="setBrandSort(\''+pageId+'\',this.value)">'
    + '<option value="recommended">Sort: Recommended</option>'
    + '<option value="price-asc">Price: Low to High</option>'
    + '<option value="price-desc">Price: High to Low</option>'
    + '<option value="name">Name: A to Z</option></select></div>';
}
// Inject filter bars into pages that have a placeholder
function initFilterBars() {
  Object.keys(FILTER_PAGES).forEach(pid=>{
    const slot = document.getElementById('filterbar-'+pid);
    if(slot && !slot.dataset.built) { slot.innerHTML = _filterBarHTML(pid); slot.dataset.built='1'; }
  });
  Object.keys(FILTER_BRAND_PAGES).forEach(pid=>{
    const slot = document.getElementById('filterbar-'+pid);
    if(slot && !slot.dataset.built) { slot.innerHTML = _brandSortHTML(pid); slot.dataset.built='1'; }
  });
}

// ── CART ──
function addToCart(name, price, colour) {
  cartItems.push({ name: name, price: price, colour: colour || null });
  const count = document.querySelector('.cart-count');
  if(count) count.textContent = cartItems.length;
  showCartToast(name + (colour ? ' (' + colour + ')' : ''));
  // Fire Meta Pixel + GA AddToCart event
  try {
    if (typeof fbq === 'function') fbq('track', 'AddToCart', {
      content_name: name,
      content_type: 'product',
      value: (priceToNumber(price) || 0),
      currency: 'GBP'
    });
    if (typeof gtag === 'function') gtag('event', 'add_to_cart', {
      currency: 'GBP',
      value: (priceToNumber(price) || 0),
      items: [{ item_name: name, price: (priceToNumber(price) || 0), quantity: 1 }]
    });
  } catch(e) {}
}
// Read the currently-selected colour swatch on a card, then add to cart
function addToCartFromCard(cardId, name, price) {
  let colour = null;
  const label = document.getElementById(cardId + '-label');
  if(label && label.textContent.trim()) colour = label.textContent.trim();
  addToCart(name, price, colour);
}
// Product detail page colour selector
function selectDetailColour(el) {
  const block = document.getElementById('detail-colour-block');
  if(block) block.querySelectorAll('.detail-swatch').forEach(s=>s.classList.remove('active'));
  el.classList.add('active');
  const label = document.getElementById('detail-colour-label');
  if(label) label.textContent = el.dataset.name;
}
function addToCartFromDetail(name, price) {
  let colour = null;
  const label = document.getElementById('detail-colour-label');
  if(label && label.textContent.trim()) colour = label.textContent.trim();
  addToCart(name, price, colour);
}
function showCartToast(name) {
  const toast = document.createElement('div');
  toast.style.cssText = 'position:fixed;bottom:80px;right:24px;z-index:999;background:var(--volt);color:#000;padding:12px 20px;border-radius:8px;font-family:var(--font-c);font-weight:700;font-size:13px;letter-spacing:0.04em;box-shadow:0 8px 24px rgba(0,0,0,0.3);animation:slideUp 0.3s ease;';
  toast.textContent = '✓ Added to cart: '+name;
  document.body.appendChild(toast);
  setTimeout(()=>toast.remove(), 2800);
}

// ── CONTACT FORM ──
function handleContactForm(e) {
  e.preventDefault();
  const form = e.target;
  const groups = form.querySelectorAll('.form-group');
  const data = {};
  groups.forEach(g => {
    const l = g.querySelector('.form-label');
    const i = g.querySelector('input, textarea, select');
    if(l && i) data[l.textContent.replace('*','').trim()] = (i.value || '').trim();
  });
  const name = data['Full Name'] || data['Name'] || '';
  const email = data['Email Address'] || data['Email'] || '';
  const phone = data['Phone'] || '';
  const subject = data['Subject'] || 'New enquiry from VoltTrail website';
  const message = data['Message'] || '';
  const body = 'New enquiry from the VoltTrail website:\n\nName: ' + name + '\nEmail: ' + email + '\nPhone: ' + phone + '\n\nMessage:\n' + message + '\n';
  const btn = form.querySelector('[type=submit]');
  const showSuccess = function() {
    btn.textContent = '✓ Message Sent!';
    btn.style.background = 'var(--bg4)';
    btn.style.color = 'var(--volt)';
    btn.style.border = '1px solid var(--volt)';
    setTimeout(()=>{
      btn.textContent = 'Send Message →';
      btn.style.background=''; btn.style.color=''; btn.style.border='';
      form.reset();
    }, 3000);
  };
  btn.disabled = true; btn.textContent = 'Sending…';
  fetch(FORMSPREE_URL, {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ _subject: subject, email: email, name: name, phone: phone, message: message, fullMessage: body })
  }).then(function(r){
    if(!r.ok) console.error('Formspree responded with', r.status);
  }).catch(function(err){
    console.error('Formspree submit failed:', err);
  }).finally(function(){
    btn.disabled = false;
    showSuccess();
  });
}

// ── SEARCH ──
function doSearch(q) {
  if(!q || q.trim().length < 2) return;
  const term = q.toLowerCase();
  const allProducts = [
    ...bikes.map(b=>({...b,type:'bike'})),
    ...quads.map(b=>({...b,type:'quad'})),
    ...parts.map(b=>({...b,type:'part'})),
  ];
  const results = allProducts.filter(p =>
    p.name.toLowerCase().includes(term) ||
    p.brand.toLowerCase().includes(term) ||
    (p.specs||[]).some(s=>s.toLowerCase().includes(term))
  );
  const el = document.getElementById('search-results-grid');
  const heading = document.getElementById('search-results-heading');
  if(heading) heading.textContent = results.length
    ? `${results.length} result${results.length!==1?'s':''} for "${q}"`
    : `No results found for "${q}"`;
  if(el) {
    if(results.length === 0) {
      el.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 20px;color:var(--muted)">
        <div style="font-size:48px;margin-bottom:20px">🔍</div>
        <p style="font-size:18px;margin-bottom:12px">No products found for "${q}"</p>
        <p style="font-size:14px;margin-bottom:24px">Try searching for a brand name like "Surron" or "Talaria", or a category like "kids quad".</p>
        <a class="btn-primary" style="text-decoration:none;" href="/electric-dirt-bikes" data-route="shop">Browse All Bikes →</a>
      </div>`;
    } else {
      el.innerHTML = results.map(p => renderCard(p, p.type)).join('');
    }
  }
  showPage('search');
}

// wire up nav search input
document.addEventListener('DOMContentLoaded', () => {
  const inp = document.querySelector('.nav-search input');
  if(inp) {
    inp.addEventListener('keydown', e => {
      if(e.key==='Enter') doSearch(inp.value);
    });
  }
});

// ── CART PAGE UPDATER ──
function updateCartPage() {
  const el = document.getElementById('cart-items-list');
  const totalEl = document.getElementById('cart-total');
  if(!el) return;
  if(cartItems.length === 0) {
    document.getElementById('cart-content').innerHTML = `
      <div style="text-align:center;padding:60px 20px;color:var(--muted)">
        <div style="font-size:48px;margin-bottom:20px">🛒</div>
        <p style="font-size:18px;margin-bottom:20px">Your cart is empty</p>
        <a class="btn-primary" style="text-decoration:none;" href="/electric-dirt-bikes" data-route="shop">Browse Electric Dirt Bikes →</a>
      </div>`;
    return;
  }
  let total = 0;
  const rows = cartItems.map((item,i) => {
    const num = parseFloat((item.price||'0').replace(/[^0-9.]/g,'')) || 0;
    total += num;
    return `<div class="cart-row">
      <div class="cart-row-info">
        <div class="cart-row-name">${item.name}</div>
        <div class="cart-row-price">${item.price}</div>
      </div>
      <button class="cart-remove" onclick="removeFromCart(${i})">✕</button>
    </div>`;
  }).join('');
  el.innerHTML = rows;
  if(totalEl) totalEl.textContent = '£'+total.toLocaleString('en-GB');
}

function removeFromCart(i) {
  cartItems.splice(i,1);
  const count = document.querySelector('.cart-count');
  if(count) count.textContent = cartItems.length || '0';
  updateCartPage();
}

// ── PAY-IN-4 CALCULATOR ──
function initFinanceCalc() {
  const calc = document.getElementById('finance-calc');
  if(!calc) return;
  function update() {
    const price = parseFloat(document.getElementById('fc-price').value) || 0;
    if(price <= 0) { document.getElementById('fc-result').innerHTML = '<p style="color:var(--muted)">Enter a valid price.</p>'; return; }
    const each = price / 4;
    const fmt = n => '£' + n.toLocaleString('en-GB', {minimumFractionDigits:2, maximumFractionDigits:2});
    document.getElementById('fc-result').innerHTML = `
      <div class="fc-results-grid">
        <div class="fc-result-box"><div class="fc-result-val">${fmt(each)}</div><div class="fc-result-key">Today (1st of 4)</div></div>
        <div class="fc-result-box"><div class="fc-result-val">${fmt(each)}</div><div class="fc-result-key">Payment 2</div></div>
        <div class="fc-result-box"><div class="fc-result-val">${fmt(each)}</div><div class="fc-result-key">Payment 3</div></div>
        <div class="fc-result-box"><div class="fc-result-val">${fmt(each)}</div><div class="fc-result-key">Payment 4</div></div>
      </div>
      <p style="font-size:13px;color:var(--text);margin-top:14px"><strong>Total: ${fmt(price)}</strong> — split into 4 equal payments. <span style="color:var(--volt)">0% interest, no fees.</span></p>
      <p style="font-size:11px;color:var(--dim);margin-top:8px">Pay in 4 is subject to status, age 18+. The first instalment is taken at checkout; the remaining 3 are taken at regular intervals.</p>`;
  }
  ['fc-price'].forEach(id => {
    const el = document.getElementById(id);
    if(el) el.addEventListener('input', update);
  });
  update();
}

// ── COMPARE TOOL ──
const compareList = [];
function toggleCompare(id, name) {
  const idx = compareList.indexOf(id);
  if(idx > -1) { compareList.splice(idx,1); }
  else if(compareList.length < 3) { compareList.push(id); }
  else { showToast('You can compare up to 3 bikes at once.', '#ffaa00'); return; }
  updateCompareBar();
}
function updateCompareBar() {
  const bar = document.getElementById('compare-bar');
  if(!bar) return;
  if(compareList.length === 0) { bar.style.display='none'; return; }
  bar.style.display='flex';
  const names = compareList.map(id => {
    const b = [...bikes,...quads].find(p=>p.id===id);
    return b ? `<span class="compare-tag">${b.brand} ${b.name.split(' ').slice(0,2).join(' ')} <button onclick="toggleCompare('${id}')">✕</button></span>` : '';
  }).join('');
  document.getElementById('compare-bar-items').innerHTML = names;
}
function initCompare() { /* compare bar shown dynamically */ }
function showToast(msg, bg) {
  const toast = document.createElement('div');
  toast.style.cssText = `position:fixed;bottom:80px;right:24px;z-index:9999;background:${bg||'var(--volt)'};color:#000;padding:12px 20px;border-radius:8px;font-family:var(--font-c);font-weight:700;font-size:13px;letter-spacing:0.04em;box-shadow:0 8px 24px rgba(0,0,0,0.3);`;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(()=>toast.remove(), 3000);
}

