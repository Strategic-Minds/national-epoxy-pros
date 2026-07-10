import { NextResponse } from 'next/server';
const PIN = process.env.ADMIN_PIN || '12345';
const DEMO_LEADS = [
  { id:'QR-2026-0001', name:'Jason M.', email:'jason@example.com', phone:'(480) 555-0101', projectType:'Garage Floor', squareFeet:'600', floorSystem:'Decorative Flake', city:'Phoenix', state:'AZ', status:'New', submittedAt:new Date().toISOString() },
  { id:'QR-2026-0002', name:'Sarah T.', email:'sarah@example.com', phone:'(615) 555-0202', projectType:'Commercial Space', squareFeet:'2400', floorSystem:'Metallic Epoxy', city:'Nashville', state:'TN', status:'Reviewing', submittedAt:new Date(Date.now()-86400000).toISOString() },
  { id:'QR-2026-0003', name:'Mike R.', email:'mike@example.com', phone:'(407) 555-0303', projectType:'Patio/Outdoor', squareFeet:'400', floorSystem:'Solid Color', city:'Orlando', state:'FL', status:'Contacted', submittedAt:new Date(Date.now()-172800000).toISOString() },
  { id:'QR-2026-0004', name:'Linda K.', email:'linda@example.com', phone:'(972) 555-0404', projectType:'Basement', squareFeet:'1200', floorSystem:'Quartz Flooring', city:'Dallas', state:'TX', status:'Won', submittedAt:new Date(Date.now()-259200000).toISOString() },
];
export async function GET(req: Request) {
  const pin = req.headers.get('x-admin-pin');
  if (pin !== PIN) return NextResponse.json({ error:'Unauthorized' }, { status:401 });
  return NextResponse.json({ leads: DEMO_LEADS });
}
