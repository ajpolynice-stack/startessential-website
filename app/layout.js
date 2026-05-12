import './globals.css';
import { Inter } from 'next/font/google';

export const metadata = {
  title: 'StartEssential | AI-Powered Business Systems',
  description: 'Stop missing calls, start booking more customers. StartEssential builds AI-powered receptionist, CRM, and automation systems for service businesses.',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
      </body>
    </html>
  );
}