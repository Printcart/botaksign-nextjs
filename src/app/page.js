import { Nunito } from 'next/font/google';
import './globals.css';
const nunito = Nunito({ subsets: ['latin'] });

export default function Home() {
  return <main className={nunito.className}></main>;
}
