import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

type Country = {
  id: string;
  name: string;
  code: string;
  role: string;
  description: string;
  coordinates: [number, number]; // [longitude, latitude]
};

const globalPresenceCountries: Country[] = [
  {
    id: "jordan",
    name: "Jordan",
    code: "JOR",
    role: "HQ & Primary Manufacturing",
    description:
      "Classic Fashion’s core manufacturing base and operational headquarters.",
    coordinates: [36.2384, 30.5852],
  },
  {
    id: "usa",
    name: "USA",
    code: "USA",
    role: "Primary Export Market",
    description:
      "A key destination market for global apparel partners and fashion brands.",
    coordinates: [-98.5795, 39.8283],
  },
  {
    id: "egypt",
    name: "Egypt",
    code: "EGY",
    role: "Regional Partner",
    description:
      "Part of the wider MENA apparel and textile manufacturing network.",
    coordinates: [30.8025, 26.8206],
  },
  {
    id: "china",
    name: "China",
    code: "CHN",
    role: "Sourcing & Supply Chain",
    description:
      "Important sourcing and supply chain connection for apparel production.",
    coordinates: [104.1954, 35.8617],
  },
  {
    id: "india",
    name: "India",
    code: "IND",
    role: "Textile & Production Network",
    description:
      "A strategic textile and manufacturing connection within the global apparel ecosystem.",
    coordinates: [78.9629, 20.5937],
  },
  {
    id: "bangladesh",
    name: "Bangladesh",
    code: "BGD",
    role: "Production Network",
    description:
      "A key apparel manufacturing country within the global garment industry.",
    coordinates: [90.3563, 23.685],
  },
];

const jordan = globalPresenceCountries.find((country) => country.id === "jordan")!;

function createCurvedRoute(
  from: [number, number],
  to: [number, number],
  curveStrength = 1
): [number, number][] {
  const [startLng, startLat] = from;
  const [endLng, endLat] = to;

  const distanceLng = endLng - startLng;
  const distanceLat = endLat - startLat;

  const midLng = startLng + distanceLng * 0.5;
  const midLat = startLat + distanceLat * 0.5;

  const arcHeight = Math.min(
    28,
    Math.max(5, Math.abs(distanceLng) * 0.16)
  ) * curveStrength;

  const controlPoint: [number, number] = [
    midLng,
    midLat + arcHeight,
  ];

  const points: [number, number][] = [];
  const steps = 90;

  for (let i = 0; i <= steps; i += 1) {
    const t = i / steps;
    const oneMinusT = 1 - t;

    const lng =
      oneMinusT * oneMinusT * startLng +
      2 * oneMinusT * t * controlPoint[0] +
      t * t * endLng;

    const lat =
      oneMinusT * oneMinusT * startLat +
      2 * oneMinusT * t * controlPoint[1] +
      t * t * endLat;

    points.push([lng, lat]);
  }

  return points;
}

function popupHtml(country: Country) {
  return `
    <div class="cf-popup-card">
      <div class="cf-popup-code">${country.code}</div>
      <div class="cf-popup-title">${country.name}</div>
      <div class="cf-popup-role">${country.role}</div>
      <p class="cf-popup-description">${country.description}</p>
    </div>
  `;
}

export function GlobalPresenceMap() {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const popupRef = useRef<maplibregl.Popup | null>(null);
  const markersRef = useRef<Record<string, maplibregl.Marker>>({});
  const [activeCountryId, setActiveCountryId] = useState<string>("jordan");

  const destinationCountries = useMemo(
    () => globalPresenceCountries.filter((country) => country.id !== "jordan"),
    []
  );

  const routeGeoJson = useMemo(() => {
    return {
      type: "FeatureCollection",
      features: destinationCountries.map((country, index) => ({
        type: "Feature",
        properties: {
          id: `route-jordan-${country.id}`,
          from: "Jordan",
          to: country.name,
          index,
        },
        geometry: {
          type: "LineString",
          coordinates: createCurvedRoute(
            jordan.coordinates,
            country.coordinates,
            country.id === "egypt" ? 0.45 : 1
          ),
        },
      })),
    };
  }, [destinationCountries]);

  const flyToCountry = useCallback((country: Country) => {
    const map = mapRef.current;

    if (!map) return;

    map.flyTo({
      center: country.coordinates,
      zoom: country.id === "jordan" ? 4 : 3.15,
      duration: 1200,
      essential: true,
    });

    popupRef.current?.remove();

    const popup = new maplibregl.Popup({
      closeButton: false,
      closeOnClick: false,
      offset: 28,
      className: "cf-map-popup",
    })
      .setLngLat(country.coordinates)
      .setHTML(popupHtml(country))
      .addTo(map);

    popupRef.current = popup;
    setActiveCountryId(country.id);
  }, []);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const isMobile = window.innerWidth < 768;

    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
      center: isMobile ? [42, 24] : [35, 25],
      zoom: isMobile ? 0.95 : 1.35,
      minZoom: 0.8,
      maxZoom: 5,
      pitch: 0,
      bearing: 0,
      attributionControl: false,
      renderWorldCopies: false,
      interactive: true,
    });

    mapRef.current = map;

    map.dragRotate.disable();
    map.touchZoomRotate.disableRotation();
    map.scrollZoom.disable();

    map.addControl(
      new maplibregl.AttributionControl({
        compact: true,
      }),
      "bottom-right"
    );

    map.on("load", () => {
      map.addSource("classic-fashion-routes", {
        type: "geojson",
        data: routeGeoJson as any,
        lineMetrics: true,
      } as any);

      map.addLayer({
        id: "classic-fashion-routes-glow",
        type: "line",
        source: "classic-fashion-routes",
        layout: {
          "line-cap": "round",
          "line-join": "round",
        },
        paint: {
          "line-color": "#e55c44",
          "line-width": 4,
          "line-opacity": 0.18,
          "line-blur": 3,
        },
      } as any);

      map.addLayer({
        id: "classic-fashion-routes-line",
        type: "line",
        source: "classic-fashion-routes",
        layout: {
          "line-cap": "round",
          "line-join": "round",
        },
        paint: {
          "line-color": "#f7efe5",
          "line-width": 1.5,
          "line-opacity": 0.72,
          "line-dasharray": [1.2, 1.4],
        },
      } as any);

      globalPresenceCountries.forEach((country) => {
        const markerEl = document.createElement("button");
        markerEl.type = "button";
        markerEl.className = `cf-marker ${
          country.id === "jordan" ? "cf-marker-hq" : ""
        }`;
        markerEl.setAttribute(
          "aria-label",
          `${country.name}: ${country.role}`
        );

        markerEl.innerHTML = `
          <span class="cf-marker-pulse"></span>
          <span class="cf-marker-dot"></span>
          <span class="cf-marker-label">${country.code}</span>
        `;

        markerEl.addEventListener("click", (event) => {
          event.stopPropagation();
          flyToCountry(country);
        });

        markerEl.addEventListener("mouseenter", () => {
          popupRef.current?.remove();

          const popup = new maplibregl.Popup({
            closeButton: false,
            closeOnClick: false,
            offset: 28,
            className: "cf-map-popup",
          })
            .setLngLat(country.coordinates)
            .setHTML(popupHtml(country))
            .addTo(map);

          popupRef.current = popup;
          setActiveCountryId(country.id);
        });

        const marker = new maplibregl.Marker({
          element: markerEl,
          anchor: "center",
        })
          .setLngLat(country.coordinates)
          .addTo(map);

        markersRef.current[country.id] = marker;
      });

      const bounds = new maplibregl.LngLatBounds();

      globalPresenceCountries.forEach((country) => {
        bounds.extend(country.coordinates);
      });

      map.fitBounds(bounds, {
        padding: isMobile
          ? { top: 56, right: 32, bottom: 84, left: 32 }
          : { top: 80, right: 120, bottom: 110, left: 120 },
        maxZoom: isMobile ? 1.2 : 1.55,
        duration: 0,
      });

      setTimeout(() => {
        flyToCountry(jordan);
      }, 500);
    });

    return () => {
      popupRef.current?.remove();
      map.remove();
      mapRef.current = null;
      markersRef.current = {};
    };
  }, [flyToCountry, routeGeoJson]);

  return (
    <section className="relative overflow-hidden bg-[#eef7fb] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-[#e55c44]/20 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] text-[#e55c44] shadow-sm">
            Global Network
          </span>

          <h2 className="text-4xl font-black tracking-tight text-[#0f3340] sm:text-5xl">
            Global Presence
          </h2>

          <p className="mt-5 text-base leading-8 text-[#34515c] sm:text-lg">
            From Jordan to the world — supporting international fashion brands
            through manufacturing scale, sourcing strength, and regional
            expertise.
          </p>

          <p className="mt-4 text-sm leading-7 text-[#486571]">
            Classic Fashion connects Jordan-based apparel manufacturing with
            international markets and supply-chain networks across the USA,
            Egypt, China, India, and Bangladesh. This global presence supports
            high-volume garment production, sourcing, textile development, and
            delivery for international fashion brands.
          </p>
        </div>

        <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-3xl border border-white/10 bg-[#081925] shadow-2xl shadow-[#06202c]/20">
          <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(229,92,68,0.16),transparent_34%),radial-gradient(circle_at_78%_48%,rgba(32,172,170,0.14),transparent_28%)]" />

          <div
            ref={mapContainerRef}
            className="relative z-0 h-[340px] w-full sm:h-[460px] lg:h-[560px]"
            aria-label="Interactive dark world map showing Classic Fashion global presence from Jordan to USA, Egypt, China, India, and Bangladesh"
          />

          <div className="absolute bottom-5 left-5 z-20 flex max-w-[calc(100%-40px)] flex-wrap gap-2">
            {globalPresenceCountries.map((country) => (
              <button
                key={country.id}
                type="button"
                onClick={() => flyToCountry(country)}
                className={`group inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide shadow-lg backdrop-blur-md transition-all ${
                  activeCountryId === country.id
                    ? "border-[#e55c44] bg-[#e55c44] text-white"
                    : "border-white/15 bg-[#10283a]/80 text-white/75 hover:border-[#e55c44]/60 hover:bg-[#15334a] hover:text-white"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    activeCountryId === country.id
                      ? "bg-white"
                      : "bg-[#e55c44]"
                  }`}
                />
                {country.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {globalPresenceCountries.map((country) => (
            <button
              key={country.id}
              type="button"
              onClick={() => flyToCountry(country)}
              className={`group rounded-3xl border bg-white p-7 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                activeCountryId === country.id
                  ? "border-[#e55c44]/45 ring-4 ring-[#e55c44]/10"
                  : "border-[#d9e7ed]"
              }`}
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-black text-[#bb3f26]">
                    {country.name}
                  </h3>
                  <p className="mt-1 text-xs font-extrabold uppercase tracking-[0.18em] text-[#0f3340]">
                    {country.role}
                  </p>
                </div>

                <span className="rounded-full bg-[#eef7fb] px-3 py-1 text-xs font-black text-[#0f3340] transition-colors group-hover:bg-[#0f3340] group-hover:text-white">
                  {country.code}
                </span>
              </div>

              <p className="text-sm leading-7 text-[#486571]">
                {country.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .cf-marker {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 74px;
          height: 34px;
          border: 0;
          background: transparent;
          cursor: pointer;
          transform: translate(-4px, -4px);
        }

        .cf-marker-dot {
          position: absolute;
          left: 6px;
          top: 50%;
          width: 11px;
          height: 11px;
          border-radius: 999px;
          background: #e55c44;
          border: 2px solid #ffffff;
          box-shadow: 0 0 0 4px rgba(229, 92, 68, 0.18), 0 0 24px rgba(229, 92, 68, 0.75);
          transform: translateY(-50%);
          z-index: 2;
        }

        .cf-marker-pulse {
          position: absolute;
          left: 1px;
          top: 50%;
          width: 22px;
          height: 22px;
          border-radius: 999px;
          border: 1px solid rgba(229, 92, 68, 0.75);
          transform: translateY(-50%);
          animation: cfPulse 2.2s ease-out infinite;
        }

        .cf-marker-hq .cf-marker-dot {
          width: 13px;
          height: 13px;
          background: #f7efe5;
          border-color: #e55c44;
          box-shadow: 0 0 0 5px rgba(229, 92, 68, 0.24), 0 0 32px rgba(229, 92, 68, 0.9);
        }

        .cf-marker-hq .cf-marker-pulse {
          width: 28px;
          height: 28px;
          border-color: rgba(247, 239, 229, 0.9);
          animation-duration: 1.6s;
        }

        .cf-marker-label {
          margin-left: 22px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          background: rgba(9, 25, 37, 0.82);
          color: #ffffff;
          border-radius: 999px;
          padding: 5px 8px;
          font-size: 10px;
          line-height: 1;
          font-weight: 800;
          letter-spacing: 0.08em;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.28);
          backdrop-filter: blur(10px);
          transition: all 200ms ease;
        }

        .cf-marker:hover .cf-marker-label {
          border-color: rgba(229, 92, 68, 0.7);
          background: rgba(229, 92, 68, 0.92);
          transform: translateY(-1px);
        }

        @keyframes cfPulse {
          0% {
            opacity: 0.85;
            transform: translateY(-50%) scale(0.8);
          }
          100% {
            opacity: 0;
            transform: translateY(-50%) scale(2.1);
          }
        }

        .cf-map-popup .maplibregl-popup-content {
          border-radius: 18px;
          border: 1px solid rgba(229, 92, 68, 0.22);
          background: rgba(255, 255, 255, 0.96);
          padding: 0;
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.38);
          overflow: hidden;
        }

        .cf-map-popup .maplibregl-popup-tip {
          border-top-color: rgba(255, 255, 255, 0.96);
          border-bottom-color: rgba(255, 255, 255, 0.96);
        }

        .cf-popup-card {
          width: 230px;
          padding: 16px;
          font-family: inherit;
        }

        .cf-popup-code {
          display: inline-flex;
          margin-bottom: 8px;
          border-radius: 999px;
          background: rgba(229, 92, 68, 0.1);
          color: #bb3f26;
          padding: 5px 9px;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.16em;
        }

        .cf-popup-title {
          color: #0f3340;
          font-size: 18px;
          font-weight: 900;
          line-height: 1.1;
        }

        .cf-popup-role {
          margin-top: 5px;
          color: #e55c44;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .cf-popup-description {
          margin-top: 8px;
          color: #486571;
          font-size: 12px;
          line-height: 1.65;
        }

        .maplibregl-ctrl-attrib {
          background: rgba(8, 25, 37, 0.74) !important;
          color: rgba(255, 255, 255, 0.68) !important;
          border-radius: 999px !important;
          margin: 0 10px 10px 0 !important;
          backdrop-filter: blur(8px);
        }

        .maplibregl-ctrl-attrib a {
          color: rgba(255, 255, 255, 0.78) !important;
        }

        .maplibregl-canvas {
          outline: none;
        }
      `}</style>
    </section>
  );
}

/**
 * Backward-compatible export:
 * If your old page imports <WorldMap />, it will still work.
 * Later you can rename the import to GlobalPresenceMap.
 */
export function WorldMap() {
  return <GlobalPresenceMap />;
}