
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
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
    <div className="relative group" ref={dropdownRef}>
      <div className="flex items-center">
        <Link
          to={href}
          className="text-gray-700 group-hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
        >
          {title}
        </Link>
        <ChevronDown className="h-4 w-4 text-gray-500 group-hover:text-blue-600 transition-colors" />
      </div>
      
      {/* Dropdown content that appears on hover */}
      <div className="absolute left-0 mt-2 w-64 bg-white invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 transform origin-top-left scale-95 group-hover:scale-100 shadow-lg rounded-md border border-gray-100 z-50">
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
