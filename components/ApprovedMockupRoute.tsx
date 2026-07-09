const approvedRouteMap = {
  digitalBid: {
    title: 'Digital Bid',
    route: '/digital-bid and /free-digital-bid',
    driveId: '1b8edE8Ni0krlHJKCTx0qOS14w2kL9glp',
  },
  metallic: {
    title: 'Metallic Epoxy',
    route: '/metallic-epoxy',
    driveId: '1MfoK8N6UQ0A0Idm4YgPoBv5WQu575-7U',
  },
  floorSystems: {
    title: 'Floor Systems',
    route: '/floor-systems',
    driveId: '1X78mojZudLwnQ2n0kQJgovMAVm8GbgwS',
  },
  flakeGarage: {
    title: 'Flake Garage Floors',
    route: '/flake-garage-floors',
    driveId: '197p3vH8PLiSKIbxVmVu35wLR8VdrDJFb',
  },
  home: {
    title: 'Home',
    route: '/',
    driveId: '1HtDUQPFJ0FeDJbknu3h-Veql-8i8orLz',
  },
  contact: {
    title: 'Contact',
    route: '/contact',
    driveId: '14vX4fxT-V10GsD4EQ2KQv4OfZo12s9iT',
  },
  designCenter: {
    title: 'Design Center / Color Charts',
    route: '/design-center and /color-charts',
    driveId: '1ORwFS9AOgAsBwV35Je8ln4GIgc7Vm3yQ',
  },
  exterior: {
    title: 'Exterior Coatings',
    route: '/exterior-coatings',
    driveId: '1OuanuWGC6rj3dO2qNWwVGJz8gtEU92Sq',
  },
} as const;

type ApprovedRouteKey = keyof typeof approvedRouteMap;

function driveImageUrl(id: string) {
  return `https://drive.google.com/thumbnail?id=${id}&sz=w2000`;
}

export default function ApprovedMockupRoute({ page }: { page: ApprovedRouteKey }) {
  const item = approvedRouteMap[page];

  return (
    <main style={{ margin: 0, minHeight: '100vh', background: '#050505' }}>
      <h1 className="sr-only">National Epoxy Pros approved static preview: {item.title}</h1>
      <p className="sr-only">
        Safe-mode visual preview route for {item.route}. Production is locked. Forms, WhatsApp, SMS, Supabase, email,
        payments, and live customer messaging are not active from this static preview.
      </p>
      <img
        src={driveImageUrl(item.driveId)}
        alt={`National Epoxy Pros approved mockup for ${item.title}`}
        style={{ display: 'block', width: '100%', maxWidth: 1600, height: 'auto', margin: '0 auto', background: '#050505' }}
      />
    </main>
  );
}
