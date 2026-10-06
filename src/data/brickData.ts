import heroStockyard from '../assets/images/hero_bricks_stockyard_1791308694637.jpg';
import masonLaying from '../assets/images/mason_laying_brick_wall_1791308708725.jpg';
import kilnFactory from '../assets/images/traditional_brick_kiln_1791308722068.jpg';
import redClayBricks from '../assets/images/red_clay_bricks_1791308735723.jpg';
import flyAshBricks from '../assets/images/fly_ash_bricks_1791308747232.jpg';
import hollowBricks from '../assets/images/hollow_clay_bricks_1791308759862.jpg';
import interlockingBricks from '../assets/images/interlocking_bricks_1791308774835.jpg';
import brickWallBackdrop from '../assets/images/brick_wall_backdrop_1791308787551.jpg';
import avatarRamesh from '../assets/images/avatar_ramesh_kumar_1791308811985.jpg';
import galleryBuilding from '../assets/images/gallery_brick_building_1791308825798.jpg';
import galleryWorkers from '../assets/images/gallery_construction_workers_1791308838267.jpg';
import galleryStackYard from '../assets/images/gallery_brick_stack_yard_1791308851554.jpg';

export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  image: string;
  pricePerUnit: string;
  compressiveStrength: string;
  dimensions: string;
  weight: string;
  waterAbsorption: string;
  bestFor: string;
  description: string;
}

export const PRODUCTS: ProductItem[] = [
  {
    id: 'red-clay-bricks',
    name: 'Red Clay Bricks',
    tagline: 'Strong | Durable | Traditional',
    image: redClayBricks,
    pricePerUnit: '₹8.50 / brick',
    compressiveStrength: '3.5 - 7.5 N/mm²',
    dimensions: '230 x 110 x 70 mm (9" x 4" x 3")',
    weight: '3.2 kg',
    waterAbsorption: '< 15%',
    bestFor: 'Load-bearing walls, foundations, residential villas, and exterior brickwork.',
    description: 'Fired in traditional kilns with natural riverbed clay, our classic red clay bricks deliver unmatched thermal insulation, age-tested structural integrity, and timeless architectural appeal.'
  },
  {
    id: 'fly-ash-bricks',
    name: 'Fly Ash Bricks',
    tagline: 'Lightweight | Eco-Friendly',
    image: flyAshBricks,
    pricePerUnit: '₹6.20 / brick',
    compressiveStrength: '7.5 - 10.0 N/mm²',
    dimensions: '230 x 110 x 75 mm',
    weight: '2.6 kg',
    waterAbsorption: '< 12%',
    bestFor: 'Multi-story apartments, commercial complexes, and green-certified buildings.',
    description: 'Manufactured by hydraulically compressing class-F fly ash, cement, and sand. Offers uniform edges, smooth surface finish, reduced mortar usage, and zero greenhouse emissions during production.'
  },
  {
    id: 'hollow-bricks',
    name: 'Hollow Bricks',
    tagline: 'Better Insulation | Less Weight',
    image: hollowBricks,
    pricePerUnit: '₹14.00 / block',
    compressiveStrength: '4.5 - 6.0 N/mm²',
    dimensions: '300 x 200 x 150 mm',
    weight: '7.8 kg',
    waterAbsorption: '< 10%',
    bestFor: 'Partition walls, acoustic dampening, and energy-efficient cooling structures.',
    description: 'Designed with engineered vertical cavities that trap dead air, offering superior heat reduction (up to 4°C lower indoor temperatures) and significant dead-load reduction on high-rise beams.'
  },
  {
    id: 'special-bricks',
    name: 'Special Bricks',
    tagline: 'For Unique Construction Needs',
    image: interlockingBricks,
    pricePerUnit: '₹18.50 / unit',
    compressiveStrength: '12.0 - 15.0 N/mm²',
    dimensions: 'Custom interlocking profile',
    weight: '4.1 kg',
    waterAbsorption: '< 8%',
    bestFor: 'Exposed brick facades, heavy duty pathways, decorative arches, and mortarless walls.',
    description: 'Precision-pressed interlocking and shaped architectural units made for unique civil requirements, landscaping, structural arches, and modern exposed brick masonry without plaster.'
  }
];

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'ramesh-kumar',
    quote: 'We have been using Sri Venkateswara Bricks for our construction projects for the past 5 years. The quality and service are always excellent. Highly recommended!',
    name: 'Ramesh Kumar',
    role: 'Contractor, Madurai',
    avatar: avatarRamesh
  },
  {
    id: 'priya-soundar',
    quote: 'For our residential villa project in Dindigul, SVB delivered 85,000 red clay bricks with zero transit breakage. The uniformity and edge sharpness were remarkable.',
    name: 'S. Priya Soundararajan',
    role: 'Chief Architect, Chennai',
    avatar: avatarRamesh
  },
  {
    id: 'k-venkatesh',
    quote: 'Their fly ash bricks helped us pass IGBC Green Building standards with flying colors. Reliable dispatch timing even during peak monsoon demands.',
    name: 'K. Venkatesh',
    role: 'Project Manager, Jayam Builders',
    avatar: avatarRamesh
  }
];

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gallery-1',
    title: 'Outdoor Brick Yard Stacks',
    category: 'Manufacturing Stock',
    image: galleryStackYard
  },
  {
    id: 'gallery-2',
    title: 'Modern Two-Story Residential Villa',
    category: 'Residential Project',
    image: galleryBuilding
  },
  {
    id: 'gallery-3',
    title: 'Exposed Red Clay Brickwork',
    category: 'Exterior Facade',
    image: brickWallBackdrop
  },
  {
    id: 'gallery-4',
    title: 'On-Site Construction Masons',
    category: 'Commercial Site',
    image: galleryWorkers
  }
];

export const IMAGES = {
  heroStockyard,
  masonLaying,
  kilnFactory,
  redClayBricks,
  flyAshBricks,
  hollowBricks,
  interlockingBricks,
  brickWallBackdrop,
  avatarRamesh,
  galleryBuilding,
  galleryWorkers,
  galleryStackYard
};
