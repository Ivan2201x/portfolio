import { Box, Text, Image, Stack } from '@chakra-ui/react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionShell from './ui/SectionShell';
import SectionHeading from './ui/SectionHeading';

export default function Aboutme() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <SectionShell id="aboutme">
      <Box
        ref={ref}
        opacity={isVisible ? 1 : 0}
        transform={isVisible ? 'translateY(0)' : 'translateY(24px)'}
        transition="opacity 0.8s ease-out, transform 0.8s ease-out"
      >
        <SectionHeading title="About Me" subtitle="Who I am and what drives my work" />

        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: 8, lg: 12 }}
          align={{ base: 'center', lg: 'start' }}
          className="panel"
          p={{ base: 6, md: 8 }}
        >
          <Image
            alt="Ivan Puga Macias"
            src="/IvanFoto.png"
            maxW="220px"
            w="full"
            borderRadius="1.25rem"
            border="3px solid white"
            boxShadow="0 16px 40px rgba(15, 23, 42, 0.1)"
            objectFit="cover"
            flexShrink={0}
          />

          <Box color="slate.700" fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.8">
            <Text mb={4}>
              My name is Ivan Jose Puga Macias, a passionate Full Stack Developer from Ecuador.
              I&apos;m committed to expanding my technical skills and achieving excellence in software
              development, with a focus on building efficient and scalable solutions.
            </Text>
            <Text>
              I currently work remotely at Iterlab S.A., developing full-stack applications and
              integrating AI capabilities via LLM APIs. Previously at Certifisa S.A., I specialized
              in Oracle JD Edwards backend development and electronic invoicing systems. I hold a
              Software Engineering degree from Universidad Politécnica Salesiana (2020–2024).
            </Text>
          </Box>
        </Stack>
      </Box>
    </SectionShell>
  );
}
