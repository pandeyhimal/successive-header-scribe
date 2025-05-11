
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

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
    <div className="relative" ref={dropdownRef}>
      <HoverCard openDelay={50} closeDelay={100}>
        <HoverCardTrigger asChild>
          <button
            type="button"
            className="inline-flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {title}
            <ChevronDown
              className={`ml-1 h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>
        </HoverCardTrigger>
        <HoverCardContent className="w-64 p-0 bg-white shadow-lg rounded-md border border-gray-200">
          <div className="py-2">
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
        </HoverCardContent>
      </HoverCard>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5 animate-fade-in z-50">
          {dropdownItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavigationItem;
