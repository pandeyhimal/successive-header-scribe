
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white shadow-lg border-t">
      <div className="p-4 space-y-2">
        <Accordion type="single" collapsible className="w-full">
          {navItems.map((item, idx) => (
            item.hasDropdown ? (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="py-3 text-sm font-medium text-gray-700 hover:text-blue-600">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="py-2 pl-4 space-y-2">
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
                </AccordionContent>
              </AccordionItem>
            ) : (
              <div key={idx} className="py-3">
                <Link
                  to={item.href || "#"}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              </div>
            )
          ))}
        </Accordion>
        
        <div className="pt-4 border-t border-gray-200">
          <Link
            to="#"
            className="w-full flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            onClick={() => setIsOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
