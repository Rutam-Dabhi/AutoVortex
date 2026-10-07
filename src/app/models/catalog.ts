export type ItemType = 'vehicle' | 'part';

export interface Vehicle {
  id: string;
  name: string;
  year: number;
  price: number;
  type: 'New' | 'Used';
  fuel: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
  transmission: 'Automatic' | 'Manual';
  mileage: string;
  image: string;
  tag?: string;
  description: string;
}

export interface Part {
  id: string;
  name: string;
  price: number;
  compatible: string;
  stock: number;
  image: string;
  category: string;
}

export interface CartItem {
  id: string;
  type: ItemType;
  quantity: number;
}

const pexelsImage = (photoId: number, width: number): string =>
  `https://images.pexels.com/photos/${photoId}/pexels-photo-${photoId}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;

const unsplashImage = (photoId: string, width: number): string =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=85`;

export const VEHICLES: Vehicle[] = [
  {
    id: 'mercedes-amg-gt',
    name: 'Mercedes-AMG GT',
    year: 2025,
    price: 4890000,
    type: 'New',
    fuel: 'Petrol',
    transmission: 'Automatic',
    mileage: '8.5 km/l',
    image: pexelsImage(112460, 1100),
    tag: 'JUST ARRIVED',
    description: 'A high-performance grand tourer with a handcrafted cabin and unmistakable Mercedes-AMG character.'
  },
  {
    id: 'porsche-911',
    name: 'Porsche 911 Carrera',
    year: 2024,
    price: 3275000,
    type: 'Used',
    fuel: 'Petrol',
    transmission: 'Automatic',
    mileage: '12,400 km',
    image: pexelsImage(210019, 1100),
    tag: 'CERTIFIED',
    description: 'A certified 911 Carrera with an iconic rear-engine layout and a carefully documented service history.'
  },
  {
    id: 'tesla-model-s',
    name: 'Tesla Model S',
    year: 2025,
    price: 4120000,
    type: 'New',
    fuel: 'Electric',
    transmission: 'Automatic',
    mileage: '480 km range',
    image: unsplashImage('photo-1560958089-b8a1929cea89', 1100),
    tag: 'ELECTRIC',
    description: 'An all-electric luxury sedan combining immediate acceleration with long-distance range.'
  },
  {
    id: 'bmw-x5',
    name: 'BMW X5',
    year: 2023,
    price: 2190000,
    type: 'Used',
    fuel: 'Diesel',
    transmission: 'Manual',
    mileage: '18,800 km',
    image: pexelsImage(116675, 1100),
    description: 'A spacious luxury SUV with a full service history and confident road manners.'
  },
  {
    id: 'bmw-m4',
    name: 'BMW M4 Competition',
    year: 2025,
    price: 3650000,
    type: 'New',
    fuel: 'Petrol',
    transmission: 'Manual',
    mileage: '11.2 km/l',
    image: pexelsImage(100650, 1100),
    description: 'A driver-focused M coupe with precise handling, a responsive engine and everyday usability.'
  },
  {
    id: 'jeep-wrangler',
    name: 'Jeep Wrangler Unlimited',
    year: 2024,
    price: 2840000,
    type: 'Used',
    fuel: 'Diesel',
    transmission: 'Automatic',
    mileage: '21,600 km',
    image: pexelsImage(1149137, 1100),
    tag: 'CERTIFIED',
    description: 'A capable four-wheel-drive SUV prepared for city commutes and weekend trails alike.'
  },
  {
    id: 'toyota-prius',
    name: 'Toyota Prius',
    year: 2025,
    price: 3125000,
    type: 'New',
    fuel: 'Hybrid',
    transmission: 'Automatic',
    mileage: '22.4 km/l',
    image: unsplashImage('photo-1549317661-bd32c8ce0db2', 1100),
    tag: 'HYBRID',
    description: 'Efficient hybrid power and a comfortable cabin designed for everyday driving.'
  },
  {
    id: 'chevrolet-camaro',
    name: 'Chevrolet Camaro SS',
    year: 2022,
    price: 3980000,
    type: 'Used',
    fuel: 'Petrol',
    transmission: 'Manual',
    mileage: '24,100 km',
    image: pexelsImage(358070, 1100),
    tag: 'CERTIFIED',
    description: 'A certified Camaro SS with a responsive V8 and a verified service history.'
  },
  {
    id: 'hyundai-ioniq-5',
    name: 'Hyundai IONIQ 5',
    year: 2025,
    price: 2590000,
    type: 'New',
    fuel: 'Electric',
    transmission: 'Automatic',
    mileage: '390 km range',
    image: pexelsImage(1545743, 1100),
    tag: 'ELECTRIC',
    description: 'A practical electric crossover with fast charging and a calm, connected cabin.'
  },
  {
    id: 'ford-mustang',
    name: 'Ford Mustang GT',
    year: 2021,
    price: 4450000,
    type: 'Used',
    fuel: 'Petrol',
    transmission: 'Manual',
    mileage: '29,300 km',
    image: unsplashImage('photo-1494976388531-d1058494cdd8', 1100),
    tag: 'COLLECTOR PICK',
    description: 'A beautifully kept Mustang GT made for spirited drives and weekend cruising.'
  },
  {
    id: 'toyota-supra',
    name: 'Toyota GR Supra',
    year: 2025,
    price: 5890000,
    type: 'New',
    fuel: 'Petrol',
    transmission: 'Automatic',
    mileage: '10.2 km/l',
    image: unsplashImage('photo-1621007947382-bb3c3994e3fb', 1100),
    tag: 'SPORT',
    description: 'A two-seat sports car tuned for responsive handling and engaging performance.'
  },
  {
    id: 'audi-r8',
    name: 'Audi R8 V10',
    year: 2022,
    price: 12400000,
    type: 'Used',
    fuel: 'Petrol',
    transmission: 'Automatic',
    mileage: '16,200 km',
    image: unsplashImage('photo-1603584173870-7f23fdae1b7a', 1100),
    tag: 'CERTIFIED',
    description: 'A mid-engine Audi supercar with a naturally aspirated V10 and a verified inspection.'
  },
  {
    id: 'nissan-gt-r',
    name: 'Nissan GT-R',
    year: 2021,
    price: 8950000,
    type: 'Used',
    fuel: 'Petrol',
    transmission: 'Automatic',
    mileage: '27,800 km',
    image: unsplashImage('photo-1614200187524-dc4b892acf16', 1100),
    description: 'An all-wheel-drive performance coupe with a twin-turbocharged engine.'
  },
  {
    id: 'land-rover-defender',
    name: 'Land Rover Defender 110',
    year: 2024,
    price: 7850000,
    type: 'New',
    fuel: 'Diesel',
    transmission: 'Automatic',
    mileage: '11.8 km/l',
    image: unsplashImage('photo-1519003722824-194d4455a60c', 1100),
    tag: 'ADVENTURE',
    description: 'A modern four-wheel-drive Defender with room for family and equipment.'
  },
  {
    id: 'volkswagen-golf-gti',
    name: 'Volkswagen Golf GTI',
    year: 2023,
    price: 3450000,
    type: 'Used',
    fuel: 'Petrol',
    transmission: 'Automatic',
    mileage: '19,500 km',
    image: pexelsImage(170811, 1100),
    description: 'A practical hot hatch with lively performance and a well-appointed cabin.'
  },
  {
    id: 'mazda-mx-5',
    name: 'Mazda MX-5 Miata',
    year: 2024,
    price: 3120000,
    type: 'New',
    fuel: 'Petrol',
    transmission: 'Manual',
    mileage: '15.8 km/l',
    image: pexelsImage(1592384, 1100),
    tag: 'ROADSTER',
    description: 'A lightweight roadster with rear-wheel drive and an engaging manual gearbox.'
  },
  {
    id: 'kia-ev6',
    name: 'Kia EV6',
    year: 2025,
    price: 5290000,
    type: 'New',
    fuel: 'Electric',
    transmission: 'Automatic',
    mileage: '528 km range',
    image: unsplashImage('photo-1504215680853-026ed2a45def', 1100),
    tag: 'ELECTRIC',
    description: 'An electric crossover with rapid charging and a spacious modern interior.'
  },
  {
    id: 'toyota-rav4',
    name: 'Toyota RAV4 Hybrid',
    year: 2024,
    price: 3980000,
    type: 'New',
    fuel: 'Hybrid',
    transmission: 'Automatic',
    mileage: '20.5 km/l',
    image: unsplashImage('photo-1519641471654-76ce0107ad1b', 1100),
    tag: 'HYBRID',
    description: 'A versatile hybrid SUV with efficient performance and everyday practicality.'
  },
  {
    id: 'honda-civic-type-r',
    name: 'Honda Civic Type R',
    year: 2023,
    price: 4650000,
    type: 'Used',
    fuel: 'Petrol',
    transmission: 'Manual',
    mileage: '14,900 km',
    image: pexelsImage(244206, 1100),
    tag: 'CERTIFIED',
    description: 'A track-inspired hatchback with a precise manual transmission and road-ready comfort.'
  },
  {
    id: 'lexus-lc-500',
    name: 'Lexus LC 500',
    year: 2022,
    price: 11200000,
    type: 'Used',
    fuel: 'Petrol',
    transmission: 'Automatic',
    mileage: '12,600 km',
    image: unsplashImage('photo-1492144534655-ae79c964c9d7', 1100),
    description: 'A refined grand tourer blending handcrafted luxury with V8 performance.'
  },
  {
    id: 'volvo-xc60',
    name: 'Volvo XC60 Recharge',
    year: 2024,
    price: 6750000,
    type: 'New',
    fuel: 'Hybrid',
    transmission: 'Automatic',
    mileage: '18.2 km/l',
    image: pexelsImage(1719648, 1100),
    tag: 'PLUG-IN HYBRID',
    description: 'A plug-in hybrid luxury SUV focused on comfort, safety and efficient daily driving.'
  },
  {
    id: 'skoda-octavia',
    name: 'Škoda Octavia vRS',
    year: 2023,
    price: 3820000,
    type: 'Used',
    fuel: 'Petrol',
    transmission: 'Automatic',
    mileage: '17,300 km',
    image: pexelsImage(120049, 1100),
    description: 'A spacious performance sedan with a practical cabin and responsive turbo power.'
  }
];

export const PARTS: Part[] = [
  { id: 'alloy-wheel', name: '18-inch Alloy Wheel', price: 18500, compatible: 'BMW 3 Series · 2022–25', stock: 8, image: pexelsImage(4489734, 800), category: 'Wheels' },
  { id: 'brake-kit', name: 'Performance Brake Kit', price: 32900, compatible: 'BMW M4 · Toyota GR Supra', stock: 4, image: pexelsImage(4489732, 800), category: 'Performance' },
  { id: 'led-headlight', name: 'Matrix LED Headlight', price: 24750, compatible: 'Audi A4 · 2021–24', stock: 12, image: unsplashImage('photo-1511919884226-fd3cad34687c', 800), category: 'Lighting' },
  { id: 'engine-oil', name: 'Full Synthetic Engine Oil', price: 3250, compatible: 'Most petrol models · 5W-30', stock: 32, image: pexelsImage(4489710, 800), category: 'Essentials' },
  { id: 'air-filter', name: 'High-Flow Engine Air Filter', price: 4850, compatible: 'BMW M4 · Toyota GR Supra', stock: 18, image: unsplashImage('photo-1581092160562-40aa08e78837', 800), category: 'Performance' },
  { id: 'cabin-filter', name: 'Cabin Air Filter', price: 1850, compatible: 'Toyota RAV4 · 2020–25', stock: 25, image: pexelsImage(4480450, 800), category: 'Essentials' },
  { id: 'spark-plugs', name: 'Iridium Spark Plug Set', price: 5600, compatible: 'Honda Civic · Toyota Supra', stock: 14, image: pexelsImage(4489737, 800), category: 'Engine' },
  { id: 'wiper-blades', name: 'All-Weather Wiper Blades', price: 1450, compatible: 'Universal fit · 22 inch', stock: 40, image: pexelsImage(4489741, 800), category: 'Essentials' },
  { id: 'alloy-wheel-black', name: 'Black 19-inch Alloy Wheel', price: 21200, compatible: 'Ford Mustang · 2022–25', stock: 6, image: pexelsImage(4489736, 800), category: 'Wheels' },
  { id: 'tyre-performance', name: 'Performance Road Tyre', price: 12900, compatible: 'BMW M4 · Audi R8', stock: 10, image: pexelsImage(3806288, 800), category: 'Wheels' },
  { id: 'brake-pads', name: 'Ceramic Brake Pads', price: 7800, compatible: 'Porsche 911 · BMW M4', stock: 16, image: pexelsImage(4489739, 800), category: 'Performance' },
  { id: 'tail-lamp', name: 'LED Rear Tail Lamp', price: 16800, compatible: 'Jeep Wrangler · 2023–25', stock: 7, image: pexelsImage(4489733, 800), category: 'Lighting' },
  { id: 'fog-lamps', name: 'LED Fog Lamp Pair', price: 6200, compatible: 'Land Rover Defender · 2021–25', stock: 11, image: pexelsImage(4489735, 800), category: 'Lighting' },
  { id: 'battery-12v', name: '12V AGM Car Battery', price: 11900, compatible: 'Petrol & diesel models', stock: 9, image: unsplashImage('photo-1621905251918-48416bd8575a', 800), category: 'Electrical' },
  { id: 'alternator', name: 'Smart Charge Alternator', price: 18700, compatible: 'Mercedes C-Class · BMW 3 Series', stock: 5, image: pexelsImage(4489720, 800), category: 'Electrical' },
  { id: 'radiator', name: 'Aluminium Engine Radiator', price: 15400, compatible: 'Volkswagen Golf · 2020–24', stock: 6, image: unsplashImage('photo-1504307651254-35680f356dfd', 800), category: 'Engine' },
  { id: 'fuel-pump', name: 'High-Pressure Fuel Pump', price: 22500, compatible: 'BMW M4 · 2022–25', stock: 3, image: pexelsImage(3807329, 800), category: 'Engine' },
  { id: 'floor-mats', name: 'All-Weather Floor Mats', price: 3950, compatible: 'Custom fit · Toyota RAV4', stock: 22, image: pexelsImage(4488660, 800), category: 'Accessories' },
  { id: 'roof-rack', name: 'Aluminium Touring Roof Rack', price: 14900, compatible: 'Land Rover Defender · Toyota RAV4', stock: 8, image: pexelsImage(4483610, 800), category: 'Accessories' },
  { id: 'charging-cable', name: 'Type 2 EV Charging Cable', price: 8900, compatible: 'Tesla Model S · Kia EV6', stock: 13, image: unsplashImage('photo-1593941707882-a5bba14938c7', 800), category: 'Electrical' },
  { id: 'clutch-kit', name: 'Complete Clutch Kit', price: 28700, compatible: 'Volkswagen Golf GTI · 2020–24', stock: 5, image: pexelsImage(4489730, 800), category: 'Engine' },
  { id: 'suspension-strut', name: 'Front Suspension Strut', price: 17400, compatible: 'Honda Civic · 2022–25', stock: 7, image: pexelsImage(4489742, 800), category: 'Suspension' },
  { id: 'shock-absorber', name: 'Gas Shock Absorber', price: 9800, compatible: 'Toyota RAV4 · 2020–25', stock: 9, image: pexelsImage(4489743, 800), category: 'Suspension' },
  { id: 'engine-mount', name: 'Engine Mount Bracket', price: 6400, compatible: 'Ford Mustang · 2018–24', stock: 6, image: unsplashImage('photo-1581092580497-e0d23cbdf1dc', 800), category: 'Engine' },
  { id: 'oil-filter', name: 'Spin-On Oil Filter', price: 950, compatible: 'Mazda MX-5 · 2019–25', stock: 36, image: pexelsImage(4489731, 800), category: 'Essentials' },
  { id: 'alternator-belt', name: 'Serpentine Drive Belt', price: 1750, compatible: 'Toyota Prius · 2016–22', stock: 18, image: unsplashImage('photo-1486262715619-67b85e0b08d3', 800), category: 'Engine' },
  { id: 'parking-sensor', name: 'Rear Parking Sensor Pair', price: 4200, compatible: 'BMW X5 · 2021–25', stock: 14, image: unsplashImage('photo-1599256621730-535171e28e50', 800), category: 'Electrical' },
  { id: 'side-mirror', name: 'Heated Side Mirror Assembly', price: 11200, compatible: 'Audi A4 · 2020–24', stock: 4, image: pexelsImage(3806280, 800), category: 'Accessories' },
  { id: 'radiator-hose', name: 'Reinforced Radiator Hose', price: 2300, compatible: 'Chevrolet Camaro · 2016–24', stock: 11, image: unsplashImage('photo-1581091226825-a6a2a5aee158', 800), category: 'Engine' },
  { id: 'ev-wall-charger', name: '7kW Home EV Wall Charger', price: 38900, compatible: 'Tesla Model S · Kia EV6 · IONIQ 5', stock: 5, image: unsplashImage('photo-1619642751034-765dfdf7c58e', 800), category: 'Electrical' }
];
