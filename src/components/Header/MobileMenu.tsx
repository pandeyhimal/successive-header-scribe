
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface DropdownItem {
  title: string;
  href: string;
}

interface NavItem {
  title: string;
  href?: string;
  hasDropdown: boolean;
  dropdownItems?: DropdownItem[];
}

interface MobileMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  navItems: NavItem[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, setIsOpen, navItems }) => {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});

  if (!isOpen) return null;

  const toggleItem = (index: number) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="md:hidden bg-white shadow-lg border-t">
      <div className="p-4 space-y-2">
        {navItems.map((item, idx) => (
          <div key={idx} className="border-b border-gray-100 last:border-b-0">
            {item.hasDropdown ? (
              <div>
                <button 
                  onClick={() => toggleItem(idx)} 
                  className="w-full py-3 flex items-center justify-between text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  {item.title}
                  {expandedItems[idx] ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
                
                {expandedItems[idx] && (
                  <div className="py-2 pl-4 space-y-2 animate-accordion-down">
                    {item.dropdownItems?.map((dropdownItem, subIdx) => (
                      <Link
                        key={subIdx}
                        to={dropdownItem.href}
                        className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {dropdownItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="py-3">
                <Link
                  to={item.href || "#"}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              </div>
            )}
          </div>
        ))}
        
        <div className="pt-4 border-t border-gray-200">
          <Link
            to="/contact"
            className="w-full flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
