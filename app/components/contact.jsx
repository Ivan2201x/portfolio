import { Box, Heading, Text, Image, Center, Icon } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';


export default function Contact() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                const contactRect = contactSection.getBoundingClientRect();
                setIsVisible(contactRect.top <= window.innerHeight * 0.75);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box 
            className='cardContact'
            pb='7%' 
            opacity={isVisible ? 1 : 0}
            transition='opacity 1s ease-in'>
            <Box
                id='contact'
                maxW='500px'
                h='auto'
                overflow='hidden'
                mt='15%'
                ml='32.5%'
                boxShadow='0px 4px 6px rgba(0, 0, 0, 0.5)'
                borderRadius='10%'
            >
                <Box>
                    <Heading mt='5%' ml='31%' className='text-slate-600' size='2xl'>
                        Contact
                    </Heading>

                    <Text  py='5' pl='7%' pr='7%' className='text-center text-xl'>
                        If you are interested in hiring me, contact me through this
                        means:
                    </Text>
                    <Center pt='3%' ml='10' mb='3'>
                        <Box textAlign="center">
                            <Box mb={4} display="flex" alignItems="center">
                                <Icon as={FaPhone} boxSize={6} mr='4' />
                                <Text marginRight="1rem">+593 991432632</Text>
                            </Box>
                            <Box mb={4} display="flex" alignItems="center">
                                <Icon as={FaEnvelope} boxSize={6} mr='4' />
                                <Text marginRight="1rem">ipuga2201@gmail.com</Text>
                            </Box>
                            <Box mb={4} display="flex" alignItems="center">
                                <Image alt='LinkdInIcon' src="linkdinIcon.png" width={7} height={7} mr='4' />
                                <Text marginRight="1rem">Ivan Puga Macias</Text>
                            </Box>
                        </Box>
                    </Center>
                </Box>
            </Box>
        </Box>
    );
}
