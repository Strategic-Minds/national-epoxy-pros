// ============================================
// NATIONAL EPOXY PROS — SITE DATA
// All business info, nav, CDN assets, page data
// ============================================

export const SITE = {
  businessName: 'National Epoxy Pros',
  phone: '(877) 958-6408',
  phoneHref: 'tel:+18779586408',
  whatsapp: '+15559730487',
  whatsappDisplay: '+1 555-973-0487',
  inboundEmail: 'leads@nationalepoxypros.com',
  supportEmail: 'support@nationalepoxypros.com',
  address: '2200 NW 32nd St #700, Pompano Beach, FL 33069',
  poweredBy: 'Xtreme Polishing Systems',
  poweredByRating: '4.4',
} as const;

export const CDN = {
  logoDark:
    'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/5e28d6604_logo-horizontal-dark.svg',
  logoLight:
    'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/2ed112497_logo-horizontal-light.svg',
  hero:
    'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/f50a9af63_hero-main.png',
  garage:
    'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/177dbda38_garage.png',
  metallic:
    'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/d2640781c_metallic.png',
  flake:
    'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/67ccbd034_flake.png',
  commercial:
    'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/95159c28b_commercial.png',
  polished:
    'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/33088d54e_polished.png',
  solidColor:
    'https://base44.app/api/apps/6a3a1cc6fda8cc665dd22ea4/files/mp/public/6a3a1cc6fda8cc665dd22ea4/a4fd70b36_solid-color.png',
} as const;

export const NAV_LINKS = [
  { label: 'Floor Systems', href: '/floor-systems' },
  { label: 'Design Center', href: '/design-center' },
  { label: 'Digital Bid', href: '/free-digital-bid' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const TRUST_BAR_ITEMS = [
  { icon: 'clock', text: '24-Hour Quote Guarantee' },
  { icon: 'pin', text: 'Over 70 Locations Nationwide' },
  { icon: 'shield', text: 'Licensed, Insured & Bonded' },
  { icon: 'star', text: '4.4-Star Rated by Homeowners' },
  { icon: 'award', text: 'Powered by Xtreme Polishing Systems' },
] as const;

export const FEATURES_STRIP = [
  { icon: 'warranty', text: '10-Year System Warranty' },
  { icon: 'nation', text: 'Nationwide Service' },
  { icon: 'star', text: '5-Star Rated' },
  { icon: 'lifetime', text: 'Lifetime Warranty' },
  { icon: 'shield', text: 'Licensed & Insured' },
  { icon: 'expert', text: 'Expert Installers' },
] as const;

export const HERO_BULLETS = [
  'Source-controlled systems & materials',
  'Trained professionals. Consistent results.',
  'Custom colors, flake blends & metallics',
  'Built for performance. Backed for life.',
] as const;

export const HERO_TRUST_BADGES = [
  { icon: 'warranty', text: '10+ Year Warranty' },
  { icon: 'lifetime', text: 'Lifetime Warranty' },
  { icon: 'shield', text: 'Licensed & Insured' },
  { icon: 'expert', text: 'Expert Installers' },
] as const;

export const FLOOR_SYSTEMS_CARDS = [
  {
    title: 'Garage Floors',
    image: CDN.garage,
    desc: 'Durable, stain-resistant coatings built for daily garage use.',
  },
  {
    title: 'Patio & Driveway',
    image: CDN.garage,
    desc: 'Weather-proof exterior coatings that stand up to the elements.',
  },
  {
    title: 'Metallic Epoxy',
    image: CDN.metallic,
    desc: 'Stunning metallic pigments for a one-of-a-kind premium finish.',
  },
  {
    title: 'Commercial Spaces',
    image: CDN.commercial,
    desc: 'High-traffic commercial systems engineered for performance.',
  },
] as const;

export const WHY_CHECKS = [
  'Source-controlled systems & materials',
  'Trained professionals. Consistent results.',
  'Custom colors, flake blends & metallics',
  'Fast installs with minimal downtime',
  'Built for performance. Backed for life.',
] as const;

export const REVIEWS = [
  {
    name: 'Jason M.',
    city: 'Phoenix, AZ',
    initials: 'JM',
    text: 'The team was incredible from start to finish. Our garage looks better than we imagined!',
  },
  {
    name: 'Sarah T.',
    city: 'Nashville, TN',
    initials: 'ST',
    text: 'Fast install, flawless finish, and super professional. Highly recommend!',
  },
  {
    name: 'Mike R.',
    city: 'Orlando, FL',
    initials: 'MR',
    text: 'Best decision we made for our shop. Tough, easy to clean, and looks amazing.',
  },
] as const;

export const FOOTER_QUICK_LINKS = [
  { label: 'Floor Systems', href: '/floor-systems' },
  { label: 'Design Center', href: '/design-center' },
  { label: 'Digital Bid', href: '/free-digital-bid' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const FOOTER_SERVICES = [
  { label: 'Flake Systems', href: '/floor-systems' },
  { label: 'Metallic Epoxy', href: '/floor-systems' },
  { label: 'Polished Concrete', href: '/floor-systems' },
  { label: 'Solid Color Epoxy', href: '/floor-systems' },
  { label: 'Exterior Patio Coating', href: '/floor-systems' },
  { label: 'Exterior Driveway Coating', href: '/floor-systems' },
] as const;

export const PROJECT_TYPES = [
  'Garage Floor',
  'Patio & Driveway',
  'Metallic Epoxy',
  'Commercial Space',
  'Polished Concrete',
  'Solid Color Epoxy',
  'Other',
] as const;
