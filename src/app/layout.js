import Header from './components/Header/page';
import EmbedScripts from './components/EmbedScripts';
import FooterServer from './components/Footer/FooterServer';
import { nunito, oduda, roboto, robotoRegular } from './fonts';
import { config } from '@fortawesome/fontawesome-svg-core';
import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Providers from 'botak/utils/provider';
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
      <body className={`${nunito.variable} ${oduda.variable}  ${roboto.variable} ${robotoRegular.variable}`}>
        <Providers>
          <Header />
          {children}
          <FooterServer />
        </Providers>
      </body>
    </html>
  );
}
