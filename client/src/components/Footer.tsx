import React from "react";
import { Link } from "wouter";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Github,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import logoImage from "../assets/2_20230413_174021_0001.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="mr-2">
                <img 
                  src={logoImage} 
                  alt="RoboChargers Logo" 
                  className="h-9 w-auto"
                />
              </div>
              <span className="font-bold text-xl">RoboChargers</span>
            </div>
            <p className="text-gray-400 mb-4">
              Building the future through STEM education and competitive
              robotics.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-150"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-150"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-150"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-150"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-150"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition duration-150">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition duration-150">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-white transition duration-150">
                  Our Teams
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-400 hover:text-white transition duration-150">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white transition duration-150">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-gray-400 hover:text-white transition duration-150">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition duration-150">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources#documents" className="text-gray-400 hover:text-white transition duration-150">
                  Team Documents
                </Link>
              </li>
              <li>
                <Link href="/resources#cad" className="text-gray-400 hover:text-white transition duration-150">
                  CAD Files
                </Link>
              </li>
              <li>
                <Link href="/resources#programming" className="text-gray-400 hover:text-white transition duration-150">
                  Programming Guides
                </Link>
              </li>
              <li>
                <Link href="/resources#notebook" className="text-gray-400 hover:text-white transition duration-150">
                  Engineering Notebook
                </Link>
              </li>
              <li>
                <Link href="/resources#safety" className="text-gray-400 hover:text-white transition duration-150">
                  Safety Guidelines
                </Link>
              </li>
              <li>
                <Link href="/sponsors#packet" className="text-gray-400 hover:text-white transition duration-150">
                  Sponsorship Packet
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="mt-1 mr-2 flex-shrink-0" size={18} />
                <span className="text-gray-400">
                  Emmett J Conrad High School
                  <br />
                  7502 Fair Oaks Ave
                  <br />
                  Dallas, TX 75231
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 flex-shrink-0" size={18} />
                <a
                  href="mailto:info@robochargers.org"
                  className="text-gray-400 hover:text-white transition duration-150"
                >
                  info@robochargers.org
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 flex-shrink-0" size={18} />
                <a
                  href="tel:+12145550123"
                  className="text-gray-400 hover:text-white transition duration-150"
                >
                  (214) 555-0123
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} RoboChargers. All rights reserved.
          </p>
          <div className="flex flex-wrap space-x-4 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition duration-150">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition duration-150">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white transition duration-150">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
