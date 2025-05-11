
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import NavigationItem from './NavigationItem';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    {
      title: "About Us",
      href: "/about",
      hasDropdown: true,
      dropdownItems: [
        { title: "Our Story", href: "/about/story" },
        { title: "Culture", href: "/about/culture" },
        { title: "Careers", href: "/about/careers" },
        { title: "How We Work", href: "/about/how-we-work" },
        { title: "Awards & Recognitions", href: "/about/awards" },
      ]
    },
    {
      title: "Services",
      href: "/services",
      hasDropdown: true,
      dropdownItems: [
        { title: "Product Engineering", href: "/services/product-engineering" },
        { title: "Cloud", href: "/services/cloud" },
        { title: "Data & AI", href: "/services/data-ai" },
        { title: "Digital Strategy", href: "/services/digital-strategy" },
        { title: "Customer Experience", href: "/services/customer-experience" },
      ]
    },
    {
      title: "Accelerators",
      href: "/accelerators",
      hasDropdown: true,
      dropdownItems: [
        { title: "Kubernetes Well Architected Review", href: "/accelerators/kubernetes" },
        { title: "AWS Well-Architected Review", href: "/accelerators/aws" },
        { title: "Generative AI Proof of Concept", href: "/accelerators/generative-ai" },
        { title: "GenAI Shopping Assistant", href: "/accelerators/genai-shopping" },
        { title: "Product Engineering ISV", href: "/accelerators/product-isv" },
      ]
    },
    {
      title: "Industries",
      href: "/industries",
      hasDropdown: true,
      dropdownItems: [
        { title: "Healthcare & Life Sciences", href: "/industries/healthcare" },
        { title: "Banking & Financial", href: "/industries/banking" },
        { title: "Retail & Commerce", href: "/industries/retail" },
        { title: "Media & Entertainment", href: "/industries/media" },
        { title: "Travel & Hospitality", href: "/industries/travel" },
        { title: "Transportation & Logistics", href: "/industries/transportation" },
      ]
    },
    {
      title: "Resource",
      href: "/resource",
      hasDropdown: true,
      dropdownItems: [
        { title: "Blogs & Insights", href: "/resource/blogs" },
        { title: "Case Studies", href: "/resource/case-studies" },
        { title: "PR and Media Coverage", href: "/resource/media" },
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
          <nav className="hidden md:flex items-center space-x-4">
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
              to="/contact"
              className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Contact Us
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
