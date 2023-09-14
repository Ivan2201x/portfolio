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
    if (sectionId === '/') {
      // Manejar el caso de "IvanDev" para regresar al inicio de la página
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    } else {
      // Para las otras secciones, realiza el desplazamiento suave
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <Box
      id="navbar"
      position="sticky"
      top={0}
      zIndex={10}
      boxShadow='0px 4px 6px rgba(0, 0, 0, 0.3)'
      opacity={isVisible ? 1 : 0}
      transition="opacity 0.5s"
    >
      <Box
      className="bg-black"
        as="nav"
        px={4}
        py={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <a className="text-3xl menu menu-horizontal cursor-pointer text-indigo-100 font-bold  " onClick={() => handleNavClick("/")}>IvanDev</a>
        <ul className="menu menu-horizontal text-xl font-bold text-indigo-100">
          <li><a className="hover:bg-indigo-100" onClick={() => handleNavClick("home")}>Home</a></li>
          <li><a className="hover:bg-indigo-100" onClick={() => handleNavClick("aboutme")}>About me</a></li>
          <li><a className="hover:bg-indigo-100" onClick={() => handleNavClick("projects")}>Projects</a></li>
          <li><a className="hover:bg-indigo-100" onClick={() => handleNavClick("certificates")}>Certificates</a></li>
          <li><a className="hover:bg-indigo-100" onClick={() => handleNavClick("contact")}>Contact</a></li>
        </ul>
      </Box>
    </Box>
  );
}

export default Navbar;
