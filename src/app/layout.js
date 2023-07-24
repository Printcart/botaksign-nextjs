import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmbedScripts from './components/EmbedScripts';
import Footer from './components/Footer/page';
import { nunito, oduda } from './fonts';
import './globals.css';
import Header from './components/Header/page';
config.autoAddCss = false;

export const metadata = {
  title: 'Botak Sign Pte Ltd',
  description: 'Botak Sign Pte Ltd | One Stop Solution For Everything About Printing'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <EmbedScripts /> */}
        <base href="/"></base>
      </head>
      <body className={`${nunito.variable} ${oduda.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
