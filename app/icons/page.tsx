"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { demoIcons } from "@/constants/landing";

const page = () => {
	return (
		<ScrollArea className="w-full h-full">
			<section className="grid grid-cols-4 xs:grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-10 xl:grid-cols-11 2xl:grid-cols-12 gap-6 pb-20">
				{demoIcons.map((icon, index) => (
					<Button variant="outline" key={index} className="size-16 sm:size-20 mx-auto">
						<div className="size-9 sm:size-10">{icon}</div>
					</Button>
				))}
			</section>
		</ScrollArea>
	);
};

export default page;
