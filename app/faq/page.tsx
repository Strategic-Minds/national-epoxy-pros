import { faqs } from '@/lib/site';
export default function Page(){return <main className="section legal"><h1>FAQ</h1>{faqs.map(([q,a])=><details className="reference-box" key={q}><summary>{q}</summary><p>{a}</p></details>)}</main>}
