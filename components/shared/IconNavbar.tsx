import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { categories } from "@/registry/icons";

const IconNavbar = () => {
	return (
		<section className="h-16 flex-normal gap-6 py-5 md:py-10">
			<div className="grid w-full max-w-sm items-center gap-2.5">
				<Label className="text-base text-muted-foreground" htmlFor="brand">
					Search
				</Label>
				<Input className="text-base" type="text" id="brand" placeholder="Search by brand" />
			</div>
			<div className="hidden md:grid w-full max-w-xs items-center gap-2.5">
				<Label className="text-base text-muted-foreground" htmlFor="sortBy">
					Categories
				</Label>
				<Select>
					<SelectTrigger className="w-full text-base">
						<SelectValue placeholder={`Showing ${categories.length} Categories`} />
					</SelectTrigger>
					<SelectContent id="sortBy">
						{categories.map((category: string) => (
							<SelectItem className="text-base" key={category} value={category}>
								{category}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
		</section>
	);
};

export default IconNavbar;
