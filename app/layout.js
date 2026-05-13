import './globals.css';

export const metadata = {
  title: 'Essential Solutions | AI-Powered Business Systems',
  description: 'AI call handling, CRM, customer messaging, review growth, and appointment automation systems for service businesses.',
  icons: {
    icon: '/es-app-icon.png',
    shortcut: '/es-app-icon.png',
    apple: '/es-app-icon.png'
  },
  openGraph: {
    title: 'Essential Solutions',
    description: 'Answer faster. Follow up automatically. Book more customers.',
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
