
import { FaDiscord, FaTwitter, FaYoutube,FaInstagram, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://instagram.com", icon: <FaInstagram /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#000] py-4 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-3 md:flex-row">
        <p className="text-center text-sm font-light md:text-left">
        ⊕SPDT COLLEGE. All rights reserved
        </p>
        <p className="text-center text-sm font-light md:text-left">
       team members: <span className="font-semibold underline">Ammar  &  tauseef</span>
        </p>

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-500 ease-in-out hover:text-blue"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="https://strong-elf-e3344d.netlify.app/"
          className="text-center text-sm  hover:underline md:text-right"
        >
          Website Design by <span className="text-blue-700 font-semibold underline"> Nadeem Salmani</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
