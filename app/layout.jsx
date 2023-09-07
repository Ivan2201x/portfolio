import { Providers } from "./providers";
import './globals.css'


export const metadata = {
  title: 'ipugadev',
  description: 'Portfolio Ivan Puga Macias',
}

export default function RootLayout({children}) {
  return (
    <html lang="en" className='light'>
      <head>
        <link rel="icon" href="/Icon.png" sizes="any" />
      </head>
      <body>
      <Providers>
        { children }
      </Providers>
      </body>
    </html>
  );
}
