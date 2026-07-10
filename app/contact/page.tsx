'use client';
import { useState } from 'react';
export default function ContactPage() {
  const [sent,setSent]=useState(false);
  const [d,setD]=useState({name:'',email:'',phone:'',message:''});
  const up=(k:string,v:string)=>setD(x=>({...x,[k]:v}));
  const submit=async(e:React.FormEvent)=>{
    e.preventDefault();
    try{await fetch('/api/leads',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...d,source:'Contact Page'})})}catch{}
    setSent(true);
  };
  return (
    <main>
      <div style={{background:'#0A0A0A',padding:'56px 0'}}>
        <div className="container">
          <div className="section-label">Get In Touch</div>
          <h1 className="display-md" style={{color:'#fff'}}>CONTACT US</h1>
        </div>
      </div>
      <div className="container" style={{padding:'64px 24px',maxWidth:600}}>
        {sent ? (
          <div style={{textAlign:'center',padding:'40px 0'}}>
            <div style={{fontSize:48,marginBottom:16}}>✓</div>
            <h2 style={{fontFamily:'var(--font-display)',fontSize:32,marginBottom:8}}>MESSAGE RECEIVED</h2>
            <p style={{color:'#6B7280'}}>We will get back to you within 1 business day.</p>
          </div>
        ) : (
          <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:18}}>
            <div className="form-group"><label className="form-label">Name</label><input className="form-input" value={d.name} onChange={e=>up('name',e.target.value)} required/></div>
            <div className="form-group"><label className="form-label">Email</label><input className="form-input" type="email" value={d.email} onChange={e=>up('email',e.target.value)} required/></div>
            <div className="form-group"><label className="form-label">Phone</label><input className="form-input" type="tel" value={d.phone} onChange={e=>up('phone',e.target.value)}/></div>
            <div className="form-group"><label className="form-label">Message</label><textarea className="form-textarea" value={d.message} onChange={e=>up('message',e.target.value)} required style={{minHeight:120}}/></div>
            <button type="submit" className="btn-primary" style={{alignSelf:'flex-start',padding:'14px 32px'}}>Send Message →</button>
          </form>
        )}
      </div>
    </main>
  );
}
