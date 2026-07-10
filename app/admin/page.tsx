'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Lead { id:string; name:string; email:string; phone:string; projectType:string; squareFeet:string; floorSystem:string; city:string; state:string; status:string; submittedAt:string; }

export default function AdminPage() {
  const [pin, setPin] = useState('');
  const [authed, setAuthed] = useState(false);
  const [leads, setLeads] = useState<Lead[]>([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState<Lead|null>(null);
  const [loading, setLoading] = useState(false);

  async function login() {
    setLoading(true);
    const res = await fetch('/api/admin/leads', { headers:{'x-admin-pin':pin} });
    if (res.ok) { const d = await res.json(); setLeads(d.leads||[]); setAuthed(true); }
    else alert('Invalid PIN');
    setLoading(false);
  }

  const shown = leads.filter(l => {
    if (filter !== 'All' && l.status !== filter) return false;
    if (search && !`${l.name} ${l.email} ${l.phone} ${l.projectType}`.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const statusColors: Record<string,string> = { New:'badge-new', Reviewing:'badge-reviewing', Contacted:'badge-contacted', Won:'badge-won', Lost:'badge-lost' };

  if (!authed) return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'var(--gray-light)',padding:24}}>
      <div style={{background:'var(--white)',borderRadius:'var(--radius-lg)',boxShadow:'var(--shadow-md)',padding:48,maxWidth:400,width:'100%',textAlign:'center'}}>
        <img src="/logos/nep-logo-horizontal-black-gold-v1.svg" alt="NEP" style={{height:36,margin:'0 auto 24px'}} />
        <h1 style={{fontFamily:'Montserrat,sans-serif',fontWeight:900,fontSize:22,marginBottom:8}}>OPERATOR DASHBOARD</h1>
        <p style={{color:'var(--text-muted)',fontSize:14,marginBottom:24}}>Enter your admin PIN to access lead data</p>
        <div className="form-field"><input type="password" placeholder="Enter admin PIN" value={pin} onChange={e=>setPin(e.target.value)} onKeyDown={e=>e.key==='Enter'&&login()} style={{textAlign:'center',fontSize:20,letterSpacing:'0.2em'}} /></div>
        <button className="btn btn-gold" style={{width:'100%',justifyContent:'center',marginTop:8}} onClick={login} disabled={loading}>{loading?'CHECKING...':'ENTER DASHBOARD'}</button>
        <Link href="/" style={{display:'block',marginTop:16,fontSize:13,color:'var(--text-muted)'}}>← Back to Website</Link>
      </div>
    </div>
  );

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-logo"><img src="/logos/nep-logo-horizontal-black-gold-v1.svg" alt="NEP" /></div>
        {[['📊','Dashboard','#'],['👥','Leads','#'],['📋','Projects','#'],['📈','Analytics','#'],['⚙️','Settings','#']].map(([ic,lb,hr]) => (
          <div key={lb} className={`admin-nav-item${lb==='Leads'?' active':''}`}><span>{ic}</span><span>{lb}</span></div>
        ))}
      </aside>
      <main className="admin-main">
        <div className="admin-topbar">
          <h1>LEAD DASHBOARD</h1>
          <div style={{display:'flex',gap:12,alignItems:'center'}}>
            <span style={{fontSize:13,color:'var(--text-muted)'}}>Welcome back, Admin</span>
            <button className="btn btn-outline btn-sm" onClick={()=>setAuthed(false)}>LOG OUT</button>
          </div>
        </div>

        <div className="kpi-grid">
          {[
            ['New Leads', leads.filter(l=>l.status==='New').length],
            ['Total Leads', leads.length],
            ['Today', leads.filter(l=>new Date(l.submittedAt).toDateString()===new Date().toDateString()).length],
            ['Won', leads.filter(l=>l.status==='Won').length],
          ].map(([label,val]) => (
            <div key={label} className="kpi-card"><div className="kpi-label">{label}</div><div className="kpi-value">{val}</div></div>
          ))}
        </div>

        <div className="leads-table">
          <div className="table-header">
            <h3>QUOTE REQUESTS</h3>
            <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
              <input className="search-input" placeholder="Search leads..." value={search} onChange={e=>setSearch(e.target.value)} />
              <select className="search-input" style={{width:'auto'}} value={filter} onChange={e=>setFilter(e.target.value)}>
                {['All','New','Reviewing','Contacted','Qualified','Won','Lost'].map(s=><option key={s}>{s}</option>)}
              </select>
            </div>
          </div>
          <div style={{overflowX:'auto'}}>
            <table>
              <thead><tr><th>ID</th><th>Name</th><th>Phone</th><th>Project</th><th>Sq Ft</th><th>System</th><th>Location</th><th>Status</th><th>Submitted</th></tr></thead>
              <tbody>
                {shown.map(l => (
                  <tr key={l.id} style={{cursor:'pointer'}} onClick={()=>setSelected(l)}>
                    <td style={{fontFamily:'Montserrat,sans-serif',fontWeight:700,fontSize:12,color:'var(--gold)'}}>{l.id}</td>
                    <td><div style={{fontWeight:700}}>{l.name}</div><div style={{fontSize:12,color:'var(--text-muted)'}}>{l.email}</div></td>
                    <td>{l.phone}</td>
                    <td>{l.projectType}</td>
                    <td>{l.squareFeet}</td>
                    <td>{l.floorSystem}</td>
                    <td>{l.city}, {l.state}</td>
                    <td><span className={`badge ${statusColors[l.status]||'badge-new'}`}>{l.status}</span></td>
                    <td style={{fontSize:12,color:'var(--text-muted)'}}>{new Date(l.submittedAt).toLocaleDateString()}</td>
                  </tr>
                ))}
                {shown.length === 0 && <tr><td colSpan={9} style={{textAlign:'center',padding:32,color:'var(--text-muted)'}}>No leads match your filter.</td></tr>}
              </tbody>
            </table>
          </div>
        </div>

        {selected && (
          <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.5)',zIndex:200,display:'flex',alignItems:'center',justifyContent:'center',padding:24}} onClick={()=>setSelected(null)}>
            <div style={{background:'var(--white)',borderRadius:'var(--radius-lg)',padding:40,maxWidth:600,width:'100%',maxHeight:'80vh',overflowY:'auto'}} onClick={e=>e.stopPropagation()}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:24}}>
                <h2 style={{fontFamily:'Montserrat,sans-serif',fontWeight:900,fontSize:18}}>LEAD DETAIL — {selected.id}</h2>
                <button onClick={()=>setSelected(null)} style={{background:'none',border:'none',fontSize:20,cursor:'pointer'}}>✕</button>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16}}>
                {Object.entries(selected).map(([k,v]) => (
                  <div key={k} style={{fontSize:14}}><span style={{color:'var(--text-muted)',fontSize:12,display:'block',textTransform:'uppercase',fontFamily:'Montserrat,sans-serif',fontWeight:700,letterSpacing:'0.06em',marginBottom:4}}>{k}</span><strong>{v as string}</strong></div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
