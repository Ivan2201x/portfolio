import { Box, Text, HStack, Image } from '@chakra-ui/react';
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaGitAlt,
  FaAws,
  FaDocker,
  FaLinux,
  FaServer,
  FaBrain,
  FaRobot,
  FaCommentDots,
  FaCode,
  FaPlug,
  FaCubes,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiNginx,
  SiDigitalocean,
  SiPostgresql,
  SiMysql,
  SiMicrosoftsqlserver,
  SiOracle,
  SiNextcloud,
  SiBootstrap,
} from 'react-icons/si';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionShell from './ui/SectionShell';
import SectionHeading from './ui/SectionHeading';

const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    items: [
      { label: 'React', icon: FaReact, color: '#61dafb' },
      { label: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { label: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { label: 'Node.js', icon: FaNodeJs, color: '#339933' },
      { label: 'TypeScript', icon: SiTypescript, color: '#3178c6' },
      { label: 'Java', icon: FaJava, color: '#007396' },
      { label: 'Oracle JD Edwards', icon: SiOracle, color: '#F80000' },
      { label: 'REST APIs', icon: FaPlug, color: '#2D3748' },
    ],
  },
  {
    title: 'AI',
    items: [
      { label: 'Claude Code', icon: FaCode, color: '#D97706' },
      { label: 'LLM Integration', icon: FaBrain, color: '#805AD5' },
      { label: 'Prompt Engineering', icon: FaCommentDots, color: '#3182CE' },
      { label: 'AI APIs', icon: FaRobot, color: '#38A169' },
    ],
  },
  {
    title: 'Cloud',
    items: [
      { label: 'AWS', icon: FaAws, color: '#FF9900' },
      { label: 'DigitalOcean', icon: SiDigitalocean, color: '#0080FF' },
      { label: 'VPS', icon: FaServer, color: '#4A5568' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { label: 'Oracle', icon: SiOracle, color: '#F80000' },
      { label: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { label: 'SQL Server', icon: SiMicrosoftsqlserver, color: '#CC2927' },
      { label: 'MySQL', icon: SiMysql, color: '#4479A1' },
    ],
  },
  {
    title: 'DevOps & Integrations',
    items: [
      { label: 'Docker', icon: FaDocker, color: '#2496ED' },
      { label: 'Linux', icon: FaLinux, color: '#FCC624' },
      { label: 'Nginx', icon: SiNginx, color: '#009639' },
      { label: 'Git', icon: FaGitAlt, color: '#F05032' },
      { label: 'Odoo', icon: FaCubes, color: '#714B67' },
      { label: 'Nextcloud', icon: SiNextcloud, color: '#0082C9' },
    ],
  },
];

function SkillIcon({ label, icon: Icon, color, src }) {
  if (src) {
    return (
      <Image
        alt={label}
        src={src}
        w={8}
        h={8}
        title={label}
        className="transition ease-out duration-300 transform hover:scale-110"
      />
    );
  }

  return (
    <Box
      as="span"
      title={label}
      aria-label={label}
      display="inline-flex"
      className="transition ease-out duration-300 transform hover:scale-110"
    >
      <Icon size={30} color={color} />
    </Box>
  );
}

export default function Myskills() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <SectionShell id="skills" variant="alt">
      <Box
        ref={ref}
        opacity={isVisible ? 1 : 0}
        transform={isVisible ? 'translateY(0)' : 'translateY(24px)'}
        transition="opacity 0.8s ease-out, transform 0.8s ease-out"
      >
        <SectionHeading title="My Skills" subtitle="Technologies I work with across the stack" />

        <Box display="grid" gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={4}>
          {SKILL_CATEGORIES.map(({ title, items }) => (
            <Box key={title} className="skill-group panel-hover">
              <Text fontWeight="700" fontSize="sm" mb={4} color="slate.700" letterSpacing="0.04em" textTransform="uppercase">
                {title}
              </Text>
              <HStack spacing={4} flexWrap="wrap">
                {items.map(({ label, icon, color, src }) => (
                  <SkillIcon key={label} label={label} icon={icon} color={color} src={src} />
                ))}
              </HStack>
            </Box>
          ))}
        </Box>
      </Box>
    </SectionShell>
  );
}
