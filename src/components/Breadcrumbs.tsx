import { Fragment } from "react";
import { Link } from "wouter";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export interface Crumb {
  label: string;
  href?: string;
}

const SITE_URL = "https://www.classicfashion.com";

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${SITE_URL}${c.href ?? ""}`,
    })),
  };
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const allItems: Crumb[] = [{ label: "Home", href: "/" }, ...items];

  return (
    <div className="bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6 py-3">
        <Breadcrumb>
          <BreadcrumbList>
            {allItems.map((item, i) => (
              <Fragment key={item.label}>
                {i > 0 && <BreadcrumbSeparator />}
                <BreadcrumbItem>
                  {item.href && i < allItems.length - 1 ? (
                    <BreadcrumbLink asChild>
                      <Link href={item.href}>{item.label}</Link>
                    </BreadcrumbLink>
                  ) : (
                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                  )}
                </BreadcrumbItem>
              </Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}
