import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";
import { ThemeProvider } from "@/components/shared/theme-provider";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
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
					<div className="flex flex-col min-h-[100dvh]">
						<Navbar />
						<div className="flex-1 wrapper">{children}</div>
						<Footer />
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
