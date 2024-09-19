"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { iconsByCategory } from "@/registry/icons";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const page = async () => {
	const handleCopy = async (svgElement: JSX.Element) => {
		console.log(svgElement);
	};

	return (
		<ScrollArea className="w-full h-full">
			<section className="flex flex-col gap-6">
				{iconsByCategory.map((categoryIcon, index) => (
					<div key={index} className="flex flex-col gap-6">
						<div id={categoryIcon.category} className="flex flex-col gap-3">
							<Link href={`#${categoryIcon.category}`} className="text-2xl font-semibold tracking-wide">
								{categoryIcon.category}
							</Link>
							<div className="grid grid-cols-4 xs:grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-10 xl:grid-cols-11 2xl:grid-cols-12 gap-6">
								{categoryIcon.icons.map((icon, index) => (
									<Dialog key={index}>
										<DialogTrigger className="border rounded-md flex-center group size-16 sm:size-20 mx-auto">
											<div className="size-9 sm:size-10 text-muted-foreground group-hover:text-foreground">
												<icon.icon />
											</div>
										</DialogTrigger>
										<DialogContent className="bg-white dark:bg-black">
											<div className="grid grid-cols-2 gap-12 items-start p-6">
												<div className="flex flex-col gap-4">
													<div className="size-full rounded-lg bg-background overflow-hidden border p-10 ">
														<icon.icon className="size-full" />
													</div>
												</div>
												<div className="flex-between w-full h-full flex-col gap-6">
													<DialogTitle className="text-3xl">{icon.name}</DialogTitle>
													<DialogDescription>
														<Link href={`#${categoryIcon.category}`}>
															<Badge
																className="text-base hover:cursor-pointer px-4"
																variant="secondary"
															>
																{categoryIcon.category}
															</Badge>
														</Link>
													</DialogDescription>
													<Button
														onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
															e.preventDefault();
															handleCopy(<icon.icon />);
														}}
														className="w-full text-base"
														variant="outline"
													>
														Copy SVG
													</Button>
												</div>
											</div>
										</DialogContent>
									</Dialog>
								))}
							</div>
						</div>
						<Separator className="w-full h-1" />
					</div>
				))}
			</section>
		</ScrollArea>
	);
};

export default page;
