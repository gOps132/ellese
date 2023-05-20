import { useRef, useEffect, useState } from "react";

import {Canvas, useFrame, useThree} from "@react-three/fiber";

import Confetti from 'confetti-react';

import Text from "@/components/text";

import styles from "@/styles/Home.module.css";
import page_styles from "@/styles/YouDidIt.module.css";

import OrbitControls from "@/components/orbit_controls";

import Star from "@/components/star";
import Dancing from "@/components/Glasses_dancing";
import Cake from "@/components/Cake";

function Bob(props) {
	const group_ref = useRef();
	const [objects, set_objects] = useState();
	useEffect(() => {
		set_objects(group_ref.current.children);
	}, [group_ref]);

	useFrame(({clock}) => {
		let t = clock.getElapsedTime();
		let a = Math.cos(t);
		let b = Math.sin(t);
		group_ref.current.rotation.y += b * 0.001;
		group_ref.current.rotation.x += a * 0.001;
	});

	return (
		<>
			<group ref={group_ref}>
				{props.children}
			</group>
		</>
	)
}

export default function YouDidIt() { 
	const audioDom = useRef();
	let [isPlaying, setIsPlaying] = useState(false);

	const [windowSize, setWindowSize] = useState({
		width: 2000,
		height: 2000,
	});

	useEffect(() => {
		let handleResize = () => {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		window.addEventListener("resize", handleResize);
		handleResize();

		// audioDom.current.play();
		audioDom.current.play().catch((e) => {
			window.addEventListener('click', () => {
				setIsPlaying(!isPlaying);
				audioDom.current.play();
			})
		}, {once:true});

		// Remove event listener on cleanup
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return (
		<div className={styles.scene}>
			<Confetti width={windowSize.width} height={windowSize.height} />
			<Canvas
				shadows
				className={page_styles.canvas}
				camera={{
					// position: [0, 0, 1000]
					position: [0, 0, 100]
				}}
			>
				<OrbitControls
					autoRotate={false}
					enableDamping={true}
					enableZoom={true}
					enablePan={true}
					dampingFactor={0.5}
					maxDistance={1000}
					minDistance={100}
				/>
				{/* <Star stars={2000}/> */}
				<hemisphereLight
					// castShadow
					// skyColor={0xffffff}
					skyColor={0xe580d4}
					// groundColor={0x444444}
					groundColor={0xe580d4}
					intensity={0.5}
					position={[-50,200,100]}
				/>
				<directionalLight 
					castShadow
					color={0xffffff}
					intensity={1}
					position={[0,200,200]}
				/>
				<Text 
					position={[0,40,0]} 
					text={"YOU DID IT, CONGRATULATIONS!"}
				/>
				{!isPlaying ?
					<Text 
						position={[0,-10,10]} 
						text={"Click on me"}
					/> : <></>
				}
				<Bob>
					<Dancing position={[0,-25,0]} scale={0.35}/>
					<Cake position={[0,-65,0]} scale={5}/>
				</Bob>
			</Canvas>
			<div className={styles.player}>
				<audio
					src={"/audio/uptown-girl-compressed.mp3"}
					autoPlay={true}
					ref={audioDom}
				/>
			</div>
		</div>	
	)
}
