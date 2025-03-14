import { useState, useEffect, useRef } from 'react';
import { DropdownContainer, DropdownMenu } from './styles';

interface DropdownProps {
  children: React.ReactNode;
  trigger: React.ReactNode;
  title?: string;
  onOpen?: () => void;
  onClose?: () => void;
}

const Dropdown = ({ children, trigger, title, onOpen, onClose }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => {
      const newState = !prev;
      newState ? onOpen?.() : onClose?.();
      return newState;
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (!dropdownRef.current?.contains(event.target)) {
        setIsOpen(false);
        onClose?.();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <DropdownContainer ref={dropdownRef}>
      <div onClick={toggleDropdown}>{trigger}</div>
      {isOpen && (
        <DropdownMenu>
          <h1>{title}</h1>
          <hr />
          {children}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
