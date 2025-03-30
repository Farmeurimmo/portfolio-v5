"use client";

import {ThemeProvider} from "next-themes";
import React, {useEffect, useState} from "react";

export default function ClientThemeProvider({children}) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return <ThemeProvider attribute="data-theme">
        <canvas id={"particleCanvas"} className={"fixed top-0 left-0 -z-10 w-screen h-screen"}/>
        {children}
    </ThemeProvider>;
}