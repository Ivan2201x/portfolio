'use client'
import { Card, CardBody, Stack, Heading, Image, Text, Link, Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';


export default function Projects() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                const projectRect = projectsSection.getBoundingClientRect();
                setIsVisible(projectRect.top <= window.innerHeight * 0.75);
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
            <Box id='projects' pt='5%'>
                <Heading
                    opacity={isVisible ? 1 : 0}
                    transition='opacity 1s ease-in'
                    mt='5%'
                    ml='24%'
                    className='text-slate-500' size='2xl'>
                    Projects
                </Heading>
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    maxW='65%'
                    h='300px'
                    mt='3%'
                    ml='17%'
                    opacity={isVisible ? 1 : 0}
                    transition='opacity 1s ease-in'
                    boxShadow='0px 4px 6px rgba(0, 0, 0, 0.5)'
                >
                    <Stack>
                        <CardBody>
                            <Heading size='md'>Fundacion Otono Inolvidable Web Page</Heading>

                            <Text py='2' className='text-justify'>
                                I created a website for a senior citizens foundation, which I added payment buttons so they can donate, you can visit it as{' '}
                                <Link className='text-orange-400' href='https://otonoinolvidable.org' isExternal>
                                    www.otonoinolvidable.org
                                </Link>
                            </Text>
                        </CardBody>
                    </Stack>
                    <Image
                        objectFit='cover'
                        maxH='100%'
                        src='FOIproject.png'
                    />
                </Card>
            </Box>
        </>
    )
}