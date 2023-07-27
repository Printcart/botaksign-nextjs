import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchDataFooterList, fetchDataFooterTitle } from 'botak/api/homepage';
import Footer from './components/Footer/page';
import { nunito, oduda } from './fonts';
import './globals.css';
import MenuItems from './components/Footer/MenuItems';
config.autoAddCss = false;

export const metadata = {
  title: 'Botak Sign Pte Ltd',
  description: 'Botak Sign Pte Ltd | One Stop Solution For Everything About Printing'
};

export default async function RootLayout({ children }) {
  const [dataTitle] = await Promise.all([fetchDataFooterTitle()]);

  return (
    <html lang="en">
      <head>
        {/* <EmbedScripts /> */}
        <base href="/"></base>
      </head>
      <body className={`${nunito.variable} ${oduda.variable}`}>
        {children}
        <Footer dataFooter={{ dataTitle }} />
      </body>
    </html>
  );
}
