"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "TEAMWORK", href: "/teamwork" },
    { name: "PROGRAMS", href: "/programs" },
    { name: "INNOVATION", href: "/innovation" },
    { name: "NEWS", href: "/news" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50 py-4 animate-slideDown">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center hover:scale-110 transition-transform duration-300"
            >
              <Image
                className="object-cover"
                src={"/images/logo.svg"}
                alt="Logo"
                width={68}
                height={60}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-cyan-500 transition-all duration-300 relative group"
                  style={{
                    animation: `slideInDown 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X
                  size={24}
                  className="animate-spin"
                  style={{ animationDuration: "0.3s" }}
                />
              ) : (
                <Menu
                  size={24}
                  className="hover:rotate-90 transition-transform duration-300"
                />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden z-40 animate-fadeIn"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed left-0 top-0 h-screen w-[70%] bg-white shadow-2xl z-40 md:hidden transition-transform duration-400 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button inside menu */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Menu items */}
        <nav className="flex flex-col px-6 pt-8 space-y-1">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-4 py-4 text-base font-medium text-gray-700 hover:text-cyan-500 hover:bg-gray-50 rounded-lg transition-all duration-300 border-l-4 border-transparent hover:border-cyan-500"
              onClick={() => setIsOpen(false)}
              style={{
                animation: isOpen
                  ? `slideInRight 0.4s ease-out ${index * 0.08}s both`
                  : "none",
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slideDown {
          animation: slideDown 0.6s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navbar;
