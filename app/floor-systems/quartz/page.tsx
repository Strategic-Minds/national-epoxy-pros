import Link from 'next/link';
export default function FloorPage() {
  return (
    <main>
      <div style={{background:'#0A0A0A',padding:'56px 0'}}>
        <div className="container">
          <div className="section-label">Floor Systems</div>
          <h1 className="display-md" style={{color:'#fff'}}>QUARTZ</h1>
          <p style={{color:'#9CA3AF',marginTop:12,maxWidth:560,fontSize:15}}>
            Professional-grade Quartz system — full specification, competitive bid, certified installation.
          </p>
        </div>
      </div>
      <div className="container" style={{padding:'64px 24px',textAlign:'center'}}>
        <p style={{fontSize:16,color:'#6B7280',marginBottom:32}}>Full product specifications and case studies coming soon.</p>
        <Link href="/commercial" className="btn-primary">Request a Specification & Bid</Link>
      </div>
    </main>
  );
}
