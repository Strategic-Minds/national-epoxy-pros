import { faqs } from '@/lib/site';
export default function Page(){
  return (
    <main className="section legal" style={{maxWidth:800,margin:'0 auto',padding:'4rem 2rem'}}>
      <h1 style={{color:'#fff',fontWeight:900,marginBottom:'2rem'}}>Frequently Asked Questions</h1>
      {faqs.map((faq)=>(
        <details className="reference-box" key={faq.q} style={{marginBottom:'1rem',border:'1px solid #333',borderRadius:8,padding:'1rem 1.5rem',background:'#111'}}>
          <summary style={{color:'#D4A017',fontWeight:700,cursor:'pointer'}}>{faq.q}</summary>
          <p style={{color:'#aaa',marginTop:'.75rem'}}>{faq.a}</p>
        </details>
      ))}
    </main>
  );
}
