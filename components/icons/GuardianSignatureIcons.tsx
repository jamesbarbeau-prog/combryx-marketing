import type { SVGProps, ReactNode } from "react";

export type GuardianSignatureIconName =
  "guardian-core" | "command-center" | "homeowner-hub" | "builder-command" | "project-flow" | "secure-vault" | "approval-gate" | "site-inspection" | "warranty-defense" | "resolution" | "schedule-orbit" | "trade-network" | "cost-control" | "evidence-capture" | "signal-messages" | "insight-blueprint";

const art: Record<GuardianSignatureIconName, ReactNode> = {
  "guardian-core": <>
    <path d="M24 3.5 41 10v11.2c0 10.2-6.7 17.1-17 23.3C13.7 38.3 7 31.4 7 21.2V10L24 3.5Z" fill="#0B132B"/>
    <path d="M24 9 35 13.2v8c0 7.2-4.4 12.2-11 16.5-6.6-4.3-11-9.3-11-16.5v-8L24 9Z" fill="#1B2B55"/>
    <path d="m15.5 23.5 5.2 5.1 11.8-12" fill="none" stroke="#F59E0B" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 12.8 24 9.7l8 3.1" fill="none" stroke="#B7C8E8" stroke-width="1.5" opacity=".9"/>
  </>,
  "command-center": <>
    <rect x="7" y="7" width="34" height="34" rx="5" fill="#0B132B"/>
    <path d="M12 12h10v10H12zM26 12h10v6H26zM26 22h10v14H26zM12 26h10v10H12z" fill="#2F4C8C"/>
    <path d="M17 17h.1M31 15h.1M31 29h.1M17 31h.1" stroke="#F59E0B" stroke-width="3.5" stroke-linecap="round"/>
    <path d="M4 16V8a4 4 0 0 1 4-4h8M44 16V8a4 4 0 0 0-4-4h-8M4 32v8a4 4 0 0 0 4 4h8M44 32v8a4 4 0 0 1-4 4h-8" fill="none" stroke="#9DB4DE" stroke-width="1.8"/>
  </>,
  "homeowner-hub": <>
    <path d="m5 22 19-16 19 16v19H5V22Z" fill="#0B132B"/>
    <path d="m11 22 13-11 13 11v13H11V22Z" fill="#2F4C8C"/>
    <path d="M19 35V24h10v11" fill="none" stroke="#EEF3FB" stroke-width="2.2"/>
    <circle cx="24" cy="18" r="4.2" fill="#F59E0B"/><path d="M17.5 29c.5-3.2 2.6-4.8 6.5-4.8" fill="none" stroke="#FCD34D" stroke-width="2"/>
  </>,
  "builder-command": <>
    <path d="M8 42V17l9-6v6l9-6v31H8Z" fill="#0B132B"/>
    <path d="M26 42V9h13v33H26Z" fill="#2F4C8C"/>
    <path d="M30 14h5M30 20h5M30 26h5M13 23h4M13 30h4" stroke="#EEF3FB" stroke-width="2" stroke-linecap="round"/>
    <path d="M5 42h38M17 11V5h9v6" stroke="#F59E0B" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M17 5h9l-4.5-3Z" fill="#F59E0B"/>
  </>,
  "project-flow": <>
    <path d="M8 10h13v11H8zM27 27h13v11H27z" fill="#0B132B"/>
    <path d="M21 15.5h6v17h-6" fill="none" stroke="#2F4C8C" stroke-width="4"/>
    <path d="M21 15.5h6M24 32.5h3" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="14.5" cy="15.5" r="2" fill="#DCE6F5"/><circle cx="33.5" cy="32.5" r="2" fill="#DCE6F5"/>
    <path d="M24 4v6M21 7h6M24 38v6" stroke="#9DB4DE" stroke-width="1.8" stroke-linecap="round"/>
  </>,
  "secure-vault": <>
    <rect x="8" y="8" width="32" height="32" rx="6" fill="#0B132B"/>
    <circle cx="24" cy="24" r="12.5" fill="#2F4C8C" stroke="#9DB4DE" stroke-width="1.6"/>
    <circle cx="24" cy="24" r="7.5" fill="none" stroke="#EEF3FB" stroke-width="1.8"/>
    <path d="M24 17v14M17 24h14" stroke="#EEF3FB" stroke-width="1.4" opacity=".8"/>
    <path d="m28.5 23 2.4 2.4 5-5" fill="none" stroke="#F59E0B" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
  </>,
  "approval-gate": <>
    <path d="M8 40V14h5v26M35 40V14h5v26M6 14h36" fill="none" stroke="#0B132B" stroke-width="4" stroke-linecap="round"/>
    <path d="M13 14 24 6l11 8" fill="none" stroke="#2F4C8C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="24" cy="27" r="10" fill="#0B132B"/>
    <path d="m18.5 27 3.8 3.8 7.5-8" fill="none" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </>,
  "site-inspection": <>
    <path d="M5 17 24 6l19 11v24H5V17Z" fill="#0B132B"/>
    <path d="M10 20 24 12l14 8v16H10V20Z" fill="#2F4C8C"/>
    <path d="M13 29c3.2-5.3 6.8-8 11-8s7.8 2.7 11 8c-3.2 5.3-6.8 8-11 8s-7.8-2.7-11-8Z" fill="#0B132B" stroke="#DCE6F5" stroke-width="1.6"/>
    <circle cx="24" cy="29" r="4.1" fill="#F59E0B"/><circle cx="24" cy="29" r="1.5" fill="#FFF"/>
  </>,
  "warranty-defense": <>
    <path d="M24 4 41 10v11c0 10-6.6 17-17 23-10.4-6-17-13-17-23V10L24 4Z" fill="#0B132B"/>
    <path d="m12 25 12-10 12 10" fill="none" stroke="#9DB4DE" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 24v9h16v-9" fill="#2F4C8C"/>
    <path d="M19 33v-6h10v6" fill="none" stroke="#EEF3FB" stroke-width="1.8"/>
    <path d="m18 20 4 4 8-8" fill="none" stroke="#F59E0B" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
  </>,
  "resolution": <>
    <path d="M7 12h12l5 7-5 7H7l5-7-5-7Z" fill="#0B132B"/>
    <path d="M41 36H29l-5-7 5-7h12l-5 7 5 7Z" fill="#2F4C8C"/>
    <path d="M16 19h16M24 15v8" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="24" cy="24" r="4.5" fill="#EEF3FB"/>
    <path d="M9 35h10M29 9h10" stroke="#9DB4DE" stroke-width="2" stroke-linecap="round"/>
  </>,
  "schedule-orbit": <>
    <circle cx="24" cy="24" r="17" fill="#0B132B"/>
    <circle cx="24" cy="24" r="12" fill="#2F4C8C"/>
    <path d="M24 15v10l7 4" fill="none" stroke="#EEF3FB" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M8 8 4 12M40 8l4 4" stroke="#F59E0B" stroke-width="2.8" stroke-linecap="round"/>
    <path d="M24 3v4M21 5h6" stroke="#9DB4DE" stroke-width="1.8" stroke-linecap="round"/>
  </>,
  "trade-network": <>
    <path d="M10 11 24 5l14 6v22l-14 6-14-6V11Z" fill="#0B132B"/>
    <path d="m10 11 14 7 14-7M24 18v20" fill="none" stroke="#9DB4DE" stroke-width="1.7"/>
    <path d="m17 16 14 0M17 16l-5 10M31 16l5 10" stroke="#2F4C8C" stroke-width="3" stroke-linecap="round"/>
    <circle cx="17" cy="16" r="4" fill="#F59E0B"/><circle cx="31" cy="16" r="4" fill="#F59E0B"/>
    <path d="m19 28 3 3 7-8" fill="none" stroke="#EEF3FB" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
  </>,
  "cost-control": <>
    <path d="M8 35h32M11 35V14h6v21M21 35V8h6v27M31 35V19h6v16" fill="#0B132B"/>
    <path d="M8 14h10M18 8h10M28 19h10" stroke="#9DB4DE" stroke-width="2" stroke-linecap="round"/>
    <path d="M7 10 17 6 27 3" fill="none" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="36" cy="9" r="6" fill="#2F4C8C" stroke="#F59E0B" stroke-width="1.5"/>
    <path d="M36 6v6M33.5 9h5" stroke="#FFF" stroke-width="1.4" stroke-linecap="round"/>
  </>,
  "evidence-capture": <>
    <path d="M6 14h8l3-4h14l3 4h4a3 3 0 0 1 3 3v19H3V17a3 3 0 0 1 3-3Z" fill="#0B132B"/>
    <circle cx="23" cy="25" r="9" fill="#2F4C8C" stroke="#DCE6F5" stroke-width="1.8"/>
    <circle cx="23" cy="25" r="4.5" fill="#0B132B"/>
    <path d="m29 34 3 3 7-8" fill="none" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </>,
  "signal-messages": <>
    <path d="M5 8h29a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H18l-9 7v-7H5a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4Z" fill="#0B132B"/>
    <path d="M11 17h20M11 23h13" stroke="#DCE6F5" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="36" cy="10" r="7" fill="#F59E0B" stroke="#F4F7FA" stroke-width="2"/>
    <path d="M34 10h4M36 8v4" stroke="#FFF" stroke-width="1.7" stroke-linecap="round"/>
  </>,
  "insight-blueprint": <>
    <path d="M7 7h34v34H7z" fill="#0B132B"/>
    <path d="M12 12h24v24H12z" fill="none" stroke="#9DB4DE" stroke-width="1.5" stroke-dasharray="2.5 2"/>
    <path d="M16 31V23h5v8M23 31V17h5v14M30 31V12h4v19" fill="#2F4C8C"/>
    <path d="M14 35h22" stroke="#F59E0B" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="34" cy="12" r="3" fill="#F59E0B"/>
  </>,
};

type Props = SVGProps<SVGSVGElement> & {
  name: GuardianSignatureIconName;
  size?: number | string;
  tone?: "blue" | "orange" | "mono";
};

/** Signature Builder Guardian pictograms. Built as editable, scalable SVG. */
export function GuardianSignatureIcon({ name, size = 32, tone = "blue", style, ...props }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      role="img"
      aria-label={name.replace(/-/g, " ")}
      style={{ display: "block", flexShrink: 0, ...style }}
      {...props}
    >
      <g opacity={tone === "mono" ? 1 : 1}>{art[name]}</g>
    </svg>
  );
}

export const guardianSignatureIconNames = Object.keys(art) as GuardianSignatureIconName[];
