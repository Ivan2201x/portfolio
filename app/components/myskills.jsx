import { Flex, VStack, Image, Text, HStack, Card } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
export default function Myskills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        const skillsSectionRect = skillsSection.getBoundingClientRect();
        setIsVisible(skillsSectionRect.top <= window.innerHeight * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Agregar una pequeña demora antes de establecer isVisible en true
    const delayTimer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(delayTimer);
    };
  }, []);

  return (
    <Flex id='skills'>
      <Card
      className='card-container bg-indigo-50'
        overflow='hidden'
        variant='outline'
        ml='35%'
        mt='10'
        boxShadow='0px 4px 6px rgba(0, 0, 0, 0.5)'
        opacity={isVisible ? 1 : 0}
        transition='opacity 1s ease-in-out'
      >
        <VStack spacing="2" p="2" alignItems="center">
          <Text className="font-bold text-xl text-black animate-pulse">My Skills</Text>
          <HStack spacing="10" mt="2">
            <Image alt='javaIcon' className='transition ease-out duration-300 transform hover:scale-125' src='javaIcon.png' w={30} h={30} />
            <Image alt='jsIcon' className='transition ease-out duration-300 transform hover:scale-125' src='jsIcon.png' w={30} h={30} />
            <Image alt='reactIcon' className='transition ease-out duration-300 transform hover:scale-125' src='reactIcon.png' w={30} h={30} />
            <Image alt='nextjsIcon' className='transition ease-out duration-300 transform hover:scale-125' src='nextjsIcon.png' w={30} h={30} />
            <Image alt='nodeIcon' className='transition ease-out duration-300 transform hover:scale-125' src='nodeIcon.png' w={30} h={30} />
            <Image alt='linuxIcon' className='transition ease-out duration-300 transform hover:scale-125' src='linuxIcon.png' w={30} h={30} />
          </HStack>
        </VStack>
      </Card>
    </Flex>
  );
}
