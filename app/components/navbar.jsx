'use client';

import { Box, IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#aboutme' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const linkClass =
    'px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300';

  return (
    <Box
      id="navbar"
      position="sticky"
      top={0}
      zIndex={1000}
      bg="#0f172a"
      boxShadow="0 4px 20px rgba(0, 0, 0, 0.25)"
      borderBottom="1px solid rgba(255, 255, 255, 0.08)"
    >
      <Box
        as="nav"
        aria-label="Main navigation"
        px={4}
        py={3}
        maxW="72rem"
        mx="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <a href="#home" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Ivan<span className="text-indigo-400">.</span>
        </a>

        <ul className="hidden lg:flex gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={linkClass}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <IconButton
          icon={<HamburgerIcon />}
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          display={{ base: 'flex', lg: 'none' }}
          variant="ghost"
          color="white"
          _hover={{ bg: 'whiteAlpha.200' }}
        />
      </Box>

      {isMobileMenuOpen && (
        <Box as="nav" py={3} px={4} display={{ base: 'block', lg: 'none' }} borderTop="1px solid rgba(255,255,255,0.08)">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className={`block ${linkClass}`} onClick={handleNavClick}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </Box>
      )}
    </Box>
  );
}

export default Navbar;
