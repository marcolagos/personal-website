import React from "react";
import {
	Animator,
	ScrollContainer,
	ScrollPage,
	batch,
	Fade,
	FadeIn,
	Move,
	MoveIn,
	MoveOut,
	Sticky,
	StickyIn,
	ZoomIn,
} from "react-scroll-motion";

function TextTransition(props) {
	console.log(props.page);
	return (
		<ScrollPage page={props.page}>
			<Animator animation={props.animation}>
                {props.text}
			</Animator>
		</ScrollPage>
	);
}

export default TextTransition;
