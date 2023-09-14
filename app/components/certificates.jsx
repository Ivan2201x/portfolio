'use client'
import { Box, Heading, Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function Certificates() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const certifSection = document.getElementById('certificates');
            if (certifSection) {
                const certifRect = certifSection.getBoundingClientRect();
                setIsVisible(certifRect.top <= window.innerHeight * 0.75);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>

            <Box mt="10%" pt="6%" ml='22%' id='certificates' opacity={isVisible ? 1 : 0} transition='opacity 1s ease-in' >
                <Heading className="text-slate-600" size="2xl" mb="4%" ml='2.5%'>
                    Certificates
                </Heading>
                <Box
                    boxShadow='0px 4px 6px rgba(0, 0, 0, 0.5)'
                    className="carousel rounded-box"
                    maxWidth="580px" // Ajusta el ancho máximo según tus necesidades
                    margin="0 auto" // Esto centrará el carrusel horizontalmente
                    ml='10%'
                >
                    <div id='cert1' className="carousel-item">
                        <a href="https://www.coursera.org/account/accomplishments/certificate/AZY84QQTZRXM" target="_blank" rel="noopener noreferrer">
                            <Image src="cert1.png" maxH="450px" maxW="100%" />
                        </a>
                    </div>
                    <div id='cert2' className="carousel-item">
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <Image src="mcs.png" maxH="450px" maxW="100%" />
                        </a>
                    </div>
                    <div id='cert3' className="carousel-item">
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <Image src="mcs.png" maxH="450px" maxW="100%" />
                        </a>
                    </div>
                    <div id='cert4' className="carousel-item">
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <Image src="mcs.png" maxH="450px" maxW="100%" />
                        </a>
                    </div>
                </Box>
                <Box mr='30%' mt='1%'>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#cert1" className="btn btn-sm bg-white">1</a>
                    <a href="#cert2" className="btn btn-sm bg-white">2</a>
                    <a href="#cert3" className="btn btn-sm bg-white">3</a>
                    <a href="#cert4" className="btn btn-sm bg-white">4</a>
                </div>
                </Box>
            </Box>
        </>
    );
}
