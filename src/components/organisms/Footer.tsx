import { FC, useState } from "react";

const Footer: FC = () => {
  const [animate, setAnimate] = useState<boolean>(false);
  return (
    <footer
      className="px-8 py-4 w-full bg-transparent z-0  bottom-0"
      key="footer"
    ></footer>
  );
};

export default Footer;
