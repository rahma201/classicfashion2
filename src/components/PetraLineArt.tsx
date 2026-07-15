import type { CSSProperties, SVGProps } from "react";

type PetraLineArtProps = Omit<SVGProps<SVGSVGElement>, "color"> & {
  color?: string;
  strokeWidth?: number;
  opacity?: number;
};

const sharedStroke = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  vectorEffect: "non-scaling-stroke",
} as const;

/**
 * Responsive Petra line artwork for decorative website sections.
 * It has a transparent background and inherits its colour from `currentColor`.
 */
export default function PetraLineArt({
  color = "#c8754f",
  strokeWidth = 1.35,
  opacity = 0.72,
  className,
  style,
  ...props
}: PetraLineArtProps) {
  return (
    <svg
      viewBox="0 0 1600 260"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={
        {
          display: "block",
          width: "100%",
          height: "auto",
          color,
          opacity,
          pointerEvents: "none",
          ...style,
        } as CSSProperties
      }
      {...props}
    >
      <g {...sharedStroke} strokeWidth={strokeWidth}>
        {/* Petra's layered sandstone silhouette */}
        <path d="M0 66h116l12 10h78l16 13h54l12 9h86l15 11h42" />
        <path d="M0 84h112l14 11h92l12 12h47l18 11h77l15 11h44" />
        <path d="M0 103h105l18 13h111l15 13h55l12 10h58l18 13h39" />
        <path d="M0 122h119l13 10h84l17 16h70l16 12h55l19 13h38" />

        <path d="M602 97h75l15 10h76l20 13h103l16 11h283l14 12h181l13 11h202" />
        <path d="M604 119h61l13 11h92l16 12h118l14 12h261l15 12h207l15 10h184" />
        <path d="M604 143h74l15 12h72l20 13h142l15 12h250l16 11h174l17 12h201" />
        <path d="M604 167h58l17 13h84l17 12h143l18 13h276l14 11h190l15 12h164" />

        {/* Main Al-Khazneh facade */}
        <path d="M355 238v-76h14v-10h15v-49l-14-9h38l-14 9v49h16v10h14v76" />
        <path d="M424 238V93h18V80h27l10-17 10 17h27v13h18v145" />
        <path d="M534 238v-76h14v-10h16v-49l-14-9h39l-15 9v49h16v10h14v76" />

        {/* Upper pediment and central tholos */}
        <path d="M405 94l74-43 75 43" />
        <path d="M423 83h112" />
        <path d="M447 80V55l9-11h46l9 11v25" />
        <path d="M456 44l23-17 23 17" />
        <path d="M469 27l3-12h14l3 12" />
        <path d="M475 15V8h8v7" />
        <path d="M459 80V49m40 31V49" />

        {/* Columns, capitals and entablatures */}
        <path d="M355 162h249M369 152h221M384 142h190" />
        <path d="M378 107h23m-20 7h17m-17 34h17m-20 8h23" />
        <path d="M557 107h23m-20 7h17m-17 34h17m-20 8h23" />
        <path d="M431 99h28m-25 9h22m-22 40h22m-25 9h28" />
        <path d="M499 99h28m-25 9h22m-22 40h22m-25 9h28" />
        <path d="M388 114v34m181-34v34M445 108v40m68-40v40" />

        {/* Door and carved niches */}
        <path d="M451 238v-59h56v59M461 238v-48h36v48" />
        <path d="M374 238v-48h33v48M551 238v-48h33v48" />
        <path d="M379 190l12-12 12 12m153 0 12-12 12 12" />
        <path d="M466 190l13-13 13 13" />
        <path d="M386 211h10m163 0h10m-85 3h10" />

        {/* Secondary carved tomb and lower terrain */}
        <path d="M676 238v-55h15v-10h68v10h15v55" />
        <path d="M691 173l34-30 34 30M701 165h48" />
        <path d="M705 238v-43h40v43M713 238v-34h24v34" />
        <path d="M0 238h303l18-10h34m249 10h72m98 0h826" />
        <path d="M0 252h284l21-8h50m249 8h72m98 0h826" />

        {/* Fine rock-cut details */}
        <path d="M314 229v-35l11-9h30M321 211h34M604 221h35l12-13h25" />
        <path d="M774 224h91l12-9h71l15 9h122" />
      </g>
    </svg>
  );
}
