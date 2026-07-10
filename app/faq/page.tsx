import { faqs } from '@/lib/site';

export default function Page() {
  return (
    <main className="section legal">
      <span className="eyebrow">FAQ</span>
      <h1>Frequently Asked Questions</h1>
      <div className="grid-3">
        {faqs.map(([question, answer]) => (
          <details className="process-card" key={question}>
            <summary className="card-body"><strong>{question}</strong></summary>
            <p className="card-body muted">{answer}</p>
          </details>
        ))}
      </div>
    </main>
  );
}
