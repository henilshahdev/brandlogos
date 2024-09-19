import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="w-full h-full min-h-dvh">
			<Navbar />
			<div className="flex-grow">{children}</div>
			<Footer />
		</div>
	);
}
