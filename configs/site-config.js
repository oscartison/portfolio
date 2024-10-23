import {
  FaGithub,
  FaDev,
  FaLinkedin,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Oscar Tison. All Rights Reserved.`,
  author: {
    name: "oscar.tison",
    accounts: [
      {
        url: "https://github.com/oscartison",
        label: "Github Account",
        type: "gray",
        icon: <FaGithub />
      },
      {
        url: "https://x.com/oscarsca__",
        label: "Twitter Account",
        type: "twitter",
        icon: <FaXTwitter />
      },
      {
        url: "https://dev.to/oscartison",
        label: "Dev Account",
        type: "gray",
        icon: <FaDev />
      },
      {
        url: "https://linkedin.com/in/oscartison",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <FaLinkedin />
      },
      
      {
        url: "mailto:oscar@tison.consulting",
        label: "Mail Oscar",
        type: "gray",
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
