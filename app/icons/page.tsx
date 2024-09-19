import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { iconsByCategory } from "@/registry/icons";
import { Separator } from "@/components/ui/separator";

import Link from "next/link";

const page = async () => {
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
								{categoryIcon.icons.map((IconComponent, index) => (
									<Button variant="outline" key={index} className="group size-16 sm:size-20 mx-auto">
										<div className="size-9 sm:size-10 text-muted-foreground group-hover:text-foreground">
											<IconComponent />
										</div>
									</Button>
								))}
							</div>
						</div>{" "}
						<Separator className="w-full h-1" />
					</div>
				))}
			</section>
		</ScrollArea>
	);
};

export default page;
