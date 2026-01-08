import { IconType } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export type Social = {
  id: number;
  name: string;
  link: string;
  icon: IconType;
};

const profile = {
  profilePicture: "/assets/images/XTwitterpfp.jpg",
  bannerImg: "/assets/images/XTwitterBanner.jpeg",
};

const socials: Social[] = [
  {
    id: 1,
    name: "Github",
    link: "https://github.com/fuzzyKenny",
    icon: FaGithub,
  },
  {
    id: 2,
    name: "Twitter",
    link: "https://x.com/supkny",
    icon: FaXTwitter,
  },
];

export { socials, profile };
