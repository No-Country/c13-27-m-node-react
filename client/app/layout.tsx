import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/global.scss';
import { Inter } from 'next/font/google';
import { AppProvider } from '../context/userContext';
import { Suspense } from 'react';
import Loading from './loading';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({
  subsets: ['latin'],
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
        <AppProvider>
          <Navbar />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          <ToastContainer />
        </AppProvider>
        <Footer />
      </body>
    </html>
  );
}
