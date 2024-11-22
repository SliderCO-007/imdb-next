"use client";

import { MdLightMode, MdDarkMode } from 'react-icons/md';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function DarkModeSwitch() {
    const { theme, setTheme, systemTheme } = useTheme();
    // const [mounted, setMounted] = useState(false);
    // useEffect(() => setMounted(true), []);

    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])
    const currentTheme = theme === 'system' ? systemTheme : theme;
    return (
        <div>
            {isClient && (currentTheme === 'dark' ? (
                <MdLightMode
                    onClick={() => setTheme('light')}
                    className='text-xl cursor-pointer hover:bg-amber-500' />
            ) : (
                <MdDarkMode
                    onClick={() => setTheme('dark')}
                    className='text-xl cursor-pointer hover:bg-amber-500' />
            )
            )
            }
        </div>
    )
}
