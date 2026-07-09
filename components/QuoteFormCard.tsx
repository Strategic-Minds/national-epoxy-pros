
'use client';
import { useState } from 'react';
export default function QuoteFormCard(){const [sent,setSent]=useState(false);return <div className="quote-card"><h3>Request a Free Bid</h3><form className="mini-form" onSubmit={(e)=>{e.preventDefault();setSent(true)}}><input required placeholder="Name"/><input required placeholder="Phone"/><input required type="email" placeholder="Email"/><select required><option value="">Project Type</option><option>Garage Floor</option><option>Metallic Epoxy</option><option>Commercial Floor</option><option>Exterior Coating</option></select><button className="btn primary" type="submit">Submit My Free Digital Bid</button>{sent&&<div className="success">Mock-safe success: request prepared for review.</div>}</form></div>}
