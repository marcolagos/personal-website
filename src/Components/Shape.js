import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";

function createStars() {
	let stars = [];
	for (var i = 0; i < 10; i++) {
		var x = Math.floor(Math.random() * 10);
		var y = Math.floor(Math.random() * 10);
		var z = Math.floor(Math.random() * 10);
		stars.push([x, y, z]);
	}
	return stars;
}

const Star = ({ position, color }) => {
	const mesh = useRef(null);
	useFrame(() => (mesh.current.rotation.x += 0.01));
	return (
		<>
			<mesh position={position} ref={mesh}>
				<sphereBufferGeometry attach="geometry" args={[1, 1, 1]} />
				<meshStandardMaterial attach="material" color={color} />
			</mesh>
		</>
	);
};

const stars = createStars().map((cords, i) => (<Star key={i} position={cords} color="white" />));

function SphereCube(props) {
	const mesh = useRef();
	// rotate the box
	useFrame((state, delta) => {
		mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
	});
	// draw the box
	return (
		<mesh {...props} ref={mesh}>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color="#FFAE00" />
		</mesh>
	);
}

const Shape = () => {
	return (
		<div>
			<Canvas dpr={window.devicePixelRatio}>
				<ambientLight />
				<pointLight position={[10, 10, 10]} />
				{/* <SphereCube position={[0, 0, 0]} /> */}
				{stars}
			</Canvas>
		</div>
	);
};

export default Shape;
