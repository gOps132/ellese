import { use, useEffect, useState } from "react";

import {Canvas, useFrame, useThree} from "@react-three/fiber";

import Link from 'next/link'

import styles from "@/styles/Home.module.css";

export default function Home() {
	return (
		<div>
			<Link href="/you-can-do-this">
				<h1>You Can Do This!</h1>
			</Link>
			<Link href="/you-did-it">
				<h1>You Did It!</h1>
			</Link>
			<Link href="/heart">
				<h1>Heart</h1>
			</Link>
		</div>
	)
}
