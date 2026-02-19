interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  bgColor?: string;
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  bgColor = "bg-cream-200",
}: PageHeaderProps) {
  return (
    <section className={`${bgColor} pt-32 pb-14 md:pt-36 md:pb-16`}>
      <div className="container-narrow text-center">
        {eyebrow && <p className="section-label mb-3">{eyebrow}</p>}
        <h1 className="section-heading">{title}</h1>
        {description && (
          <p className="mt-5 text-charcoal-600 leading-relaxed max-w-xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
