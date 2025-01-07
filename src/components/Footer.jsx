import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";
import { Link } from "react-router-dom";

// const socialLinks = [
//   { href: "https://discord.com", icon: <FaDiscord /> },
//   { href: "https://twitter.com", icon: <FaTwitter /> },
//   { href: "https://youtube.com", icon: <FaYoutube /> },
//   { href: "https://medium.com", icon: <FaMedium /> },
// ];

const Footer = () => {
  return (
    <footer className="w-screen bg-[black] py-4 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
          Created and developed by
          <a
            href={"https://github.com/ammarthedeveloper"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-1 hover:underline transition-colors duration-500 ease-in-out hover:text-white"
          >
            ammarthedeveloper
          </a>
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {/* {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))} */}
          <Link
            to={"/our-team"}
            rel="noopener noreferrer"
            className="text-white transition-colors duration-500 ease-in-out hover:text-white"
          >
            Meet Developers
          </Link>
        </div>

        <a
          href="mailto:ammarthedeveloper@gmail.com"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Mail Me
        </a>
      </div>
    </footer>
  );
};

export default Footer;
