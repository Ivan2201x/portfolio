import { Box, Text, Badge, List, ListItem, ListIcon, Icon } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import { FaGraduationCap } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionShell from './ui/SectionShell';
import SectionHeading from './ui/SectionHeading';

const EXPERIENCES = [
  {
    company: 'Iterlab S.A.',
    role: 'Software Developer (Remote)',
    period: 'Present',
    current: true,
    highlights: [
      'Full-stack development with Node.js, TypeScript and React.',
      'Design and integration of AI features through LLM APIs.',
      'Development of AI-assisted workflows to automate business processes.',
      'Building REST APIs consumed by AI services and web applications.',
      'Deployment on AWS (S3, Lambda, CloudFront) and Linux server management with Nginx and VPS.',
    ],
  },
  {
    company: 'Certifisa S.A.',
    role: 'Software Developer (Remote)',
    period: '2022 – 2024',
    current: false,
    highlights: [
      'Backend development with Oracle JD Edwards (Java).',
      'Development of electronic invoicing modules.',
      'Implementation of new features and system improvements.',
      'Bug fixes and maintenance of enterprise applications.',
      'ERP integrations: Odoo, Nextcloud and JDE system migrations.',
    ],
  },
];

const EDUCATION = {
  institution: 'Universidad Politécnica Salesiana',
  degree: 'Software Engineering',
  period: '2020 – 2024',
};

export default function Experience() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <SectionShell id="experience" variant="alt">
      <Box
        ref={ref}
        opacity={isVisible ? 1 : 0}
        transform={isVisible ? 'translateY(0)' : 'translateY(24px)'}
        transition="opacity 0.8s ease-out, transform 0.8s ease-out"
      >
        <SectionHeading title="Experience" subtitle="Professional journey and key contributions" />

        <Box className="timeline" maxW="48rem" mx="auto" mb={10}>
          {EXPERIENCES.map((exp) => (
            <Box key={exp.company} className="timeline-item">
              <Box display="flex" flexWrap="wrap" justifyContent="space-between" alignItems="start" gap={3} mb={3}>
                <Box>
                  <Text fontSize="xl" fontWeight="700" color="slate.900">
                    {exp.company}
                  </Text>
                  <Text fontWeight="600" color="indigo.600" mt={1}>
                    {exp.role}
                  </Text>
                </Box>
                <Badge
                  colorScheme={exp.current ? 'green' : 'purple'}
                  variant="subtle"
                  px={3}
                  py={1}
                  borderRadius="full"
                  fontSize="xs"
                >
                  {exp.period}
                </Badge>
              </Box>
              <List spacing={2}>
                {exp.highlights.map((item) => (
                  <ListItem key={item} display="flex" alignItems="start" color="slate.600" lineHeight="1.7">
                    <ListIcon as={MdCheckCircle} color="indigo.500" mt={1} flexShrink={0} />
                    {item}
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Box>

        <Box className="panel" p={{ base: 5, md: 6 }} maxW="48rem" mx="auto" display="flex" gap={4} alignItems="start">
          <Icon as={FaGraduationCap} boxSize={7} color="indigo.500" mt={1} flexShrink={0} />
          <Box>
            <Text fontSize="sm" fontWeight="700" letterSpacing="0.08em" textTransform="uppercase" color="slate.500" mb={1}>
              Education
            </Text>
            <Text fontSize="lg" fontWeight="700" color="slate.900">
              {EDUCATION.institution}
            </Text>
            <Text fontWeight="600" color="slate.700" mt={1}>
              {EDUCATION.degree}
            </Text>
            <Text color="slate.500" mt={2}>
              {EDUCATION.period}
            </Text>
          </Box>
        </Box>
      </Box>
    </SectionShell>
  );
}
