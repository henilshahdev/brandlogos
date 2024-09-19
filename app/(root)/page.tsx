import { Icons } from "@/components/shared/Icons";
import LandingPage from "@/components/shared/LandingHero";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { features, team } from "@/constants/landing";
import { LinkIcon } from "lucide-react";

import Link from "next/link";
import React from "react";

const page = async () => {
	return (
		<main className="flex-1">
			<section className="wrapper py-12 md:py-24">
				<section className="w-full">
					<div className="grid gap-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
						<div className="lg:col-span-2 flex flex-col justify-center gap-4">
							<h1 className="text-4xl sm:text-5xl text-center md:text-start font-medium tracking-normal">
								The place to find <br /> brand logos
							</h1>
							<p className="max-w-[600px] text-center md:text-start text-muted-foreground md:text-xl">
								Discover a collection of high-quality, lightweight, and customizable brand icons in SVG
								format.
							</p>
							<div className="flex-start gap-6">
								<Button className="mt-6 w-max mx-auto md:mx-0 text-base" size="lg" asChild>
									<Link href="/icons">Icons</Link>
								</Button>
								<Button
									className="mt-6 w-max mx-auto md:mx-0 text-base"
									size="lg"
									variant="outline"
									asChild
								>
									<Link href="/getStarted">Learn More</Link>
								</Button>
							</div>
						</div>
						<div className="lg:col-span-3">
							<LandingPage />
						</div>
					</div>
				</section>
			</section>
			<section className="wrapper flex flex-col gap-12 py-12 md:py-24">
				<div className="max-w-4xl mx-auto flex-center flex-col gap-3 text-center">
					<h1 className="text-3xl md:text-4xl font-medium tracking-normal">
						Own the Code, <br className="md:hidden" /> No More Dependencies
					</h1>
					<p className="text-muted-foreground text-sm md:text-xl">
						Why rely on dependencies if you can own the code? <br className="md:hidden" /> Our icon library
						gives you full access to the source, <br className="md:hidden" /> so you are not tied to endless
						npm install commands.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
					{features.map((card, index) => (
						<div key={index} className="flex flex-col gap-4">
							<Card className="bg-secondary">
								<CardHeader className="flex flex-col gap-4">
									<CardTitle className="font-semibold flex items-center gap-2 tracking-normal">
										{card.icon}
										{card.title}
									</CardTitle>
									<CardDescription className="text-base">{card.description}</CardDescription>
								</CardHeader>
							</Card>
						</div>
					))}
				</div>
			</section>
			<section className="wrapper flex flex-col gap-12 py-12 md:py-24">
				<div className="max-w-4xl mx-auto flex-center flex-col gap-3 text-center">
					<h1 className="text-3xl md:text-4xl font-medium tracking-normal">The Brains behind the Code</h1>
					<p className="text-muted-foreground text-sm md:text-xl">
						Meet the talented team of developers and designers who bring our icon library to life.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
					{team.map((member, index) => (
						<Card className="w-max mx-auto bg-secondary p-6 flex flex-col gap-4" key={index}>
							<div className="flex-center gap-6 items-start">
								<Avatar className="size-16">
									<AvatarImage src={member.avatar} alt={member.name} />
									<AvatarFallback>{member.fallback}</AvatarFallback>
								</Avatar>
								<div className="flex flex-col gap-2">
									<p className="flex-center gap-2">
										<span className="text-xl font-semibold">{member.name}</span>
										<span className="text-sm text-muted-foreground">({member.role})</span>
									</p>
									<div className="flex-start gap-3">
										{member.links.map((link, index) => (
											<Link key={index} href={link.url} className="link">
												{link.platform === "github" ? (
													<Icons.gitHub className="size-5" />
												) : link.platform === "x" ? (
													<Icons.x className="size-5" />
												) : (
													<LinkIcon className="size-5" />
												)}
											</Link>
										))}
									</div>
								</div>
							</div>
						</Card>
					))}
				</div>
			</section>
		</main>
	);
};

export default page;
