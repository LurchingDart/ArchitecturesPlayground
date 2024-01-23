"use client";

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import {Button, Tooltip} from '@nextui-org/react';
import { MoonIcon, SunIcon } from './Icons';

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    // Ensure component is mounted before rendering to avoid hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    // Don't render anything until component is mounted
    if (!mounted) return null

    return (
        <div>
            <Tooltip placement="bottom" trigger="hover" content={theme === 'dark' ? 'Light Mode' : 'Dark Mode'} color="primary" showArrow={true} shadow="lg" >
                <Button isIconOnly color="primary" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                    {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                </Button>
            </Tooltip>
        </div>
    )
}

export default ThemeSwitcher;