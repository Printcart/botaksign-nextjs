import './globals.css';
import { Nunito } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/page';
import EmbedScripts from '../components/EmbedScripts';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Botak Sign Pte Ltd',
  description: 'Botak Sign Pte Ltd | One Stop Solution For Everything About Printing',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <EmbedScripts />
      </head>
      <body className={nunito.className}>{children}</body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
