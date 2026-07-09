const approvedPages = [
  {
    label: 'A',
    title: 'Digital Bid',
    route: '/digital-bid and /free-digital-bid',
    fileName: 'ChatGPT Image Jul 9, 2026, 03_42_25 PM (8).png',
    driveId: '1b8edE8Ni0krlHJKCTx0qOS14w2kL9glp',
  },
  {
    label: 'B',
    title: 'Metallic Epoxy',
    route: '/metallic-epoxy',
    fileName: 'ChatGPT Image Jul 9, 2026, 03_42_24 PM (5).png',
    driveId: '1MfoK8N6UQ0A0Idm4YgPoBv5WQu575-7U',
  },
  {
    label: 'C',
    title: 'Floor Systems',
    route: '/floor-systems',
    fileName: 'ChatGPT Image Jul 9, 2026, 03_42_25 PM (7).png',
    driveId: '1X78mojZudLwnQ2n0kQJgovMAVm8GbgwS',
  },
  {
    label: 'D',
    title: 'Flake Garage Floors',
    route: '/flake-garage-floors',
    fileName: 'ChatGPT Image Jul 9, 2026, 03_42_25 PM (6).png',
    driveId: '197p3vH8PLiSKIbxVmVu35wLR8VdrDJFb',
  },
  {
    label: 'E',
    title: 'Home',
    route: '/',
    fileName: 'ChatGPT Image Jul 9, 2026, 03_42_24 PM (2).png',
    driveId: '1HtDUQPFJ0FeDJbknu3h-Veql-8i8orLz',
  },
  {
    label: 'F',
    title: 'Contact',
    route: '/contact',
    fileName: 'ChatGPT Image Jul 9, 2026, 03_42_23 PM (1).png',
    driveId: '14vX4fxT-V10GsD4EQ2KQv4OfZo12s9iT',
  },
  {
    label: 'G',
    title: 'Design Center / Color Charts',
    route: '/design-center and /color-charts',
    fileName: 'ChatGPT Image Jul 9, 2026, 03_42_24 PM (3).png',
    driveId: '1ORwFS9AOgAsBwV35Je8ln4GIgc7Vm3yQ',
  },
  {
    label: 'H',
    title: 'Exterior Coatings',
    route: '/exterior-coatings',
    fileName: 'ChatGPT Image Jul 9, 2026, 03_42_24 PM (4).png',
    driveId: '1OuanuWGC6rj3dO2qNWwVGJz8gtEU92Sq',
  },
];

const businessData = [
  ['Website', 'nationalepoxypros.com'],
  ['Corporate Address', '2200 NW 32nd St #700, Pompano Beach, FL 33069'],
  ['Corporate Phone', '(877) 958-6408'],
  ['WhatsApp', '+15559730487'],
  ['SMS', '+15616780328'],
  ['Inbound Leads', 'leads@nationalepoxypros.com'],
  ['Outbound / Support', 'support@nationalepoxypros.com'],
  ['XPS Rating', '4.4-star, not 5-star'],
];

function driveImageUrl(id: string) {
  return `https://drive.google.com/thumbnail?id=${id}&sz=w1600`;
}

export default function ApprovedWebsiteSystemV1Page() {
  return (
    <main style={{ background: '#080808', color: '#fff', minHeight: '100vh', fontFamily: 'Inter, Arial, sans-serif' }}>
      <section style={{ padding: '40px 20px 24px', borderBottom: '1px solid rgba(212,160,23,.35)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <p style={{ color: '#D4A017', letterSpacing: '.18em', textTransform: 'uppercase', fontWeight: 800, margin: 0 }}>
            Approved Website System v1
          </p>
          <h1 style={{ fontSize: 'clamp(42px, 7vw, 92px)', lineHeight: '.92', margin: '16px 0', textTransform: 'uppercase', fontWeight: 950 }}>
            National Epoxy Pros<br />Visual Preview Board
          </h1>
          <p style={{ maxWidth: 920, color: '#d7d7d7', fontSize: 20, lineHeight: 1.55 }}>
            This branch-only preview displays Jeremy-approved website mockups exactly as the visual source of truth. Production is locked. Forms, WhatsApp, SMS, Supabase, and backend automations remain safe-mode only.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 24 }}>
            <a href="https://nationalepoxypros.com" style={buttonStyle}>Current Production</a>
            <a href="https://drive.google.com/drive/folders/1Xvq8nbS8M_jEWJB4r_I6Fj0_DLSgHZzr" style={ghostButtonStyle}>Drive Image Folder</a>
          </div>
        </div>
      </section>

      <section style={{ padding: '28px 20px', background: '#111' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 12 }}>
          {businessData.map(([label, value]) => (
            <div key={label} style={{ border: '1px solid rgba(212,160,23,.25)', borderRadius: 14, padding: 16, background: '#0d0d0d' }}>
              <div style={{ color: '#D4A017', fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', fontWeight: 800 }}>{label}</div>
              <div style={{ marginTop: 6, color: '#f2f2f2', fontWeight: 700 }}>{value}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '36px 20px 80px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gap: 34 }}>
          {approvedPages.map((page) => (
            <article key={page.label} style={{ border: '1px solid rgba(212,160,23,.35)', borderRadius: 22, overflow: 'hidden', background: '#111', boxShadow: '0 20px 60px rgba(0,0,0,.45)' }}>
              <header style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 16, alignItems: 'center', padding: '18px 20px', borderBottom: '1px solid rgba(212,160,23,.28)' }}>
                <div>
                  <div style={{ color: '#D4A017', fontWeight: 950, letterSpacing: '.18em' }}>REFERENCE {page.label}</div>
                  <h2 style={{ margin: '4px 0 0', fontSize: 30, textTransform: 'uppercase' }}>{page.title}</h2>
                </div>
                <div style={{ color: '#fff', border: '1px solid rgba(255,255,255,.18)', borderRadius: 999, padding: '10px 14px', background: '#0a0a0a', fontWeight: 800 }}>
                  Route: {page.route}
                </div>
              </header>
              <div style={{ background: '#050505', padding: 18 }}>
                <img
                  src={driveImageUrl(page.driveId)}
                  alt={`${page.title} approved mockup for ${page.route}`}
                  style={{ display: 'block', width: '100%', height: 'auto', borderRadius: 14, border: '1px solid rgba(255,255,255,.08)' }}
                />
              </div>
              <footer style={{ padding: '14px 20px', color: '#bbb', fontSize: 13 }}>
                Source file: {page.fileName}
              </footer>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

const buttonStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #D4A017, #B8860B)',
  color: '#090909',
  borderRadius: 999,
  padding: '13px 20px',
  fontWeight: 950,
  textDecoration: 'none',
  textTransform: 'uppercase',
  letterSpacing: '.04em',
};

const ghostButtonStyle: React.CSSProperties = {
  ...buttonStyle,
  background: 'transparent',
  color: '#D4A017',
  border: '1px solid rgba(212,160,23,.75)',
};
