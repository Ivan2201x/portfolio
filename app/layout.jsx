import { Providers } from './providers';
import './globals.css';

export const metadata = {
  title: {
    default: 'Ivan Puga Macias | Full Stack Developer',
    template: '%s | Ivan Puga Macias',
  },
  description:
    'Portfolio of Ivan Puga Macias — Full Stack Developer from Ecuador. Back-end developer aspiring to become full stack.',
  keywords: ['Ivan Puga', 'web developer', 'portfolio', 'React', 'Next.js', 'Ecuador'],
  authors: [{ name: 'Ivan Puga Macias' }],
  openGraph: {
    title: 'Ivan Puga Macias | Full Stack Developer',
    description: 'Portfolio of Ivan Puga Macias — Full Stack Developer from Ecuador.',
    siteName: 'Ivan Puga Macias Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/ivan-hero.png',
        width: 1200,
        height: 800,
        alt: 'Ivan Puga Macias',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ivan Puga Macias | Full Stack Developer',
    description: 'Portfolio of Ivan Puga Macias — Full Stack Developer from Ecuador.',
    creator: '@ipuga_dev',
    images: ['/ivan-hero.png'],
  },
  icons: {
    icon: '/Icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body>
        <a href="#home" className="skip-link">
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
