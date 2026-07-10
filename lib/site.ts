const driveImage = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w2000`;

export const editableImages = {
  digitalBid: driveImage('1b8edE8Ni0krlHJKCTx0qOS14w2kL9glp'),
  metallic: driveImage('1MfoK8N6UQ0A0Idm4YgPoBv5WQu575-7U'),
  floorSystems: driveImage('1X78mojZudLwnQ2n0kQJgovMAVm8GbgwS'),
  flakeGarage: driveImage('197p3vH8PLiSKIbxVmVu35wLR8VdrDJFb'),
  home: driveImage('1HtDUQPFJ0FeDJbknu3h-Veql-8i8orLz'),
  contact: driveImage('14vX4fxT-V10GsD4EQ2KQv4OfZo12s9iT'),
  designCenter: driveImage('1ORwFS9AOgAsBwV35Je8ln4GIgc7Vm3yQ'),
  exterior: driveImage('1OuanuWGC6rj3dO2qNWwVGJz8gtEU92Sq'),
};

export const site = {
  name: 'National Epoxy Pros',
  domain: 'nationalepoxypros.com',
  phone: '(877) 958-6408',
  phoneHref: 'tel:+18779586408',
  whatsapp: '+15559730487',
  sms: '+15616780328',
  address: '2200 NW 32nd St #700, Pompano Beach, FL 33069',
  supportEmail: 'support@nationalepoxypros.com',
  leadsEmail: 'leads@nationalepoxypros.com',
  xpsRating: '4.4-Star XPS Supplier Rating',
  tagline: 'Premium epoxy, flake, metallic, quartz, exterior coating, and polished concrete systems built to perform.',
  hero: editableImages.home,
  logo: '/logos/nep-logo-horizontal-black-gold-v1.svg',
};

export const trustItems = [
  ['☆', '4.4-Star XPS Supplier Rating'],
  ['📍', 'Nationwide Project Routing'],
  ['▤', 'Editable Color Charts'],
  ['✓', 'Real Digital Bid Intake'],
  ['🛡', 'Project Review First'],
];

export const nav = [
  ['Home', '/'],
  ['Floor Systems', '/floor-systems'],
  ['Digital Bid', '/free-digital-bid'],
  ['Design Center', '/design-center'],
  ['Color Charts', '/color-charts'],
  ['Garage Flake', '/flake-garage-floors'],
  ['Metallic', '/metallic-epoxy'],
  ['Exterior', '/exterior-coatings'],
  ['Contact', '/contact'],
];

export const pages = {
  home: {
    route: '/',
    eyebrow: 'National Epoxy Pros',
    title: 'Premium Epoxy Floors Built The Right Way.',
    copy: 'A real working website for garage flake floors, metallic epoxy, exterior coatings, color charts, and digital bid requests.',
    image: editableImages.home,
  },
  bid: {
    route: '/free-digital-bid',
    eyebrow: 'Free Digital Bid',
    title: 'Send Your Project Details For Review.',
    copy: 'Submit contact details, location, project type, measurements, floor condition, photos, inspiration images, and project notes.',
    image: editableImages.digitalBid,
  },
  design: {
    route: '/design-center',
    eyebrow: 'Design Center',
    title: 'Explore Color Charts And Finish Directions.',
    copy: 'Review flake, metallic, quartz, solid base, glitter, and concrete dye or stain collections from one editable source.',
    image: editableImages.designCenter,
  },
  systems: {
    route: '/floor-systems',
    eyebrow: 'Floor Systems',
    title: 'Choose The Floor System That Fits The Job.',
    copy: 'Compare flake garage floors, metallic epoxy, polished concrete, exterior coatings, quartz, solid epoxy, and decorative concrete systems.',
    image: editableImages.floorSystems,
  },
  metallic: {
    route: '/metallic-epoxy',
    eyebrow: 'Metallic Epoxy Floors',
    title: 'Metallic Epoxy Floors With Premium Visual Depth.',
    copy: 'A statement interior finish for showrooms, salons, retail spaces, lounges, and design-led homes where movement and finish matter.',
    image: editableImages.metallic,
  },
  garage: {
    route: '/flake-garage-floors',
    eyebrow: 'Flake Garage Floors',
    title: 'Flake Garage Floors Built To Impress.',
    copy: 'A garage coating path for homeowners, car collectors, cabinets, storage, and high-impact garage transformations.',
    image: editableImages.flakeGarage,
  },
  polished: {
    route: '/polished-concrete',
    eyebrow: 'Polished Concrete',
    title: 'Modern Polished Concrete For Commercial Spaces.',
    copy: 'Clean slab finishes for retail, lobbies, showrooms, warehouses, and polished commercial environments.',
    image: editableImages.floorSystems,
  },
  exterior: {
    route: '/exterior-coatings',
    eyebrow: 'Exterior Patio And Driveway Coatings',
    title: 'Exterior Coatings Built For Outdoor Review.',
    copy: 'Exterior projects require surface, UV, traction, weather, and moisture review before final system selection.',
    image: editableImages.exterior,
  },
  contact: {
    route: '/contact',
    eyebrow: 'Contact National Epoxy Pros',
    title: 'Start Your Project Or Ask A Question.',
    copy: 'Call, message, or submit the digital bid form. Routing starts with accurate project details.',
    image: editableImages.contact,
  },
};

export const services = [
  { title: 'Flake Garage Floors', href: '/flake-garage-floors', image: editableImages.flakeGarage, copy: 'Garage floor systems with color, texture, durability, and strong visual impact.' },
  { title: 'Metallic Epoxy', href: '/metallic-epoxy', image: editableImages.metallic, copy: 'Statement floors for showrooms, interiors, lounges, salons, and luxury spaces.' },
  { title: 'Floor Systems', href: '/floor-systems', image: editableImages.floorSystems, copy: 'Compare resinous floor systems before choosing a direction.' },
  { title: 'Exterior Coatings', href: '/exterior-coatings', image: editableImages.exterior, copy: 'Patio and driveway coating review with traction, UV, and exposure considerations.' },
  { title: 'Color Charts', href: '/color-charts', image: editableImages.designCenter, copy: 'Editable chart assets for flake, metallic, quartz, solid base, glitter, and stain systems.' },
  { title: 'Digital Bid', href: '/free-digital-bid', image: editableImages.digitalBid, copy: 'Step-by-step intake for project photos, details, measurements, finish selections, and review.' },
];

export const gallery = [
  { src: editableImages.home, title: 'National Epoxy Pros visual direction', tag: 'Home' },
  { src: editableImages.digitalBid, title: 'Digital bid visual direction', tag: 'Digital Bid' },
  { src: editableImages.metallic, title: 'Metallic epoxy visual direction', tag: 'Metallic' },
  { src: editableImages.floorSystems, title: 'Floor systems visual direction', tag: 'Systems' },
  { src: editableImages.flakeGarage, title: 'Flake garage visual direction', tag: 'Garage' },
  { src: editableImages.designCenter, title: 'Design center visual direction', tag: 'Charts' },
  { src: editableImages.exterior, title: 'Exterior coatings visual direction', tag: 'Exterior' },
  { src: editableImages.contact, title: 'Contact visual direction', tag: 'Contact' },
];

export const chartAssets = [
  ['/color-charts/xps-top-flake-colors-approved.webp', 'Top Flake Colors'],
  ['/color-charts/xps-top-metallic-colors-standardized.webp', 'Metallic Colors'],
  ['/color-charts/xps-top-quartz-colors-standardized.webp', 'Quartz Colors'],
  ['/color-charts/xps-top-glitter-additive-colors.webp', 'Glitter Additives'],
  ['/color-charts/xps-solid-color-epoxy-base-coats.webp', 'Solid Epoxy Base Coats'],
  ['/color-charts/xps-concrete-dye-stain-colors.webp', 'Concrete Dye And Stain Colors'],
  ['/color-charts/nep-color-chart-top-flake-v1.webp', 'NEP Flake Chart'],
  ['/color-charts/nep-color-chart-metallic-v1.webp', 'NEP Metallic Chart'],
  ['/color-charts/nep-color-chart-quartz-v1.webp', 'NEP Quartz Chart'],
  ['/color-charts/nep-color-chart-glitter-v1.webp', 'NEP Glitter Chart'],
];

export const faqs = [
  ['Can I get a real quote from photos?', 'Photos and measurements help prepare a bid request, but final price can depend on slab condition, prep, repairs, moisture, access, and approved scope.'],
  ['Are the images completed jobs?', 'Approved visuals are design direction and planning visuals unless separately verified as completed project photos.'],
  ['What does the digital bid collect?', 'Contact details, location, project type, square footage, floor condition, timeline, photo uploads, inspiration uploads, and consent.'],
  ['Can exterior coatings use the same system as garage floors?', 'Exterior systems require separate review for UV, exposure, moisture, traction, and surface condition.'],
];
