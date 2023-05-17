import { motion } from "framer-motion";
import { FC, HTMLAttributes } from "react";
import { midClickAnimation } from "src/constants";
import Image from "next/image";

interface Props extends HTMLAttributes<HTMLDivElement> {
  icons: string[];
  hrefs: string[];
  sizes?: number[];
}
const IconBar: FC<Props> = (props: Props) => {
  const { icons, hrefs, sizes, className } = props;
  return (
    <div
      className={`flex items-center justify-center gap-4 3xl:scale-150 ${className}`}
    >
      {icons.map((icon, index) => (
        <IconBarItem
          key={index}
          icon={icon}
          href={hrefs[index]}
          size={sizes?.[index]}
        />
      ))}
    </div>
  );
};

interface IbiProps extends HTMLAttributes<HTMLDivElement> {
  icon: string;
  href: string;
  size?: number;
}
const IconBarItem: FC<IbiProps> = (props: IbiProps) => {
  const { icon, href, size = 35 } = props;
  return (
    <motion.div className="cursor-pointer" {...midClickAnimation}>
      <a href={href} rel="noreferrer" target="_blank">
        <Image
          src={`/images/icons/${icon}`}
          height={size}
          width={size}
          alt="menu"
        />
      </a>
    </motion.div>
  );
};

export default IconBar;
