import "./Footer.scss";
import Link from "next/link";
import Socials from "../Socials/Socials";
import { FaChevronUp } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_links">
        <Link href="/about" className="footer_links_item">
          About
        </Link>
        <Link href="/contact" className="footer_links_item">
          Contact
        </Link>
        <Link href="/privacy-policy" className="footer_links_item">
          Privacy Policy
        </Link>
      </div>
      <div className="back_to_top">
        <FaChevronUp size="1em" className="chevron" />
        <p>Back to top</p>
      </div>
      <div className="footer_info">
        <Socials />
        <p>&copy; 2023 Kundalini Innerdanza. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
