import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/global.scss';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: '400',
});

export const metadata = {
  title: 'Plataforma Universitaria',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
