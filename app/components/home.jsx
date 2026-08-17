import { Box, Stack, Text, Link, HStack, Image, Button } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import { useScrollReveal } from '../hooks/useScrollReveal';

const SOCIAL_LINKS = [
  { href: 'https://github.com/Ivan2201x', src: '/githubIcon.png', alt: 'GitHub profile' },
  { href: 'https://www.linkedin.com/in/ivan-puga-macias/', src: '/linkdinIcon.png', alt: 'LinkedIn profile' },
  { href: 'https://www.instagram.com/ivan2201.dev/', src: '/InstagramIcon.png', alt: 'Instagram profile' },
  { href: 'https://twitter.com/ipuga_dev', src: '/TwitterIcon.png', alt: 'Twitter profile' },
];

export default function Home() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <Box
      as="section"
      id="home"
      ref={ref}
      minH={{ base: 'auto', md: '88vh' }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={{ base: 4, md: 8 }}
      py={{ base: 14, md: 20 }}
    >
      <Stack
        direction={{ base: 'column', md: 'row' }}
        alignItems="center"
        spacing={{ base: 10, md: 16 }}
        maxW="72rem"
        w="full"
        opacity={isVisible ? 1 : 0}
        transform={isVisible ? 'translateY(0)' : 'translateY(24px)'}
        transition="opacity 0.8s ease-out, transform 0.8s ease-out"
      >
        <Box position="relative">
          <Box
            position="absolute"
            inset="-8px"
            borderRadius="1.5rem"
            bg="linear-gradient(135deg, rgba(79,70,229,0.25), rgba(129,140,248,0.15))"
            filter="blur(8px)"
          />
          <Image
            alt="Ivan Puga Macias"
            src="/ivanFotoHome.jpg"
            maxW={{ base: '260px', md: '320px' }}
            w="full"
            borderRadius="1.5rem"
            border="3px solid white"
            boxShadow="0 20px 50px rgba(15, 23, 42, 0.12)"
            objectFit="cover"
            position="relative"
          />
        </Box>

        <Stack flex="1" alignItems={{ base: 'center', md: 'flex-start' }} textAlign={{ base: 'center', md: 'left' }} spacing={5}>
          <Text
            fontSize="sm"
            fontWeight="semibold"
            letterSpacing="0.12em"
            textTransform="uppercase"
            color="indigo.600"
          >
            Full Stack Developer
          </Text>
          <Box>
            <Text as="h1" fontSize={{ base: '3xl', md: '5xl' }} fontWeight="800" lineHeight="1.1" color="slate.900">
              Hi, I&apos;m Ivan Puga Macias
            </Text>
            <Text mt={4} color="slate.600" fontSize={{ base: 'lg', md: 'xl' }} maxW="34rem" lineHeight="1.7">
              I build scalable web applications and AI-powered solutions from Ecuador.
            </Text>
          </Box>

          <HStack spacing={3} flexWrap="wrap" justify={{ base: 'center', md: 'flex-start' }}>
            <Button
              as="a"
              href="/IvanPugaCV_en.pdf"
              download="IvanPugaCV_en.pdf"
              leftIcon={<DownloadIcon />}
              colorScheme="purple"
              size="md"
              borderRadius="full"
            >
              CV (English)
            </Button>
            <Button
              as="a"
              href="/IvanPugaCV_es.pdf"
              download="IvanPugaCV_es.pdf"
              leftIcon={<DownloadIcon />}
              colorScheme="purple"
              variant="outline"
              size="md"
              borderRadius="full"
            >
              CV (Spanish)
            </Button>
          </HStack>

          <HStack spacing="6" pt={1}>
            {SOCIAL_LINKS.map(({ href, src, alt }) => (
              <Link key={href} href={href} isExternal aria-label={alt} opacity={0.85} _hover={{ opacity: 1, transform: 'translateY(-2px)' }} transition="all 0.2s">
                <Image
                  alt={alt}
                  src={src}
                  boxSize="34px"
                />
              </Link>
            ))}
          </HStack>
        </Stack>
      </Stack>
    </Box>
  );
}
