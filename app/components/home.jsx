import { Center, Stack, Heading, Image, Text, Link, HStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        const homeSectionRect = homeSection.getBoundingClientRect();
        setIsVisible(homeSectionRect.top <= window.innerHeight * 0.75);
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

  return (
    <Center id='home'>
      <Stack
        mt="7%"
        direction={{ base: 'column', sm: 'row' }}
        bg='transparent'
        alignItems="center"
        spacing={{ base: '4', sm: '8' }}
        transition='opacity 1s ease-in-out'
        opacity={isVisible ? 1 : 0}
      >
        <Image
          maxW={{ base: '100%', sm: '350px' }}
          //Width='340px'
          //height='340px'
          src='logo.png'
          mr={{ base: '0', sm: '550' }}
          borderRadius='10%'
          boxShadow='0px 4px 6px rgba(0, 0, 0, 0.5)'
        />

        <Stack flex="1" alignItems="flex-start" textAlign="left">
          <Heading className='text-slate-600' size='4xl'  >Junior Web <br />Developer</Heading>
          <Text py='4' color='black' fontSize="2xl" ml='2'>
            Hi, I'm Ivan Puga.  <br />
            A passionate starter Developer Junior <br />
            from Ecuador. <br />
          </Text>
          <HStack spacing="8" mt='10' ml='2'>
            <Link href='https://github.com/Ivan2201x' isExternal>
              <Image src='githubIcon.png' boxSize='35px' className='transition ease-out duration-300 transform hover:scale-125' />
            </Link>
            <Link href='https://www.linkedin.com/in/ivan-puga-macias/' isExternal>
              <Image src='linkdinIcon.png' boxSize='35px' className='transition ease-out duration-300 transform hover:scale-125' />
            </Link>
            <Link href='https://www.instagram.com/ivan2201.dev/' isExternal>
              <Image src='InstagramIcon.png' boxSize='35px' className='transition ease-out duration-300 transform hover:scale-125' />
            </Link>
            <Link href='https://twitter.com/ipuga_dev' isExternal>
              <Image src='TwitterIcon.png' boxSize='35px' className='transition ease-out duration-300 transform hover:scale-125' />
            </Link>
          </HStack>
        </Stack>
      </Stack>
    </Center>
  )
}
