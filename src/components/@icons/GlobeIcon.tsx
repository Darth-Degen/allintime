import { FC, SVGAttributes } from "react";

export interface GlobeIconProps extends SVGAttributes<SVGSVGElement> {}

export const GlobeIcon: FC<GlobeIconProps> = ({
  ...componentProps
}: GlobeIconProps) => (
  <svg
    width="499"
    height="344"
    {...componentProps}
    viewBox="0 0 499 344"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M249.5 4.05859V339.962"
      stroke="#939393"
      strokeWidth="3.82"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M249.501 339.962C385.05 339.962 494.933 264.767 494.933 172.01C494.933 79.2531 385.05 4.05859 249.501 4.05859C113.952 4.05859 4.06836 79.2531 4.06836 172.01C4.06836 264.767 113.952 339.962 249.501 339.962Z"
      stroke="#939393"
      strokeWidth="3.82"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M249.499 339.962C349.6 339.962 430.747 264.767 430.747 172.01C430.747 79.2531 349.6 4.05859 249.499 4.05859C149.399 4.05859 68.252 79.2531 68.252 172.01C68.252 264.767 149.399 339.962 249.499 339.962Z"
      stroke="#939393"
      strokeWidth="3.82"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M249.501 339.962C309.354 339.962 357.874 264.767 357.874 172.01C357.874 79.2531 309.354 4.05859 249.501 4.05859C189.647 4.05859 141.127 79.2531 141.127 172.01C141.127 264.767 189.647 339.962 249.501 339.962Z"
      stroke="#939393"
      strokeWidth="3.82"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.06836 172.01H494.933"
      stroke="#939393"
      strokeWidth="3.82"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M357.874 171.99C357.874 173.945 356.341 175.496 354.36 175.496C298.395 175.496 253.035 220.762 253.035 276.611C253.035 278.566 251.417 280.118 249.522 280.118C247.626 280.118 246.008 278.588 246.008 276.611C246.008 220.762 200.648 175.496 144.683 175.496H144.619C142.724 175.496 141.105 173.966 141.105 171.99C141.105 170.013 142.724 168.483 144.619 168.483H144.683C200.648 168.483 246.008 123.217 246.008 67.3678C246.008 65.4127 247.541 63.8613 249.522 63.8613C251.502 63.8613 253.035 65.3914 253.035 67.3678C253.035 123.217 298.395 168.483 354.36 168.483C356.319 168.483 357.874 170.098 357.874 171.99Z"
      fill="#939393"
    />
  </svg>
);

export default GlobeIcon;
