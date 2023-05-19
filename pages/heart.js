import { use, useEffect, useState } from "react";

import {Canvas, useFrame, useThree} from "@react-three/fiber";
import styles from "@/styles/Home.module.css";

import OrbitControls from "@/components/orbit_controls";

import Star from "@/components/star";
import SpotLight from "@/components/spot_light";

import Model from "@/components/Heart";

import Text from "@/components/text";

export default function Home() {
	return (
		<div className={styles.scene}>
			<Canvas
				shadows
				className={styles.canvas}
				camera={{
					position: [0, 0, 2000]
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
				<ambientLight intensity={0.7} fallback={null}/>
				<SpotLight 
					color={0x800080}
				/>
				<Star stars={20000}/>
				<Text
					position={[0,40,0]} 
					text={"This is for you now Ellese"}
				/>
				
				<Model position={[0,0,0]}/>
				<Text 
					position={[0,-40,0]} 
					text={"Love, Gian"}
				/>
			</Canvas>
		</div>	
	)
}
