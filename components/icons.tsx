import type { SVGProps } from "react";

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24"
};

function Icon(props: SVGProps<SVGSVGElement>) {
  return <svg aria-hidden="true" {...base} {...props} />;
}

export function SparkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M12 2l1.9 5.7L19.6 9.6l-5.7 1.9L12 17l-1.9-5.5L4.4 9.6l5.7-1.9L12 2z" />
    </Icon>
  );
}

export function ShieldIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M12 3l7 3v5c0 4.9-2.8 8.4-7 10-4.2-1.6-7-5.1-7-10V6l7-3z" />
      <path d="M9.5 12.1l1.7 1.8 3.8-4" />
    </Icon>
  );
}

export function BillingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <rect x="4" y="6" width="16" height="12" rx="2" />
      <path d="M4 10h16" />
      <path d="M7 15h3" />
    </Icon>
  );
}

export function BellIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M15 17H5l1.2-1.6c.5-.7.8-1.6.8-2.5V10a5 5 0 0110 0v2.9c0 .9.3 1.8.8 2.5L19 17h-4" />
      <path d="M10 20a2 2 0 004 0" />
    </Icon>
  );
}

export function DatabaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </Icon>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M20 6L9 17l-5-5" />
    </Icon>
  );
}

export function LayersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M12 4l8 4-8 4-8-4 8-4z" />
      <path d="M4 12l8 4 8-4" />
      <path d="M4 16l8 4 8-4" />
    </Icon>
  );
}

export function TerminalIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M4 5h16v14H4z" />
      <path d="M7 9l3 3-3 3" />
      <path d="M12 15h5" />
    </Icon>
  );
}

export function RocketIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M14 4c3.9.4 6 2.6 6.4 6.4-.3 4.3-2.8 8.5-7.4 11.2l-3.6-3.6C12.8 13.4 15.2 8.7 14 4z" />
      <path d="M6 14l4-4" />
      <path d="M9.5 19.5l-2 2-1-4 4-1-1 3z" />
    </Icon>
  );
}

export function UsersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M9 11a3 3 0 100-6 3 3 0 000 6z" />
      <path d="M17 11a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
      <path d="M3 20c.7-3.4 3-5 6-5s5.3 1.6 6 5" />
      <path d="M14.5 20c.4-2.2 1.6-3.6 3.5-4.2" />
    </Icon>
  );
}

export function GlobeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16" />
      <path d="M12 4c2.5 2.8 3.9 5.5 3.9 8S14.5 17.2 12 20c-2.5-2.8-3.9-5.5-3.9-8S9.5 6.8 12 4z" />
    </Icon>
  );
}

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </Icon>
  );
}

export function PlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <Icon {...props}>
      <path d="M8 5l11 7-11 7V5z" />
    </Icon>
  );
}
