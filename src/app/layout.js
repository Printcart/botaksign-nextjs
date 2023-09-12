import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from 'botak/components/Header/page';
import { nunito, oduda, roboto, robotoRegular } from './fonts';
import './globals.css';
import EmbedScripts from 'botak/components/EmbedScripts';
import FooterServer from 'botak/components/Footer/FooterServer';
config.autoAddCss = false;

export const metadata = {
  title: 'Botak Sign Pte Ltd',
  description: 'Botak Sign Pte Ltd | One Stop Solution For Everything About Printing'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <EmbedScripts />
        <base href="/"></base>
      </head>
      <body
        className={`${nunito.variable} ${oduda.variable}  ${roboto.variable} ${robotoRegular.variable}`}
      >
        <Header />
        {children}
        <FooterServer />
      </body>
    </html>
  );
}
