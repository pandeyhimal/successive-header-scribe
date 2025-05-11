
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface DropdownItem {
  title: string;
  href: string;
}

interface NavigationItemProps {
  title: string;
  href?: string;
  hasDropdown: boolean;
  dropdownItems?: DropdownItem[];
}

const NavigationItem: React.FC<NavigationItemProps> = ({ 
  title, 
  href = "#", 
  hasDropdown, 
  dropdownItems = [] 
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsHovering(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!hasDropdown) {
    return (
      <Link 
        to={href} 
        className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
      >
        {title}
      </Link>
    );
  }

  return (
    <div 
      className="relative group" 
      ref={menuRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="flex items-center">
        <Link
          to={href}
          className="text-gray-700 group-hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
        >
          {title}
        </Link>
        {/* Removed the ChevronDown icon */}
      </div>
      
      {/* Dropdown content that appears on hover */}
      <div 
        className={`absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-100 z-50 transition-all duration-200 ${
          isHovering ? 'opacity-100 visible transform scale-100' : 'opacity-0 invisible transform scale-95'
        }`}
        style={{ transformOrigin: 'top left' }}
      >
        <div className="py-2 grid grid-cols-1 gap-1">
          {dropdownItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationItem;
