'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/components/ui/avatar'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { Menu } from 'lucide-react'

export function Navbar() {
    const { setTheme } = useTheme()
    const [themeTxt, setThemeText] = useState('Light')

    const toggleTheme = () => {
        if (typeof window !== 'undefined') {
            const currentTheme = localStorage.getItem('theme')
            if (currentTheme === 'dark') {
                setTheme('light')
                setThemeText('Light')
            } else {
                setTheme('dark')
                setThemeText('Dark')
            }
        }
    }

    return (
        <nav
            className={cn(
                'fixed top-4 left-1/2 transform -translate-x-1/2 z-50',
                'bg-white dark:bg-zinc-900/90 backdrop-blur border border-zinc-200 dark:border-zinc-700',
                'rounded-full shadow-md px-6 py-2 flex items-center justify-between gap-4',
                'max-w-fit w-full md:max-w-fit'
            )}
        >
            <div className="flex items-center gap-2">
                <Button asChild variant="ghost" className="text-sm font-medium">
                    <Link href="/">
                        장성주
                        <span className="mx-1 text-sm text-zinc-400 dark:text-zinc-500">|</span>
                        <Avatar>
                            <AvatarImage src="https://avatars.githubusercontent.com/u/102520470?v=4" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </Link>
                </Button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-2">
                <Button asChild variant="ghost" className="text-sm font-medium">
                    <Link href="/">Home</Link>
                </Button>
                <Button asChild variant="ghost" className="text-sm font-medium">
                    <Link href="https://github.com/sungjujjang">GitHub</Link>
                </Button>
                <Button asChild variant="ghost" className="text-sm font-medium">
                    <Link href="/blog">Blog</Link>
                </Button>
                <Button onClick={toggleTheme} variant="outline">
                    {themeTxt} Mode
                </Button>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="w-5 h-5" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                        </SheetHeader>
                        <div className="h-px bg-zinc-200 dark:bg-zinc-700"></div>
                        <div className="mt-4 flex flex-col gap-4">
                            <Link href="/">
                                <Button variant="ghost" className="w-full justify-start">
                                    Home
                                </Button>
                            </Link>
                            <Link href="https://github.com/sungjujjang">
                                <Button variant="ghost" className="w-full justify-start">
                                    GitHub
                                </Button>
                            </Link>
                            <Link href="/blog">
                                <Button variant="ghost" className="w-full justify-start">
                                    Blog
                                </Button>
                            </Link>
                            <div className="h-px bg-zinc-200 dark:bg-zinc-700 my-2"></div>
                            <div className='px-2'>
                                <Button onClick={toggleTheme} variant="outline" className="w-full justify-center">
                                    {themeTxt} Mode
                                </Button>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}
