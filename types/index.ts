export enum Category {
	All = "All",
	Apparels = "Apparels",
	Streaming = "Streaming",
	Programming = "Programming",
	Social = "Social",
	Gaming = "Gaming",
	Food = "Food",
	Technology = "Technology",
	Others = "Others",
}

export type CategoryIcon = {
	category: Category;
	icons: React.ElementType[];
};
