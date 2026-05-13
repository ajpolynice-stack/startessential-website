import { ghlBookingUrl, ghlFormUrl } from './data';

export default function LeadCapture({ compact = false }) {
  return (
    <section className={compact ? 'audit compact-audit section-dark' : 'audit section-dark'} id="audit">
      <div>
        <span className="eyebrow">Next step</span>
        <h2>Book a free systems audit.</h2>
        <p>We’ll look at where leads are being lost, what should be automated first, and what system would make sense for your business.</p>
        <div className="audit-points">
          <span>No pressure</span>
          <span>Clear next steps</span>
          <span>Built around your workflow</span>
        </div>
      </div>
      {ghlFormUrl ? (
        <iframe className="ghl-frame" src={ghlFormUrl} title="Essential Solutions audit form" />
      ) : (
        <div className="audit-card">
          <h3>GoHighLevel form goes here</h3>
          <p>This block is ready for your GoHighLevel form or calendar embed. Once you create it, add the URL in Vercel as <b>NEXT_PUBLIC_GHL_FORM_URL</b>.</p>
          <a className="btn btn-gold" href={ghlBookingUrl}>Book Demo</a>
        </div>
      )}
    </section>
  );
}
