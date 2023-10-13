import './style.css'
import type {Metadata} from 'next'
import Link from "next/link";
import {usePathname} from "next/navigation";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
    title: 'Test App (OAMK)',
    description: 'Made for OAMK course.',
}

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html lang="en-US">
            <body>
                <header>
                    <h1>Test App (OAMK)</h1>
                    <p>This is an app for OAMK course. Hosted on Heroku.</p>
                    <Nav/>
                </header>
                <hr/>
                <main>{children}</main>
            </body>
        </html>
    )
}
