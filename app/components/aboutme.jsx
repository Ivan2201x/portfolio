import { Box, Heading, Text, Image } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function Aboutme() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const aboutmeSection = document.getElementById('aboutme');
            if (aboutmeSection) {
                const aboutmeRect = aboutmeSection.getBoundingClientRect();
                setIsVisible(aboutmeRect.top <= window.innerHeight * 0.75);
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
            id='aboutme'
            maxW='900px'
            h='500px'
            overflow='hidden'
            mt='10%'
            ml='20%'
            mb='20%'
            opacity={isVisible ? 1 : 0}
            transition='opacity 1s ease-in'
        >
            <Box>
                <Heading mt='5' ml='7%' className='text-slate-500' size='2xl'>
                    About Me
                </Heading>
                <Image
                    borderRadius='20%'
                    ml='35%'
                    mt='5'
                    objectFit='cover'
                    maxW='250px'
                    src='IvanFoto.png'
                    boxShadow='0px 4px 6px rgba(0, 0, 0, 0.5)'
                />
                <Text mt='5' py='5' pl='7%' pr='7%' className='text-justify text-xl'>
                    My name is Ivan Jose Puga Macias, I'm 21 years old, I live in Ecuador and I'm a student of Computer Science Engineering in my 6th semester.
                    I am currently working as a Junior Back-end Developer/Consultant in a small company. My aspiration is to become a full stack developer.
                </Text>
            </Box>
        </Box>
    );
}
