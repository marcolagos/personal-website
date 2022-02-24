import React from "react";
import { TailSpin } from "react-loader-spinner";

function Loading() {

    return (
		<div className="loading-screen">
			<TailSpin className="spinner" color="#cc8a39" height={200} width={200} />
		</div>
	);
}

export default Loading;