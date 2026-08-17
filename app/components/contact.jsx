import { Box, Text, Link, Icon, Image } from '@chakra-ui/react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionShell from './ui/SectionShell';
import SectionHeading from './ui/SectionHeading';

const CONTACT_ITEMS = [
  {
    icon: FaPhone,
    label: 'Phone',
    value: '+593 991432632',
    href: 'tel:+593991432632',
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'ipuga2201@gmail.com',
    href: 'mailto:ipuga2201@gmail.com',
  },
  {
    type: 'image',
    src: '/linkdinIcon.png',
    label: 'LinkedIn',
    value: 'Ivan Puga Macias',
    href: 'https://www.linkedin.com/in/ivan-puga-macias/',
  },
];

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <SectionShell id="contact" variant="dark">
      <Box
        ref={ref}
        opacity={isVisible ? 1 : 0}
        transform={isVisible ? 'translateY(0)' : 'translateY(24px)'}
        transition="opacity 0.8s ease-out, transform 0.8s ease-out"
      >
        <SectionHeading
          title="Get in Touch"
          subtitle="Open to new opportunities, collaborations and interesting projects"
        />

        <Box maxW="32rem" mx="auto" display="grid" gap={3}>
          {CONTACT_ITEMS.map(({ icon, type, src, label, value, href }) => (
            <Link
              key={label}
              href={href}
              isExternal={href.startsWith('http')}
              className="contact-tile"
              _hover={{ textDecoration: 'none', color: 'inherit' }}
            >
              {type === 'image' ? (
                <Image alt={label} src={src} boxSize={6} />
              ) : (
                <Box p={2} borderRadius="lg" bg="rgba(99, 102, 241, 0.2)">
                  <Icon as={icon} boxSize={5} color="indigo.200" />
                </Box>
              )}
              <Box>
                <Text fontSize="xs" fontWeight="700" textTransform="uppercase" color="indigo.200">
                  {label}
                </Text>
                <Text fontWeight="600" color="white">
                  {value}
                </Text>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
    </SectionShell>
  );
}
