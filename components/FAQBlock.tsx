export default function FAQBlock({items}:{items:{q:string;a:string}[]}){
  return (
    <div className="faq-list">
      {items.map((faq) => (
        <details key={faq.q}>
          <summary>{faq.q}</summary>
          <p>{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
