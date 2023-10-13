'use client'

import {usePathname} from "next/navigation";
import Link from "next/link";

export default function Nav() {
    const pathname = usePathname();

    return (
        <>
            <nav>
                <Link style={pathname === "/" ? {fontWeight: "bold"} : {}} href="/">Home</Link>
            </nav>
            <nav>
                <Link style={pathname === "/lipsum" ? {fontWeight: "bold"} : {}} href="/lipsum">Lorem ipsum</Link>
            </nav>
            <a href="https://github.com/robinlahtinen/test-app-oamk">Source code (Github)</a>
        </>
    );
}
