import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<footer className="wrapper py-4">
			<div className="flex-between flex-col md:flex-row gap-4">
				<nav className="flex-end gap-6">
					<Link className="link" href="/">
						License
					</Link>
					<Link className="link" href="/">
						Contribute
					</Link>
					<Link className="link" href="/">
						GitHub
					</Link>
					<Link className="link" href="/">
						X
					</Link>
				</nav>
				<div>
					Made with ❤️ by{" "}
					<Link className="hover:underline" href="https://github.com/henilshahdev">
						Henil Shah
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
