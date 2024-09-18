"use client";

import { Button } from "@/components/ui/button";
import { ColorPicker } from "@/components/ui/color-picker";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { demoIcons } from "@/constants/landing";
import { ArrowDownAZ, ArrowUpZA } from "lucide-react";

import React from "react";

const page = () => {
	return (
		<div className="w-full h-full flex flex-col py-3 md:py-6">
			<section className="sticky top-16 z-50 w-full h-full flex-normal gap-6 border-b border-border pb-4 flex-grow-0 bg-background backdrop-blur supports-[backdrop-filter]:bg-background">
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
				<div className="hidden md:grid w-max items-center gap-2.5">
					<Label htmlFor="sortBy">Order</Label>
					<ToggleGroup variant="outline" type="single">
						<ToggleGroupItem value="bold" aria-label="Toggle bold">
							<ArrowDownAZ className="size-6" />
						</ToggleGroupItem>
						<ToggleGroupItem value="italic" aria-label="Toggle italic">
							<ArrowUpZA className="size-6" />
						</ToggleGroupItem>
					</ToggleGroup>
				</div>
				<div className="grid w-max items-center gap-2.5">
					<Label htmlFor="sortBy">Color</Label>
					<ColorPicker className="size-10" value="#000000" onChange={(value) => console.log(value)} />
				</div>
				<div className="grid w-[200px] items-center gap-2.5">
					<Label htmlFor="sortBy">Sizes</Label>
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
			<section className="py-4 md:py-8 h-full grid grid-cols-4 xs:grid-cols-5 sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-10 xl:grid-cols-11 2xl:grid-cols-12 gap-6">
				{demoIcons.map((icon, index) => (
					<Button variant="outline" key={index} className="size-16 sm:size-20 mx-auto">
						<div className="size-9 sm:size-10">{icon}</div>
					</Button>
				))}
			</section>
		</div>
	);
};

export default page;
