import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
 title: { default: 'FLOWBIZ AI — Business operations, intelligently connected', template: '%s | FLOWBIZ AI' },
 description: 'Manage enquiries, automate follow-ups and organise customer operations in one intelligent platform.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
 return <html lang="en"><body>{children}</body></html>;
}
