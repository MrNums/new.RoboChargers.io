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

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-white rounded-full p-1 mr-2">
                <svg
                  className="h-8 w-8"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="50" cy="50" r="50" fill="#0a1a70" />
                  <path
                    d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z"
                    fill="#ffd700"
                  />
                  <path
                    d="M40 30 L60 70"
                    stroke="#ffd700"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </svg>
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
                <Link href="/">
                  <a className="text-gray-400 hover:text-white transition duration-150">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-gray-400 hover:text-white transition duration-150">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/team">
                  <a className="text-gray-400 hover:text-white transition duration-150">
                    Our Teams
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a className="text-gray-400 hover:text-white transition duration-150">
                    Projects
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/gallery">
                  <a className="text-gray-400 hover:text-white transition duration-150">
                    Gallery
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/schedule">
                  <a className="text-gray-400 hover:text-white transition duration-150">
                    Schedule
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-400 hover:text-white transition duration-150">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources#documents">
                  <a className="text-gray-400 hover:text-white transition duration-150">
                    Team Documents
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/resources#cad">
                  <a className="text-gray-400 hover:text-white transition duration-150">
                    CAD Files
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/resources#programming">
                  <a className="text-gray-400 hover:text-white transition duration-150">
                    Programming Guides
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/resources#notebook">
                  <a className="text-gray-400 hover:text-white transition duration-150">
                    Engineering Notebook
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/resources#safety">
                  <a className="text-gray-400 hover:text-white transition duration-150">
                    Safety Guidelines
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/sponsors#packet">
                  <a className="text-gray-400 hover:text-white transition duration-150">
                    Sponsorship Packet
                  </a>
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
                  Coppell High School
                  <br />
                  185 W Parkway Blvd
                  <br />
                  Coppell, TX 75019
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
            <Link href="/privacy">
              <a className="text-gray-400 hover:text-white transition duration-150">
                Privacy Policy
              </a>
            </Link>
            <Link href="/terms">
              <a className="text-gray-400 hover:text-white transition duration-150">
                Terms of Service
              </a>
            </Link>
            <Link href="/cookies">
              <a className="text-gray-400 hover:text-white transition duration-150">
                Cookie Policy
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
