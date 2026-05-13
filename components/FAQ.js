import { faqs } from './data';

export default function FAQ() {
  return (
    <section className="section faq-section" id="faq">
      <div className="section-heading">
        <span className="eyebrow dark">Questions</span>
        <h2>What business owners usually want to know first.</h2>
      </div>
      <div className="faq-grid">
        {faqs.map(([q, a]) => (
          <article key={q}>
            <h3>{q}</h3>
            <p>{a}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
