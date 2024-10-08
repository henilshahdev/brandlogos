import { Icons } from "@/components/shared/Icons";
import { ShieldCheck, CircleX, Paintbrush } from "lucide-react";

export const firstRow = [
	<Icons.adidas />,
	<Icons.nike />,
	<Icons.puma />,
	<Icons.reebok />,
	<Icons.uniqlo />,
	<Icons.handm />,
	<Icons.zara />,
];

export const secondRow = [
	<Icons.netflix />,
	<Icons.amazonPrime />,
	<Icons.twitch />,
	<Icons.youtube />,
	<Icons.appleMusic />,
	<Icons.spotify />,
	<Icons.amazonMusic />,
];

export const thirdRow = [
	<Icons.airIndia />,
	<Icons.airCanada />,
	<Icons.airFrance />,
	<Icons.qatarAirways />,
	<Icons.unitedAirlines />,
	<Icons.singaporeAirlines />,
	<Icons.lufthansa />,
];

export const fourthRow = [
	<Icons.npm />,
	<Icons.react />,
	<Icons.tailwind />,
	<Icons.typescript />,
	<Icons.next />,
	<Icons.node />,
	<Icons.express />,
];
export const features = [
	{
		icon: <ShieldCheck className="size-8" />,
		title: "Full Control",
		description: "Copy-Paste the icons directly in your project without worrying about anything else.",
	},
	{
		icon: <CircleX className="size-8" />,
		title: "No Bloat",
		description: "Only include what you need, keeping your project lightweight and efficient.",
	},
	{
		icon: <Paintbrush className="size-8" />,
		title: "Self-Reliant",
		description: "With the code in your hands, you can make changes as you see fit.",
	},
];

export const team = [
	{
		name: "Henil Shah",
		role: "Founder",
		avatar: "https://github.com/henilshahdev.png",
		fallback: "HS",
		alt: "@henilshahdev",
		links: [
			{ platform: "github", url: "https://github.com/henilshahdev" },
			{ platform: "x", url: "https://x.com/henil106" },
		],
	},
	{
		name: "V0",
		role: "Co-Designer",
		avatar: "https://github.com/vercel.png",
		fallback: "V0",
		alt: "@v0",
		links: [{ platform: "site", url: "https://v0.dev/chat" }],
	},
	{
		name: "Cursor",
		role: "Co-Developer",
		avatar: "https://github.com/getcursor.png",
		fallback: "C",
		alt: "@getcursor",
		links: [{ platform: "site", url: "https://www.cursor.com/" }],
	},
];
