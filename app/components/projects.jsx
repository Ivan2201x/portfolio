import { useState } from 'react';
import {
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Box,
  CardFooter,
  Image,
  VStack,
  HStack,
  IconButton,
  Badge,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaEye, FaBrain, FaJava, FaPlug, FaCubes } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiOracle, SiNextcloud, SiPostgresql } from 'react-icons/si';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionShell from './ui/SectionShell';
import SectionHeading from './ui/SectionHeading';

const PROJECTS = [
  {
    title: 'OPTRAX — AI Security Monitoring System',
    company: 'Iterlab S.A.',
    description: (
      <>
        Full-stack enterprise platform built at Iterlab for real-time security camera monitoring
        with integrated AI. Detects subjects, license plates and crowds; generates automated
        alerts, forensic search and event triage. Includes modules for observation, perception,
        analytics, security enforcement and centralized core management. Built with Node.js,
        TypeScript, React and Next.js, LLM API integration, REST services, PostgreSQL, and
        deployed on AWS with Docker, Linux, Nginx and VPS infrastructure.
      </>
    ),
    image: '/optrax-events.png',
    imageAlt: 'OPTRAX event flow dashboard with AI detections',
    secondaryImage: '/optrax-hub.png',
    secondaryImageAlt: 'OPTRAX core modules dashboard',
    tech: [
      { label: 'React', icon: FaReact, color: '#61dafb' },
      { label: 'Next.js', icon: SiNextdotjs, color: '#000' },
      { label: 'Node.js', icon: FaNodeJs, color: '#339933' },
      { label: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
      { label: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { label: 'REST APIs', icon: FaPlug, color: '#2D3748' },
      { label: 'AWS', icon: FaAws, color: '#FF9900' },
      { label: 'Docker', icon: FaDocker, color: '#2496ED' },
      { label: 'Computer Vision', icon: FaEye, color: '#805AD5' },
      { label: 'LLM Integration', icon: FaBrain, color: '#D69E2E' },
    ],
    featured: true,
  },
  {
    title: 'FYBECA — JDE Migration & Electronic Invoicing',
    company: 'Certifisa S.A. / CoreWare',
    description: (
      <>
        Migration of Oracle JD Edwards systems and adaptation to electronic invoicing regulations
        for FYBECA. Included system migration, regulatory compliance updates and maintenance of
        enterprise billing workflows.
      </>
    ),
    placeholder: 'FYBECA',
    placeholderColor: '#F80000',
    tech: [
      { label: 'Oracle JD Edwards', icon: SiOracle, color: '#F80000' },
      { label: 'Java', icon: FaJava, color: '#007396' },
    ],
  },
  {
    title: 'Odoo ↔ Oracle JD Edwards Integration (INPROEL)',
    company: 'Certifisa S.A. / CoreWare',
    description: (
      <>
        ERP integration between Odoo and Oracle JD Edwards for INPROEL. Automated business
        processes, synchronized data flows between systems and improved operational efficiency
        across the enterprise stack.
      </>
    ),
    placeholder: 'Odoo + JDE',
    placeholderColor: '#714B67',
    tech: [
      { label: 'Odoo', icon: FaCubes, color: '#714B67' },
      { label: 'Oracle JD Edwards', icon: SiOracle, color: '#F80000' },
      { label: 'Java', icon: FaJava, color: '#007396' },
    ],
  },
  {
    title: 'Nextcloud ↔ Oracle JD Edwards Integration',
    company: 'Certifisa S.A.',
    description: (
      <>
        Implementation of document management and file attachment systems by integrating Nextcloud
        with Oracle JD Edwards. Enabled secure document storage linked to enterprise ERP records.
      </>
    ),
    placeholder: 'Nextcloud',
    placeholderColor: '#0082C9',
    tech: [
      { label: 'Nextcloud', icon: SiNextcloud, color: '#0082C9' },
      { label: 'Oracle JD Edwards', icon: SiOracle, color: '#F80000' },
      { label: 'Java', icon: FaJava, color: '#007396' },
    ],
  },
];

function TechIcon({ label, icon: Icon, color, src }) {
  if (src) {
    return (
      <Image
        alt={label}
        src={src}
        w={8}
        h={8}
        title={label}
        className="transition ease-out duration-300 transform hover:scale-125"
      />
    );
  }

  return (
    <Box
      as="span"
      title={label}
      aria-label={label}
      display="inline-flex"
      className="transition ease-out duration-300 transform hover:scale-125"
    >
      <Icon size={32} color={color} />
    </Box>
  );
}

function ProjectVisual({ project }) {
  if (project.image) {
    return (
      <VStack spacing={0} w={{ base: 'full', md: 'auto' }} flexShrink={0}>
        <Image
          alt={project.imageAlt}
          src={project.image}
          objectFit="cover"
          maxH={{ base: '220px', md: project.secondaryImage ? '180px' : '100%' }}
          w={{ base: 'full', md: '340px' }}
        />
        {project.secondaryImage && (
          <Image
            alt={project.secondaryImageAlt}
            src={project.secondaryImage}
            objectFit="cover"
            maxH={{ base: '180px', md: '160px' }}
            w={{ base: 'full', md: '340px' }}
            display={{ base: 'none', sm: 'block' }}
          />
        )}
      </VStack>
    );
  }

  return (
    <Box
      w={{ base: 'full', md: '340px' }}
      minH={{ base: '180px', md: '340px' }}
      flexShrink={0}
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={`linear-gradient(135deg, ${project.placeholderColor}22, ${project.placeholderColor}44)`}
      borderLeft={{ base: 'none', md: '1px solid' }}
      borderTop={{ base: '1px solid', md: 'none' }}
      borderColor="gray.200"
    >
      <Text
        fontSize={{ base: 'xl', md: '2xl' }}
        fontWeight="bold"
        color={project.placeholderColor}
        textAlign="center"
        px={4}
      >
        {project.placeholder}
      </Text>
    </Box>
  );
}

function ProjectCard({ project }) {
  return (
    <Card
      direction={{ base: 'column', md: 'row' }}
      overflow="hidden"
      variant="outline"
      w="full"
      bg="rgba(255,255,255,0.88)"
      borderColor="rgba(79,70,229,0.12)"
      borderRadius="1.25rem"
      boxShadow="0 12px 40px rgba(15, 23, 42, 0.08)"
      minH={{ base: 'auto', md: '360px' }}
    >
      <Stack flex="1" justify="space-between">
        <CardBody>
          <HStack spacing={2} mb={2} flexWrap="wrap">
            {project.featured && (
              <Badge colorScheme="cyan" fontSize="xs">
                Featured Project
              </Badge>
            )}
            {project.company && (
              <Badge colorScheme="gray" fontSize="xs" variant="outline">
                {project.company}
              </Badge>
            )}
          </HStack>
          <Heading size="md" mb={2} color="slate.900">
            {project.title}
          </Heading>
          <Text py="2" color="slate.600" lineHeight="1.7" className="text-justify">
            {project.description}
          </Text>
        </CardBody>
        <CardFooter gap={4} flexWrap="wrap" alignItems="center">
          <Text fontSize="sm" fontWeight="700" color="slate.700">
            Tech Stack
          </Text>
          <HStack spacing={4} flexWrap="wrap">
            {project.tech.map(({ label, icon, color, src }) => (
              <TechIcon key={label} label={label} icon={icon} color={color} src={src} />
            ))}
          </HStack>
        </CardFooter>
      </Stack>

      <ProjectVisual project={project} />
    </Card>
  );
}

export default function Projects() {
  const { ref, isVisible } = useScrollReveal();
  const [current, setCurrent] = useState(0);

  const goTo = (index) => setCurrent(index);
  const prev = () => setCurrent((i) => (i - 1 + PROJECTS.length) % PROJECTS.length);
  const next = () => setCurrent((i) => (i + 1) % PROJECTS.length);

  return (
    <SectionShell id="projects">
      <Box
        ref={ref}
        opacity={isVisible ? 1 : 0}
        transform={isVisible ? 'translateY(0)' : 'translateY(24px)'}
        transition="opacity 0.8s ease-out, transform 0.8s ease-out"
      >
        <SectionHeading title="Projects" subtitle="Selected work across AI, ERP integrations and full-stack development" />

        <Box maxW="60rem" mx="auto">
        <Box position="relative">
          <Box overflow="hidden" borderRadius="md">
            <Box
              display="flex"
              transition="transform 0.5s ease-in-out"
              transform={`translateX(-${current * 100}%)`}
            >
              {PROJECTS.map((project) => (
                <Box key={project.title} flex="0 0 100%" minW="100%">
                  <ProjectCard project={project} />
                </Box>
              ))}
            </Box>
          </Box>

          {PROJECTS.length > 1 && (
            <>
              <IconButton
                icon={<ChevronLeftIcon boxSize={6} />}
                aria-label="Previous project"
                onClick={prev}
                position="absolute"
                left={{ base: 1, md: -4 }}
                top="50%"
                transform="translateY(-50%)"
                zIndex={2}
                colorScheme="purple"
                borderRadius="full"
                size="sm"
                boxShadow="md"
              />
              <IconButton
                icon={<ChevronRightIcon boxSize={6} />}
                aria-label="Next project"
                onClick={next}
                position="absolute"
                right={{ base: 1, md: -4 }}
                top="50%"
                transform="translateY(-50%)"
                zIndex={2}
                colorScheme="purple"
                borderRadius="full"
                size="sm"
                boxShadow="md"
              />
            </>
          )}
        </Box>

        {PROJECTS.length > 1 && (
          <HStack justify="center" spacing={3} mt={6} flexWrap="wrap">
            {PROJECTS.map((project, index) => (
              <Box
                as="button"
                key={project.title}
                aria-label={`Go to project ${index + 1}: ${project.title}`}
                aria-current={index === current ? 'true' : undefined}
                onClick={() => goTo(index)}
                w={index === current ? 3 : 2.5}
                h={index === current ? 3 : 2.5}
                borderRadius="full"
                bg={index === current ? 'purple.500' : 'gray.300'}
                transition="all 0.2s"
                _hover={{ bg: index === current ? 'purple.600' : 'gray.400' }}
              />
            ))}
          </HStack>
        )}
        </Box>
      </Box>
    </SectionShell>
  );
}
