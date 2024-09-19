import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/shared/theme-provider";
const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Brand Logos",
	description: "Curated list of brand logos",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body className={`${outfit.className} bg-background text-foreground`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
