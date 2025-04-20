import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className="bg-[#0a1a70] shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="flex items-center mr-2 bg-white rounded-full p-1">
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
              <span className="text-white font-bold text-xl">RoboChargers</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/">
              <a
                className={`text-white hover:text-[#ffd700] font-medium transition duration-150 ${
                  isActive("/") ? "text-[#ffd700]" : ""
                }`}
              >
                Home
              </a>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="link"
                  className="text-white hover:text-[#ffd700] font-medium transition duration-150 p-0"
                >
                  About <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem>
                  <Link href="/about" className="w-full">
                    Team History
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/about#mission" className="w-full">
                    Mission & Values
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/team" className="w-full">
                    Team Members
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="link"
                  className="text-white hover:text-[#ffd700] font-medium transition duration-150 p-0"
                >
                  Projects <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem>
                  <Link href="/projects" className="w-full">
                    FRC Team 3005
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/projects?team=ftc" className="w-full">
                    FTC Teams
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/projects?view=past" className="w-full">
                    Past Robots
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/gallery">
              <a
                className={`text-white hover:text-[#ffd700] font-medium transition duration-150 ${
                  isActive("/gallery") ? "text-[#ffd700]" : ""
                }`}
              >
                Gallery
              </a>
            </Link>
            <Link href="/schedule">
              <a
                className={`text-white hover:text-[#ffd700] font-medium transition duration-150 ${
                  isActive("/schedule") ? "text-[#ffd700]" : ""
                }`}
              >
                Schedule
              </a>
            </Link>
            <Link href="/sponsors">
              <a
                className={`text-white hover:text-[#ffd700] font-medium transition duration-150 ${
                  isActive("/sponsors") ? "text-[#ffd700]" : ""
                }`}
              >
                Sponsors
              </a>
            </Link>
            <Link href="/resources">
              <a
                className={`text-white hover:text-[#ffd700] font-medium transition duration-150 ${
                  isActive("/resources") ? "text-[#ffd700]" : ""
                }`}
              >
                Resources
              </a>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <Button
            onClick={toggleMobileMenu}
            variant="outline"
            className="md:hidden bg-[#1a36e8] hover:bg-[#0a1a70] text-white border-none"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a1a70] border-t border-gray-700 py-2">
          <div className="px-4 space-y-2">
            <Link href="/">
              <a
                className={`block py-2 ${
                  isActive("/")
                    ? "text-[#ffd700]"
                    : "text-white hover:text-[#ffd700]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
            </Link>
            <div>
              <button
                className={`flex justify-between w-full py-2 ${
                  isActive("/about") || isActive("/team")
                    ? "text-[#ffd700]"
                    : "text-white hover:text-[#ffd700]"
                }`}
                onClick={() => {
                  const submenu = document.getElementById("about-submenu");
                  if (submenu) {
                    submenu.classList.toggle("hidden");
                  }
                }}
              >
                About <ChevronDown className="h-4 w-4" />
              </button>
              <div id="about-submenu" className="hidden pl-4 space-y-2 mt-1">
                <Link href="/about">
                  <a
                    className="block text-white hover:text-[#ffd700] py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Team History
                  </a>
                </Link>
                <Link href="/about#mission">
                  <a
                    className="block text-white hover:text-[#ffd700] py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Mission & Values
                  </a>
                </Link>
                <Link href="/team">
                  <a
                    className="block text-white hover:text-[#ffd700] py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Team Members
                  </a>
                </Link>
              </div>
            </div>
            <div>
              <button
                className={`flex justify-between w-full py-2 ${
                  isActive("/projects")
                    ? "text-[#ffd700]"
                    : "text-white hover:text-[#ffd700]"
                }`}
                onClick={() => {
                  const submenu = document.getElementById("projects-submenu");
                  if (submenu) {
                    submenu.classList.toggle("hidden");
                  }
                }}
              >
                Projects <ChevronDown className="h-4 w-4" />
              </button>
              <div id="projects-submenu" className="hidden pl-4 space-y-2 mt-1">
                <Link href="/projects">
                  <a
                    className="block text-white hover:text-[#ffd700] py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    FRC Team 3005
                  </a>
                </Link>
                <Link href="/projects?team=ftc">
                  <a
                    className="block text-white hover:text-[#ffd700] py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    FTC Teams
                  </a>
                </Link>
                <Link href="/projects?view=past">
                  <a
                    className="block text-white hover:text-[#ffd700] py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Past Robots
                  </a>
                </Link>
              </div>
            </div>
            <Link href="/gallery">
              <a
                className={`block py-2 ${
                  isActive("/gallery")
                    ? "text-[#ffd700]"
                    : "text-white hover:text-[#ffd700]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Gallery
              </a>
            </Link>
            <Link href="/schedule">
              <a
                className={`block py-2 ${
                  isActive("/schedule")
                    ? "text-[#ffd700]"
                    : "text-white hover:text-[#ffd700]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Schedule
              </a>
            </Link>
            <Link href="/sponsors">
              <a
                className={`block py-2 ${
                  isActive("/sponsors")
                    ? "text-[#ffd700]"
                    : "text-white hover:text-[#ffd700]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Sponsors
              </a>
            </Link>
            <Link href="/resources">
              <a
                className={`block py-2 ${
                  isActive("/resources")
                    ? "text-[#ffd700]"
                    : "text-white hover:text-[#ffd700]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </a>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
