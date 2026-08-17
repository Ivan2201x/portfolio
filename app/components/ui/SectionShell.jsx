export default function SectionShell({ id, children, variant = 'default', className = '' }) {
  return (
    <section id={id} className={`section-shell section-shell--${variant} ${className}`.trim()}>
      <div className="section-container">{children}</div>
    </section>
  );
}
