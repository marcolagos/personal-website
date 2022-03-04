import React from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

function ContactName(props) {
  return (
		<div>
			<ul className={"contact-icons"}>
				<li className="contact-icon">
					<Link
						to="/contact"
						className="contact-icon-color contact-icon-link"
						onClick={props.onClickHandlerTrue}
					>
						<AiOutlineArrowLeft />
					</Link>
					<Link
						to="/contact/email"
						className="contact-icon-color contact-icon-link"
						onClick={props.onClickHandlerFalse}
					>
						<AiOutlineArrowRight />
					</Link>
				</li>
			</ul>
		</div>
  );
}

export default ContactName