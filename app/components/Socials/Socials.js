import "./Socials.scss";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="socials">
      <FaFacebook size="2.5em" className="socials_item" />
      <FaInstagram size="2.5em" className="socials_item" />
      <FaWhatsapp size="2.5em" className="socials_item" />
    </div>
  );
};

export default Socials;
