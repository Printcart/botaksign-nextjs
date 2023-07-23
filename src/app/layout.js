import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/Footer/page';
import Header from './component/Header/page';
import { nunito, oduda } from './fonts';
import './globals.css';
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
      </head>
      <body className={`${nunito.variable} ${oduda.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
