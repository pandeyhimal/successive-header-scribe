
import React, { useState } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import NavigationItem from './NavigationItem';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    {
      title: "Services",
      hasDropdown: true,
      dropdownItems: [
        { title: "Digital Transformation", href: "#" },
        { title: "Product Engineering", href: "#" },
        { title: "Cloud Services", href: "#" },
        { title: "Data & AI", href: "#" },
      ]
    },
    {
      title: "Industries",
      hasDropdown: true,
      dropdownItems: [
        { title: "Banking & Financial", href: "#" },
        { title: "Healthcare", href: "#" },
        { title: "Retail", href: "#" },
        { title: "Education", href: "#" },
      ]
    },
    {
      title: "Insights",
      href: "#",
      hasDropdown: false
    },
    {
      title: "About Us",
      hasDropdown: true,
      dropdownItems: [
        { title: "Our Story", href: "#" },
        { title: "Leadership", href: "#" },
        { title: "Careers", href: "#" },
        { title: "Contact Us", href: "#" },
      ]
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">Successive</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <NavigationItem 
                key={index}
                title={item.title}
                href={item.href}
                hasDropdown={item.hasDropdown}
                dropdownItems={item.dropdownItems}
              />
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="#"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <MobileMenu isOpen={mobileMenuOpen} setIsOpen={setMobileMenuOpen} navItems={navItems} />
    </header>
  );
};

export default Header;
