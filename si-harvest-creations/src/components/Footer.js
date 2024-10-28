import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import "./Footer.css";

const Footer = () => {
  const location =
    "65 1st Avenue Melvile Auckland Park Johannesburg Gauteng 2092";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    location
  )}`;

  return (
    <footer className="footer-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Company Info & Copyright */}
          <div className="flex flex-col gap-1">
            <h3 className="text-lg font-bold text-white">
              SihleHarvest Creations
            </h3>
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-6 text-gray-300 text-sm">
            <a
              href="mailto:sihlemrulwa@gmail.com"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-200"
            >
              <Mail className="h-4 w-4" />
              <span>sihlemrulwa@gmail.com</span>
            </a>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <div className="flex gap-2">
                <a
                  href="tel:0836236469"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  083 623 6469
                </a>
                <span className="text-gray-600">|</span>
                <a
                  href="tel:0627321849"
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  062 732 1849
                </a>
              </div>
            </div>
          </div>

          {/* Location & Social */}
          <div className="flex items-center gap-6">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Johannesburg</span>
            </a>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/SihleHarvest"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-all duration-200 hover:-translate-y-1"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/SihleHarvest"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-all duration-200 hover:-translate-y-1"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/SihleHarvest"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-400 transition-all duration-200 hover:-translate-y-1"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
