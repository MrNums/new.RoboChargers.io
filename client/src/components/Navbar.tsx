import React, { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, User, LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import logoImage from "../assets/2_20230413_174021_0001.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { user, logoutMutation } = useAuth();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location === path;
  };
  
  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <header className="bg-[#0a1a70] shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="flex items-center mr-3">
                <img 
                  src={logoImage} 
                  alt="RoboChargers Logo" 
                  className="h-10 w-auto"
                />
              </div>
              <span className="text-white font-bold text-xl">RoboChargers</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link 
              href="/"
              className={`text-white hover:text-[#ffd700] font-medium transition duration-150 my-auto ${
                isActive("/") ? "text-[#ffd700]" : ""
              }`}
            >
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="link"
                  className="text-white hover:text-[#ffd700] font-medium transition duration-150 p-0 text-base"
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
                  className="text-white hover:text-[#ffd700] font-medium transition duration-150 p-0 text-base"
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
            <Link 
              href="/gallery"
              className={`text-white hover:text-[#ffd700] font-medium transition duration-150 my-auto ${
                isActive("/gallery") ? "text-[#ffd700]" : ""
              }`}
            >
              Gallery
            </Link>
            <Link 
              href="/schedule"
              className={`text-white hover:text-[#ffd700] font-medium transition duration-150 my-auto ${
                isActive("/schedule") ? "text-[#ffd700]" : ""
              }`}
            >
              Schedule
            </Link>
            <Link 
              href="/sponsors"
              className={`text-white hover:text-[#ffd700] font-medium transition duration-150 my-auto ${
                isActive("/sponsors") ? "text-[#ffd700]" : ""
              }`}
            >
              Sponsors
            </Link>
            <Link 
              href="/resources"
              className={`text-white hover:text-[#ffd700] font-medium transition duration-150 my-auto ${
                isActive("/resources") ? "text-[#ffd700]" : ""
              }`}
            >
              Resources
            </Link>
            <Link 
              href="/store"
              className={`text-white hover:text-[#ffd700] font-medium transition duration-150 my-auto ${
                isActive("/store") ? "text-[#ffd700]" : ""
              }`}
            >
              Store
            </Link>
          </nav>

          {/* User menu - only shows when logged in */}
          {user && (
            <div className="hidden md:flex items-center ml-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="rounded-full bg-[#1a36e8] hover:bg-[#0a1a70] text-white border-none flex items-center space-x-1"
                    size="sm"
                  >
                    <User size={18} className="mr-1" />
                    <span className="font-medium">{user.username}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem className="cursor-pointer">
                    <User size={16} className="mr-2" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <Link href="/admin">
                    <DropdownMenuItem className="cursor-pointer">
                      <Settings size={16} className="mr-2" />
                      <span>Admin Dashboard</span>
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-red-500 focus:text-red-500">
                    <LogOut size={16} className="mr-2" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )}

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
            <Link 
              href="/"
              className={`block py-2 ${
                isActive("/")
                  ? "text-[#ffd700]"
                  : "text-white hover:text-[#ffd700]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
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
                <Link 
                  href="/about"
                  className="block text-white hover:text-[#ffd700] py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Team History
                </Link>
                <Link 
                  href="/about#mission"
                  className="block text-white hover:text-[#ffd700] py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Mission & Values
                </Link>
                <Link 
                  href="/team"
                  className="block text-white hover:text-[#ffd700] py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Team Members
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
                <Link 
                  href="/projects"
                  className="block text-white hover:text-[#ffd700] py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FRC Team 3005
                </Link>
                <Link 
                  href="/projects?team=ftc"
                  className="block text-white hover:text-[#ffd700] py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FTC Teams
                </Link>
                <Link 
                  href="/projects?view=past"
                  className="block text-white hover:text-[#ffd700] py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Past Robots
                </Link>
              </div>
            </div>
            <Link 
              href="/gallery"
              className={`block py-2 ${
                isActive("/gallery")
                  ? "text-[#ffd700]"
                  : "text-white hover:text-[#ffd700]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              href="/schedule"
              className={`block py-2 ${
                isActive("/schedule")
                  ? "text-[#ffd700]"
                  : "text-white hover:text-[#ffd700]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Schedule
            </Link>
            <Link 
              href="/sponsors"
              className={`block py-2 ${
                isActive("/sponsors")
                  ? "text-[#ffd700]"
                  : "text-white hover:text-[#ffd700]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Sponsors
            </Link>
            <Link 
              href="/resources"
              className={`block py-2 ${
                isActive("/resources")
                  ? "text-[#ffd700]"
                  : "text-white hover:text-[#ffd700]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>
            <Link 
              href="/store"
              className={`block py-2 ${
                isActive("/store")
                  ? "text-[#ffd700]"
                  : "text-white hover:text-[#ffd700]"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Store
            </Link>
            
            {/* Mobile User Menu */}
            {user && (
              <>
                <div className="border-t border-gray-700 my-2"></div>
                <div className="py-2 flex items-center text-white">
                  <User size={16} className="mr-2" />
                  <span className="font-medium">{user.username}</span>
                </div>
                <Link 
                  href="/profile"
                  className="block py-2 text-white hover:text-[#ffd700]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Profile Settings
                </Link>
                <Link 
                  href="/admin"
                  className="block py-2 text-white hover:text-[#ffd700]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Admin Dashboard
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left py-2 text-red-400 hover:text-red-300"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
