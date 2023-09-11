import { Box } from "@chakra-ui/react";
import { useEffect, useState } from 'react';

function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (navbar) {
        const navbarRect = navbar.getBoundingClientRect();
        setIsVisible(navbarRect.top <= window.innerHeight * 0.75);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Agregar una pequeña demora antes de establecer isVisible en true
    const delayTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(delayTimer);
    };
  }, []);

  const handleNavClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <Box
      id="navbar"
      position="sticky"
      top={0}
      zIndex={10}
      boxShadow='0px 4px 6px rgba(0, 0, 0, 0.5)'
      opacity={isVisible ? 1 : 0}
      transition="opacity 0.5s"
    >
      <Box
      className="bg-slate-500"
        as="nav"
        color="black"
        px={4}
        py={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <p className="text-3xl  text-black font-bold">IvanDev</p>
        <ul className="menu menu-horizontal text-xl font-bold text-black">
          <li><a onClick={() => handleNavClick("home")}>Home</a></li>
          <li><a onClick={() => handleNavClick("aboutme")}>About me</a></li>
          <li><a onClick={() => handleNavClick("projects")}>Projects</a></li>
          <li><a onClick={() => handleNavClick("certificates")}>Certificates</a></li>
          <li><a onClick={() => handleNavClick("contact")}>Contact</a></li>
        </ul>
      </Box>
    </Box>
  );
}

export default Navbar;
