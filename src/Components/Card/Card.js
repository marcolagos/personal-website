import React from "react";
import Tilt from "react-parallax-tilt";

function Card(props) {
    return (
		<Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
			<div className="card-wrapper">
				<div className="card-image" background={props.imgUrl} />
				<div className="card-text-wrapper">
					<span className="card-text-date">{props.date} days ago</span>
					<h2 className="card-text-title">{props.title}</h2>
					<p className="card-text-body">
						Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod
						deserunt eligendi dolor
					</p>
				</div>
				<div className="card-stat-wrapper">
					<div className="card-stats">
						<a className="link-text" href="#">
							{props.linkA}
						</a>
					</div>
					<div className="card-stats">
						<a className="link-text" href="#">
							{props.linkB}
						</a>
					</div>
				</div>
			</div>
		</Tilt>
	);
}

export default Card;
