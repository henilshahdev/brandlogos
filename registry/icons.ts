import { Icons } from "@/components/shared/Icons";
import { Category, type CategoryIcon } from "@/types";

export const categories: string[] = [
	"All",
	"Apparels",
	"Streaming",
	"Programming",
	"Social",
	"Gaming",
	"Food",
	"Technology",
	"Others",
];

export const iconsByCategory: CategoryIcon[] = [
	{
		category: Category.Apparels,
		icons: [
			{ icon: Icons.adidas, name: "Adidas" },
			{ icon: Icons.nike, name: "Nike" },
			{ icon: Icons.puma, name: "Puma" },
			{ icon: Icons.reebok, name: "Reebok" },
			{ icon: Icons.uniqlo, name: "Uniqlo" },
			{ icon: Icons.handm, name: "H&M" },
			{ icon: Icons.zara, name: "Zara" },
			{ icon: Icons.adidas, name: "Adidas" },
		],
	},
	{
		category: Category.Streaming,
		icons: [
			{ icon: Icons.netflix, name: "Netflix" },
			{ icon: Icons.amazonPrime, name: "Amazon Prime" },
			{ icon: Icons.twitch, name: "Twitch" },
			{ icon: Icons.youtube, name: "Youtube" },
			{ icon: Icons.appleMusic, name: "Apple Music" },
			{ icon: Icons.spotify, name: "Spotify" },
			{ icon: Icons.amazonMusic, name: "Amazon Music" },
		],
	},
	{
		category: Category.Programming,
		icons: [
			{ icon: Icons.npm, name: "NPM" },
			{ icon: Icons.react, name: "React" },
			{ icon: Icons.tailwind, name: "Tailwind" },
			{ icon: Icons.typescript, name: "Typescript" },
			{ icon: Icons.next, name: "Next" },
			{ icon: Icons.node, name: "Node" },
			{ icon: Icons.express, name: "Express" },
			{ icon: Icons.dotenv, name: "Dotenv" },
			{ icon: Icons.dotnet, name: "Dotnet" },
			{ icon: Icons.assemblyScript, name: "AssemblyScript" },
			{ icon: Icons.astro, name: "Astro" },
			{ icon: Icons.auth0, name: "Auth0" },
			{ icon: Icons.axios, name: "Axios" },
			{ icon: Icons.babel, name: "Babel" },
			{ icon: Icons.c, name: "C" },
			{ icon: Icons.cPlusPlus, name: "C++" },
			{ icon: Icons.npm, name: "NPM" },
			{ icon: Icons.react, name: "React" },
			{ icon: Icons.tailwind, name: "Tailwind" },
			{ icon: Icons.typescript, name: "Typescript" },
			{ icon: Icons.next, name: "Next" },
			{ icon: Icons.node, name: "Node" },
			{ icon: Icons.express, name: "Express" },
			{ icon: Icons.dotenv, name: "Dotenv" },
			{ icon: Icons.dotnet, name: "Dotnet" },
			{ icon: Icons.assemblyScript, name: "AssemblyScript" },
			{ icon: Icons.astro, name: "Astro" },
			{ icon: Icons.auth0, name: "Auth0" },
			{ icon: Icons.axios, name: "Axios" },
			{ icon: Icons.babel, name: "Babel" },
			{ icon: Icons.c, name: "C" },
			{ icon: Icons.cPlusPlus, name: "C++" },
		],
	},
];
