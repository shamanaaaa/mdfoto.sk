import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  bgColor?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageHeader({
  eyebrow,
  title,
  description,
  bgColor = "bg-cream-200",
  breadcrumbs,
}: PageHeaderProps) {
  return (
    <section className={`${bgColor} pt-32 pb-14 md:pt-36 md:pb-16`}>
      <div className="container-narrow text-center">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center justify-center gap-1.5 text-xs text-charcoal-500">
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  {i > 0 && <span aria-hidden>/</span>}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-charcoal-800 transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-charcoal-700">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
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
