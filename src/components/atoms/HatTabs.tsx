import { FC, SVGAttributes } from "react";

export interface HatTabsProps extends SVGAttributes<SVGSVGElement> {}

const HatTabs: FC<HatTabsProps> = ({ ...componentProps }: HatTabsProps) => {
  return (
    <svg
      width="2542"
      height="49"
      {...componentProps}
      viewBox="0 0 2542 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="837" height="49" rx="24.5" fill="#FABC2A" />
      <rect
        x="855.5"
        y="2.5"
        width="831"
        height="44"
        rx="22"
        stroke="#FABC2A"
        stroke-width="5"
      />
      <rect
        x="1708.5"
        y="2.5"
        width="831"
        height="44"
        rx="22"
        stroke="#FABC2A"
        stroke-width="5"
      />
    </svg>
  );
};

export default HatTabs;
