import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
const Footer = () => {
  const footerItems = ["About", "Blog", "Team", "Pricing", "Contact", "Terms"];
  return (
    <section className="bg-black">
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <div className="max-w-screen-xl px-4 py-6 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          {footerItems.map((item, index) => (
            <div className="px-5 py-2" key={index}>
              <a href="#" className="footer-item">
                {item}
              </a>
            </div>
          ))}
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          <a href="#" className="footer-icon">
            <span className="sr-only">Facebook</span>
            <FaFacebook />
          </a>
          <a href="#" className="footer-icon">
            <span className="sr-only">Instagram</span>
            <FaInstagram />
          </a>
          <a href="#" className="footer-icon">
            <span className="sr-only">Twitter</span>
            <FaTwitter />
          </a>
          <a href="#" className="footer-icon">
            <span className="sr-only">GitHub</span>
            <FaGithub />
          </a>
          <a href="#" className="footer-icon">
            <span className="sr-only">Mail</span>
            <IoMail />
          </a>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2024 SomeCompany, Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
