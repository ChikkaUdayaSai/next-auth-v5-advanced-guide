"use client";
import * as React from "react"
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { LoginButton } from '@/components/auth/login-button'
import { LogoutButton } from '@/components/auth/logout-button'
import { UserButton } from "@/components/auth/user-button";
import { Moon, Sun } from "lucide-react"
import { SessionProvider } from 'next-auth/react'
import { Session } from "next-auth/types";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

// Nav bar takes session as a prop, it can either be session or null
// session is a type of Session or null
export const Navbar = ({ session }: { session: Session | null }) => {

    // check if lang is fr or en in storage
    // if not set, set to en
    // we use lang to set the language of the website
    // use react hook to change the variable lang based on dropdown selection

    const [lang, setLang] = React.useState("en");
    const [theme, setTheme] = React.useState("light");

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };





    const pathname = usePathname();
    console.log(session)
    console.log(pathname)
    return (

        <header>

        <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[600px] shadow-sm">
        <div className="flex gap-x-2">

        <div className="flex gap-x-2" id="logo">
        
        <img src="/logo.png" alt="Waicah Logo" className="w-10 h-10"/>

        <Button 
            asChild
            variant={pathname === "/" ? "default" : "outline"}
        >
            <Link href="/">
            Waicah
            </Link>
        </Button>

        </div>

        <Button 
            asChild
            variant={pathname === "/about" ? "default" : "outline"}
        >
            <Link href="/about">
            About
            </Link>
        </Button>

        {/* dropdown for selecting language english and fr, on hover active */}

        
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Language</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={5}>
                <DropdownMenuLabel>Language</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={lang} onValueChange={setLang}>
                    <DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="fr">Français</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>


        </div>

        {/* if session  */}
        {session && (
            <div className="flex gap-x-2">
            <Button 
                asChild
                variant={pathname === "/admin" ? "default" : "outline"}
            >
                <Link href="/admin">
                Admin
                </Link>
            </Button>

            <UserButton />
            <LogoutButton />
            </div>
        )}
            
            {/* if no session */}
            {!session && (
            <LoginButton  asChild>
                <Button variant="outline">
                Log in
                </Button>
            </LoginButton>
            )}

        </nav>

        </header>
    );
};