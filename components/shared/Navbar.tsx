"use client";

import { BookHeart, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
	const { theme, setTheme } = useTheme();

	return (
		<header className="sticky top-0 z-50 py-4 wrapper bg-background backdrop-blur supports-[backdrop-filter]:bg-background">
			<div className="flex items-center justify-between">
				<Link className="flex-start gap-2" href="/">
					<BookHeart strokeWidth={2} className="size-8" />
					<p className="text-lg md:text-2xl font-semibold">Brand Logos</p>
				</Link>
				<div className="flex-end gap-6">
					<Link className="link hidden md:block" href="/icons">
						Icons
					</Link>
					<Link className="link hidden md:block" href="/getStarted">
						Get Started
					</Link>
					<Link className="link hidden md:block" href="/license">
						License
					</Link>
					<Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
						<Sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
						<Moon className="hidden h-5 w-5 dark:block" />
						<span className="sr-only">Toggle theme</span>
					</Button>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
