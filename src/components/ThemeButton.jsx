"use client";

import React, {useEffect, useState} from 'react';
import {useTheme} from "next-themes";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';

export default function ThemeButton({blackBackground = false}) {
    const {systemTheme, theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    const handleClick = () => {
        const newTheme = currentTheme === "dark" ? 'light' : 'dark';
        setTheme(newTheme);
        console.log(`Theme changed to: ${newTheme}`);
    };

    return (
        <button
            onClick={handleClick}
            className={`transition-all duration-100 ${blackBackground ? 'text-white' : 'text-black'}`}>
            <FontAwesomeIcon className={"w-4 h-4 dark:text-yellow-500"}
                             icon={currentTheme === 'dark' ? faSun : faMoon}/>
        </button>
    );
}