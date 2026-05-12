import './globals.css';

export const metadata = {
  title: 'Essential Solutions | AI-Powered Business Systems',
  description: 'AI receptionist, follow-up, CRM, review growth, and appointment automation systems for service businesses.',
  icons: {
    icon: '/es-app-icon.png',
    shortcut: '/es-app-icon.png',
    apple: '/es-app-icon.png'
  },
  openGraph: {
    title: 'Essential Solutions',
    description: 'Stop missing calls. Start booking more customers.',
    images: ['/essential-solutions-gold.png']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
