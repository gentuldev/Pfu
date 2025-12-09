import type { Metadata } from 'next';
import './globals.css';  // <- This line is KEY for styles

export const metadata: Metadata = {
  title: 'PFU',
  description: 'Streetwear drop 001',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
