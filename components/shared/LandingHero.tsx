"use client";

import React from "react";
import Marquee from "../ui/marquee";
import { firstRow, secondRow, thirdRow, fourthRow } from "@/constants/landing";

export default function LandingHero() {
	return (
		<div className="relative flex flex-col items-center justify-center overflow-hidden border rounded-lg md:shadow-xl p-6">
			<div className="flex flex-col gap-12">
				<MarqueeRow row={firstRow} />
				<MarqueeRow row={secondRow} reverse />
				<MarqueeRow row={thirdRow} />
				<MarqueeRow row={fourthRow} reverse />
			</div>
		</div>
	);
}

type MarqueeRowProps = {
	row: React.JSX.Element[];
	reverse?: boolean;
};

const MarqueeRow: React.FC<MarqueeRowProps> = ({ row, reverse = false }) => {
	return (
		<Marquee pauseOnHover className="[--duration:20s]" reverse={reverse}>
			{row.map((icon, index) => (
				<div key={index} className="size-10 mx-6 group glow-icon">
					{icon}
				</div>
			))}
		</Marquee>
	);
};
