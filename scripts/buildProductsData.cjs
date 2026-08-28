const fs = require('fs');
const path = require('path');

const bikes = require('../all_volttrail_bikes.json');
const quads = require('../all_volttrail_quads.json');
const parts = require('../all_volttrail_parts.json');

const specMap = {
  'ultra-bee': {
    power: 12500, torque: 440, speed: 55, range: '45 - 55 miles', maxRange: 55,
    batWh: 4070, batBrand: 'Sur-Ron 74V 55Ah High-Power Lithium Pack', weight: 85,
    chargeTime: 4, water: 'IP67', frame: 'Forged Aluminium Alloy Cradle',
    gears: 'Direct Drive / Multi-Curve Regen Controller', brakes: 'Dual 4-Piston Hydraulic Disc (240mm)',
    tyres: '19" Front / 18" Rear CST Off-Road Knobbly',
    throttle: 'Full Twist Throttle (Off-Road / Competition)',
    legal: 'Restricted / Off-Road Only',
    age: 16
  },
  'lbx': {
    power: 6000, torque: 250, speed: 47, range: '38 - 47 miles', maxRange: 47,
    batWh: 2280, batBrand: 'Sur-Ron 60V 38Ah High-Drain Lithium Battery', weight: 50,
    chargeTime: 3.5, water: 'IP65', frame: 'Aluminium Alloy Double-Cradle',
    gears: 'Primary Belt & Heavy Duty Chain Final Drive', brakes: '4-Piston Hydraulic Disc Brakes',
    tyres: '19" Dual-Sport Spoke Wheels with CST Knobbly',
    throttle: 'Full Twist Throttle (Off-Road / Competition)',
    legal: 'Restricted / Off-Road Only',
    age: 16
  },
  'lbx-road': {
    power: 6000, torque: 250, speed: 28, range: '40 - 50 miles', maxRange: 50,
    batWh: 2280, batBrand: 'Sur-Ron 60V 38Ah Removable Lithium Pack', weight: 53,
    chargeTime: 3.5, water: 'IP65', frame: 'Aluminium Alloy Double-Cradle',
    gears: 'Primary Belt & Heavy Duty Chain Final Drive', brakes: 'Hydraulic Disc Brakes (Dual Hand Levers)',
    tyres: '19" Dual-Sport DOT Road Approved Tyres',
    throttle: 'Full Throttle (Requires L1e-A registration)',
    legal: 'UK Road-Legal L1e-B / Moped (DVLA Registered)',
    age: 16
  },
  'storm-bee': {
    power: 22500, torque: 520, speed: 68, range: '50 - 60 miles', maxRange: 60,
    batWh: 5720, batBrand: 'Sur-Ron 104V 55Ah Industrial Grade Lithium Pack', weight: 127,
    chargeTime: 4.5, water: 'IP67', frame: 'High-Strength Forged Aluminium Alloy',
    gears: 'Coaxial Direct Drive with Reverse Mode', brakes: 'ABS Linked Dual Motorcycle Disc Brakes',
    tyres: '21" Front / 18" Rear Full Motocross Knobbly',
    throttle: 'Full Twist Throttle (Off-Road / Competition)',
    legal: 'Restricted / Off-Road Only',
    age: 18
  },
  'hyper-bee': {
    power: 3500, torque: 180, speed: 35, range: '25 - 32 miles', maxRange: 32,
    batWh: 1160, batBrand: 'Sur-Ron 58V 20Ah Removable Lithium Battery', weight: 36,
    chargeTime: 2.5, water: 'IP65', frame: 'Lightweight High-Tensile Steel & Alloy',
    gears: 'Chain Drive with Torque Reduction', brakes: 'Hydraulic Disc Brakes Front & Rear',
    tyres: '14" Front / 12" Rear Pit-Bike Off-Road Tyres',
    throttle: 'Full Twist Throttle (Off-Road / Competition)',
    legal: 'Restricted / Off-Road Only',
    age: 10
  },
  'talaria-sting-r': {
    power: 8000, torque: 400, speed: 53, range: '45 - 53 miles', maxRange: 53,
    batWh: 2700, batBrand: 'Talaria 60V 45Ah LG 21700 Lithium Pack', weight: 63,
    chargeTime: 3.5, water: 'IP67', frame: '6061 T6 Aviation Aluminium Alloy',
    gears: 'Sealed Internal Oil-Bath Gearbox (Zero Belt)', brakes: 'Talaria 4-Piston Hydraulic Disc (203mm)',
    tyres: '19" Front / 19" Rear CST Dirt Masters',
    throttle: 'Full Twist Throttle (Off-Road / Competition)',
    legal: 'Restricted / Off-Road Only',
    age: 16
  },
  'talaria-sting-road': {
    power: 8000, torque: 400, speed: 28, range: '42 - 50 miles', maxRange: 50,
    batWh: 2700, batBrand: 'Talaria 60V 45Ah Removable Lithium Battery', weight: 66,
    chargeTime: 3.5, water: 'IP67', frame: '6061 T6 Aviation Aluminium Alloy',
    gears: 'Sealed Internal Oil-Bath Gearbox', brakes: 'Dual Hydraulic Disc Brakes',
    tyres: '19" DOT Road-Legal Enduro Tyres',
    throttle: 'Full Throttle (Requires L1e-A registration)',
    legal: 'UK Road-Legal L1e-B / Moped (DVLA Registered)',
    age: 16
  },
  'talaria-mx5': {
    power: 13400, torque: 500, speed: 59, range: '48 - 58 miles', maxRange: 58,
    batWh: 2880, batBrand: 'Talaria 72V 40Ah High-Output Lithium Battery', weight: 69,
    chargeTime: 3.5, water: 'IP67', frame: 'Reinforced 6061 T6 Extruded Alloy',
    gears: 'Heavy-Duty Oil-Bath Gearbox Drive', brakes: 'Dot-4 Dual Motorcycle Hydraulic Disc (220mm)',
    tyres: '19" Front / 19" Rear High-Traction CST Enduro',
    throttle: 'Full Twist Throttle (Off-Road / Competition)',
    legal: 'Restricted / Off-Road Only',
    age: 16
  },
  'talaria-x3': {
    power: 5000, torque: 230, speed: 47, range: '35 - 45 miles', maxRange: 45,
    batWh: 2400, batBrand: 'Talaria 60V 40Ah Integrated Lithium Pack', weight: 54,
    chargeTime: 3.5, water: 'IP65', frame: 'Monocoque Lightweight Aluminium Frame',
    gears: 'Enclosed Belt & Sprocket Drive', brakes: 'Hydraulic Disc Brakes Front & Rear',
    tyres: '19" / 17" Supermoto or Trail Tyres',
    throttle: 'Full Twist Throttle (Off-Road / Competition)',
    legal: 'Restricted / Off-Road Only',
    age: 16
  },
  'talaria-komodo': {
    power: 22000, torque: 580, speed: 66, range: '55 - 70 miles', maxRange: 70,
    batWh: 3600, batBrand: 'Talaria 72V 50Ah High Discharge Pack', weight: 98,
    chargeTime: 4, water: 'IP67', frame: 'Full-Size Motocross Hydroformed Alloy',
    gears: 'Direct Mid-Motor Drive with Planetary Reduction', brakes: 'Full Moto Hydraulic Dual Calipers',
    tyres: '21" Front / 18" Rear Competition Motocross',
    throttle: 'Full Twist Throttle (Off-Road / Competition)',
    legal: 'Restricted / Off-Road Only',
    age: 18
  },
  'stark-mx': {
    power: 60000, torque: 938, speed: 70, range: '45 - 60 miles', maxRange: 60,
    batWh: 7200, batBrand: 'Stark Future 7.2kWh Flying V Honeycomb Pack', weight: 118,
    chargeTime: 2, water: 'IP69K', frame: 'Magnesium Honeycomb Subframe & Forged Alloy',
    gears: 'Direct Carbon-Sleeve Mid-Drive Motor', brakes: 'Brembo Hydraulic Motocross Calipers',
    tyres: '21" Front / 19" Rear Pirelli Scorpion MX32',
    throttle: 'Full Twist Throttle (Off-Road / Competition)',
    legal: 'Restricted / Off-Road Only',
    age: 18
  },
  'stark-ex': {
    power: 60000, torque: 938, speed: 70, range: '58 - 73 miles', maxRange: 73,
    batWh: 7200, batBrand: 'Stark Future 7.2kWh High-Density Honeycomb Pack', weight: 122,
    chargeTime: 2, water: 'IP69K', frame: 'Magnesium Honeycomb Subframe & Forged Alloy',
    gears: 'Direct Carbon-Sleeve Mid-Drive Motor', brakes: 'Brembo Hydraulic Calipers with Hand Rear Brake',
    tyres: '21" Front / 18" Rear DOT FIM Enduro Tyres',
    throttle: 'Full Throttle (Requires L1e-A registration)',
    legal: 'UK Road-Legal L1e-B / Moped (DVLA Registered)',
    age: 18
  },
  'ktm-sxe5': {
    power: 5000, torque: 15, speed: 35, range: '20 - 28 miles', maxRange: 28,
    batWh: 907, batBrand: 'KTM PowerPack 48V Lithium-Ion (Quick Change)', weight: 40.5,
    chargeTime: 1.2, water: 'IP67', frame: 'Chromoly Steel Central-Tube Frame',
    gears: 'Direct Drive Permanent Magnet Motor', brakes: 'Formula Hydraulic Disc Brakes',
    tyres: '12" Front / 10" Rear Maxxis MX Tyres',
    throttle: 'Full Twist Throttle (Off-Road / Competition)',
    legal: 'Restricted / Off-Road Only',
    age: 6
  },
  'ktm-sxe3': {
    power: 3800, torque: 10.5, speed: 28, range: '18 - 24 miles', maxRange: 24,
    batWh: 648, batBrand: 'KTM 48V Lithium-Ion Battery Pack', weight: 39,
    chargeTime: 1.2, water: 'IP67', frame: 'Chromoly Steel Central-Tube Frame',
    gears: 'Direct Drive Permanent Magnet Motor', brakes: 'Formula Hydraulic Disc Brakes',
    tyres: '10" Front / 10" Rear Maxxis Tyres',
    throttle: 'Full Twist Throttle (Off-Road / Competition)',
    legal: 'Restricted / Off-Road Only',
    age: 4
  },
  'ktm-sxe2': {
    power: 1800, torque: 8, speed: 20, range: '15 - 20 miles', maxRange: 20,
    batWh: 280, batBrand: 'KTM BLi300 Power Tool Style Quick Battery', weight: 29,
    chargeTime: 1, water: 'IP65', frame: 'Extruded Aluminium Centre Frame',
    gears: 'Direct Hub Drive', brakes: 'Hydraulic Disc Brakes (140mm)',
    tyres: '10" Spoke Wheels with Knobbly Tyres',
    throttle: 'Full Twist Throttle (Off-Road / Competition)',
    legal: 'Restricted / Off-Road Only',
    age: 3
  },
  'eride-ss': {
    power: 12000, torque: 450, speed: 56, range: '42 - 50 miles', maxRange: 50,
    batWh: 2880, batBrand: 'E Ride Pro 72V 40Ah High Drain Lithium Pack', weight: 61,
    chargeTime: 3.5, water: 'IP67', frame: 'Forged Aircraft Aluminum Chassis',
    gears: 'Primary Belt & Heavy Chain Drive', brakes: 'Dot-4 Dual 4-Piston Hydraulic Disc (220mm)',
    tyres: '19" Front / 19" Rear High-Traction Knobbly',
    throttle: 'Full Twist Throttle (Off-Road / Competition)',
    legal: 'Restricted / Off-Road Only',
    age: 16
  },
  'eride-s': {
    power: 6000, torque: 300, speed: 47, range: '35 - 42 miles', maxRange: 42,
    batWh: 2160, batBrand: 'E Ride Pro 72V 30Ah Lithium Battery', weight: 54,
    chargeTime: 3, water: 'IP65', frame: 'Forged Aircraft Aluminum Chassis',
    gears: 'Primary Belt & Heavy Chain Drive', brakes: '4-Piston Hydraulic Disc Brakes',
    tyres: '17" Front / 17" Rear Dirt Tyres',
    throttle: 'Full Twist Throttle (Off-Road / Competition)',
    legal: 'Restricted / Off-Road Only',
    age: 16
  },
  'rfn-ares-rally': {
    power: 5000, torque: 270, speed: 45, range: '65 - 87 miles', maxRange: 87,
    batWh: 2590, batBrand: 'RFN 74V 35Ah High Capacity Lithium Battery', weight: 65,
    chargeTime: 3.5, water: 'IP67', frame: 'High-Strength Forged Aluminium Alloy',
    gears: 'Direct Chain Drive with 200mm Suspension Travel', brakes: '4-Piston Hydraulic Disc Brakes',
    tyres: '19" Front / 18" Rear CST Off-Road Tyres',
    throttle: 'Full Twist Throttle (Off-Road / Competition)',
    legal: 'Restricted / Off-Road Only',
    age: 16
  },
  'rfn-ares-rally-pro': {
    power: 12500, torque: 450, speed: 58, range: '50 - 60 miles', maxRange: 60,
    batWh: 3182, batBrand: 'RFN 74V 43Ah High Discharge Lithium Pack', weight: 68,
    chargeTime: 3.5, water: 'IP67', frame: 'Race-Spec Forged Aluminium Monocoque',
    gears: 'Direct High-Torque Chain Drive', brakes: 'Race-Spec 4-Piston Hydraulic Disc (220mm)',
    tyres: '19" Front / 18" Rear Competition Motocross',
    throttle: 'Full Twist Throttle (Off-Road / Competition)',
    legal: 'Restricted / Off-Road Only',
    age: 16
  },
  'rfn-ares-rs': {
    power: 4000, torque: 200, speed: 28, range: '45 - 55 miles', maxRange: 55,
    batWh: 2590, batBrand: 'RFN 74V 35Ah Removable Lithium Pack', weight: 69,
    chargeTime: 3.5, water: 'IP67', frame: 'High-Strength Forged Aluminium Alloy',
    gears: 'Direct Chain Drive with Road Indicators & Mirrors', brakes: 'Hydraulic Disc Brakes',
    tyres: '19" Dual-Sport Road Approved Enduro',
    throttle: 'Full Throttle (Requires L1e-A registration)',
    legal: 'UK Road-Legal L1e-B / Moped (DVLA Registered)',
    age: 16
  },
  'rfn-warrior-sxe5': {
    power: 2500, torque: 120, speed: 25, range: '18 - 25 miles', maxRange: 25,
    batWh: 720, batBrand: 'RFN 48V 15Ah Lithium Pack', weight: 38,
    chargeTime: 2.5, water: 'IP65', frame: 'Lightweight High-Tensile Steel',
    gears: 'Direct Chain Drive', brakes: 'Hydraulic Disc Brakes',
    tyres: '14" Front / 12" Rear Dirt Knobbly',
    throttle: 'Full Twist Throttle (Off-Road / Competition)',
    legal: 'Restricted / Off-Road Only',
    age: 6
  },
  'rfn-warrior-sxe8': {
    power: 4000, torque: 180, speed: 32, range: '22 - 28 miles', maxRange: 28,
    batWh: 960, batBrand: 'RFN 48V 20Ah Lithium Pack', weight: 44,
    chargeTime: 2.5, water: 'IP65', frame: 'Reinforced Lightweight Steel Chassis',
    gears: 'Direct Chain Drive', brakes: 'Hydraulic Disc Brakes',
    tyres: '14" Front / 12" Rear Motocross Tyres',
    throttle: 'Full Twist Throttle (Off-Road / Competition)',
    legal: 'Restricted / Off-Road Only',
    age: 8
  },
  'revvi-12': {
    power: 250, torque: 15, speed: 10, range: '10 - 15 miles', maxRange: 15,
    batWh: 125, batBrand: 'Revvi 24V 5.2Ah Quick Release Battery', weight: 9,
    chargeTime: 1.5, water: 'IPX5', frame: 'Superlight Aluminium Alloy',
    gears: 'Chainless Direct Brushless Hub Motor', brakes: 'Rear Drum / Disc Lever Brake',
    tyres: '12" Pneumatic Rubber Off-Road Tyres',
    throttle: 'Walk Assist (up to 3.7mph)',
    legal: '100% UK Road Legal (No Tax, Reg or Insurance Required)',
    age: 2
  },
  'revvi-16': {
    power: 250, torque: 20, speed: 12, range: '12 - 16 miles', maxRange: 16,
    batWh: 125, batBrand: 'Revvi 24V 5.2Ah Quick Release Battery', weight: 11,
    chargeTime: 1.5, water: 'IPX5', frame: 'Superlight Aluminium Alloy',
    gears: 'Brushless Hub Motor', brakes: 'Rear Lever Disc Brake',
    tyres: '16" Pneumatic Rubber Off-Road Tyres',
    throttle: 'Walk Assist (up to 3.7mph)',
    legal: '100% UK Road Legal (No Tax, Reg or Insurance Required)',
    age: 4
  },
  'revvi-16-plus': {
    power: 350, torque: 25, speed: 15, range: '14 - 18 miles', maxRange: 18,
    batWh: 187, batBrand: 'Revvi 36V 5.2Ah High Performance Battery', weight: 12.5,
    chargeTime: 2, water: 'IPX5', frame: 'Alloy Frame with Front Suspension Forks',
    gears: 'Brushless Hub Motor', brakes: 'Front & Rear Lever Cable Disc Brakes',
    tyres: '16" Extra-Grip Knobbly Tyres on Alloy Rims',
    throttle: 'Walk Assist (up to 3.7mph)',
    legal: '100% UK Road Legal (No Tax, Reg or Insurance Required)',
    age: 5
  },
  'revvi-18': {
    power: 500, torque: 35, speed: 20, range: '15 - 20 miles', maxRange: 20,
    batWh: 280, batBrand: 'Revvi 36V 7.8Ah Removable Lithium Battery', weight: 17,
    chargeTime: 2.5, water: 'IP65', frame: 'Hydroformed Lightweight Alloy',
    gears: 'High Torque Hub Motor', brakes: 'Dual Hydraulic Disc Brakes',
    tyres: '18" Spoked Off-Road Wheels',
    throttle: 'Full Twist Throttle (Off-Road / Competition)',
    legal: 'Restricted / Off-Road Only',
    age: 8
  },
  'revvi-20': {
    power: 800, torque: 50, speed: 22, range: '18 - 24 miles', maxRange: 24,
    batWh: 500, batBrand: 'Revvi 48V 10.4Ah Lithium Battery Pack', weight: 22,
    chargeTime: 3, water: 'IP65', frame: 'Full-Suspension Aircraft Alloy',
    gears: 'Brushless Geared Hub Motor', brakes: 'Dual Hydraulic Disc Brakes',
    tyres: '20" Rugged Off-Road Dirt Tyres',
    throttle: 'Full Twist Throttle (Off-Road / Competition)',
    legal: 'Restricted / Off-Road Only',
    age: 10
  },
  'funbikes-mx350': {
    power: 350, torque: 18, speed: 14, range: '10 - 15 miles', maxRange: 15,
    batWh: 288, batBrand: 'FunBikes 36V Lithium Battery Pack', weight: 23,
    chargeTime: 2.5, water: 'IP65', frame: 'Tubular Steel Frame',
    gears: 'Chain Drive with Speed Limiter Key', brakes: 'Mechanical Front & Rear Disc Brakes',
    tyres: '10" Knobbly Dirt Tyres',
    throttle: 'Full Twist Throttle (Off-Road / Competition)',
    legal: 'Restricted / Off-Road Only',
    age: 4
  },
  'funbikes-790': {
    power: 790, torque: 30, speed: 15, range: '12 - 16 miles', maxRange: 16,
    batWh: 432, batBrand: 'FunBikes 36V 12Ah Lithium Battery', weight: 29,
    chargeTime: 3, water: 'IP65', frame: 'Reinforced Steel Dirt Bike Frame',
    gears: 'Chain Drive with 3-Speed Parental Key Limiter', brakes: 'Front & Rear Wavy Disc Brakes',
    tyres: '10" Steel Spoked Off-Road Tyres',
    throttle: 'Full Twist Throttle (Off-Road / Competition)',
    legal: 'Restricted / Off-Road Only',
    age: 6
  },
  'funbikes-1400': {
    power: 1400, torque: 45, speed: 20, range: '15 - 20 miles', maxRange: 20,
    batWh: 720, batBrand: 'FunBikes 48V 15Ah Lithium Battery Pack', weight: 35,
    chargeTime: 3.5, water: 'IP65', frame: 'Heavy-Duty Chromoly Steel',
    gears: 'High-Output Chain Drive with Inverted Forks', brakes: 'Hydraulic Disc Brakes',
    tyres: '14" Front / 12" Rear Dirt Tyres',
    throttle: 'Full Twist Throttle (Off-Road / Competition)',
    legal: 'Restricted / Off-Road Only',
    age: 10
  },
  'funbikes-1800': {
    power: 1800, torque: 60, speed: 25, range: '18 - 25 miles', maxRange: 25,
    batWh: 864, batBrand: 'FunBikes 48V 18Ah High-Output Lithium Pack', weight: 39,
    chargeTime: 3.5, water: 'IP65', frame: 'Heavy-Duty Chromoly Steel Cradle',
    gears: 'Brushless Motor with Direct Chain Drive', brakes: 'Hydraulic Disc Brakes Front & Rear',
    tyres: '14" Front / 12" Rear Off-Road Motocross',
    throttle: 'Full Twist Throttle (Off-Road / Competition)',
    legal: 'Restricted / Off-Road Only',
    age: 12
  },
  'razor-mx350': {
    power: 250, torque: 15, speed: 14, range: '8 - 12 miles', maxRange: 12,
    batWh: 168, batBrand: 'Razor 24V Sealed Battery', weight: 29,
    chargeTime: 6, water: 'IPX5', frame: 'Steel Dirt Rocket Authentic Frame',
    gears: 'Chain-Driven Single Speed High-Torque Motor', brakes: 'Hand-Operated Rear Brake',
    tyres: '12" Pneumatic Knobby Dirt Tyres',
    throttle: 'Full Twist Throttle (Off-Road / Competition)',
    legal: 'Restricted / Off-Road Only',
    age: 13
  },
  'razor-mx400': {
    power: 350, torque: 20, speed: 14, range: '9 - 14 miles', maxRange: 14,
    batWh: 168, batBrand: 'Razor 24V Sealed Battery', weight: 30,
    chargeTime: 6, water: 'IPX5', frame: 'Steel Dirt Rocket Authentic Frame',
    gears: 'Chain-Driven Single Speed High-Torque Motor', brakes: 'Hand-Operated Rear Disc Brake',
    tyres: '12" Pneumatic Knobby Tyres',
    throttle: 'Full Twist Throttle (Off-Road / Competition)',
    legal: 'Restricted / Off-Road Only',
    age: 13
  }
};

const processedBikes = bikes.map((b, idx) => {
  const priceNum = parseInt(b.price.replace(/[^0-9]/g, '')) || 3199;
  const rrpNum = Math.round(priceNum * (b.badges && b.badges.includes('sale') ? 1.15 : 1.08) / 10) * 10;
  const spec = specMap[b.id] || {
    power: 5000, torque: 250, speed: 45, range: '40 - 50 miles', maxRange: 50,
    batWh: 2000, batBrand: b.brand + ' High-Output Lithium Pack', weight: 55,
    chargeTime: 3.5, water: 'IP65', frame: 'High-Strength Alloy Cradle',
    gears: 'Direct Drive / Chain Drive', brakes: 'Hydraulic Disc Brakes',
    tyres: '19" Off-Road Knobbly Tyres',
    throttle: 'Full Twist Throttle (Off-Road / Competition)',
    legal: 'Restricted / Off-Road Only',
    age: 16
  };

  let category = 'Electric Dirt Bikes';
  if (b.tags.includes('road')) {
    category = 'Road-Legal Electric Dirt Bikes';
  } else if (b.tags.includes('kids')) {
    category = 'Kids & Youth Electric Dirt Bikes';
  }

  const slug = (b.brand + ' ' + b.name).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const fullName = b.name.startsWith(b.brand) ? b.name : `${b.brand} ${b.name}`;
  const imgPath = b.img;

  const isFeatured = ['ultra-bee', 'lbx', 'talaria-mx5', 'stark-mx', 'eride-ss', 'rfn-ares-rally-pro', 'talaria-sting-r', 'storm-bee'].includes(b.id);

  return {
    id: b.id,
    slug: slug,
    name: fullName,
    subtitle: `${b.specs.join(' • ')} | ${spec.batBrand}`,
    tagline: b.desc,
    category: category,
    priceGBP: priceNum,
    rrpGBP: rrpNum,
    rating: Number((4.8 + ((idx % 3) * 0.1)).toFixed(1)),
    reviewCount: 24 + ((idx * 7) % 110),
    inStock: true,
    stockCount: 8 + ((idx * 3) % 15),
    sku: `VT-${b.brand.slice(0, 3).toUpperCase()}-${b.id.toUpperCase().slice(0, 8)}`,
    gtin13: `50607891${String(idx + 1000).padStart(5, '0')}`,
    mpn: `${b.brand.toUpperCase()}-${b.id.toUpperCase()}`,
    images: [
      imgPath,
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1200&q=80'
    ],
    ukHighlights: [
      `⚡ ${b.specs[0] || spec.power + 'W Output'}: High-torque powertrain tuned for UK terrain`,
      `🔋 ${spec.batBrand}: Fast charging in ~${spec.chargeTime}h with Smart BMS`,
      `🛑 ${spec.brakes}: Maximum stopping power and control`,
      `🌧️ ${spec.water} Weatherproofing: Sealed against British mud and rain`,
      `🇬🇧 Official UK Stock: 2-Year Warranty & Free UK Mainland Tracked Delivery`
    ],
    description: b.desc + ' Supplied brand new in box with official UK warranty, charger, toolkit, user manual, and factory support from VoltTrail UK.',
    metaTitle: `${fullName} UK | Official VoltTrail Dealer`,
    metaDescription: `Buy the ${fullName} in the UK at VoltTrail. ${b.specs.join(', ')}. Free UK delivery, 0% finance, and 2-year UK warranty.`,
    technicalSpecs: {
      batteryCapacityWh: spec.batWh,
      batteryBrand: spec.batBrand,
      rangeMiles: spec.range,
      maxRangeMiles: spec.maxRange,
      chargingTimeHours: spec.chargeTime,
      removableBattery: true,
      motorType: 'Mid-Drive Motor',
      motorBrand: `${b.brand} High-Torque Brushless Motor`,
      motorPowerW: spec.power,
      torqueNm: spec.torque,
      weightKg: spec.weight,
      waterResistanceRating: spec.water,
      frameMaterial: spec.frame,
      gears: spec.gears,
      brakes: spec.brakes,
      tyres: spec.tyres,
      cycleToWorkEligible: false
    },
    eapcCompliance: {
      continuousRatedPowerW: Math.min(spec.power, 250),
      maxAssistedSpeedMph: spec.speed,
      pedalAssistRequired: false,
      throttleType: spec.throttle,
      minimumRiderAge: spec.age,
      en15194Certified: b.tags.includes('road'),
      ukRoadLegalStatus: spec.legal
    },
    paaFaqs: [
      {
        question: `Is the ${fullName} road legal in the UK?`,
        answer: b.tags.includes('road')
          ? `Yes, the ${fullName} is fully road-legal under UK L1e-B / moped regulations. It requires DVLA registration, CBT license / car license (with provisional), helmet, and road insurance.`
          : `This model is intended for off-road use on private land, MX tracks, and designated enduro courses with landowner permission.`
      },
      {
        question: `How fast is the ${fullName} and what is the real-world battery range?`,
        answer: `The ${fullName} achieves up to ${spec.speed} mph with a real-world range of ${spec.range} depending on rider weight, terrain gradient, and riding mode.`
      },
      {
        question: `What warranty and UK delivery is included?`,
        answer: `All VoltTrail bikes include our official 2-Year UK Warranty, full access to our UK parts depot, and free tracked nationwide delivery.`
      }
    ],
    idealForCities: [
      'All UK', 'London', 'Birmingham', 'Manchester', 'Leeds', 'Glasgow', 
      'Bristol', 'Sheffield', 'Liverpool', 'Edinburgh', 'Cardiff', 'Belfast', 
      'Newcastle', 'Nottingham', 'Cambridge', 'Oxford', 'Southampton'
    ],
    featured: isFeatured
  };
});

const processedQuads = quads.map((q, idx) => {
  const priceNum = parseInt(q.price.replace(/[^0-9]/g, '')) || 1499;
  const slug = (q.brand + ' ' + q.name).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const fullName = q.name.startsWith(q.brand) ? q.name : `${q.brand} ${q.name}`;
  
  return {
    id: q.id,
    slug: slug,
    name: fullName,
    subtitle: `${q.specs.join(' • ')} | All-Terrain Electric Quad`,
    tagline: q.desc,
    category: 'Electric Quads & UTVs',
    priceGBP: priceNum,
    rrpGBP: Math.round(priceNum * 1.1),
    rating: 4.9,
    reviewCount: 18 + (idx * 4),
    inStock: true,
    stockCount: 6,
    sku: `VT-QUAD-${q.id.toUpperCase().slice(0, 8)}`,
    gtin13: `50607892${String(idx + 1000).padStart(5, '0')}`,
    mpn: `QUAD-${q.id.toUpperCase()}`,
    images: [q.img, 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80'],
    ukHighlights: [
      `⚡ ${q.specs[0] || 'High-Power Electric Drive'}: Robust 4-wheel capability`,
      `🔋 High-capacity battery pack with fast recharge`,
      `🛡️ Heavy-duty steel chassis and all-terrain suspension`,
      `🇬🇧 Official UK Stock with 2-Year Warranty & UK delivery`
    ],
    description: q.desc,
    metaTitle: `${fullName} UK | Electric Quad | VoltTrail`,
    metaDescription: `Buy the ${fullName} in the UK at VoltTrail. High-torque electric quad with free UK delivery and warranty.`,
    technicalSpecs: {
      batteryCapacityWh: 2400,
      batteryBrand: `${q.brand} Quad PowerPack`,
      rangeMiles: '25 - 40 miles',
      maxRangeMiles: 40,
      chargingTimeHours: 4,
      removableBattery: false,
      motorType: 'Mid-Drive Motor',
      motorBrand: `${q.brand} Brushless Quad Motor`,
      motorPowerW: 3000,
      torqueNm: 200,
      weightKg: 140,
      waterResistanceRating: 'IP65',
      frameMaterial: 'Tubular Steel Quad Chassis',
      gears: 'Automatic Forward / Neutral / Reverse',
      brakes: 'Hydraulic Quad Disc Brakes',
      tyres: 'All-Terrain Pneumatic Knobby Quad Tyres',
      cycleToWorkEligible: false
    },
    eapcCompliance: {
      continuousRatedPowerW: 250,
      maxAssistedSpeedMph: 25,
      pedalAssistRequired: false,
      throttleType: 'Full Twist / Thumb Throttle',
      minimumRiderAge: 16,
      en15194Certified: false,
      ukRoadLegalStatus: 'Restricted / Off-Road Only'
    },
    paaFaqs: [
      {
        question: `Where can I ride the ${fullName} in the UK?`,
        answer: `Electric quads are suitable for private estates, agricultural land, equestrian centers, and dedicated off-road quad tracks.`
      }
    ],
    idealForCities: ['All UK'],
    featured: idx === 0
  };
});

const processedParts = parts.slice(0, 15).map((p, idx) => {
  const priceNum = parseInt(p.price.replace(/[^0-9]/g, '')) || 149;
  const slug = (p.name).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  
  return {
    id: p.id,
    slug: slug,
    name: p.name,
    subtitle: `Genuine ${p.brand || 'VoltTrail'} Official Spare Part / Upgrade`,
    tagline: `High-durability official replacement ${p.name.toLowerCase()} designed for optimal performance and exact fitment.`,
    category: 'Accessories & Gear',
    priceGBP: priceNum,
    rrpGBP: Math.round(priceNum * 1.12),
    rating: 5.0,
    reviewCount: 32 + (idx * 5),
    inStock: true,
    stockCount: 25,
    sku: `VT-ACC-${p.id.toUpperCase().slice(0, 8)}`,
    gtin13: `50607893${String(idx + 1000).padStart(5, '0')}`,
    mpn: `PART-${p.id.toUpperCase()}`,
    images: [p.img, 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80'],
    ukHighlights: [
      `⚡ 100% Genuine factory-certified component`,
      `🔋 High-reliability & plug-and-play compatibility`,
      `🇬🇧 Dispatched directly from UK depot with tracked 24-48h courier`
    ],
    description: `Official ${p.name}. Genuine manufacturer component with full quality assurance and UK warranty.`,
    metaTitle: `${p.name} | VoltTrail UK Official Parts`,
    metaDescription: `Buy genuine ${p.name} in the UK from VoltTrail. Rapid UK dispatch and official warranty.`,
    technicalSpecs: {
      batteryCapacityWh: 0,
      batteryBrand: 'N/A',
      rangeMiles: 'N/A',
      maxRangeMiles: 0,
      chargingTimeHours: 0,
      removableBattery: false,
      motorType: 'Mid-Drive Motor',
      motorBrand: 'VoltTrail Hardware',
      motorPowerW: 0,
      torqueNm: 0,
      weightKg: 2,
      waterResistanceRating: 'IP67',
      frameMaterial: 'Aircraft Alloy / Composite',
      gears: 'N/A',
      brakes: 'N/A',
      tyres: 'N/A',
      cycleToWorkEligible: false
    },
    eapcCompliance: {
      continuousRatedPowerW: 0,
      maxAssistedSpeedMph: 0,
      pedalAssistRequired: false,
      throttleType: 'None',
      minimumRiderAge: 16,
      en15194Certified: true,
      ukRoadLegalStatus: '100% UK Road Legal (No Tax, Reg or Insurance Required)'
    },
    paaFaqs: [
      {
        question: `Is this part compatible with my electric dirt bike?`,
        answer: `This is an official genuine part designed specifically for the stated model series.`
      }
    ],
    idealForCities: ['All UK'],
    featured: false
  };
});

const allProducts = [...processedBikes, ...processedQuads, ...processedParts];
console.log(`Generated ${allProducts.length} total products (${processedBikes.length} bikes, ${processedQuads.length} quads, ${processedParts.length} parts)`);

const fileHeader = `import { Product } from '../types';

const ALL_UK_CITIES = [
  'All UK',
  'London',
  'Birmingham',
  'Manchester',
  'Leeds',
  'Glasgow',
  'Bristol',
  'Sheffield',
  'Liverpool',
  'Edinburgh',
  'Cardiff',
  'Belfast',
  'Newcastle',
  'Nottingham',
  'Cambridge',
  'Oxford',
  'Southampton'
];

export const UK_PRODUCTS: Product[] = `;

const finalContent = fileHeader + JSON.stringify(allProducts, null, 2) + ';\n';
fs.writeFileSync(path.join(__dirname, '../src/data/productsData.ts'), finalContent, 'utf8');
console.log('Successfully wrote src/data/productsData.ts!');
