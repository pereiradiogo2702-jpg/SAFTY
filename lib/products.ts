export interface Product {
  id: string;
  name: string;
  country: string;
  countryFlag: string;
  region: string;
  price: number;
  description: string;
  ingredients: string[];
  image: string;
  category: string;
  featured: boolean;
}

export const products: Product[] = [
  // Portugal
  {
    id: 'pt-1',
    name: 'Néctar de Maracujá',
    country: 'Portugal',
    countryFlag: '🇵🇹',
    region: 'Madère',
    price: 4.50,
    description: 'Le fruit de la passion de Madère, doux et acidulé, rappelle les jardins tropicaux de l\'île.',
    ingredients: ['Fruit de la passion', 'Eau de source', 'Sucre de canne'],
    image: '/products/maracuja.jpg',
    category: 'Tropical',
    featured: true,
  },
  {
    id: 'pt-2',
    name: 'Sumo de Laranja do Algarve',
    country: 'Portugal',
    countryFlag: '🇵🇹',
    region: 'Algarve',
    price: 3.90,
    description: 'Oranges gorgées de soleil de l\'Algarve, pressées à froid pour un goût authentique.',
    ingredients: ['Oranges de l\'Algarve', 'Eau minérale'],
    image: '/products/laranja.jpg',
    category: 'Agrumes',
    featured: false,
  },
  // Brésil
  {
    id: 'br-1',
    name: 'Suco de Açaí',
    country: 'Brésil',
    countryFlag: '🇧🇷',
    region: 'Amazonie',
    price: 5.90,
    description: 'L\'açaï de l\'Amazonie brésilienne, superaliment ancestral des tribus indigènes.',
    ingredients: ['Açaï', 'Guaraná', 'Banane', 'Miel'],
    image: '/products/acai.jpg',
    category: 'Superaliments',
    featured: true,
  },
  {
    id: 'br-2',
    name: 'Suco de Caju',
    country: 'Brésil',
    countryFlag: '🇧🇷',
    region: 'Nordeste',
    price: 4.20,
    description: 'Le jus de cajou du Nordeste brésilien, rafraîchissant et riche en vitamine C.',
    ingredients: ['Pomme de cajou', 'Eau de coco', 'Citron vert'],
    image: '/products/caju.jpg',
    category: 'Tropical',
    featured: false,
  },
  // Cap-Vert
  {
    id: 'cv-1',
    name: 'Grogue de Cana',
    country: 'Cap-Vert',
    countryFlag: '🇨🇻',
    region: 'Santo Antão',
    price: 4.80,
    description: 'Jus de canne à sucre frais de Santo Antão, tradition capverdienne pure.',
    ingredients: ['Canne à sucre', 'Citron vert', 'Gingembre'],
    image: '/products/cana.jpg',
    category: 'Tradition',
    featured: true,
  },
  // Angola
  {
    id: 'ao-1',
    name: 'Múcua Fresca',
    country: 'Angola',
    countryFlag: '🇦🇴',
    region: 'Huíla',
    price: 5.50,
    description: 'Le fruit du baobab angolais, riche en calcium et en saveurs ancestrales.',
    ingredients: ['Fruit de baobab (múcua)', 'Eau', 'Sucre de canne'],
    image: '/products/mucua.jpg',
    category: 'Superaliments',
    featured: true,
  },
  // Mozambique
  {
    id: 'mz-1',
    name: 'Suco de Tangerina',
    country: 'Mozambique',
    countryFlag: '🇲🇿',
    region: 'Maputo',
    price: 3.80,
    description: 'Tangerines sucrées de Maputo, un classique des marchés mozambicains.',
    ingredients: ['Tangerines', 'Eau de source', 'Menthe fraîche'],
    image: '/products/tangerina.jpg',
    category: 'Agrumes',
    featured: false,
  },
  // France
  {
    id: 'fr-1',
    name: 'Nectar de Mirabelle',
    country: 'France',
    countryFlag: '🇫🇷',
    region: 'Lorraine',
    price: 4.50,
    description: 'La mirabelle de Lorraine, joyau doré de la région, en nectar onctueux.',
    ingredients: ['Mirabelles de Lorraine', 'Eau de source', 'Sucre'],
    image: '/products/mirabelle.jpg',
    category: 'Tradition',
    featured: false,
  },
  // Espagne
  {
    id: 'es-1',
    name: 'Zumo de Granada',
    country: 'Espagne',
    countryFlag: '🇪🇸',
    region: 'Andalousie',
    price: 4.90,
    description: 'Grenades juteuses d\'Andalousie, pressées pour un jus rubis antioxydant.',
    ingredients: ['Grenades', 'Eau minérale', 'Fleur d\'oranger'],
    image: '/products/granada.jpg',
    category: 'Superaliments',
    featured: true,
  },
  // Italie
  {
    id: 'it-1',
    name: 'Succo di Limone di Amalfi',
    country: 'Italie',
    countryFlag: '🇮🇹',
    region: 'Côte Amalfitaine',
    price: 4.30,
    description: 'Citrons de la côte amalfitaine, transformés en limonade artisanale.',
    ingredients: ['Citrons d\'Amalfi', 'Eau pétillante', 'Miel d\'acacia'],
    image: '/products/limone.jpg',
    category: 'Agrumes',
    featured: false,
  },
  // Maroc
  {
    id: 'ma-1',
    name: 'Jus d\'Orange de Marrakech',
    country: 'Maroc',
    countryFlag: '🇲🇦',
    region: 'Marrakech',
    price: 3.50,
    description: 'Les célèbres oranges de la place Jemaa el-Fna, fraîchement pressées.',
    ingredients: ['Oranges marocaines', 'Eau de fleur d\'oranger'],
    image: '/products/orange-maroc.jpg',
    category: 'Agrumes',
    featured: true,
  },
  // Inde
  {
    id: 'in-1',
    name: 'Aam Panna',
    country: 'Inde',
    countryFlag: '🇮🇳',
    region: 'Rajasthan',
    price: 4.70,
    description: 'Boisson traditionnelle à la mangue verte du Rajasthan, épicée et rafraîchissante.',
    ingredients: ['Mangue verte', 'Cumin', 'Menthe', 'Sel noir'],
    image: '/products/aam-panna.jpg',
    category: 'Tradition',
    featured: false,
  },
  // Mexique
  {
    id: 'mx-1',
    name: 'Agua de Jamaica',
    country: 'Mexique',
    countryFlag: '🇲🇽',
    region: 'Oaxaca',
    price: 4.00,
    description: 'Infusion d\'hibiscus glacée, boisson emblématique des rues mexicaines.',
    ingredients: ['Fleurs d\'hibiscus', 'Cannelle', 'Sucre de canne', 'Citron vert'],
    image: '/products/jamaica.jpg',
    category: 'Tradition',
    featured: true,
  },
  // Thaïlande
  {
    id: 'th-1',
    name: 'Nam Ma Muang',
    country: 'Thaïlande',
    countryFlag: '🇹🇭',
    region: 'Chiang Mai',
    price: 4.60,
    description: 'Smoothie de mangue thaïlandaise avec lait de coco, douceur tropicale.',
    ingredients: ['Mangue Nam Dok Mai', 'Lait de coco', 'Sucre de palme'],
    image: '/products/mango-thai.jpg',
    category: 'Tropical',
    featured: false,
  },
  // Japon
  {
    id: 'jp-1',
    name: 'Yuzu Sparkling',
    country: 'Japon',
    countryFlag: '🇯🇵',
    region: 'Kōchi',
    price: 5.20,
    description: 'Agrume yuzu de Kōchi en version pétillante, délicat et parfumé.',
    ingredients: ['Yuzu', 'Eau gazeuse', 'Miel japonais'],
    image: '/products/yuzu.jpg',
    category: 'Agrumes',
    featured: true,
  },
];

export const countries = Array.from(new Set(products.map(p => p.country)));
export const categories = Array.from(new Set(products.map(p => p.category)));
export const featuredProducts = products.filter(p => p.featured);
