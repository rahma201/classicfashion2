import { useEffect } from "react";

const SITE_URL = "https://www.classicfashion.com";
const DEFAULT_OG_IMAGE = "/images/heroes/home-hero.png";

interface SeoOptions {
  title: string;
  description: string;
  path: string;
  jsonLd?: object | object[];
  noindex?: boolean;
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function useSeo({ title, description, path, jsonLd, noindex = false }: SeoOptions) {
  const jsonLdKey = jsonLd ? JSON.stringify(jsonLd) : "";

  useEffect(() => {
    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", `${SITE_URL}${path}`);
    upsertMeta("property", "og:image", `${SITE_URL}${DEFAULT_OG_IMAGE}`);
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${SITE_URL}${path}`);

    let script: HTMLScriptElement | null = null;
    if (jsonLdKey) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = jsonLdKey;
      document.head.appendChild(script);
    }

    return () => {
      script?.remove();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, path, jsonLdKey, noindex]);
}
