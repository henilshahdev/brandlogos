import Footer from "@/components/shared/Footer";
import IconNavbar from "@/components/shared/IconNavbar";
import Navbar from "@/components/shared/Navbar";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex flex-col gap-4 h-screen overflow-hidden">
			<Navbar />
			<div className="flex-grow flex flex-col gap-8 overflow-hidden wrapper">
				<IconNavbar />
				{children}
			</div>
			<Footer />
		</div>
	);
}
