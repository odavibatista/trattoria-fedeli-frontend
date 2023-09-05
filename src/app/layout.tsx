import './globals.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Trattoria Fedeli',
    description: 'Generated by create next app',
    icons: {
        icon: '/favicon.ico',
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <div>{children}</div>
            </body>
        </html>
    )
}
