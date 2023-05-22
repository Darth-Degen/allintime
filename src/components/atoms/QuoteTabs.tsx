import { FC, SVGAttributes } from "react";

export interface QuoteTabsProps extends SVGAttributes<SVGSVGElement> {}

const QuoteTabs: FC<QuoteTabsProps> = ({
  ...componentProps
}: QuoteTabsProps) => {
  return (
    <svg
      width="6960"
      height="31"
      {...componentProps}
      fill="none"
      viewBox="0 0 6960 31"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="1239" height="31" rx="15.5" fill="#939393" />
      <rect
        x="4234.5"
        y="2.5"
        width="2723"
        height="26"
        rx="13"
        stroke="#6F6F6F"
        strokeWidth="5"
      />
      <rect
        x="1294.5"
        y="2.5"
        width="2882"
        height="26"
        rx="13"
        stroke="#6F6F6F"
        strokeWidth="5"
      />
    </svg>
  );
};

export default QuoteTabs;
