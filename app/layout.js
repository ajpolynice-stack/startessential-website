
export const metadata = {
  title: "Start Essential",
  description: "AI-powered business systems",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
