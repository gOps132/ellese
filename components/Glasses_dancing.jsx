/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 glasses_dancing.glb
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'

export default function Model(props) {
	const group = useRef()
	const { nodes, materials, animations } = useGLTF('/models/glasses_dancing.glb')
	const { camera } = useThree();
	const { actions } = useAnimations(animations, group)
	useFrame(({clock}) => {
		let t = clock.getElapsedTime();
		let a = Math.cos(t);
		let b = Math.sin(t);
		group.current.rotation.y += a * 0.005;
		// control camera orbit
		// camera.rotation.y += a * 0.005;
	});
	useEffect(() => {
		// console.log(actions);
		actions.dance.play();
	});
	return (
		<group ref={group} {...props} dispose={null}>
			<group name="Scene">
				<group name="Armature" rotation={[Math.PI / 2, 0, 0]}>
					<primitive object={nodes.mixamorigHips} />
					<skinnedMesh name="Boy01_Body_Geo" geometry={nodes.Boy01_Body_Geo.geometry} castShadow receiveShadow material={materials.Boy01_Body_MAT1} skeleton={nodes.Boy01_Body_Geo.skeleton} />
					<skinnedMesh name="Boy01_Brows_Geo" geometry={nodes.Boy01_Brows_Geo.geometry} castShadow receiveShadow material={materials.Boy01_Brows_MAT2} skeleton={nodes.Boy01_Brows_Geo.skeleton} />
					<skinnedMesh name="Boy01_Eyes_Geo" geometry={nodes.Boy01_Eyes_Geo.geometry} castShadow receiveShadow material={materials.Boy01_Eyes_MAT2} skeleton={nodes.Boy01_Eyes_Geo.skeleton} />
					<skinnedMesh name="h_Geo" geometry={nodes.h_Geo.geometry} material={materials.Boy01_Mouth_MAT2} castShadow receiveShadow skeleton={nodes.h_Geo.skeleton} />
				</group>
			</group>
		</group>
	)
}

useGLTF.preload('/models/glasses_dancing.glb')
