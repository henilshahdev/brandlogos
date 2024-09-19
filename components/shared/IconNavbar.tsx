import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const IconNavbar = () => {
	return (
		<section className="h-16 flex-normal gap-6 py-5 md:py-10">
			<div className="grid w-full max-w-sm items-center gap-2.5">
				<Label htmlFor="brand">Search</Label>
				<Input type="text" id="brand" placeholder="Search by brand" />
			</div>
			<div className="hidden md:grid w-full max-w-xs items-center gap-2.5">
				<Label htmlFor="sortBy">Categories</Label>
				<Select>
					<SelectTrigger className="w-full">
						<SelectValue placeholder="Theme" />
					</SelectTrigger>
					<SelectContent id="sortBy">
						<SelectItem value="light">Light</SelectItem>
						<SelectItem value="dark">Dark</SelectItem>
						<SelectItem value="system">System</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</section>
	);
};

export default IconNavbar;
