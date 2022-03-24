import React from "react";

function Header({ title, comment, to, link }) {
    return (
		<div className="main-header" data-aos="fade-up" data-aos-duration="1000" data-aos-once={true}>
			<h1 className="main-title">{title}</h1>
			<p className="main-comment">
				{comment}
				<a href={to} target="_blank" rel="noreferrer" className="main-link">
					{link}
				</a>
			</p>
		</div>
	);
}

export default Header;